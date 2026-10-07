"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  Ambulance, Building2, Clock3, CreditCard, Handshake, HeartHandshake,
  Hospital, LineChart, MessageCircle, PhoneCall, Users,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* Misma familia visual y estructura que Humana Business
   (plan-humana-business/HumanaBusinessClient.tsx), con los datos oficiales
   del Plan Corporativo ya existentes en el sitio. Sin cuadro de
   coberturas: el plan no tiene montos fijos. Solo hay una fotografía
   oficial propia ("Las empresas diseñan su plan"), reutilizada en el hero
   y en los 4 capítulos (se avisó al usuario). */

function CorporativoDecor({ tone }: { tone: "on-dark" | "on-light" }) {
  return (
    <div className={`business-decor ${tone}`} aria-hidden="true">
      <Building2 className="deco deco-building" />
      <LineChart className="deco deco-linechart" />
      <Handshake className="deco deco-handshake" />
      <Hospital className="deco deco-chart" />
      <CreditCard className="deco deco-briefcase" />
      <Clock3 className="deco deco-target" />
    </div>
  );
}

const essenceStats = [
  { value: "Desde 50", label: "colaboradores\npara acceder al plan" },
  { value: "0", label: "períodos de carencia,\nuso inmediato" },
  { value: "A medida", label: "contrato personalizado\npor empresa" },
];

type Chapter = {
  id: string; number: string; navLabel: string; theme: "dark" | "light" | "blue" | "warm";
  image: string; imageAlt: string; eyebrow: string; title: string; lead: string; essentials: string[];
};

const CORP_IMAGE = "https://humana.med.ec/wp-content/uploads/2021/03/las-empresas-disenan-su-plan.png";

const chapters: Chapter[] = [
  {
    id: "montos", number: "01", navLabel: "Montos de cobertura", theme: "dark",
    image: CORP_IMAGE, imageAlt: "Las empresas diseñan su plan corporativo",
    eyebrow: "MONTOS DE COBERTURA", title: "Un contrato a la medida de tu empresa.",
    lead: "Al ser un Contrato Corporativo personalizado no existe un monto fijo, todos los valores van en función de su Plan específico.",
    essentials: ["Contrato corporativo 100% personalizado", "Montos definidos según el plan específico de cada empresa"],
  },
  {
    id: "carencias", number: "02", navLabel: "Periodos de carencia", theme: "blue",
    image: CORP_IMAGE, imageAlt: "Las empresas diseñan su plan corporativo",
    eyebrow: "PERIODOS DE CARENCIA", title: "Cobertura desde el primer día.",
    lead: "No existen períodos de carencia: tu empresa puede hacer uso del plan de forma inmediata.",
    essentials: [
      "No existen períodos de carencia, uso inmediato del plan",
      "Continuidad de cobertura para enfermedades preexistentes y/o congénitas",
      "Aplica para el titular y dependientes que vienen de la vigencia anterior, o al ingreso de toda la empresa a Humana",
    ],
  },
  {
    id: "credito", number: "03", navLabel: "Crédito hospitalario", theme: "light",
    image: CORP_IMAGE, imageAlt: "Las empresas diseñan su plan corporativo",
    eyebrow: "CRÉDITO HOSPITALARIO", title: "Respaldo hospitalario sin trámites de más.",
    lead: "Hospitalización y honorarios médicos con crédito preautorizado o cobertura vía reembolso en cualquier hospital de tu red.",
    essentials: ["Crédito preautorizado en hospitalización", "Honorarios médicos cubiertos", "Cobertura vía reembolso en cualquier hospital de tu red"],
  },
  {
    id: "aliado", number: "04", navLabel: "Aliado Humana", theme: "warm",
    image: CORP_IMAGE, imageAlt: "Las empresas diseñan su plan corporativo",
    eyebrow: "ALIADO HUMANA", title: "Más que un plan médico, un aliado para tu empresa.",
    lead: "Al ser un aliado de Humana, usted y sus colaboradores además podrán obtener:",
    essentials: ["Reportería y control de siniestralidad", "Asesoría y atención personalizada", "Medios electrónicos para consulta de información"],
  },
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

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
];

export default function PlanCorporativoClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-chapter-link]"));
    const sections = navLinks
      .map((link) => root.querySelector<HTMLElement>(`#${link.dataset.chapterLink}`))
      .filter((el): el is HTMLElement => !!el);
    let lastCurrent = "";

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
      let current = "";
      sections.forEach((section) => { if (section.getBoundingClientRect().top < window.innerHeight * 0.52) current = section.id; });
      navLinks.forEach((link) => link.classList.toggle("is-active", link.dataset.chapterLink === current));
      if (current && current !== lastCurrent) {
        const activeLink = navLinks.find((link) => link.dataset.chapterLink === current);
        const navContainer = activeLink?.parentElement;
        if (activeLink && navContainer) {
          const targetLeft = activeLink.offsetLeft - navContainer.clientWidth / 2 + activeLink.clientWidth / 2;
          navContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: reducedMotion ? "auto" : "smooth" });
        }
        lastCurrent = current;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (reducedMotion || !("IntersectionObserver" in window)) {
      root.classList.remove("is-motion-ready");
      root.querySelectorAll(".mh50-exp-reveal").forEach((el) => el.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", onScroll);
    }
    root.classList.add("is-motion-ready");
    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(".mh50-exp-reveal"));
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    revealNodes.forEach((el) => revealObserver.observe(el));
    const safetyTimer = window.setTimeout(() => revealNodes.forEach((el) => el.classList.add("is-visible")), 2400);
    return () => { window.removeEventListener("scroll", onScroll); revealObserver.disconnect(); window.clearTimeout(safetyTimer); };
  }, []);

  return (
    <SiteShell title="Plan Corporativo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link><span>»</span>
        <span>Plan Corporativo</span>
      </nav>
      <div className="mh50-exp business-page" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="corporativo-inicio">
          <CorporativoDecor tone="on-dark" />
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN EMPRESARIAL · PLAN CORPORATIVO</span>
            <h1 className="is-long">Plan <span>Corporativo</span></h1>
            <p className="mh50-exp-hero-line">Tu empresa diseña<br />su propio plan.</p>
            <p className="mh50-exp-hero-body">
              El plan corporativo se ajustará a las necesidades de presupuesto y coberturas de su empresa
              (a partir de 50 empleados). Un plan diseñado de acuerdo a sus necesidades, totalmente
              personalizable.
            </p>
            <p className="mh50-exp-hero-body">
              En nuestra cartera de clientes corporativos tenemos importantes empresas del país en
              sectores como el financiero, petrolero, telecomunicaciones, automotriz, industrial,
              servicios, salud, entre otros.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#corporativo-cierre">Solicita información</a>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <a className="ghost-button" href="tel:1800486262"><PhoneCall size={18} /> Solicitar llamada</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Plan Corporativo">
            <figure className="mh50-exp-photo card-a">
              <Image src={CORP_IMAGE} alt="Las empresas diseñan su plan" fill sizes="(max-width: 980px) 90vw, 50vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#corporativo-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="corporativo-esencia">
          <CorporativoDecor tone="on-dark" />
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">PLAN CORPORATIVO EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Un plan diseñado<br />junto a tu empresa.</h2>
          <div className="mh50-exp-stat-stage">
            {essenceStats.map((stat) => (
              <article className="mh50-exp-stat mh50-exp-reveal" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </article>
            ))}
          </div>
          <p className="mh50-exp-fineprint mh50-exp-reveal">Información resumida para fines demostrativos. Aplican las condiciones del contrato corporativo.</p>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos del Plan Corporativo">
          {chapters.map((c) => (
            <a key={c.id} href={`#corporativo-${c.id}`} data-chapter-link={`corporativo-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
        </nav>

        {chapters.map((c, i) => (
          <section key={c.id} id={`corporativo-${c.id}`} className={`mh50-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}>
            <CorporativoDecor tone={c.theme === "dark" || c.theme === "blue" ? "on-dark" : "on-light"} />
            <div className="mh50-exp-chapter-number" aria-hidden="true">{c.number}</div>
            <div className="mh50-exp-chapter-image mh50-exp-reveal">
              <Image src={c.image} alt={c.imageAlt} fill sizes="(max-width: 980px) 100vw, 45vw" unoptimized />
            </div>
            <div className="mh50-exp-chapter-copy mh50-exp-reveal">
              <span className={`mh50-exp-eyebrow${c.theme === "dark" || c.theme === "blue" ? " light" : ""}`}>{c.eyebrow}</span>
              <h2>{c.title}</h2>
              <p className="mh50-exp-lead">{c.lead}</p>
              <ul>
                {c.essentials.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </section>
        ))}

        <section className="content-section plan-hub-intro mh50-exp-reveal" id="corporativo-beneficios" style={{ maxWidth: 820 }}>
          <h2>Beneficios adicionales de los Planes Corporativos</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 24, textAlign: "left" }}>
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

        <section className="business-contact-box mh50-exp-reveal">
          <div>
            <h3>Diseñemos juntos el plan de tu empresa.</h3>
            <p>Un asesor corporativo te contactará con una propuesta personalizada.</p>
          </div>
          <div className="business-contact-box-actions">
            <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Contáctate con nosotros</a>
            <a className="ghost-button" href="#corporativo-montos">Explorar detalles</a>
          </div>
        </section>

        <section className="mh50-exp-finale" id="corporativo-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <CorporativoDecor tone="on-dark" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">PLAN CORPORATIVO · PLAN EMPRESARIAL</span>
            <h2>Diseñemos juntos el plan de tu empresa.</h2>
            <p>Un asesor corporativo te contactará con una propuesta personalizada.</p>
            <div className="mh50-exp-finale-actions">
              <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Solicita información</a>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <a className="ghost-button" href="tel:1800486262"><PhoneCall size={18} /> Solicitar llamada</a>
              <Link className="ghost-button" href="/planes-medicos/empresas/">Ver todos los planes</Link>
            </div>
            <div className="mh50-exp-contact">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="mh50-exp-trust"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
          </div>
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>PLAN</span><strong>CORP</strong></div>
        </section>
      </div>
    </SiteShell>
  );
}
