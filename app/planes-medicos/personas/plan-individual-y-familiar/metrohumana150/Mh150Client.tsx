"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Ambulance, Baby, Bike, Bone, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  Mail, MessageCircle, Milk, Phone, PhoneCall, Plane, Ribbon,
  ShieldCheck, ShieldPlus, ShoppingCart, Sparkles, Syringe, Users, Waves, Wallet, X,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  chapters, contactChannels, essenceStats, faqItems, featuredBenefits,
  otherConditions, planIdentity, preventionCoverages,
  rehabCoverages, specialCases, waitingPeriods,
} from "./mh150Data";

/* Mapa de íconos: mh150Data.ts guarda solo el nombre del ícono (string) para
   mantener los datos como constantes serializables; aquí se resuelven a los
   componentes reales de lucide-react. */
const iconMap = {
  Activity, Ambulance, Baby, Bike, Bone, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, HomeIcon,
  Mail, MessageCircle, Milk, Phone, PhoneCall, Plane, Ribbon,
  ShieldCheck, ShieldPlus, Sparkles, Syringe, Users, Waves, Wallet,
} as const;

function Icon({ name }: { name: keyof typeof iconMap }) {
  const Cmp = iconMap[name];
  return <Cmp aria-hidden="true" />;
}

/* Preguntas frecuentes del panel rápido (botón de ayuda), con datos reales
   del plan ya presentes en esta misma página (carencias, coberturas y
   canales de contacto). */
const quickFaqs = [
  {
    question: "¿Cuándo puedo empezar a usar mi cobertura?",
    answer: "¡Buena pregunta! ⏱️ Depende del tipo de atención: 24 horas para emergencias, 30 días para atención ambulatoria, 60 días para maternidad y 90 días para hospitalización, contados desde el día en que te afilias.",
  },
  {
    question: "¿Qué cubre la hospitalización?",
    answer: "Tienes un respaldo completo 🏥: 90% en Red Humana y 80% por libre elección, sin límite de días hospitalarios.",
  },
  {
    question: "¿Cómo funciona la cobertura de medicinas?",
    answer: "Así de simple 💊: entre 70% y 90% según el medicamento, con el tope anual más alto de la familia MH: $2.000, en la amplia red de farmacias de Humana.",
  },
  {
    question: "¿Qué pasa si tengo una emergencia?",
    answer: "Quédate tranquilo 💙, la cobertura de emergencias está activa desde las 24 horas de tu afiliación, hasta el tope de tu plan.",
  },
  {
    question: "¿Cómo contacto a Humana?",
    answer: "¡Con gusto! 😊 Puedes escribirnos por WhatsApp al +593 2401 7002, llamar a nuestra línea gratuita 1800 48 62 62, o enviarnos un correo a servicioalcliente@humana.med.ec.",
  },
];

export default function Mh150Client() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeChapterId, setActiveChapterId] = useState<string | null>(null);
  const [quoted, setQuoted] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);
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

  const CHAT_GREETING = "¡Hola! 👋 Soy tu asistente de Humana para MH150. Toca una de estas preguntas y te respondo al instante 😊";
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

  /* Barra de progreso, scrollspy de capítulos y aparición al hacer scroll.
     Mismo mecanismo que PH30/PH15: el scrollspy mueve solo el scrollLeft del
     contenedor sticky del menú (nunca scrollIntoView, que arrastra
     verticalmente toda la página cuando el contenedor es sticky). */
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
      root.querySelectorAll(".mh150-exp-reveal").forEach((el) => el.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", onScroll);
    }

    root.classList.add("is-motion-ready");
    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(".mh150-exp-reveal"));
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
    <SiteShell title="MH150 · Plan Premium MetroHumana 150.000">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/personas">Planes médicos para Personas</Link><span>»</span>
        <Link href="/planes-medicos/personas/plan-individual-y-familiar">Plan Individual y Familiar Cobertura de Salud en Ecuador</Link><span>»</span>
        <span>Metrohumana150</span>
      </nav>
      <div className="mh150-exp" ref={rootRef}>
        <div className="mh150-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh150-exp-hero" id="mh150-inicio">
          <div className="mh150-exp-hero-copy">
            <Image className="plan-official-logo" src="https://humana.med.ec/wp-content/uploads/2020/12/1-metro-humana-150-215.png" alt="Logo MetroHumana 150" width={120} height={48} unoptimized />
            <span className="mh150-exp-eyebrow light">PLAN FAMILIAR MH150</span>
            <h1>Metrohumana<span>150</span></h1>
            <p className="mh150-exp-hero-line">El respaldo que tu familia<br />necesita cuando más importa.</p>
            <p className="mh150-exp-hero-body">
              El plan de mayor respaldo de la familia MH: la cobertura más completa, con protección
              superior en hospitalización, maternidad, emergencias y beneficios adicionales, para
              quienes buscan la mayor tranquilidad posible.
            </p>
            <div className="mh150-exp-hero-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}><ShoppingCart size={18} /> Cotiza tu plan</button>
              <a className="ghost-button" href="#mh150-cobertura">Conoce tu cobertura</a>
            </div>
            {quoted && (
              <div className="mh150-exp-confirm" role="status" style={{ maxWidth: 520, marginTop: 20 }}>
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
          </div>
          <div className="mh150-exp-gallery" aria-label="Momentos de protección MH150">
            <figure className="mh150-exp-photo card-a">
              <Image src="/plan-mh150-hero.jpeg" alt="Familia protegida por MH150" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh150-exp-photo card-b">
              <Image src="/images/planes/mh150/mh150-ambulatoria.jpg" alt="Familia en consulta con médico especialista" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh150-exp-photo card-c">
              <Image src="/images/planes/mh150/mh150-hospitalizacion.jpg" alt="Atención hospitalaria cálida y segura" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh150-exp-scroll-cue" href="#mh150-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh150-exp-essence" id="mh150-esencia">
          <div className="mh150-exp-eyebrow light mh150-exp-reveal">MH150 EN TRES IDEAS</div>
          <h2 className="mh150-exp-display mh150-exp-reveal">Protección integral<br />para toda tu familia.</h2>
          <div className="mh150-exp-stat-stage">
            {essenceStats.map((stat) => (
              <article className="mh150-exp-stat mh150-exp-reveal" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </article>
            ))}
          </div>
          <p className="mh150-exp-fineprint mh150-exp-reveal">Información resumida para fines demostrativos. Aplican las condiciones del plan {planIdentity.fullName}.</p>
        </section>

        <section className="mh150-exp-moments" id="mh150-cobertura">
          <span className="mh150-exp-giant-word" aria-hidden="true">RESPALDO</span>
          <div className="mh150-exp-moments-copy mh150-exp-reveal">
            <span className="mh150-exp-eyebrow">TU COBERTURA, EXPLICADA</span>
            <h2>Cinco momentos.<br />La mayor tranquilidad.</h2>
            <p>Menos letra pequeña. Más claridad sobre cómo MH150 acompaña a tu familia, desde una consulta con especialista hasta una emergencia.</p>
            <div className="mh150-exp-signals" aria-label="Datos principales de los cinco momentos">
              <span><strong>90%</strong> hospitalización</span>
              <span><strong>80%</strong> libre elección</span>
              <span><strong>70–90%</strong> medicinas</span>
              <span><strong>$7.500</strong> parto o cesárea</span>
            </div>
          </div>
          <div className="mh150-exp-compass mh150-exp-reveal" aria-label="Los cinco momentos de protección de MH150">
            <svg viewBox="0 0 520 520" aria-hidden="true">
              <circle cx="260" cy="260" r="198" />
              <circle cx="260" cy="260" r="132" />
              <path d="M260 62V458M62 260H458" />
            </svg>
            <div className="mh150-exp-compass-core"><small>PLAN</small><strong>MH150</strong><span>Metrohumana</span></div>
            <div className="mh150-exp-compass-node node-one"><b>01</b><span>Hospitalización</span></div>
            <div className="mh150-exp-compass-node node-two"><b>02</b><span>Atención médica</span></div>
            <div className="mh150-exp-compass-node node-three"><b>03</b><span>Medicinas</span></div>
            <div className="mh150-exp-compass-node node-four"><b>04</b><span>Maternidad</span></div>
          </div>
        </section>

        <nav className="mh150-exp-chapter-nav" aria-label="Capítulos de cobertura">
          {chapters.map((c) => (
            <a key={c.id} href={`#mh150-${c.id}`} data-chapter-link={`mh150-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#mh150-incluido" data-chapter-link="mh150-incluido"><span>06</span>Beneficios</a>
          <a href="#mh150-carencias" data-chapter-link="mh150-carencias"><span>07</span>Carencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`mh150-${c.id}`}
            className={`mh150-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}
          >
            <div className="mh150-exp-chapter-number" aria-hidden="true">{c.number}</div>
            <div className="mh150-exp-chapter-image mh150-exp-reveal">
              <Image
                src={c.image}
                alt={c.imageAlt}
                fill
                sizes="(max-width: 980px) 100vw, 45vw"
                unoptimized
                style={{
                  ...(c.imagePosition ? { "--img-pos": c.imagePosition } as React.CSSProperties : {}),
                  ...(c.imagePositionMobile ? { "--img-pos-mobile": c.imagePositionMobile } as React.CSSProperties : {}),
                }}
              />
            </div>
            <div className="mh150-exp-chapter-copy mh150-exp-reveal">
              <span className={`mh150-exp-eyebrow${c.theme === "teal" ? " light" : ""}`}>{c.eyebrow}</span>
              <h2>{c.title}</h2>
              <p className="mh150-exp-lead">{c.lead}</p>
              <ul>
                {c.essentials.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {c.id === "medicinas" && (
                <div className="mh150-exp-pharmacy-logos" aria-label="Farmacias afiliadas: Pharmacy's, Sana Sana, Medicity y Fybeca">
                  <Image src="/farmacia-pharmacys.png" alt="Pharmacy's" width={978} height={328} unoptimized />
                  <Image src="/farmacia-sanasana.png" alt="Farmacias Sana Sana" width={1850} height={389} unoptimized />
                  <Image src="/farmacia-medicity.png" alt="Medicity" width={291} height={58} unoptimized />
                  <Image src="/farmacia-fybeca.png" alt="Farmacias Fybeca" width={598} height={222} unoptimized />
                </div>
              )}
              <button type="button" className="mh150-exp-text-button" onClick={() => openDialog(c.id)}>
                Ver detalles completos <span>↗</span>
              </button>
              {c.conditions.length > 0 && (
                <details style={{ marginTop: 26 }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 14 }}>Condiciones y topes adicionales</summary>
                  <ul style={{ marginTop: 14, display: "grid", gap: 14, fontSize: 14 }}>
                    {c.conditions.map((cond) => (
                      <li key={cond.label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                        <span style={{ opacity: 0.85 }}>{cond.label}</span>
                        <strong style={{ color: "var(--mh150-teal)" }}>{cond.value}</strong>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </section>
        ))}

        <section className="mh150-exp-included" id="mh150-incluido">
          <div className="mh150-exp-benefits-panel">
            <div className="mh150-exp-benefits-head mh150-exp-reveal">
              <span className="mh150-exp-eyebrow light">BENEFICIOS HUMANA</span>
              <h2>Más formas de acompañarte.</h2>
              <p>Beneficios adicionales que complementan tu plan MH150, sin costo adicional a la facturación.</p>
            </div>
            <div className="mh150-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en el plan MH150">
              {featuredBenefits.map(({ iconKey, title, detail }, i) => (
                <article className="mh150-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh150-exp-benefit-symbol" aria-hidden="true"><Icon name={iconKey as keyof typeof iconMap} /></span>
                  <h3>{title}<br /><small style={{ fontWeight: 500, opacity: 0.7, fontSize: 12 }}>{detail}</small></h3>
                  <span className="mh150-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh150-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en el plan MH150">
              <div className="mh150-exp-benefits-carousel-track" style={{ transform: `translateX(-${benefitIndex * 100}%)` }}>
                {featuredBenefits.map(({ iconKey, title }) => (
                  <article className="mh150-exp-benefits-carousel-card" role="listitem" key={title}>
                    <span className="mh150-exp-benefit-symbol" aria-hidden="true"><Icon name={iconKey as keyof typeof iconMap} /></span>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
              <div className="mh150-exp-benefits-carousel-controls">
                <button type="button" onClick={prevBenefit} aria-label="Beneficio anterior">‹</button>
                <div className="mh150-exp-benefits-carousel-dots">
                  {featuredBenefits.map(({ title }, i) => (
                    <button type="button" key={title} className={i === benefitIndex ? "active" : ""} aria-label={`Ir al beneficio ${title}`} onClick={() => goToBenefit(i)} />
                  ))}
                </div>
                <button type="button" onClick={nextBenefit} aria-label="Siguiente beneficio">›</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mh150-exp-waiting" id="mh150-carencias">
          <div className="mh150-exp-waiting-copy mh150-exp-reveal">
            <span className="mh150-exp-eyebrow">CONOCE CUÁNDO EMPIEZA TU PROTECCIÓN</span>
            <h2>Tu cobertura, clara desde el inicio.</h2>
            <p>
              Una carencia es el tiempo que debe transcurrir desde tu afiliación antes de poder usar
              determinadas prestaciones del plan. Estos son los periodos generales de MH150; para
              preexistencias, la cobertura crece de forma progresiva (ver detalle en la sección siguiente).
            </p>
          </div>
          <div className="mh150-exp-waiting-grid" role="list" aria-label="Periodos generales de carencia del plan MH150">
            {waitingPeriods.map((w, i) => (
              <article className="mh150-exp-waiting-card mh150-exp-reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} role="listitem" key={w.title}>
                <div className="mh150-exp-waiting-num"><strong>{w.period.split(" ")[0]}</strong><span>{w.period.split(" ")[1] ?? ""}</span></div>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
          <p className="mh150-exp-waiting-note mh150-exp-reveal">Aplican las condiciones particulares y la vigencia establecida en el contrato de cada afiliación.</p>
        </section>

        <section className="mh150-exp-vault">
          <div className="mh150-exp-vault-copy mh150-exp-reveal">
            <span className="mh150-exp-eyebrow light">CLARIDAD ANTES DE ELEGIR</span>
            <h2>Los detalles importan.<br />Por eso están aquí.</h2>
            <p>Consulta condiciones, límites y coberturas adicionales sin interrumpir la experiencia principal.</p>
          </div>
          <div className="mh150-exp-accordions mh150-exp-reveal">
            <details>
              <summary>Preexistencias, discapacidad y continuidad <span>+</span></summary>
              <div className="mh150-exp-accordion-grid">
                {specialCases.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Prevención y bienestar <span>+</span></summary>
              <div className="mh150-exp-accordion-grid">
                {preventionCoverages.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Rehabilitación y ayudas técnicas <span>+</span></summary>
              <div className="mh150-exp-accordion-grid">
                {rehabCoverages.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Otras condiciones cubiertas <span>+</span></summary>
              <div className="mh150-exp-accordion-grid">
                {otherConditions.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="mh150-exp-waiting" id="mh150-faq">
          <div className="mh150-exp-waiting-copy mh150-exp-reveal">
            <span className="mh150-exp-eyebrow">PREGUNTAS FRECUENTES</span>
            <h2>Todo lo que necesitas saber.</h2>
          </div>
          <div className="mh150-exp-accordions mh150-exp-reveal" style={{ maxWidth: 900 }}>
            {faqItems.map((item) => (
              <details key={item.question}>
                <summary>{item.question} <span>+</span></summary>
                <p style={{ padding: "0 0 26px", color: "var(--mh150-muted)", lineHeight: 1.65, fontSize: 15 }}>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mh150-exp-finale" id="mh150-cierre">
          <div className="mh150-exp-finale-rings" aria-hidden="true" />
          <div className="mh150-exp-finale-copy mh150-exp-reveal">
            <span className="mh150-exp-eyebrow light">MH150 · PLAN PREMIUM</span>
            <h2>Protege hoy a quienes más amas.</h2>
            <p>Cotiza MH150 y dale a tu familia el mayor respaldo posible, con el acompañamiento de Humana.</p>
            <div className="mh150-exp-finale-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}><ShoppingCart size={18} /> Cotizar plan</button>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Hablar con asesor</a>
            </div>
            {quoted && (
              <div className="mh150-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
            <div className="mh150-exp-contact">
              {contactChannels.map(({ iconKey, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon name={iconKey as keyof typeof iconMap} /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="mh150-exp-trust"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
            <p style={{ marginTop: 8 }}><Link className="ghost-button" href="/planes-medicos">Ver todos los planes</Link></p>
          </div>
          <div className="mh150-exp-finale-mark" aria-hidden="true"><span>MH</span><strong>150</strong></div>
        </section>

        <div className="mh50-quick-actions">
          {faqOpen && (
            <div className="mh50-quick-faq" role="dialog" aria-label="Chat de preguntas frecuentes de MH150">
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

        <dialog className="mh150-exp-dialog" ref={dialogRef} onClose={() => setActiveChapterId(null)}>
          <button type="button" className="mh150-exp-dialog-close" onClick={closeDialog} aria-label="Cerrar">×</button>
          <span className="mh150-exp-eyebrow">DETALLE DEL PLAN</span>
          <h2>{activeChapter?.dialogTitle}</h2>
          <div className="mh150-exp-dialog-body">
            <p>{activeChapter?.dialogLead}</p>
            <ul>
              {activeChapter?.detailItems.map((item) => (
                <li key={item.label}><ShieldPlus /> <span><strong>{item.value}</strong> · {item.label}</span></li>
              ))}
            </ul>
          </div>
        </dialog>
      </div>
    </SiteShell>
  );
}
