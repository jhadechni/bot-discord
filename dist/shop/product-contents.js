function pluralize(count, singular, plural = `${singular}s`) {
    return count === 1 ? singular : plural;
}
export function getVisibleProductComponents(product) {
    const filtered = product.components.filter(component => component.materialId !== product.baseMaterialId);
    if (filtered.length > 1) {
        return filtered;
    }
    if (product.productType === 'kit') {
        return filtered;
    }
    return filtered.length > 1 ? filtered : [];
}
export function buildProductContentsSummary(product, maxItems = 4) {
    const components = getVisibleProductComponents(product);
    if (components.length <= 1)
        return null;
    const visible = components.slice(0, maxItems).map(component => `${component.material.name} x${component.quantityRequired}`);
    const extraCount = components.length - visible.length;
    const suffix = extraCount > 0 ? `, +${extraCount} más` : '';
    return `Incluye ${components.length} ${pluralize(components.length, 'material')}: ${visible.join(', ')}${suffix}`;
}
export function buildProductContentsLines(product, maxItems = 6) {
    const components = getVisibleProductComponents(product);
    if (components.length <= 1)
        return [];
    const visible = components.slice(0, maxItems).map(component => `• ${component.material.name} x${component.quantityRequired}`);
    const extraCount = components.length - visible.length;
    if (extraCount > 0) {
        visible.push(`• +${extraCount} material${extraCount === 1 ? '' : 'es'} más`);
    }
    return visible;
}
//# sourceMappingURL=product-contents.js.map