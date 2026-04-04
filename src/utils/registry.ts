import { google } from 'googleapis';
import { readFile } from 'fs/promises';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function getAuth() {
  const credPath = process.env.GOOGLE_CREDENTIALS_FILE ?? path.resolve(process.cwd(), 'credentials', 'google.json');
  const raw = await readFile(credPath, 'utf-8');
  const credentials = JSON.parse(raw) as object;

  return new google.auth.GoogleAuth({ credentials, scopes: SCOPES });
}

export interface MemberEntry {
  mcUsername: string;
  alias:      string;
  discord:    string;
  country:    string;
  notes:      string;
}

export async function appendMember(entry: MemberEntry): Promise<void> {
  const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
  if (!spreadsheetId) throw new Error('GOOGLE_SHEETS_ID no está configurado en el .env');

  const auth  = await getAuth();
  const sheets = google.sheets({ version: 'v4', auth });

  const fecha = new Date().toLocaleDateString('es-ES', {
    year:  'numeric',
    month: '2-digit',
    day:   '2-digit',
  });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range:            'A:A',           // Google Sheets detecta la última fila usada automáticamente
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',   // Siempre inserta una fila nueva al final, sin sobrescribir
    requestBody: {
      values: [[
        entry.mcUsername,
        entry.alias   || '—',
        entry.discord,
        'Aquaris',
        fecha,
        entry.country || '—',
        entry.notes   || '—',
        'Activo',
      ]],
    },
  });
}
