import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, } from 'discord.js';
import { formatPrice, SHOP_FOOTER } from '../utils/ui.js';
import { SHOP_COLORS } from '../utils/shop-ui.js';
import { buildCategorySelectRow, queryCatalogProducts, resolveCatalogViewState, } from './catalog.js';
import { getCategoryDefinition, getSubcategoryDefinition } from './taxonomy.js';
const CART_TTL_MS = 30 * 60 * 1000;
const CART_PAGE_SIZE = 10;
const sessions = new Map();
function cartKey(guildId, userId) {
    return `${guildId}:${userId}`;
}
export function getCart(guildId, userId) {
    return sessions.get(cartKey(guildId, userId))?.session;
}
export function setCart(session) {
    const key = cartKey(session.guildId, session.userId);
    const existing = sessions.get(key);
    if (existing)
        clearTimeout(existing.timer);
    const timer = setTimeout(() => sessions.delete(key), CART_TTL_MS);
    sessions.set(key, { session, timer });
}
export function deleteCart(guildId, userId) {
    const key = cartKey(guildId, userId);
    const existing = sessions.get(key);
    if (existing)
        clearTimeout(existing.timer);
    sessions.delete(key);
}
export function cartTotal(items) {
    return items.reduce((sum, item) => sum + Number(item.lineTotal), 0);
}
export async function queryCartProducts(guildId) {
    return queryCatalogProducts(guildId);
}
export function buildCartEmbed(session) {
    const { items } = session;
    if (items.length === 0) {
        return new EmbedBuilder()
            .setTitle('🛒 Carrito')
            .setDescription('El carrito está vacío. Usa el selector o **Buscar** para agregar productos.')
            .setColor(SHOP_COLORS.neutral)
            .setFooter({ text: `${SHOP_FOOTER.text}  ·  Explora productos para empezar` });
    }
    const lines = items.map((item, index) => {
        const emoji = getCategoryDefinition(item.productCategory).emoji;
        const line = `**${index + 1}.** ${emoji} **${item.productName}** × ${item.quantity}  —  ${formatPrice(item.unitPrice)} c/u  →  **${formatPrice(item.lineTotal)}**`;
        const extraLines = [];
        if (item.contentsSummary)
            extraLines.push(`> 🎁 ${item.contentsSummary}`);
        if (item.notes)
            extraLines.push(`> 📝 ${item.notes}`);
        return extraLines.length > 0 ? `${line}\n${extraLines.join('\n')}` : line;
    });
    const total = cartTotal(items);
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    return new EmbedBuilder()
        .setTitle(`🛒 Carrito · ${items.length} producto${items.length !== 1 ? 's' : ''}`)
        .setDescription(lines.join('\n\n'))
        .setColor(SHOP_COLORS.warning)
        .addFields({ name: 'Total', value: `**${formatPrice(total)}**  ·  ${count} unidad${count !== 1 ? 'es' : ''}` })
        .setFooter({ text: `${SHOP_FOOTER.text}  ·  Revisa el pedido antes de confirmarlo` });
}
function buildBrowseEmbed(state) {
    const category = getCategoryDefinition(state.currentCategory);
    const subcategory = getSubcategoryDefinition(state.currentCategory, state.currentSubcategory);
    const count = state.totalSubcategoryProducts;
    const itemLabel = state.currentMode === 'services' ? 'servicio' : 'producto';
    return new EmbedBuilder()
        .setTitle(`${category.emoji} ${category.label} / ${subcategory.label}`)
        .setDescription(`${count} ${itemLabel}${count !== 1 ? 's' : ''} disponibles. Selecciona uno del menú para añadir al carrito.`)
        .setColor(SHOP_COLORS.info)
        .setFooter({ text: SHOP_FOOTER.text })
        .setTimestamp();
}
function buildCartProductSelectRow(products) {
    return new ActionRowBuilder().addComponents(new StringSelectMenuBuilder()
        .setCustomId('pedido:cart:add:select')
        .setPlaceholder('🔍 Selecciona un producto para añadir…')
        .addOptions(products.slice(0, 25).map(p => {
        const price = p.prices[0];
        const priceStr = price ? formatPrice(price.price, price.currency) : 'Sin precio';
        const icon = getCategoryDefinition(p.category).emoji;
        return new StringSelectMenuOptionBuilder()
            .setLabel(`${icon} ${p.name}`.slice(0, 100))
            .setValue(p.id)
            .setDescription(`💰 ${priceStr}`);
    })));
}
function buildBrowsePaginationRow(state) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('pedido:cart:page:prev')
        .setLabel('◀ Anterior')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(state.currentPage <= 1), new ButtonBuilder()
        .setCustomId('pedido:cart:page:label')
        .setLabel(`Pág. ${state.currentPage}/${state.totalPages}`)
        .setStyle(ButtonStyle.Primary)
        .setDisabled(true), new ButtonBuilder()
        .setCustomId('pedido:cart:page:next')
        .setLabel('Siguiente ▶')
        .setStyle(ButtonStyle.Secondary)
        .setDisabled(state.currentPage >= state.totalPages));
}
function buildCartActionsRow(session) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('pedido:cart:search')
        .setLabel('🔍 Buscar')
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId('pedido:cart:view:cart')
        .setLabel(`🛒 Ver carrito (${session.items.length})`)
        .setStyle(session.items.length > 0 ? ButtonStyle.Success : ButtonStyle.Secondary));
}
function buildCartSubcategorySelectRow(subcategoryKeys, currentCategory, currentSubcategory) {
    const select = new StringSelectMenuBuilder()
        .setCustomId('pedido:cart:subcategory')
        .setPlaceholder('Selecciona una subcategoría')
        .addOptions(subcategoryKeys.map(subcategoryKey => new StringSelectMenuOptionBuilder()
        .setLabel(getSubcategoryDefinition(currentCategory, subcategoryKey).label.slice(0, 100))
        .setValue(subcategoryKey)
        .setDefault(subcategoryKey === currentSubcategory)));
    return new ActionRowBuilder().addComponents(select);
}
function buildCartModeRow(session) {
    return new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('pedido:cart:view:browse')
        .setLabel('← Explorar')
        .setStyle(ButtonStyle.Secondary), new ButtonBuilder()
        .setCustomId('pedido:cart:confirm')
        .setLabel('✅ Confirmar pedido')
        .setStyle(ButtonStyle.Success)
        .setDisabled(session.items.length === 0), new ButtonBuilder()
        .setCustomId('pedido:cart:clear')
        .setLabel('🗑️ Vaciar')
        .setStyle(ButtonStyle.Danger)
        .setDisabled(session.items.length === 0));
}
function buildRemoveSelectRow(session) {
    if (session.items.length === 0)
        return null;
    const removeSelect = new StringSelectMenuBuilder()
        .setCustomId('pedido:cart:remove')
        .setPlaceholder('🗑️ Quitar producto del carrito…')
        .addOptions(session.items.map((item, index) => new StringSelectMenuOptionBuilder()
        .setLabel(`${item.productName} × ${item.quantity}`.slice(0, 100))
        .setValue(String(index))
        .setDescription(formatPrice(item.lineTotal).slice(0, 100))
        .setEmoji('🗑️')));
    return new ActionRowBuilder().addComponents(removeSelect);
}
function buildBrowseComponents(session, state) {
    const rows = [];
    if (state.categoryKeys.length > 1) {
        rows.push(buildCategorySelectRow('pedido:cart', state.currentMode, state.categoryKeys, state.currentCategory));
    }
    if (state.subcategoryKeys.length > 1) {
        rows.push(buildCartSubcategorySelectRow(state.subcategoryKeys, state.currentCategory, state.currentSubcategory));
    }
    const useProductSelect = state.allSubcategoryProducts.length > 0 && state.allSubcategoryProducts.length <= 25;
    const usePagination = !useProductSelect && state.totalPages > 1;
    if (state.pageProducts.length > 0) {
        rows.push(buildCartProductSelectRow(usePagination ? state.pageProducts : state.allSubcategoryProducts));
    }
    if (usePagination) {
        rows.push(buildBrowsePaginationRow(state));
    }
    rows.push(buildCartActionsRow(session));
    return rows;
}
function buildCartComponents(session) {
    const rows = [];
    const removeRow = buildRemoveSelectRow(session);
    if (removeRow)
        rows.push(removeRow);
    rows.push(buildCartModeRow(session));
    return rows;
}
export function buildCartSearchView(session, results, query) {
    const components = [];
    components.push(new ActionRowBuilder().addComponents(new ButtonBuilder()
        .setCustomId('pedido:cart:search_back')
        .setLabel('← Volver al catálogo')
        .setStyle(ButtonStyle.Secondary)));
    const searchEmbed = new EmbedBuilder()
        .setColor(results.length > 0 ? SHOP_COLORS.info : SHOP_COLORS.neutral)
        .setTitle(results.length > 0 ? `🔍 "${query.slice(0, 50)}" — ${results.length} resultado${results.length !== 1 ? 's' : ''}` : '🔍 Sin resultados')
        .setDescription(results.length > 0
        ? 'Selecciona un producto del menú para añadirlo al carrito.'
        : `No se encontraron productos para **"${query.slice(0, 100)}"**.\nIntenta con otro término.`)
        .setFooter({ text: SHOP_FOOTER.text });
    if (results.length > 0) {
        components.push(buildCartProductSelectRow(results));
    }
    components.push(buildCartActionsRow(session));
    return { components, embeds: [searchEmbed, buildCartEmbed(session)] };
}
export function buildCartView(session, products) {
    const state = resolveCatalogViewState(products, session.currentCatalogMode, session.currentCategory, session.currentSubcategory, session.currentPage, CART_PAGE_SIZE);
    if (session.viewMode === 'cart') {
        return {
            components: buildCartComponents(session),
            embeds: [buildCartEmbed(session)],
            state,
        };
    }
    return {
        components: buildBrowseComponents(session, state),
        embeds: [buildBrowseEmbed(state), buildCartEmbed(session)],
        state,
    };
}
export function buildQtyModal(productName, presentationTypeName) {
    const shortName = productName.slice(0, 40);
    const qtyLabel = presentationTypeName
        ? `Cantidad (en ${presentationTypeName.toLowerCase()}s)`.slice(0, 45)
        : 'Cantidad';
    return new ModalBuilder()
        .setCustomId('pedido:cart:qty_modal')
        .setTitle(`Añadir: ${shortName}`)
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
        .setCustomId('qty')
        .setLabel(qtyLabel)
        .setStyle(TextInputStyle.Short)
        .setRequired(true)
        .setMinLength(1)
        .setMaxLength(5)
        .setPlaceholder('1')), new ActionRowBuilder().addComponents(new TextInputBuilder()
        .setCustomId('notes')
        .setLabel('Notas para el staff (opcional)')
        .setStyle(TextInputStyle.Short)
        .setRequired(false)
        .setMaxLength(200)
        .setPlaceholder('Ej: variante específica, preferencia de entrega…')));
}
//# sourceMappingURL=cart.js.map