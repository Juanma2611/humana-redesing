import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShieldCheck, ShoppingCart, UsersRound } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import PersonasExperience from "./PersonasExperience";

export const metadata: Metadata = {
  title: "Planes médicos para Personas - Humana S.A.",
  description:
    "Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y organizaciones de todos los tamaños.",
  alternates: { canonical: "https://humana.med.ec/planes-medicos/personas/" },
};

export default function PlanesMedicosPersonasPage() {
  return (
    <SiteShell title="Planes médicos para Personas">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link>
        <span>»</span>
        <span>Planes médicos para Personas</span>
      </nav>

      <section className="pm-personas-hero">
        <div className="pm-personas-hero-shapes" aria-hidden="true" />
        <div className="pm-personas-hero-arc" aria-hidden="true" />
        <div className="pm-personas-hero-inner">
          <div className="pm-personas-hero-copy">
            <span className="pm-personas-hero-kicker">Para ti y tu familia</span>
            <h1>Planes médicos para Personas</h1>
            <p>Planes individuales, familiares y especializados para cuidar lo que más te importa, en cada etapa de tu vida.</p>
            <div className="pm-personas-hero-actions">
              <Link className="primary-button" href="/cotizador/"><ShoppingCart size={16} /> Cotiza tu plan <ArrowRight size={16} /></Link>
              <a className="pm-hero-ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> Hablar con un asesor</a>
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
          <div className="pm-personas-hero-visual">
            <div className="pm-personas-hero-photo">
              <Image src="/images/planes/mh150/mh150-hospitalizacion.jpg" alt="Persona protegida por un plan médico Humana" fill sizes="(max-width: 980px) 100vw, 45vw" unoptimized style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <PersonasExperience />
    </SiteShell>
  );
}
