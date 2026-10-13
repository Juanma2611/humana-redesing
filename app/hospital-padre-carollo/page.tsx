import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FlaskConical, Phone, ScanLine, SmilePlus, Stethoscope } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Hospital Padre Carollo - Humana S.A.",
  description: "Beneficios exclusivos para afiliados de Humana en el Hospital Padre Carollo Quito, adquiridos a través del bróker Unibroker.",
};

const benefits = [
  { icon: Building2, stat: "100%", label: "Cobertura Hospitalaria en el Hospital Padre Carollo Quito" },
  { icon: Stethoscope, stat: "2", label: "Consultas médicas gratuitas de Medicina Familiar al año por contrato" },
  { icon: SmilePlus, stat: "1", label: "Profilaxis odontológica anual gratuita para el titular" },
  { icon: FlaskConical, stat: "6%", label: "Descuento en exámenes de laboratorio ambulatorias" },
  { icon: ScanLine, stat: "6%", label: "Descuento en exámenes de imagen (excepto tomografías y derivaciones por resonancias)" },
];

export default function HospitalPadreCarolloPage() {
  return (
    <SiteShell title="Hospital Padre Carollo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Hospital Padre Carollo</span>
      </nav>

      <div className="biz-page pc-compact" data-accent="navy">
        {/* Hero dividido: texto + logo a la izquierda, foto a la derecha */}
        <section className="biz-hero is-split" id="padre-carollo-inicio">
          <div className="biz-hero-copy">
            <div className="biz-padre-carollo-logo">
              <Image src="https://humana.med.ec/wp-content/uploads/2022/02/logo-padre-carollo.png" alt="Logo Hospital Padre Carollo" fill sizes="140px" unoptimized style={{ objectFit: "contain" }} />
            </div>
            <span className="biz-eyebrow">CONVENIO ESPECIAL</span>
            <h1>Hospital Padre Carollo</h1>
            <p className="biz-hero-body" style={{ margin: "12px 0 0" }}>Aplica únicamente para contratos adquiridos a través del bróker Unibroker en Hospital Padre Carollo Quito desde el 7 de febrero de 2022.</p>
          </div>
          <figure className="biz-hero-split-media">
            <Image src="/images/hospital-padre-carollo/padre-carollo-hero.webp" alt="Equipo médico conversando con una paciente hospitalizada junto a su esposo, con vista a las montañas de Quito" fill sizes="(max-width: 900px) 100vw, 540px" unoptimized />
          </figure>
        </section>

        {/* Beneficios: 5 tarjetas del mismo tamaño --------------------------- */}
        <section className="biz-section is-brand">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">BENEFICIOS EXCLUSIVOS</span>
              <h2>Beneficios</h2>
            </div>
            <div className="pc-benefits">
              {benefits.map(({ icon: Icon, stat, label }) => (
                <div className="pc-benefit-card" key={label}>
                  <div className="pc-benefit-icon"><Icon aria-hidden="true" /></div>
                  <strong>{stat}</strong>
                  <p>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Relación con la Red Humano30 / Preciso15 ------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container" style={{ maxWidth: 720, textAlign: "center" }}>
            <span className="biz-eyebrow" style={{ color: "var(--humana-teal)" }}>RED HOSPITALARIA</span>
            <h2 style={{ color: "#073b60", fontSize: "clamp(28px,3.4vw,36px)", margin: "14px 0 16px" }}>El Hospital Padre Carollo es parte de la Red Humano30 / Preciso15</h2>
            <p style={{ color: "#3a3a3c", fontSize: 17, lineHeight: 1.65 }}>
              Como afiliado con cobertura Humano30 o Preciso15, también puedes usar este hospital dentro de la
              Red Hospitalaria, con 90% de cobertura en Quito.
            </p>
            <Link className="primary-button" style={{ marginTop: 20 }} href="/h30p15/">Ver la Red Humano30 / Preciso15 <ArrowRight size={18} /></Link>
          </div>
        </section>

        {/* Cierre ------------------------------------------------------------ */}
        <section className="biz-section is-dark is-close">
          <div className="biz-container biz-close">
            <div className="biz-section-head">
              <span className="biz-eyebrow">TU COBERTURA HUMANA</span>
              <h2>Conoce todos nuestros planes médicos.</h2>
            </div>
            <div className="biz-close-actions">
              <Link className="biz-btn-primary" href="/planes-medicos/">Conoce nuestros planes <ArrowRight aria-hidden="true" /></Link>
              <a className="biz-btn-link" href="tel:1800486262"><Phone size={16} aria-hidden="true" /> 1800 HUMANA (48 62 62)</a>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
