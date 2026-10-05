"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Ambulance, Baby, Bone, Building2, Cpu, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  Mail, MessageCircle, Phone, PhoneCall, Ribbon, Scan,
  ShieldCheck, ShieldPlus, ShoppingCart, Sparkles, Syringe, Target, Users, Video, Wallet, X, Zap,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  chapters, contactChannels, faqs, featuredBenefits, keyStats,
  otherConditions, preventionCoverages, rehabCoverages,
  robotSurgery, specialCases, waitingPeriods,
} from "./mh80Data";

/* Los 4 módulos de cobertura que pide mostrar la sección "Una protección
   diseñada alrededor de tu vida": Hospitalización, Atención ambulatoria,
   Medicinas y Maternidad. Emergencias queda fuera de esta grilla (se
   mantiene su información en el resto del sitio/plan), por diseño
   explícito de esta sección. */
const coverageModules = chapters.slice(0, 4);

/* Mapa de íconos: mh80Data.ts guarda solo el nombre del ícono (string) para
   mantener los datos como constantes serializables; aquí se resuelven a los
   componentes reales de lucide-react. */
const iconMap = {
  Activity, Ambulance, Baby, Bone, Building2, Cpu, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, HomeIcon,
  Mail, MessageCircle, Phone, PhoneCall, Ribbon,
  ShieldCheck, ShieldPlus, Sparkles, Syringe, Target, Users, Video, Wallet,
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
    question: "¿Qué cubre la cirugía robótica?",
    answer: "MH80 es el único plan del mercado con esta cobertura 🤖: 80% en procedimientos de cirugía robótica mínimamente invasiva, hasta la suma máxima contratada.",
  },
  {
    question: "¿Qué cubre la hospitalización?",
    answer: "Tienes un respaldo completo 🏥: 80% en Red Metrohumana y 70% por libre elección, sin límite de días hospitalarios.",
  },
  {
    question: "¿Cómo funciona la cobertura de medicinas?",
    answer: "Así de simple 💊: desde 70% en la red de farmacias de convenio de Humana, según el prestador y la modalidad de acceso.",
  },
  {
    question: "¿Cómo contacto a Humana?",
    answer: "¡Con gusto! 😊 Puedes escribirnos por WhatsApp al +593 2401 7002, llamar a nuestra línea gratuita 1800 48 62 62, o enviarnos un correo a servicioalcliente@humana.med.ec.",
  },
];

export default function Mh80Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [quoted, setQuoted] = useState(false);
  const [benefitIndex, setBenefitIndex] = useState(0);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: "bot" | "user"; text: string }[]>([]);
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const CHAT_GREETING = "¡Hola! 👋 Soy tu asistente de Humana para MH80. Toca una de estas preguntas y te respondo al instante 😊";
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

  const handleQuoteClick = () => setQuoted(true);
  const toggleModule = (id: string) => setExpandedModule((current) => (current === id ? null : id));

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
      const percent = max ? window.scrollY / max : 0;
      if (progressRef.current) {
        progressRef.current.style.width = `${percent * 100}%`;
      }
      if (galleryRef.current && !reducedMotion) {
        const offset = Math.min(window.scrollY * 0.12, 60);
        galleryRef.current.style.transform = `translateY(${offset}px)`;
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
      root.querySelectorAll(".mh80-exp-reveal").forEach((el) => el.classList.add("is-visible"));
      return () => window.removeEventListener("scroll", onScroll);
    }

    root.classList.add("is-motion-ready");
    const revealNodes = Array.from(root.querySelectorAll<HTMLElement>(".mh80-exp-reveal"));
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
    <SiteShell title="MH80 · Plan Familiar Metrohumana 80.000">
      <div className="mh80-exp" ref={rootRef}>
        <div className="mh80-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh80-exp-hero" id="mh80-inicio">
          <div className="mh80-particles" aria-hidden="true" />
          <div className="mh80-exp-hero-copy">
            <Image className="plan-official-logo" src="https://humana.med.ec/wp-content/uploads/2020/12/1-metro-humana-80-215.png" alt="Logo MetroHumana 80" width={120} height={48} unoptimized />
            <span className="mh80-robotic-hero-badge"><Cpu size={14} aria-hidden="true" /> MH80 · TECNOLOGÍA MÉDICA AVANZADA</span>
            <h1 className="mh80-exp-hero-line">La medicina del futuro ahora protege a tu familia.</h1>
            <p className="mh80-exp-hero-body">
              Un plan diseñado para protegerte con cobertura médica avanzada, innovación tecnológica
              y acceso a soluciones de salud de nueva generación.
            </p>
            <div className="mh80-exp-hero-actions">
              <a className="mh80-robotic-cta" href="#mh80-robotica"><Zap size={16} aria-hidden="true" /> Conoce la cirugía robótica</a>
              <button type="button" className="ghost-button" onClick={handleQuoteClick}><ShoppingCart size={18} /> Cotiza MH80</button>
            </div>
            {quoted && (
              <div className="mh80-exp-confirm" role="status" style={{ maxWidth: 520, marginTop: 20 }}>
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
          </div>
          <div className="mh80-hero-hologram" aria-hidden="true">
            <span className="mh80-hero-hologram-ring ring-1" />
            <span className="mh80-hero-hologram-ring ring-2" />
            <span className="mh80-hero-hologram-ring ring-3" />
            <span className="mh80-hero-hologram-orbit" />
            <span className="mh80-hero-hologram-core"><Cpu /></span>
            <span className="mh80-hero-hologram-beam beam-1" />
            <span className="mh80-hero-hologram-beam beam-2" />
            <span className="mh80-hero-hologram-reticle top" />
            <span className="mh80-hero-hologram-reticle bottom" />
            <span className="mh80-hero-hologram-readout r1"><strong>{robotSurgery.stats[0].value}</strong><small>Cirugía robótica</small></span>
            <span className="mh80-hero-hologram-readout r2"><strong>{robotSurgery.stats[1].value}</strong><small>Robot Da Vinci</small></span>
          </div>
          <div className="mh80-exp-gallery" ref={galleryRef} aria-label="Momentos de protección familiar MH80">
            <figure className="mh80-exp-photo card-a">
              <Image src="/plan-mh80-hero.jpeg" alt="Familia protegida por MH80" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh80-exp-photo card-b">
              <Image src="/images/planes/mh80/mh80-photo-recepcion.jpg" alt="Recepción de un centro médico premium" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh80-exp-photo card-c">
              <Image src="/mh50-hospitalizacion.jpg" alt="Atención hospitalaria cálida y segura" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh80-exp-scroll-cue" href="#mh80-robotica"><span />Desliza para descubrir</a>
        </section>

        <nav className="mh80-exp-chapter-nav mh80-robotic-nav" aria-label="Secciones del plan MH80">
          <a href="#mh80-robotica" data-chapter-link="mh80-robotica" className="mh80-robotic-nav-link"><span><Cpu size={11} aria-hidden="true" /></span>El futuro</a>
          <a href="#mh80-coberturas" data-chapter-link="mh80-coberturas"><span>02</span>Coberturas</a>
          <a href="#mh80-datos" data-chapter-link="mh80-datos"><span>03</span>Datos clave</a>
          <a href="#mh80-incluido" data-chapter-link="mh80-incluido"><span>04</span>Beneficios</a>
          <a href="#mh80-carencias" data-chapter-link="mh80-carencias"><span>05</span>Carencias</a>
          <a href="#mh80-preguntas" data-chapter-link="mh80-preguntas"><span>06</span>Preguntas</a>
        </nav>

        <section className="mh80-robotic" id="mh80-robotica">
          <div className="mh80-robotic-grid" aria-hidden="true" />
          <div className="mh80-robotic-glow" aria-hidden="true" />
          <div className="mh80-robotic-copy mh80-exp-reveal">
            <span className="mh80-robotic-badge"><Cpu size={14} aria-hidden="true" /> {robotSurgery.badge}</span>
            <span className="mh80-exp-eyebrow light">{robotSurgery.eyebrow}</span>
            <h2>La precisión de la tecnología al servicio de tu salud.</h2>
            <p className="mh80-robotic-lead">{robotSurgery.lead}</p>
            <div className="mh80-robotic-tags" aria-hidden="true">
              {robotSurgery.capabilityTags.map((t) => <span key={t}>{t}</span>)}
            </div>
            <div className="mh80-robotic-stats">
              {robotSurgery.stats.map((s) => (
                <div key={s.label} className="mh80-robotic-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mh80-robotic-visual mh80-exp-reveal">
            <div className="mh80-robotic-core" aria-hidden="true">
              <span className="mh80-robotic-ring ring-1" />
              <span className="mh80-robotic-ring ring-2" />
              <span className="mh80-robotic-ring ring-3" />
              <span className="mh80-robotic-core-icon"><Cpu /></span>
            </div>
            <div className="mh80-robotic-scanline" aria-hidden="true" />
            <div className="mh80-robotic-crosshair top-left" aria-hidden="true" />
            <div className="mh80-robotic-crosshair top-right" aria-hidden="true" />
            <div className="mh80-robotic-crosshair bottom-left" aria-hidden="true" />
            <div className="mh80-robotic-crosshair bottom-right" aria-hidden="true" />
            <div className="mh80-robotic-floaters" aria-label="Ventajas de la cirugía robótica MH80">
              {robotSurgery.floatingBadges.map((b, i) => (
                <span
                  className={`mh80-robotic-floater float-${i + 1} mh80-exp-reveal`}
                  style={{ "--reveal-delay": `${i * 120}ms` } as React.CSSProperties}
                  key={b.label}
                >
                  <Icon name={b.iconKey as keyof typeof iconMap} /> {b.label}
                </span>
              ))}
            </div>
          </div>

          <div className="mh80-robotic-specialties mh80-exp-reveal">
            <span className="mh80-robotic-specialties-label"><Scan size={14} aria-hidden="true" /> ¿Qué tipo de cirugías realiza?</span>
            <div className="mh80-robotic-specialty-cards" role="list">
              {robotSurgery.specialties.map((s) => (
                <article className="mh80-robotic-specialty-card" role="listitem" key={s.name}>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                  <ul className="mh80-robotic-specialty-benefits">
                    {s.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="mh80-robotic-photo mh80-exp-reveal">
            <div className="mh80-robotic-photo-frame">
              <Image
                src="/images/planes/mh80/mh80-photo-quirofano.jpg"
                alt="Quirófano equipado con tecnología médica avanzada"
                fill
                sizes="(max-width: 980px) 100vw, 80vw"
                unoptimized
              />
              <span className="mh80-robotic-photo-caption">Quirófano equipado con tecnología de última generación</span>
            </div>
          </div>
        </section>

        <section className="mh80-modules" id="mh80-coberturas">
          <div className="mh80-modules-head mh80-exp-reveal">
            <span className="mh80-exp-eyebrow light">SISTEMA DE COBERTURA MH80</span>
            <h2>Una protección diseñada alrededor de tu vida.</h2>
          </div>
          <div className="mh80-modules-grid" role="list">
            {coverageModules.map((m, i) => (
              <article
                className="mh80-module mh80-exp-reveal"
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
                role="listitem"
                key={m.id}
              >
                <div className="mh80-module-image">
                  <Image
                    src={m.image}
                    alt={m.imageAlt}
                    fill
                    sizes="(max-width: 980px) 100vw, 45vw"
                    unoptimized
                    style={{
                      ...(m.imagePosition ? { "--img-pos": m.imagePosition } as React.CSSProperties : {}),
                      ...(m.imagePositionMobile ? { "--img-pos-mobile": m.imagePositionMobile } as React.CSSProperties : {}),
                    }}
                  />
                  <span className="mh80-module-number">{m.number}</span>
                </div>
                <div className="mh80-module-copy">
                  <span className="mh80-exp-eyebrow">{m.eyebrow}</span>
                  <h3>{m.title}</h3>
                  <p>{m.lead}</p>
                  <ul>
                    {m.essentials.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <button type="button" className="mh80-module-toggle" onClick={() => toggleModule(m.id)} aria-expanded={expandedModule === m.id}>
                    {expandedModule === m.id ? "Ocultar detalles" : "Explorar detalles"} <span>{expandedModule === m.id ? "−" : "+"}</span>
                  </button>
                  {expandedModule === m.id && (
                    <ul className="mh80-module-details">
                      {m.detailItems.map((d) => (
                        <li key={d.label}><span>{d.label}</span><strong>{d.value}</strong></li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mh80-keystats" id="mh80-datos">
          <div className="mh80-particles" aria-hidden="true" />
          <div className="mh80-keystats-head mh80-exp-reveal">
            <span className="mh80-exp-eyebrow light">DATOS CLAVE MH80</span>
            <h2>Cifras que respaldan tu decisión.</h2>
          </div>
          <div className="mh80-keystats-grid" role="list">
            {keyStats.map((s, i) => (
              <article className="mh80-keystat mh80-exp-reveal" style={{ "--reveal-delay": `${i * 100}ms` } as React.CSSProperties} role="listitem" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="mh80-exp-included" id="mh80-incluido">
          <div className="mh80-exp-benefits-panel">
            <div className="mh80-exp-benefits-head mh80-exp-reveal">
              <span className="mh80-exp-eyebrow light">BENEFICIOS HUMANA</span>
              <h2>Más formas de acompañarte.</h2>
              <p>Beneficios adicionales que complementan tu plan MH80, sin costo adicional a la facturación.</p>
            </div>
            <div className="mh80-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en el plan MH80">
              {featuredBenefits.map(({ iconKey, title, detail }, i) => (
                <article className="mh80-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh80-exp-benefit-symbol" aria-hidden="true"><Icon name={iconKey as keyof typeof iconMap} /></span>
                  <h3>{title}<br /><small style={{ fontWeight: 500, opacity: 0.7, fontSize: 12 }}>{detail}</small></h3>
                  <span className="mh80-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh80-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en el plan MH80">
              <div className="mh80-exp-benefits-carousel-track" style={{ transform: `translateX(-${benefitIndex * 100}%)` }}>
                {featuredBenefits.map(({ iconKey, title }) => (
                  <article className="mh80-exp-benefits-carousel-card" role="listitem" key={title}>
                    <span className="mh80-exp-benefit-symbol" aria-hidden="true"><Icon name={iconKey as keyof typeof iconMap} /></span>
                    <h3>{title}</h3>
                  </article>
                ))}
              </div>
              <div className="mh80-exp-benefits-carousel-controls">
                <button type="button" onClick={prevBenefit} aria-label="Beneficio anterior">‹</button>
                <div className="mh80-exp-benefits-carousel-dots">
                  {featuredBenefits.map(({ title }, i) => (
                    <button type="button" key={title} className={i === benefitIndex ? "active" : ""} aria-label={`Ir al beneficio ${title}`} onClick={() => goToBenefit(i)} />
                  ))}
                </div>
                <button type="button" onClick={nextBenefit} aria-label="Siguiente beneficio">›</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mh80-exp-waiting" id="mh80-carencias">
          <div className="mh80-exp-waiting-copy mh80-exp-reveal">
            <span className="mh80-exp-eyebrow">CONOCE CUÁNDO EMPIEZA TU PROTECCIÓN</span>
            <h2>Tu cobertura, clara desde el inicio.</h2>
            <p>
              Una carencia es el tiempo que debe transcurrir desde tu afiliación antes de poder usar
              determinadas prestaciones del plan. Estos son los periodos generales de MH80; para
              preexistencias, la cobertura crece de forma progresiva (ver detalle en la sección siguiente).
            </p>
          </div>
          <div className="mh80-exp-waiting-grid" role="list" aria-label="Periodos generales de carencia del plan MH80">
            {waitingPeriods.map((w, i) => (
              <article className="mh80-exp-waiting-card mh80-exp-reveal" style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties} role="listitem" key={w.title}>
                <div className="mh80-exp-waiting-num"><strong>{w.period.split(" ")[0]}</strong><span>{w.period.split(" ")[1] ?? ""}</span></div>
                <h3>{w.title}</h3>
              </article>
            ))}
          </div>
          <p className="mh80-exp-waiting-note mh80-exp-reveal">Aplican las condiciones particulares y la vigencia establecida en el contrato de cada afiliación.</p>
        </section>

        <section className="mh80-exp-vault">
          <div className="mh80-exp-vault-copy mh80-exp-reveal">
            <span className="mh80-exp-eyebrow light">CLARIDAD ANTES DE ELEGIR</span>
            <h2>Los detalles importan.<br />Por eso están aquí.</h2>
            <p>Consulta condiciones, límites y coberturas adicionales sin interrumpir la experiencia principal.</p>
          </div>
          <div className="mh80-exp-accordions mh80-exp-reveal">
            <details>
              <summary>Preexistencias, discapacidad y adulto mayor <span>+</span></summary>
              <div className="mh80-exp-accordion-grid">
                {specialCases.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Prevención y bienestar <span>+</span></summary>
              <div className="mh80-exp-accordion-grid">
                {preventionCoverages.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Rehabilitación y ayudas técnicas <span>+</span></summary>
              <div className="mh80-exp-accordion-grid">
                {rehabCoverages.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Otras condiciones cubiertas <span>+</span></summary>
              <div className="mh80-exp-accordion-grid">
                {otherConditions.map(({ iconKey, value, label }) => (
                  <article key={label}><Icon name={iconKey as keyof typeof iconMap} /><strong>{value}</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section className="mh80-exp-faq" id="mh80-preguntas">
          <div className="mh80-particles" aria-hidden="true" />
          <div className="mh80-exp-faq-copy mh80-exp-reveal">
            <span className="mh80-exp-eyebrow">PREGUNTAS FRECUENTES</span>
            <h2>Todo lo que quieres<br />saber sobre MH80.</h2>
          </div>
          <div className="mh80-exp-faq-list mh80-exp-reveal">
            {faqs.map((f) => (
              <details key={f.question}>
                <summary>{f.question} <span>+</span></summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mh80-exp-finale" id="mh80-cierre">
          <div className="mh80-exp-finale-rings" aria-hidden="true" />
          <div className="mh80-exp-finale-copy mh80-exp-reveal">
            <span className="mh80-exp-eyebrow light">MH80 · PLAN FAMILIAR</span>
            <h2>Protege hoy a quienes más amas.</h2>
            <p>Cotiza MH80 y da un paso más en la protección de tu familia, con el respaldo de Humana.</p>
            <div className="mh80-exp-finale-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}><ShoppingCart size={18} /> Cotizar plan</button>
              <a className="ghost-button" href="tel:1800486262">Hablar con asesor</a>
            </div>
            {quoted && (
              <div className="mh80-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
            <div className="mh80-exp-contact">
              {contactChannels.map(({ iconKey, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon name={iconKey as keyof typeof iconMap} /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="mh80-exp-trust"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
            <Link className="mh80-exp-finale-back" href="/planes-medicos">Ver todos los planes</Link>
          </div>
          <div className="mh80-exp-finale-mark" aria-hidden="true"><span>MH</span><strong>80</strong></div>
        </section>

        <div className="mh50-quick-actions">
          {faqOpen && (
            <div className="mh50-quick-faq" role="dialog" aria-label="Chat de preguntas frecuentes de MH80">
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
