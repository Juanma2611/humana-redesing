"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Check, HeartHandshake, MessageCircle, Phone, SlidersHorizontal, Stethoscope, UsersRound, WalletCards } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const businessDetails = [
  { icon: SlidersHorizontal, title: "Configura la cobertura", items: ["$10.000, $20.000 o $50.000 por persona", "Deducibles de $100, $150 o $180", "Porcentajes configurables", "Maternidad opcional"] },
  { icon: UsersRound, title: "Cuida a tus colaboradores", items: ["Red ambulatoria con copagos", "Extensión a familiares", "Farmacias en convenio", "Opciones según contratación"] },
  { icon: Stethoscope, title: "Atención cercana", items: ["Teleconsulta", "Médico a domicilio", "Ambulancia terrestre", "Red médica según configuración"] },
  { icon: Building2, title: "Valor para tu empresa", items: ["Bienestar para el equipo", "Beneficio laboral competitivo", "Opciones escalables", "Acompañamiento empresarial"] },
];

export default function Companies() {
  const [message, setMessage] = useState("");
  return <SiteShell title="Humana Business">
    <section className="business-hero">
      <div className="business-hero-copy"><span className="kicker">Soluciones empresariales</span><h1>Bienestar que impulsa a tu equipo</h1><p>Protección flexible. Equipo acompañado.</p><div><a className="primary-button" href="#humana-business">Conoce Humana Business <ArrowRight /></a><button className="secondary-button" type="button" onClick={() => setMessage("Asesoría empresarial demostrativa. No se enviaron datos.")}><MessageCircle /> Hablar con un asesor</button></div></div>
      <div className="business-hero-image"><Image src="/humana-business-team-v2.png" alt="Equipo de profesionales colaborando en una oficina" fill priority sizes="(max-width: 760px) 100vw, 52vw" unoptimized /></div>
    </section>

    <section className="business-product" id="humana-business">
      <div className="business-product-intro"><span className="business-chip"><Building2 /> Humana Business</span><h2>Una solución que crece con tu empresa.</h2><p>Para pequeñas y medianas empresas.</p></div>
      <div className="business-product-layout">
        <article className="business-main-card">
          <span className="sales-plan-badge">Plan empresarial</span>
          <div className="business-card-title"><span><HeartHandshake /></span><div><small>Protección para tu equipo</small><h3>Humana Business</h3></div></div>
          <ul><li><UsersRound /><b>Empleados protegidos</b></li><li><WalletCards /><b>Cobertura configurable</b></li><li><HeartHandshake /><b>Familiares opcionales</b></li><li><Stethoscope /><b>Teleconsulta y atención</b></li></ul>
          <div className="business-coverage"><small>Opciones de cobertura</small><strong>$10K · $20K · $50K</strong><span>por colaborador</span></div>
          <button type="button" className="sales-buy" onClick={() => setMessage("Cotización empresarial demostrativa. No se enviaron datos.")}>Cotizar para mi empresa <ArrowRight /></button>
          <Link className="sales-more" href="/planes?segment=empresa&plan=business">Ver ficha completa <ArrowRight /></Link>
        </article>

        <div className="business-detail-panel"><span className="sales-eyebrow">Todo claro, en pocos pasos</span><h3>¿Qué incluye?</h3><Accordion type="single" collapsible defaultValue="business-0">
          {businessDetails.map(({ icon: Icon, title, items }, index) => <AccordionItem value={`business-${index}`} key={title}><AccordionTrigger><span><Icon />{title}</span></AccordionTrigger><AccordionContent><ul>{items.map(item => <li key={item}><Check />{item}</li>)}</ul></AccordionContent></AccordionItem>)}
        </Accordion><p className="sales-legal business-legal">La configuración final depende de la contratación. Valores de consultas y precio mensual pendientes de cotización y validación comercial.</p></div>
      </div>
      {message && <div className="sales-demo-message" role="status"><Check /><span>{message}</span><button type="button" onClick={() => setMessage("")}>Cerrar</button></div>}
    </section>

    <section className="sales-assurance"><div><Phone /><span><strong>Hablemos de tu equipo</strong><small>Una propuesta según el tamaño y necesidades de tu empresa.</small></span></div><button type="button" onClick={() => setMessage("Llamada empresarial demostrativa. El contacto se conectará en la versión oficial.")}>Solicitar asesoría <ArrowRight /></button></section>
  </SiteShell>;
}
