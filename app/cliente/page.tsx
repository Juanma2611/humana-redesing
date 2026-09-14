"use client";

import Link from "next/link";
import {
  ArrowRight, Baby, CheckCircle2, CircleDollarSign, FileHeart, HeartPulse,
  Hospital, Info, Pill, ReceiptText, Search, ShieldCheck, Sparkles,
  Stethoscope, UserRound, UsersRound, WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import { Progress } from "@/components/ui/progress";

type Member = { id: string; name: string; relationship: string; initials: string; age: string; deductibleUsed: number; coverageUsed: number };
type Service = {
  id: string; name: string; category: string; icon: typeof Stethoscope;
  closedCopay: number; openCopay?: number; deductible: boolean;
  closedOnly?: boolean; fixedCopay?: number; cap?: number; capLabel?: string; note: string;
};

const annualDeductible = 80;
const family: Member[] = [
  { id: "andrea", name: "Andrea M.", relationship: "Titular", initials: "AM", age: "34 años", deductibleUsed: 80, coverageUsed: 3160 },
  { id: "esposo", name: "Esposo", relationship: "Cónyuge", initials: "ES", age: "36 años", deductibleUsed: 30, coverageUsed: 540 },
  { id: "hijo", name: "Hijo", relationship: "Beneficiario", initials: "HI", age: "7 años", deductibleUsed: 80, coverageUsed: 220 },
  { id: "hija", name: "Hija", relationship: "Beneficiaria", initials: "HA", age: "4 años", deductibleUsed: 0, coverageUsed: 0 },
];

const services: Service[] = [
  { id: "consulta-basica", name: "Consulta en CAM · especialidad básica", category: "Consulta", icon: Stethoscope, closedCopay: 0, fixedCopay: 8, deductible: false, closedOnly: true, note: "Copago fijo en especialidades básicas preautorizadas." },
  { id: "consulta-especialidad", name: "Consulta en CAM · otra especialidad", category: "Consulta", icon: Stethoscope, closedCopay: 0, fixedCopay: 12, deductible: false, closedOnly: true, note: "Copago fijo para otras especialidades en Centros de Atención Médica." },
  { id: "consulta-preferida", name: "Consulta en Red Preferida", category: "Consulta", icon: Stethoscope, closedCopay: 0, fixedCopay: 15, deductible: false, closedOnly: true, note: "Copago fijo en la Red Preferida de Humana." },
  { id: "diagnostico", name: "Exámenes de diagnóstico", category: "Exámenes", icon: HeartPulse, closedCopay: 10, openCopay: 20, deductible: true, note: "El cálculo referencial cambia según la modalidad utilizada." },
  { id: "hospitalizacion", name: "Hospitalización o cirugía", category: "Hospitalización", icon: Hospital, closedCopay: 10, openCopay: 20, deductible: true, note: "Hasta el saldo disponible de la cobertura anual del plan." },
  { id: "medicinas-90", name: "Medicinas · cobertura 90%", category: "Medicinas", icon: Pill, closedCopay: 10, openCopay: 30, deductible: false, cap: 780, capLabel: "$780 disponibles de $1.000 al año", note: "El porcentaje depende del medicamento y de la modalidad de atención." },
  { id: "medicinas-70", name: "Medicinas · cobertura 70%", category: "Medicinas", icon: Pill, closedCopay: 30, openCopay: 30, deductible: false, cap: 780, capLabel: "$780 disponibles de $1.000 al año", note: "El porcentaje depende del medicamento y de la modalidad de atención." },
  { id: "maternidad", name: "Parto, cesárea o aborto no provocado", category: "Maternidad", icon: Baby, closedCopay: 10, openCopay: 20, deductible: true, cap: 2500, capLabel: "Tope de cobertura: $2.500", note: "Ejemplo con carencia de maternidad superada." },
  { id: "emergencia-accidente", name: "Emergencia ambulatoria por accidente", category: "Emergencia", icon: ShieldCheck, closedCopay: 0, deductible: false, closedOnly: true, cap: 1000, capLabel: "Hasta $1.000 sin deducible", note: "Aplica si se atiende dentro de 48 horas y no requiere hospitalización." },
  { id: "emergencia", name: "Emergencia por enfermedad", category: "Emergencia", icon: ShieldCheck, closedCopay: 10, openCopay: 20, deductible: true, note: "Cobertura hasta la estabilización, según condiciones del contrato." },
];

const quickActions = [
  { icon: ReceiptText, title: "Nuevo reembolso", copy: "Revisa requisitos e inicia el proceso.", href: "/servicios/reembolsos" },
  { icon: FileHeart, title: "Nueva autorización", copy: "Prepara una solicitud para tu atención.", href: "/servicios/autorizaciones" },
  { icon: Search, title: "Buscar prestador", copy: "Consulta la Red Humana disponible.", href: "/red-medica" },
  { icon: ShieldCheck, title: "Mi cobertura", copy: "Revisa lo incluido en tu MH50.", href: "/planes?segment=familiar&plan=mh50" },
];

const money = new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export default function Client() {
  const [memberId, setMemberId] = useState("andrea");
  const [mode, setMode] = useState<"closed" | "open">("closed");
  const [serviceId, setServiceId] = useState("hospitalizacion");
  const [amount, setAmount] = useState(800);
  const member = family.find((person) => person.id === memberId) ?? family[0];
  const service = services.find((item) => item.id === serviceId) ?? services[0];
  const effectiveMode = service.closedOnly ? "closed" : mode;
  const planAvailable = Math.max(0, 50000 - member.coverageUsed);

  const result = useMemo(() => {
    const invoice = Math.max(0, Number.isFinite(amount) ? amount : 0);
    if (service.fixedCopay !== undefined) {
      const client = Math.min(invoice, service.fixedCopay);
      return { invoice, deductibleApplied: 0, eligible: invoice, copay: service.fixedCopay, humana: Math.max(0, invoice - client), client, coverage: null as number | null };
    }
    const deductiblePending = service.deductible ? Math.max(0, annualDeductible - member.deductibleUsed) : 0;
    const deductibleApplied = Math.min(invoice, deductiblePending);
    const eligible = Math.max(0, invoice - deductibleApplied);
    const copay = effectiveMode === "open" ? (service.openCopay ?? service.closedCopay) : service.closedCopay;
    const theoreticalCoverage = eligible * (1 - copay / 100);
    const humana = Math.max(0, Math.min(theoreticalCoverage, service.cap ?? planAvailable));
    return { invoice, deductibleApplied, eligible, copay, humana, client: Math.max(0, invoice - humana), coverage: 100 - copay };
  }, [amount, effectiveMode, member.deductibleUsed, planAvailable, service]);

  const changeService = (value: string) => {
    const next = services.find((item) => item.id === value);
    setServiceId(value);
    if (next?.closedOnly) setMode("closed");
  };

  return <SiteShell title="MiHumana · Perfil familiar MH50">
    <section className="client-dashboard-hero">
      <div className="client-welcome"><span className="kicker">MiHumana · perfil demostrativo</span><h1>Hola, Andrea</h1><p>Tu familia y tu plan, claros en un solo lugar.</p><div className="profile-demo-note"><Sparkles /> Datos ficticios para visualizar la experiencia final.</div></div>
      <article className="mh50-summary"><div><span><ShieldCheck /></span><small>Plan familiar activo</small></div><h2>MH50</h2><p>Plan Full Metrohumana 50.000</p><div className="mh50-summary-stats"><span><strong>$50.000</strong><small>cobertura máxima</small></span><span><strong>4</strong><small>integrantes</small></span><span><strong>90%</strong><small>hospitalario en red</small></span></div></article>
    </section>

    <section className="client-dashboard">
      <div className="client-dashboard-main">
        <section className="family-panel" aria-labelledby="family-title">
          <div className="client-section-heading"><div><span className="kicker">Núcleo protegido</span><h2 id="family-title">Mi familia</h2></div><UsersRound /></div>
          <div className="family-grid">{family.map((person) => {
            const used = Math.min(annualDeductible, person.deductibleUsed);
            return <button type="button" key={person.id} className={memberId === person.id ? "family-member active" : "family-member"} onClick={() => setMemberId(person.id)} aria-pressed={memberId === person.id}>
              <span className="member-avatar">{person.initials}</span><span className="member-copy"><strong>{person.name}</strong><small>{person.relationship} · {person.age}</small></span><span className="member-status"><CheckCircle2 /> Activo</span><span className="member-deductible"><small>Deducible utilizado</small><Progress value={(used / annualDeductible) * 100} /><strong>{money.format(used)} de {money.format(annualDeductible)}</strong></span>
            </button>;
          })}</div>
        </section>

        <section className="copay-simulator" aria-labelledby="simulator-title">
          <div className="simulator-heading"><div><span className="kicker light">Calcula antes de atenderte</span><h2 id="simulator-title">Simulador de copagos MH50</h2><p>Usa las condiciones demostrativas del integrante seleccionado.</p></div><CircleDollarSign /></div>
          <div className="simulator-layout">
            <div className="simulator-controls">
              <div className="sim-field"><label htmlFor="sim-member">¿Quién recibirá la atención?</label><NativeSelect id="sim-member" value={memberId} onChange={(event) => setMemberId(event.target.value)}>{family.map((person) => <NativeSelectOption value={person.id} key={person.id}>{person.name} · {person.relationship}</NativeSelectOption>)}</NativeSelect></div>
              <div className="sim-field"><label htmlFor="sim-service">¿Qué atención necesita?</label><NativeSelect id="sim-service" value={serviceId} onChange={(event) => changeService(event.target.value)}>{services.map((item) => <NativeSelectOption value={item.id} key={item.id}>{item.name}</NativeSelectOption>)}</NativeSelect></div>
              <fieldset className="mode-field" disabled={service.closedOnly}><legend>¿Dónde se atenderá?</legend><div><label className={effectiveMode === "closed" ? "active" : ""}><input type="radio" name="mode" value="closed" checked={effectiveMode === "closed"} onChange={() => setMode("closed")} /><ShieldCheck /><span><strong>Red Humana</strong><small>Crédito o atención en red</small></span></label><label className={effectiveMode === "open" ? "active" : ""}><input type="radio" name="mode" value="open" checked={effectiveMode === "open"} onChange={() => setMode("open")} /><WalletCards /><span><strong>Fuera de red</strong><small>Pago y posterior reembolso</small></span></label></div>{service.closedOnly && <small className="field-help">Esta prestación se simula únicamente dentro de la Red Humana.</small>}</fieldset>
              <div className="sim-field amount-field"><label htmlFor="sim-amount">Valor estimado de la atención</label><div><span>$</span><input id="sim-amount" inputMode="decimal" type="number" min="0" step="10" value={amount} onChange={(event) => setAmount(Number(event.target.value))} /></div></div>
              <div className="sim-rule-note"><Info /><p><strong>{service.name}</strong><span>{service.note}</span>{service.capLabel && <span>{service.capLabel}</span>}</p></div>
            </div>

            <aside className="simulator-result" aria-live="polite">
              <span className="result-label">Resultado estimado</span><h3>{member.name}</h3><p>{service.category} · {effectiveMode === "closed" ? "Red Humana" : "Reembolso"}</p>
              <div className="simulation-reference-note"><Info /><span><strong>Cálculo aproximado y referencial</strong><small>El valor final puede variar según el prestador, tarifario y condiciones de tu contrato.</small></span></div>
              <div className="result-money"><div><small>Humana cubriría</small><strong>{money.format(result.humana)}</strong></div><div><small>Tú pagarías</small><strong>{money.format(result.client)}</strong></div></div>
              <dl className="calculation-detail"><div><dt>Valor estimado</dt><dd>{money.format(result.invoice)}</dd></div><div><dt>Deducible aplicado</dt><dd>{money.format(result.deductibleApplied)}</dd></div><div><dt>{result.coverage === null ? "Copago fijo" : "Cobertura aplicada"}</dt><dd>{result.coverage === null ? money.format(result.copay) : `${result.coverage}%`}</dd></div>{result.eligible !== result.invoice && <div><dt>Monto sujeto a cobertura</dt><dd>{money.format(result.eligible)}</dd></div>}</dl>
              <div className="deductible-result"><span><strong>Deducible anual de {member.name}</strong><small>{money.format(member.deductibleUsed)} utilizado · {money.format(Math.max(0, annualDeductible - member.deductibleUsed))} pendiente</small></span><Progress value={(Math.min(annualDeductible, member.deductibleUsed) / annualDeductible) * 100} /></div>
              <p className="simulation-disclaimer">La liquidación final depende de pertinencia médica, autorización, carencias, saldo disponible y condiciones del contrato.</p>
              <div className="simulator-next-actions"><Link href="/red-medica">Buscar prestador <ArrowRight /></Link><Link href="/servicios/autorizaciones">Revisar autorización <ArrowRight /></Link></div>
            </aside>
          </div>
        </section>

        <section className="client-quick-section"><div className="client-section-heading"><div><span className="kicker">Accesos rápidos</span><h2>¿Qué deseas hacer?</h2></div><HeartPulse /></div><div className="client-actions">{quickActions.map(({ icon: Icon, title, copy, href }) => <Link href={href} key={title}><Icon /><span><strong>{title}</strong><small>{copy}</small></span><ArrowRight /></Link>)}</div></section>
      </div>

      <aside className="client-dashboard-side">
        <section className="coverage-balance"><div><ShieldCheck /><span><small>Saldo de {member.name}</small><strong>{money.format(planAvailable)}</strong></span></div><Progress value={(planAvailable / 50000) * 100} /><p>de $50.000 de cobertura máxima en este perfil demostrativo.</p><Link href="/planes?segment=familiar&plan=mh50">Ver coberturas del MH50 <ArrowRight /></Link></section>
        <section className="status-panel"><h2>Solicitudes recientes</h2><div><CheckCircle2 /><span><strong>Reembolso #Demo-104</strong><small>Revisión completada</small></span></div><div><FileHeart /><span><strong>Autorización #Demo-087</strong><small>Documentos recibidos</small></span></div><Link href="/servicios">Ver todos los servicios <ArrowRight size={16} /></Link><p>Información ficticia para demostrar el funcionamiento del perfil.</p></section>
        <section className="plan-reminder"><UserRound /><div><strong>Tu plan conoce tus datos</strong><p>En la versión final, deducibles, topes y beneficiarios se cargarían automáticamente.</p></div></section>
      </aside>
    </section>
  </SiteShell>;
}
