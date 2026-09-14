import Link from "next/link";
import { ArrowRight, BookOpen, HeartPulse, Search, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";

const articles = [
  {icon:HeartPulse,category:"Bienestar",title:"5 hábitos diarios que ayudan a cuidar tu bienestar",copy:"Cambios pequeños y sostenibles para sentirte mejor en tu rutina.",cta:"Encuentra una cobertura que te acompañe"},
  {icon:UsersRound,category:"Salud familiar",title:"¿Cómo comparar un plan médico para tu familia?",copy:"Una guía para entender necesidades, red médica y nivel de respaldo.",cta:"Descubre tu plan ideal"},
  {icon:ShieldCheck,category:"Seguros y protección",title:"Cobertura de salud: una decisión para tu tranquilidad",copy:"Qué revisar antes de elegir y qué preguntas conviene hacer.",cta:"Compara alternativas"},
];

export default function Blog() {
  return <SiteShell title="Bienestar"><PageHero eyebrow="Blog Humana" title="Aprende, cuida y vive mejor" description="Contenido de salud y protección conectado con acciones útiles, sin interrumpir la lectura." imageSrc="/bienestar-hero.webp" imageAlt="Familia disfrutando una caminata saludable en un parque" imagePosition="center" />
    <section className="content-section"><div className="blog-tools"><label><Search /><input placeholder="Busca un tema de interés" /></label><div><span><BookOpen /> Información fácil de entender</span><span><HeartPulse /> Enfocada en bienestar</span></div></div><div className="blog-grid">{articles.map(({icon:Icon,category,title,copy,cta}) => <article key={title}><div className="blog-cover"><Icon /></div><span>{category}</span><h2>{title}</h2><p>{copy}</p><Link href="/encontrar-plan"><strong>{cta}</strong><small>Explorar ahora <ArrowRight size={16} /></small></Link></article>)}</div><div className="info-banner"><div><strong>¿No sabes qué plan necesitas?</strong><p>Responde preguntas sencillas y recibe una orientación inicial.</p></div><Link className="primary-button" href="/encontrar-plan">Descubre tu plan ideal</Link></div></section>
  </SiteShell>;
}
