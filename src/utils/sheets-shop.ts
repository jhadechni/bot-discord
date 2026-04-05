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
  materiales:  'Materiales',
  productos:   'Productos',
  componentes: 'Componentes',
  descuentos:  'Descuentos',
  inventario:  'Inventario',
  ventas:      'Ventas',
  pedidos:     'Pedidos',
} as const;

export type ShopTab = keyof typeof SHOP_TABS;

export const SHOP_HEADERS: Record<ShopTab, string[]> = {
  categorias:  ['Clave Categoría', 'Categoría', 'Imagen Categoría', 'Clave Subcategoría', 'Subcategoría', 'Imagen Subcategoría'],
  materiales:  ['Material', 'Unidad visual', 'Stack Max', 'Activo'],
  productos:   ['Nombre', 'Tipo', 'Categoría', 'Subcategoría', 'Precio ($)', 'Material Base', 'Presentación', 'Cantidad Base', 'Etiqueta Presentación', 'Descripción', 'Activo'],
  componentes: ['Producto', 'Material', 'Cantidad Base'],
  descuentos:  ['ID', 'Nombre', 'Tipo Política', 'Producto', 'Cantidad Mínima', 'Scope', 'Tipo Descuento', 'Valor', 'Prioridad', 'Inicio', 'Fin', 'Activo', 'Descripción'],
  inventario:  ['Material', 'Unidad visual', 'Stack Max', 'Stock Base', 'Reservado Base', 'Disponible Base', 'Alerta Mínima'],
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
function makeValidationRange(sheetId: number, columnIndex: number) {
  return {
    sheetId,
    startRowIndex: 1,
    endRowIndex: 1000,
    startColumnIndex: columnIndex,
    endColumnIndex: columnIndex + 1,
  };
}

function makeListValidationRequest(
  sheetId: number,
  columnIndex: number,
  values: string[],
): sheets_v4.Schema$Request {
  return {
    setDataValidation: {
      range: makeValidationRange(sheetId, columnIndex),
      rule: {
        condition:    { type: 'ONE_OF_LIST', values: values.map(value => ({ userEnteredValue: value })) },
        showCustomUi: true,
        strict:       false,
      },
    },
  };
}

function makeRangeValidationRequest(
  targetSheetId: number,
  targetColumnIndex: number,
  rangeRef: string,
): sheets_v4.Schema$Request {
  return {
    setDataValidation: {
      range: makeValidationRange(targetSheetId, targetColumnIndex),
      rule: {
        condition:    { type: 'ONE_OF_RANGE', values: [{ userEnteredValue: `=${rangeRef}` }] },
        showCustomUi: true,
        strict:       false,
      },
    },
  };
}

async function getSheetIds(
  api: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
): Promise<Record<string, number | null>> {
  const meta = await api.spreadsheets.get({ spreadsheetId, fields: 'sheets.properties' });
  const sheets = meta.data.sheets ?? [];

  return Object.fromEntries(
    Object.values(SHOP_TABS).map(name => [
      name,
      sheets.find(sheet => sheet.properties?.title === name)?.properties?.sheetId ?? null,
    ]),
  );
}

export async function applyMaterialesDropdowns(): Promise<void> {
  const auth = await getAuth();
  const api = google.sheets({ version: 'v4', auth });
  const id = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS.materiales);

  const sheetIds = await getSheetIds(api, id);
  const materialesSheetId = sheetIds[SHOP_TABS.materiales] ?? 0;

  await api.spreadsheets.batchUpdate({
    spreadsheetId: id,
    requestBody: {
      requests: [
        makeListValidationRequest(materialesSheetId, 2, ['1', '16', '64']),
        makeListValidationRequest(materialesSheetId, 3, ['TRUE', 'FALSE']),
      ],
    },
  });
}

export async function applyProductosDropdowns(
  categoryKeys:    string[],
  subcategoryKeys: string[],
): Promise<void> {
  const auth  = await getAuth();
  const api   = google.sheets({ version: 'v4', auth });
  const id    = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS.productos);

  const sheetIds = await getSheetIds(api, id);
  const productosSheetId = sheetIds[SHOP_TABS.productos] ?? 0;
  const categoriasSheetId = sheetIds[SHOP_TABS.categorias];
  const materialesSheetId = sheetIds[SHOP_TABS.materiales];

  // Si el tab Categorías existe, usamos referencias a rango para que sea dinámico.
  // Si no, caemos en lista estática como respaldo.
  const totalRows = Math.max(categoryKeys.length, subcategoryKeys.length, 1) + 1; // +1 por la cabecera

  const requests: sheets_v4.Schema$Request[] = [
    makeListValidationRequest(productosSheetId, 1, ['material', 'kit', 'servicio']),
    makeListValidationRequest(productosSheetId, 6, ['unidad', 'stack', 'cofre', 'cofre_doble', 'personalizada']),
    makeListValidationRequest(productosSheetId, 10, ['TRUE', 'FALSE']),
  ];

  if (categoriasSheetId !== null) {
    requests.push(
      makeRangeValidationRequest(productosSheetId, 2, `'${SHOP_TABS.categorias}'!A2:A${totalRows}`),
      makeRangeValidationRequest(productosSheetId, 3, `'${SHOP_TABS.categorias}'!D2:D${totalRows}`),
    );
  } else {
    requests.push(
      makeListValidationRequest(productosSheetId, 2, categoryKeys),
      makeListValidationRequest(productosSheetId, 3, subcategoryKeys),
    );
  }

  if (materialesSheetId !== null) {
    requests.push(
      makeRangeValidationRequest(productosSheetId, 5, `'${SHOP_TABS.materiales}'!A2:A1000`),
    );
  }

  await api.spreadsheets.batchUpdate({
    spreadsheetId: id,
    requestBody:   {
      requests,
    },
  });
}

export async function applyDescuentosDropdowns(): Promise<void> {
  const auth = await getAuth();
  const api = google.sheets({ version: 'v4', auth });
  const id = getSpreadsheetId();

  await ensureTab(api, id, SHOP_TABS.descuentos);

  const sheetIds = await getSheetIds(api, id);
  const descuentosSheetId = sheetIds[SHOP_TABS.descuentos] ?? 0;
  const productosSheetId = sheetIds[SHOP_TABS.productos];

  const requests: sheets_v4.Schema$Request[] = [
    makeListValidationRequest(descuentosSheetId, 2, ['seasonal', 'volume']),
    makeListValidationRequest(descuentosSheetId, 5, ['order', 'item']),
    makeListValidationRequest(descuentosSheetId, 6, ['percent', 'fixed']),
    makeListValidationRequest(descuentosSheetId, 11, ['TRUE', 'FALSE']),
  ];

  if (productosSheetId !== null) {
    requests.push(
      makeRangeValidationRequest(descuentosSheetId, 3, `'${SHOP_TABS.productos}'!A2:A1000`),
    );
  }

  await api.spreadsheets.batchUpdate({
    spreadsheetId: id,
    requestBody: {
      requests,
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
