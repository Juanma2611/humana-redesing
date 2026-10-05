import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2 } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Planes médicos para Pequeñas y Medianas Empresas - Humana S.A.",
};

export default function PequenasYMedianasPage() {
  return (
    <SiteShell title="Planes médicos para Pequeñas y Medianas Empresas">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes-medicos/empresas">Planes médicos para Empresas</Link>
        <span>»</span>
        <span>Planes médicos para Pequeñas y Medianas Empresas</span>
      </nav>

      <section className="content-section plan-hub-intro">
        <h1>Planes médicos para Pequeñas y Medianas Empresas</h1>
      </section>

      <section className="content-section plan-hub-grid">
        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image
              src="https://humana.med.ec/wp-content/uploads/2025/09/plan-para-empresa-humana-medicina-prepagada.jpg"
              alt="Plan Humana Business"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><Building2 /></span>
            <h3>Plan Humana Business</h3>
            <p>
              La combinación perfecta entre cobertura completa y la flexibilidad de elegir lo que
              necesitas. <strong>De 25 a 45 colaboradores.</strong>
            </p>
            <Link className="primary-button" href="/planes-medicos/empresas/pequenas-y-medianas/plan-humana-business">
              Ver planes <ArrowRight size={18} />
            </Link>
          </div>
        </article>

        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image
              src="https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg"
              alt="Plan Pyme"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><Briefcase /></span>
            <h3>Plan Pyme</h3>
            <p>
              Beneficios de salud accesibles y valiosos para pequeñas empresas.{" "}
              <strong>De 5 hasta 25 colaboradores.</strong>
            </p>
            <Link className="primary-button" href="/planes-medicos/empresas/pequenas-y-medianas/plan-empresarial">
              Ver planes <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
