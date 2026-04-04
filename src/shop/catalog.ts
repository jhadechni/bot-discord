import {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';
import { prisma } from '../database/prisma.js';

// ── Configuración por sección ────────────────────────────────────────────────

export const SECTION_ORDER = ['single', 'bulk', 'kit', 'service'] as const;
export type SectionType = typeof SECTION_ORDER[number] | string;
const MAX_EMBED_DESCRIPTION_LENGTH = 3800;

interface SectionConfig {
  label:     string;
  emoji:     string;
  color:     number;
  thumbnail: string | null; // URL de imagen (Minecraft Wiki CDN)
}

const SECTION_CONFIG: Record<string, SectionConfig> = {
  single:  {
    label:     'Unidades',
    emoji:     '📦',
    color:     0x5865f2,
    thumbnail: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png',
  },
  bulk:    {
    label:     'Granel',
    emoji:     '🗃️',
    color:     0xfaa61a,
    thumbnail: 'https://minecraft.wiki/images/Chest_(S)_JE4.png',
  },
  kit:     {
    label:     'Kits',
    emoji:     '🎒',
    color:     0x57f287,
    thumbnail: 'https://minecraft.wiki/images/Bundle_JE2.png',
  },
  service: {
    label:     'Servicios',
    emoji:     '🔧',
    color:     0xeb459e,
    thumbnail: 'https://minecraft.wiki/images/Paper_JE2_BE2.png',
  },
};

function getSectionConfig(type: string): SectionConfig {
  return SECTION_CONFIG[type] ?? { label: type, emoji: '🛒', color: 0x99aab5, thumbnail: null };
}

// ── Tipos de consulta ────────────────────────────────────────────────────────

export type CatalogProduct = Awaited<ReturnType<typeof queryCatalogProducts>>[number];

export async function queryCatalogProducts(guildId: string) {
  return prisma.shopProduct.findMany({
    where:   { guildId, isActive: true },
    include: {
      prices:     { where: { validTo: null }, take: 1 },
      components: { include: { material: true }, orderBy: { quantityRequired: 'desc' } },
    },
    orderBy: { name: 'asc' },
  });
}

// ── Agrupar productos por tipo ───────────────────────────────────────────────

export function groupBySections(products: CatalogProduct[]): Map<string, CatalogProduct[]> {
  const map = new Map<string, CatalogProduct[]>();

  // Primero en orden conocido
  for (const type of SECTION_ORDER) {
    const group = products.filter(p => p.productType === type);
    if (group.length > 0) map.set(type, group);
  }
  // Luego tipos desconocidos
  for (const p of products) {
    if (!SECTION_ORDER.includes(p.productType as never) && !map.has(p.productType)) {
      map.set(p.productType, products.filter(x => x.productType === p.productType));
    }
  }
  return map;
}

function buildProductLine(product: CatalogProduct): string {
  const price    = product.prices[0];
  const priceStr = price
    ? `💰 **${Number(price.price).toLocaleString('es-ES')} ${price.currency}**`
    : '💰 _Sin precio_';

  const compsStr = product.components.length > 0
    ? '\n> 🔩 ' + product.components.map(c => `${c.material.name} ×${c.quantityRequired}`).join('  ·  ')
    : '';

  const descStr = product.description ? `\n${product.description}` : '';

  return `### ${product.name}\n${priceStr}${descStr}${compsStr}`;
}

export function paginateSectionProducts(sectionProducts: CatalogProduct[]): CatalogProduct[][] {
  const pages: CatalogProduct[][] = [];
  let currentPage: CatalogProduct[] = [];
  let currentLength = 0;

  for (const product of sectionProducts) {
    const line = buildProductLine(product);
    const separatorLength = currentPage.length > 0 ? 2 : 0;

    if (
      currentPage.length > 0 &&
      currentLength + separatorLength + line.length > MAX_EMBED_DESCRIPTION_LENGTH
    ) {
      pages.push(currentPage);
      currentPage = [product];
      currentLength = line.length;
      continue;
    }

    currentPage.push(product);
    currentLength += separatorLength + line.length;
  }

  if (currentPage.length > 0) {
    pages.push(currentPage);
  }

  return pages.length > 0 ? pages : [[]];
}

// ── Embed del catálogo ────────────────────────────────────────────────────────

export function buildCatalogEmbed(
  sectionProducts: CatalogProduct[],
  currentSection:  string,
  allSections:     string[],
  currentPage:     number,
  totalPages:      number,
): EmbedBuilder {
  const cfg   = getSectionConfig(currentSection);
  const idx   = allSections.indexOf(currentSection) + 1;
  const total = allSections.length;
  const lines = sectionProducts.map(buildProductLine);

  const embed = new EmbedBuilder()
    .setTitle(`🏪 Tienda Aquaris  ·  ${cfg.emoji} ${cfg.label}`)
    .setDescription(
      lines.length > 0
        ? lines.join('\n\n')
        : '_No hay productos en esta sección._',
    )
    .setColor(cfg.color)
    .setFooter({
      text: [
        `${sectionProducts.length} producto${sectionProducts.length !== 1 ? 's' : ''}`,
        `Pagina ${currentPage} de ${totalPages}`,
        `Sección ${idx} de ${total}`,
        '/pedido crear para comprar',
      ].join('  ·  '),
    })
    .setTimestamp();

  if (cfg.thumbnail) embed.setThumbnail(cfg.thumbnail);

  return embed;
}

// ── Botones de navegación ─────────────────────────────────────────────────────

export function buildCatalogButtons(
  allSections:    string[],
  currentSection: string,
  currentPage:    number,
  totalPages:     number,
): ActionRowBuilder<ButtonBuilder>[] {
  const rows: ActionRowBuilder<ButtonBuilder>[] = [];

  if (allSections.length > 1) {
    const sectionRow = new ActionRowBuilder<ButtonBuilder>();

    for (const section of allSections) {
      const cfg = getSectionConfig(section);
      sectionRow.addComponents(
        new ButtonBuilder()
          .setCustomId(`tienda:catalog:${section}:1`)
          .setLabel(`${cfg.emoji} ${cfg.label}`)
          .setStyle(section === currentSection ? ButtonStyle.Primary : ButtonStyle.Secondary)
          .setDisabled(section === currentSection),
      );
    }

    rows.push(sectionRow);
  }

  if (totalPages > 1) {
    rows.push(
      new ActionRowBuilder<ButtonBuilder>().addComponents(
        new ButtonBuilder()
          .setCustomId(`tienda:catalog:${currentSection}:${currentPage - 1}`)
          .setLabel('Anterior')
          .setStyle(ButtonStyle.Secondary)
          .setDisabled(currentPage <= 1),
        new ButtonBuilder()
          .setCustomId(`tienda:catalog:${currentSection}:${currentPage}`)
          .setLabel(`Pagina ${currentPage}/${totalPages}`)
          .setStyle(ButtonStyle.Primary)
          .setDisabled(true),
        new ButtonBuilder()
          .setCustomId(`tienda:catalog:${currentSection}:${currentPage + 1}`)
          .setLabel('Siguiente')
          .setStyle(ButtonStyle.Secondary)
          .setDisabled(currentPage >= totalPages),
      ),
    );
  }

  return rows;
}
