import { notFound, permanentRedirect } from "next/navigation";
import { findCatalogEntryBySlug, blogCatalog } from "@/lib/blog-catalog";

// Compatibilidad con las URLs antiguas y planas /blog/{slug}/ (sin categoría).
// Next.js exige el mismo nombre de segmento dinámico en todo el árbol de
// /blog/*, por eso esta carpeta se llama [category] aunque aquí el valor
// recibido es en realidad el slug antiguo del post.
export async function generateStaticParams() {
  return blogCatalog.map((p) => ({ category: p.slug }));
}

export default async function LegacyBlogSlugRedirect({ params }: { params: Promise<{ category: string }> }) {
  const { category: legacySlug } = await params;
  const entry = findCatalogEntryBySlug(legacySlug);
  if (!entry) notFound();
  permanentRedirect(`/blog/${entry.category}/${entry.slug}/`);
}
