"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight, Building2, Check, Factory, HeartHandshake, MessageCircle, Phone, PhoneCall,
  ShoppingCart, SlidersHorizontal, Stethoscope, UsersRound, WalletCards,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const businessDetails = [
  { icon: SlidersHorizontal, title: "Configura la cobertura", items: ["$10.000, $20.000 o $50.000 por persona", "Deducibles de $100, $150 o $180", "Porcentajes configurables", "Maternidad opcional"] },
  { icon: UsersRound, title: "Cuida a tus colaboradores", items: ["Red ambulatoria con copagos", "Extensión a familiares", "Farmacias en convenio", "Opciones según contratación"] },
  { icon: Stethoscope, title: "Atención cercana", items: ["Teleconsulta", "Médico a domicilio", "Ambulancia terrestre", "Red médica según configuración"] },
  { icon: Building2, title: "Valor para tu empresa", items: ["Bienestar para el equipo", "Beneficio laboral competitivo", "Opciones escalables", "Acompañamiento empresarial"] },
];

export default function EmpresasClient() {
  const [message, setMessage] = useState("");

  return (
    <>
      <section className="business-hero">
        <div className="business-hero-copy">
          <span className="kicker">Bienestar que impulsa a tu equipo</span>
          <h1>Planes médicos para Empresas</h1>
          <h2 style={{ fontSize: 20, fontWeight: 600, margin: "4px 0 10px" }}>Cobertura Integral para Personas y Empresas</h2>
          <p>
            Soluciones de salud personalizadas que se adaptan a tus necesidades específicas, ofreciendo
            tranquilidad y acceso preferencial a servicios médicos de calidad para individuos, familias y
            organizaciones de todos los tamaños.
          </p>
          <div>
            <a className="primary-button" href="#empresas-tarjetas">Ver planes <ArrowRight /></a>
            <a className="secondary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">
              <MessageCircle /> WhatsApp
            </a>
            <button className="secondary-button" type="button" onClick={() => setMessage("Llamada empresarial demostrativa. No se enviaron datos.")}>
              <PhoneCall /> Solicitar llamada
            </button>
          </div>
        </div>
        <div className="business-hero-image">
          <Image src="/humana-business-team-v2.png" alt="Equipo de profesionales colaborando en una oficina" fill priority sizes="(max-width: 760px) 100vw, 52vw" unoptimized />
        </div>
      </section>

      <section className="content-section plan-hub-grid" id="empresas-tarjetas">
        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image src="https://humana.med.ec/wp-content/uploads/2025/09/gran-empresa-humana-plan-medico.jpg" alt="Grandes empresas protegidas por un plan médico Humana" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><Factory /></span>
            <h3>Grandes</h3>
            <p>Diseñado para grandes empresas con más de 100 empleados, nuestro plan ofrece beneficios premium y soluciones integrales que protegen la salud de tus colaboradores.</p>
            <Link className="primary-button" href="/planes-medicos/empresas/plan-corporativo">Ver planes <ArrowRight size={18} /></Link>
          </div>
        </article>
        <article className="plan-hub-card">
          <div className="plan-hub-card-media">
            <Image src="https://humana.med.ec/wp-content/uploads/2025/09/mediana-empresa-pyme-humana-plan-medico.jpg" alt="Pequeñas y medianas empresas protegidas por un plan médico Humana" fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
          </div>
          <div className="plan-hub-card-copy">
            <span className="plan-hub-card-icon"><Building2 /></span>
            <h3>Pequeñas y medianas</h3>
            <p>Soluciones equilibradas en planes médicos para medianas y pequeñas empresas, desde 5 hasta 99 colaboradores.</p>
            <Link className="primary-button" href="/planes-medicos/empresas/pequenas-y-medianas">Ver planes <ArrowRight size={18} /></Link>
          </div>
        </article>
      </section>

      <section className="business-product" id="humana-business">
        <Image src="/humana-business-skyline.png" alt="" aria-hidden="true" fill sizes="100vw" unoptimized className="business-product-bg" />
        <div className="business-product-overlay" aria-hidden="true" />
        <div className="business-product-intro"><span className="business-chip"><Building2 /> Humana Business</span><h2>Una solución que crece con tu empresa.</h2><p>Para pequeñas y medianas empresas.</p></div>
        <div className="business-product-layout">
          <article className="business-main-card">
            <span className="sales-plan-badge">Plan empresarial</span>
            <div className="business-card-title"><span><HeartHandshake /></span><div><small>Protección para tu equipo</small><h3>Humana Business</h3></div></div>
            <ul><li><UsersRound /><b>Empleados protegidos</b></li><li><WalletCards /><b>Cobertura configurable</b></li><li><HeartHandshake /><b>Familiares opcionales</b></li><li><Stethoscope /><b>Teleconsulta y atención</b></li></ul>
            <div className="business-coverage"><small>Opciones de cobertura</small><strong>$10K · $20K · $50K</strong><span>por colaborador</span></div>
            <button type="button" className="sales-buy" onClick={() => setMessage("Cotización empresarial demostrativa. No se enviaron datos.")}><ShoppingCart size={17} /> Cotizar para mi empresa <ArrowRight /></button>
            <Link className="sales-more" href="/planes-medicos/empresas/pequenas-y-medianas/plan-humana-business">Ver ficha completa <ArrowRight /></Link>
          </article>

          <div className="business-detail-panel">
            <span className="sales-eyebrow">Todo claro, en pocos pasos</span>
            <h3>¿Qué incluye?</h3>
            <Accordion type="single" collapsible defaultValue="business-0">
              {businessDetails.map(({ icon: Icon, title, items }, index) => (
                <AccordionItem value={`business-${index}`} key={title}>
                  <AccordionTrigger><span><Icon />{title}</span></AccordionTrigger>
                  <AccordionContent><ul>{items.map(item => <li key={item}><Check />{item}</li>)}</ul></AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="sales-legal business-legal">La configuración final depende de la contratación. Valores de consultas y precio mensual pendientes de cotización y validación comercial.</p>
          </div>
        </div>
        {message && <div className="sales-demo-message" role="status"><Check /><span>{message}</span><button type="button" onClick={() => setMessage("")}>Cerrar</button></div>}
      </section>

      <section className="sales-assurance">
        <div><Phone /><span><strong>Hablemos de tu equipo</strong><small>Una propuesta según el tamaño y necesidades de tu empresa.</small></span></div>
        <button type="button" onClick={() => setMessage("Llamada empresarial demostrativa. El contacto se conectará en la versión oficial.")}>Solicitar asesoría <ArrowRight /></button>
      </section>
    </>
  );
}
