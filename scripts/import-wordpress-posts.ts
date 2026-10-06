// Importador de posts del blog desde la exportación WXR de WordPress
// (Escritorio de WordPress → Herramientas → Exportar → Entradas).
//
// Uso:
//   npx tsx scripts/import-wordpress-posts.ts <ruta-al-xml>
//
// Qué hace:
//   1. Lee el XML (formato WXR est&aacute;ndar de WordPress).
//   2. Toma SOLO <item> con wp:post_type = "post" y wp:status = "publish".
//   3. Para cada post extrae: título, slug (wp:post_name), categoría
//      (category domain="category"), fecha, imagen destacada (vía
//      _thumbnail_id -> attachment), contenido completo (content:encoded,
//      convertido a bloques h3/p/ul preservando el texto tal cual, SIN
//      reescribir nada) y title/meta description (Yoast SEO o RankMath si
//      existen como postmeta).
//   4. Cruza cada slug contra el catálogo oficial (lib/blog-catalog.ts).
//   5. Escribe lib/blog-posts-imported.generated.ts con los posts que
//      coincidieron, y muestra en consola:
//      - cuántos del catálogo de 125 ya tienen contenido importado,
//      - cuáles del catálogo siguen pendientes,
//      - cuáles posts del XML no están en el catálogo oficial (para revisar
//        a mano: puede ser una categoría distinta a la esperada, o un post
//        que no estaba en el sitemap que se usó para armar el catálogo).
//
// No reescribe ni resume ningún texto: el título, el contenido y los
// encabezados se copian literalmente del XML.

import { readFileSync, writeFileSync } from "node:fs";
import { XMLParser } from "fast-xml-parser";
import { blogCatalog, type BlogCategorySlug } from "../lib/blog-catalog";

type WpItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  "wp:post_id"?: number;
  "wp:post_name"?: string;
  "wp:post_type"?: string;
  "wp:status"?: string;
  "content:encoded"?: string;
  "excerpt:encoded"?: string;
  category?: Array<{ "#text": string; "@_domain": string; "@_nicename": string }> | { "#text": string; "@_domain": string; "@_nicename": string };
  "wp:postmeta"?: Array<{ "wp:meta_key": string; "wp:meta_value": string }> | { "wp:meta_key": string; "wp:meta_value": string };
};

function asArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

function htmlToBlocks(html: string): Array<{ type: "h3" | "p" | "ul"; text?: string; items?: string[] }> {
  const blocks: Array<{ type: "h3" | "p" | "ul"; text?: string; items?: string[] }> = [];
  // Normaliza encabezados h2/h4 a h3 (jerarquía visual del sitio ya migrado).
  const normalized = html
    .replace(/<h[24][^>]*>/gi, "<h3>")
    .replace(/<\/h[24]>/gi, "</h3>");

  const blockRegex = /<(h3|p|ul)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = blockRegex.exec(normalized))) {
    const [, tag, inner] = match;
    if (tag === "ul") {
      const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => stripTags(m[1]));
      if (items.length) blocks.push({ type: "ul", items });
    } else {
      const text = stripTags(inner);
      if (text) blocks.push({ type: tag as "h3" | "p", text });
    }
  }
  return blocks;
}

function stripTags(html: string): string {
  return html
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;|&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function getMeta(item: WpItem, key: string): string | undefined {
  return asArray(item["wp:postmeta"]).find((m) => m["wp:meta_key"] === key)?.["wp:meta_value"];
}

function main() {
  const xmlPath = process.argv[2];
  if (!xmlPath) {
    console.error("Uso: npx tsx scripts/import-wordpress-posts.ts <ruta-al-xml-de-WordPress>");
    process.exit(1);
  }

  const xml = readFileSync(xmlPath, "utf-8");
  const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: "#text", textNodeName: "#text" });
  const doc = parser.parse(xml);
  const items: WpItem[] = asArray(doc?.rss?.channel?.item);

  // Mapa id de adjunto -> URL, para resolver imágenes destacadas.
  const attachmentUrlById = new Map<number, string>();
  for (const item of items) {
    if (item["wp:post_type"] === "attachment" && item["wp:post_id"] && item.link) {
      attachmentUrlById.set(Number(item["wp:post_id"]), item.link);
    }
  }

  const catalogBySlug = new Map(blogCatalog.map((p) => [p.slug, p.category]));

  const imported: Array<{
    slug: string;
    category: BlogCategorySlug;
    title: string;
    date: string;
    image: string;
    copy: string;
    seoTitle?: string;
    seoDescription?: string;
    body: Array<{ type: "h3" | "p" | "ul"; text?: string; items?: string[] }>;
  }> = [];

  const notInCatalog: string[] = [];

  for (const item of items) {
    if (item["wp:post_type"] !== "post" || item["wp:status"] !== "publish") continue;
    const slug = item["wp:post_name"];
    if (!slug) continue;

    const officialCategory = catalogBySlug.get(slug);
    if (!officialCategory) {
      notInCatalog.push(slug);
      continue;
    }

    const thumbId = getMeta(item, "_thumbnail_id");
    const image = thumbId ? attachmentUrlById.get(Number(thumbId)) ?? "" : "";
    const content = item["content:encoded"] ?? "";
    const excerpt = stripTags(item["excerpt:encoded"] ?? "").slice(0, 300);

    imported.push({
      slug,
      category: officialCategory,
      title: stripTags(item.title ?? ""),
      date: item.pubDate ?? "",
      image,
      copy: excerpt || stripTags(content).slice(0, 300),
      seoTitle: getMeta(item, "rank_math_title") ?? getMeta(item, "_yoast_wpseo_title"),
      seoDescription: getMeta(item, "rank_math_description") ?? getMeta(item, "_yoast_wpseo_metadesc"),
      body: htmlToBlocks(content),
    });
  }

  const importedSlugs = new Set(imported.map((p) => p.slug));
  const stillPending = blogCatalog.filter((p) => !importedSlugs.has(p.slug));

  let out = "// Generado por scripts/import-wordpress-posts.ts — NO editar a mano.\n";
  out += "// Contenido copiado literal del XML de WordPress, sin reescribir.\n";
  out += "import type { BlogBodyBlock } from \"./blog-articles\";\n";
  out += "import type { BlogCategorySlug } from \"./blog-catalog\";\n\n";
  out += "export type ImportedBlogPost = {\n";
  out += "  slug: string;\n  category: BlogCategorySlug;\n  title: string;\n  date: string;\n  image: string;\n  copy: string;\n  seoTitle?: string;\n  seoDescription?: string;\n  body: BlogBodyBlock[];\n  provisional: false;\n";
  out += "};\n\n";
  out += "export const importedBlogPosts: ImportedBlogPost[] = ";
  out += JSON.stringify(imported.map((p) => ({ ...p, provisional: false })), null, 2);
  out += ";\n";

  writeFileSync(new URL("../lib/blog-posts-imported.generated.ts", import.meta.url), out);

  console.log(`Importados: ${imported.length} / ${blogCatalog.length} posts del catálogo oficial.`);
  console.log(`Pendientes (sin contenido todavía): ${stillPending.length}`);
  if (stillPending.length) console.log(stillPending.map((p) => `${p.category}/${p.slug}`).join("\n"));
  if (notInCatalog.length) {
    console.log(`\nAVISO: ${notInCatalog.length} posts del XML no están en lib/blog-catalog.ts (revisar a mano):`);
    console.log(notInCatalog.join("\n"));
  }
}

main();
