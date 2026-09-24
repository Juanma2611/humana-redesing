"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, Banknote, Building2, CircleDollarSign, HeartHandshake, HeartPulse, Home as HomeIcon,
  Layers3, MessageCircle, Phone, PhoneCall, Pill, ShieldCheck, ShieldPlus, Sparkles, Stethoscope, TrendingUp,
  Users, Video, WalletCards,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Datos reales del plan Humana Business, extraídos de la presentación     */
/* oficial de producto. Plan configurable para pequeñas y medianas         */
/* empresas, sin las complejidades de un plan corporativo tradicional.     */
/* ---------------------------------------------------------------------- */

const essenceStats = [
  { value: "200K+", label: "afiliados confían\nen Humana" },
  { value: "$46M", label: "en reembolsos de gastos\nmédicos el último año" },
  { value: "170K+", label: "afiliados respaldados\na nivel nacional" },
];

const configOptions = [
  { icon: WalletCards, value: "$10.000 · $20.000 · $50.000", label: "Límites de cobertura a elegir por colaborador" },
  { icon: Banknote, value: "$100 · $150 · $180", label: "Deducible por persona, a elegir" },
  { icon: HeartPulse, value: "A elección", label: "Cobertura de maternidad" },
  { icon: CircleDollarSign, value: "60% · 70% · 80% · 90%", label: "Copagos hospitalario y ambulatorio" },
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
    id: "configura",
    number: "01",
    navLabel: "Arma tu plan",
    theme: "dark",
    image: "/humana-business-team-v2.png",
    imageAlt: "Equipo de trabajo protegido por Humana Business",
    eyebrow: "ARMA TU PLAN A LA MEDIDA",
    title: "Se puede seleccionar los beneficios, coberturas, porcentajes y copagos.",
    lead: "A diferencia de un plan corporativo tradicional negociado a la medida, Humana Business te permite combinar los atributos según las necesidades de tu empresa.",
    essentials: ["Límites desde $10.000, $20.000 o $50.000", "Deducibles de $100, $150 o $180", "Preexistencias cubiertas tras 3 meses, hasta el monto máximo"],
    dialogTitle: "Arma tu plan a la medida",
    dialogLead: "El producto está diseñado para que la pequeña y mediana empresa pueda realizar combinaciones de diferentes atributos según sus necesidades, con precios competitivos.",
    chips: [
      { icon: WalletCards, text: "Límites de cobertura: $10.000 · $20.000 · $50.000" },
      { icon: Banknote, text: "Deducible: $100 · $150 · $180 por persona" },
      { icon: HeartPulse, text: "Cobertura de maternidad a elección" },
      { icon: CircleDollarSign, text: "Copagos hospitalario y ambulatorio: 60% a 90%" },
    ],
  },
  {
    id: "red",
    number: "02",
    navLabel: "Red ambulatoria",
    theme: "blue",
    image: "/ph15-consultas.jpg",
    imageAlt: "Consulta médica en la red ambulatoria de Humana",
    eyebrow: "RED AMBULATORIA",
    title: "Atención médica oportuna y personalizada, sin pagar deducible.",
    lead: "Consultas médicas en Red CAM y Red Preferida, exámenes de diagnóstico y medicinas con descuentos en toda la red de farmacias.",
    essentials: ["Red CAM: cancelas únicamente el copago", "Red Preferida: doctores de alto nivel en todo el país", "Medicinas: 10% a 30% del valor en farmacias en convenio"],
    dialogTitle: "Red ambulatoria",
    dialogLead: "Consultas médicas sin pago de deducible ni reembolso, tanto en la Red CAM como en la Red Preferida, con acceso a más de 1.600 puntos de venta de farmacia a nivel nacional.",
    chips: [
      { icon: Stethoscope, text: "Red CAM: cancelas únicamente el copago" },
      { icon: Building2, text: "Red Preferida: consultas médicas privadas" },
      { icon: Pill, text: "Medicinas: 10% a 30% del valor en red de farmacias" },
      { icon: ShieldPlus, text: "Exámenes de diagnóstico: cancelas solo el % del examen" },
    ],
  },
  {
    id: "servicios",
    number: "03",
    navLabel: "Servicios adicionales",
    theme: "light",
    image: "/ph15-emergencias.jpg",
    imageAlt: "Servicio de asistencia médica de Humana Business",
    eyebrow: "SERVICIOS ADICIONALES",
    title: "Atención médica sin salir de casa o la oficina.",
    lead: "Teleconsulta médica, médico a domicilio y ambulancia terrestre, disponibles para tus colaboradores cuando los necesiten.",
    essentials: ["Teleconsulta médica: medicina general, interna y pediatría", "Médico a domicilio con receta digital", "Ambulancia terrestre coordinada por la red"],
    dialogTitle: "Servicios adicionales",
    dialogLead: "Comunícate al 1800 HUMANA (48 62 62) y nuestros asesores coordinarán un médico o una ambulancia según el caso, con vigencia de 24 horas para teleconsulta.",
    chips: [
      { icon: Video, text: "Teleconsulta: medicina general, interna y pediatría" },
      { icon: HomeIcon, text: "Médico a domicilio con receta digital" },
      { icon: Ambulance, text: "Ambulancia terrestre coordinada" },
      { icon: PhoneCall, text: "Activación por el 1800 HUMANA (48 62 62)" },
    ],
  },
  {
    id: "ventajas",
    number: "04",
    navLabel: "Ventajas empresa y equipo",
    theme: "warm",
    image: "/humana-business-team.jpg",
    imageAlt: "Colaboradores de una empresa protegidos por Humana Business",
    eyebrow: "MÁS QUE UN PLAN MÉDICO",
    title: "Cuidar a tu gente es la mejor inversión para tu negocio.",
    lead: "Bienestar para tu equipo, productividad para tu empresa. Una estrategia de bienestar, no solo un plan médico.",
    essentials: ["Disminución del ausentismo laboral", "Aumento del bienestar y la productividad", "Extensión de cobertura a familiares"],
    dialogTitle: "Ventajas para empresa y colaboradores",
    dialogLead: "Cuidar el capital humano es la mejor inversión para las empresas: reduce el ausentismo, aumenta el bienestar y fortalece la retención del talento.",
    chips: [
      { icon: TrendingUp, text: "Empresa: disminución del ausentismo" },
      { icon: HeartPulse, text: "Empresa: aumento del bienestar y la productividad" },
      { icon: Stethoscope, text: "Colaborador: atención médica oportuna y personalizada" },
      { icon: Users, text: "Colaborador: extensión de cobertura a familiares" },
    ],
  },
];

/* Ventajas para la empresa vs. ventajas para el colaborador */
const companyAdvantages = [
  { icon: TrendingUp, label: "Disminución del ausentismo" },
  { icon: HeartHandshake, label: "Aumento del bienestar y calidad de vida" },
  { icon: Sparkles, label: "Incremento de la productividad" },
  { icon: CircleDollarSign, label: "Deducción de impuestos" },
];

const employeeAdvantages = [
  { icon: Stethoscope, label: "Atención médica oportuna y personalizada" },
  { icon: Building2, label: "Acceso a la red más amplia de prestadores del país" },
  { icon: HomeIcon, label: "Médicos y medicinas a domicilio" },
  { icon: ShieldPlus, label: "Crédito en cobertura de emergencia por accidente al 100%" },
  { icon: Users, label: "Extensión de coberturas a familiares" },
];

/* Beneficios sin costo adicional destacados */
const featuredBenefits = [
  { icon: Video, title: "Teleconsulta médica 24h" },
  { icon: HomeIcon, title: "Médico a domicilio" },
  { icon: Ambulance, title: "Ambulancia terrestre" },
  { icon: Pill, title: "Red de más de 1.600 farmacias" },
  { icon: Users, title: "Extensión a familiares" },
  { icon: CircleDollarSign, title: "Precios competitivos" },
];

const differences = [
  { icon: Layers3, value: "Corporativo tradicional", label: "Traje a la medida: se puede negociar coberturas, porcentajes, prestadores y más" },
  { icon: WalletCards, value: "Plan Humana Business", label: "Se puede seleccionar los beneficios, coberturas, porcentajes y copagos" },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Phone, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

export default function HumanaBusinessPage() {
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
    <SiteShell title="Humana Business · Plan empresarial">
      <div className="mh50-exp" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="business-inicio">
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN EMPRESARIAL · HUMANA BUSINESS</span>
            <h1 className="is-long">Busi<span>ness</span></h1>
            <p className="mh50-exp-hero-line">Cuida a tu equipo,<br />fortalece tu negocio.</p>
            <p className="mh50-exp-hero-body">
              Si tu gente está bien, tu negocio crecerá bien. Cuidar el capital humano es la mejor
              inversión para las empresas, sin las complejidades de un plan corporativo tradicional.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#business-cierre">Solicita asesoría empresarial</a>
              <a className="ghost-button" href="#business-configura">Conoce sus beneficios</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Momentos de bienestar empresarial">
            <figure className="mh50-exp-photo card-a">
              <Image src="/humana-business-team-v2.png" alt="Equipo de trabajo protegido por Humana Business" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-b">
              <Image src="/humana-business-team.jpg" alt="Colaboradores de una empresa saludable" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-c">
              <Image src="/ph15-consultas.jpg" alt="Atención médica oportuna para colaboradores" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#business-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="business-esencia">
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">HUMANA BUSINESS EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Más que un plan médico,<br />una estrategia de bienestar.</h2>
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

        <section className="mh50-exp-moments" id="business-configura">
          <span className="mh50-exp-giant-word" aria-hidden="true">EQUIPO</span>
          <div className="mh50-exp-moments-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">ARMA TU PLAN A LA MEDIDA</span>
            <h2>Configura la cobertura<br />ideal para tu empresa.</h2>
            <p>Combina límites, deducibles, copagos y cobertura de maternidad según las necesidades de tu equipo.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="mh50-exp-accordion-grid on-light">
              {configOptions.map(({ icon: Icon, value, label }) => (
                <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
              ))}
            </div>
          </div>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos de cobertura de Humana Business">
          {chapters.map((c) => (
            <a key={c.id} href={`#business-${c.id}`} data-chapter-link={`business-${c.id}`}><span>{c.number}</span>{c.navLabel}</a>
          ))}
          <a href="#business-incluido" data-chapter-link="business-incluido"><span>05</span>Beneficios</a>
          <a href="#business-diferencias" data-chapter-link="business-diferencias"><span>06</span>Diferencias</a>
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`business-${c.id}`}
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

        <section className="mh50-exp-included" id="business-incluido">
          <div className="mh50-exp-benefits-panel">
            <div className="mh50-exp-benefits-head mh50-exp-reveal">
              <span className="mh50-exp-eyebrow light">BENEFICIOS PARA TU EQUIPO</span>
              <h2>Más formas de cuidar a tu gente.</h2>
              <p>Servicios que forman parte de tu plan Humana Business, sin costo adicional.</p>
            </div>
            <div className="mh50-exp-benefits-grid" role="list" aria-label="Beneficios incluidos en Humana Business">
              {featuredBenefits.map(({ icon: Icon, title }, i) => (
                <article className="mh50-exp-reveal" style={{ "--reveal-delay": `${(i % 6) * 60}ms` } as React.CSSProperties} role="listitem" key={title}>
                  <span className="mh50-exp-benefit-symbol" aria-hidden="true"><Icon /></span>
                  <h3>{title}</h3>
                  <span className="mh50-exp-benefit-arrow" aria-hidden="true">›</span>
                </article>
              ))}
            </div>
            <div className="mh50-exp-benefits-carousel" role="list" aria-label="Beneficios incluidos en Humana Business">
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

        <section className="mh50-exp-waiting" id="business-diferencias">
          <div className="mh50-exp-waiting-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">EMPRESA Y COLABORADOR</span>
            <h2>Ventajas para todos los que cuidas.</h2>
            <p>Beneficios pensados tanto para tu empresa como para cada uno de tus colaboradores.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal">
            <details open>
              <summary>Ventajas para la empresa <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {companyAdvantages.map(({ icon: Icon, label }) => (
                  <article key={label}><Icon /><strong>Beneficio</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details open>
              <summary>Ventajas para tus colaboradores <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {employeeAdvantages.map(({ icon: Icon, label }) => (
                  <article key={label}><Icon /><strong>Beneficio</strong><span>{label}</span></article>
                ))}
              </div>
            </details>
            <details>
              <summary>Diferencias frente al corporativo tradicional <span>+</span></summary>
              <div className="mh50-exp-accordion-grid">
                {differences.map(({ icon: Icon, value, label }) => (
                  <article key={value}><Icon /><strong>{value}</strong><span>{label}</span></article>
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
            <h2>Líderes en el segmento corporativo de medicina prepagada.</h2>
            <p>Formamos parte del grupo más importante en prestaciones médicas de Ecuador, con clientes en telecomunicaciones, petróleo, servicios y más.</p>
            <strong>170.000+</strong>
            <span>afiliados respaldados a nivel nacional</span>
          </div>
        </section>

        <section className="mh50-exp-finale" id="business-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">HUMANA BUSINESS · PLAN EMPRESARIAL</span>
            <h2>El bienestar de tus colaboradores impulsa tu empresa.</h2>
            <p>Arma el plan ideal para tu empresa y empieza a cuidar a tu equipo hoy mismo.</p>
            <div className="mh50-exp-finale-actions">
              <button type="button" className="primary-button" onClick={handleQuoteClick}>Solicita asesoría empresarial</button>
              <Link className="ghost-button" href="/planes">Ver todos los planes</Link>
            </div>
            {quoted && (
              <div className="mh50-exp-confirm" role="status">
                <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor empresarial de Humana te contactará. No se envió información real.</span>
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
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>PLAN</span><strong className="is-long">BUSINESS</strong></div>
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
