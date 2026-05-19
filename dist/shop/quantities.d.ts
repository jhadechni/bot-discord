export declare const STOCK_CAPTURE_UNIT_CHOICES: readonly [{
    readonly label: "Unidad";
    readonly value: "unit";
}, {
    readonly label: "Stack";
    readonly value: "stack";
}, {
    readonly label: "Cofre";
    readonly value: "chest";
}, {
    readonly label: "Cofre doble";
    readonly value: "double_chest";
}];
export declare const PRESENTATION_TYPE_CHOICES: readonly [{
    readonly label: "Unidad";
    readonly value: "unit";
}, {
    readonly label: "Stack";
    readonly value: "stack";
}, {
    readonly label: "Cofre";
    readonly value: "chest";
}, {
    readonly label: "Cofre doble";
    readonly value: "double_chest";
}, {
    readonly label: "Personalizada";
    readonly value: "custom";
}];
export type StockCaptureUnit = typeof STOCK_CAPTURE_UNIT_CHOICES[number]['value'];
export type PresentationType = typeof PRESENTATION_TYPE_CHOICES[number]['value'];
export declare function normalizeStackSize(value: number): number;
export declare function convertCaptureQuantityToBase(quantity: number, unit: StockCaptureUnit, stackSize: number): number;
export declare function resolvePresentationQuantity(params: {
    customQuantity?: number | null;
    presentationType: PresentationType;
    stackSize: number;
}): number;
export declare function resolvePresentationLabel(params: {
    presentationQuantity: number;
    presentationType: PresentationType;
    stackSize: number;
}): string;
export declare function formatCaptureInput(params: {
    baseQuantity: number;
    captureQuantity: number;
    captureUnit: StockCaptureUnit;
    unitLabel: string;
}): string;
export declare function hasProductInventoryDefinition(product: {
    baseMaterialId?: string | null;
    components?: {
        length: number;
    } | null;
    productType: string;
}): boolean;
//# sourceMappingURL=quantities.d.ts.map