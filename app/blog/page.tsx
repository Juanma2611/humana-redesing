import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { BlogCard } from "@/components/blog-card";
import { blogCategories } from "@/lib/blog-catalog";
import { getAllBlogArticles } from "@/lib/blog-source";

export const metadata: Metadata = {
  title: "Blog Humana - Humana S.A.",
  description: "Contenido de salud, bienestar y prevención de Humana para cuidar de ti y tu familia.",
};

export default function Blog() {
  const articles = getAllBlogArticles();
  const [featured, ...rest] = articles;

  return (
    <SiteShell title="Bienestar">
      <div className="biz-page" data-accent="teal">
        {/* Hero a pantalla completa ------------------------------------- */}
        <section className="biz-hero-photo" id="blog-inicio">
          <Image className="biz-hero-photo-img" src="/images/blog/blog-hero.webp" alt="Mujer leyendo en una tablet, cómodamente sentada junto a una ventana" fill sizes="100vw" unoptimized />
          <div className="biz-hero-photo-overlay" />
          <div className="biz-hero-photo-content">
            <span className="biz-eyebrow">BIENESTAR</span>
            <h1>Aprende, cuida y vive mejor</h1>
            <p className="biz-hero-body">Contenido de salud y protección conectado con acciones útiles, sin interrumpir la lectura.</p>
          </div>
        </section>

        {/* Artículo destacado + chips + grilla ---------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            {/* Estos son artículos de muestra para mostrar el diseño del blog.
                Los posts oficiales se publicarán directamente en el sitio final. */}

            {featured && (
              <Link className="blog-featured" href={`/blog/${featured.category}/${featured.slug}/`}>
                <figure className="blog-featured-media">
                  <Image src={featured.image} alt="" fill sizes="(max-width: 860px) 100vw, 60vw" unoptimized />
                </figure>
                <div className="blog-featured-body">
                  <span className="blog-featured-chip">{featured.categoryLabel}</span>
                  <span className="blog-featured-date">{featured.date}</span>
                  <h2 className="blog-featured-title">{featured.title}</h2>
                  <p className="blog-featured-excerpt">{featured.copy}</p>
                  <span className="primary-button small blog-featured-cta">Leer artículo <ArrowRight size={16} /></span>
                </div>
              </Link>
            )}

            <nav className="blog-chip-row" aria-label="Filtrar por categoría">
              <Link className="blog-chip is-active" href="/blog/">Todas</Link>
              {blogCategories.map((c) => (
                <Link key={c.slug} className="blog-chip" href={`/blog/category/${c.slug}/`}>{c.label}</Link>
              ))}
            </nav>

            {rest.length > 0 && (
              <div className="blog-card-grid">
                {rest.map((article) => <BlogCard article={article} key={article.slug} />)}
              </div>
            )}
          </div>
        </section>

        {/* Cierre ------------------------------------------------------------ */}
        <section className="biz-section is-brand">
          <div className="biz-container biz-close">
            <div className="biz-section-head">
              <span className="biz-eyebrow">TU COBERTURA HUMANA</span>
              <h2>Encuentra el plan que te acompaña, no solo en la emergencia.</h2>
            </div>
            <div className="biz-close-actions">
              <Link className="biz-btn-primary" href="/cotizador/">Cotiza tu plan <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
