"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Activity, Ambulance, ArrowRight, Check, ChevronDown, CreditCard, Cross, Droplets, FileCheck2, HeartHandshake,
  HeartPulse, Laptop, Lock, MessageCircle, PhoneCall, PlusCircle, ShieldCheck, Sparkles, Stethoscope, X,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import type { PlanDetail } from "@/lib/plan-details";

const benefitIcons: Record<string, typeof HeartPulse> = {
  cross: Cross,
  heartpulse: HeartPulse,
  droplets: Droplets,
  hearthandshake: HeartHandshake,
  activity: Activity,
  ambulance: Ambulance,
};

function ActionButtons({ plan, onDemo }: { plan: PlanDetail; onDemo: (message: string) => void }) {
  return (
    <div className="plan-detail-actions">
      <Link className="primary-button" href="/planes">
        {plan.slug === "proteger" ? "Cotizar plan" : "Cotizar online"} <ArrowRight size={16} />
      </Link>
      <button
        type="button"
        className="secondary-button green"
        onClick={() => onDemo("Solicitud de asesoría demostrativa. En la versión oficial se conectará con un asesor Humana.")}
      >
        <MessageCircle size={16} /> Pedir asesoría
      </button>
      <button
        type="button"
        className="secondary-button light"
        onClick={() => onDemo("Solicitud de llamada demostrativa. No se enviaron datos, un asesor te contactará en la versión oficial.")}
      >
        <PhoneCall size={16} /> Solicitar llamada
      </button>
    </div>
  );
}

function CoverageValue({ value }: { value: string }) {
  if (value === "check") return <Check className="cell-check" size={18} aria-label="Incluido" />;
  if (value === "x") return <X className="cell-x" size={18} aria-label="No incluido" />;
  return <>{value}</>;
}

function FaqAccordion({ plan }: { plan: PlanDetail }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="plan-faq-accordion">
      {plan.faqs.map((faq, index) => {
        const isOpen = open === index;
        return (
          <div className={`plan-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
            <button type="button" className="plan-faq-trigger" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
              <span>{faq.question}</span>
              <ChevronDown size={18} />
            </button>
            {isOpen && (
              <div className="plan-faq-content">
                {faq.answer ? (
                  <>
                    {faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {plan.slug === "proteger" && index === 0 && (
                      <ul className="plan-faq-checklist">
                        {[
                          "Hospitalización por emergencias y cirugías complejas",
                          "Terapias intensivas",
                          "Tratamientos de enfermedades catastróficas (como cáncer)",
                          "Cobertura de medicamentos y materiales médicos",
                          "Cobertura por accidentes graves",
                          "Honorarios médicos especializados",
                        ].map((item) => <li key={item}><Check size={15} />{item}</li>)}
                      </ul>
                    )}
                  </>
                ) : (
                  <p className="plan-faq-placeholder">Contenido disponible próximamente.</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="plan-lead-form">
      <h3>Solicita información:</h3>
      {submitted ? (
        <div className="plan-lead-success" role="status">
          <Check size={18} />
          <span>Formulario demostrativo. No se enviaron datos reales; un asesor de Humana se pondrá en contacto en la versión oficial.</span>
        </div>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <label>Nombre y Apellido<input type="text" name="name" required /></label>
          <label>Correo electrónico<input type="email" name="email" required /></label>
          <label>Cédula<input type="text" name="id" inputMode="numeric" /></label>
          <label>Provincia<input type="text" name="province" /></label>
          <label>Número de teléfono<input type="tel" name="phone" /></label>
          <label className="plan-lead-checkbox">
            <input type="checkbox" required /> <span>He leído y acepto la política de tratamiento de datos personales.</span>
          </label>
          <button type="submit" className="primary-button small">Enviar</button>
        </form>
      )}
      <p className="plan-lead-disclaimer">Formulario demostrativo del prototipo. No envía información a ningún sistema.</p>
    </div>
  );
}

function AcquireSection({ onDemo }: { onDemo: (message: string) => void }) {
  const steps = [
    { icon: FileCheck2, label: "Cotice y elija plan" },
    { icon: CreditCard, label: "Registre sus datos" },
    { icon: Lock, label: "Botón de pago seguro (Tarjetas de crédito/débito)" },
    { icon: ShieldCheck, label: "Aceptación electrónica" },
  ];
  return (
    <section className="plan-acquire-section">
      <div className="plan-acquire-copy">
        <span className="kicker">Compra 100% digital</span>
        <h2>Adquiera su plan médico:</h2>
        <p>Ahora puede adquirir su plan médico de forma fácil y segura en solo 4 pasos:</p>
        <ol className="plan-acquire-steps">
          {steps.map(({ icon: Icon, label }) => (
            <li key={label}><span><Icon size={18} /></span>{label}</li>
          ))}
        </ol>
        <p className="plan-acquire-note">
          Al finalizar la compra recibirá los documentos habilitantes firmados por vía electrónica, la confirmación de su pago, el kit de bienvenida digital, y su manual de afiliado <Check size={14} className="cell-check" />
        </p>
        <div className="plan-acquire-badges">
          <span>Venta digital</span><span>Fácil</span><span>Seguro</span><span>Sin trámites</span>
        </div>
        <button type="button" className="primary-button" onClick={() => onDemo("Cotización online demostrativa. No se enviaron datos.")}>
          Cotizar online <ArrowRight size={16} />
        </button>
      </div>
      <div className="plan-acquire-visual" aria-hidden="true"><Laptop size={72} /></div>
    </section>
  );
}

export function PlanDetailView({ plan }: { plan: PlanDetail }) {
  const [message, setMessage] = useState("");
  const showDemo = (text: string) => setMessage(text);

  return (
    <SiteShell title={plan.title}>
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes">Planes médicos para Personas</Link>
        <span>»</span>
        <span>{plan.title}</span>
      </nav>

      <section className="plan-detail-hero">
        <div className="plan-detail-hero-media">
          <Image src={plan.heroImage} alt={plan.title} fill sizes="(max-width: 900px) 100vw, 900px" unoptimized />
          <div className="plan-detail-hero-shade" />
        </div>
        <div className="plan-detail-hero-copy">
          <span className="kicker">{plan.eyebrow}</span>
          <h1>{plan.title}</h1>
          {plan.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ActionButtons plan={plan} onDemo={showDemo} />
        </div>
      </section>

      <section className="content-section plan-detail-coverage">
        <div className="plan-detail-coverage-layout">
          <div className="plan-detail-tables">
            {plan.coverageTables.map((table) => (
              <div className="plan-detail-table-wrap" key={table.title}>
                {table.title && <h2>{table.title}</h2>}
                <table className="plan-detail-table">
                  {table.columns.length > 1 && (
                    <thead>
                      <tr>
                        <th></th>
                        {table.columns.map((col) => <th key={col}>{col}</th>)}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {table.rows.map((row) => {
                      const isSectionHeader = row.values.every((v) => v === "");
                      return (
                        <tr key={row.label} className={isSectionHeader ? "plan-table-section" : undefined}>
                          <th scope="row">{row.label}</th>
                          {!isSectionHeader && row.values.map((value, i) => (
                            <td key={`${row.label}-${i}`}><CoverageValue value={value} /></td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ))}

            {plan.coverageNotes && (
              <ul className="plan-detail-notes">
                {plan.coverageNotes.map((note) => <li key={note}><Sparkles size={16} />{note}</li>)}
              </ul>
            )}
          </div>

          <aside className="plan-detail-side">
            <ActionButtons plan={plan} onDemo={showDemo} />

            {plan.mainBenefits && (
              <div className="plan-detail-main-benefits">
                <h3>Principales beneficios:</h3>
                <div className="plan-detail-benefits-grid">
                  {plan.mainBenefits.map(({ icon, label }) => {
                    const Icon = benefitIcons[icon] ?? Stethoscope;
                    return (
                      <div className="plan-detail-benefit-card" key={label}>
                        <span><Icon size={22} /></span>
                        <p>{label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {plan.lifeInsurance && (
              <div className="plan-detail-life-card">
                <span><ShieldCheck size={22} /><HeartHandshake size={18} /></span>
                <div>
                  <strong>{plan.lifeInsurance.title}</strong>
                  <p>{plan.lifeInsurance.description}</p>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {plan.checkup && (
        <section className="content-section plan-detail-checkup">
          <span className="kicker">Beneficios especiales</span>
          <h2>Beneficios especiales:</h2>
          <div className="plan-checkup-card">
            <div className="plan-checkup-intro">
              <strong>{plan.checkup.title}</strong>
              <span className="plan-checkup-brand">Metrored</span>
            </div>
            <p>{plan.checkup.note}</p>
          </div>

          <div className="plan-checkup-layout">
            <div className="plan-checkup-table-wrap">
              <h3>{plan.checkup.tableTitle}</h3>
              <table className="plan-detail-table plan-checkup-table">
                <thead><tr><th>Paquete</th><th>Metrored</th></tr></thead>
                <tbody>
                  {plan.checkup.items.map((item) => (
                    <tr key={item}><th scope="row">{item}</th><td><Check className="cell-check" size={16} /></td></tr>
                  ))}
                  <tr className="plan-table-section"><th scope="row">N° de procedimientos</th><td>{plan.checkup.procedureCount}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="plan-checkup-conditions">
              <h3>Condiciones para el uso:</h3>
              <ul>
                {plan.checkup.conditions.map((condition) => <li key={condition}><PlusCircle size={15} />{condition}</li>)}
              </ul>
            </div>
          </div>
        </section>
      )}

      {plan.huPlus && (
        <section className="plan-huplus-banner">
          <div>
            <strong>{plan.huPlus.title}</strong>
            <div className="plan-huplus-categories">
              {plan.huPlus.categories.map((category) => <span key={category}>{category}</span>)}
            </div>
            <p>{plan.huPlus.description}</p>
          </div>
        </section>
      )}

      <section className="content-section plan-detail-faq-section">
        <div className="plan-detail-faq-layout">
          <div>
            <h2>{plan.faqTitle}</h2>
            <FaqAccordion plan={plan} />
          </div>
          <LeadForm />
        </div>
      </section>

      <AcquireSection onDemo={showDemo} />

      {message && (
        <div className="sales-demo-message plan-detail-toast" role="status">
          <Check /><span>{message}</span>
          <button type="button" onClick={() => setMessage("")}>Cerrar</button>
        </div>
      )}
    </SiteShell>
  );
}
