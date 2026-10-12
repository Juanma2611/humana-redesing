import { provisionalBlogPosts } from "@/lib/blog-articles";
import { blogCatalog, findCatalogEntry, getCategoryLabel } from "@/lib/blog-catalog";
// Posts reales importados desde WordPress (ver scripts/import-wordpress-posts.ts).
// Por decisión confirmada, los posts reales NO se migran a este proyecto:
// pasarán de WordPress a WordPress directo en el sitio final. El importador
// queda guardado sin usar, así que esta lista se mantiene vacía.
import { importedBlogPosts } from "@/lib/blog-posts-imported.generated";

export type BlogArticle = {
  slug: string;
  category: string;
  categoryLabel: string;
  title: string;
  date: string;
  image: string;
  copy: string;
  body: typeof provisionalBlogPosts[number]["body"];
  provisional: boolean;
};

// Solo los 3 artículos de muestra (ver lib/blog-articles.ts) generan
// página visible. El resto del catálogo oficial (ver lib/blog-catalog.ts)
// queda sin página ni listado: es solo referencia de slugs/categorías
// oficiales para cuando el sitio final tenga su propio contenido.
export function getAllBlogArticles(): BlogArticle[] {
  const importedSlugs = new Set(importedBlogPosts.map((p) => p.slug));
  const provisional = provisionalBlogPosts
    .filter((p) => !importedSlugs.has(p.slug))
    .map((post) => ({ ...post, categoryLabel: getCategoryLabel(post.category) }));
  const imported = importedBlogPosts.map((post) => ({ ...post, categoryLabel: getCategoryLabel(post.category) }));
  return [...imported, ...provisional];
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  return getAllBlogArticles().filter((a) => a.category === category);
}

export function getBlogArticle(category: string, slug: string): BlogArticle | undefined {
  const entry = findCatalogEntry(category, slug);
  if (!entry) return undefined;
  return getAllBlogArticles().find((a) => a.category === category && a.slug === slug);
}

export function pendingCount(): number {
  const visibleSlugs = new Set(getAllBlogArticles().map((p) => p.slug));
  return blogCatalog.filter((p) => !visibleSlugs.has(p.slug)).length;
}
