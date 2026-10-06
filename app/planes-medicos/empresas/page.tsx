import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import EmpresasClient from "./EmpresasClient";

export const metadata: Metadata = {
  title: "Planes médicos para Empresas - Humana S.A.",
  description:
    "Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y organizaciones de todos los tamaños.",
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
      <EmpresasClient />
    </SiteShell>
  );
}
