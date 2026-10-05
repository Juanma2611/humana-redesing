import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, UsersRound } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export default function PlanesMedicosPage() {
  return (
    <SiteShell title="Planes médicos">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <span>Planes médicos</span>
      </nav>

      <section className="content-section plan-hub-intro">
        <h1>Planes médicos</h1>
        <h2>Cobertura Integral para Personas y Empresas</h2>
        <p>
          Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo
          tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y
          organizaciones de todos los tamaños.
        </p>
      </section>

      <section className="content-section plan-hub-grid">
        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image
              src="/familia-humana.png"
              alt="Personas y familias protegidas por un plan médico Humana"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><UsersRound /></span>
            <h3>Personas</h3>
            <p>
              Humana te presenta una amplia gama de planes individuales, familiares y para coberturas
              específicas que te ayudarán a mantenerte seguro en tu camino de vida.
            </p>
            <Link className="primary-button" href="/planes-medicos/personas">
              Ver planes <ArrowRight size={18} />
            </Link>
          </div>
        </article>

        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image
              src="/humana-business-team-v2.png"
              alt="Equipo de colaboradores protegido por un plan médico Humana"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
              unoptimized
            />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><Building2 /></span>
            <h3>Empresas</h3>
            <p>
              La solución de protección para tus empleados y sus familias. Humana te ofrece excelentes
              beneficios acordes a las necesidades de tu empresa para atraer y retener el talento.
            </p>
            <Link className="primary-button" href="/empresas">
              Ver planes <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>
    </SiteShell>
  );
}
