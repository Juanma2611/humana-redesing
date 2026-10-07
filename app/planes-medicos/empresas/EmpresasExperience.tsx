"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Briefcase, Building2, Check, ChevronRight,
  ShieldCheck, ShoppingCart, UsersRound,
} from "lucide-react";

/* Experiencia editorial de Empresas, recuperada del prototipo original
   (commit 32fac1c) y llevada a /planes-medicos/empresas/ con los planes
   empresariales oficiales actuales: Plan Pyme, Humana Business y Plan
   Corporativo. Sin ventana emergente: cada "Conoce más" enlaza con <Link>
   real a la página oficial de detalle. */

type Segment = { id: string; label: string; icon: typeof Briefcase };
const segments: Segment[] = [
  { id: "pyme", label: "Plan Pyme", icon: Briefcase },
  { id: "business", label: "Humana Business", icon: UsersRound },
  { id: "corporativo", label: "Plan Corporativo", icon: Building2 },
];

type Plan = {
  id: string; name: string; family: string; href: string; image: string; imageAlt: string;
  stats: { label: string; value: string; note?: string }[]; essentials: string[]; compareHref?: string;
};

const pequenasYMedianasHref = "/planes-medicos/empresas/pequenas-y-medianas/";

const pyme: Plan = {
  id: "pyme", name: "Plan Pyme", family: "Empresas · 5 a 25 colaboradores",
  href: "/planes-medicos/empresas/pequenas-y-medianas/plan-empresarial/",
  image: "https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg",
  imageAlt: "Equipo de una pequeña empresa protegido por Plan Pyme",
  stats: [{ label: "Cobertura MH10", value: "$10.000" }, { label: "Cobertura MH5", value: "$5.000" }, { label: "Red", value: "Metrohumana" }],
  essentials: ["Atención médica oportuna y personalizada", "Acceso a la red más amplia de prestadores del país", "Médicos y medicinas a domicilio", "Extensión de coberturas a familiares"],
  compareHref: pequenasYMedianasHref,
};
const business: Plan = {
  id: "business", name: "Humana Business", family: "Empresas · 25 a 45 colaboradores",
  href: "/planes-medicos/empresas/pequenas-y-medianas/plan-humana-business/",
  image: "/images/planes/business/business-oficina.jpg",
  imageAlt: "Oficina de un equipo protegido por Humana Business",
  stats: [{ label: "Cobertura", value: "$10.000", note: "por colaborador" }, { label: "Deducible", value: "$50 · $80 · $100" }, { label: "Maternidad", value: "A elección" }],
  essentials: ["Amplia red de prestadores en el país", "Cobertura de maternidad a elección de la empresa", "Elección de deducibles y copagos", "Coberturas a nivel corporativo"],
  compareHref: pequenasYMedianasHref,
};
const corporativo: Plan = {
  id: "corporativo", name: "Plan Corporativo", family: "Empresas · desde 50 colaboradores",
  href: "/planes-medicos/empresas/plan-corporativo/",
  image: "https://humana.med.ec/wp-content/uploads/2021/03/las-empresas-disenan-su-plan.png",
  imageAlt: "Las empresas diseñan su plan corporativo",
  stats: [{ label: "Carencias", value: "Ninguna", note: "uso inmediato" }, { label: "Contrato", value: "Personalizado" }],
  essentials: ["Reportería y control de siniestralidad", "Asesoría y atención personalizada", "Medios electrónicos para consulta de información", "No existen períodos de carencia: uso inmediato del plan"],
};

function PlanBlock({ plan, reverse }: { plan: Plan; reverse?: boolean }) {
  return (
    <article id={`plan-${plan.id}`} className={`plan-editorial-block${reverse ? " reverse" : ""}`}>
      <div className="plan-editorial-block-media">
        <Image src={plan.image} alt={plan.imageAlt} fill sizes="(max-width: 760px) 100vw, 640px" unoptimized className="plan-editorial-block-photo" />
      </div>
      <div className="plan-editorial-block-copy">
        <span className="plan-editorial-block-family"><ShieldCheck size={16} aria-hidden="true" /> {plan.family}</span>
        <h3>{plan.name}</h3>
        <ul className="plan-faq-checklist" style={{ margin: "4px 0 22px" }}>
          {plan.essentials.map((item) => <li key={item}><Check size={15} />{item}</li>)}
        </ul>
        <div className="plan-editorial-block-stats">
          {plan.stats.map((stat) => (
            <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong>{stat.note && <small>{stat.note}</small>}</div>
          ))}
        </div>
        <div className="plan-editorial-block-actions">
          <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza para tu empresa <ArrowRight size={16} /></Link>
          <Link className="sales-more" href={plan.href}>Conoce más acerca del plan <ChevronRight size={16} /></Link>
        </div>
        {plan.compareHref && (
          <Link className="pm-biz-compare-link" href={plan.compareHref}>Ver todos los planes para pequeñas y medianas empresas <ChevronRight size={14} /></Link>
        )}
      </div>
    </article>
  );
}

export default function EmpresasExperience() {
  const [active, setActive] = useState<string>("pyme");
  const targets = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = segments.map((s) => targets.current[s.id]).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const key = segments.find((s) => targets.current[s.id] === visible.target)?.id;
        if (key) setActive(key);
      }
    }, { threshold: reduceMotion ? 0.51 : [0.3, 0.5, 0.7], rootMargin: "-90px 0px -40% 0px" });
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sales-plans pm-biz-plans" id="elige-plan">
      <div className="sales-title-row">
        <div><span className="sales-eyebrow">Empresas Humana</span><h2>¿Qué tamaño tiene tu empresa?</h2></div>
      </div>

      <div className="sales-plans-layout">
        <nav className="sales-segments" role="tablist" aria-label="Planes para empresas">
          {segments.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} role="tab" aria-selected={active === id} className={active === id ? "active" : ""}>
              <Icon size={18} aria-hidden="true" /> {label}
            </a>
          ))}
        </nav>

        <div className="sales-plans-content">
          <div className="plan-editorial-flow pm-biz-flow">
            {/* Texto oficial del hub de empresas (tarjeta "Pequeñas y Medianas"),
                introducción común a Plan Pyme y Humana Business. Nota: el rango
                "5 hasta 99 colaboradores" de este texto oficial no coincide con
                los rangos mostrados por los bloques (5-25 Pyme, 25-45 Business);
                no se unifican, queda pendiente de validar con Comercial. */}
            <div className="pm-biz-intro">
              <h3>Pequeñas y Medianas</h3>
              <p>Soluciones equilibradas en planes médicos para medianas y pequeñas empresas, desde 5 hasta 99 colaboradores.</p>
              <Link className="pm-biz-compare-link" href={pequenasYMedianasHref}>Ver el hub de pequeñas y medianas empresas <ChevronRight size={14} /></Link>
            </div>
            <section id="pyme" ref={(el) => { targets.current.pyme = el; }} className="plan-editorial-hero pm-biz-hero">
              <Image src="https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg" alt="Equipo de una pequeña empresa" fill sizes="100vw" unoptimized className="plan-editorial-hero-photo" />
              <div className="plan-editorial-hero-overlay" />
              <div className="plan-editorial-hero-copy">
                <span className="plan-editorial-eyebrow">Pequeñas empresas</span>
                <h2>Plan Pyme</h2>
                <p>Beneficios de salud accesibles y valiosos para pequeñas empresas, de 5 hasta 25 colaboradores.</p>
                <div className="plan-editorial-hero-actions">
                  <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza para tu empresa <ArrowRight size={16} /></Link>
                </div>
              </div>
            </section>
            <PlanBlock plan={pyme} />

            <section id="business" ref={(el) => { targets.current.business = el; }} className="plan-editorial-hero pm-biz-hero">
              <Image src="https://humana.med.ec/wp-content/uploads/2025/09/plan-para-empresa-humana-medicina-prepagada.jpg" alt="Equipo de colaboradores protegido por Humana Business" fill sizes="100vw" unoptimized className="plan-editorial-hero-photo" />
              <div className="plan-editorial-hero-overlay" />
              <div className="plan-editorial-hero-copy">
                <span className="plan-editorial-eyebrow">Medianas empresas</span>
                <h2>Humana Business</h2>
                <p>La combinación perfecta entre cobertura completa y la flexibilidad de elegir lo que necesitas, de 25 a 45 colaboradores.</p>
                <div className="plan-editorial-hero-actions">
                  <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza para tu empresa <ArrowRight size={16} /></Link>
                </div>
              </div>
            </section>
            <PlanBlock plan={business} reverse />

            <section id="corporativo" ref={(el) => { targets.current.corporativo = el; }} className="plan-editorial-hero pm-biz-hero">
              <Image src="https://humana.med.ec/wp-content/uploads/2021/03/las-empresas-disenan-su-plan.png" alt="Las empresas diseñan su plan corporativo" fill sizes="100vw" unoptimized className="plan-editorial-hero-photo" />
              <div className="plan-editorial-hero-overlay" />
              <div className="plan-editorial-hero-copy">
                <span className="plan-editorial-eyebrow">Grandes empresas</span>
                <h2>Plan Corporativo</h2>
                {/* Texto oficial de la tarjeta "Grandes Empresas" del hub. El "más
                    de 100 empleados" de este texto no coincide con el "desde 50
                    empleados" que usa el bloque del plan más abajo; no se
                    unifican, queda pendiente de validar con Comercial. */}
                <p>Diseñado para grandes empresas con más de 100 empleados, nuestro plan ofrece beneficios premium y soluciones integrales que protegen la salud de tus colaboradores.</p>
                <div className="plan-editorial-hero-actions">
                  <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza para tu empresa <ArrowRight size={16} /></Link>
                </div>
              </div>
            </section>
            <PlanBlock plan={corporativo} />
          </div>
        </div>
      </div>
    </section>
  );
}
