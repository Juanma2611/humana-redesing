"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Briefcase, Calendar, CheckCircle2, FileText, Mail, MapPin, Phone,
  Send, Sparkles, User, UserRound, Users2, IdCard,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalExploreCards } from "@/components/institutional-nav";

// ⚠️ La lista de cargos cambia según las vacantes abiertas; confirmar con Talento Humano
// antes de publicar. Copiada tal cual del sitio oficial el 6 de octubre de 2026.
const cargos = [
  "Pasante", "Consultor de Negocios - Quito", "Consultor de Negocios - Guayaquil",
  "Auditor Médico - Emergente", "Ingeniero Analítico - Quito", "Auditor Médico - Guayaquil",
  "Analista de QA", "Pasante - Quito", "Otro",
];

const fuentes = ["Linkedin", "Referido", "IPBF", "Página Web Humana", "Otro"];

const culturaChips = [
  { icon: Sparkles, label: "Equipo humano" },
  { icon: Briefcase, label: "Crecimiento profesional" },
  { icon: Users2, label: "Ambiente colaborativo" },
];

export default function TrabajaConNosotrosClient() {
  // El envío de este formulario está PENDIENTE DE CONECTAR a un sistema real
  // (ATS / correo de Talento Humano). No simular un envío exitoso en el backend:
  // solo se valida en el navegador.
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell title="Trabaja con nosotros">
      <InstitutionalBreadcrumb page="Trabaja con nosotros" />

      {/* Hero propio de esta página (tcn-*): fondo navy con retícula de puntos
          y resplandores de marca, foto en tarjeta con marco, chips de cultura.
          No reutiliza .institutional-hero para no afectar las otras páginas
          que sí usan esa plantilla plana. */}
      <section className="tcn-hero">
        <div className="tcn-hero-grid" aria-hidden="true" />
        <div className="tcn-hero-glow tcn-hero-glow-a" aria-hidden="true" />
        <div className="tcn-hero-glow tcn-hero-glow-b" aria-hidden="true" />
        <div className="tcn-hero-inner">
          <div className="tcn-hero-copy">
            <span className="tcn-hero-kicker">¿Quiénes somos?</span>
            <h1>Trabaja con nosotros</h1>
            <p>
              Déjanos tus datos y envíanos tu hoja de vida, contaremos contigo para próximas
              candidaturas.
            </p>
            <div className="tcn-hero-chips">
              {culturaChips.map(({ icon: Icon, label }) => (
                <span className="tcn-hero-chip" key={label}>
                  <Icon size={15} aria-hidden="true" /> {label}
                </span>
              ))}
            </div>
          </div>
          <figure className="tcn-hero-media">
            <Image
              src="/images/trabaja-con-nosotros/trabaja-con-nosotros-hero.webp"
              alt="Buscamos talento (más) humano: equipo de Humana sonriendo en una sala de reuniones"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              unoptimized
              style={{ objectFit: "cover" }}
            />
          </figure>
        </div>
      </section>

      <section className="tcn-form-section">
        <div className="tcn-form-pattern" aria-hidden="true" />
        <div className="tcn-form-wrap">
          <div className="tcn-form-head">
            <span className="tcn-form-kicker">Postula aquí</span>
            <h2>Cuéntanos sobre ti</h2>
            <p>Completa el formulario y adjunta tu hoja de vida. Es rápido y sencillo.</p>
          </div>

          <div className="plan-lead-form tcn-form-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="tcn-form-row">
                <label><span className="tcn-label"><User size={15} aria-hidden="true" /> Nombre*</span><input type="text" required /></label>
                <label>
                  <span className="tcn-label"><IdCard size={15} aria-hidden="true" /> Cédula</span>
                  <input type="text" />
                  <small>Indique los 10 dígitos de su cédula, sin guiones ni espacios. Si es extranjero y solo tiene pasaporte puede escribir cualquier número de 0 dígitos.</small>
                </label>
              </div>

              <div className="tcn-form-row">
                <label><span className="tcn-label"><Mail size={15} aria-hidden="true" /> Correo electrónico*</span><input type="email" required /></label>
                <label><span className="tcn-label"><Phone size={15} aria-hidden="true" /> Teléfono*</span><input type="tel" required /></label>
              </div>

              <div className="tcn-form-row">
                <label><span className="tcn-label"><Calendar size={15} aria-hidden="true" /> Edad*</span><input type="number" required min={16} /></label>
                <label>
                  <span className="tcn-label"><MapPin size={15} aria-hidden="true" /> Ciudad*</span>
                  <select required defaultValue="">
                    <option value="" disabled>Selecciona una ciudad</option>
                    <option>Quito</option>
                    <option>Guayaquil</option>
                    <option>Cuenca</option>
                  </select>
                </label>
              </div>

              <div className="tcn-form-row">
                <label>
                  <span className="tcn-label"><UserRound size={15} aria-hidden="true" /> Género*</span>
                  <select required defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option>Femenino</option>
                    <option>Masculino</option>
                    <option>Indistinto</option>
                  </select>
                </label>
                <label>
                  <span className="tcn-label"><Briefcase size={15} aria-hidden="true" /> Cargo al que aplicas*</span>
                  <select required defaultValue="">
                    <option value="" disabled>Selecciona un cargo</option>
                    {cargos.map((cargo) => <option key={cargo}>{cargo}</option>)}
                  </select>
                </label>
              </div>
              <label><span className="tcn-label">Indica el cargo al que quieres postular*</span><input type="text" required /></label>
              <label>
                <span className="tcn-label">De qué fuente conociste nuestra vacante*</span>
                <select required defaultValue="">
                  <option value="" disabled>Selecciona una opción</option>
                  {fuentes.map((fuente) => <option key={fuente}>{fuente}</option>)}
                </select>
              </label>
              <label>
                <span className="tcn-label"><FileText size={15} aria-hidden="true" /> Hoja de vida*</span>
                <input type="file" required />
              </label>
              <label className="plan-lead-checkbox">
                <input type="checkbox" required />
                <span>
                  Declaro haber leído y acepto la{" "}
                  <Link href="/por-que-humana/politica-de-proteccion-de-datos/">Política de Protección de Datos Personales</Link>{" "}
                  y autorizo el tratamiento de mis datos personales
                </span>
              </label>
              <button type="submit" className="tcn-submit-btn">
                Enviar postulación <Send size={16} aria-hidden="true" />
              </button>
            </form>

            {submitted && (
              <p className="tcn-success">
                <CheckCircle2 size={20} aria-hidden="true" />
                <span>
                  <strong>¡Postulación recibida en este prototipo!</strong><br />
                  Este formulario de demostración todavía no está conectado a un sistema real de
                  reclutamiento.
                </span>
              </p>
            )}
          </div>
        </div>
      </section>

      <InstitutionalExploreCards currentHref="/por-que-humana/trabaja-con-nosotros/" />
    </SiteShell>
  );
}
