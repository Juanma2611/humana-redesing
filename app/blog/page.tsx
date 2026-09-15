import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, Search } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";
import { blogArticles } from "@/lib/blog-articles";

export default function Blog() {
  return <SiteShell title="Bienestar"><PageHero eyebrow="Blog Humana" title="Aprende, cuida y vive mejor" description="Contenido de salud y protección conectado con acciones útiles, sin interrumpir la lectura." imageSrc="/bienestar-hero.webp" imageAlt="Familia disfrutando una caminata saludable en un parque" imagePosition="center" />
    <section className="content-section"><div className="blog-tools"><label><Search /><input placeholder="Busca un tema de interés" /></label><div><span><BookOpen /> Información fácil de entender</span><span><HeartPulse /> Enfocada en bienestar</span></div></div>
      <div className="home-blog-grid">{blogArticles.map(article => <article key={article.title}><div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></div><div className="home-blog-copy"><h3>{article.title}</h3><span>{article.date} | Bienestar</span><p>{article.copy}</p><div className="home-blog-actions"><Link href="/blog">Leer más <ArrowRight /></Link><Link className="primary-button small" href="/planes">Cotizar en 1 minuto <ArrowRight size={16} /></Link></div></div></article>)}</div>
      <div className="info-banner"><div><strong>¿No sabes qué plan necesitas?</strong><p>Responde preguntas sencillas y recibe una orientación inicial.</p></div><Link className="primary-button" href="/encontrar-plan">Descubre tu plan ideal</Link></div>
    </section>
  </SiteShell>;
}
