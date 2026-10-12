import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ReceiptText, ShieldCheck, Users, Activity, Syringe, Pill, ClipboardList, MapPin, Stethoscope, Ambulance, HeartPulse } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Somos parte de la red Humana - Humana S.A.",
  description: "Consulta autorizaciones, copagos, reembolsos y todos los servicios de Humana: médico a domicilio, teleconsultas, ambulancia y más.",
};

const topics = [
  { icon: ClipboardList, label: "Autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  { icon: ReceiptText, label: "Copago", href: "https://servicio.humana.med.ec/hc/es/articles/7467007406221-Farmacias-Puntos-de-venta" },
  { icon: Activity, label: "Reembolso", href: "https://servicio.humana.med.ec/hc/es/articles/4402788919693-Gestionar-tus-reembolsos" },
  { icon: Phone, label: "Contactos", href: "https://servicio.humana.med.ec/hc/es/articles/4417526509837-Conoce-nuestros-canales-de-comunicaci%C3%B3n" },
];

const services = [
  { icon: Stethoscope, label: "Médico a domicilio", href: "https://servicio.humana.med.ec/hc/es/articles/4402813434253-M%C3%A9dico-a-domicilio" },
  { icon: Users, label: "Teleconsultas", href: "https://servicio.humana.med.ec/hc/es/articles/4402720816013-Teleconsulta-m%C3%A9dica" },
  { icon: Ambulance, label: "Ambulancia", href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre" },
  { icon: HeartPulse, label: "Programa de pacientes Covid-19", href: "https://servicio.humana.med.ec/hc/es/articles/4403176927757-Programa-de-pacientes-Covid" },
  { icon: Syringe, label: "Plan de vacunación infantil", href: "https://servicio.humana.med.ec/hc/es/articles/4403717589517-Plan-de-vacunaci%C3%B3n-infantil" },
  { icon: Pill, label: "Plan de medicación continua", href: "https://servicio.humana.med.ec/hc/es/sections/360013986011-Plan-de-medicaci%C3%B3n-Continua" },
  { icon: ClipboardList, label: "Autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  { icon: MapPin, label: "Red de Prestadores", href: "https://red.humana.med.ec/RedHumana" },
];

export default function SomosParteRedHumanaPage() {
  return (
    <SiteShell title="Somos parte de la red Humana">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Somos parte de la red Humana</span>
      </nav>

      <div className="biz-page" data-accent="blue">
        {/* Hero: foto completa + overlay navy ----------------------------- */}
        <section className="biz-hero-photo" id="red-humana-inicio" style={{ minHeight: 420 }}>
          <Image className="biz-hero-photo-img" src="/images/somos-parte-de-la-red-humana/somos-parte-hero.webp" alt="Enfermera y doctora conversando en la recepción de un hospital de la red Humana" fill sizes="100vw" unoptimized />
          <div className="biz-hero-photo-overlay" />
          <div className="biz-hero-photo-content">
            <span className="biz-eyebrow">RED HUMANA</span>
            <h1>Somos parte de la red Humana</h1>
          </div>
        </section>

        {/* 4 consultas rápidas --------------------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">CONSULTAS RÁPIDAS</span>
              <h2>Haz clic en el tema que necesitas consultar</h2>
            </div>
            <div className="medi-quick-grid">
              {topics.map(({ icon: Icon, label, href }) => (
                <a className="medi-quick-card" href={href} target="_blank" rel="noreferrer" key={label}>
                  <span className="medi-quick-icon"><Icon aria-hidden="true" /></span>
                  <span className="medi-quick-label">{label}</span>
                  <ArrowRight className="medi-quick-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 8 servicios, como en Medihumana ---------------------------------- */}
        <section className="biz-section is-brand">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">TODOS LOS SERVICIOS</span>
              <h2>Haz clic y accede a nuestros servicios</h2>
            </div>
            <div className="medi-quick-grid">
              {services.map(({ icon: Icon, label, href }) => (
                <a className="medi-quick-card" href={href} target="_blank" rel="noreferrer" key={`${label}-${href}`}>
                  <span className="medi-quick-icon"><Icon aria-hidden="true" /></span>
                  <span className="medi-quick-label">{label}</span>
                  <ArrowRight className="medi-quick-arrow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre: teléfono destacado ---------------------------------------- */}
        <section className="biz-section is-dark is-close">
          <div className="biz-container biz-close">
            <div className="biz-section-head">
              <span className="biz-eyebrow"><ShieldCheck size={14} style={{ display: "inline", verticalAlign: "-2px", marginRight: 6 }} aria-hidden="true" />¿NECESITAS AYUDA?</span>
              <h2>Para mayor información llama al 1800 HUMANA (48 62 62)</h2>
            </div>
            <div className="biz-close-actions">
              <a className="biz-btn-primary" href="tel:1800486262"><Phone size={18} aria-hidden="true" /> Llamar ahora</a>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
