import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, MessageCircle, PhoneCall, ShoppingCart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Planes médicos para Pequeñas y Medianas Empresas - Humana S.A.",
  description: "Planes médicos de Humana para pequeñas y medianas empresas: Humana Business para equipos de 25 a 45 colaboradores y Plan Pyme para equipos de 5 a 25 colaboradores.",
};

const plans = [
  {
    id: "pyme",
    name: "Plan Pyme",
    icon: Briefcase,
    chip: "De 5 hasta 25 colaboradores",
    image: "https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg",
    imageAlt: "Plan Pyme",
    description: (
      <>Beneficios de salud accesibles y valiosos para pequeñas empresas. <strong>De 5 hasta 25 colaboradores.</strong></>
    ),
    href: "/planes-medicos/empresas/pequenas-y-medianas/plan-empresarial/",
  },
  {
    id: "business",
    name: "Plan Humana Business",
    icon: Building2,
    chip: "De 25 a 45 colaboradores",
    image: "https://humana.med.ec/wp-content/uploads/2025/09/plan-para-empresa-humana-medicina-prepagada.jpg",
    imageAlt: "Plan Humana Business",
    description: (
      <>La combinación perfecta entre cobertura completa y la flexibilidad de elegir lo que necesitas. <strong>De 25 a 45 colaboradores.</strong></>
    ),
    href: "/planes-medicos/empresas/pequenas-y-medianas/plan-humana-business/",
  },
];

export default function PequenasYMedianasPage() {
  return (
    <SiteShell title="Planes médicos para Pequeñas y Medianas Empresas">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link>
        <span>»</span>
        <span>Pequeñas y Medianas</span>
      </nav>

      <section className="pm-pym-hero">
        <div className="pm-pym-hero-shapes" aria-hidden="true" />
        <div className="pm-pym-hero-grid" aria-hidden="true" />
        <div className="pm-pym-hero-inner">
          <span className="pm-biz-topHero-kicker">Bienestar que impulsa a tu equipo</span>
          <h1>Planes médicos para Pequeñas y Medianas Empresas</h1>
          <div className="pm-biz-topHero-actions">
            <Link className="primary-button" href="/cotizador/"><ShoppingCart size={16} /> Cotiza para tu empresa <ArrowRight size={16} /></Link>
            <a className="pm-hero-ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Hablar con un asesor</a>
          </div>
        </div>
      </section>

      <section className="pm-pym-section">
        <div className="pm-pym-grid">
          {plans.map(({ id, name, icon: Icon, chip, image, imageAlt, description, href }) => (
            <article className="pm-pym-card" key={id}>
              <div className="pm-pym-card-media">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 50vw" unoptimized style={{ objectFit: "cover" }} />
              </div>
              <div className="pm-pym-card-copy">
                <span className="pm-chip pm-pym-card-chip"><Icon size={15} aria-hidden="true" /> {chip}</span>
                <h2>{name}</h2>
                <p>{description}</p>
                <Link className="primary-button" href={href}>
                  Ver planes <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pm-hub-closing">
        <div className="pm-hub-closing-inner">
          <h2>¿Listo para encontrar el plan de tu empresa?</h2>
          <p>Cotiza en línea, solicita una llamada o escríbenos por WhatsApp.</p>
          <div className="pm-hub-closing-actions">
            <Link className="primary-button" href="/cotizador/"><ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} /></Link>
            <a className="secondary-button light" href="tel:1800486262"><PhoneCall size={16} /> Solicitar llamada</a>
            <a className="secondary-button green" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          </div>
          <Link className="pm-pym-back-link" href="/planes-medicos/empresas/">Ver todos los planes para empresas</Link>
        </div>
      </section>
    </SiteShell>
  );
}
