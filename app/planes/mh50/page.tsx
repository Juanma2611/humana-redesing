"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Ambulance, ArrowRight, Baby, Brain, ChevronDown, FlaskConical,
  HeartHandshake, HeartPulse, Hospital, MessageCircle, Phone, PhoneCall, Pill,
  PlaneTakeoff, Ribbon, ShieldCheck, Stethoscope, Users,
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
    title: "Hospitalización",
    kicker: "Sin límite de días",
    lead: "Habitación, cirugía, terapia intensiva y medicamentos, sin contar los días. Todo lo que tu familia necesita cuando más lo necesita.",
    points: [
      "90% de cobertura en Red Humana · 80% en libre elección por reembolso",
      "Cuarto y alimentación: hasta $160 al día · acompañante hasta $50 al día",
      "Trasplante de órganos y diálisis: hasta $25.000 al año",
      "Incluye cuidados paliativos, rehabilitación y apoyo psicológico",
    ],
  },
  {
    id: "ambulatoria",
    icon: Stethoscope,
    title: "Atención ambulatoria",
    kicker: "Consultas desde $4",
    lead: "Consultas médicas, exámenes y médico a domicilio, con precios claros desde el primer momento.",
    points: [
      "Consultas RED CAM · Metrored $4 / Otros $8 en especialidades básicas",
      "Médico a domicilio por $10",
      "Exámenes de laboratorio, rayos X y ecografía: 90% en RED CAM",
      "15 sesiones anuales de medicina alternativa, hasta $20 por sesión",
    ],
  },
  {
    id: "medicinas",
    icon: Pill,
    title: "Medicinas",
    kicker: "Copago anual $1.000",
    lead: "Tus medicamentos, cubiertos en la red de farmacias más grande del país.",
    points: [
      "Copago anual en Pharmacys, Medicity, Fybeca, Sana Sana y Farmacias Económicas",
      "Vademécum A: 90% de cobertura · Vademécum B: 70%",
      "Medicinas en otros prestadores de Red Humana: 70%",
      "Libre elección por reembolso: 70%",
    ],
  },
  {
    id: "maternidad",
    icon: Baby,
    title: "Maternidad",
    kicker: "Hasta $50.000 recién nacido",
    lead: "Acompañamos cada etapa: del control prenatal al primer abrazo, con tu bebé cubierto desde la semana 20.",
    points: [
      "Atención prenatal: hasta $300 adicional a tarifa 0",
      "Parto normal, cesárea o aborto no provocado: hasta $2.500",
      "Complicaciones del parto o del recién nacido: hasta $3.750",
      "Recién nacido por inclusión intrauterina: hasta $50.000",
    ],
  },
];

const includedBenefits = [
  { icon: HeartHandshake, title: "Seguro de vida", detail: "$5.000 para integrantes del contrato de 18 a 64 años." },
  { icon: PlaneTakeoff, title: "Asistencia en viajes", detail: "15 días al año por afiliado, para titulares y dependientes." },
  { icon: Ribbon, title: "Asistencia exequial", detail: "Acompañamiento para titulares y dependientes en el momento más difícil." },
  { icon: Ambulance, title: "Ambulancia", detail: "4 eventos al año por núcleo familiar, hasta $100 por evento en Red Humana." },
  { icon: FlaskConical, title: "PAP, PSA y mamografía", detail: "Un examen preventivo al año, con reembolso del 100%." },
  { icon: Brain, title: "Psicología y nutrición", detail: "Hasta 12 y 6 consultas al año respectivamente, con reembolso." },
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

function CountUpStat({ prefix, value, suffix, label }: { prefix: string; value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);
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
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(value * eased));
            if (progress < 1) window.requestAnimationFrame(tick);
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
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const nodes = Object.values(sectionRefs.current).filter(Boolean) as HTMLDivElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
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

  return (
    <section className="mh50-story" id="cobertura">
      <div className="mh50-story-nav">
        <span className="mh50-kicker">Tu cobertura, explicada</span>
        <h2>Una protección pensada para cada momento</h2>
        <ul>
          {coverageCategories.map(({ id, icon: Icon, title }) => (
            <li key={id} className={active === id ? "active" : ""}>
              <Icon /> <span>{title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mh50-story-panels">
        {coverageCategories.map(({ id, icon: Icon, title, kicker, lead, points }) => (
          <div
            key={id}
            className="mh50-story-panel"
            data-category={id}
            data-reveal=""
            ref={(node) => { sectionRefs.current[id] = node; }}
          >
            <span className="mh50-story-icon"><Icon /></span>
            <span className="mh50-story-kicker">{kicker}</span>
            <h3>{title}</h3>
            <p>{lead}</p>
            <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------- */
/* Página                                                                  */
/* ---------------------------------------------------------------------- */

export default function Mh50Page() {
  const [quoted, setQuoted] = useState(false);

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
          {includedBenefits.map(({ icon: Icon, title, detail }) => (
            <article key={title} data-reveal="">
              <span className="mh50-benefit-icon"><Icon /></span>
              <h3>{title}</h3>
              <p>{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mh50-foundation">
        <div className="mh50-foundation-media" data-reveal="">
          <span className="mh50-foundation-badge"><HeartPulse /> Fundación Metrofraternidad</span>
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
              onClick={() => setQuoted(true)}
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
