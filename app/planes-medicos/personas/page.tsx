import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
        <div className="pm-personas-hero-inner">
          <div className="pm-personas-hero-copy">
            <span className="pm-personas-hero-kicker">Para ti y tu familia</span>
            <h1>Planes médicos para Personas</h1>
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
