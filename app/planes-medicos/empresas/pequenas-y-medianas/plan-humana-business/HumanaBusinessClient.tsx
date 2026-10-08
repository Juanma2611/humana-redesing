"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Mail, MessageCircle, PhoneCall, Users, X } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { cuadroA, groupCuadroBySection } from "@/lib/empresa-cuadros";

/* Rediseño tipo Apple (sobrio, blanco/gris muy claro + marino, una idea
   por sección), misma familia visual que Plan Pyme y Plan Corporativo.
   Mismos textos y datos oficiales del Plan Humana Business ya existentes
   en el sitio. El cuadro de coberturas usa el mismo patrón aprobado en
   Plan Pyme (enlace + panel), con los datos de cuadroA (un solo plan). */

const essenceStats = [
  { value: "Desde $42", label: "precios competitivos por colaborador" },
  { value: "200K+", label: "afiliados confían en Humana" },
  { value: "170K+", label: "afiliados respaldados a nivel nacional" },
];

/* Los 5 datos de "Arma tu plan a la medida": precio desde + los 4 atributos
   configurables oficiales, ya presentes en el sitio (sin inventar cifras). */
const configFigures = [
  { value: "Desde $42", label: "Precio competitivo por colaborador" },
  { value: "$10.000", label: "Límite de cobertura por enfermedad" },
  { value: "$50 · $80 · $100", label: "Deducible por persona, a elegir" },
  { value: "A elección", label: "Cobertura de maternidad" },
  { value: "60% a 90%", label: "Copagos hospitalario y ambulatorio" },
];

/* Lista principal oficial del Plan Humana Business (9 puntos) */
const mainPoints = [
  "Amplia red de prestadores en el país",
  "Cobertura de maternidad a elección de la empresa",
  "Elección de deducibles y copagos",
  "Coberturas a nivel corporativo",
  "Variedad de opciones y combinaciones",
  "Suscripción simple y sin declaración de salud",
  "Un plan de medicina prepagada con nivel de coberturas corporativas, flexible y asequible",
  "Cobertura integral: telemedicina, consultas presenciales, exámenes preventivos, ayudas técnicas, y más",
  "Aplicación de periodo de carencia para cobertura de preexistencias sin límite",
];

type Chapter = {
  id: string; number: string; eyebrow: string; title: string; lead: string; essentials: string[];
  image?: string; imageAlt?: string;
};

const chapters: Chapter[] = [
  {
    id: "configura", number: "01",
    eyebrow: "ARMA TU PLAN A LA MEDIDA", title: "Se puede seleccionar los beneficios, coberturas, porcentajes y copagos.",
    lead: "A diferencia de un plan corporativo tradicional negociado a la medida, Humana Business te permite combinar los atributos según las necesidades de tu empresa.",
    essentials: ["Cobertura por enfermedad de $10.000", "Deducibles de $50, $80 o $100", "Periodo de carencia para preexistencias, cobertura sin límite", "Suscripción simple y sin declaración de salud"],
    image: "/images/planes/business/business-oficina.jpg", imageAlt: "Equipo de oficina configurando su plan Humana Business",
  },
  {
    id: "red", number: "02",
    eyebrow: "RED AMBULATORIA", title: "Atención médica oportuna y personalizada, sin pagar deducible.",
    lead: "Consultas médicas en Red CAM y Red Preferida, exámenes de diagnóstico y medicinas con descuentos en toda la red de farmacias.",
    essentials: ["Red CAM: cancelas únicamente el copago", "Red Preferida: doctores de alto nivel en todo el país", "Medicinas: 10% a 30% del valor en farmacias en convenio"],
    image: "/images/planes/business/business-industrial.jpg", imageAlt: "Ingeniero y colaboradora de una planta industrial protegidos por la red ambulatoria",
  },
  {
    id: "servicios", number: "03",
    eyebrow: "SERVICIOS ADICIONALES", title: "Atención médica sin salir de casa o la oficina.",
    lead: "Teleconsulta médica, médico a domicilio y ambulancia terrestre, disponibles para tus colaboradores cuando los necesiten.",
    essentials: ["Teleconsulta médica: medicina general, interna y pediatría", "Médico a domicilio con receta digital", "Ambulancia terrestre coordinada por la red"],
    image: "/images/planes/business/business-taller.jpg", imageAlt: "Técnicos de un taller automotriz protegidos con servicios adicionales de Humana Business",
  },
  {
    id: "ventajas", number: "04",
    eyebrow: "MÁS QUE UN PLAN MÉDICO", title: "Cuidar a tu gente es la mejor inversión para tu negocio.",
    lead: "Bienestar para tu equipo, productividad para tu empresa. Una estrategia de bienestar, no solo un plan médico.",
    essentials: ["Disminución del ausentismo laboral", "Aumento del bienestar y la productividad", "Extensión de cobertura a familiares"],
  },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Mail, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* Cuadro de coberturas: mismo patrón aprobado en Plan Pyme, con los datos
   de cuadroA agrupados por categoría (un solo plan, sin selector). */
const slugify = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");
const titleCase = (text: string) => text.charAt(0) + text.slice(1).toLowerCase();
const coverageCategories = groupCuadroBySection(cuadroA);

/* Preguntas frecuentes del panel rápido (botón de ayuda), con datos reales
   del plan ya presentes en esta misma página (coberturas y canales de
   contacto). */
const quickFaqs = [
  {
    question: "¿Cómo arma mi empresa el plan?",
    answer: "¡Muy fácil! 🏢 Humana Business combina límites de cobertura, deducibles y copagos a la medida de tu empresa, con precios competitivos.",
  },
  {
    question: "¿Qué red médica tienen mis colaboradores?",
    answer: "Atención médica oportuna en la Red CAM y la Red Preferida 🩺, sin pagar deducible.",
  },
  {
    question: "¿Qué servicios adicionales incluye?",
    answer: "Tus colaboradores cuentan con teleconsulta, médico a domicilio y ambulancia 🚑, entre otros servicios.",
  },
  {
    question: "¿Qué gana mi empresa con esto?",
    answer: "Cuidar a tu gente es la mejor inversión 💙: mejora el bienestar, la productividad y la atención médica oportuna de todo tu equipo.",
  },
  {
    question: "¿Cómo contacto a Humana?",
    answer: "¡Con gusto! 😊 Puedes escribirnos por WhatsApp al +593 2401 7002, llamar a nuestra línea gratuita 1800 48 62 62, o enviarnos un correo a servicioalcliente@humana.med.ec.",
  },
];

export default function HumanaBusinessClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState<string>(coverageCategories[0]?.section ?? "");
  const [cuadroOpen, setCuadroOpen] = useState(false);
  const [cuadroVisible, setCuadroVisible] = useState(false);
  const cuadroDialogRef = useRef<HTMLDialogElement>(null);
  const cuadroContentRef = useRef<HTMLDivElement>(null);
  const cuadroOpenBtnRef = useRef<HTMLButtonElement>(null);

  const CHAT_GREETING = "¡Hola! 👋 Soy tu asistente de Humana para Business. Toca una de estas preguntas y te respondo al instante 😊";
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
    }, 900);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [chatMessages, isTyping]);

  /* Aparición suave al hacer scroll (fade + leve desplazamiento). */
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

  /* Panel del cuadro de coberturas: mismo mecanismo aprobado en Plan Pyme. */
  const closeCuadro = () => {
    setCuadroVisible(false);
    window.setTimeout(() => setCuadroOpen(false), 220);
  };

  useEffect(() => {
    const dialog = cuadroDialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      setCuadroOpen(false);
      setCuadroVisible(false);
      cuadroOpenBtnRef.current?.focus();
    };
    const onCancel = (e: Event) => { e.preventDefault(); closeCuadro(); };
    dialog.addEventListener("close", onClose);
    dialog.addEventListener("cancel", onCancel);
    return () => { dialog.removeEventListener("close", onClose); dialog.removeEventListener("cancel", onCancel); };
  }, []);

  useEffect(() => {
    const dialog = cuadroDialogRef.current;
    if (!dialog) return;
    if (cuadroOpen && !dialog.open) {
      dialog.showModal();
      requestAnimationFrame(() => requestAnimationFrame(() => setCuadroVisible(true)));
    }
    if (!cuadroOpen && dialog.open) dialog.close();
  }, [cuadroOpen]);

  useEffect(() => {
    if (!cuadroOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [cuadroOpen]);

  useEffect(() => {
    if (!cuadroOpen) return;
    const content = cuadroContentRef.current;
    if (!content) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(content.querySelectorAll<HTMLElement>("[data-category-card]"));
    if (!cards.length) return;

    const onScroll = () => {
      const contentTop = content.getBoundingClientRect().top;
      let current = activeCategory;
      cards.forEach((card) => {
        if (card.getBoundingClientRect().top - contentTop < content.clientHeight * 0.35) current = card.dataset.categoryCard ?? current;
      });
      setActiveCategory((prev) => {
        if (prev === current) return prev;
        const link = content.parentElement?.querySelector<HTMLAnchorElement>(`[data-category-link="${current}"]`);
        const navContainer = link?.parentElement;
        if (link && navContainer) {
          const targetLeft = link.offsetLeft - navContainer.clientWidth / 2 + link.clientWidth / 2;
          navContainer.scrollTo({ left: Math.max(0, targetLeft), behavior: reducedMotion ? "auto" : "smooth" });
        }
        return current;
      });
    };
    content.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => content.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cuadroOpen]);

  return (
    <SiteShell title="Humana Business · Plan empresarial">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link><span>»</span>
        <Link href="/planes-medicos/empresas/pequenas-y-medianas/">Planes médicos para Pequeñas y Medianas Empresas</Link><span>»</span>
        <span>Plan Humana Business</span>
      </nav>

      <div className="biz-page" ref={rootRef}>
        {/* Hero ------------------------------------------------------- */}
        <section className="biz-hero" id="business-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">PLAN EMPRESARIAL · HUMANA BUSINESS</span>
            <h1>Plan Humana <span>Business</span></h1>
            <p className="biz-hero-line">Cuida a tu equipo, fortalece tu negocio.</p>
            <p className="biz-hero-body">
              Si tu gente está bien, tu negocio crecerá bien. Cuidar el capital humano es la mejor
              inversión para las empresas, sin las complejidades de un plan corporativo tradicional.
            </p>
            <div className="biz-hero-actions">
              <a className="biz-btn-primary" href="#business-cierre">Solicita información</a>
              <a className="biz-btn-link" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Hablar con un asesor <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="biz-hero-image">
            <Image src="/images/planes/business/business-retail.jpg" alt="Equipo de una tienda protegido por Humana Business" fill sizes="(max-width: 980px) 100vw, 1180px" unoptimized />
          </figure>
        </section>

        {/* Franja de cifras clave -------------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">HUMANA BUSINESS EN TRES IDEAS</span>
              <h2>Más que un plan médico, una estrategia de bienestar.</h2>
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

        {/* Arma tu plan a la medida: fila limpia de 5 datos --------------- */}
        <section className="biz-section is-white" id="business-arma-plan">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">ARMA TU PLAN A LA MEDIDA</span>
              <h2>Configura la cobertura ideal para tu empresa.</h2>
              <p>Combina límites, deducibles, copagos y cobertura de maternidad según las necesidades de tu equipo.</p>
            </div>
            <div className="biz-stats biz-reveal">
              {configFigures.map((fig) => (
                <article key={fig.label}>
                  <strong>{fig.value}</strong>
                  <p>{fig.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Capítulos de beneficio (una idea por sección) ----------------- */}
        {chapters.map((c, i) => (
          c.image ? (
            <section className={`biz-section ${i % 2 === 0 ? "is-light" : "is-white"}`} id={`business-${c.id}`} key={c.id}>
              <div className="biz-container">
                <div className={`biz-feature${i % 2 === 1 ? " reverse" : ""}`}>
                  <figure className="biz-feature-media biz-reveal">
                    <Image src={c.image} alt={c.imageAlt ?? ""} fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
                  </figure>
                  <div className="biz-feature-copy biz-reveal">
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
              </div>
            </section>
          ) : (
            <section className="biz-section is-light" id={`business-${c.id}`} key={c.id}>
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
          )
        ))}

        {/* Todo lo que incluye ------------------------------------------- */}
        <section className="biz-section is-white" id="business-incluye">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <h2>Todo lo que incluye tu Plan Humana Business</h2>
            </div>
            <ul className="biz-checklist biz-reveal" style={{ maxWidth: 820, margin: "36px auto 0" }}>
              {mainPoints.map((point) => (
                <li key={point}><Check aria-hidden="true" /><span>{point}</span></li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cuadro de coberturas: enlace + panel (mismo patrón de Plan Pyme) */}
        <section className="pyme-cuadro" id="business-cuadro">
          <div className="pyme-cuadro-cta">
            <p>¿Quieres conocer el detalle de las coberturas?</p>
            <button
              type="button"
              className="pyme-cuadro-open-btn"
              ref={cuadroOpenBtnRef}
              aria-expanded={cuadroOpen}
              aria-controls="business-cuadro-dialog"
              onClick={() => setCuadroOpen(true)}
            >
              Ver cuadro de coberturas
              <ArrowRight aria-hidden="true" />
            </button>
          </div>

          {/* Todo el cuadro completo está renderizado en el HTML desde la
             carga inicial: el <dialog> solo lo oculta visualmente hasta
             que se abre, no lo carga por JS. */}
          <dialog
            id="business-cuadro-dialog"
            className={`pyme-cuadro-dialog${cuadroVisible ? " is-visible" : ""}`}
            ref={cuadroDialogRef}
            aria-labelledby="business-cuadro-dialog-title"
            onClick={(e) => { if (e.target === cuadroDialogRef.current) closeCuadro(); }}
          >
            <div className="pyme-cuadro-dialog-inner">
              <header className="pyme-cuadro-dialog-head">
                <div className="pyme-cuadro-dialog-head-copy">
                  <span className="pyme-cuadro-dialog-eyebrow">CUADRO DE COBERTURAS</span>
                  <h2 id="business-cuadro-dialog-title">Cuadro de coberturas · Humana Business</h2>
                </div>
                <div className="pyme-cuadro-dialog-head-actions">
                  <button type="button" className="pyme-cuadro-dialog-close" onClick={closeCuadro} aria-label="Cerrar">
                    <X aria-hidden="true" />
                  </button>
                </div>
              </header>

              <div className="pyme-cuadro-dialog-body">
                <nav className="pyme-cuadro-dialog-index" aria-label="Categorías del cuadro de coberturas">
                  {coverageCategories.map((cat, i) => {
                    const slug = slugify(cat.section);
                    return (
                      <a
                        key={slug}
                        href={`#business-cat-${slug}`}
                        data-category-link={slug}
                        className={activeCategory === slug ? "is-active" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          cuadroContentRef.current?.querySelector(`#business-cat-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }}
                      >
                        <span className="pyme-cuadro-dialog-index-num">{String(i + 1).padStart(2, "0")}</span>
                        {titleCase(cat.section)}
                      </a>
                    );
                  })}
                </nav>

                <div className="pyme-cuadro-dialog-content" ref={cuadroContentRef}>
                  {coverageCategories.map((cat, i) => {
                    const slug = slugify(cat.section);
                    return (
                      <section className="pyme-cuadro-dialog-category" id={`business-cat-${slug}`} data-category-card={slug} key={cat.section}>
                        <header className="pyme-cuadro-dialog-category-head">
                          <span className="pyme-cuadro-dialog-category-num">{String(i + 1).padStart(2, "0")}</span>
                          <h3>{titleCase(cat.section)}</h3>
                        </header>
                        <dl>
                          {cat.rows.map((row) => (
                            <div className="pyme-cuadro-dialog-row" key={row.label}>
                              <dt>{row.label}</dt>
                              <dd className="pyme-cuadro-dialog-value"><span>{row.value}</span></dd>
                            </div>
                          ))}
                        </dl>
                      </section>
                    );
                  })}
                </div>
              </div>

              <div className="pyme-cuadro-dialog-actions">
                <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer" onClick={closeCuadro}>Solicitar información</a>
                <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              </div>
            </div>
          </dialog>
        </section>

        {/* Cierre único --------------------------------------------------- */}
        <section className="biz-section is-dark" id="business-cierre">
          <div className="biz-container biz-close">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">HUMANA BUSINESS · PLAN EMPRESARIAL</span>
              <h2>El bienestar de tus colaboradores impulsa tu empresa.</h2>
              <p>Arma el plan ideal para tu empresa y empieza a cuidar a tu equipo hoy mismo.</p>
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

        <div className="mh50-quick-actions">
          {faqOpen && (
            <div className="mh50-quick-faq" role="dialog" aria-label="Chat de preguntas frecuentes de Humana Business">
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
      </div>
    </SiteShell>
  );
}
