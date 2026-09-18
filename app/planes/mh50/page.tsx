"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Activity, Ambulance, ArrowRight, Baby, Bike, Bone, Brain, ChevronDown,
  CreditCard, Cross, FlaskConical, HandHeart, HeartHandshake, HeartPulse,
  Hospital, Microscope, MessageCircle, Milk, Phone, PhoneCall, Pill, PlaneTakeoff,
  Ribbon, Scissors, ShieldCheck, ShieldPlus, Sparkles, Stethoscope, Syringe,
  Users, Wallet, ChevronRight,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

/* ---------------------------------------------------------------------- */
/* Datos reales del plan MH50 (Metrohumana 50.000)                        */
/* ---------------------------------------------------------------------- */

const heroStats = [
  { value: 50000, prefix: "$", label: "Cobertura máxima por beneficiario", suffix: "" },
  { value: 80, prefix: "$", label: "Deducible anual", suffix: "" },
  { value: 90, prefix: "", label: "En Red Humana, cobertura directa", suffix: "%" },
];

const coverageCategories = [
  {
    id: "hospitalizacion",
    icon: Hospital,
    image: "/mh50-hospitalizacion.jpg",
    imageAlt: "Familia acompañando a un paciente en una habitación de hospital de Red Humana",
    title: "Hospitalización",
    kicker: "Sin límite de días",
    phrase: "Cuando más nos necesitas, estamos contigo.",
    essentials: ["90% en Red Humana", "Sin límite de días", "80% por libre elección"],
    lead: "Habitación, cirugía, terapia intensiva y medicamentos, sin contar los días. Todo lo que tu familia necesita cuando más lo necesita.",
    chips: [
      { icon: ShieldPlus, text: "90% Red Humana · 80% libre elección" },
      { icon: Hospital, text: "$160/día habitación" },
      { icon: HandHeart, text: "$50/día acompañante" },
      { icon: Activity, text: "$25.000/año trasplantes y diálisis" },
      { icon: HeartPulse, text: "Incluye paliativos y rehabilitación" },
    ],
  },
  {
    id: "ambulatoria",
    icon: Stethoscope,
    image: "/mh50-ambulatoria.jpg",
    imageAlt: "Consulta médica ambulatoria en la Red Humana",
    title: "Atención ambulatoria",
    kicker: "Consultas desde $4",
    phrase: "Cuidarte también está en lo cotidiano.",
    essentials: ["Consultas desde $4", "Médico a domicilio desde $10", "Exámenes con cobertura en Red CAM"],
    lead: "Consultas médicas, exámenes y médico a domicilio, con precios claros desde el primer momento.",
    chips: [
      { icon: Stethoscope, text: "Metrored $4 · Otros $8" },
      { icon: Phone, text: "Médico a domicilio $10" },
      { icon: Microscope, text: "90% laboratorio, RX y eco en RED CAM" },
      { icon: Sparkles, text: "15 sesiones/año medicina alternativa" },
    ],
  },
  {
    id: "medicinas",
    icon: Pill,
    image: "/mh50-medicinas.jpg",
    imageAlt: "Entrega de medicamentos en farmacia de la red de Humana",
    title: "Medicinas",
    kicker: "Copago anual $1.000",
    phrase: "Tu tratamiento también está protegido.",
    essentials: ["Cobertura entre 70% y 90%", "Red de farmacias", "Reembolso por libre elección"],
    lead: "Tus medicamentos, cubiertos en la red de farmacias más grande del país.",
    chips: [
      { icon: Pill, text: "Pharmacys, Medicity, Fybeca, Sana Sana" },
      { icon: ShieldPlus, text: "Vademécum A: 90%" },
      { icon: ShieldPlus, text: "Vademécum B: 70%" },
      { icon: Wallet, text: "Libre elección: 70% por reembolso" },
    ],
  },
  {
    id: "maternidad",
    icon: Baby,
    image: "/mh50-maternidad.jpg",
    imageAlt: "Madre gestante en control prenatal cubierto por MH50",
    title: "Maternidad",
    kicker: "Hasta $50.000 recién nacido",
    phrase: "Protección desde antes del primer abrazo.",
    essentials: ["Atención prenatal", "Parto o cesárea", "Complicaciones y cobertura del recién nacido"],
    lead: "Acompañamos cada etapa: del control prenatal al primer abrazo, con tu bebé cubierto desde la semana 20.",
    chips: [
      { icon: Stethoscope, text: "$300 atención prenatal" },
      { icon: Baby, text: "$2.500 parto o cesárea" },
      { icon: HeartPulse, text: "$3.750 complicaciones del parto" },
      { icon: ShieldPlus, text: "$50.000 recién nacido incluido" },
    ],
  },
];

/* ---------------------------------------------------------------------- */
/* Casos especiales y coberturas adicionales sin costo (datos del contrato)*/
/* ---------------------------------------------------------------------- */

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
];

const extraCoverages = [
  { icon: Bone, value: "Hasta $3.000/año", label: "Cirugías robóticas" },
  { icon: Bike, value: "Hasta $1.500/año", label: "Deportes extremos" },
  { icon: Ribbon, value: "Hasta $1.000/año", label: "Cirugía reconstructiva oncológica, incluye implantes" },
  { icon: Microscope, value: "Hasta $200/año", label: "Pruebas de sensibilidad y tratamientos inmunológicos" },
];

const emergencyCoverages = [
  { icon: Ambulance, value: "Monto máximo de cobertura", label: "Emergencia y urgencia por accidente o enfermedad" },
  { icon: Cross, value: "Hasta $500", label: "Servicio en mora" },
  { icon: Cross, value: "Hasta $500", label: "En período de carencia" },
];

const planConditions = [
  { icon: Wallet, value: "$80", label: "Deducible anual del plan" },
  { icon: Pill, value: "$1.000", label: "Copago anual de medicinas" },
  { icon: ShieldPlus, value: "90% / 70%", label: "Vademécum A y B de medicinas" },
  { icon: Hospital, value: "90% / 80%", label: "Cobertura en Red Humana / libre elección" },
];

const featuredBenefits = [
  { icon: HeartHandshake, title: "Seguro de vida", detail: "$5.000 para integrantes del contrato de 18 a 64 años." },
  { icon: PlaneTakeoff, title: "Asistencia en viajes", detail: "15 días al año por afiliado, para titulares y dependientes." },
  { icon: Ambulance, title: "Ambulancia terrestre", detail: "4 eventos al año por núcleo familiar, hasta $100 por evento en Red Humana." },
  { icon: Brain, title: "Psicología y nutrición", detail: "Hasta 12 y 6 consultas al año respectivamente, con reembolso." },
  { icon: FlaskConical, title: "Exámenes preventivos", detail: "PAP, antígeno PSA y mamografía anuales, con reembolso." },
  { icon: CreditCard, title: "Emergencia ambulatoria", detail: "100% en Red Humana sin deducible, si la lesión se trata dentro de 48h, hasta $1.000." },
];

const moreBenefits = [
  { icon: Ribbon, title: "Asistencia exequial", detail: "Acompañamiento para titulares y dependientes en el momento más difícil." },
  { icon: PlaneTakeoff, title: "Ambulancia aérea o fluvial", detail: "Por reembolso al 80%, hasta $1.500 al año." },
  { icon: FlaskConical, title: "PAP test", detail: "Un examen preventivo al año, con reembolso hasta $15." },
  { icon: Microscope, title: "Antígeno PSA", detail: "Un examen preventivo al año, con reembolso hasta $20." },
  { icon: FlaskConical, title: "Mamografía", detail: "Un examen preventivo al año, con reembolso hasta $30." },
  { icon: Scissors, title: "Terceros molares", detail: "Extracción por reembolso al 100%, hasta $70 por molar." },
];

const contactChannels = [
  { icon: MessageCircle, label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { icon: PhoneCall, label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { icon: Phone, label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* ---------------------------------------------------------------------- */
/* Contador animado: cuenta desde 0 hasta el valor real al entrar en      */
/* viewport, usando IntersectionObserver (una sola vez por elemento).     */
/* ---------------------------------------------------------------------- */

/**
 * El valor final SIEMPRE se muestra desde el primer render (fallback inmediato),
 * nunca arranca en 0: si el IntersectionObserver, requestAnimationFrame o
 * prefers-reduced-motion impiden animar, el usuario igual ve la cifra correcta.
 * La animación, cuando corre, es solo un acento editorial (< 900ms) desde un
 * valor cercano al final, no un conteo largo desde cero.
 */
function CountUpStat({ prefix, value, suffix, label }: { prefix: string; value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(value);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplay(value);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const duration = 620; // < 1s, acento editorial
          const startValue = Math.round(value * 0.4);
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(startValue + (value - startValue) * eased));
            if (progress < 1) window.requestAnimationFrame(tick);
            else setDisplay(value);
          };
          window.requestAnimationFrame(tick);
          observer.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="mh50-stat" ref={ref} data-reveal="">
      <strong>{prefix}{display.toLocaleString("es-EC")}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Narrativa de cobertura: panel izquierdo pegajoso (sticky) que resalta  */
/* la categoría activa según qué panel derecho está en el viewport.       */
/* ---------------------------------------------------------------------- */

function CoverageStory() {
  const [active, setActive] = useState(coverageCategories[0].id);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const isClickScroll = useRef(false);

  useEffect(() => {
    const nodes = Object.values(sectionRefs.current).filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScroll.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("data-category") ?? active);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navegación FUNCIONAL: clic o Enter/Espacio saltan al capítulo real,
  // no solo resaltan pasivamente por scroll.
  const goTo = (id: string) => {
    setActive(id);
    isClickScroll.current = true;
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => { isClickScroll.current = false; }, 900);
  };

  return (
    <section className="mh50-story" id="cobertura">
      <div className="mh50-story-nav">
        <span className="mh50-kicker">Tu cobertura, explicada</span>
        <h2>Cuatro momentos de protección</h2>
        <ul role="tablist" aria-label="Categorías de cobertura MH50">
          {coverageCategories.map(({ id, icon: Icon, title }) => (
            <li key={id}>
              <button
                type="button"
                role="tab"
                id={`mh50-tab-${id}`}
                aria-selected={active === id}
                aria-controls={`mh50-panel-${id}`}
                tabIndex={0}
                className={active === id ? "active" : ""}
                onClick={() => goTo(id)}
              >
                <Icon /> <span>{title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mh50-story-panels">
        {coverageCategories.map(({ id, icon: Icon, image, imageAlt, title, kicker, phrase, essentials, lead, chips }) => {
          const isOpen = !!expanded[id];
          return (
            <div
              key={id}
              className="mh50-story-panel"
              data-category={id}
              data-reveal=""
              id={`mh50-panel-${id}`}
              role="tabpanel"
              aria-labelledby={`mh50-tab-${id}`}
              ref={(node) => { sectionRefs.current[id] = node; }}
            >
              <div className="mh50-story-media">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 40vw" className="mh50-story-media-image" unoptimized />
                <span className="mh50-story-media-icon" aria-hidden="true"><Icon /></span>
              </div>
              <div className="mh50-story-copy">
                <span className="mh50-story-kicker">{kicker}</span>
                <h3>{title}</h3>
                <p className="mh50-story-phrase">{phrase}</p>
                <ul className="mh50-story-essentials">
                  {essentials.map((item) => (
                    <li key={item}><ShieldPlus /> <span>{item}</span></li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mh50-story-toggle"
                  aria-expanded={isOpen}
                  aria-controls={`mh50-details-${id}`}
                  onClick={() => setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))}
                >
                  <span>{isOpen ? "Ocultar detalles completos" : "Ver detalles completos"}</span>
                  <ChevronRight className={isOpen ? "open" : ""} />
                </button>
                <div className="mh50-story-details" id={`mh50-details-${id}`} hidden={!isOpen}>
                  <p>{lead}</p>
                  <ul className="mh50-story-chips">
                    {chips.map(({ icon: ChipIcon, text }, index) => (
                      <li key={text} style={{ animationDelay: `${index * 60}ms` }}>
                        <ChipIcon /> <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

function AccordionSection({
  icon: Icon,
  title,
  items,
  defaultOpen = false,
}: {
  icon: typeof ShieldPlus;
  title: string;
  items: { icon: typeof ShieldPlus; value: string; label: string }[];
  defaultOpen?: boolean;
}) {
  return (
    <details className="mh50-accordion" open={defaultOpen}>
      <summary>
        <span className="mh50-accordion-title"><Icon /> {title}</span>
        <ChevronDown className="mh50-accordion-chevron" />
      </summary>
      <div className="mh50-extra-grid">
        {items.map(({ icon: ItemIcon, value, label }) => (
          <article key={label}>
            <span className="mh50-extra-icon"><ItemIcon /></span>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </details>
  );
}

export default function Mh50Page() {
  const [quoted, setQuoted] = useState(false);
  const [showAllBenefits, setShowAllBenefits] = useState(false);

  // Handler demostrativo. Aquí se conectará la lógica real de cotización
  // (formulario, CRM, WhatsApp Business, etc.) en la siguiente etapa.
  const handleQuoteClick = () => {
    setQuoted(true);
  };

  return (
    <SiteShell title="MH50 · Plan Full Metrohumana 50.000">
      <section className="mh50-hero">
        <Image
          src="/familia-humana.png"
          alt="Familia sonriente protegida por Humana"
          fill
          priority
          sizes="100vw"
          className="mh50-hero-image"
          unoptimized
        />
        <div className="mh50-hero-shade" aria-hidden="true" />
        <span className="mh50-hero-seal">
          <ShieldPlus /> <span>Plan más<br />elegido</span>
        </span>
        <div className="mh50-hero-content">
          <span className="mh50-kicker light">Plan Full · Metrohumana 50.000</span>
          <h1>MH50</h1>
          <p className="mh50-hero-promise">Tranquilidad para tu familia, sin condiciones.</p>
          <p className="mh50-hero-copy">El plan familiar más elegido de Humana. Hospitalización sin límite de días, maternidad cubierta y un respaldo que llega a donde tu familia lo necesita.</p>
          <div className="mh50-hero-actions">
            <Link className="primary-button" href="/planes">Cotizar este plan <ArrowRight /></Link>
            <a className="ghost-button" href="#cobertura">Descubre la cobertura</a>
          </div>
        </div>
        <div className="mh50-hero-glass">
          <div className="mh50-glass-chip">
            <strong>$50.000</strong>
            <span>Cobertura máxima</span>
          </div>
          <div className="mh50-glass-chip">
            <strong>90%</strong>
            <span>Red Humana</span>
          </div>
          <div className="mh50-glass-chip">
            <strong>Sin límite</strong>
            <span>de días hospitalarios</span>
          </div>
        </div>
        <a className="mh50-scroll-indicator" href="#cifras" aria-label="Bajar para ver más">
          <ChevronDown />
        </a>
      </section>

      <section className="mh50-stats" id="cifras">
        <div className="mh50-stats-intro" data-reveal="">
          <span className="mh50-kicker">En números</span>
          <h2>Una cobertura que se nota</h2>
        </div>
        <div className="mh50-stats-grid">
          {heroStats.map((stat) => <CountUpStat key={stat.label} {...stat} />)}
        </div>
      </section>

      <CoverageStory />

      <section className="mh50-benefits">
        <div className="mh50-benefits-intro" data-reveal="">
          <span className="mh50-kicker">Sin costo adicional</span>
          <h2>Todo esto viene incluido</h2>
          <p>Beneficios que muchos planes cobran aparte, y que en MH50 ya están dentro de tu cobertura.</p>
        </div>
        <div className="mh50-benefits-grid">
          {featuredBenefits.map(({ icon: Icon, title, detail }) => (
            <article key={title} data-reveal="">
              <span className="mh50-benefit-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
        <div className="mh50-benefits-more" data-reveal="">
          <button
            type="button"
            className="mh50-story-toggle"
            aria-expanded={showAllBenefits}
            aria-controls="mh50-more-benefits"
            onClick={() => setShowAllBenefits((v) => !v)}
          >
            <span>{showAllBenefits ? "Ocultar beneficios adicionales" : "Ver todos los beneficios"}</span>
            <ChevronRight className={showAllBenefits ? "open" : ""} />
          </button>
          <div id="mh50-more-benefits" className="mh50-benefits-grid mh50-benefits-grid-more" hidden={!showAllBenefits}>
            {moreBenefits.map(({ icon: Icon, title, detail }) => (
              <article key={title}>
                <span className="mh50-benefit-icon"><Icon /></span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mh50-extra">
        <div className="mh50-extra-intro" data-reveal="">
          <span className="mh50-kicker">Cobertura a fondo</span>
          <h2>Casos especiales y condiciones del plan</h2>
          <p>Información técnica organizada por categorías, disponible cuando la necesites, sin competir con la historia principal.</p>
        </div>

        <div className="mh50-accordion-group" data-reveal="">
          <AccordionSection icon={ShieldPlus} title="Casos especiales" items={specialCases} defaultOpen />
          <AccordionSection icon={HandHeart} title="Prevención y bienestar" items={preventionCoverages} />
          <AccordionSection icon={Activity} title="Rehabilitación y ayudas técnicas" items={rehabCoverages} />
          <AccordionSection icon={Sparkles} title="Coberturas adicionales" items={extraCoverages} />
          <AccordionSection icon={Ambulance} title="Emergencias obligatorias" items={emergencyCoverages} />
          <AccordionSection icon={Wallet} title="Condiciones y límites" items={planConditions} />
        </div>
      </section>

      <section className="mh50-foundation">
        <div className="mh50-foundation-media" data-reveal="">
          <Image src="/mh50-metrofraternidad.jpg" alt="Niños beneficiados por Fundación Metrofraternidad gracias a los planes de Humana" fill sizes="(max-width: 900px) 100vw, 45vw" className="mh50-foundation-image" unoptimized />
          <span className="mh50-foundation-stat">
            <strong>+6.900</strong>
            <span>niños beneficiados</span>
          </span>
        </div>
        <div className="mh50-foundation-copy" data-reveal="">
          <span className="mh50-kicker light">Un gesto que va más allá</span>
          <h2>Cada plan de Humana entrega esperanza</h2>
          <p>
            Cuando contratas un plan de Humana estás contribuyendo con Fundación Metrofraternidad
            para que más niños de escasos recursos de todo el país tengan la esperanza de vivir su niñez
            a plenitud.
          </p>
          <div className="mh50-foundation-number">
            <strong>+6.900</strong>
            <span>niños y adolescentes beneficiados con atención médica especializada</span>
          </div>
        </div>
      </section>

      <section className="mh50-cta">
        <div className="mh50-cta-copy" data-reveal="">
          <span className="mh50-kicker light">MH50 · Plan Full</span>
          <h2>Dale a tu familia la tranquilidad que merece</h2>
          <p>Cotiza el plan más elegido de Humana y empieza a proteger a los tuyos hoy mismo.</p>
          <div className="mh50-cta-actions">
            <button
              type="button"
              className="white-button"
              onClick={handleQuoteClick}
            >
              Cotizar MH50 <ArrowRight />
            </button>
            <Link className="ghost-button" href="/planes">Ver todos los planes</Link>
          </div>
          {quoted && (
            <div className="mh50-cta-confirm" role="status">
              <ShieldCheck /> <span>Solicitud demostrativa registrada. Un asesor de Humana te contactará. No se envió información real.</span>
            </div>
          )}
        </div>
        <div className="mh50-cta-contact" data-reveal="">
          {contactChannels.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              <Icon /> <span><small>{label}</small><strong>{value}</strong></span>
            </a>
          ))}
          <p className="mh50-cta-note"><Users /> Más de 200.000 personas y empresas confían en Humana.</p>
        </div>
      </section>
    </SiteShell>
  );
}
