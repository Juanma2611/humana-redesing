"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, Banknote, BarChart3, Briefcase, Building2, CircleDollarSign, Handshake, HeartPulse, Home as HomeIcon,
  LineChart, MessageCircle, PenLine, Phone, PhoneCall, Pill, PieChart, ShieldCheck, ShieldPlus, Stethoscope, Target, TrendingUp,
  Users, Video, WalletCards,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Decoración de fondo: siluetas de oficina (edificio, maletín, lápiz,     */
/* gráfico) muy sutiles, para reforzar la identidad corporativa de         */
/* Humana Business sin recargar el diseño.                                 */
/* ---------------------------------------------------------------------- */

function BusinessDecor({ tone }: { tone: "on-dark" | "on-light" }) {
  return (
    <div className={`business-decor ${tone}`} aria-hidden="true">
      <Building2 className="deco deco-building" />
      <Building2 className="deco deco-building-2" />
      <Briefcase className="deco deco-briefcase" />
      <PenLine className="deco deco-pen" />
      <BarChart3 className="deco deco-chart" />
      <LineChart className="deco deco-linechart" />
      <PieChart className="deco deco-piechart" />
      <TrendingUp className="deco deco-trending" />
      <Target className="deco deco-target" />
      <Handshake className="deco deco-handshake" />
    </div>
  );
}

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
    image: "/images/planes/business/business-oficina.jpg",
    imageAlt: "Equipo de oficina configurando su plan Humana Business",
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
    image: "/images/planes/business/business-retail.jpg",
    imageAlt: "Equipo de una tienda protegido por Humana Business",
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

  const activeChapter = chapters.find((c) => c.id === activeChapterId) ?? null;

  const openDialog = (id: string) => {
    setActiveChapterId(id);
    dialogRef.current?.showModal();
  };
  const closeDialog = () => dialogRef.current?.close();

  const handleQuoteClick = () => setQuoted(true);

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
          <BusinessDecor tone="on-dark" />
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
              <Image src="/images/planes/business/business-industrial.jpg" alt="Ingeniero y colaboradora protegidos en una planta industrial" fill sizes="(max-width: 980px) 60vw, 30vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-b">
              <Image src="/images/planes/business/business-oficina.jpg" alt="Equipo de oficina protegido por Humana Business" fill sizes="(max-width: 980px) 54vw, 26vw" unoptimized />
            </figure>
            <figure className="mh50-exp-photo card-c">
              <Image src="/images/planes/business/business-taller.jpg" alt="Técnicos de un taller automotriz protegidos por Humana Business" fill sizes="(max-width: 980px) 55vw, 26vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#business-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="business-esencia">
          <BusinessDecor tone="on-dark" />
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
          <BusinessDecor tone="on-light" />
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
        </nav>

        {chapters.map((c, i) => (
          <section
            key={c.id}
            id={`business-${c.id}`}
            className={`mh50-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}
          >
            <BusinessDecor tone={c.theme === "dark" || c.theme === "blue" ? "on-dark" : "on-light"} />
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

        <section className="business-contact-box mh50-exp-reveal">
          <div>
            <h3>¿Listo para armar el plan de tu empresa?</h3>
            <p>Contáctate con nosotros y personaliza tu plan Humana Business según las necesidades de tu equipo.</p>
          </div>
          <div className="business-contact-box-actions">
            <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Contáctate con nosotros</a>
            <button type="button" className="ghost-button" onClick={handleQuoteClick}>Personaliza tu plan Humana Business</button>
          </div>
        </section>

        <section className="mh50-exp-finale" id="business-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <BusinessDecor tone="on-dark" />
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
