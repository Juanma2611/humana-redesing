"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Ambulance, Baby, Bone, Bike, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  MessageCircle, Milk, PackageCheck, Phone, PhoneCall, Pill, PlaneTakeoff,
  Ribbon, Scissors, ShieldCheck, ShieldPlus, Sparkles,
  Stethoscope, Syringe, Users, Video, Wallet, X,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Datos reales del plan MH50 (Metrohumana 50.000)                        */
/* Conservados de rondas anteriores — ver historial de git para el origen */
/* de cada cifra en el anexo oficial MH50.                                */
/* ---------------------------------------------------------------------- */

const essenceStats = [
  { value: "$50.000", label: "de cobertura máxima\npor beneficiario" },
  { value: "90%", label: "de cobertura directa\nen Red Humana" },
  { value: "$80", label: "de deducible\nanual" },
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
    id: "hospitalizacion",
    number: "01",
    navLabel: "Hospitalización",
    theme: "dark",
    image: "/mh50-hospitalizacion.jpg",
    imageAlt: "Familia acompañando a un paciente en una habitación de hospital de Red Humana",
    eyebrow: "HOSPITALIZACIÓN",
    title: "Cuando más nos necesitas, estamos contigo.",
    lead: "Una protección preparada para los momentos que no estaban en los planes.",
    essentials: ["90% en Red Humana", "Sin límite de días hospitalarios", "80% por libre elección"],
    dialogTitle: "Hospitalización",
    dialogLead: "Habitación, cirugía, terapia intensiva y medicamentos, sin contar los días. Todo lo que tu familia necesita cuando más lo necesita.",
    chips: [
      { icon: ShieldPlus, text: "90% Red Humana · 80% libre elección" },
      { icon: HomeIcon, text: "$160/día habitación" },
      { icon: HandHeart, text: "$50/día acompañante" },
      { icon: Activity, text: "$25.000/año trasplantes y diálisis" },
      { icon: HeartPulse, text: "Incluye paliativos y rehabilitación" },
    ],
  },
  {
    id: "ambulatoria",
    number: "02",
    navLabel: "Ambulatoria",
    theme: "light",
    image: "/mh50-ambulatoria.jpg",
    imageAlt: "Consulta médica ambulatoria en la Red Humana",
    eyebrow: "ATENCIÓN AMBULATORIA",
    title: "Cuidarte también está en lo cotidiano.",
    lead: "Consultas, exámenes y atención cercana para resolver hoy lo que no tiene que esperar.",
    essentials: ["Consultas desde $4", "Médico a domicilio desde $10", "Exámenes con cobertura en Red CAM"],
    dialogTitle: "Atención ambulatoria",
    dialogLead: "Consultas médicas, exámenes y médico a domicilio, con precios claros desde el primer momento.",
    chips: [
      { icon: Stethoscope, text: "Metrored $4 · Otros $8" },
      { icon: Phone, text: "Médico a domicilio $10" },
      { icon: FlaskConical, text: "90% laboratorio, RX y eco en RED CAM" },
      { icon: Sparkles, text: "15 sesiones/año medicina alternativa" },
    ],
  },
  {
    id: "medicinas",
    number: "03",
    navLabel: "Medicinas",
    theme: "blue",
    image: "/mh50-medicinas.jpg",
    imageAlt: "Entrega de medicamentos en farmacia de la red de Humana",
    eyebrow: "MEDICINAS",
    title: "Tu tratamiento también está protegido.",
    lead: "Acceso a una amplia red de farmacias y respaldo para continuar tu tratamiento.",
    essentials: ["Medicinas entre 70% y 90%", "Amplia red de farmacias", "Reembolso por libre elección"],
    dialogTitle: "Medicinas",
    dialogLead: "Cobertura entre 70% y 90% según el medicamento, la red utilizada y la modalidad de atención.",
    chips: [
      { icon: Pill, text: "Pharmacys, Medicity, Fybeca y Sana Sana" },
      { icon: ShieldPlus, text: "Vademécum A: 90%" },
      { icon: ShieldPlus, text: "Vademécum B: 70%" },
      { icon: Wallet, text: "Libre elección: 70% por reembolso" },
    ],
  },
  {
    id: "maternidad",
    number: "04",
    navLabel: "Maternidad",
    theme: "warm",
    image: "/mh50-maternidad.jpg",
    imageAlt: "Madre gestante en control prenatal cubierto por MH50",
    eyebrow: "MATERNIDAD",
    title: "Protección desde antes del primer abrazo.",
    lead: "Acompañamos la espera, el nacimiento y los primeros días de una nueva historia.",
    essentials: ["$300 atención prenatal", "$2.500 parto o cesárea", "Recién nacido protegido hasta $50.000"],
    dialogTitle: "Maternidad",
    dialogLead: "Atención prenatal, parto o cesárea, complicaciones y protección del recién nacido conforme a las condiciones del plan.",
    chips: [
      { icon: Stethoscope, text: "$300 atención prenatal" },
      { icon: Baby, text: "$2.500 parto o cesárea" },
      { icon: HeartPulse, text: "$3.750 complicaciones del parto" },
      { icon: ShieldPlus, text: "$50.000 recién nacido incluido" },
    ],
  },
];

/* Los 12 beneficios sin costo adicional de MH50 */
const featuredBenefits = [
  { icon: HeartHandshake, title: "Seguro de vida" },
  { icon: Ribbon, title: "Asistencia exequial" },
  { icon: Ambulance, title: "Ambulancia terrestre" },
  { icon: HomeIcon, title: "Médico a domicilio" },
  { icon: PlaneTakeoff, title: "Asistencia en viaje" },
  { icon: Video, title: "Teleconsulta" },
  { icon: PackageCheck, title: "Medicinas a domicilio" },
];

/* Carencias generales del plan */
const waitingPeriods = [
  { days: "30", title: "Atención ambulatoria" },
  { days: "60", title: "Maternidad" },
  { days: "90", title: "Atención hospitalaria" },
];

/* Casos especiales y coberturas adicionales sin costo — datos del contrato */
const specialCases = [
  { icon: FlaskConical, value: "Hasta $540", label: "Preexistencias · mes 7 a 12 de afiliación" },
  { icon: FlaskConical, value: "Hasta $1.350", label: "Preexistencias · mes 13 a 24 de afiliación" },
  { icon: FlaskConical, value: "20 salarios básicos", label: "Preexistencias · desde el mes 25" },
  { icon: HandHeart, value: "20 salarios básicos", label: "Discapacidad, incluye preexistencias relacionadas" },
  { icon: Users, value: "$25.000/año", label: "Adulto mayor con continuidad menor a 5 años" },
];

const preventionCoverages = [
  { icon: Baby, value: "Hasta $40", label: "Control de niño sano hasta los 5 años" },
  { icon: Syringe, value: "Hasta $50/dosis", label: "Vacunas control de niño hasta los 2 años" },
  { icon: ShieldPlus, value: "Hasta $1.500/año", label: "Control de natalidad definitivo" },
  { icon: ShieldPlus, value: "Hasta $10/año", label: "Control de natalidad no definitivo" },
  { icon: Milk, value: "Hasta $150/año", label: "Leche medicada" },
];

const rehabCoverages = [
  { icon: HeartHandshake, value: "$50/día · 30 días", label: "Cuidados paliativos y de largo plazo" },
  { icon: Activity, value: "15 sesiones · $15/sesión", label: "Rehabilitación: lenguaje, cardíaca, física, dolor, ondas de choque, respiratoria" },
  { icon: Wallet, value: "Hasta $500/año", label: "Ayudas técnicas: prótesis, órtesis y equipo médico duradero" },
  { icon: Bone, value: "Hasta $3.000/año", label: "Cirugías robóticas" },
  { icon: Bike, value: "Hasta $1.500/año", label: "Deportes extremos" },
  { icon: Ribbon, value: "Hasta $1.000/año", label: "Cirugía reconstructiva oncológica, incluye implantes" },
  { icon: FlaskConical, value: "Hasta $200/año", label: "Pruebas de sensibilidad y tratamientos inmunológicos" },
];

const emergencyCoverages = [
  { icon: Ambulance, value: "Monto máximo de cobertura", label: "Emergencia y urgencia por accidente o enfermedad" },
  { icon: Cross, value: "Hasta $500", label: "Servicio en mora" },
  { icon: Cross, value: "Hasta $500", label: "En período de carencia" },
  { icon: Wallet, value: "$80", label: "Deducible anual del plan" },
  { icon: Pill, value: "$1.000", label: "Copago anual de medicinas" },
  { icon: ShieldPlus, value: "90% / 70%", label: "Vademécum A y B de medicinas" },
  { icon: HomeIcon, value: "90% / 80%", label: "Cobertura en Red Humana / libre elección" },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Phone, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

/* Asistente virtual: el oso Humana, con enfoque de protección familiar
   para MH50. Mismo personaje que PH15/PH30/MH150; solo cambian los mensajes. */
const assistantMessages: Record<string, string> = {
  "mh50-inicio": "Hola, soy tu asistente Humana. Tu familia merece una protección que los acompañe siempre.",
  "mh50-esencia": "Descubre cómo Humana cuida a quienes más quieres.",
  "mh50-cobertura": "Conoce las coberturas pensadas para proteger a toda tu familia.",
  "mh50-hospitalizacion": "Respaldo hospitalario para tu familia en los momentos que más lo necesita.",
  "mh50-ambulatoria": "Consultas médicas accesibles para cada integrante de tu familia.",
  "mh50-medicinas": "Medicinas cubiertas en la red de farmacias más amplia del país.",
  "mh50-maternidad": "Acompañamos a tu familia también en la maternidad.",
  "mh50-incluido": "Conoce los beneficios pensados para proteger a tu familia.",
  "mh50-carencias": "Aquí puedes ver cuándo empieza a aplicar cada cobertura desde tu afiliación.",
  "mh50-cierre": "Protege a quienes más quieres. Cotiza MH50 ahora.",
};

const ASSISTANT_STORAGE_KEY = "mh50-bear-assistant-minimized";

export default function Mh50Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const assistantRef = useRef<HTMLDivElement>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [quoted, setQuoted] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [assistantSection, setAssistantSection] = useState("mh50-inicio");
  const [assistantMinimized, setAssistantMinimized] = useState(false);

  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null;

  const openDialog = (id: string) => {
    setActiveChapterId(id);
    dialogRef.current?.showModal();
  };
  const closeDialog = () => dialogRef.current?.close();

  const handleQuoteClick = () => setQuoted(true);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(ASSISTANT_STORAGE_KEY) === "1") setAssistantMinimized(true);
    } catch {
      /* localStorage no disponible (modo privado, etc.): se ignora y el asistente queda visible */
    }
  }, []);

  const toggleAssistant = () => {
    setAssistantMinimized((current) => {
      const next = !current;
      try {
        window.localStorage.setItem(ASSISTANT_STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* noop */
      }
      return next;
    });
  };

  const goToBenefit = (i: number) => setBenefitIndex(((i % featuredBenefits.length) + featuredBenefits.length) % featuredBenefits.length);
  const prevBenefit = () => goToBenefit(benefitIndex - 1);
  const nextBenefit = () => goToBenefit(benefitIndex + 1);

  /* Carrusel automático de beneficios (solo móvil): avanza cada 3s y se
     reinicia si el cliente navega manualmente con las flechas. */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setBenefitIndex((i) => (i + 1) % featuredBenefits.length);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [benefitIndex]);

  /* Barra de progreso, scrollspy de capítulos y aparición al hacer scroll,
     replicando el prototipo estático (script.js), autocontenido en esta
     página y sin depender del MotionOrchestrator global. */
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-chapter-link]"));
    const chapterSections = navLinks
      .map((link) => root.querySelector<HTMLElement>(`#${link.dataset.chapterLink}`))
      .filter((el): el is HTMLElement => !!el);
    let lastCurrent = "";
    let lastAssistantSection = "";
    const assistantSections = Array.from(root.querySelectorAll<HTMLElement>("[id^='mh50-']")).filter(
      (el) => el.id in assistantMessages,
    );

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
        // Se desplaza SOLO el contenedor horizontal del menú (scrollLeft),
        // nunca scrollIntoView: al ser un menú position:sticky, scrollIntoView
        // confunde su posición en el documento con la posición visual fija y
        // termina arrastrando verticalmente toda la página hacia arriba.
        if (activeLink && navContainer) {
          const targetLeft = activeLink.offsetLeft - navContainer.clientWidth / 2 + activeLink.clientWidth / 2;
          navContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: reducedMotion ? "auto" : "smooth" });
        }
        lastCurrent = current;
      }

      let currentAssistant = assistantSections[0]?.id ?? "";
      assistantSections.forEach((section) => {
        if (section.getBoundingClientRect().top < window.innerHeight * 0.6) currentAssistant = section.id;
      });
      if (currentAssistant && currentAssistant !== lastAssistantSection) {
        setAssistantSection(currentAssistant);
        lastAssistantSection = currentAssistant;
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

    // Red de seguridad: si el observer no dispara a tiempo, se revela igual.
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
    <SiteShell title="MH50 · Plan Full Metrohumana 50.000">
      <div className="mh50-exp" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="mh50-inicio">
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN FULL · METROHUMANA</span>
            <h1>MH<span>50</span></h1>
            <p className="mh50-exp-hero-line">Protección que crece<br />con tu familia.</p>
            <p className="mh50-exp-hero-body">
              Un plan pensado para acompañar cada momento importante, desde una consulta cotidiana
              hasta cuando más respaldo necesitas.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#mh50-esencia">Descubrir el plan</a>
              <a className="ghost-button" href="#mh50-cobertura">Ver coberturas</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Momentos de protección MH50">
            <figure className="mh50-exp-photo card-a">
              <Image src="/mh50-hospitalizacion.jpg" alt="Familia acompañando a un paciente en una habitación luminosa" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-b">
              <Image src="/mh50-ambulatoria.jpg" alt="Consulta médica cercana" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-c">
              <Image src="/mh50-maternidad.jpg" alt="Madre gestante durante un control prenatal" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#mh50-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="mh50-esencia">
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">MH50 EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Una cobertura<br />que se siente.</h2>
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

        <section className="mh50-exp-moments" id="mh50-cobertura">
          <span className="mh50-exp-giant-word" aria-hidden="true">CONTIGO</span>
          <div className="mh50-exp-moments-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">TU COBERTURA, EXPLICADA</span>
            <h2>Cuatro momentos.<br />Una sola tranquilidad.</h2>
            <p>Menos términos complicados. Más claridad sobre cómo MH50 acompaña a tu familia.</p>
            <div className="mh50-exp-signals" aria-label="Datos principales de los cuatro momentos">
              <span><strong>90%</strong> hospitalización</span>
              <span><strong>Desde $4</strong> consultas</span>
              <span><strong>70–90%</strong> medicinas</span>
              <span><strong>$50.000</strong> recién nacido</span>
            </div>
          </div>
          <div className="mh50-exp-compass mh50-exp-reveal" aria-label="Los cuatro momentos de protección de MH50">
            <svg viewBox="0 0 520 520" aria-hidden="true">
              <circle cx="260" cy="260" r="198" />
              <circle cx="260" cy="260" r="132" />
              <path d="M260 62V458M62 260H458" />
            </svg>
            <div className="mh50-exp-compass-core"><small>PLAN</small><strong>MH50</strong><span>Protección familiar</span></div>
            <div className="mh50-exp-compass-node node-one"><b>01</b><span>Hospitalización</span></div>
            <div className="mh50-exp-compass-node node-two"><b>02</b><span>Atención ambulatoria</span></div>
            <div className="mh50-exp-compass-node node-three"><b>03</b><span>Medicinas</span></div>
            <div className="mh50-exp-compass-node node-four"><b>04</b><span>Maternidad</span></div>
          </div>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos de cobertura">
          {chapters.map((c) => (
            <a key={c.id} href={`#mh50-${c.id}`} data-chapter-link={`mh50-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#mh50-incluido" data-chapter-link="mh50-incluido"><span>05</span>Beneficios</a>
          <a href="#mh50-carencias" data-chapter-link="mh50-carencias"><span>06</span>Carencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`mh50-${c.id}`}
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
                {c.id === "medicinas" && (
                  <li className="mh50-exp-pharmacy-note">
                    <span className="mh50-exp-pharmacy-logos" aria-label="Farmacias afiliadas: Pharmacy's, Sana Sana, Medicity y Fybeca">
                      <Image src="/farmacia-pharmacys.png" alt="Pharmacy's" width={178} height={60} unoptimized />
                      <Image src="/farmacia-sanasana.png" alt="Farmacias Sana Sana" width={200} height={38} unoptimized />
                      <Image src="/farmacia-medicity.png" alt="Medicity" width={150} height={88} unoptimized />
                      <Image src="/farmacia-fybeca.png" alt="Farmacias Fybeca" width={150} height={100} unoptimized />
                    </span>
                  </li>
                )}
              </ul>
              <button type="button" className="mh50-exp-text-button" onClick={() => openDialog(c.id)}>
                Explorar detalles <span>↗</span>
              </button>
            </div>
          </section>
        ))}

        <section className="mh50-exp-included" id="mh50-incluido">
          <div className="mh50-exp-benefits-panel">
            <div className="mh50-exp-benefits-head mh50-exp-reveal">
              <span className="mh50-exp-eyebrow light">BENEFICIOS HUMANA</span>
              <h2>Más formas de acompañarte.</h2>
              <p>Servicios adicionales que forman parte de tu plan MH50, sin costo adicional.</p>
            </div>
            <div className="mh50-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en el plan MH50">
              {featuredBenefits.map(({ icon: Icon, title }, i) => (
                <article className="mh50-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh50-exp-benefit-symbol" aria-hidden="true"><Icon /></span>
                  <h3>{title}</h3>
                  <span className="mh50-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh50-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en el plan MH50">
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

        <section className="mh50-exp-waiting" id="mh50-carencias">
          <div className="mh50-exp-waiting-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">CARENCIAS MH50</span>
            <h2>Tu cobertura, clara desde el inicio.</h2>
            <p>Estos son los periodos generales antes de utilizar determinadas prestaciones del plan.</p>
          </div>
          <div className="mh50-exp-waiting-grid" role="list" aria-label="Periodos generales de carencia del plan MH50">
            {waitingPeriods.map((w, i) => (
              <article className="mh50-exp-waiting-card mh50-exp-reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} role="listitem" key={w.title}>
                <div className="mh50-exp-waiting-num"><strong>{w.days}</strong><span>días</span></div>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
          <p className="mh50-exp-waiting-note mh50-exp-reveal">Aplican las condiciones particulares y la vigencia establecida en el contrato de cada afiliación.</p>
        </section>

        <section className="mh50-exp-vault">
          <div className="mh50-exp-vault-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">CLARIDAD ANTES DE ELEGIR</span>
            <h2>Los detalles importan.<br />Por eso están aquí.</h2>
            <p>Consulta condiciones, límites y coberturas especiales sin interrumpir la experiencia principal.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal">
            <details>
              <summary>Casos especiales y preexistencias <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {specialCases.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Prevención y bienestar <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {preventionCoverages.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Rehabilitación y ayudas técnicas <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {rehabCoverages.map(({ icon: Icon, value, label }) => (
                  <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Emergencias y condiciones <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {emergencyCoverages.map(({ icon: Icon, value, label }) => (
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
            <span className="mh50-exp-eyebrow light">UN GESTO QUE VA MÁS ALLÁ</span>
            <h2>Cada plan entrega esperanza.</h2>
            <p>Humana y Fundación Metrofraternidad ayudan a que más niños y adolescentes accedan a atención médica especializada.</p>
            <strong>+6.900</strong>
            <span>niños y adolescentes beneficiados</span>
          </div>
        </section>

        <section className="mh50-exp-finale" id="mh50-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">MH50 · PLAN FULL</span>
            <h2>La tranquilidad de saber que están protegidos.</h2>
            <p>Cotiza el plan más elegido de Humana y empieza a proteger a los tuyos hoy mismo.</p>
            <div className="mh50-exp-finale-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}>Cotizar MH50</button>
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
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>MH</span><strong>50</strong></div>
        </section>

        <div
          id="mh50-assistant-slot"
          ref={assistantRef}
          className={`humana-bear-assistant${assistantMinimized ? " is-minimized" : ""}`}
        >
          {!assistantMinimized && (
            <div className="humana-bear-bubble" role="status">
              <button
                type="button"
                className="humana-bear-close"
                onClick={toggleAssistant}
                aria-label="Minimizar asistente Humana"
              >
                <X size={13} aria-hidden="true" />
              </button>
              <p key={assistantSection}>{assistantMessages[assistantSection]}</p>
            </div>
          )}
          <button
            type="button"
            className="humana-bear-figure"
            onClick={toggleAssistant}
            aria-label={assistantMinimized ? "Mostrar asistente Humana" : "Minimizar asistente Humana"}
          >
            <Image
              src="/images/planes/mh50/humana-bear.png"
              alt="Asistente virtual Humana"
              width={560}
              height={670}
              unoptimized
              className="humana-bear-image"
              priority={false}
            />
          </button>
        </div>

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
