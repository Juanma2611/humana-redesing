import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import EmpresasExperience from "./EmpresasExperience";

export const metadata: Metadata = {
  title: "Planes médicos para Empresas - Humana S.A.",
  description:
    "Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y organizaciones de todos los tamaños.",
  alternates: { canonical: "https://humana.med.ec/planes-medicos/empresas/" },
};

export default function PlanesMedicosEmpresasPage() {
  return (
    <SiteShell title="Planes médicos para Empresas">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link>
        <span>»</span>
        <span>Planes médicos para Empresas</span>
      </nav>

      <section className="content-section plan-hub-intro">
        <span className="kicker" style={{ display: "block", marginBottom: 6 }}>Bienestar que impulsa a tu equipo</span>
        <h1>Planes médicos para Empresas</h1>
        <h2>Cobertura Integral para Personas y Empresas</h2>
        <p>
          Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo
          tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y
          organizaciones de todos los tamaños.
        </p>
      </section>

      <EmpresasExperience />
    </SiteShell>
  );
}
