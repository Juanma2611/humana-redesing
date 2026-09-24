"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Banknote, Cross, FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  Layers3, MessageCircle, Phone, PhoneCall, Pill, ShieldCheck, ShieldPlus, Sparkles, Stethoscope, Users, Wallet,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Datos reales del plan Proteger, extraídos de la Guía de producto        */
/* Proteger (cliente). Cobertura complementaria: entra en vigor una vez    */
/* aplicado el deducible elegido.                                          */
/* ---------------------------------------------------------------------- */

const essenceStats = [
  { value: "$500.000", label: "de cobertura por\nincapacidad" },
  { value: "100%", label: "de cobertura tras\naplicar el deducible" },
  { value: "$250.000", label: "de cobertura para\ntrasplante de órganos" },
];

/* Top eventos/enfermedades que pueden superar $100.000 en gastos médicos
   en Ecuador, usados para la sección de impacto/storytelling. */
const impactEvents = [
  { title: "Cáncer de mama", detail: "Cirugía + quimioterapia + radioterapia + terapias dirigidas (según estadio)", value: "≈ $142.850", period: "por tratamiento anual" },
  { title: "Cáncer de próstata", detail: "Cirugía o radioterapia + hormonoterapia + fármacos de alto costo (según estadio)", value: "≈ $80.757", period: "por tratamiento anual" },
  { title: "Trasplante de hígado", detail: "Cirugía altamente especializada + hospitalización/UCI + manejo pre y post-trasplante", value: "$55.000 – $100.000", period: "puede ser mayor según el caso" },
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
    id: "respaldo",
    number: "01",
    navLabel: "Gran respaldo",
    theme: "dark",
    image: "/mh50-hospitalizacion.jpg",
    imageAlt: "Familia acompañando a un paciente en una habitación de hospital",
    eyebrow: "GRAN RESPALDO ECONÓMICO",
    title: "Una enfermedad grave no debería cambiar tu futuro.",
    lead: "Proteger entra en acción justo cuando los gastos médicos superan lo que tu plan base puede cubrir.",
    essentials: ["Hospitalización 100% tras deducible", "Cuarto y alimento hasta el monto de cobertura", "Deducibles a elegir: $5.000 · $10.000 · $20.000"],
    dialogTitle: "Gran respaldo económico",
    dialogLead: "Una vez aplicado el deducible elegido, la cobertura hospitalaria y ambulatoria opera al 100% hasta el monto contratado.",
    chips: [
      { icon: Banknote, text: "Cobertura por incapacidad: $500.000" },
      { icon: HomeIcon, text: "Hospitalización 100%" },
      { icon: Stethoscope, text: "Consultas 100% hasta $80" },
      { icon: FlaskConical, text: "Exámenes de diagnóstico 100%" },
      { icon: Pill, text: "Medicinas 100%" },
    ],
  },
  {
    id: "robotica",
    number: "02",
    navLabel: "Cirugía robótica",
    theme: "blue",
    image: "/images/planes/mh80/mh80-photo-cirugia-robotica.jpg",
    imageAlt: "Cirujanos operando con brazos robóticos de última generación",
    eyebrow: "TECNOLOGÍA MÉDICA AVANZADA",
    title: "Cuando la tecnología médica avanza, tu protección también.",
    lead: "Proteger cubre al 100% procedimientos realizados con cirugía robótica, la opción más precisa y menos invasiva disponible hoy.",
    essentials: ["Cirugía robótica 100%", "Hasta $50.000 en Hospital Metropolitano", "Hasta $25.000 en otros prestadores"],
    dialogTitle: "Cirugía robótica",
    dialogLead: "Cobertura al 100% para procedimientos de cirugía robótica, con montos diferenciados según el prestador donde se realice la intervención.",
    chips: [
      { icon: ShieldPlus, text: "Cobertura 100%" },
      { icon: HomeIcon, text: "Hospital Metropolitano: hasta $50.000" },
      { icon: Cross, text: "Otros prestadores: hasta $25.000" },
    ],
  },
  {
    id: "trasplantes",
    number: "03",
    navLabel: "Trasplantes",
    theme: "light",
    image: "/images/planes/mh80/mh80-photo-quirofano.jpg",
    imageAlt: "Quirófano equipado con tecnología médica de alta complejidad",
    eyebrow: "TRASPLANTE DE ÓRGANOS Y VIDA",
    title: "Respaldo para los momentos que más pesan.",
    lead: "Cobertura para los procedimientos de mayor complejidad, además de protección para tu familia frente a lo inesperado.",
    essentials: ["Trasplante de órganos hasta $250.000", "Cirugía reconstructiva oncológica 100%", "Seguro de vida de $5.000"],
    dialogTitle: "Trasplantes y protección de vida",
    dialogLead: "Cobertura para trasplante de órganos y cirugía reconstructiva por enfermedades oncológicas, además de un seguro de vida para titulares y dependientes mayores de 18 años.",
    chips: [
      { icon: Cross, text: "Trasplante de órganos: hasta $250.000" },
      { icon: Sparkles, text: "Cirugía reconstructiva oncológica 100%, incluye implantes" },
      { icon: HeartHandshake, text: "Seguro de vida $5.000 (titulares y dependientes +18)" },
      { icon: ShieldPlus, text: "Muerte natural, accidental u homicidio" },
    ],
  },
  {
    id: "prevencion",
    number: "04",
    navLabel: "Prevención",
    theme: "warm",
    image: "/mh50-metrofraternidad.jpg",
    imageAlt: "Atención médica preventiva en un entorno cercano",
    eyebrow: "PREVENCIÓN Y ASISTENCIAS",
    title: "Cuidarte también es parte de protegerte.",
    lead: "Un chequeo médico anual sin costo y las asistencias HU PLUS para tu vida diaria, tu hogar y tus mascotas.",
    essentials: ["Chequeo médico anual sin costo", "10 procedimientos en Metrored", "Asistencias HU PLUS: personales, hogar y mascotas"],
    dialogTitle: "Prevención y asistencias",
    dialogLead: "Un chequeo médico anual completo, disponible en la red Metrored de Quito o Guayaquil, y asistencias HU PLUS activables en cualquier momento.",
    chips: [
      { icon: HeartPulse, text: "Chequeo médico: 10 procedimientos, 1 vez al año" },
      { icon: Stethoscope, text: "Vigencia de 90 días tras la carta de autorización" },
      { icon: HandHeart, text: "Asistencias HU PLUS: personales, hogar y mascotas" },
      { icon: Sparkles, text: "Sin carencia" },
    ],
  },
];

/* Beneficios sin costo adicional incluidos en Proteger */
const featuredBenefits = [
  { icon: HeartHandshake, title: "Seguro de vida $5.000" },
  { icon: HeartPulse, title: "Chequeo médico anual" },
  { icon: HandHeart, title: "Asistencias HU PLUS" },
  { icon: Layers3, title: "Coordinación de beneficios" },
  { icon: Sparkles, title: "Cirugía reconstructiva oncológica" },
  { icon: ShieldPlus, title: "Red en convenio MetroHumana" },
];

/* Carencias generales del plan Proteger */
const waitingPeriods = [
  { days: "0", title: "Chequeo médico y asistencias" },
  { days: "30", title: "Atención ambulatoria" },
  { days: "60", title: "Maternidad" },
  { days: "90", title: "Atención hospitalaria y discapacidades" },
];

const deductibleOptions = [
  { icon: Wallet, value: "$5.000", label: "Deducible más accesible" },
  { icon: Wallet, value: "$10.000", label: "Deducible intermedio" },
  { icon: Wallet, value: "$20.000", label: "Deducible más alto, menor prima" },
];

const preexistingConditions = [
  { icon: FlaskConical, value: "Hasta $540", label: "Preexistencias · mes 7 a 12 de afiliación" },
  { icon: FlaskConical, value: "Hasta $1.350", label: "Preexistencias · mes 13 a 24 de afiliación" },
  { icon: FlaskConical, value: "20 salarios básicos", label: "Preexistencias · desde el mes 25" },
  { icon: HandHeart, value: "20 salarios básicos", label: "Discapacidad, incluye preexistencias relacionadas" },
];

const combinationBenefits = [
  { icon: Layers3, value: "Plan base + Proteger", label: "Combina tu plan individual o corporativo con Proteger" },
  { icon: Banknote, value: "Abona al deducible", label: "Los gastos del plan base sirven para cubrir el deducible de Proteger" },
  { icon: ShieldCheck, value: "Coordinación de beneficios", label: "Puedes presentar reembolsos en los dos planes" },
  { icon: Sparkles, value: "Mejores beneficios", label: "La combinación es más completa cuando el plan base también es Humana" },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Phone, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

export default function ProtegerPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [quoted, setQuoted] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);

  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null;

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
    <SiteShell title="Proteger · Cobertura complementaria Humana">
      <div className="mh50-exp" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="proteger-inicio">
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN PROTEGER · HUMANA</span>
            <h1 className="is-long">Prote<span>ger</span></h1>
            <p className="mh50-exp-hero-line">Tu respaldo financiero<br />frente a lo inesperado.</p>
            <p className="mh50-exp-hero-body">
              Una enfermedad grave o un accidente no deberían cambiar tu futuro. Proteger complementa tu plan
              médico actual con respaldo económico adicional cuando más lo necesitas.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#proteger-cierre">Cotiza ahora</a>
              <a className="ghost-button" href="#proteger-cobertura">Conoce sus beneficios</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Momentos de protección Proteger">
            <figure className="mh50-exp-photo card-a">
              <Image src="/humana-historia-hero.png" alt="Familia protegida con respaldo de Humana" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-b">
              <Image src="/images/planes/mh80/mh80-photo-cirugia-robotica.jpg" alt="Cirugía robótica de alta precisión" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-c">
              <Image src="/mh50-hospitalizacion.jpg" alt="Acompañamiento familiar durante una hospitalización" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#proteger-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="proteger-esencia">
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">PROTEGER EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Cuando la salud exige más,<br />Humana está contigo.</h2>
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

        <section className="mh50-exp-moments" id="proteger-impacto">
          <span className="mh50-exp-giant-word" aria-hidden="true">RESPALDO</span>
          <div className="mh50-exp-moments-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">GASTOS QUE PUEDEN SUPERAR $100.000</span>
            <h2>Una enfermedad grave<br />puede costar más de lo previsto.</h2>
            <p>En Ecuador, ciertos diagnósticos y tratamientos pueden generar gastos médicos extremadamente altos, especialmente cuando se requiere UCI, cirugías complejas o tratamientos especializados.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="mh50-exp-accordion-grid on-light">
              {impactEvents.map((e) => (
                <article key={e.title}>
                  <Cross />
                  <strong>{e.value}</strong>
                  <span>{e.title} — {e.detail} ({e.period})</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos de cobertura de Proteger">
          {chapters.map((c) => (
            <a key={c.id} href={`#proteger-${c.id}`} data-chapter-link={`proteger-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#proteger-incluido" data-chapter-link="proteger-incluido"><span>05</span>Beneficios</a>
          <a href="#proteger-carencias" data-chapter-link="proteger-carencias"><span>06</span>Carencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`proteger-${c.id}`}
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

        <section className="mh50-exp-included" id="proteger-incluido">
          <div className="mh50-exp-benefits-panel">
            <div className="mh50-exp-benefits-head mh50-exp-reveal">
              <span className="mh50-exp-eyebrow light">BENEFICIOS ESPECIALES</span>
              <h2>Más formas de acompañarte.</h2>
              <p>Servicios adicionales que forman parte de tu plan Proteger, sin costo adicional.</p>
            </div>
            <div className="mh50-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en el plan Proteger">
              {featuredBenefits.map(({ icon: Icon, title }, i) => (
                <article className="mh50-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh50-exp-benefit-symbol" aria-hidden="true"><Icon /></span>
                  <h3>{title}</h3>
                  <span className="mh50-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh50-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en el plan Proteger">
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

        <section className="mh50-exp-waiting" id="proteger-carencias">
          <div className="mh50-exp-waiting-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">CARENCIAS PROTEGER</span>
            <h2>Tu cobertura, clara desde el inicio.</h2>
            <p>Estos son los periodos generales antes de utilizar determinadas prestaciones del plan.</p>
          </div>
          <div className="mh50-exp-waiting-grid" role="list" aria-label="Periodos generales de carencia del plan Proteger">
            {waitingPeriods.map((w, i) => (
              <article className="mh50-exp-waiting-card mh50-exp-reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} role="listitem" key={w.title}>
                <div className="mh50-exp-waiting-num"><strong>{w.days}</strong><span>días</span></div>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
          <p className="mh50-exp-waiting-note mh50-exp-reveal">Las preexistencias aplican luego de 24 meses de afiliación continua. Aplican las condiciones particulares del contrato.</p>
        </section>

        <section className="mh50-exp-vault">
          <div className="mh50-exp-vault-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">CLARIDAD ANTES DE ELEGIR</span>
            <h2>Los detalles importan.<br />Por eso están aquí.</h2>
            <p>Consulta deducibles, preexistencias y cómo combinar Proteger con tu plan médico actual.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal">
            <details>
              <summary>Deducibles a elegir <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {deductibleOptions.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Preexistencias y discapacidad <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {preexistingConditions.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>La combinación perfecta <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {combinationBenefits.map(({ icon: Icon, value, label }) => (
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
            <span className="mh50-exp-eyebrow light">RESPALDO A NIVEL NACIONAL</span>
            <h2>Somos parte del grupo más importante en prestaciones médicas de Ecuador.</h2>
            <p>Más de 250 grupos corporativos y empresas reconocidas confían en Humana, respaldados por Conclina C.A.</p>
            <strong>170.000+</strong>
            <span>afiliados respaldados a nivel nacional</span>
          </div>
        </section>

        <section className="mh50-exp-finale" id="proteger-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">PROTEGER · COBERTURA COMPLEMENTARIA</span>
            <h2>La tranquilidad de saber que están protegidos.</h2>
            <p>Combina Proteger con tu plan médico actual y accede a un respaldo económico adicional cuando más lo necesites.</p>
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
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>PLAN</span><strong className="is-long">PROTEGER</strong></div>
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
