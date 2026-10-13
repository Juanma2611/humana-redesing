import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { RedHospitalariaTable } from "./RedHospitalariaTable";

export const metadata: Metadata = {
  title: "Red Humano30 / Preciso15 - Humana S.A.",
  description:
    "En el resto de prestadores de Modalidad Cerrada de la Red CAM (Centros de Atención Médica) no aplica crédito ni cobertura vía reembolso",
};

const planLinks = [
  { label: "Practihumana15", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana15/" },
  { label: "Practihumana30", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana30/" },
  { label: "Metrohumana50", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana50/" },
  { label: "Metrohumana80", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana80/" },
  { label: "Metrohumana150", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana150/" },
];

export default function H30P15Page() {
  return (
    <SiteShell title="Red Humano30 / Preciso15">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Red Humano30 / Preciso15</span>
      </nav>

      <div className="biz-page" data-accent="navy">
        {/* Hero: foto + overlay, tarjetas glass en vez de logos rotos ------- */}
        <section className="biz-hero-photo" id="h30p15-inicio" style={{ minHeight: 480 }}>
          <Image className="biz-hero-photo-img" src="/images/h30p15/h30p15-hero.webp" alt="Dos profesionales de la salud conversando mientras caminan por el pasillo de un hospital" fill sizes="100vw" unoptimized />
          <div className="biz-hero-photo-overlay" />
          <div className="biz-hero-photo-content">
            <span className="biz-eyebrow">REDES PREFERENTES</span>
            <h1>Red Humano30 / Preciso15</h1>
            <div className="h30p15-name-cards">
              <div className="h30p15-name-card"><strong>Humano 30</strong><span>Metrohumana 30.000</span></div>
              <div className="h30p15-name-card"><strong>Preciso 15</strong><span>Practihumana 15.000</span></div>
            </div>
          </div>
        </section>

        {/* Red Ambulatoria: dos columnas ------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">COBERTURA AMBULATORIA</span>
              <h2>Red Ambulatoria</h2>
            </div>
            <div className="h30p15-ambulatoria">
              <div className="h30p15-ambulatoria-logos">
                <div className="h30p15-logo-card"><Image src="https://humana.med.ec/wp-content/uploads/2021/04/metrored-medilink-logos.png" alt="Logos Metrored y Medilink" fill sizes="320px" unoptimized style={{ objectFit: "contain" }} /></div>
              </div>
              <p className="h30p15-ambulatoria-text">En el resto de prestadores de Modalidad Cerrada de la Red CAM (Centros de Atención Médica) no aplica crédito ni cobertura vía reembolso.</p>
            </div>
          </div>
        </section>

        {/* Red Hospitalaria: tabla con pestañas y tarjetas en móvil --------- */}
        <section className="biz-section is-dark">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">COBERTURA HOSPITALARIA</span>
              <h2>Red Hospitalaria</h2>
            </div>

            <RedHospitalariaTable />

            <div className="biz-notice" style={{ maxWidth: 820, margin: "24px auto 0" }}>
              <Info size={20} aria-hidden="true" />
              <p>En el resto de prestadores de Modalidad Cerrada de la RED Hospitalaria, tendrán cobertura como Modalidad Abierta vía reembolso al 80% y aplicará como cualquier incapacidad.</p>
            </div>
          </div>
        </section>

        {/* Planes individuales y familiares ------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <h2>Planes Individuales y Familiares</h2>
            </div>
            <div className="h30p15-plan-grid">
              {planLinks.map((p) => (
                <div className="h30p15-plan-card" key={p.label}>
                  <strong>{p.label}</strong>
                  <Link className="secondary-button small" href={p.href}>Ver plan <ArrowRight size={14} /></Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
