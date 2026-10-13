import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { BlogCard } from "@/components/blog-card";
import type { BlogBodyBlock } from "@/lib/blog-articles";
import { getAllBlogArticles, getBlogArticle } from "@/lib/blog-source";
import { getCategoryLabel } from "@/lib/blog-catalog";
import { ShareButtons } from "./ShareButtons";

const SITE_URL = "https://humana.med.ec";

export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getBlogArticle(category, slug);
  if (!article) return {};
  return { title: `${article.title} - Blog Humana - Humana S.A.`, description: article.copy };
}

export async function generateStaticParams() {
  return getAllBlogArticles().map((article) => ({ category: article.category, slug: article.slug }));
}

function slugify(text: string) {
  return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function readingTime(body: BlogBodyBlock[] | undefined, fallback: string) {
  const words = (body?.length ? body : [{ type: "p" as const, text: fallback }])
    .map((b) => ("text" in b ? b.text : "items" in b ? b.items.join(" ") : ""))
    .join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function renderBody(body: BlogBodyBlock[] | undefined, fallback: string) {
  if (!body || body.length === 0) return <p>{fallback}</p>;
  return body.map((block, i) => {
    if (block.type === "h2") return <h2 key={i} id={slugify(block.text)}>{block.text}</h2>;
    if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
    if (block.type === "ul") return <ul key={i}>{block.items?.map((item, j) => <li key={j}>{item}</li>)}</ul>;
    if (block.type === "quote") {
      return (
        <blockquote key={i}>
          <p>{block.text}</p>
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    }
    if (block.type === "cta") {
      return (
        <div className="blog-article-cta" key={i}>
          <p>{block.text}</p>
          <Link className="primary-button small" href={block.href}>{block.label} <ArrowRight size={16} /></Link>
        </div>
      );
    }
    return <p key={i}>{block.text}</p>;
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const article = getBlogArticle(category, slug);
  if (!article) notFound();

  const categoryLabel = getCategoryLabel(category);
  const headings = (article.body ?? []).filter((b): b is Extract<BlogBodyBlock, { type: "h2" }> => b.type === "h2");
  const related = getAllBlogArticles().filter((a) => a.slug !== slug).slice(0, 3);
  const path = `/blog/${category}/${slug}/`;
  const minutes = readingTime(article.body, article.copy);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.copy,
    image: `${SITE_URL}${article.image}`,
    datePublished: article.date,
    author: { "@type": "Organization", name: "Humana S.A." },
    publisher: { "@type": "Organization", name: "Humana S.A." },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}` },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: categoryLabel, item: `${SITE_URL}/blog/category/${category}/` },
      { "@type": "ListItem", position: 4, name: article.title, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <SiteShell title="Bienestar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="biz-page" data-accent="teal">
        {/* Hero a pantalla completa con la imagen del artículo -------------- */}
        <section className="biz-hero-photo" id="articulo-inicio">
          <Image className="biz-hero-photo-img" src={article.image} alt={article.title} fill sizes="100vw" unoptimized />
          <div className="biz-hero-photo-overlay" />
          <div className="biz-hero-photo-content">
            <nav className="article-breadcrumb" aria-label="Breadcrumb" style={{ justifyContent: "center", color: "rgba(255,255,255,.7)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,.85)" }}>Inicio</Link>
              <span>»</span>
              <Link href="/blog/" style={{ color: "rgba(255,255,255,.85)" }}>Blog</Link>
              <span>»</span>
              <Link href={`/blog/category/${category}/`} style={{ color: "rgba(255,255,255,.85)" }}>{categoryLabel}</Link>
            </nav>
            <span className="blog-featured-chip" style={{ margin: "16px auto 0" }}>{categoryLabel}</span>
            <h1>{article.title}</h1>
            <p className="biz-hero-body">{article.date} · {minutes} min de lectura</p>
          </div>
        </section>

        {/* Cuerpo del artículo, sobre fondo blanco ------------------------------ */}
        <section className="biz-section" style={{ background: "#fff" }}>
          <div className="blog-article-layout">
            {headings.length > 0 && (
              <aside className="blog-article-index">
                <strong>En este artículo</strong>
                <nav aria-label="Índice del artículo">
                  {headings.map((h) => <a key={h.text} href={`#${slugify(h.text)}`}>{h.text}</a>)}
                </nav>
              </aside>
            )}
            <div>
              <article className="blog-article-body">
                {renderBody(article.body, article.copy)}
              </article>
              <ShareButtons title={article.title} path={path} />
            </div>
          </div>
        </section>

        {/* Artículos relacionados ---------------------------------------------- */}
        {related.length > 0 && (
          <section className="biz-section is-light">
            <div className="biz-container">
              <div className="biz-section-head">
                <h2>Artículos relacionados</h2>
              </div>
              <div className="blog-card-grid">
                {related.map((item) => <BlogCard article={item} key={item.slug} />)}
              </div>
            </div>
          </section>
        )}

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
