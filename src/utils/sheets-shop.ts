import { google } from 'googleapis';
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
  productos:  'Productos',
  inventario: 'Inventario',
  ventas:     'Ventas',
  pedidos:    'Pedidos',
} as const;

export type ShopTab = keyof typeof SHOP_TABS;

export const SHOP_HEADERS: Record<ShopTab, string[]> = {
  productos:  ['Nombre', 'Tipo', 'Precio ($)', 'Descripción', 'Activo'],
  inventario: ['Material', 'Unidad', 'Stock Total', 'Reservado', 'Disponible', 'Alerta Mínima'],
  ventas:     ['Fecha', 'Código', 'Cliente (Discord)', 'Productos', 'Total ($)'],
  pedidos:    ['Código', 'Estado', 'Cliente', 'Productos', 'Total ($)', 'Creado'],
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
