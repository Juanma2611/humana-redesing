import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";
import { blogCategories, getCategoryLabel } from "@/lib/blog-catalog";
import { getBlogArticlesByCategory } from "@/lib/blog-source";

export async function generateStaticParams() {
  return blogCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const label = getCategoryLabel(category);
  return { title: `${label} - Blog Humana - Humana S.A.`, description: `Artículos de la categoría ${label} del blog de Humana.` };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const isKnownCategory = blogCategories.some((c) => c.slug === category);
  if (!isKnownCategory) notFound();

  const articles = getBlogArticlesByCategory(category);
  const label = getCategoryLabel(category);

  return (
    <SiteShell title="Bienestar">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><Link href="/blog/">Blog</Link><span>»</span><span>{label}</span>
      </nav>

      <PageHero eyebrow="Blog Humana" title={label} description={`Artículos de la categoría ${label}.`} imageSrc="/bienestar-hero.webp" imageAlt="Familia disfrutando una caminata saludable en un parque" imagePosition="center" />

      <section className="content-section blog-listing">
        <div className="blog-listing-main">
          {articles.length > 0 ? (
            <div className="blog-listing-grid">
              {articles.map(article => (
                <article className="card-clickable" key={article.slug}>
                  <Link className="card-cover-link" href={`/blog/${article.category}/${article.slug}/`} aria-label={article.title} />
                  <div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div>
                  <div className="home-blog-copy">
                    <h3>{article.title}</h3>
                    <span>{article.date} | {article.categoryLabel}</span>
                    <p>{article.copy}</p>
                    <div className="home-blog-actions"><span className="card-cover-cta">Leer más <ArrowRight /></span></div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p style={{ padding: "24px 0" }}>Todavía no hay posts publicados en esta categoría. Los posts oficiales están pendientes de recibir su contenido desde WordPress.</p>
          )}
          {/* Sin paginación por ahora (pocos posts visibles). Agregar cuando
              el importador cargue el resto de los 125 posts oficiales. */}
        </div>
      </section>
    </SiteShell>
  );
}
