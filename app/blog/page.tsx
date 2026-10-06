import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardList, Mail, MapPin, Monitor, Phone, ShoppingCart } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { PageHero, SiteShell } from "@/components/site-shell";
import { getAllBlogArticles } from "@/lib/blog-source";

export const metadata: Metadata = {
  title: "Blog Humana - Humana S.A.",
  description: "Contenido de salud, bienestar y prevención de Humana para cuidar de ti y tu familia.",
};

const channels = [
  { icon: SiWhatsapp, label: "Canal de atención por WhatsApp", value: "+593 2401 7002", brandColor: "#0b80bd" },
  { icon: Monitor, label: "Oficina virtual", value: "Humana Direct" },
  { icon: ClipboardList, label: "Formulario de", value: "Contacto" },
  { icon: MapPin, label: "Nuestras", value: "Oficinas y centros de atención" },
  { icon: Mail, label: "El correo", value: "servicioalcliente@humana.med.ec" },
  { icon: Phone, label: "El teléfono", value: "1800 humana (48 62 62)" },
];

export default function Blog() {
  const articles = getAllBlogArticles();

  return <SiteShell title="Bienestar"><PageHero eyebrow="Blog Humana" title="Aprende, cuida y vive mejor" description="Contenido de salud y protección conectado con acciones útiles, sin interrumpir la lectura." imageSrc="/bienestar-hero.webp" imageAlt="Familia disfrutando una caminata saludable en un parque" imagePosition="center" />
    <section className="content-section blog-listing">
      <div className="blog-listing-main">
        <div className="article-provisional-notice" role="note" style={{ marginBottom: 24 }}>
          Los posts de este blog están en migración desde WordPress. Por ahora solo se muestran los que ya tienen contenido (provisional, pendiente de reemplazo por el texto oficial).
        </div>

        <div className="blog-listing-grid">
          {articles.map(article => <article className="card-clickable" key={article.slug}><Link className="card-cover-link" href={`/blog/${article.category}/${article.slug}/`} aria-label={article.title} /><div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div><div className="home-blog-copy"><h3>{article.title}</h3><span>{article.date} | {article.categoryLabel}</span><p>{article.copy}</p><div className="home-blog-actions"><span className="card-cover-cta">Leer más <ArrowRight /></span></div></div></article>)}
        </div>
      </div>

      <aside className="blog-sidebar">
        <div className="blog-sidebar-card blog-app-card">
          <strong>MiHumana APP:</strong>
          <span className="blog-app-kicker">DISPONIBLE EN:</span>
          <div className="app-downloads"><a href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer"><Image src="/badges/google-play-badge.png" alt="Disponible en Google Play" width={897} height={240} unoptimized /></a><a href="https://apps.apple.com/ec/search?term=mi%20humana" target="_blank" rel="noreferrer"><Image src="/badges/app-store-badge.png" alt="Disponible en el App Store" width={841} height={240} unoptimized /></a></div>
        </div>

        <div className="blog-sidebar-card">
          <strong>Canales de comunicación:</strong>
          <ul className="blog-channel-list">{channels.map(({icon:Icon,label,value,brandColor}) => <li key={value}><span><Icon style={brandColor ? { color: brandColor } : undefined} /></span><p>{label} <Link href="/medihumana/">{value}</Link></p></li>)}</ul>
        </div>

        <div className="blog-sidebar-card blog-buy-card">
          <span className="blog-app-kicker">¿Aún no tienes un plan?</span>
          <strong><Building2 size={18} /> Compra online</strong>
          <p>Adquiere tu plan médico de forma fácil, segura y 100% digital.</p>
          <p>¿Quieres saber cómo funciona el sistema de compra online? Es un modo seguro y rápido de contratar tu plan.</p>
          <Link className="primary-button small" href="/planes-medicos/"><ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} /></Link>
        </div>
      </aside>
    </section>
  </SiteShell>;
}
