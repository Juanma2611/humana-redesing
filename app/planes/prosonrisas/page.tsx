"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Baby, BadgeCheck, Building2, CircleDollarSign, Gem, HeartPulse, MessageCircle,
  Phone, PhoneCall, Pill, ScanEye, Scissors, ShieldCheck, ShieldPlus, Smile, Sparkles, Stethoscope, Syringe, Users,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Datos reales del plan Prosonrisas, extraídos de la presentación         */
/* oficial 2024 del producto (Prosonrisas Plus / Prosonrisas Full).        */
/* ---------------------------------------------------------------------- */

const essenceStats = [
  { value: "2", label: "alternativas para elegir:\nPlus y Full" },
  { value: "0", label: "preexistencias ni topes\nde consulta" },
  { value: "2.000+", label: "médicos en la red\ndental nacional" },
];

const planOptions = [
  {
    id: "plus",
    name: "Prosonrisas Plus",
    price: "$6,60",
    priceNote: "tarifa comercial por persona, incluye seguro campesino",
    summary: "La base esencial para cuidar tu sonrisa, con cobertura ambulatoria completa.",
    features: ["Consultas, rayos-X y profilaxis sin copago", "Restauraciones con 10% de copago", "Cirugía y endodoncia con 20% de copago", "Odontopediatría hasta los 14 años, 11 meses, 29 días"],
  },
  {
    id: "full",
    name: "Prosonrisas Full",
    price: "$27,97",
    priceNote: "tarifa comercial por persona, incluye seguro campesino",
    summary: "Cobertura ampliada que suma periodoncia y un blanqueamiento dental anual.",
    features: ["Todo lo de Prosonrisas Plus", "Periodoncia incluida (20% de copago)", "1 blanqueamiento dental anual, hasta 3 sesiones", "Urgencia dental preautorizada sin copago"],
  },
];

type Chapter = {
  id: string;
  number: string;
  navLabel: string;
  theme: "dark" | "light" | "blue" | "warm";
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  lead: string;
  essentials: string[];
  dialogTitle: string;
  dialogLead: string;
  chips: { icon: typeof ShieldPlus; text: string }[];
};

const chapters: Chapter[] = [
  {
    id: "especialistas",
    number: "01",
    navLabel: "Especialistas",
    theme: "dark",
    image: "/ph15-consultas.jpg",
    imageAlt: "Consulta odontológica con un especialista de la red Humana",
    eyebrow: "ESPECIALISTAS ODONTOLÓGICOS",
    title: "Cuida tu sonrisa con especialistas y beneficios pensados para ti.",
    lead: "Mejores especialistas a nivel nacional, con evaluaciones, diagnósticos y consultas sin costo.",
    essentials: ["Examen clínico y diagnóstico sin copago", "Consulta con especialista sin copago", "Limpiezas dentales ilimitadas y rayos-X sin costo"],
    dialogTitle: "Especialistas odontológicos",
    dialogLead: "Acceso a la red de especialistas más amplia del país, con evaluaciones y diagnósticos gratuitos desde la primera consulta.",
    chips: [
      { icon: Stethoscope, text: "Examen clínico y diagnóstico: 0% copago" },
      { icon: ScanEye, text: "Rayos-X periapicales y panorámica: 0% copago" },
      { icon: Sparkles, text: "Profilaxis (limpieza bucal): 0% copago" },
      { icon: BadgeCheck, text: "Consulta con especialista: 0% copago" },
    ],
  },
  {
    id: "restauraciones",
    number: "02",
    navLabel: "Restauraciones y cirugía",
    theme: "blue",
    image: "/ph15-medicinas.jpg",
    imageAlt: "Procedimiento de restauración dental",
    eyebrow: "RESTAURACIONES Y CIRUGÍA",
    title: "Una amplia gama de procedimientos, sin sorpresas.",
    lead: "Restauraciones, extracciones y cirugías menores con copagos claros desde el primer momento.",
    essentials: ["Restauración de resina: 10% de copago", "Extracciones y cirugía: 20% de copago", "Sin límite en sublímites/topes"],
    dialogTitle: "Restauraciones y cirugía",
    dialogLead: "Restauración simple, compuesta y compleja de resina, además de procedimientos quirúrgicos como extracciones, frenectomías y remodelado óseo.",
    chips: [
      { icon: Sparkles, text: "Restauración de resina: 10% copago" },
      { icon: Scissors, text: "Extracciones simples y de remanentes: 20% copago" },
      { icon: ShieldPlus, text: "Ventana quirúrgica para ortodoncia: 20% copago" },
      { icon: BadgeCheck, text: "Carencia de 30 a 60 días según procedimiento" },
    ],
  },
  {
    id: "endodoncia",
    number: "03",
    navLabel: "Endodoncia y periodoncia",
    theme: "light",
    image: "/ph15-hospitalizacion.jpg",
    imageAlt: "Tratamiento de endodoncia especializado",
    eyebrow: "ENDODONCIA, PERIODONCIA Y NIÑOS",
    title: "Tratamientos de mayor complejidad, también cubiertos.",
    lead: "Endodoncia en Plus y Full, periodoncia incluida en Full, y una cobertura pediátrica completa hasta los 14 años.",
    essentials: ["Endodoncia: 20% de copago", "Periodoncia incluida en Prosonrisas Full", "Odontopediatría hasta los 14 años, 11 meses, 29 días"],
    dialogTitle: "Endodoncia, periodoncia y odontopediatría",
    dialogLead: "Endodoncia en anteriores, molares y premolares, tratamiento periodontal completo en Prosonrisas Full, y cobertura pediátrica con extracciones, restauraciones, sellantes y fluorización.",
    chips: [
      { icon: Stethoscope, text: "Endodoncia en anteriores, molares y premolares: 20% copago" },
      { icon: HeartPulse, text: "Periodoncia: raspado, curetaje y mantenimiento (solo Full)" },
      { icon: Baby, text: "Odontopediatría: extracciones, sellantes y fluorización" },
      { icon: ShieldPlus, text: "Cobertura hasta los 14 años, 11 meses y 29 días" },
    ],
  },
  {
    id: "diferenciales",
    number: "04",
    navLabel: "Beneficios diferenciales",
    theme: "warm",
    image: "/humana-prosonrisas-hero.png",
    imageAlt: "Familia sonriendo, protegida por Prosonrisas",
    eyebrow: "BENEFICIOS DIFERENCIALES",
    title: "Un plan sin preexistencias ni límites de consulta.",
    lead: "Extiende tu plan a toda tu familia y seres queridos, sin restricciones de parentesco.",
    essentials: ["Sin preexistencias ni topes de consulta", "Extensión a familia y seres queridos", "Los mejores precios del mercado"],
    dialogTitle: "Beneficios diferenciales",
    dialogLead: "Un producto pensado para que el cliente elija el plan de su preferencia, con la red de profesionales dentales más amplia del país.",
    chips: [
      { icon: ShieldCheck, text: "Sin preexistencias ni topes de consulta" },
      { icon: Users, text: "Extensión sin restricciones de parentesco" },
      { icon: Gem, text: "Los mejores precios del mercado" },
      { icon: Building2, text: "Red más amplia de profesionales dentales del país" },
    ],
  },
];

/* Beneficios sin costo adicional incluidos en Prosonrisas */
const featuredBenefits = [
  { icon: BadgeCheck, title: "Mejores especialistas a nivel nacional" },
  { icon: Stethoscope, title: "Evaluaciones y diagnósticos gratis" },
  { icon: Sparkles, title: "Limpiezas dentales ilimitadas" },
  { icon: ScanEye, title: "Rayos-X sin costo" },
  { icon: CircleDollarSign, title: "Los mejores precios del mercado" },
  { icon: ShieldCheck, title: "Sin preexistencias" },
];

/* Carencias generales de Prosonrisas */
const waitingPeriods = [
  { days: "0", title: "Evaluaciones y consultas" },
  { days: "30", title: "Restauraciones y odontopediatría" },
  { days: "60", title: "Cirugía, endodoncia y periodoncia" },
];

const glossary = [
  { icon: Sparkles, value: "Sellantes", label: "Película que se coloca en los surcos de los dientes para prevenir caries" },
  { icon: Syringe, value: "Fluorización", label: "Gel con flúor para mineralizar los dientes y disminuir el riesgo de caries" },
  { icon: Scissors, value: "Restauración", label: "Reconstrucción de una porción de diente afectada por caries o fractura" },
  { icon: Smile, value: "Blanqueamiento dental", label: "Aclaramiento de los dientes, máximo uno al año (Prosonrisas Full)" },
];

const redDental = [
  { icon: Users, value: "2.000+", label: "Médicos en convenio a nivel nacional" },
  { icon: Building2, value: "96", label: "Clínicas y hospitales de la red" },
  { icon: Pill, value: "1.200+", label: "Puntos de venta de farmacia" },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Phone, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

export default function ProsonrisasPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [quoted, setQuoted] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [activePlan, setActivePlan] = useState(planOptions[1].id);

  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null;
  const selectedPlan = planOptions.find((p) => p.id === activePlan) ?? planOptions[0];

  const openDialog = (id: string) => {
    setActiveChapterId(id);
    dialogRef.current?.showModal();
  };
  const closeDialog = () => dialogRef.current?.close();

  const handleQuoteClick = () => setQuoted(true);

  const goToBenefit = (i: number) => setBenefitIndex(((i % featuredBenefits.length) + featuredBenefits.length) % featuredBenefits.length);
  const prevBenefit = () => goToBenefit(benefitIndex - 1);
  const nextBenefit = () => goToBenefit(benefitIndex + 1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBenefitIndex((i) => (i + 1) % featuredBenefits.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [benefitIndex]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-chapter-link]"));
    const chapterSections = navLinks
      .map((link) => root.querySelector<HTMLElement>(`#${link.dataset.chapterLink}`))
      .filter((el): el is HTMLElement => !!el);
    let lastCurrent = "";

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
      }
      let current = "";
      chapterSections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.52) current = section.id;
      });
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
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    revealNodes.forEach((el) => revealObserver.observe(el));

    const safetyTimer = window.setTimeout(() => {
      revealNodes.forEach((el) => el.classList.add("is-visible"));
    }, 2400);

    return () => {
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      window.clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <SiteShell title="Prosonrisas · Plan dental Humana">
      <div className="mh50-exp" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="prosonrisas-inicio">
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN DENTAL · PROSONRISAS</span>
            <h1 className="is-long">Pro<span>sonrisas</span></h1>
            <p className="mh50-exp-hero-line">Una sonrisa saludable<br />transforma tu vida.</p>
            <p className="mh50-exp-hero-body">
              Cuida tu sonrisa con especialistas y beneficios pensados para ti y tu familia, con la red
              dental más amplia del país y sin preexistencias.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#prosonrisas-planes">Cotiza ahora</a>
              <a className="ghost-button" href="#prosonrisas-especialistas">Conoce sus beneficios</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Momentos de sonrisas protegidas">
            <figure className="mh50-exp-photo card-a">
              <Image src="/humana-prosonrisas-hero.png" alt="Familia sonriendo, protegida por Prosonrisas" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-b">
              <Image src="/ph15-consultas.jpg" alt="Consulta odontológica con un especialista" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-c">
              <Image src="/ph15-medicinas.jpg" alt="Cuidado dental preventivo" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#prosonrisas-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="prosonrisas-esencia">
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">PROSONRISAS EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Volvió Prosonrisas,<br />tu plan dental.</h2>
          <div className="mh50-exp-stat-stage">
            {essenceStats.map((stat) => (
              <article className="mh50-exp-stat mh50-exp-reveal" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </article>
            ))}
          </div>
          <p className="mh50-exp-fineprint mh50-exp-reveal">Información resumida para fines demostrativos. Aplican las condiciones del plan.</p>
        </section>

        <section className="mh50-exp-moments" id="prosonrisas-planes">
          <span className="mh50-exp-giant-word" aria-hidden="true">SONRÍE</span>
          <div className="mh50-exp-moments-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">ELIGE TU ALTERNATIVA</span>
            <h2>Prosonrisas Plus<br />o Prosonrisas Full.</h2>
            <p>Dos alternativas pensadas para distintas necesidades. Compara y elige la que mejor se ajuste a ti.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="mh50-exp-plan-toggle">
              {planOptions.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  className={activePlan === p.id ? "is-active" : ""}
                  onClick={() => setActivePlan(p.id)}
                >
                  <span>{p.price}</span>{p.name}
                </button>
              ))}
            </div>
            <div className="mh50-exp-accordion-grid on-light" style={{ gridTemplateColumns: "1fr" }}>
              <article>
                <Smile />
                <strong>{selectedPlan.name} · {selectedPlan.price}/persona</strong>
                <span>{selectedPlan.summary} ({selectedPlan.priceNote})</span>
              </article>
              {selectedPlan.features.map((f) => (
                <article key={f}><ShieldCheck /><strong>Incluido</strong><span>{f}</span></article>
              ))}
            </div>
          </div>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos de cobertura de Prosonrisas">
          {chapters.map((c) => (
            <a key={c.id} href={`#prosonrisas-${c.id}`} data-chapter-link={`prosonrisas-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#prosonrisas-incluido" data-chapter-link="prosonrisas-incluido"><span>05</span>Beneficios</a>
          <a href="#prosonrisas-carencias" data-chapter-link="prosonrisas-carencias"><span>06</span>Carencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`prosonrisas-${c.id}`}
            className={`mh50-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}
          >
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
              <button type="button" className="mh50-exp-text-button" onClick={() => openDialog(c.id)}>
                Explorar detalles <span>↗</span>
              </button>
            </div>
          </section>
        ))}

        <section className="mh50-exp-included" id="prosonrisas-incluido">
          <div className="mh50-exp-benefits-panel">
            <div className="mh50-exp-benefits-head mh50-exp-reveal">
              <span className="mh50-exp-eyebrow light">PRINCIPALES BENEFICIOS</span>
              <h2>Más formas de cuidar tu sonrisa.</h2>
              <p>Ventajas que forman parte de tu plan Prosonrisas, sin costo adicional.</p>
            </div>
            <div className="mh50-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en el plan Prosonrisas">
              {featuredBenefits.map(({ icon: Icon, title }, i) => (
                <article className="mh50-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh50-exp-benefit-symbol" aria-hidden="true"><Icon /></span>
                  <h3>{title}</h3>
                  <span className="mh50-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh50-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en el plan Prosonrisas">
              <div className="mh50-exp-benefits-carousel-track" style={{ transform: `translateX(-${benefitIndex * 100}%)` }}>
                {featuredBenefits.map(({ icon: Icon, title }) => (
                  <article className="mh50-exp-benefits-carousel-card" role="listitem" key={title}>
                    <span className="mh50-exp-benefit-symbol" aria-hidden="true"><Icon /></span>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
              <div className="mh50-exp-benefits-carousel-controls">
                <button type="button" onClick={prevBenefit} aria-label="Beneficio anterior">‹</button>
                <div className="mh50-exp-benefits-carousel-dots">
                  {featuredBenefits.map(({ title }, i) => (
                    <button type="button" key={title} className={i === benefitIndex ? "active" : ""} aria-label={`Ir al beneficio ${title}`} onClick={() => goToBenefit(i)} />
                  ))}
                </div>
                <button type="button" onClick={nextBenefit} aria-label="Siguiente beneficio">›</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mh50-exp-waiting" id="prosonrisas-carencias">
          <div className="mh50-exp-waiting-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">CARENCIAS PROSONRISAS</span>
            <h2>Tu cobertura, clara desde el inicio.</h2>
            <p>Estos son los periodos generales antes de utilizar determinadas prestaciones del plan.</p>
          </div>
          <div className="mh50-exp-waiting-grid" role="list" aria-label="Periodos generales de carencia del plan Prosonrisas">
            {waitingPeriods.map((w, i) => (
              <article className="mh50-exp-waiting-card mh50-exp-reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} role="listitem" key={w.title}>
                <div className="mh50-exp-waiting-num"><strong>{w.days}</strong><span>días</span></div>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
          <p className="mh50-exp-waiting-note mh50-exp-reveal">La urgencia y emergencia dental preautorizada tiene vigencia de 24 horas. Aplican las condiciones particulares del contrato.</p>
        </section>

        <section className="mh50-exp-vault">
          <div className="mh50-exp-vault-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">CLARIDAD ANTES DE ELEGIR</span>
            <h2>Los detalles importan.<br />Por eso están aquí.</h2>
            <p>Consulta el glosario de términos dentales y la red que respalda tu plan Prosonrisas.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal">
            <details>
              <summary>Glosario de términos importantes <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {glossary.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Más profesionales para cuidar tu sonrisa <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {redDental.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="mh50-exp-impact">
          <Image src="/mh50-metrofraternidad.jpg" alt="Niños en un entorno comunitario de atención médica" fill sizes="100vw" unoptimized />
          <div className="mh50-exp-impact-overlay" />
          <div className="mh50-exp-impact-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">NUESTRA ESENCIA</span>
            <h2>30 años de experiencia cuidando la salud de los ecuatorianos.</h2>
            <p>Prosonrisas forma parte del grupo más importante en prestaciones médicas de Ecuador: Conclina C.A.</p>
            <strong>2.000+</strong>
            <span>médicos en la red dental nacional</span>
          </div>
        </section>

        <section className="mh50-exp-finale" id="prosonrisas-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">PROSONRISAS · PLAN DENTAL</span>
            <h2>Una sonrisa saludable transforma tu vida.</h2>
            <p>Elige entre Prosonrisas Plus y Full, y empieza a cuidar tu sonrisa y la de tu familia hoy mismo.</p>
            <div className="mh50-exp-finale-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}>Cotiza ahora</button>
              <Link className="ghost-button" href="/planes">Ver todos los planes</Link>
            </div>
            {quoted && (
              <div className="mh50-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
            <div className="mh50-exp-contact">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="mh50-exp-trust"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
          </div>
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>PLAN</span><strong className="is-long">SONRISAS</strong></div>
        </section>

        <dialog className="mh50-exp-dialog" ref={dialogRef} onClose={() => setActiveChapterId(null)}>
          <button type="button" className="mh50-exp-dialog-close" onClick={closeDialog} aria-label="Cerrar">×</button>
          <span className="mh50-exp-eyebrow">DETALLE DEL PLAN</span>
          <h2>{activeChapter?.dialogTitle}</h2>
          <div className="mh50-exp-dialog-body">
            <p>{activeChapter?.dialogLead}</p>
            <ul>
              {activeChapter?.chips.map(({ icon: Icon, text }) => (
                <li key={text}><Icon /> <span>{text}</span></li>
              ))}
            </ul>
          </div>
        </dialog>
      </div>
    </SiteShell>
  );
}
