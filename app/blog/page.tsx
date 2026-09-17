import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, ClipboardList, Mail, MapPin, Monitor, Phone } from "lucide-react";
import { SiApple, SiGoogleplay, SiWhatsapp } from "react-icons/si";
import { PageHero, SiteShell } from "@/components/site-shell";
import { blogArticlesWithSlug as blogArticles, moreBlogArticlesWithSlug as moreBlogArticles, blogPlans } from "@/lib/blog-articles";

const channels = [
  { icon: SiWhatsapp, label: "Canal de atención por WhatsApp", value: "+593 2401 7002", brandColor: "#0b80bd" },
  { icon: Monitor, label: "Oficina virtual", value: "Humana Direct" },
  { icon: ClipboardList, label: "Formulario de", value: "Contacto" },
  { icon: MapPin, label: "Nuestras", value: "Oficinas y centros de atención" },
  { icon: Mail, label: "El correo", value: "servicioalcliente@humana.med.ec" },
  { icon: Phone, label: "El teléfono", value: "1800 humana (48 62 62)" },
];

const planCtas: Record<string, string[]> = {
  "Plan Proteger": ["Cotizar online", "Solicitar llamada"],
  "Humana Kids": ["Solicitar llamada"],
  "Plan Jóvenes": ["Cotizar online", "Solicitar llamada"],
  "Plan Prosonrisas": ["Cotizar online", "Solicitar llamada"],
  "Individual y Familiar": ["Solicitar llamada"],
};

const firstArticles = [...blogArticles, moreBlogArticles[0]];
const restArticles = moreBlogArticles.slice(1);

export default function Blog() {
  return <SiteShell title="Bienestar"><PageHero eyebrow="Blog Humana" title="Aprende, cuida y vive mejor" description="Contenido de salud y protección conectado con acciones útiles, sin interrumpir la lectura." imageSrc="/bienestar-hero.webp" imageAlt="Familia disfrutando una caminata saludable en un parque" imagePosition="center" />
    <section className="content-section blog-listing">
      <div className="blog-listing-main">
        <div className="blog-listing-grid">
          {firstArticles.map(article => <article key={article.title}><div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div><div className="home-blog-copy"><h3>{article.title}</h3><span>{article.date} | {article.category}</span><p>{article.copy}</p><div className="home-blog-actions"><Link href={`/blog/${article.slug}`}>Leer más <ArrowRight /></Link></div></div></article>)}
        </div>

        <div className="blog-listing-grid blog-plan-grid">
          {blogPlans.map(plan => <article key={plan.title} className="blog-plan-card"><div className="home-blog-image"><Image src={plan.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div><div className="home-blog-copy"><h3>{plan.title}</h3><span>{plan.date} | {plan.category}</span><p>{plan.copy}</p><div className="home-blog-actions">{planCtas[plan.title]?.map((cta, i) => <Link key={cta} className={i === 0 && planCtas[plan.title].length > 1 ? "primary-button small" : undefined} href="/planes">{cta} <ArrowRight size={16} /></Link>)}</div></div></article>)}
        </div>

        <div className="blog-listing-grid">
          {restArticles.map(article => <article key={article.title}><div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized /></div><div className="home-blog-copy"><h3>{article.title}</h3><span>{article.date} | {article.category}</span><p>{article.copy}</p><div className="home-blog-actions"><Link href={`/blog/${article.slug}`}>Leer más <ArrowRight /></Link></div></div></article>)}
        </div>
      </div>

      <aside className="blog-sidebar">
        <div className="blog-sidebar-card blog-app-card">
          <strong>MiHumana APP:</strong>
          <span className="blog-app-kicker">DISPONIBLE EN:</span>
          <div className="app-downloads"><a href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer"><SiGoogleplay /><span>Disponible en<strong>Google Play</strong></span></a><a href="https://apps.apple.com/ec/search?term=mi%20humana" target="_blank" rel="noreferrer"><SiApple /><span>Disponible en<strong>App Store</strong></span></a></div>
        </div>

        <div className="blog-sidebar-card">
          <strong>Canales de comunicación:</strong>
          <ul className="blog-channel-list">{channels.map(({icon:Icon,label,value,brandColor}) => <li key={value}><span><Icon style={brandColor ? { color: brandColor } : undefined} /></span><p>{label} <Link href="/servicios">{value}</Link></p></li>)}</ul>
        </div>

        <div className="blog-sidebar-card blog-buy-card">
          <span className="blog-app-kicker">¿Aún no tienes un plan?</span>
          <strong><Building2 size={18} /> Compra online</strong>
          <p>Adquiere tu plan médico de forma fácil, segura y 100% digital.</p>
          <p>¿Quieres saber cómo funciona el sistema de compra online? Es un modo seguro y rápido de contratar tu plan.</p>
          <Link className="primary-button small" href="/planes">Cotizar online <ArrowRight size={16} /></Link>
        </div>
      </aside>
    </section>
  </SiteShell>;
}
