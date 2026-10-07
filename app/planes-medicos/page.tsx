import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import { headers } from "next/headers";
import { ArrowRight, Building2, MessageCircle, PhoneCall, ShieldCheck, ShoppingCart, UsersRound } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { resolveLegacyPlanTarget } from "@/lib/legacy-plan-redirect";

export const metadata: Metadata = {
  title: "Planes médicos - Humana S.A.",
  description:
    "Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y organizaciones de todos los tamaños.",
  alternates: { canonical: "https://humana.med.ec/planes-medicos/" },
};

export default async function PlanesMedicosPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await headers();
  const params = await searchParams;
  const legacyTarget = resolveLegacyPlanTarget(params);
  if (legacyTarget) permanentRedirect(legacyTarget);

  return (
    <SiteShell title="Planes médicos">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <span>Planes médicos</span>
      </nav>

      <section className="pm-hero">
        <div className="pm-hero-shapes" aria-hidden="true" />
        <div className="pm-hero-arc" aria-hidden="true" />
        <div className="pm-hero-lines" aria-hidden="true" />
        <div className="pm-hero-inner">
          <div className="pm-hero-copy">
            <span className="pm-hero-kicker">Planes médicos Humana</span>
            <h1>Planes médicos</h1>
            <h2>Cobertura Integral para Personas y Empresas</h2>
            <p>
              Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo
              tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y
              organizaciones de todos los tamaños.
            </p>
            <div className="pm-hero-actions">
              <Link className="primary-button" href="/cotizador/"><ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} /></Link>
              <a className="pm-hero-ghost-button" href="tel:1800486262"><PhoneCall size={16} /> Solicitar llamada</a>
              <a className="pm-hero-ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
            </div>
            <div className="pm-hero-stats">
              <div className="pm-hero-stat">
                <UsersRound size={20} aria-hidden="true" />
                <div><strong>+200.000</strong><span>personas y empresas confían en Humana</span></div>
              </div>
              <div className="pm-hero-stat">
                <ShieldCheck size={20} aria-hidden="true" />
                <div><strong>$15.000 – $150.000</strong><span>de cobertura anual según el plan</span></div>
              </div>
            </div>
          </div>
          <div className="pm-hero-visual">
            <div className="pm-hero-photo">
              <Image src="/familia-humana.png" alt="Familia disfrutando un momento juntos, protegida por Humana" fill sizes="(max-width: 980px) 100vw, 45vw" unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="pm-hub-grid-section">
        <div className="pm-hub-grid">
          <article className="pm-hub-card">
            <div className="pm-hub-card-media">
              <Image
                src="https://humana.med.ec/wp-content/uploads/2026/09/PERSONAS_medio_v2.jpg"
                alt="Personas y familias protegidas por un plan médico Humana"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="pm-hub-card-copy">
              <span className="plan-hub-card-icon"><UsersRound /></span>
              <h3>Personas</h3>
              <p>
                Humana te presenta una amplia gama de planes individuales, familiares y para coberturas
                específicas que te ayudarán a mantenerte seguro en tu camino de vida.
              </p>
              <Link className="primary-button" href="/planes-medicos/personas/">
                Ver planes <ArrowRight size={18} />
              </Link>
            </div>
          </article>

          <article className="pm-hub-card">
            <div className="pm-hub-card-media">
              <Image
                src="https://humana.med.ec/wp-content/uploads/2025/09/EMPRESAS_medio.jpg"
                alt="Equipo de colaboradores protegido por un plan médico Humana"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="pm-hub-card-copy">
              <span className="plan-hub-card-icon"><Building2 /></span>
              <h3>Empresas</h3>
              <p>
                La solución de protección para tus empleados y sus familias. Humana te ofrece excelentes
                beneficios acordes a las necesidades de tu empresa para atraer y retener el talento.
              </p>
              <Link className="primary-button" href="/planes-medicos/empresas/">
                Ver planes <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="pm-hub-closing" id="asesor">
        <div className="pm-hub-closing-inner">
          <h2>¿Listo para encontrar tu plan?</h2>
          <p>Cotiza en línea, solicita una llamada o escríbenos por WhatsApp.</p>
          <div className="pm-hub-closing-actions">
            <Link className="primary-button" href="/cotizador/"><ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} /></Link>
            <a className="secondary-button light" href="tel:1800486262"><PhoneCall size={16} /> Solicitar llamada</a>
            <a className="secondary-button green" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
