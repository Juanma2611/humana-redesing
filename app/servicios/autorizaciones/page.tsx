"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, FileHeart, Hospital, Pill, SearchCheck, Stethoscope } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";
import { useState } from "react";

const auths = [
  {key:"consulta",icon:Stethoscope,title:"Consulta en red preferida",copy:"Genera una autorización de consulta después de agendar con el prestador.",time:"Validez y condiciones según el plan."},
  {key:"ambulatoria",icon:SearchCheck,title:"Exámenes o procedimientos",copy:"Para imágenes de alta complejidad, terapias o procedimientos que requieren revisión previa.",time:"El pedido médico debe estar completo y legible."},
  {key:"hospital",icon:Hospital,title:"Hospitalización programada",copy:"Para cirugías o atenciones hospitalarias coordinadas con anticipación.",time:"La gestión puede requerir revisión adicional."},
  {key:"medicinas",icon:Pill,title:"Medicamentos",copy:"Para medicación que requiere autorización de acuerdo con las condiciones del plan.",time:"Incluye prescripción, indicaciones y diagnóstico."},
];

export default function Authorizations() {
  const [selected,setSelected] = useState(auths[0]);
  const [started,setStarted] = useState(false);
  const SelectedIcon = selected.icon;
  return <SiteShell title="Autorizaciones"><PageHero eyebrow="Evita trámites innecesarios" title="Identifica la autorización correcta" description="Elige el tipo de atención. El prototipo te muestra para qué sirve, qué preparar y cuál sería el siguiente paso." />
    <section className="content-section auth-layout"><div className="auth-options">{auths.map(item => {const Icon=item.icon;return <button className={selected.key === item.key ? "active" : ""} onClick={() => {setSelected(item);setStarted(false)}} key={item.key}><Icon /><span><strong>{item.title}</strong><small>{item.copy}</small></span><ArrowRight /></button>})}</div>
    <aside className="auth-detail"><SelectedIcon /><span className="kicker">Ruta recomendada</span><h2>{selected.title}</h2><p>{selected.copy}</p><div className="service-callout"><Clock3 /><p>{selected.time}</p></div><h3>Antes de comenzar</h3><ul><li><Check /> Verifica que tu plan esté activo</li><li><Check /> Ten a mano la orden o pedido médico</li><li><Check /> Confirma los datos del paciente y prestador</li></ul><button className="primary-button" onClick={() => setStarted(true)}><FileHeart size={18} /> Simular solicitud</button>{started && <div className="success-box"><Check /><div><strong>Proceso preparado</strong><p>En MiHumana continuarías con los datos y documentos necesarios.</p></div></div>}<Link href="/cliente">Ver estado de autorizaciones <ArrowRight size={16} /></Link></aside></section>
  </SiteShell>;
}
