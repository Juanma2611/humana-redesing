"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Ambulance, ArrowRight, Check, HeartHandshake, MessageCircle, PhoneCall, Users } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* Rediseño tipo Apple (sobrio, blanco/gris muy claro + marino, una idea
   por sección), misma familia visual que Plan Pyme y Humana Business.
   Mismos textos y datos oficiales del Plan Corporativo ya existentes en
   el sitio. Sin cuadro de coberturas: el plan no tiene montos fijos.
   La única fotografía oficial del plan se usa una sola vez, en el hero;
   los capítulos van sin imagen (en vez de repetir la misma foto). */

const essenceStats = [
  { value: "Desde 50", label: "colaboradores para acceder al plan" },
  { value: "0", label: "períodos de carencia, uso inmediato" },
  { value: "A medida", label: "contrato personalizado por empresa" },
];

type Chapter = { id: string; number: string; eyebrow: string; title: string; lead: string; essentials: string[] };

const CORP_IMAGE = "https://humana.med.ec/wp-content/uploads/2021/03/las-empresas-disenan-su-plan.png";

const chapters: Chapter[] = [
  {
    id: "montos", number: "01",
    eyebrow: "MONTOS DE COBERTURA", title: "Un contrato a la medida de tu empresa.",
    lead: "Al ser un Contrato Corporativo personalizado no existe un monto fijo, todos los valores van en función de su Plan específico.",
    essentials: ["Contrato corporativo 100% personalizado", "Montos definidos según el plan específico de cada empresa"],
  },
  {
    id: "carencias", number: "02",
    eyebrow: "PERIODOS DE CARENCIA", title: "Cobertura desde el primer día.",
    lead: "No existen períodos de carencia: tu empresa puede hacer uso del plan de forma inmediata.",
    essentials: [
      "No existen períodos de carencia, uso inmediato del plan",
      "Continuidad de cobertura para enfermedades preexistentes y/o congénitas",
      "Aplica para el titular y dependientes que vienen de la vigencia anterior, o al ingreso de toda la empresa a Humana",
    ],
  },
  {
    id: "credito", number: "03",
    eyebrow: "CRÉDITO HOSPITALARIO", title: "Respaldo hospitalario sin trámites de más.",
    lead: "Hospitalización y honorarios médicos con crédito preautorizado o cobertura vía reembolso en cualquier hospital de tu red.",
    essentials: ["Crédito preautorizado en hospitalización", "Honorarios médicos cubiertos", "Cobertura vía reembolso en cualquier hospital de tu red"],
  },
  {
    id: "aliado", number: "04",
    eyebrow: "ALIADO HUMANA", title: "Más que un plan médico, un aliado para tu empresa.",
    lead: "Al ser un aliado de Humana, usted y sus colaboradores además podrán obtener:",
    essentials: ["Reportería y control de siniestralidad", "Asesoría y atención personalizada", "Medios electrónicos para consulta de información"],
  },
];

const additionalBenefits = [
  { icon: Ambulance, title: "Ambulancia terrestre", href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre" },
  { icon: HeartHandshake, title: "Asistencia exequial", href: "https://servicio.humana.med.ec/hc/es/articles/4402813461389-Asistencia-Exequial" },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
];

export default function PlanCorporativoClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("is-motion-ready");
      root.querySelectorAll(".biz-reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    root.classList.add("is-motion-ready");
    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(".biz-reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    revealNodes.forEach((el) => revealObserver.observe(el));
    const safetyTimer = window.setTimeout(() => revealNodes.forEach((el) => el.classList.add("is-visible")), 2400);
    return () => { revealObserver.disconnect(); window.clearTimeout(safetyTimer); };
  }, []);

  return (
    <SiteShell title="Plan Corporativo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link><span>»</span>
        <span>Plan Corporativo</span>
      </nav>

      <div className="biz-page" data-accent="navy" ref={rootRef}>
        {/* Hero ------------------------------------------------------- */}
        <section className="biz-hero" id="corporativo-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">PLAN EMPRESARIAL · PLAN CORPORATIVO</span>
            <h1>Plan <span>Corporativo</span></h1>
            <p className="biz-hero-line">Tu empresa diseña su propio plan.</p>
            <p className="biz-hero-body">
              El plan corporativo se ajustará a las necesidades de presupuesto y coberturas de su empresa
              (a partir de 50 empleados). Un plan diseñado de acuerdo a sus necesidades, totalmente
              personalizable.
            </p>
            <p className="biz-hero-body">
              En nuestra cartera de clientes corporativos tenemos importantes empresas del país en
              sectores como el financiero, petrolero, telecomunicaciones, automotriz, industrial,
              servicios, salud, entre otros.
            </p>
            <div className="biz-hero-actions">
              <a className="biz-btn-primary" href="#corporativo-cierre">Solicita información</a>
              <a className="biz-btn-link" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Hablar con un asesor <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="biz-hero-image">
            <Image src={CORP_IMAGE} alt="Las empresas diseñan su plan corporativo" fill sizes="(max-width: 980px) 100vw, 1180px" unoptimized />
          </figure>
        </section>

        {/* Franja de cifras clave -------------------------------------- */}
        <section className="biz-section is-color">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">PLAN CORPORATIVO EN TRES IDEAS</span>
              <h2>Un plan diseñado junto a tu empresa.</h2>
            </div>
            <div className="biz-stats biz-reveal">
              {essenceStats.map((stat) => (
                <article key={stat.value}>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Capítulos (una idea por sección, sin repetir la única foto) --- */}
        {chapters.map((c, i) => (
          <section className={`biz-section ${i % 2 === 0 ? "is-light" : "is-dark"}`} id={`corporativo-${c.id}`} key={c.id}>
            <div className="biz-container">
              <div className="biz-feature-text biz-reveal">
                <span className="biz-feature-num">{c.number}</span>
                <span className="biz-eyebrow">{c.eyebrow}</span>
                <h2>{c.title}</h2>
                <p>{c.lead}</p>
                <ul className="biz-checklist is-single">
                  {c.essentials.map((item) => (
                    <li key={item}><Check aria-hidden="true" /><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* Beneficios adicionales ------------------------------------ */}
        <section className="biz-section is-light" id="corporativo-beneficios">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <h2>Beneficios adicionales de los Planes Corporativos</h2>
            </div>
            <div className="biz-benefit-cards biz-reveal">
              {additionalBenefits.map(({ icon: Icon, title, href }) => (
                <a key={title} href={href} target="_blank" rel="noreferrer" className="biz-benefit-card">
                  <Icon aria-hidden="true" />
                  <h3>{title}</h3>
                  <span className="biz-btn-link">Ver detalles <ArrowRight aria-hidden="true" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre único --------------------------------------------------- */}
        <section className="biz-section is-dark is-close" id="corporativo-cierre">
          <div className="biz-container biz-close">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">PLAN CORPORATIVO · PLAN EMPRESARIAL</span>
              <h2>Diseñemos juntos el plan de tu empresa.</h2>
              <p>Un asesor corporativo te contactará con una propuesta personalizada.</p>
            </div>
            <div className="biz-close-actions biz-reveal">
              <a className="biz-btn-primary" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Solicita información</a>
              <Link className="biz-btn-link" href="/planes-medicos/empresas/">Ver todos los planes <ArrowRight aria-hidden="true" /></Link>
            </div>
            <div className="biz-close-contact biz-reveal">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon aria-hidden="true" size={16} /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="biz-trust biz-reveal"><Users aria-hidden="true" /> Más de 200.000 personas y empresas confían en Humana.</p>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
