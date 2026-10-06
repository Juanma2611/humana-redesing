"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Ambulance, Banknote, Check, HeartHandshake, HeartPulse,
  MessageCircle, PhoneCall, ShieldCheck, ShoppingCart, Stethoscope, Users, WalletCards,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { cuadroA, cuadroB } from "@/lib/empresa-cuadros";

const mh10 = {
  name: "MH 10 | Metrohumana 10.000",
  items: [
    { icon: WalletCards, label: "Cobertura por enfermedad", value: "$10.000" },
    { icon: Banknote, label: "Alternativas de deducible anual por persona", value: "$50, $80 o $100" },
    { icon: Stethoscope, label: "Consultas libre elección", value: "70% / hasta $64" },
    { icon: ShieldCheck, label: "Red Hospitalaria Metrohumana", value: "90%" },
    { icon: Ambulance, label: "Emergencia por accidente al 100% sin aplicación de deducible", value: "$1.000" },
    { icon: HeartPulse, label: "Seguro de vida para el titular", value: "$5.000" },
    { icon: HeartHandshake, label: "Asistencia exequial", value: "Incluida" },
  ],
};

const mh5 = {
  name: "MH 5 | Metrohumana 5.000",
  items: [
    { icon: WalletCards, label: "Cobertura por enfermedad", value: "$5.000" },
    { icon: Banknote, label: "Alternativas de deducible anual por persona", value: "$50, $80 o $100" },
    { icon: Stethoscope, label: "Consultas libre elección", value: "70% / hasta $64" },
    { icon: ShieldCheck, label: "Red Hospitalaria Metrohumana", value: "90%" },
    { icon: Ambulance, label: "Emergencia por accidente al 100% sin aplicación de deducible", value: "$500" },
    { icon: HeartPulse, label: "Seguro de vida para el titular", value: "$5.000" },
    { icon: HeartHandshake, label: "Asistencia exequial", value: "Incluida" },
  ],
};

const advantagesColaboradores = [
  "Atención médica oportuna y personalizada.",
  "Acceso a la red más amplia de prestadores del país.",
  "Médicos y medicinas a domicilio.",
  "Crédito en cobertura de emergencia por accidente al 100%.",
  "Extensión de coberturas a familiares.",
  "Seguro de vida para el titular.",
];

const advantagesEmpresa = [
  "Disminución del ausentismo.",
  "Aumento del bienestar y calidad de vida de tus colaboradores.",
  "Incremento de la productividad.",
  "Deducción de impuestos.",
];

export default function PlanPymeClient() {
  const [activePlan, setActivePlan] = useState<"mh10" | "mh5">("mh10");
  const [activeCuadro, setActiveCuadro] = useState<"a" | "b">("a");
  const [quoted, setQuoted] = useState(false);
  const [called, setCalled] = useState(false);
  const selected = activePlan === "mh10" ? mh10 : mh5;
  const cuadro = activeCuadro === "a" ? cuadroA : cuadroB;

  return (
    <SiteShell title="Plan Pyme">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link>
        <span>»</span>
        <Link href="/planes-medicos/empresas/pequenas-y-medianas/">Planes médicos para Pequeñas y Medianas Empresas</Link>
        <span>»</span>
        <span>Plan Pyme</span>
      </nav>

      <section className="content-section plan-hub-intro">
        <h1>Plan Pyme</h1>
        <p>
          Un plan médico diseñado para empresas de 5 hasta 25 colaboradores, que brinda bienestar y
          calidad de vida a su capital humano. Los colaboradores valoran que su empleador pueda
          respaldarlos y darles acceso a hospitales, clínicas, centros médicos y especialistas de
          calidad.
        </p>
        <div className="plan-hub-card-actions" style={{ justifyContent: "center", marginTop: 20 }}>
          <a className="primary-button" href="#pyme-lead"><ShoppingCart size={16} /> Solicita información</a>
          <a className="secondary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <button type="button" className="secondary-button" onClick={() => setCalled(true)}><PhoneCall size={16} /> Solicitar llamada</button>
        </div>
        {called && <p style={{ color: "#0e8c88", marginTop: 12 }}>Solicitud de llamada demostrativa registrada. No se envió información real.</p>}
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="mh50-exp-plan-toggle" style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 20 }}>
          <button type="button" className={activePlan === "mh10" ? "is-active" : ""} onClick={() => setActivePlan("mh10")}>{mh10.name}</button>
          <button type="button" className={activePlan === "mh5" ? "is-active" : ""} onClick={() => setActivePlan("mh5")}>{mh5.name}</button>
        </div>
        <div className="mh50-exp-accordion-grid on-light">
          {selected.items.map(({ icon: Icon, label, value }) => (
            <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <h3>Red CAM — Consultas médicas</h3>
            <p>Cancelan únicamente el valor de copago desde USD 4 dentro de nuestra red de Centros de Atención Médica.</p>
          </div>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <h3>Red Preferida</h3>
            <ul className="plan-hub-card-list">
              <li>El valor de las consultas es de USD 15 a USD 25, según el plan.</li>
              <li>Acceso a más de 750 doctores a nivel nacional.</li>
              <li>Consultas médicas privadas.</li>
              <li>Consultorios de médicos especialistas del más alto nivel.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section" id="pyme-cuadro" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24 }}>
          <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
            <button type="button" className={`ghost-button${activeCuadro === "a" ? " is-active" : ""}`} onClick={() => setActiveCuadro("a")}>MetroHumana 10.000</button>
            <button type="button" className={`ghost-button${activeCuadro === "b" ? " is-active" : ""}`} onClick={() => setActiveCuadro("b")}>MetroHumana 5.000</button>
          </div>
          <table className="plan-detail-table">
            <tbody>
              {cuadro.map((row, i) => (
                <tr key={`${row.label}-${i}`} className={row.section ? undefined : undefined}>
                  <th scope="row">{row.section ? <><strong>{row.section}</strong><br />{row.label}</> : row.label}</th>
                  <td>{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <h3>Ventajas para tus colaboradores</h3>
            <ul className="plan-faq-checklist">
              {advantagesColaboradores.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <h3>Ventajas para la empresa</h3>
            <ul className="plan-faq-checklist">
              {advantagesEmpresa.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}
            </ul>
          </div>
        </div>
        <p style={{ marginTop: 24, color: "#3f5f73" }}>
          <strong>Exámenes de diagnóstico:</strong> cancelan únicamente el 10% del valor de los exámenes.{" "}
          <strong>Medicinas:</strong> al comprar en las farmacias de la red, pagan únicamente del 10% o 30% del valor de los medicamentos.
        </p>
      </section>

      <section className="sales-assurance" id="pyme-lead">
        <div><Users /><span><strong>¿Listo para proteger a tu equipo con el Plan Pyme?</strong><small>Un asesor te contactará con una propuesta a la medida.</small></span></div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <button type="button" onClick={() => setQuoted(true)}>Solicitar información</button>
          <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <a className="ghost-button" href="tel:1800486262"><PhoneCall size={16} /> Llamar</a>
        </div>
      </section>
      {quoted && <p style={{ textAlign: "center", color: "#0e8c88", padding: "16px" }}>Solicitud demostrativa registrada. No se envió información real.</p>}
    </SiteShell>
  );
}
