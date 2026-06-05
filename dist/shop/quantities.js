export const STOCK_CAPTURE_UNIT_CHOICES = [
    { label: 'Unidad', value: 'unit' },
    { label: 'Stack', value: 'stack' },
    { label: 'Cofre', value: 'chest' },
    { label: 'Cofre doble', value: 'double_chest' },
];
export const PRESENTATION_TYPE_CHOICES = [
    { label: 'Unidad', value: 'unit' },
    { label: 'Stack', value: 'stack' },
    { label: 'Cofre', value: 'chest' },
    { label: 'Cofre doble', value: 'double_chest' },
    { label: 'Personalizada', value: 'custom' },
];
export function normalizeStackSize(value) {
    return value > 0 ? Math.floor(value) : 1;
}
function getContainerMultiplier(unit) {
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
export function convertCaptureQuantityToBase(quantity, unit, stackSize) {
    const normalizedStackSize = normalizeStackSize(stackSize);
    if (unit === 'unit') {
        return quantity;
    }
    return quantity * normalizedStackSize * getContainerMultiplier(unit);
}
export function resolvePresentationQuantity(params) {
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
export function resolvePresentationTypeName(presentationType) {
    switch (presentationType) {
        case 'unit': return 'Unidad';
        case 'stack': return 'Stack';
        case 'chest': return 'Cofre';
        case 'double_chest': return 'Cofre doble';
        case 'custom':
        default: return 'Lote';
    }
}
export function resolvePresentationLabel(params) {
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
export function formatCaptureInput(params) {
    const captureLabels = {
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
export function hasProductInventoryDefinition(product) {
    return product.productType === 'service'
        || !!product.baseMaterialId
        || (product.components?.length ?? 0) > 0;
}
//# sourceMappingURL=quantities.js.map