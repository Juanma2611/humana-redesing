"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, HeartHandshake, MessageCircle, PhoneCall, ShoppingCart, X,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import type { PlanDetail } from "@/lib/plan-details";

/* Página bespoke del piloto "Para ti" (tabla comparativa de Plan Individual
   y Familiar). No reutiliza components/plan-detail-view.tsx a propósito:
   ese componente también renderiza /plan-proteger/ y /practihumana50/, así
   que editarlo cambiaría esas páginas, fuera del alcance de este piloto.
   Los datos vienen de la misma fuente (lib/plan-details.ts, slug
   "individual-familiar"); el texto no se modifica. */

const planLinks: Record<string, string> = {
  PH15: "/planes-medicos/personas/plan-individual-y-familiar/practihumana15/",
  PH30: "/planes-medicos/personas/plan-individual-y-familiar/practihumana30/",
  MH50: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana50/",
  MH80: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana80/",
  MH150: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana150/",
};

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
            {isOpen && faq.answer && (
              <div className="plan-faq-content">
                {faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
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
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
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

export function IndividualFamiliarView({ plan }: { plan: PlanDetail }) {
  const [message, setMessage] = useState("");
  const showDemo = (text: string) => setMessage(text);

  return (
    <SiteShell title={plan.title}>
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes-medicos/personas/">Planes médicos para Personas</Link>
        <span>»</span>
        <span>{plan.title}</span>
      </nav>

      <section className="pif-hero">
        <div className="pif-hero-inner">
          <div className="pif-hero-media">
            <Image src={plan.heroImage} alt={plan.title} fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized style={{ objectFit: "cover" }} />
          </div>
          <div className="pif-hero-copy">
            <span className="kicker">{plan.eyebrow}</span>
            <h1>{plan.title}</h1>
            {plan.description.map((paragraph) => (
              <p key={paragraph} className="text-justify-wide">{paragraph}</p>
            ))}
            <div className="plan-detail-actions">
              <Link className="primary-button" href="/planes-medicos/"><ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} /></Link>
              <button type="button" className="secondary-button green" onClick={() => showDemo("Solicitud de asesoría demostrativa. En la versión oficial se conectará con un asesor Humana.")}>
                <MessageCircle size={16} /> Pedir asesoría
              </button>
              <button type="button" className="secondary-button light" onClick={() => showDemo("Solicitud de llamada demostrativa. No se enviaron datos, un asesor te contactará en la versión oficial.")}>
                <PhoneCall size={16} /> Solicitar llamada
              </button>
            </div>
          </div>
        </div>
      </section>

      {plan.coverageTables.map((table, tableIndex) => (
        <section className="pif-section" key={table.title} style={{ background: tableIndex % 2 === 0 ? "var(--humana-ice)" : "#fff" }}>
          <div className="pif-section-inner">
            {table.title && (
              <div className="section-heading" style={{ marginBottom: 24 }}>
                <span className="kicker">Plan Individual y Familiar</span>
                <h2>{table.title}</h2>
              </div>
            )}
            <div className="pif-table-card">
              <div className="pif-table-scroll">
                <table className="pif-table">
                  <thead>
                    <tr>
                      <th scope="col">&nbsp;</th>
                      {table.columns.map((col) => <th scope="col" key={col}>{col}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        {row.values.map((value, i) => (
                          <td key={`${row.label}-${i}`}><CoverageValue value={value} /></td>
                        ))}
                      </tr>
                    ))}
                    <tr className="pif-table-cta-row">
                      <th scope="row">&nbsp;</th>
                      {table.columns.map((col) => (
                        <td key={`cta-${col}`}>
                          {planLinks[col] ? (
                            <Link className="pif-plan-cta" href={planLinks[col]}>Ver plan</Link>
                          ) : (
                            <Link className="pif-plan-cta" href="/planes-medicos/">Cotizar</Link>
                          )}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ⚠️ Nota para el equipo (no mostrar al público): el sitio oficial tiene una inconsistencia
          entre esta tabla comparativa y la pestaña propia de MH80 dentro de la misma página oficial:
          la pestaña indica deducible $100 y 90% en hospitalización/exámenes, mientras que la tabla
          comparativa y la página propia de MH80 (metrohumana80/) indican $200 y 80%. Aquí se usan
          los valores de la página propia de MH80 ($200 / 80%) tal como pidió el equipo comercial.
          Pendiente de validar y unificar con Comercial antes de corregir el sitio oficial. */}

      <section className="pif-section" style={{ background: plan.coverageTables.length % 2 === 0 ? "var(--humana-ice)" : "#fff" }}>
        <div className="pif-section-inner pif-faq-layout">
          <div>
            {plan.faqs.length > 0 && (
              <>
                <h2>{plan.faqTitle}</h2>
                <FaqAccordion plan={plan} />
              </>
            )}
          </div>
          <LeadForm />
        </div>
      </section>

      <section className="content-section" style={{ padding: "0 clamp(24px,7vw,110px) 72px" }}>
        <div className="institutional-cta">
          <HeartHandshake />
          <div style={{ flex: 1 }}>
            <h2>Encuentra el plan ideal para tu familia.</h2>
            <p>Un asesor de Humana puede ayudarte a comparar PH15, PH30, MH50, MH80 y MH150 según tus necesidades.</p>
          </div>
          <Link className="white-button" href="/planes-medicos/">Ver todos los planes <ArrowRight size={18} /></Link>
        </div>
      </section>

      {message && (
        <div className="sales-demo-message plan-detail-toast" role="status">
          <Check /><span>{message}</span>
          <button type="button" onClick={() => setMessage("")}>Cerrar</button>
        </div>
      )}
    </SiteShell>
  );
}
