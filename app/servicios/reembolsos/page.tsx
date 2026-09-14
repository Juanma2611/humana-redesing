"use client";

import Link from "next/link";
import { ArrowRight, Check, Clock3, FileCheck2, Info, ReceiptText, UploadCloud } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";
import { useState } from "react";

const requirements: Record<string,string[]> = {
  ambulatorio:["Solicitud de reembolso completa","Factura y comprobantes válidos","Orden o informe médico cuando corresponda","Resultados o documentos de respaldo"],
  hospitalario:["Solicitud de reembolso completa","Factura detallada y comprobantes","Historia clínica o epicrisis","Desglose de insumos y servicios"],
  exterior:["Solicitud de reembolso completa","Facturas y comprobantes del país de atención","Informe médico","Documentos traducidos si corresponde"]
};

export default function Refunds() {
  const [type,setType] = useState("ambulatorio");
  const [sent,setSent] = useState(false);
  return <SiteShell title="Reembolsos"><PageHero eyebrow="Reembolso paso a paso" title="Recupera tus gastos sin perderte en el proceso" description="Selecciona el tipo de atención y revisa una lista clara de documentos antes de iniciar. No cargues información real: esta pantalla es una demostración." />
    <section className="content-section split-service"><div>
      <h2 className="sub-title">1. ¿Qué tipo de atención recibiste?</h2><div className="segmented">{[["ambulatorio","Consulta o atención ambulatoria"],["hospitalario","Atención hospitalaria"],["exterior","Atención fuera del país"]].map(([v,l]) => <button className={type === v ? "active" : ""} onClick={() => {setType(v);setSent(false)}} key={v}>{l}</button>)}</div>
      <h2 className="sub-title">2. Prepara estos documentos</h2><div className="check-list">{requirements[type].map(item => <div key={item}><Check /><span>{item}</span></div>)}</div>
      <div className="service-callout"><Clock3 /><p>Como referencia del proceso actual, los gastos deben presentarse dentro del plazo aplicable. La versión final debe mostrar el plazo exacto según el contrato.</p></div>
    </div><aside className="action-panel"><ReceiptText /><h2>Iniciar solicitud</h2><p>En el producto final, este botón abriría el formulario seguro en MiHumana y permitiría adjuntar documentos.</p><button className="primary-button" onClick={() => setSent(true)}><UploadCloud size={18} /> Simular inicio</button>{sent && <div className="success-box"><FileCheck2 /><div><strong>Ruta preparada</strong><p>La solicitud continuaría en un entorno seguro, con progreso visible y confirmación.</p></div></div>}<Link href="/cliente">Consultar solicitudes anteriores <ArrowRight size={16} /></Link></aside></section>
    <section className="simple-steps"><div><span>1</span><h3>Revisa</h3><p>Confirma el tipo de atención.</p></div><div><span>2</span><h3>Adjunta</h3><p>Sube solo los documentos necesarios.</p></div><div><span>3</span><h3>Da seguimiento</h3><p>Consulta el estado sin llamar.</p></div><div className="prototype-tip"><Info /><p><strong>Mejora propuesta:</strong> checklist dinámico, guardado de progreso y mensajes claros si falta algo.</p></div></section>
  </SiteShell>;
}
