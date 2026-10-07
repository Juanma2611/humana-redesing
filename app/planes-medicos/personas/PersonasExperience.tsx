"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Check, ChevronRight, HeartPulse, Layers3,
  ShieldCheck, ShoppingCart, SmilePlus, UsersRound,
} from "lucide-react";

/* Experiencia editorial de "Para ti" (Personas), recuperada del prototipo
   original (commit 32fac1c, antes de fusionarse con el contenido oficial),
   aprobada por el equipo. Menú de guía fijo a la izquierda + bloques
   grandes alternados por plan, con los datos oficiales actuales de
   lib/plan-details.ts, ph15Data.ts y las páginas de detalle de cada plan
   (mh80Data.ts, ph30Data.ts, mh150Data.ts, y el contenido propio de
   MH50/Proteger/Prosonrisas). Sin ventana emergente: cada "Conoce más"
   enlaza con <a>/<Link> real a la página oficial de detalle. */

type Segment = { id: string; label: string; icon: typeof HeartPulse };
const segments: Segment[] = [
  { id: "familiar", label: "Familiar", icon: UsersRound },
  { id: "individual", label: "Individual", icon: HeartPulse },
  { id: "dental", label: "ProSonrisas", icon: SmilePlus },
  { id: "proteger", label: "Protección extra", icon: Layers3 },
];

type Plan = {
  id: string; name: string; family: string; href: string; image: string; imageAlt: string;
  recommend?: string; stats: { label: string; value: string; note?: string }[]; essentials: string[];
};

const ph15: Plan = {
  id: "ph15", name: "PH15", family: "Practihumana", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana15/",
  image: "/plan-ph15-hero.jpeg", imageAlt: "Persona joven sonriendo, protegida por PH15",
  recommend: "Más recomendado opción individual",
  stats: [{ label: "Cobertura", value: "$15.000", note: "anual" }, { label: "Deducible", value: "$50", note: "anual" }, { label: "Red", value: "Practihumana" }],
  essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días de hospitalización"],
};
const ph30: Plan = {
  id: "ph30", name: "PH30", family: "Practihumana", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana30/",
  image: "/plan-ph30-hero.jpeg", imageAlt: "Persona protegida por PH30",
  stats: [{ label: "Cobertura", value: "$30.000", note: "anual" }, { label: "Deducible", value: "$60" }, { label: "Red", value: "Practihumana" }],
  essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días de hospitalización"],
};
const mh50: Plan = {
  id: "mh50", name: "MH50", family: "Metrohumana", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana50/",
  image: "/mh50-hospitalizacion.jpg", imageAlt: "Familia protegida por MH50",
  recommend: "Más recomendado para familias",
  stats: [{ label: "Cobertura", value: "$50.000", note: "por incapacidad" }, { label: "Deducible", value: "$80" }, { label: "Red", value: "Metrohumana" }],
  essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días hospitalarios"],
};
const mh80: Plan = {
  id: "mh80", name: "MH80", family: "Metrohumana", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana80/",
  image: "/plan-mh80-hero.jpeg", imageAlt: "Persona protegida por MH80",
  stats: [{ label: "Cobertura", value: "$80.000", note: "por incapacidad" }, { label: "Deducible", value: "$200" }, { label: "Red", value: "Metrohumana" }],
  essentials: ["80% en Red Metrohumana", "70% por libre elección", "Cirugía robótica Da Vinci (único en el mercado)"],
};
const mh150: Plan = {
  id: "mh150", name: "MH150", family: "Metrohumana", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana150/",
  image: "/plan-mh150-hero.jpeg", imageAlt: "Familia protegida por MH150",
  stats: [{ label: "Cobertura", value: "$150.000", note: "por incapacidad" }, { label: "Deducible", value: "$150" }, { label: "Red", value: "Metrohumana" }],
  essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días de hospitalización"],
};
const prosonrisas: Plan = {
  id: "prosonrisas", name: "ProSonrisas", family: "Plan dental", href: "/planes-medicos/personas/plan-prosonrisas/",
  image: "/images/planes/prosonrisas/prosonrisas-equipo.jpg", imageAlt: "Atención odontológica a un paciente sonriendo",
  stats: [{ label: "Plus", value: "$6,63", note: "36 procedimientos" }, { label: "Full", value: "$23,08", note: "50 procedimientos" }, { label: "Red", value: "Nacional" }],
  essentials: ["Restauraciones y endodoncia incluidas (Plus y Full)", "Cirugía y odontopediatría 100% en Full", "Sin preexistencias ni topes de consulta"],
};
const proteger: Plan = {
  id: "proteger", name: "Proteger", family: "Cobertura complementaria", href: "/planes-medicos/personas/plan-proteger/",
  image: "/humana-historia-hero.png", imageAlt: "Familia con respaldo del Plan Proteger",
  stats: [{ label: "Cobertura", value: "$500.000", note: "por incapacidad" }, { label: "Cobertura tras deducible", value: "100%" }, { label: "Deducibles", value: "$5K · $10K · $20K" }],
  essentials: ["Hospitalización 100% tras el deducible", "Cobertura durante toda tu vida, sin límite de edad", "Atención en los mejores hospitales y clínicas, o por libre elección"],
};

function PlanBlock({ plan, reverse }: { plan: Plan; reverse?: boolean }) {
  return (
    <article id={`plan-${plan.id}`} className={`plan-editorial-block${reverse ? " reverse" : ""}`}>
      <div className="plan-editorial-block-media">
        <Image src={plan.image} alt={plan.imageAlt} fill sizes="(max-width: 760px) 100vw, 640px" unoptimized className="plan-editorial-block-photo" />
      </div>
      <div className="plan-editorial-block-copy">
        <span className="plan-editorial-block-family"><ShieldCheck size={16} aria-hidden="true" /> {plan.family}</span>
        {plan.recommend && <span className="plan-editorial-block-recommend">{plan.recommend}</span>}
        <h3>{plan.name}</h3>
        <ul className="plan-faq-checklist" style={{ margin: "4px 0 22px" }}>
          {plan.essentials.map((item) => <li key={item}><Check size={15} />{item}</li>)}
        </ul>
        <div className="plan-editorial-block-stats">
          {plan.stats.map((stat) => (
            <div key={stat.label}><span>{stat.label}</span><strong>{stat.value}</strong>{stat.note && <small>{stat.note}</small>}</div>
          ))}
        </div>
        <div className="plan-editorial-block-actions">
          <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza tu plan <ArrowRight size={16} /></Link>
          <Link className="sales-more" href={plan.href}>Conoce más acerca del plan <ChevronRight size={16} /></Link>
        </div>
      </div>
    </article>
  );
}

function CategoryHero({ id, eyebrow, title, description, bullets, image, imageAlt, sectionRef, compareAll }: {
  id: string; eyebrow: string; title: string; description: string; bullets?: string[]; image: string; imageAlt: string;
  sectionRef: (el: HTMLElement | null) => void; compareAll?: boolean;
}) {
  return (
    <section id={id} ref={sectionRef} className="plan-editorial-hero">
      <Image src={image} alt={imageAlt} fill sizes="100vw" unoptimized className="plan-editorial-hero-photo" />
      <div className="plan-editorial-hero-overlay" />
      <div className="plan-editorial-hero-copy">
        <span className="plan-editorial-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        {bullets && (
          <ul className="plan-faq-checklist" style={{ margin: "0 0 20px" }}>
            {bullets.map((item) => <li key={item}><Check size={15} />{item}</li>)}
          </ul>
        )}
        <div className="plan-editorial-hero-actions">
          <Link className="sales-buy" href="/cotizador/"><ShoppingCart size={17} /> Cotiza tu plan <ArrowRight size={16} /></Link>
          {compareAll && (
            <Link className="plan-editorial-secondary" href="/planes-medicos/personas/plan-individual-y-familiar/">
              Comparar los 5 planes <ChevronRight size={16} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function PersonasExperience() {
  const [active, setActive] = useState<string>("familiar");
  const targets = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = segments.map((s) => targets.current[s.id]).filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        const key = segments.find((s) => targets.current[s.id] === visible.target)?.id;
        if (key) setActive(key);
      }
    }, { threshold: reduceMotion ? 0.51 : [0.3, 0.5, 0.7], rootMargin: "-90px 0px -40% 0px" });
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sales-plans" id="elige-segmento">
      <div className="sales-title-row">
        <div><span className="sales-eyebrow">Encuentra tu plan</span><h2>¿A quién quieres proteger?</h2></div>
      </div>

      <div className="sales-plans-layout">
        <nav className="sales-segments" role="tablist" aria-label="Secciones de planes para personas">
          {segments.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} role="tab" aria-selected={active === id} className={active === id ? "active" : ""}>
              <Icon size={18} aria-hidden="true" /> {label}
            </a>
          ))}
        </nav>

        <div className="sales-plans-content">
          <div className="plan-editorial-flow">
            <CategoryHero
              id="familiar" sectionRef={(el) => { targets.current.familiar = el; }}
              eyebrow="Línea familiar" title="MetroHumana"
              description="Planes de la red Metrohumana: MH50, MH80 y MH150, con cobertura por incapacidad para ti y tu familia."
              bullets={["Planes desde $15.000 a $150.000 de cobertura anual", "La red médica más completa del mercado, y la mejor cobertura en medicinas", "Más beneficios: seguro de vida, asistencia exequial, etc."]}
              image="/mh50-maternidad.jpg" imageAlt="Familia protegida por la línea MetroHumana"
              compareAll
            />
            <PlanBlock plan={mh50} />
            <PlanBlock plan={mh80} reverse />
            <PlanBlock plan={mh150} />

            <CategoryHero
              id="individual" sectionRef={(el) => { targets.current.individual = el; }}
              eyebrow="Línea individual" title="PractiHumana"
              description="Planes de la red Practihumana: PH15 y PH30, con cobertura anual para empezar a cuidarte."
              bullets={["Planes desde $15.000 a $150.000 de cobertura anual", "La red médica más completa del mercado, y la mejor cobertura en medicinas", "Más beneficios: seguro de vida, asistencia exequial, etc."]}
              image="/ph15-consultas.jpg" imageAlt="Consulta médica cercana, línea PractiHumana"
              compareAll
            />
            <PlanBlock plan={ph15} />
            <PlanBlock plan={ph30} reverse />

            <CategoryHero
              id="dental" sectionRef={(el) => { targets.current.dental = el; }}
              eyebrow="ProSonrisas" title="ProSonrisas"
              description="Cuidado dental para ti y tu familia, con dos alternativas: Plus y Full."
              bullets={["Los mejores centros odontológicos a nivel nacional", "Evaluaciones, consultas, diagnósticos, blanqueamientos", "Rayos X y limpiezas dentales, sin deducibles y reembolsos"]}
              image="/images/planes/prosonrisas/prosonrisas-tratamiento.jpg" imageAlt="Atención odontológica de un paciente sonriendo"
            />
            <PlanBlock plan={prosonrisas} />

            <CategoryHero
              id="proteger" sectionRef={(el) => { targets.current.proteger = el; }}
              eyebrow="Protección extra" title="Proteger"
              description="Respaldo complementario para gastos médicos de gran alcance, una vez superado el deducible."
              bullets={["El complemento perfecto para tu cobertura personal o corporativa hasta $500.000 en caso de enfermedades o accidentes graves", "Atención en los mejores hospitales y clínicas en convenio con Humana"]}
              image="/humana-historia-hero.png" imageAlt="Familia con respaldo del Plan Proteger"
            />
            <PlanBlock plan={proteger} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
