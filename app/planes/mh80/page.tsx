"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Ambulance, Baby, Bone, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, Home as HomeIcon,
  MessageCircle, Phone, PhoneCall, Ribbon,
  ShieldCheck, ShieldPlus, Sparkles, Syringe, Users, Video, Wallet,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import {
  chapters, contactChannels, essenceStats, faqs, featuredBenefits,
  otherConditions, planIdentity, preventionCoverages, rehabCoverages,
  specialCases, waitingPeriods,
} from "./mh80Data";

/* Mapa de íconos: mh80Data.ts guarda solo el nombre del ícono (string) para
   mantener los datos como constantes serializables; aquí se resuelven a los
   componentes reales de lucide-react. */
const iconMap = {
  Activity, Ambulance, Baby, Bone, Cross,
  FlaskConical, HandHeart, HeartHandshake, HeartPulse, HomeIcon,
  MessageCircle, Phone, PhoneCall, Ribbon,
  ShieldCheck, ShieldPlus, Sparkles, Syringe, Users, Video, Wallet,
} as const;

function Icon({ name }: { name: keyof typeof iconMap }) {
  const Cmp = iconMap[name];
  return <Cmp aria-hidden="true" />;
}

/* Cadenas de farmacia de referencia para el bloque visual del capítulo de
   Medicinas. Solo texto (chips), sin logos reales, hasta contar con arte
   final del cliente. */
const pharmacyChips = ["Pharmacy's", "Medicity", "Fybeca", "Sana Sana"];

export default function Mh80Page() {
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
          <div className="mh80-exp-hero-copy">
            <span className="mh80-exp-eyebrow light">PLAN FAMILIAR · METROHUMANA</span>
            <h1>MH<span>80</span></h1>
            <p className="mh80-exp-hero-line">Plan Familiar MH80</p>
            <p className="mh80-exp-hero-body">
              Una cobertura pensada para acompañar a tu familia en cada momento importante:
              protección amplia, confiable y accesible para familias jóvenes, padres con hijos y parejas.
            </p>
            <div className="mh80-exp-hero-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}>Cotiza tu plan</button>
              <a className="ghost-button" href="#mh80-cobertura">Conoce tu cobertura</a>
            </div>
            {quoted && (
              <div className="mh80-exp-confirm" role="status" style={{ maxWidth: 520, marginTop: 20 }}>
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
              </div>
            )}
          </div>
          <div className="mh80-exp-gallery" aria-label="Momentos de protección familiar MH80">
            <figure className="mh80-exp-photo card-a">
              <Image src="/plan-mh80-hero.jpeg" alt="Familia protegida por MH80" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh80-exp-photo card-b">
              <Image src="/mh50-ambulatoria.jpg" alt="Consulta médica cercana en familia" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh80-exp-photo card-c">
              <Image src="/mh50-hospitalizacion.jpg" alt="Atención hospitalaria cálida y segura" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh80-exp-scroll-cue" href="#mh80-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh80-exp-essence" id="mh80-esencia">
          <div className="mh80-exp-eyebrow light mh80-exp-reveal">MH80 EN TRES IDEAS</div>
          <h2 className="mh80-exp-display mh80-exp-reveal">Tranquilidad que se<br />siente en familia.</h2>
          <div className="mh80-exp-stat-stage">
            {essenceStats.map((stat) => (
              <article className="mh80-exp-stat mh80-exp-reveal" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label.split("\n").map((line, i) => <span key={i}>{line}<br /></span>)}</p>
              </article>
            ))}
          </div>
          <p className="mh80-exp-fineprint mh80-exp-reveal">Información resumida para fines demostrativos. Aplican las condiciones del plan {planIdentity.fullName}.</p>
        </section>

        <section className="mh80-exp-moments" id="mh80-cobertura">
          <span className="mh80-exp-giant-word" aria-hidden="true">FAMILIA</span>
          <div className="mh80-exp-moments-copy mh80-exp-reveal">
            <span className="mh80-exp-eyebrow">TU COBERTURA, EXPLICADA</span>
            <h2>Cinco momentos.<br />Un respaldo familiar.</h2>
            <p>Menos letra pequeña. Más claridad sobre cómo MH80 acompaña a tu familia, desde una consulta hasta una emergencia.</p>
            <div className="mh80-exp-signals" aria-label="Datos principales de los cinco momentos">
              <span><strong>80%</strong> hospitalización</span>
              <span><strong>70%</strong> libre elección</span>
              <span><strong>70%+</strong> medicinas</span>
              <span><strong>$4.000</strong> maternidad cubierta</span>
            </div>
          </div>
          <div className="mh80-exp-compass mh80-exp-reveal" aria-label="Los cinco momentos de protección de MH80">
            <svg viewBox="0 0 520 520" aria-hidden="true">
              <circle cx="260" cy="260" r="198" />
              <circle cx="260" cy="260" r="132" />
              <path d="M260 62V458M62 260H458" />
            </svg>
            <div className="mh80-exp-compass-core"><small>PLAN</small><strong>MH80</strong><span>Metrohumana</span></div>
            <div className="mh80-exp-compass-node node-one"><b>01</b><span>Hospitalización</span></div>
            <div className="mh80-exp-compass-node node-two"><b>02</b><span>Atención ambulatoria</span></div>
            <div className="mh80-exp-compass-node node-three"><b>03</b><span>Medicinas</span></div>
            <div className="mh80-exp-compass-node node-four"><b>04</b><span>Maternidad</span></div>
          </div>
        </section>

        <nav className="mh80-exp-chapter-nav" aria-label="Capítulos de cobertura">
          <a href="#mh80-esencia" data-chapter-link="mh80-esencia"><span>·</span>Resumen</a>
          {chapters.map((c) => (
            <a key={c.id} href={`#mh80-${c.id}`} data-chapter-link={`mh80-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#mh80-incluido" data-chapter-link="mh80-incluido"><span>06</span>Beneficios</a>
          <a href="#mh80-carencias" data-chapter-link="mh80-carencias"><span>07</span>Carencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`mh80-${c.id}`}
            className={`mh80-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}
          >
            <div className="mh80-exp-chapter-number" aria-hidden="true">{c.number}</div>
            <div className="mh80-exp-chapter-image mh80-exp-reveal">
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
            <div className="mh80-exp-chapter-copy mh80-exp-reveal">
              <span className={`mh80-exp-eyebrow${c.theme === "teal" ? " light" : ""}`}>{c.eyebrow}</span>
              <h2>{c.title}</h2>
              <p className="mh80-exp-lead">{c.lead}</p>
              <ul>
                {c.essentials.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {c.id === "medicinas" && (
                <div className="mh80-exp-pharmacy-logos" aria-label="Red de farmacias de referencia">
                  {pharmacyChips.map((name) => (
                    <span className="mh80-exp-pharmacy-chip" key={name}>{name}</span>
                  ))}
                </div>
              )}
              <button type="button" className="mh80-exp-text-button" onClick={() => openDialog(c.id)}>
                Ver detalles completos <span>↗</span>
              </button>
              {c.conditions.length > 0 && (
                <details style={{ marginTop: 26 }}>
                  <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 14 }}>Condiciones y topes adicionales</summary>
                  <ul style={{ marginTop: 14, display: "grid", gap: 10, fontSize: 14, opacity: 0.85 }}>
                    {c.conditions.map((cond) => (
                      <li key={cond.label} style={{ display: "flex", justifyContent: "space-between", gap: 16 }}>
                        <span>{cond.label}</span><strong style={{ whiteSpace: "nowrap" }}>{cond.value}</strong>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
          </section>
        ))}

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
              <button type="button" className="primary-button" onClick={handleQuoteClick}>Cotizar plan</button>
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
            <Link className="mh80-exp-finale-back" href="/planes">Ver todos los planes</Link>
          </div>
          <div className="mh80-exp-finale-mark" aria-hidden="true"><span>MH</span><strong>80</strong></div>
        </section>

        <dialog className="mh80-exp-dialog" ref={dialogRef} onClose={() => setActiveChapterId(null)}>
          <button type="button" className="mh80-exp-dialog-close" onClick={closeDialog} aria-label="Cerrar">×</button>
          <span className="mh80-exp-eyebrow">DETALLE DEL PLAN</span>
          <h2>{activeChapter?.dialogTitle}</h2>
          <div className="mh80-exp-dialog-body">
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
