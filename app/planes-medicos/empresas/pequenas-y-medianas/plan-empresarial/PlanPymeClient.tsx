"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, Banknote, Briefcase, HeartHandshake, HeartPulse, MessageCircle,
  PhoneCall, ShieldCheck, Stethoscope, TrendingUp, Users, WalletCards,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { cuadroA, cuadroB } from "@/lib/empresa-cuadros";

/* Misma familia visual y estructura que Humana Business
   (plan-humana-business/HumanaBusinessClient.tsx), con los datos oficiales
   del Plan Pyme ya existentes en el sitio. No se inventan cifras ni
   imágenes: el plan solo tiene una fotografía oficial propia, así que se
   reutiliza en el hero y en los capítulos 02-04 (se avisó al usuario). */

function PymeDecor({ tone }: { tone: "on-dark" | "on-light" }) {
  return (
    <div className={`business-decor ${tone}`} aria-hidden="true">
      <Briefcase className="deco deco-building" />
      <Users className="deco deco-building-2" />
      <WalletCards className="deco deco-briefcase" />
      <Stethoscope className="deco deco-pen" />
      <TrendingUp className="deco deco-chart" />
      <HeartHandshake className="deco deco-handshake" />
    </div>
  );
}

const essenceStats = [
  { value: "$10.000", label: "cobertura por\nenfermedad (MH10)" },
  { value: "90%", label: "Red Hospitalaria\nMetrohumana" },
  { value: "$1.000", label: "emergencia por accidente\nal 100%, sin deducible" },
];

const mh10 = {
  name: "MH 10 | Metrohumana 10.000",
  items: [
    { icon: WalletCards, label: "Cobertura por enfermedad", value: "$10.000" },
    { icon: Banknote, label: "Alternativas de deducible anual por persona", value: "$50, $80 o $100" },
    { icon: Stethoscope, label: "Consultas libre elección", value: "70% / hasta $64" },
    { icon: ShieldCheck, label: "Red Hospitalaria Metrohumana", value: "90%" },
    { icon: Ambulance, label: "Emergencia por accidente al 100% sin aplicación de deducible", value: "$1.000" },
    { icon: HeartPulse, label: "Seguro de vida para el titular", value: "$5.000" },
    { icon: HeartHandshake, label: "Asistencia exequial", value: "Incluida" },
  ],
};

const mh5 = {
  name: "MH 5 | Metrohumana 5.000",
  items: [
    { icon: WalletCards, label: "Cobertura por enfermedad", value: "$5.000" },
    { icon: Banknote, label: "Alternativas de deducible anual por persona", value: "$50, $80 o $100" },
    { icon: Stethoscope, label: "Consultas libre elección", value: "70% / hasta $64" },
    { icon: ShieldCheck, label: "Red Hospitalaria Metrohumana", value: "90%" },
    { icon: Ambulance, label: "Emergencia por accidente al 100% sin aplicación de deducible", value: "$500" },
    { icon: HeartPulse, label: "Seguro de vida para el titular", value: "$5.000" },
    { icon: HeartHandshake, label: "Asistencia exequial", value: "Incluida" },
  ],
};

type Chapter = {
  id: string; number: string; navLabel: string; theme: "dark" | "light" | "blue" | "warm";
  image: string; imageAlt: string; eyebrow: string; title: string; lead: string; essentials: string[];
};

const PYME_IMAGE = "https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg";

const chapters: Chapter[] = [
  {
    id: "red", number: "02", navLabel: "Red ambulatoria", theme: "blue",
    image: PYME_IMAGE, imageAlt: "Equipo de una pequeña empresa protegido por Plan Pyme",
    eyebrow: "RED AMBULATORIA", title: "Atención médica oportuna, cerca de tu equipo.",
    lead: "Consultas en Red CAM y Red Preferida, con exámenes de diagnóstico y medicinas a precios accesibles.",
    essentials: [
      "Red CAM: cancelan únicamente el valor de copago desde USD 4",
      "Red Preferida: consultas de USD 15 a USD 25, según el plan",
      "Acceso a más de 750 doctores a nivel nacional",
      "Consultorios de médicos especialistas del más alto nivel",
    ],
  },
  {
    id: "colaboradores", number: "03", navLabel: "Ventajas para tus colaboradores", theme: "light",
    image: PYME_IMAGE, imageAlt: "Colaboradores de una pequeña empresa protegidos por Plan Pyme",
    eyebrow: "PARA TUS COLABORADORES", title: "Respaldo real para quienes hacen crecer tu empresa.",
    lead: "Atención médica oportuna y personalizada, con beneficios que se extienden más allá del titular.",
    essentials: [
      "Atención médica oportuna y personalizada.",
      "Acceso a la red más amplia de prestadores del país.",
      "Médicos y medicinas a domicilio.",
      "Crédito en cobertura de emergencia por accidente al 100%.",
      "Extensión de coberturas a familiares.",
      "Seguro de vida para el titular.",
    ],
  },
  {
    id: "empresa", number: "04", navLabel: "Ventajas para la empresa", theme: "warm",
    image: PYME_IMAGE, imageAlt: "Pequeña empresa protegida por Plan Pyme",
    eyebrow: "PARA TU EMPRESA", title: "Cuidar a tu equipo también cuida tu negocio.",
    lead: "Bienestar para tus colaboradores, resultados medibles para tu empresa.",
    essentials: [
      "Disminución del ausentismo.",
      "Aumento del bienestar y calidad de vida de tus colaboradores.",
      "Incremento de la productividad.",
      "Deducción de impuestos.",
    ],
  },
];

const navSections = [
  { id: "elige", number: "01", label: "Elige tu plan" },
  ...chapters.map((c) => ({ id: c.id, number: c.number, label: c.navLabel })),
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
];

export default function PlanPymeClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [activePlan, setActivePlan] = useState<"mh10" | "mh5">("mh10");
  const [activeCuadro, setActiveCuadro] = useState<"a" | "b">("a");
  const selected = activePlan === "mh10" ? mh10 : mh5;
  const cuadro = activeCuadro === "a" ? cuadroA : cuadroB;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const navLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>("[data-chapter-link]"));
    const sections = navLinks
      .map((link) => root.querySelector<HTMLElement>(`#${link.dataset.chapterLink}`))
      .filter((el): el is HTMLElement => !!el);
    let lastCurrent = "";

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
      let current = "";
      sections.forEach((section) => { if (section.getBoundingClientRect().top < window.innerHeight * 0.52) current = section.id; });
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
      (entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
    );
    revealNodes.forEach((el) => revealObserver.observe(el));
    const safetyTimer = window.setTimeout(() => revealNodes.forEach((el) => el.classList.add("is-visible")), 2400);
    return () => { window.removeEventListener("scroll", onScroll); revealObserver.disconnect(); window.clearTimeout(safetyTimer); };
  }, []);

  return (
    <SiteShell title="Plan Pyme">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link><span>»</span>
        <Link href="/planes-medicos/empresas/pequenas-y-medianas/">Planes médicos para Pequeñas y Medianas Empresas</Link><span>»</span>
        <span>Plan Pyme</span>
      </nav>
      <div className="mh50-exp business-page" ref={rootRef}>
        <div className="mh50-exp-progress" aria-hidden="true"><span ref={progressRef} /></div>

        <section className="mh50-exp-hero" id="pyme-inicio">
          <PymeDecor tone="on-dark" />
          <div className="mh50-exp-hero-copy">
            <span className="mh50-exp-eyebrow light">PLAN EMPRESARIAL · PLAN PYME</span>
            <h1>Plan <span>Pyme</span></h1>
            <p className="mh50-exp-hero-line">Bienestar que cabe<br />en tu presupuesto.</p>
            <p className="mh50-exp-hero-body">
              Un plan médico diseñado para empresas de 5 hasta 25 colaboradores, que brinda bienestar y
              calidad de vida a su capital humano. Los colaboradores valoran que su empleador pueda
              respaldarlos y darles acceso a hospitales, clínicas, centros médicos y especialistas de calidad.
            </p>
            <div className="mh50-exp-hero-actions">
              <a className="primary-button" href="#pyme-cierre">Solicita información</a>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <a className="ghost-button" href="tel:1800486262"><PhoneCall size={18} /> Solicitar llamada</a>
            </div>
          </div>
          <div className="mh50-exp-gallery" aria-label="Plan Pyme">
            <figure className="mh50-exp-photo card-a">
              <Image src={PYME_IMAGE} alt="Plan Pyme" fill sizes="(max-width: 980px) 90vw, 50vw" unoptimized />
            </figure>
          </div>
          <a className="mh50-exp-scroll-cue" href="#pyme-esencia"><span />Desliza para descubrir</a>
        </section>

        <section className="mh50-exp-essence" id="pyme-esencia">
          <PymeDecor tone="on-dark" />
          <div className="mh50-exp-eyebrow light mh50-exp-reveal">PLAN PYME EN TRES IDEAS</div>
          <h2 className="mh50-exp-display mh50-exp-reveal">Protección real,<br />presupuesto accesible.</h2>
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

        <section className="mh50-exp-moments" id="pyme-elige">
          <PymeDecor tone="on-light" />
          <span className="mh50-exp-giant-word" aria-hidden="true">PYME</span>
          <div className="mh50-exp-moments-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow">ELIGE TU PLAN</span>
            <h2>MH10 o MH5, según<br />lo que tu equipo necesita.</h2>
            <p>Dos alternativas de Metrohumana para pequeñas empresas, con la misma red y beneficios, y distinto monto de cobertura.</p>
          </div>
          <div className="mh50-exp-accordions mh50-exp-reveal" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="mh50-exp-plan-toggle">
              <button type="button" className={activePlan === "mh10" ? "is-active" : ""} onClick={() => setActivePlan("mh10")}>{mh10.name}</button>
              <button type="button" className={activePlan === "mh5" ? "is-active" : ""} onClick={() => setActivePlan("mh5")}>{mh5.name}</button>
            </div>
            <div className="mh50-exp-accordion-grid on-light">
              {selected.items.map(({ icon: Icon, label, value }) => (
                <article key={label}><Icon /><strong>{value}</strong><span>{label}</span></article>
              ))}
            </div>
          </div>
        </section>

        <nav className="mh50-exp-chapter-nav" aria-label="Capítulos del Plan Pyme">
          {navSections.map((s) => (
            <a key={s.id} href={`#pyme-${s.id}`} data-chapter-link={`pyme-${s.id}`}><span>{s.number}</span>{s.label}</a>
          ))}
        </nav>

        {chapters.map((c, i) => (
          <section key={c.id} id={`pyme-${c.id}`} className={`mh50-exp-chapter theme-${c.theme}${i % 2 === 1 ? " reverse" : ""}`}>
            <PymeDecor tone={c.theme === "dark" || c.theme === "blue" ? "on-dark" : "on-light"} />
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
            </div>
          </section>
        ))}

        <section className="content-section" id="pyme-cuadro" style={{ maxWidth: 820, margin: "0 auto", padding: "64px 24px 24px" }}>
          <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24 }}>
            <h2 style={{ marginTop: 0 }}>Cuadro de coberturas a elección del cliente</h2>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              <button type="button" className={`ghost-button${activeCuadro === "a" ? " is-active" : ""}`} onClick={() => setActiveCuadro("a")}>MetroHumana 10.000</button>
              <button type="button" className={`ghost-button${activeCuadro === "b" ? " is-active" : ""}`} onClick={() => setActiveCuadro("b")}>MetroHumana 5.000</button>
            </div>
            <table className="plan-detail-table">
              <tbody>
                {cuadro.map((row, i) => (
                  <tr key={`${row.label}-${i}`}>
                    <th scope="row">{row.section ? <><strong>{row.section}</strong><br />{row.label}</> : row.label}</th>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: 24, color: "#3f5f73", fontSize: 14.5 }}>
            <strong>Exámenes de diagnóstico:</strong> cancelan únicamente el 10% del valor de los exámenes.{" "}
            <strong>Medicinas:</strong> al comprar en las farmacias de la red, pagan únicamente del 10% o 30% del valor de los medicamentos.
          </p>
        </section>

        <section className="business-contact-box mh50-exp-reveal">
          <div>
            <h3>¿Listo para proteger a tu equipo con el Plan Pyme?</h3>
            <p>Contáctate con nosotros y recibe una propuesta a la medida de tu empresa.</p>
          </div>
          <div className="business-contact-box-actions">
            <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Contáctate con nosotros</a>
            <a className="ghost-button" href="#pyme-elige">Elegir mi plan</a>
          </div>
        </section>

        <section className="mh50-exp-finale" id="pyme-cierre">
          <div className="mh50-exp-finale-rings" aria-hidden="true" />
          <PymeDecor tone="on-dark" />
          <div className="mh50-exp-finale-copy mh50-exp-reveal">
            <span className="mh50-exp-eyebrow light">PLAN PYME · PLAN EMPRESARIAL</span>
            <h2>El bienestar de tu equipo, a tu alcance.</h2>
            <p>Un asesor te contactará con una propuesta a la medida de tu empresa.</p>
            <div className="mh50-exp-finale-actions">
              <a className="primary-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Solicita información</a>
              <a className="ghost-button" href="https://wa.me/59324017002" target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
              <a className="ghost-button" href="tel:1800486262"><PhoneCall size={18} /> Solicitar llamada</a>
              <Link className="ghost-button" href="/planes-medicos/empresas/">Ver todos los planes</Link>
            </div>
            <div className="mh50-exp-contact">
              {contactChannels.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  <Icon /> <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <p className="mh50-exp-trust"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
          </div>
          <div className="mh50-exp-finale-mark" aria-hidden="true"><span>PLAN</span><strong>PYME</strong></div>
        </section>
      </div>
    </SiteShell>
  );
}
