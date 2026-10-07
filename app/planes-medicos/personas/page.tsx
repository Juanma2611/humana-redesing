import type { Metadata } from "next";
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

      <section className="content-section plan-hub-intro">
        <h1>Planes médicos para Personas</h1>
      </section>

      <PersonasExperience />
    </SiteShell>
  );
}
