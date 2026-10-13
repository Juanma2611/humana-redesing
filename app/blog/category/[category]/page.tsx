import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Newspaper } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { BlogCard } from "@/components/blog-card";
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

      <div className="biz-page" data-accent="teal">
        {/* Hero compacto --------------------------------------------------- */}
        <section className="biz-hero">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">CATEGORÍA</span>
            <h1>{label}</h1>
          </div>
        </section>

        <section className="biz-section is-light">
          <div className="biz-container">
            <nav className="blog-chip-row" aria-label="Filtrar por categoría">
              <Link className="blog-chip" href="/blog/">Todas</Link>
              {blogCategories.map((c) => (
                <Link key={c.slug} className={c.slug === category ? "blog-chip is-active" : "blog-chip"} href={`/blog/category/${c.slug}/`}>{c.label}</Link>
              ))}
            </nav>

            {articles.length > 0 ? (
              <div className="blog-card-grid">
                {articles.map((article) => <BlogCard article={article} key={article.slug} />)}
              </div>
            ) : (
              <div className="blog-empty-state">
                <div className="blog-empty-icon"><Newspaper aria-hidden="true" /></div>
                <h2>Pronto publicaremos artículos en esta categoría</h2>
                <p>Estamos preparando contenido de {label.toLowerCase()} para acompañarte. Mientras tanto, explora el resto del blog.</p>
                <Link className="primary-button" href="/blog/">Ver todos los artículos <ArrowRight size={18} /></Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
