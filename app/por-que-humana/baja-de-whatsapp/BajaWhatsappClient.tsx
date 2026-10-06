"use client";

import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks } from "@/components/institutional-nav";

// ⚠️ Esta URL se enlaza desde campañas de WhatsApp activas: no debe cambiar
// aunque se reestructuren otras rutas. El envío del formulario está PENDIENTE
// DE CONECTAR al sistema real de bajas (lo define el equipo web); no simular
// un envío exitoso.
export default function BajaWhatsappClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell title="Baja de WhatsApp">
      <InstitutionalBreadcrumb page="Baja de WhatsApp" />

      <section className="content-section plan-hub-intro" style={{ maxWidth: 760 }}>
        <h1>Baja de WhatsApp</h1>
        <p>Indícanos si deseas darte de baja de nuestras comunicaciones:</p>
      </section>

      <section className="content-section" style={{ maxWidth: 520, margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="plan-lead-form" style={{ padding: 32 }}>
          <div style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#fff4e5", border: "1px solid #f3cf8a", borderRadius: 12, padding: 14, marginBottom: 20 }}>
            <AlertTriangle size={18} color="#a3690b" style={{ flexShrink: 0, marginTop: 2 }} />
            <p style={{ margin: 0, fontSize: 13.5, color: "#7a4e07" }}>
              Formulario de demostración. El envío todavía no está conectado al sistema real de bajas.
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>Nombre*<input type="text" required /></label>
            <label>Teléfono*<input type="tel" required /></label>
            <label className="plan-lead-checkbox">
              <input type="checkbox" required />
              <span>No deseo recibir más comunicaciones de campañas mediante WhatsApp de parte de Humana</span>
            </label>
            <button type="submit">Confirmar baja</button>
          </form>
          {submitted && (
            <p className="plan-lead-success" style={{ marginTop: 16 }}>
              Formulario completado en este prototipo. No se envió información real: falta conectar este
              formulario al sistema de bajas.
            </p>
          )}
        </div>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
