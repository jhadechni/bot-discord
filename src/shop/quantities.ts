export const STOCK_CAPTURE_UNIT_CHOICES = [
  { label: 'Unidad', value: 'unit' },
  { label: 'Stack', value: 'stack' },
  { label: 'Cofre', value: 'chest' },
  { label: 'Cofre doble', value: 'double_chest' },
] as const;

export const PRESENTATION_TYPE_CHOICES = [
  { label: 'Unidad', value: 'unit' },
  { label: 'Stack', value: 'stack' },
  { label: 'Cofre', value: 'chest' },
  { label: 'Cofre doble', value: 'double_chest' },
  { label: 'Personalizada', value: 'custom' },
] as const;

export type StockCaptureUnit = typeof STOCK_CAPTURE_UNIT_CHOICES[number]['value'];
export type PresentationType = typeof PRESENTATION_TYPE_CHOICES[number]['value'];

export function normalizeStackSize(value: number): number {
  return value > 0 ? Math.floor(value) : 1;
}

function getContainerMultiplier(unit: StockCaptureUnit | PresentationType): number {
  switch (unit) {
    case 'unit':
      return 1;
    case 'stack':
      return 1;
    case 'chest':
      return 27;
    case 'double_chest':
      return 54;
    case 'custom':
    default:
      return 1;
  }
}

export function convertCaptureQuantityToBase(
  quantity: number,
  unit: StockCaptureUnit,
  stackSize: number,
): number {
  const normalizedStackSize = normalizeStackSize(stackSize);

  if (unit === 'unit') {
    return quantity;
  }

  return quantity * normalizedStackSize * getContainerMultiplier(unit);
}

export function resolvePresentationQuantity(params: {
  customQuantity?: number | null;
  presentationType: PresentationType;
  stackSize: number;
}): number {
  const normalizedStackSize = normalizeStackSize(params.stackSize);

  switch (params.presentationType) {
    case 'unit':
      return 1;
    case 'stack':
      return normalizedStackSize;
    case 'chest':
      return normalizedStackSize * 27;
    case 'double_chest':
      return normalizedStackSize * 54;
    case 'custom':
      if (!params.customQuantity || params.customQuantity < 1) {
        throw new Error('La presentación personalizada requiere una cantidad base mayor a 0.');
      }
      return params.customQuantity;
    default:
      return params.customQuantity ?? 1;
  }
}

export function resolvePresentationTypeName(presentationType: PresentationType): string {
  switch (presentationType) {
    case 'unit':         return 'Unidad';
    case 'stack':        return 'Stack';
    case 'chest':        return 'Cofre';
    case 'double_chest': return 'Cofre doble';
    case 'custom':
    default:             return 'Lote';
  }
}

export function resolvePresentationLabel(params: {
  presentationQuantity: number;
  presentationType: PresentationType;
  stackSize: number;
}): string {
  const normalizedStackSize = normalizeStackSize(params.stackSize);

  switch (params.presentationType) {
    case 'unit':
      return 'Unidad';
    case 'stack':
      return `Stack x${normalizedStackSize}`;
    case 'chest':
      return `Cofre x${normalizedStackSize * 27}`;
    case 'double_chest':
      return `Cofre doble x${normalizedStackSize * 54}`;
    case 'custom':
    default:
      return `Lote x${params.presentationQuantity}`;
  }
}

export function formatCaptureInput(params: {
  baseQuantity: number;
  captureQuantity: number;
  captureUnit: StockCaptureUnit;
  unitLabel: string;
}): string {
  const captureLabels: Record<StockCaptureUnit, string> = {
    unit: 'unidad',
    stack: 'stack',
    chest: 'cofre',
    double_chest: 'cofre doble',
  };

  if (params.captureUnit === 'unit') {
    return `${params.baseQuantity} ${params.unitLabel}`;
  }

  return `${params.captureQuantity} ${captureLabels[params.captureUnit]}${params.captureQuantity === 1 ? '' : 's'} = ${params.baseQuantity} ${params.unitLabel}`;
}

export function hasProductInventoryDefinition(product: {
  baseMaterialId?: string | null;
  components?: { length: number } | null;
  productType: string;
}): boolean {
  return product.productType === 'service'
    || !!product.baseMaterialId
    || (product.components?.length ?? 0) > 0;
}
