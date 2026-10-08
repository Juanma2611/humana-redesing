"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, ArrowRight, Banknote, Check, HeartHandshake, HeartPulse,
  MessageCircle, PhoneCall, ShieldCheck, Stethoscope,
  Users, WalletCards, X,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { cuadroA, cuadroB, groupCuadroBySection } from "@/lib/empresa-cuadros";

/* Rediseño tipo Apple (sobrio, blanco/gris muy claro + marino, una idea
   por sección). Mismos textos y datos oficiales del Plan Pyme ya
   existentes en el sitio; el panel del cuadro de coberturas (sección
   "pyme-cuadro-dialog") queda intacto tal como fue aprobado. */

const essenceStats = [
  { value: "$10.000", label: "cobertura por enfermedad (MH10)" },
  { value: "90%", label: "Red Hospitalaria Metrohumana" },
  { value: "$1.000", label: "emergencia por accidente al 100%, sin deducible" },
];

const mh10 = {
  name: "MH 10.000",
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
  name: "MH 5.000",
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
  id: string; number: string; eyebrow: string; title: string; lead: string; essentials: string[];
};

const PYME_IMAGE = "https://humana.med.ec/wp-content/uploads/2025/09/plan-pyme-humana-medicina-prepagada.jpg";

const chapters: Chapter[] = [
  {
    id: "red", number: "02",
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
    id: "colaboradores", number: "03",
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
    id: "empresa", number: "04",
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

/* Cuadro de coberturas: documento por categoría, comparando MH 10.000 y
   MH 5.000. Mismos datos de lib/empresa-cuadros.ts, solo reestructurados. */
const slugify = (text: string) => text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");
const titleCase = (text: string) => text.charAt(0) + text.slice(1).toLowerCase();

const categoriesA = groupCuadroBySection(cuadroA);
const categoriesB = groupCuadroBySection(cuadroB);
const coverageCategories = categoriesA.map((cat, i) => ({
  section: cat.section,
  rows: cat.rows.map((row, j) => ({ label: row.label, mh10: row.value, mh5: categoriesB[i].rows[j].value })),
}));

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
];

export default function PlanPymeClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activePlan, setActivePlan] = useState<"mh10" | "mh5">("mh10");
  const [activeCategory, setActiveCategory] = useState<string>(coverageCategories[0]?.section ?? "");
  const [cuadroOpen, setCuadroOpen] = useState(false);
  const [cuadroVisible, setCuadroVisible] = useState(false);
  const cuadroDialogRef = useRef<HTMLDialogElement>(null);
  const cuadroContentRef = useRef<HTMLDivElement>(null);
  const cuadroOpenBtnRef = useRef<HTMLButtonElement>(null);
  const selected = activePlan === "mh10" ? mh10 : mh5;

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

  /* Panel del cuadro de coberturas: <dialog> nativo. Todo su contenido ya
     está en el HTML desde el SSR; abrir/cerrar solo cambia su visibilidad
     (showModal/close), sin cargar ni generar nada por JS. El cierre se
     anima (fade + leve desplazamiento) antes de soltar el <dialog>. */
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

  /* Bloquea el scroll de la página de fondo mientras el panel está abierto. */
  useEffect(() => {
    if (!cuadroOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [cuadroOpen]);

  /* Scrollspy del índice de categorías dentro del panel: resalta la
     categoría visible y centra su enlace en la barra deslizable. */
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
    <SiteShell title="Plan Pyme">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/planes-medicos/">Planes médicos</Link><span>»</span>
        <Link href="/planes-medicos/empresas/">Planes médicos para Empresas</Link><span>»</span>
        <Link href="/planes-medicos/empresas/pequenas-y-medianas/">Planes médicos para Pequeñas y Medianas Empresas</Link><span>»</span>
        <span>Plan Pyme</span>
      </nav>

      <div className="biz-page" data-accent="teal" ref={rootRef}>
        {/* Hero ------------------------------------------------------- */}
        <section className="biz-hero" id="pyme-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">PLAN EMPRESARIAL · PLAN PYME</span>
            <h1>Plan <span>Pyme</span></h1>
            <p className="biz-hero-line">Bienestar que cabe en tu presupuesto.</p>
            <p className="biz-hero-body">
              Un plan médico diseñado para empresas de 5 hasta 25 colaboradores, que brinda bienestar y
              calidad de vida a su capital humano. Los colaboradores valoran que su empleador pueda
              respaldarlos y darles acceso a hospitales, clínicas, centros médicos y especialistas de calidad.
            </p>
            <div className="biz-hero-actions">
              <a className="biz-btn-primary" href="#pyme-cierre">Solicita información</a>
              <a className="biz-btn-link" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">Hablar con un asesor <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
          <figure className="biz-hero-image">
            <Image src={PYME_IMAGE} alt="Equipo de una pequeña o mediana empresa protegido por Plan Pyme" fill sizes="(max-width: 980px) 100vw, 1180px" unoptimized />
          </figure>
        </section>

        {/* Franja de cifras clave -------------------------------------- */}
        <section className="biz-section is-color">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">PLAN PYME EN TRES IDEAS</span>
              <h2>Protección real, presupuesto accesible.</h2>
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

        {/* Elige tu plan: MH10 / MH5 ------------------------------------ */}
        <section className="biz-section is-light" id="pyme-elige">
          <div className="biz-container">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">ELIGE TU PLAN</span>
              <h2>MH10 o MH5, según lo que tu equipo necesita.</h2>
              <p>Dos alternativas de Metrohumana para pequeñas empresas, con la misma red y beneficios, y distinto monto de cobertura.</p>
            </div>
            <div className="biz-reveal" style={{ display: "flex", justifyContent: "center", marginTop: 36 }}>
              <div className="biz-segmented" role="group" aria-label="Elige el plan a mostrar">
                <button type="button" className={activePlan === "mh10" ? "is-active" : ""} onClick={() => setActivePlan("mh10")}>{mh10.name}</button>
                <button type="button" className={activePlan === "mh5" ? "is-active" : ""} onClick={() => setActivePlan("mh5")}>{mh5.name}</button>
              </div>
            </div>
            <div className="biz-figures biz-reveal">
              {selected.items.map(({ icon: Icon, label, value }) => (
                <article key={label}><Icon aria-hidden="true" /><strong>{value}</strong><span>{label}</span></article>
              ))}
            </div>
          </div>
        </section>

        {/* Capítulos de beneficio (una idea por sección) ----------------- */}
        {chapters.map((c, i) => (
          <section className={`biz-section ${i % 2 === 0 ? "is-dark" : "is-light"}`} id={`pyme-${c.id}`} key={c.id}>
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
        ))}

        {/* Cuadro de coberturas: enlace + panel (patrón aprobado) --------- */}
        <section className="pyme-cuadro" id="pyme-cuadro">
          <div className="pyme-cuadro-cta">
            <p>¿Quieres conocer el detalle de las coberturas?</p>
            <button
              type="button"
              className="pyme-cuadro-open-btn"
              ref={cuadroOpenBtnRef}
              aria-expanded={cuadroOpen}
              aria-controls="pyme-cuadro-dialog"
              onClick={() => setCuadroOpen(true)}
            >
              Ver cuadro de coberturas
              <ArrowRight aria-hidden="true" />
            </button>
          </div>

          {/* Todo el cuadro completo (ambos planes, todas las categorías y filas)
             está renderizado en el HTML desde la carga inicial: el <dialog> solo
             lo oculta visualmente hasta que se abre, no lo carga por JS. */}
          <dialog
            id="pyme-cuadro-dialog"
            className={`pyme-cuadro-dialog${cuadroVisible ? " is-visible" : ""}`}
            data-plan={activePlan}
            ref={cuadroDialogRef}
            aria-labelledby="pyme-cuadro-dialog-title"
            onClick={(e) => { if (e.target === cuadroDialogRef.current) closeCuadro(); }}
          >
            <div className="pyme-cuadro-dialog-inner">
              <header className="pyme-cuadro-dialog-head">
                <div className="pyme-cuadro-dialog-head-copy">
                  <span className="pyme-cuadro-dialog-eyebrow">CUADRO DE COBERTURAS</span>
                  <h2 id="pyme-cuadro-dialog-title">Cuadro de coberturas · Plan Pyme</h2>
                </div>
                <div className="pyme-cuadro-dialog-head-actions">
                  <div className="pyme-cuadro-dialog-toggle" role="group" aria-label="Elige el plan a mostrar">
                    <button type="button" className={activePlan === "mh10" ? "is-active" : ""} onClick={() => setActivePlan("mh10")}>MH 10.000</button>
                    <button type="button" className={activePlan === "mh5" ? "is-active" : ""} onClick={() => setActivePlan("mh5")}>MH 5.000</button>
                  </div>
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
                        href={`#pyme-cat-${slug}`}
                        data-category-link={slug}
                        className={activeCategory === slug ? "is-active" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          cuadroContentRef.current?.querySelector(`#pyme-cat-${slug}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
                      <section className="pyme-cuadro-dialog-category" id={`pyme-cat-${slug}`} data-category-card={slug} key={cat.section}>
                        <header className="pyme-cuadro-dialog-category-head">
                          <span className="pyme-cuadro-dialog-category-num">{String(i + 1).padStart(2, "0")}</span>
                          <h3>{titleCase(cat.section)}</h3>
                        </header>
                        <dl>
                          {cat.rows.map((row) => (
                            <div className="pyme-cuadro-dialog-row" key={row.label}>
                              <dt>{row.label}</dt>
                              <dd className="pyme-cuadro-dialog-value">
                                <span data-plan-value="mh10">{row.mh10}</span>
                                <span data-plan-value="mh5">{row.mh5}</span>
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </section>
                    );
                  })}

                  <p className="pyme-cuadro-dialog-footnote">
                    <strong>Exámenes de diagnóstico:</strong> cancelan únicamente el 10% del valor de los exámenes.{" "}
                    <strong>Medicinas:</strong> al comprar en las farmacias de la red, pagan únicamente del 10% o 30% del valor de los medicamentos.
                  </p>
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
        <section className="biz-section is-dark is-close" id="pyme-cierre">
          <div className="biz-container biz-close">
            <div className="biz-section-head biz-reveal">
              <span className="biz-eyebrow">PLAN PYME · PLAN EMPRESARIAL</span>
              <h2>El bienestar de tu equipo, a tu alcance.</h2>
              <p>Un asesor te contactará con una propuesta a la medida de tu empresa.</p>
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
      </div>
    </SiteShell>
  );
}
