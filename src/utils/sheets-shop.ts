import { google, type sheets_v4 } from 'googleapis';
import { readFile } from 'fs/promises';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuth() {
  const credPath =
    process.env.GOOGLE_CREDENTIALS_FILE ??
    path.resolve(process.cwd(), 'credentials', 'google.json');
  const raw = await readFile(credPath, 'utf-8');
  return new google.auth.GoogleAuth({
    credentials: JSON.parse(raw) as object,
    scopes:      SCOPES,
  });
}

function getSpreadsheetId(): string {
  const id = process.env.GOOGLE_SHEETS_ID;
  if (!id) throw new Error('GOOGLE_SHEETS_ID no configurado en .env');
  return id;
}

// ── Nombres de tabs y cabeceras ───────────────────────────────────────────────

export const SHOP_TABS = {
  categorias:  'Categorías',
  productos:   'Productos',
  componentes: 'Componentes',
  descuentos:  'Descuentos',
  inventario:  'Inventario',
  ventas:      'Ventas',
  pedidos:     'Pedidos',
} as const;

export type ShopTab = keyof typeof SHOP_TABS;

export const SHOP_HEADERS: Record<ShopTab, string[]> = {
  categorias:  ['Clave Categoría', 'Categoría', 'Clave Subcategoría', 'Subcategoría'],
  productos:   ['Nombre', 'Tipo', 'Categoría', 'Subcategoría', 'Precio ($)', 'Descripción', 'Activo'],
  componentes: ['Producto', 'Material', 'Cantidad'],
  descuentos:  ['ID', 'Nombre', 'Tipo Política', 'Producto', 'Cantidad Mínima', 'Scope', 'Tipo Descuento', 'Valor', 'Prioridad', 'Inicio', 'Fin', 'Activo', 'Descripción'],
  inventario:  ['Material', 'Unidad', 'Stock Total', 'Reservado', 'Disponible', 'Alerta Mínima'],
  ventas:      ['Fecha', 'Código', 'Cliente (Discord)', 'Productos', 'Total ($)'],
  pedidos:     ['Código', 'Estado', 'Cliente', 'Productos', 'Total ($)', 'Creado'],
};

// ── Primitivas de Sheets ──────────────────────────────────────────────────────

/**
 * Crea la pestaña si no existe en el spreadsheet.
 * Si ya existe, la llamada a addSheet falla silenciosamente.
 */
async function ensureTab(
  api:           ReturnType<typeof google.sheets>,
  spreadsheetId: string,
  tabName:       string,
): Promise<void> {
  try {
    await api.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests: [{ addSheet: { properties: { title: tabName } } }] },
    });
  } catch {
    // La pestaña ya existe — ignorar el error
  }
}

/**
 * Borra el tab completo y escribe cabecera + filas desde A1.
 * Úsalo para exportaciones completas (productos, inventario, pedidos, ventas completas).
 */
export async function writeTab(tab: ShopTab, dataRows: string[][]): Promise<void> {
  const auth  = await getAuth();
  const api   = google.sheets({ version: 'v4', auth });
  const id    = getSpreadsheetId();
  const name  = SHOP_TABS[tab];

  await ensureTab(api, id, name);
  await api.spreadsheets.values.clear({ spreadsheetId: id, range: name });

  const rows = [SHOP_HEADERS[tab], ...dataRows];
  await api.spreadsheets.values.update({
    spreadsheetId:    id,
    range:            `${name}!A1`,
    valueInputOption: 'USER_ENTERED',
    requestBody:      { values: rows },
  });
}

/**
 * Agrega una sola fila al final del tab sin tocar las existentes.
 * Úsalo para el append automático de ventas.
 */
export async function appendRow(tab: ShopTab, row: string[]): Promise<void> {
  const auth = await getAuth();
  const api  = google.sheets({ version: 'v4', auth });
  const id   = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS[tab]);
  await api.spreadsheets.values.append({
    spreadsheetId:    id,
    range:            `${SHOP_TABS[tab]}!A:A`,
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody:      { values: [row] },
  });
}

/**
 * Aplica dropdown de validación a las columnas Categoría (C) y Subcategoría (D)
 * del tab Productos, referenciando directamente el tab Categorías como fuente.
 * Si se actualiza la taxonomía y se re-exporta Categorías, los dropdowns reflejan
 * los nuevos valores automáticamente sin necesidad de hardcodear las listas.
 */
export async function applyProductosDropdowns(
  categoryKeys:    string[],
  subcategoryKeys: string[],
): Promise<void> {
  const auth  = await getAuth();
  const api   = google.sheets({ version: 'v4', auth });
  const id    = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS.productos);

  // Obtener sheetIds numéricos de Productos y Categorías
  const meta = await api.spreadsheets.get({ spreadsheetId: id, fields: 'sheets.properties' });
  const sheets = meta.data.sheets ?? [];

  const productosSheetId  = sheets.find(s => s.properties?.title === SHOP_TABS.productos)?.properties?.sheetId  ?? 0;
  const categoriasSheetId = sheets.find(s => s.properties?.title === SHOP_TABS.categorias)?.properties?.sheetId ?? null;

  // Si el tab Categorías existe, usamos referencias a rango para que sea dinámico.
  // Si no, caemos en lista estática como respaldo.
  const totalRows = Math.max(categoryKeys.length, subcategoryKeys.length) + 1; // +1 por la cabecera

  function makeRangeValidation(
    productosCol: number,   // columna en Productos (0-indexed)
    sourceCol:    number,   // columna en Categorías (0-indexed: 0=claveCateg, 2=claveSub)
    staticValues: string[], // fallback si no existe el tab Categorías
  ): sheets_v4.Schema$Request {
    const range = {
      sheetId:          productosSheetId,
      startRowIndex:    1,
      endRowIndex:      1000,
      startColumnIndex: productosCol,
      endColumnIndex:   productosCol + 1,
    };

    if (categoriasSheetId !== null) {
      // ONE_OF_RANGE referencia el tab Categorías directamente
      const colLetter = sourceCol === 0 ? 'A' : 'C';
      const rangeRef  = `'${SHOP_TABS.categorias}'!${colLetter}2:${colLetter}${totalRows}`;
      return {
        setDataValidation: {
          range,
          rule: {
            condition:    { type: 'ONE_OF_RANGE', values: [{ userEnteredValue: `=${rangeRef}` }] },
            showCustomUi: true,
            strict:       false,
          },
        },
      };
    }

    // Fallback: lista estática
    return {
      setDataValidation: {
        range,
        rule: {
          condition:    { type: 'ONE_OF_LIST', values: staticValues.map(v => ({ userEnteredValue: v })) },
          showCustomUi: true,
          strict:       false,
        },
      },
    };
  }

  await api.spreadsheets.batchUpdate({
    spreadsheetId: id,
    requestBody:   {
      requests: [
        makeRangeValidation(2, 0, categoryKeys),    // columna C → clave categoría
        makeRangeValidation(3, 2, subcategoryKeys), // columna D → clave subcategoría
      ],
    },
  });
}

/**
 * Lee todas las filas de un tab y devuelve los datos sin la fila de cabecera.
 */
export async function readTab(tab: ShopTab): Promise<string[][]> {
  const auth = await getAuth();
  const api  = google.sheets({ version: 'v4', auth });
  const id   = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS[tab]);
  const res  = await api.spreadsheets.values.get({
    spreadsheetId: id,
    range:         SHOP_TABS[tab],
  });

  const rows = (res.data.values as string[][] | null | undefined) ?? [];
  return rows.length > 1 ? rows.slice(1) : [];
}
