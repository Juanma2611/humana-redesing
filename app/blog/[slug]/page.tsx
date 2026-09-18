import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, ClipboardList, Globe, Mail, MapPin, Monitor, Phone, Smartphone, Store } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { SiteShell } from "@/components/site-shell";
import { allBlogArticles, contactBlocks, type BlogBodyBlock } from "@/lib/blog-articles";

const channels = [
  { icon: SiWhatsapp, label: "Canal de atención por WhatsApp", value: "+593 2401 7002", brandColor: "#0b80bd" },
  { icon: Monitor, label: "Oficina virtual", value: "Humana Direct" },
  { icon: ClipboardList, label: "Formulario de", value: "Contacto" },
  { icon: MapPin, label: "Nuestras", value: "Oficinas y centros de atención" },
  { icon: Mail, label: "El correo", value: "servicioalcliente@humana.med.ec" },
  { icon: Phone, label: "El teléfono", value: "1800 humana (48 62 62)" },
];

const contactIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  store: Store,
  mail: Mail,
  whatsapp: SiWhatsapp,
  phone: Phone,
  globe: Globe,
  app: Smartphone,
  quote: ArrowRight,
};

export function generateStaticParams() {
  return allBlogArticles.map(article => ({ slug: article.slug }));
}

function renderBody(body: BlogBodyBlock[] | undefined, fallback: string) {
  if (!body || body.length === 0) {
    return <p>{fallback}</p>;
  }
  return body.map((block, i) => {
    if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
    if (block.type === "ul") return <ul key={i}>{block.items?.map((item, j) => <li key={j}>{item}</li>)}</ul>;
    return <p key={i}>{block.text}</p>;
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = allBlogArticles.find(a => a.slug === slug);
  if (!article) notFound();

  const related = allBlogArticles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <SiteShell title="Bienestar">
      <section className="content-section">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Inicio</Link>
          <span>»</span>
          <Link href="/blog">Blog</Link>
          <span>»</span>
          <Link href="/blog">{article.category}</Link>
          <span>»</span>
          <span>{article.title}</span>
        </nav>

        <div className="article-layout">
          <div>
            <header className="article-header">
              <h1>{article.title}</h1>
              <div className="article-meta">
                <span>{article.date}</span>
                <span className="article-category">{article.category}</span>
              </div>
            </header>

            <div className="article-hero-image">
              <Image src={article.image} alt={article.title} fill sizes="(max-width: 900px) 100vw, 820px" unoptimized />
            </div>

            <article className="article-body">
              {renderBody(article.body, article.copy)}
            </article>

            <div className="article-contact">
              <h3>Estamos contigo, en todo momento</h3>
              <ul className="article-contact-list">
                {contactBlocks.map(block => {
                  const Icon = contactIcons[block.icon] ?? Store;
                  return (
                    <li key={block.label + block.value}>
                      <span className="icon"><Icon size={16} /></span>
                      <p><strong>{block.label}</strong> <a href={block.href} target={block.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{block.value}</a></p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <aside className="blog-sidebar">
            <div className="blog-sidebar-card blog-app-card">
              <strong>MiHumana APP:</strong>
              <span className="blog-app-kicker">DISPONIBLE EN:</span>
              <div className="app-downloads">
                <a href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer"><Image src="/badges/google-play-badge.png" alt="Disponible en Google Play" width={897} height={240} unoptimized /></a>
                <a href="https://apps.apple.com/ec/search?term=mi%20humana" target="_blank" rel="noreferrer"><Image src="/badges/app-store-badge.png" alt="Disponible en el App Store" width={841} height={240} unoptimized /></a>
              </div>
            </div>

            <div className="article-related">
              <strong>Últimos artículos</strong>
              <ul className="article-related-list">
                {related.map(item => (
                  <li key={item.slug}>
                    <div className="article-related-thumb"><Image src={item.image} alt="" fill sizes="72px" unoptimized /></div>
                    <div className="article-related-copy">
                      <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      <span>{item.date}</span>
                      <p>{item.copy.slice(0, 80)}…</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="blog-sidebar-card">
              <strong>Canales de comunicación:</strong>
              <ul className="blog-channel-list">{channels.map(({ icon: Icon, label, value, brandColor }) => <li key={value}><span><Icon style={brandColor ? { color: brandColor } : undefined} /></span><p>{label} <Link href="/servicios">{value}</Link></p></li>)}</ul>
            </div>

            <div className="blog-sidebar-card blog-buy-card">
              <span className="blog-app-kicker">¿Aún no tienes un plan?</span>
              <strong><Building2 size={18} /> Compra online</strong>
              <p>Adquiere tu plan médico de forma fácil, segura y 100% digital.</p>
              <Link className="primary-button small" href="/planes">Cotizar online <ArrowRight size={16} /></Link>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
