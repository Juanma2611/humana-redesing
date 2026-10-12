import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Hospital Padre Carollo - Humana S.A.",
  description: "Beneficios exclusivos para afiliados de Humana en el Hospital Padre Carollo Quito, adquiridos a través del bróker Unibroker.",
};

const benefits = [
  { stat: "100%", label: "Cobertura Hospitalaria en el Hospital Padre Carollo Quito" },
  { stat: "2", label: "Consultas médicas gratuitas de Medicina Familiar al año por contrato" },
  { stat: "1", label: "Profilaxis odontológica anual gratuita para el titular" },
  { stat: "6%", label: "Descuento en exámenes de laboratorio ambulatorias" },
  { stat: "6%", label: "Descuento en exámenes de imagen (excepto tomografías y derivaciones por resonancias)" },
];

export default function HospitalPadreCarolloPage() {
  return (
    <SiteShell title="Hospital Padre Carollo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Hospital Padre Carollo</span>
      </nav>

      <div className="biz-page" data-accent="navy">
        {/* Hero --------------------------------------------------------- */}
        <section className="biz-hero" id="padre-carollo-inicio">
          <div className="biz-hero-copy">
            <div style={{ position: "relative", width: 160, height: 70, margin: "0 auto 20px", background: "#fff", borderRadius: 14, padding: 10 }}>
              <Image src="https://humana.med.ec/wp-content/uploads/2022/02/logo-padre-carollo.png" alt="Logo Hospital Padre Carollo" fill sizes="160px" unoptimized style={{ objectFit: "contain" }} />
            </div>
            <span className="biz-eyebrow">CONVENIO ESPECIAL</span>
            <h1>Hospital Padre Carollo</h1>
            <div className="biz-padre-carollo-notice">
              <AlertTriangle size={20} aria-hidden="true" />
              <p>Aplica únicamente para contratos adquiridos a través del bróker Unibroker en Hospital Padre Carollo Quito desde el 7 de febrero de 2022.</p>
            </div>
          </div>
        </section>

        {/* Beneficios: bloque de color de marca con patrón ------------------ */}
        <section className="biz-section is-brand">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">BENEFICIOS EXCLUSIVOS</span>
              <h2>Beneficios</h2>
            </div>
            <div className="biz-padre-carollo-grid">
              {benefits.map((b) => (
                <div className="biz-price-card" key={b.label}>
                  <strong>{b.stat}</strong>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
