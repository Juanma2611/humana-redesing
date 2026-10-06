// Generado por scripts/import-wordpress-posts.ts — NO editar a mano.
// Vacío hasta que se corra el importador con el XML de WordPress que
// entregue Hiro. Ver scripts/import-wordpress-posts.ts para el formato
// exacto que necesita ese archivo.
import type { BlogBodyBlock } from "./blog-articles";
import type { BlogCategorySlug } from "./blog-catalog";

export type ImportedBlogPost = {
  slug: string;
  category: BlogCategorySlug;
  title: string;
  date: string;
  image: string;
  copy: string;
  seoTitle?: string;
  seoDescription?: string;
  body: BlogBodyBlock[];
  provisional: false;
};

export const importedBlogPosts: ImportedBlogPost[] = [];
