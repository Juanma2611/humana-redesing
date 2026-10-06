import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalClosingCta, InstitutionalExploreCards } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Hospital Metropolitano - Humana S.A.",
  description: "El Hospital Metropolitano es el complejo médico hospitalario más completo y moderno del Ecuador, certificado con la ISO 9001:2000.",
};

export default function HospitalMetropolitanoPage() {
  return (
    <SiteShell title="Hospital Metropolitano">
      <InstitutionalBreadcrumb page="Hospital Metropolitano" />

      {/* Plantilla institucional (aprobada en Humana S.A.): hero de borde a
          borde con degradado celeste. No hay foto de fachada disponible para
          este hospital, así que la columna de imagen usa el logo oficial
          contenido (sin estirarlo) en vez de inventar una fotografía. */}
      <section className="institutional-hero">
        <div className="institutional-hero-inner">
          <div className="institutional-hero-media is-logo">
            <Image src="https://humana.med.ec/wp-content/uploads/2020/12/hospital-metropolitano-humana-medicina-prepagada-logo.png" alt="Logo Hospital Metropolitano" fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized />
          </div>
          <div className="institutional-hero-copy">
            <span className="kicker">¿Quiénes somos?</span>
            <h1>Hospital Metropolitano</h1>
            <p className="text-justify-wide">
              El Hospital Metropolitano es un referente de excelencia en el Ecuador, cuidando la vida de
              sus pacientes. Es el complejo médico hospitalario más completo y moderno del país. Cuenta
              con un personal médico altamente capacitado, una infraestructura con estándares
              internacionales y la más avanzada tecnología. El único hospital privado del Ecuador
              certificado con la ISO: 9001:2000.
            </p>
            <p className="text-justify-wide">
              El Hospital Metropolitano trabaja con calidad, mejorando en forma continua sus servicios,
              innovando los procesos, equipos e infraestructura en forma permanente, para satisfacer las
              necesidades y expectativas de sus pacientes. Cuenta con un equipo profesional, enfocado en
              la atención, con profesionalidad y calidez.
            </p>
            <p className="text-justify-wide">
              También está comprometido con el medio ambiente, y cuida a sus colaboradores y comunidad en
              general, velando siempre para que los procedimientos estén de acuerdo con las leyes y
              reglamentos internos y externos, buscando atender los diversos eventos que implica la
              atención en salud.
            </p>
          </div>
        </div>
      </section>

      <InstitutionalClosingCta />

      <InstitutionalExploreCards currentHref="/por-que-humana/hospital-metropolitano/" />
    </SiteShell>
  );
}
