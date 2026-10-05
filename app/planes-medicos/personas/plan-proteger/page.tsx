"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, Banknote, Cross, Droplets, FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  Layers3, Mail, MessageCircle, PhoneCall, Pill, ShieldCheck, ShieldPlus, ShoppingCart, Sparkles, Stethoscope, Users, Wallet, X,
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
    essentials: ["Hospitalización 100% tras deducible", "Cuarto y alimento hasta el monto de cobertura", "Deducibles a elegir: $5.000 · $10.000 · $20.000", "Cobertura durante toda tu vida, sin límite de edad", "Atención en los mejores hospitales y clínicas en convenio, o por libre elección"],
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
      { icon: HeartHandshake, text: "Seguro de vida $5.000 (titulares y dependientes de 18 a 64 años)" },
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

/* Principales beneficios del plan Proteger (contenido oficial) */
const featuredBenefits = [
  { icon: Cross, title: "Cobertura para cirugía reconstructiva y rehabilitación" },
  { icon: HeartPulse, title: "Cobertura integral de trasplante de órganos" },
  { icon: Droplets, title: "Cobertura para diálisis y hemodiálisis" },
  { icon: HeartHandshake, title: "Cuidados paliativos" },
  { icon: Sparkles, title: "Terapia de rehabilitación" },
  { icon: Ambulance, title: "Ambulancia terrestre" },
];

/* Chequeo médico anual Metrored (beneficio especial, contenido oficial) */
const checkupItems = [
  "Uroanálisis EMO", "Biometría hemática", "Glucosa", "Triglicéridos", "Colesterol", "HDL - LDL",
  "Consulta médica general o pediatra", "Coproparasitario simple", "Chequeo Optometría", "Profilaxis dental (certificado)",
];
const checkupConditions = [
  "Uno al año por contrato para titular o dependientes afiliados.",
  "Aplica con carta de autorización que la recibirá en el lapso de 8 horas hábiles luego del ingreso de la solicitud.",
  "Sin carencia.",
  "Vigencia para utilizar chequeo 90 días luego de la emisión de tu plan.",
  "Chequeo médico se lo realiza en la red centros médicos Metrored en Quito o Guayaquil.",
];

/* Asistencia Hu Assist Plus (contenido oficial) */
const huPlusCategories = ["Personal", "Mascotas", "Hogar"];

/* Preguntas frecuentes oficiales del Plan Proteger (sección visible) */
const officialFaqs = [
  {
    question: "¿Qué cubre el Plan Proteger de Humana?",
    answer: [
      "El Plan Proteger está diseñado para ofrecer protección ante enfermedades y accidentes graves hasta $500.000 de cobertura vitalicia. La cobertura incluye:",
    ],
    checklist: [
      "Hospitalización por emergencias y cirugías complejas",
      "Terapias intensivas",
      "Tratamientos de enfermedades catastróficas (como cáncer)",
      "Cobertura de medicamentos y materiales médicos",
      "Cobertura por accidentes graves",
      "Honorarios médicos especializados",
    ],
  },
  {
    question: "¿Cuánto cuesta el Plan Proteger y qué formas de pago están disponibles?",
    answer: [
      "El costo del plan es desde $19.26 por persona. Puedes pagar con tarjetas de crédito, débito, transferencias bancarias o débito automático. También puedes elegir pagos mensuales, trimestrales o anuales para mayor comodidad.",
    ],
  },
  {
    question: "¿Qué enfermedades graves están cubiertas en el plan?",
    answer: [
      "El plan cubre el tratamiento de enfermedades graves y catastróficas que se hayan desarrollado y presentado dentro de su vigencia, incluyendo entre otras: cáncer, infarto, insuficiencia renal crónica, enfermedades cardiovasculares complejas, cirugías mayores y accidentes con trauma severo.",
    ],
  },
  {
    question: "¿Desde cuándo entra en vigencia la cobertura?",
    answer: [
      "La cobertura entra en vigencia una vez completado el proceso de afiliación y confirmación del pago. Algunos tratamientos específicos pueden estar sujetos a períodos de carencia, que te serán detallados en el contrato y cubiertos luego de superado el deducible:",
    ],
    checklist: [
      "Emergencia médica vital: 24 horas",
      "Ambulatoria (atención que no requiere hospitalización): luego de 30 días",
      "Hospitalaria: 90 días",
      "Enfermedades preexistentes declaradas: desde el mes 24 hasta 20 salarios básicos",
    ],
  },
  {
    question: "¿Cómo funcionan los deducibles y cómo afectan mi cobertura?",
    answer: [
      "El Plan Proteger tiene tres opciones de deducible: $5.000, $10.000 y $20.000. La cobertura se activará una vez que hayas alcanzado el valor del deducible seleccionado. Esto significa que deberás asumir los costos iniciales hasta completar el deducible, y luego Humana cubrirá los gastos médicos restantes según las condiciones de tu plan.",
    ],
  },
  {
    question: "¿Este plan funciona como un seguro médico o es un complemento?",
    answer: [
      "El Plan Proteger funciona como un complemento a tu cobertura personal o corporativa. Si ya tienes un plan médico o un seguro privado, puedes usar el Plan Proteger para cubrir los gastos que excedan los límites de tu cobertura principal o para afrontar emergencias médicas graves que no estén contempladas en tu seguro básico.",
    ],
  },
  {
    question: "¿Qué diferencia hay entre el Plan Proteger y un seguro médico tradicional?",
    answer: [
      "El Plan Proteger está enfocado en la cobertura de gastos mayores relacionados con enfermedades y accidentes graves, mientras que los seguros médicos tradicionales suelen enfocarse en servicios ambulatorios y atención general.",
    ],
  },
  {
    question: "¿El plan cubre atenciones fuera de la red de Humana?",
    answer: [
      "Sí, el plan cubre atenciones fuera de la red mediante un sistema de reembolso. El porcentaje y los montos de cobertura varían según las condiciones del contrato y el tipo de servicio médico recibido.",
    ],
  },
  {
    question: "¿Cómo puedo afiliarme al Plan Proteger?",
    answer: ["Puedes afiliarte de manera rápida y sencilla:"],
    checklist: [
      "Accede al cotizador en línea.",
      "Selecciona el plan que se ajuste a tus necesidades.",
      "Completa el formulario y realiza el pago.",
      "Recibirás la confirmación por correo electrónico y el detalle de tu cobertura.",
    ],
  },
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
  { icon: Mail, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* Preguntas frecuentes del panel rápido (botón de ayuda), con datos reales
   del plan ya presentes en esta misma página (carencias, coberturas y
   canales de contacto). */
const quickFaqs = [
  {
    question: "¿Cuándo puedo empezar a usar mi cobertura?",
    answer: "¡Buena pregunta! ⏱️ El chequeo médico y las asistencias están disponibles desde el día 0, atención ambulatoria desde los 30 días, maternidad desde los 60 días, y hospitalaria y discapacidades desde los 90 días de afiliación.",
  },
  {
    question: "¿Cómo funciona Proteger?",
    answer: "Proteger complementa tu plan médico base 💙: una vez aplicado el deducible que elijas ($5.000, $10.000 o $20.000), la cobertura hospitalaria y ambulatoria opera al 100% hasta el monto contratado.",
  },
  {
    question: "¿Qué cubre la cirugía robótica?",
    answer: "Proteger cubre el 100% en procedimientos con cirugía robótica 🤖, una vez aplicado tu deducible.",
  },
  {
    question: "¿Puedo combinarlo con mi plan actual?",
    answer: "¡Claro que sí! 🙌 Los gastos de tu plan base sirven para cubrir el deducible de Proteger, y puedes presentar reembolsos en los dos planes.",
  },
  {
    question: "¿Cómo contacto a Humana?",
    answer: "¡Con gusto! 😊 Puedes escribirnos por WhatsApp al +593 2401 7002, llamar a nuestra línea gratuita 1800 48 62 62, o enviarnos un correo a servicioalcliente@humana.med.ec.",
  },
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
  const [called, setCalled] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqOpen, setFaqOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null;

  const openDialog = (id: string) => {
    setActiveChapterId(id);
    dialogRef.current?.showModal();
  };
  const closeDialog = () => dialogRef.current?.close();

  const handleQuoteClick = () => setQuoted(true);

  const CHAT_GREETING = "¡Hola! 👋 Soy tu asistente de Humana para Proteger. Toca una de estas preguntas y te respondo al instante 😊";
  const pendingFaqs = quickFaqs.filter((item) => !askedQuestions.includes(item.question));

  const openChat = () => {
    setFaqOpen(true);
    if (chatMessages.length === 0) {
      setChatMessages([{ role: "bot", text: CHAT_GREETING }]);
    }
  };
  const closeChat = () => {
    setFaqOpen(false);
    setChatMessages([]);
    setAskedQuestions([]);
    setIsTyping(false);
  };
  const askQuestion = (question: string, answer: string) => {
    setChatMessages((msgs) => [...msgs, { role: "user", text: question }]);
    setAskedQuestions((asked) => [...asked, question]);
    setIsTyping(true);
    window.setTimeout(() => {
      setIsTyping(false);
      setChatMessages((msgs) => [...msgs, { role: "bot", text: answer }]);
    }, 700 + Math.random() * 500);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [chatMessages, isTyping]);

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
      <div className="mh50-exp proteger-page" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="proteger-inicio">
          <div className="mh50-exp-hero-copy">
            <Image className="plan-official-logo" src="https://humana.med.ec/wp-content/uploads/2025/10/proteger-logo-2025.png" alt="Logo Plan Proteger" width={120} height={48} unoptimized />
            <span className="mh50-exp-eyebrow light">PLAN PROTEGER · HUMANA</span>
            <h1 className="is-long">Prote<span>ger</span></h1>
            <p className="mh50-exp-hero-line">Tu respaldo financiero<br />frente a lo inesperado.</p>
            <p className="mh50-exp-hero-body">
              Una enfermedad grave o un accidente no deberían cambiar tu futuro. Proteger complementa tu plan
              médico actual con respaldo económico adicional cuando más lo necesitas.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#proteger-cierre"><ShoppingCart size={18} /> Cotiza ahora</a>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <button type="button" className="ghost-button" onClick={() => setCalled(true)}><PhoneCall size={18} /> Solicitar llamada</button>
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

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos de cobertura de Proteger">
          {chapters.map((c) => (
            <a key={c.id} href={`#proteger-${c.id}`} data-chapter-link={`proteger-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#proteger-carencias" data-chapter-link="proteger-carencias"><span>05</span>Carencias</a>
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

        <section className="mh50-exp-included" id="proteger-beneficios" style={{ position: "relative" }}>
          <div className="mh50-exp-benefits-panel">
            <div className="mh50-exp-benefits-head mh50-exp-reveal">
              <span className="mh50-exp-eyebrow light">PRINCIPALES BENEFICIOS</span>
              <h2>Más formas de acompañarte.</h2>
              <p>Ventajas que forman parte de tu plan Proteger.</p>
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
            <details>
              <summary>Beneficio especial: chequeo médico anual Metrored <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {checkupItems.map((item) => (
                  <article key={item}><HeartPulse /><strong>Incluido</strong><span>{item}</span></article>
                ))}
                <article><Sparkles /><strong>10</strong><span>Número de procedimientos del chequeo</span></article>
              </div>
              <p className="mh50-exp-waiting-note" style={{ marginTop: 16 }}>
                Solicita tu chequeo al 1800 Humana (48 62 62) o mediante{" "}
                <a href="https://wa.me/59324017002" target="_blank" rel="noreferrer">WhatsApp</a>.
              </p>
              <ul style={{ marginTop: 10, paddingLeft: 20, color: "inherit" }}>
                {checkupConditions.map((condition) => <li key={condition}>{condition}</li>)}
              </ul>
            </details>
            <details>
              <summary>Asistencia Hu Assist Plus <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {huPlusCategories.map((category) => (
                  <article key={category}><HandHeart /><strong>{category}</strong><span>Asistencia incluida</span></article>
                ))}
              </div>
              <p className="mh50-exp-waiting-note" style={{ marginTop: 16 }}>
                Como usuario de este plan, tiene acceso a la Asistencia Hu Assist Plus. Para activarla puede llamar al{" "}
                1800 Humana (48 62 62), o comunicarse con nosotros mediante{" "}
                <a href="https://wa.me/59324017002" target="_blank" rel="noreferrer">WhatsApp</a>.{" "}
                Más información:{" "}
                <a href="https://servicio.humana.med.ec/hc/es/articles/34038006726541-Asistencia-Hu-Plus" target="_blank" rel="noreferrer">
                  servicio.humana.med.ec
                </a>.
              </p>
            </details>
          </div>
        </section>

        <section className="content-section plan-detail-faq-section" id="proteger-faq" style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
          <div className="plan-detail-faq-layout" style={{ gridTemplateColumns: "1fr" }}>
            <div>
              <h2>Preguntas frecuentes Plan Proteger</h2>
              <div className="plan-faq-accordion">
                {officialFaqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div className={`plan-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                      <button
                        type="button"
                        className="plan-faq-trigger"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.question}</span>
                        <Sparkles size={16} aria-hidden="true" />
                      </button>
                      {isOpen && (
                        <div className="plan-faq-content">
                          {faq.answer.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                          {faq.checklist && (
                            <ul className="plan-faq-checklist">
                              {faq.checklist.map((item) => (
                                <li key={item}><ShieldCheck size={16} /><span>{item}</span></li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
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
              <button type="button" className="primary-button" onClick={handleQuoteClick}><ShoppingCart size={18} /> Cotiza ahora</button>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <button type="button" className="ghost-button" onClick={() => setCalled(true)}><PhoneCall size={18} /> Solicitar llamada</button>
              <Link className="ghost-button" href="/planes">Ver todos los planes</Link>
            </div>
            {quoted && (
              <div className="mh50-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
            {called && (
              <div className="mh50-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud de llamada demostrativa registrada. No se envió información real.</span>
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

        <div className="mh50-quick-actions">
          {faqOpen && (
            <div className="mh50-quick-faq" role="dialog" aria-label="Chat de preguntas frecuentes de Proteger">
              <div className="mh50-chat-header">
                <span className="mh50-chat-avatar">
                  <Image src="/images/planes/mh50/mh50-faq-icon.webp" alt="" width={20} height={20} unoptimized aria-hidden="true" />
                </span>
                <div className="mh50-chat-header-text">
                  <strong>Asistente Humana</strong>
                  <span className="mh50-chat-status"><i /> En línea</span>
                </div>
                <button type="button" className="mh50-quick-faq-close" onClick={closeChat} aria-label="Cerrar chat">
                  <X size={16} aria-hidden="true" />
                </button>
              </div>
              <div className="mh50-chat-body">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`mh50-chat-row mh50-chat-row-${msg.role}`}>
                    {msg.role === "bot" && (
                      <span className="mh50-chat-avatar mh50-chat-avatar-sm">
                        <Image src="/images/planes/mh50/mh50-faq-icon.webp" alt="" width={14} height={14} unoptimized aria-hidden="true" />
                      </span>
                    )}
                    <div className={`mh50-chat-bubble mh50-chat-bubble-${msg.role}`}>{msg.text}</div>
                  </div>
                ))}
                {isTyping && (
                  <div className="mh50-chat-row mh50-chat-row-bot">
                    <span className="mh50-chat-avatar mh50-chat-avatar-sm">
                      <Image src="/images/planes/mh50/mh50-faq-icon.webp" alt="" width={14} height={14} unoptimized aria-hidden="true" />
                    </span>
                    <div className="mh50-chat-bubble mh50-chat-bubble-bot mh50-chat-typing">
                      <span /><span /><span />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <div className="mh50-chat-suggestions">
                {pendingFaqs.length > 0 ? (
                  pendingFaqs.map((item) => (
                    <button
                      key={item.question}
                      type="button"
                      className="mh50-chat-chip"
                      disabled={isTyping}
                      onClick={() => askQuestion(item.question, item.answer)}
                    >
                      {item.question}
                    </button>
                  ))
                ) : (
                  <span className="mh50-chat-chip mh50-chat-chip-contact-label">¿Algo más específico?</span>
                )}
                <a className="mh50-chat-chip mh50-chat-chip-contact" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">
                  <MessageCircle size={14} aria-hidden="true" /> Hablar con un asesor
                </a>
              </div>
            </div>
          )}
          <button
            type="button"
            className="mh50-quick-btn mh50-quick-btn-faq"
            onClick={() => (faqOpen ? closeChat() : openChat())}
            aria-label={faqOpen ? "Cerrar chat" : "Abrir chat de preguntas frecuentes"}
            aria-expanded={faqOpen}
          >
            <Image
              src="/images/planes/mh50/mh50-faq-icon.webp"
              alt=""
              width={36}
              height={36}
              unoptimized
              aria-hidden="true"
            />
          </button>
          <a
            className="mh50-quick-btn mh50-quick-btn-whatsapp"
            href="https://wa.me/59324017002"
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
          >
            <Image
              src="/images/planes/mh50/mh50-whatsapp-icon.webp"
              alt=""
              width={34}
              height={34}
              unoptimized
              aria-hidden="true"
            />
          </a>
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
