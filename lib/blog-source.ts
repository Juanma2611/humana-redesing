import { provisionalBlogPosts } from "@/lib/blog-articles";
import { blogCatalog, findCatalogEntry, getCategoryLabel } from "@/lib/blog-catalog";
// Posts reales importados desde WordPress (ver scripts/import-wordpress-posts.ts).
// Vacío hasta que se corra el importador; a partir de ahí, estos posts
// reemplazan a los provisionales con el mismo slug.
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

// Solo los posts con contenido disponible (importado o provisional) generan
// artículo visible. El resto del catálogo oficial (ver lib/blog-catalog.ts)
// queda "pendiente de contenido oficial": no tiene página ni aparece en
// ningún listado. Un post importado siempre reemplaza a su versión provisional.
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
