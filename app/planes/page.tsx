"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity, Ambulance, ArrowRight, Baby, BedDouble, BriefcaseBusiness, Building2, Check, ChevronRight, Clock3,
  CircleDollarSign, Cross, FlaskConical, HeartHandshake, HeartPulse, Hospital, House, Layers3, Luggage,
  MapPinned, MessageCircle, Microscope, PackageCheck, Phone, Pill, Plane, ScanHeart, ShieldCheck, SmilePlus,
  Sparkles, Stethoscope, Syringe, UsersRound, Video, WalletCards,
} from "lucide-react";
import { useEffect, useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Segment = "individual" | "familiar" | "dental" | "empresa" | "proteger";
type DetailGroup = { title: string; icon: typeof HeartPulse; items: string[] };
type Plan = {
  id: string; segment: Segment[]; name: string; family: string; headline: string; ideal: string;
  limit: string; limitNote: string; deductible: string; network: string; icon: typeof HeartPulse;
  featured?: boolean; business?: boolean;
  statLabels?: { limit: string; deductible: string; network: string };
  benefits: { icon: typeof HeartPulse; label: string }[]; details: DetailGroup[];
  includedBenefits?: { icon: typeof HeartPulse; label: string; copy: string }[]; waits?: string[];
};

const standardBenefits = {
  life: { icon: ShieldCheck, label: "Seguro de vida", copy: "Respaldo económico incluido según las condiciones del plan." },
  funeral: { icon: HeartHandshake, label: "Asistencia exequial", copy: "Acompañamiento y asistencia exequial conforme al contrato." },
  ambulance: { icon: Ambulance, label: "Ambulancia terrestre", copy: "Traslado terrestre coordinado dentro de la red aplicable." },
  homeDoctor: { icon: House, label: "Médico a domicilio", copy: "Atención médica en casa según disponibilidad y condiciones." },
  travel: { icon: Plane, label: "Asistencia en viaje", copy: "Apoyo durante viajes de acuerdo con el alcance de cada plan." },
  telehealth: { icon: Video, label: "Teleconsulta", copy: "Orientación médica a distancia desde donde te encuentres." },
  homeMedicine: { icon: PackageCheck, label: "Medicinas a domicilio", copy: "Entrega coordinada de medicamentos según las condiciones del servicio." },
};

const basicIncludedBenefits = [standardBenefits.life, standardBenefits.funeral, standardBenefits.ambulance, standardBenefits.homeDoctor, standardBenefits.telehealth, standardBenefits.homeMedicine];
const fullIncludedBenefits = [standardBenefits.life, standardBenefits.funeral, standardBenefits.ambulance, standardBenefits.homeDoctor, standardBenefits.travel, standardBenefits.telehealth, standardBenefits.homeMedicine];

function CoverageIcon({ item }: { item: string }) {
  const value = item.toLowerCase();
  const Icon = value.includes("ambulancia") ? Ambulance
    : value.includes("domicilio") ? House
    : value.includes("viaje") ? Luggage
    : value.includes("seguro") || value.includes("respaldo") ? ShieldCheck
    : value.includes("exequial") ? HeartHandshake
    : value.includes("cirugía") || value.includes("trasplante") ? Cross
    : value.includes("habitación") || value.includes("hospital") ? BedDouble
    : value.includes("examen") || value.includes("diagnóstico") || value.includes("rayo") ? Microscope
    : value.includes("medicina") || value.includes("farmacia") || value.includes("vademécum") ? Pill
    : value.includes("vacuna") ? Syringe
    : value.includes("copago") || value.includes("deducible") || value.includes("tarifa") ? CircleDollarSign
    : value.includes("laboratorio") ? FlaskConical
    : value.includes("maternidad") || value.includes("niño") || value.includes("prenatal") || value.includes("parto") ? Baby
    : value.includes("psicología") || value.includes("nutrición") || value.includes("terapia") || value.includes("bienestar") ? HeartPulse
    : Check;
  return <Icon aria-hidden="true" />;
}

function coverageTone(title: string) {
  const value = title.toLowerCase();
  if (value.includes("hospital") || value.includes("tecnología")) return "hospital";
  if (value.includes("consulta") || value.includes("diagnóstico") || value.includes("prevención")) return "consultas";
  if (value.includes("medicina") || value.includes("tratamiento")) return "medicinas";
  if (value.includes("emergencia") || value.includes("gran respaldo")) return "emergencias";
  if (value.includes("maternidad") || value.includes("familia")) return "familia";
  return "bienestar";
}

function coverageDisplay(item: string) {
  const annualConsults = item.match(/^(\d+)\s+consultas\s+de\s+(.+)\/año$/i);
  if (annualConsults) {
    const specialty = annualConsults[2].trim();
    return {
      metric: `${annualConsults[1]} consultas al año`,
      label: specialty.charAt(0).toUpperCase() + specialty.slice(1),
    };
  }

  const therapySessions = item.match(/^(\d+)\s+sesiones\s+por\s+tipo\s+de\s+terapia$/i);
  if (therapySessions) {
    return { metric: `${therapySessions[1]} sesiones`, label: "Por tipo de terapia" };
  }

  const percentRange = item.match(/(\d+)%\s*[-–]\s*(\d+)%/);
  const directional = item.match(/\b(desde|hasta|al)\s+(\$[\d.,]+(?:\/día)?|\d+%)/i);
  const leadingPercent = item.match(/^(\d+%)/);
  const standalonePercent = item.match(/(\d+%)/);
  const standaloneAmount = item.match(/(\$[\d.,]+(?:\/día)?)/);
  const duration = item.match(/(\d+\s+(?:días\/año|sesiones(?:\s+por\s+tipo\s+de\s+terapia)?|consultas(?:\s+de\s+[^/]+\/año)?|procedimientos))/i);
  const match = percentRange ?? directional ?? leadingPercent ?? standalonePercent ?? standaloneAmount ?? duration;

  if (!match) return { metric: "Incluido", label: item };

  const rawMetric = percentRange ? `${percentRange[1]}-${percentRange[2]}%` : directional ? directional[2] : match[1];
  const prefix = directional?.[1]?.toLowerCase();
  const metric = prefix === "desde" ? `Desde ${rawMetric}` : prefix === "hasta" ? `Hasta ${rawMetric}` : rawMetric;
  let label = item.replace(match[0], "").replace(/\s+/g, " ").trim().replace(/^[:·–—-]+\s*|\s*[:·–—-]+$/g, "");
  if (label.toLowerCase() === "en red") label = "Atención dentro de la red";
  if (label.toLowerCase() === "libre elección") label = "Atención por libre elección";
  label = label.replace(/^de copago$/i, "Copago del tratamiento").replace(/:\s*de copago$/i, " · Copago");
  return { metric, label: label || item };
}

function planHeroImage(plan: Plan) {
  if (plan.id === "ph15") return "/plan-ph15-hero.jpeg";
  if (plan.id === "ph30") return "/plan-ph30-hero.jpeg";
  if (plan.id === "mh80") return "/plan-mh80-hero.jpeg";
  if (plan.id === "mh150") return "/plan-mh150-hero.jpeg";
  if (plan.id === "prosonrisas") return "/humana-prosonrisas-hero.png";
  if (plan.business) return "/humana-business-team-v2.png";
  if (plan.id === "proteger") return "/humana-historia-hero.png";
  return "/familia-humana.png";
}

const chapterCopy: Record<string, string> = {
  hospital: "Respaldo para los momentos que requieren atención hospitalaria.",
  consultas: "Atención y diagnóstico para cuidar tu salud día a día.",
  medicinas: "Apoyo para continuar tu tratamiento con claridad.",
  emergencias: "Protección cuando necesitas actuar sin esperar.",
  familia: "Cuidado pensado para acompañar cada nueva etapa.",
  bienestar: "Servicios que amplían tu experiencia de cuidado.",
};

const plans: Plan[] = [
  {
    id: "ph15", segment: ["individual"], name: "PH15", family: "Practihumana", headline: "Empieza a cuidarte hoy", ideal: "Tu primer plan",
    limit: "$15.000", limitNote: "cobertura anual", deductible: "$50 anual", network: "Practihumana", icon: Sparkles,
    benefits: [{ icon: Stethoscope, label: "Consultas desde $4" }, { icon: Hospital, label: "90% hospitalario en red" }, { icon: House, label: "Médico a domicilio $10" }, { icon: Phone, label: "Teleconsulta" }],
    includedBenefits: basicIncludedBenefits,
    details: [
      { title: "Hospitalización", icon: Hospital, items: ["90% en red", "80% libre elección", "Habitación hasta $160/día", "Trasplantes hasta $7.500"] },
      { title: "Consultas y exámenes", icon: Stethoscope, items: ["Básicas desde $4 en Metrored", "Subespecialidades desde $8", "Exámenes básicos al 90% en CAM", "Médico a domicilio $10"] },
      { title: "Medicinas", icon: Pill, items: ["Medicinas entre 70-90%"] },
      { title: "Emergencias", icon: Activity, items: ["Urgencias hasta el límite del plan"] },
    ], waits: ["24 h emergencias", "30 días ambulatorio", "60 días maternidad", "90 días hospitalario"],
  },
  {
    id: "ph30", segment: ["individual", "familiar"], name: "PH30", family: "Practihumana", headline: "Respaldo para cada día", ideal: "Personas y familias jóvenes",
    limit: "$30.000", limitNote: "cobertura anual", deductible: "$60 anual", network: "Practihumana", icon: HeartPulse,
    benefits: [{ icon: Stethoscope, label: "Consultas desde $4" }, { icon: Hospital, label: "90% hospitalario en red" }, { icon: Baby, label: "Maternidad y niño sano" }, { icon: House, label: "Médico a domicilio $10" }],
    includedBenefits: basicIncludedBenefits,
    details: [
      { title: "Hospitalización", icon: Hospital, items: ["90% en red", "80% libre elección", "Habitación hasta $160/día", "Trasplantes hasta $15.000"] },
      { title: "Consultas y diagnóstico", icon: Stethoscope, items: ["Básicas desde $4 en Metrored", "Subespecialidades desde $8", "Exámenes básicos al 90% en CAM", "Médico a domicilio $10"] },
      { title: "Maternidad", icon: Baby, items: ["Prenatal hasta $100", "Parto o cesárea hasta $1.500", "Complicaciones hasta $2.250", "Niño sano hasta los 5 años"] },
      { title: "Emergencias y asistencias", icon: Activity, items: ["Urgencias hasta el límite del plan"] },
    ], waits: ["24 h emergencias", "30 días ambulatorio", "60 días maternidad", "90 días hospitalario"],
  },
  {
    id: "mh80", segment: ["familiar"], name: "MH80 Control", family: "Metrohumana", headline: "Tecnología que cuida", ideal: "Atención especializada",
    limit: "$80.000", limitNote: "por incapacidad", deductible: "$200", network: "Metrohumana", icon: ScanHeart,
    benefits: [{ icon: ScanHeart, label: "Cirugía robótica" }, { icon: Hospital, label: "80% hospitalario en red" }, { icon: Stethoscope, label: "Consultas desde $4" }, { icon: HeartHandshake, label: "Psicología y nutrición" }],
    includedBenefits: fullIncludedBenefits,
    details: [
      { title: "Hospitalización y tecnología", icon: ScanHeart, items: ["80% hospitalario en red", "70% libre elección", "Cirugía robótica al 80%", "Trasplantes hasta $40.000"] },
      { title: "Consultas y diagnóstico", icon: Stethoscope, items: ["Básicas desde $4", "Subespecialidades desde $8", "Exámenes CAM al 80%", "Médico a domicilio $10"] },
      { title: "Maternidad", icon: Baby, items: ["Maternidad cubierta hasta $4.000", "Complicaciones: monto adicional", "Control de niño sano", "Vacunas y leche medicada"] },
      { title: "Bienestar", icon: HeartHandshake, items: ["6 consultas de nutrición/año", "12 consultas de psicología/año", "Terapias de rehabilitación", "Chequeos preventivos"] },
    ], waits: ["24 h emergencias", "30 días ambulatorio", "60 días maternidad", "90 días hospitalario"],
  },
  {
    id: "mh50", segment: ["individual", "familiar"], name: "MH50", family: "Metrohumana", headline: "Tranquilidad para tu familia", ideal: "La opción familiar destacada",
    limit: "$50.000", limitNote: "por incapacidad", deductible: "$80", network: "Metrohumana", icon: UsersRound, featured: true,
    benefits: [{ icon: Hospital, label: "90% hospitalario en red" }, { icon: Baby, label: "Maternidad y niño sano" }, { icon: HeartHandshake, label: "Psicología y nutrición" }, { icon: BriefcaseBusiness, label: "Asistencia en viajes" }],
    includedBenefits: fullIncludedBenefits,
    details: [
      { title: "Hospitalización", icon: Hospital, items: ["90% en red", "80% libre elección", "Habitación hasta $160/día", "Trasplantes hasta $25.000"] },
      { title: "Consultas y exámenes", icon: Stethoscope, items: ["Básicas desde $4", "Subespecialidades desde $8", "Red preferida desde $15", "Diagnóstico en red al 90%"] },
      { title: "Maternidad y familia", icon: Baby, items: ["Prenatal hasta $300", "Parto o cesárea hasta $2.500", "Complicaciones hasta $3.750", "Control de niño sano"] },
      { title: "Bienestar y asistencias", icon: HeartHandshake, items: ["Psicología y nutrición", "Terapias de rehabilitación", "Asistencia en viajes 15 días/año"] },
    ], waits: ["24 h emergencias", "30 días ambulatorio", "60 días maternidad", "90 días hospitalario"],
  },
  {
    id: "mh150", segment: ["familiar"], name: "MH150", family: "Metrohumana", headline: "Máximo alcance para los tuyos", ideal: "Mayor cobertura familiar",
    limit: "$150.000", limitNote: "por incapacidad", deductible: "$150", network: "Metrohumana", icon: ShieldCheck,
    benefits: [{ icon: Hospital, label: "90% hospitalario en red" }, { icon: Baby, label: "Maternidad ampliada" }, { icon: Activity, label: "30 sesiones de terapia" }, { icon: BriefcaseBusiness, label: "Viajes 30 días/año" }],
    includedBenefits: fullIncludedBenefits,
    details: [
      { title: "Hospitalización", icon: Hospital, items: ["90% en red", "80% libre elección", "Habitación hasta $200/día", "Trasplantes hasta $75.000"] },
      { title: "Consultas y diagnóstico", icon: Stethoscope, items: ["Básicas desde $4", "Subespecialidades desde $8", "Red preferida hasta $25", "Diagnóstico en red al 90%"] },
      { title: "Maternidad ampliada", icon: Baby, items: ["Prenatal hasta $700", "Parto o cesárea hasta $7.500", "Complicaciones hasta $11.250", "Congénitas hasta $2.500"] },
      { title: "Bienestar y viajes", icon: HeartHandshake, items: ["30 sesiones por tipo de terapia", "Psicología y nutrición", "Viajes 30 días/año"] },
    ], waits: ["24 h emergencias", "30 días ambulatorio", "60 días maternidad", "90 días hospitalario"],
  },
  {
    id: "prosonrisas", segment: ["individual", "familiar", "dental", "empresa", "proteger"], name: "ProSonrisas", family: "Plan dental", headline: "Sonríe con tranquilidad", ideal: "Protección dental para ti y tus seres queridos",
    limit: "Desde $6,63", limitNote: "por persona", deductible: "Según alternativa", network: "Dental nacional", icon: SmilePlus,
    statLabels: { limit: "Tarifa referencial", deductible: "Copagos", network: "Red" },
    benefits: [{ icon: Stethoscope, label: "Evaluación sin costo" }, { icon: Sparkles, label: "Limpiezas y rayos X" }, { icon: ShieldCheck, label: "Sin preexistencias" }, { icon: UsersRound, label: "Incluye a tus seres queridos" }],
    details: [
      { title: "Dos alternativas", icon: SmilePlus, items: ["ProSonrisas Plus: 36 procedimientos · $6,63", "ProSonrisas Full: 50 procedimientos · $23,08", "Restauraciones incluidas en Plus y Full", "Endodoncia incluida en Plus y Full"] },
      { title: "Atención especializada", icon: Stethoscope, items: ["Consulta con especialista: 100% en Plus y Full", "Cirugía: parcial en Plus · 100% en Full", "Odontopediatría: parcial en Plus · 100% en Full", "Periodoncia incluida únicamente en Full"] },
      { title: "Cuidado de tu sonrisa", icon: HeartPulse, items: ["Blanqueamiento incluido únicamente en Full", "Plus cubre la atención dental esencial", "Full amplía los procedimientos disponibles", "Aplican condiciones de cada alternativa"] },
      { title: "Beneficios diferenciales", icon: ShieldCheck, items: ["Sin preexistencias", "Sin topes de consulta", "Extensión a familia y seres queridos", "Dos niveles de protección para elegir"] },
    ], waits: ["Sin carencia en evaluación", "24 h emergencias", "30 días restauraciones", "60 días cirugía"],
  },
  {
    id: "business", segment: ["empresa"], name: "Humana Business", family: "Empresas", headline: "Tu equipo cuidado. Tu empresa crece.", ideal: "Pequeñas y medianas empresas",
    limit: "$10K · $20K · $50K", limitNote: "opciones por colaborador", deductible: "$100 · $150 · $180", network: "Configurable", icon: Building2, business: true,
    benefits: [{ icon: UsersRound, label: "Protección para empleados" }, { icon: Layers3, label: "Familiares opcionales" }, { icon: WalletCards, label: "Cobertura configurable" }, { icon: Phone, label: "Teleconsulta" }],
    details: [
      { title: "Configura el plan", icon: WalletCards, items: ["Coberturas de $10.000, $20.000 o $50.000", "Deducibles de $100, $150 o $180", "Porcentajes configurables", "Maternidad opcional"] },
      { title: "Cuida a tu equipo", icon: UsersRound, items: ["Red ambulatoria con copagos", "Extensión a familiares", "Farmacias en convenio", "Opciones según contratación"] },
      { title: "Atención cercana", icon: Stethoscope, items: ["Teleconsulta", "Médico a domicilio", "Ambulancia terrestre", "Red médica según configuración"] },
      { title: "Valor para la empresa", icon: Building2, items: ["Bienestar para colaboradores", "Beneficio laboral competitivo", "Opciones escalables", "Acompañamiento empresarial"] },
    ],
  },
  {
    id: "proteger", segment: ["proteger"], name: "Proteger", family: "Cobertura complementaria", headline: "Respaldo extra para gastos grandes", ideal: "Complementa tu plan actual",
    limit: "$500.000", limitNote: "por incapacidad", deductible: "$5K · $10K · $20K", network: "Metrohumana", icon: Layers3,
    benefits: [{ icon: Layers3, label: "Complementa tu plan base" }, { icon: Hospital, label: "100% tras deducible" }, { icon: ShieldCheck, label: "Trasplantes hasta $250K" }, { icon: HeartPulse, label: "Chequeo anual" }],
    details: [
      { title: "Gran respaldo", icon: ShieldCheck, items: ["Límite de $500.000", "100% después del deducible", "Trasplantes hasta $250.000", "Cirugía robótica hasta $50.000"] },
      { title: "Cómo complementa", icon: Layers3, items: ["Funciona con plan individual o empresarial", "Coordina beneficios del plan base", "Deducibles a elegir", "Aplican condiciones de coordinación"] },
      { title: "Prevención", icon: HeartPulse, items: ["Un chequeo anual por contrato", "10 procedimientos", "Metrored Quito o Guayaquil", "Autorización previa"] },
      { title: "Asistencias", icon: HeartHandshake, items: ["Asistencias HU PLUS", "Apoyo personal, hogar y mascotas", "Activación según condiciones"] },
    ], includedBenefits: [standardBenefits.life], waits: ["30 días ambulatorio", "60 días maternidad", "90 días hospitalario", "24 meses preexistencias"],
  },
];

const segmentCopy: Record<Segment, { label: string; title: string; short: string }> = {
  individual: { label: "Individual", title: "Empieza por ti", short: "Planes para tu ritmo de vida" },
  familiar: { label: "Familiar", title: "Protege a quienes amas", short: "MH50 es nuestra opción familiar destacada" },
  dental: { label: "ProSonrisas", title: "Tu sonrisa también merece respaldo", short: "Elige entre ProSonrisas Plus y Full" },
  empresa: { label: "Empresas", title: "Convierte bienestar en valor", short: "Cobertura flexible para tu equipo" },
  proteger: { label: "Protección extra", title: "Más respaldo para lo inesperado", short: "Complementa tu cobertura actual" },
};

function PlanCard({ plan, badge, isFeatured, onOpen, onQuote }: { plan: Plan; badge?: string; isFeatured?: boolean; onOpen: () => void; onQuote: () => void }) {
  const Icon = plan.icon;
  return <article className={`sales-plan-card ${isFeatured ? "featured" : ""} ${plan.business ? "business" : ""}`}>
    {badge && <span className="sales-plan-badge">{badge}</span>}
    {plan.business && <span className="sales-plan-badge">Solución para empresas</span>}
    <div className="sales-card-head"><span className="sales-plan-icon"><Icon /></span><div><small>{plan.family}</small><h2>{plan.name}</h2></div></div>
    <p className="sales-plan-headline">{plan.headline}</p><span className="sales-plan-ideal">{plan.ideal}</span>
    <ul className="sales-benefits">{plan.benefits.map(({ icon: BenefitIcon, label }) => <li key={label}><BenefitIcon /><span>{label}</span></li>)}</ul>
    <div className="sales-limit"><span>{plan.statLabels?.limit ?? "Cobertura"}</span><strong>{plan.limit}</strong><small>{plan.limitNote}</small></div>
    <div className="sales-card-actions"><button type="button" className="sales-buy" onClick={onQuote}>Cotizar en 1 minuto <ArrowRight /></button>{plan.id === "mh50" ? <Link className="sales-more" href="/planes/mh50">Ver todo el plan <ChevronRight /></Link> : <button type="button" className="sales-more" onClick={onOpen}>Ver todo el plan <ChevronRight /></button>}</div>
  </article>;
}

export default function Plans() {
  const [segment, setSegment] = useState<Segment>("familiar");
  const [selected, setSelected] = useState<Plan | null>(null);
  const [message, setMessage] = useState("");
  const visible = plans.filter(plan => plan.segment.includes(segment)).sort((a, b) => a.id === "prosonrisas" ? 1 : b.id === "prosonrisas" ? -1 : 0);
  const quote = (plan: Plan, channel = "cotización") => setMessage(`${plan.name}: ${channel} demostrativa. No se enviaron datos.`);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedSegment = params.get("segment") as Segment | null;
    const requestedPlan = params.get("plan");
    if (requestedSegment && Object.prototype.hasOwnProperty.call(segmentCopy, requestedSegment)) setSegment(requestedSegment);
    if (requestedPlan) {
      const match = plans.find(plan => plan.id === requestedPlan);
      if (match) {
        setSegment(requestedSegment && match.segment.includes(requestedSegment) ? requestedSegment : match.segment[0]);
        setSelected(match);
      }
    }
  }, []);

  return <SiteShell title="Planes · Nueva presentación comercial">
    <section className="sales-hero"><Image src="/familia-humana.png" alt="Familia disfrutando un momento juntos" fill priority sizes="100vw" unoptimized /><div className="sales-hero-overlay" /><div className="sales-hero-copy"><span><HeartHandshake /> Planes Humana</span><h1>El respaldo que tu vida necesita.</h1><p>Elige. Compara. Cotiza.</p><button type="button" onClick={() => document.getElementById("elige-segmento")?.scrollIntoView({ behavior: "smooth" })}>Ver planes <ArrowRight /></button><div className="sales-trust-proof"><UsersRound /><span><strong>Más de 200.000</strong> personas y empresas confían en Humana</span></div></div></section>

    <section className="sales-plans" id="elige-segmento">
      <div className="sales-title-row"><div><span className="sales-eyebrow">Encuentra tu plan</span><h2>¿A quién quieres proteger?</h2></div><button type="button" className="sales-advisor" onClick={() => setMessage("Asesoría demostrativa. WhatsApp y llamada se conectarán en la versión oficial.")}><MessageCircle /> Hablar con un asesor</button></div>
      <div className="sales-segments" role="tablist" aria-label="Tipo de plan">
        {(Object.keys(segmentCopy) as Segment[]).map(key => { const icons = { individual: HeartPulse, familiar: UsersRound, dental: SmilePlus, empresa: Building2, proteger: Layers3 }; const SegmentIcon = icons[key]; return <button key={key} type="button" role="tab" aria-selected={segment === key} className={segment === key ? "active" : ""} onClick={() => setSegment(key)}><SegmentIcon /> {segmentCopy[key].label}</button>; })}
      </div>
      <div key={`heading-${segment}`} className="sales-segment-heading segment-enter" aria-live="polite"><h3>{segmentCopy[segment].title}</h3><p>{segmentCopy[segment].short}</p></div>
      <div key={`plans-${segment}`} className={`sales-plan-grid sales-plan-grid-${segment} segment-enter`}>{visible.map((plan, planIndex) => {
        const isFeatured = (segment === "individual" && plan.id === "ph15") || (segment === "familiar" && plan.id === "mh50") || (segment === "dental" && plan.id === "prosonrisas");
        const badge = segment === "individual" && plan.id === "ph15" ? "Opción individual recomendada" : segment === "familiar" && plan.id === "mh50" ? "Más recomendado para familias" : segment === "dental" && plan.id === "prosonrisas" ? "Plan dental recomendado" : plan.id === "prosonrisas" ? "Complementa tu protección" : undefined;
        return <div className="plan-card-motion" style={{ "--plan-delay": `${planIndex * 75}ms` } as React.CSSProperties} key={plan.id}><PlanCard plan={plan} badge={badge} isFeatured={isFeatured} onOpen={() => setSelected(plan)} onQuote={() => quote(plan)} /></div>;
      })}</div>
      {message && <div className="sales-demo-message" role="status"><Check /><span>{message}</span><button type="button" onClick={() => setMessage("")}>Cerrar</button></div>}
    </section>

    <Dialog open={!!selected} onOpenChange={open => !open && setSelected(null)}>
      {selected && <DialogContent className={`sales-detail-dialog premium-plan-story plan-${selected.id}`}>
        <DialogHeader className="plan-story-hero">
          <Image src={planHeroImage(selected)} alt={`Personas protegidas por el plan ${selected.name}`} fill sizes="(max-width: 760px) 100vw, 1200px" unoptimized />
          <div className="plan-story-hero-overlay" />
          <div className="plan-story-hero-copy">
            <span className="plan-story-family">{(() => { const Icon = selected.icon; return <Icon />; })()} {selected.family}</span>
            <DialogTitle>{selected.name}</DialogTitle>
            <DialogDescription>{selected.headline}</DialogDescription>
            <p>{selected.ideal}</p>
            <button type="button" onClick={() => document.getElementById(`coverage-${selected.id}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}>Descubrir la cobertura <ArrowRight /></button>
          </div>
          <div className="plan-story-stats" aria-label="Datos principales del plan">
            <div><span>{selected.statLabels?.limit ?? "Cobertura"}</span><strong>{selected.limit}</strong><small>{selected.limitNote}</small></div>
            <div><span>{selected.statLabels?.deductible ?? "Deducible"}</span><strong>{selected.deductible}</strong><small>según condiciones</small></div>
            <div><span>{selected.statLabels?.network ?? "Red"}</span><strong>{selected.network}</strong><small>atención del plan</small></div>
          </div>
        </DialogHeader>

        <nav className="plan-story-nav" aria-label="Contenido del plan">
          <button type="button" onClick={() => document.getElementById(`summary-${selected.id}`)?.scrollIntoView({ behavior: "smooth" })}>Resumen</button>
          <button type="button" onClick={() => document.getElementById(`coverage-${selected.id}`)?.scrollIntoView({ behavior: "smooth" })}>Coberturas</button>
          {selected.includedBenefits && <button type="button" onClick={() => document.getElementById(`benefits-${selected.id}`)?.scrollIntoView({ behavior: "smooth" })}>Beneficios</button>}
          {selected.waits && <button type="button" onClick={() => document.getElementById(`waits-${selected.id}`)?.scrollIntoView({ behavior: "smooth" })}>Carencias</button>}
        </nav>

        <main className="plan-story-body">
          <section className="plan-story-summary" id={`summary-${selected.id}`}>
            <span className="sales-eyebrow">Lo esencial, de un vistazo</span>
            <h2>Una cobertura que se entiende y se siente cercana.</h2>
            <div className="plan-story-highlights">{selected.benefits.map(({ icon: BenefitIcon, label }) => <article key={label}><span><BenefitIcon /></span><strong>{label}</strong><Check aria-hidden="true" /></article>)}</div>
          </section>

          <section className="plan-story-coverages" id={`coverage-${selected.id}`}>
            <header><span className="sales-eyebrow">Explora tu protección</span><h2>Todo tu plan, presentado con claridad.</h2><p>Cada bloque reúne coberturas relacionadas para que encuentres lo importante sin leer una tabla interminable.</p></header>
            {selected.details.map((group, index) => {
              const GroupIcon = group.icon;
              const tone = coverageTone(group.title);
              const showHospitalizacionImage = selected.id === "ph15" && group.title === "Hospitalización";
              return <article className={`plan-story-chapter tone-${tone} ${index % 2 ? "reverse" : ""}`} key={group.title}>
                <div className={`plan-story-chapter-intro${showHospitalizacionImage ? " has-image" : ""}`}>
                  {showHospitalizacionImage && <Image className="plan-story-chapter-photo" src="/ph15-hospitalizacion.jpg" alt="Paciente acompañado por personal médico en una habitación de hospital" width={520} height={390} unoptimized />}
                  <span><GroupIcon /></span><small>Tu cobertura</small><h3>{group.title}</h3><p>{chapterCopy[tone]}</p>
                </div>
                <div className="plan-story-chapter-grid">{group.items.map((item, itemIndex) => {
                  const display = coverageDisplay(item);
                  const isWideLast = itemIndex === group.items.length - 1 && group.items.length % 2 === 0;
                  return <div className={`${itemIndex === 0 ? "spotlight" : ""}${isWideLast ? " wide-last" : ""}`.trim()} key={item}><span><CoverageIcon item={item} /></span><strong>{display.metric}</strong><p>{display.label}</p><Check aria-hidden="true" /></div>;
                })}</div>
              </article>;
            })}
          </section>

          {selected.includedBenefits && <section className="plan-story-benefits" id={`benefits-${selected.id}`} aria-labelledby="included-benefits-title">
            <div className="plan-story-benefits-copy"><span><Sparkles /> Beneficios Humana</span><h2 id="included-benefits-title">Más formas de acompañarte.</h2><p>Estos servicios son beneficios adicionales de tu plan y se presentan separados de las coberturas médicas.</p></div>
            <div className="plan-story-benefits-grid">{selected.includedBenefits.map(({ icon: IncludedIcon, label, copy }) => <article key={label}><span><IncludedIcon /></span><div><strong>{label}</strong><p>{copy}</p></div><ChevronRight /></article>)}</div>
          </section>}

          {selected.waits && <section className="plan-story-waits" id={`waits-${selected.id}`}>
            <div><span className="sales-eyebrow"><Clock3 /> Tiempos de espera</span><h2>¿Desde cuándo puedes usarlo?</h2><p>Una lectura simple de los periodos de carencia informados para este plan.</p></div>
            <div className="plan-story-timeline">{selected.waits.map(wait => <span key={wait}><i /><strong>{wait}</strong></span>)}</div>
          </section>}

          <section className="plan-story-network">
            <span><MapPinned /></span><div><small>Atención del plan</small><h2>Tu red, más cerca de ti.</h2><p>Accede a la red <strong>{selected.network}</strong> y recibe orientación para encontrar la atención adecuada.</p></div><button type="button" onClick={() => quote(selected, "consulta de red médica")}>Consultar la red <ArrowRight /></button>
          </section>

          <p className="sales-legal">{selected.id === "prosonrisas" ? "Tarifas referenciales por persona según la información oficial compartida. Aplican condiciones contractuales; la tarifa corporativa puede variar según el volumen." : "Aplican deducibles, porcentajes, carencias, topes y condiciones contractuales. Los valores mostrados son límites o beneficios; no son el precio mensual. [PRECIO] pendiente de cotización y validación comercial."}</p>
        </main>

        <div className="sales-detail-actions"><button type="button" className="sales-buy" onClick={() => quote(selected)}>Cotizar en 1 minuto <ArrowRight /></button><button type="button" className="sales-contact whatsapp" onClick={() => quote(selected, "WhatsApp")}><MessageCircle /> WhatsApp</button><button type="button" className="sales-contact" onClick={() => quote(selected, "llamada")}><Phone /> Llamar</button></div>
      </DialogContent>}
    </Dialog>

    <section className="sales-assurance" id="asesor"><div><ShieldCheck /><span><strong>Más de 200.000 personas y empresas confían en Humana</strong><small>Detalles claros. Acompañamiento humano.</small></span></div><button type="button" onClick={() => setMessage("Asesoría demostrativa. WhatsApp y llamada se conectarán en la versión oficial.")}>Hablar con un asesor <ArrowRight /></button></section>
  </SiteShell>;
}
