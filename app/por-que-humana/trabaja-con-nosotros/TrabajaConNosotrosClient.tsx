"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks } from "@/components/institutional-nav";

// ⚠️ La lista de cargos cambia según las vacantes abiertas; confirmar con Talento Humano
// antes de publicar. Copiada tal cual del sitio oficial el 6 de octubre de 2026.
const cargos = [
  "Pasante", "Consultor de Negocios - Quito", "Consultor de Negocios - Guayaquil",
  "Auditor Médico - Emergente", "Ingeniero Analítico - Quito", "Auditor Médico - Guayaquil",
  "Analista de QA", "Pasante - Quito", "Otro",
];

const fuentes = ["Linkedin", "Referido", "IPBF", "Página Web Humana", "Otro"];

export default function TrabajaConNosotrosClient() {
  // El envío de este formulario está PENDIENTE DE CONECTAR a un sistema real
  // (ATS / correo de Talento Humano). No simular un envío exitoso: solo se
  // valida en el navegador y se avisa al usuario que el prototipo no envía datos.
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell title="Trabaja con nosotros">
      <InstitutionalBreadcrumb page="Trabaja con nosotros" />

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <h1>Trabaja con nosotros</h1>
        <p>Déjanos tus datos y envíanos tu hoja de vida, contaremos contigo para próximas candidaturas.</p>
      </section>

      <section className="content-section" style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 24px" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden" }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2025/10/buscamos-talento-mas-humano.jpg" alt="Buscamos talento más humano" fill sizes="760px" unoptimized style={{ objectFit: "cover" }} />
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="plan-lead-form" style={{ padding: 32 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#fff4e5", border: "1px solid #f3cf8a", borderRadius: 12, padding: 14, marginBottom: 20 }}>
            <AlertTriangle size={18} color="#a3690b" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ margin: 0, fontSize: 13.5, color: "#7a4e07" }}>
              Formulario de demostración. El envío todavía no está conectado a ningún sistema real; no se
              envía información a Talento Humano.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>Nombre*<input type="text" required /></label>
            <label>
              Cédula
              <input type="text" />
              <small style={{ color: "#5e7384" }}>Indique los 10 dígitos de su cédula, sin guiones ni espacios. Si es extranjero y solo tiene pasaporte puede escribir cualquier número de 0 dígitos.</small>
            </label>
            <label>Correo electrónico*<input type="email" required /></label>
            <label>Teléfono*<input type="tel" required /></label>
            <label>Edad*<input type="number" required min={16} /></label>
            <label>
              Ciudad*
              <select required defaultValue="">
                <option value="" disabled>Selecciona una ciudad</option>
                <option>Quito</option>
                <option>Guayaquil</option>
                <option>Cuenca</option>
              </select>
            </label>
            <label>
              Género*
              <select required defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                <option>Femenino</option>
                <option>Masculino</option>
                <option>Indistinto</option>
              </select>
            </label>
            <label>
              Selecciona el cargo al que deseas aplicar*
              <select required defaultValue="">
                <option value="" disabled>Selecciona un cargo</option>
                {cargos.map((cargo) => <option key={cargo}>{cargo}</option>)}
              </select>
            </label>
            <label>Indica el cargo al que quieres postular*<input type="text" required /></label>
            <label>
              De qué fuente conociste nuestra vacante*
              <select required defaultValue="">
                <option value="" disabled>Selecciona una opción</option>
                {fuentes.map((fuente) => <option key={fuente}>{fuente}</option>)}
              </select>
            </label>
            <label>Hoja de vida*<input type="file" required /></label>
            <label className="plan-lead-checkbox">
              <input type="checkbox" required />
              <span>
                Declaro haber leído y acepto la{" "}
                <Link href="/por-que-humana/politica-de-proteccion-de-datos/">Política de Protección de Datos Personales</Link>{" "}
                y autorizo el tratamiento de mis datos personales
              </span>
            </label>
            <button type="submit">Enviar postulación</button>
          </form>

          {submitted && (
            <p className="plan-lead-success" style={{ marginTop: 16 }}>
              Formulario completado en este prototipo. No se envió información real: falta conectar este
              formulario a un sistema de reclutamiento.
            </p>
          )}
        </div>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
