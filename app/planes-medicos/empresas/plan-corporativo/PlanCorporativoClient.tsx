"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Ambulance, Check, Clock3, CreditCard, HeartHandshake, Hospital, MessageCircle, PhoneCall, ShoppingCart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const allyBenefits = [
  "Reportería y control de siniestralidad",
  "Asesoría y atención personalizada",
  "Medios electrónicos para consulta de información",
];

const additionalBenefits = [
  {
    icon: Ambulance,
    title: "Ambulancia terrestre",
    image: "https://humana.med.ec/wp-content/uploads/2020/11/beneficios-asistencias-logos-para-la-web-01.png",
    href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre",
  },
  {
    icon: HeartHandshake,
    title: "Asistencia exequial",
    image: "https://humana.med.ec/wp-content/uploads/2020/11/beneficios-asistencias-logos-para-la-web-03.png",
    href: "https://servicio.humana.med.ec/hc/es/articles/4402813461389-Asistencia-Exequial",
  },
];

export default function PlanCorporativoClient() {
  const [quoted, setQuoted] = useState(false);
  const [called, setCalled] = useState(false);

  return (
    <SiteShell title="Plan Corporativo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos">Planes médicos</Link>
        <span>»</span>
        <Link href="/planes-medicos/empresas">Planes médicos para Empresas</Link>
        <span>»</span>
        <span>Plan Corporativo</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 900 }}>
        <h1>Plan Corporativo</h1>
        <p>
          El plan corporativo se ajustará a las necesidades de presupuesto y coberturas de su empresa (a
          partir de 50 empleados). Un plan diseñado de acuerdo a sus necesidades, totalmente
          personalizable.
        </p>
        <p>
          En nuestra cartera de clientes corporativos tenemos importantes empresas del país en sectores
          como el financiero, petrolero, telecomunicaciones, automotriz, industrial, servicios, salud,
          entre otros.
        </p>
        <div className="plan-hub-card-actions" style={{ justifyContent: "center", marginTop: 20 }}>
          <a className="primary-button" href="#corporativo-lead"><ShoppingCart size={16} /> Solicita información</a>
          <a className="secondary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
          <button type="button" className="secondary-button" onClick={() => setCalled(true)}><PhoneCall size={16} /> Solicitar llamada</button>
        </div>
        {called && <p style={{ color: "#0e8c88", marginTop: 12 }}>Solicitud de llamada demostrativa registrada. No se envió información real.</p>}
      </section>

      <section className="content-section" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="plan-hub-card-media" style={{ position: "relative", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden" }}>
          <Image
            src="https://humana.med.ec/wp-content/uploads/2021/03/las-empresas-disenan-su-plan.png"
            alt="Las empresas diseñan su plan"
            fill
            sizes="900px"
            unoptimized
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Al ser un aliado de Humana, usted y sus colaboradores además podrán obtener:</h2>
        <ul className="plan-faq-checklist">
          {allyBenefits.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}
        </ul>
      </section>

      <section className="content-section" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <CreditCard size={22} />
            <h2 style={{ fontSize: 20, marginTop: 10 }}>Montos de cobertura</h2>
            <p>Al ser un Contrato Corporativo personalizado no existe un monto fijo, todos los valores van en función de su Plan específico.</p>
          </div>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <Clock3 size={22} />
            <h2 style={{ fontSize: 20, marginTop: 10 }}>Periodos de carencia</h2>
            <p>
              No existen períodos de carencia, puede hacer uso del plan de forma inmediata. Tiene además
              continuidad de cobertura para enfermedades preexistentes y/o congénitas, para el titular y
              dependientes que vienen de la vigencia anterior o al ingreso de toda la empresa a Humana.
            </p>
          </div>
          <div className="plan-hub-card" style={{ padding: 24 }}>
            <Hospital size={22} />
            <h2 style={{ fontSize: 20, marginTop: 10 }}>Crédito hospitalario</h2>
            <p>Cuenta con hospitalización y honorarios médicos con crédito preautorizado o cobertura vía reembolso en cualquier hospital de tu red.</p>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px 64px" }}>
        <h2>Beneficios adicionales de los Planes Corporativos</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 16 }}>
          {additionalBenefits.map(({ icon: Icon, title, image, href }) => (
            <a key={title} href={href} target="_blank" rel="noreferrer" className="plan-hub-card" style={{ padding: 24, textDecoration: "none", color: "inherit" }}>
              <div style={{ position: "relative", width: 56, height: 56 }}>
                <Image src={image} alt={title} fill sizes="56px" unoptimized style={{ objectFit: "contain" }} />
              </div>
              <h3 style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}><Icon size={18} /> {title}</h3>
            </a>
          ))}
        </div>
      </section>

      <section className="sales-assurance" id="corporativo-lead">
        <div><HeartHandshake /><span><strong>Diseñemos juntos el plan de tu empresa</strong><small>Un asesor corporativo te contactará con una propuesta personalizada.</small></span></div>
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
