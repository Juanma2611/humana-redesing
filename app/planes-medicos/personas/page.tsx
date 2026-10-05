import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, ShoppingCart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const personaPlans = [
  {
    slug: "plan-individual-y-familiar",
    name: "Plan Individual y Familiar",
    image: "/familia-humana.png",
    items: [
      "Planes desde $15.000 a $150.000 de cobertura anual",
      <>La red médica más completa del mercado, y <strong>la mejor cobertura en medicinas</strong></>,
      <>Más beneficios: <strong>seguro de vida</strong>, asistencia exequial, etc.</>,
    ],
    quoteCat: "individualMetro",
    whatsappText: "Me interesa conocer sus planes médicos completos",
  },
  {
    slug: "plan-proteger",
    name: "Plan Proteger",
    image: "/humana-historia-hero.png",
    items: [
      <>El complemento perfecto para tu <strong>cobertura personal o corporativa</strong> hasta $500.000 en caso de <strong>enfermedades o accidentes graves</strong>.</>,
      "Atención en los mejores hospitales y clínicas en convenio con Humana.",
    ],
    quoteCat: "proteger",
    whatsappText: "Me interesa conocer su plan proteger de gastos mayores",
  },
  {
    slug: "plan-prosonrisas",
    name: "Plan Prosonrisas",
    image: "/humana-prosonrisas-hero.png",
    items: [
      <>Los mejores <strong>centros odontológicos</strong> a nivel nacional</>,
      <>Evaluaciones, consultas, <strong>diagnósticos</strong>, blanqueamientos</>,
      <>Rayos X y limpiezas dentales, <strong>sin deducibles</strong> y reembolsos</>,
    ],
    quoteCat: "dental",
    whatsappText: "Me interesa conocer su plan dental prosonrisas",
  },
];

export default function PlanesMedicosPersonasPage() {
  return (
    <SiteShell title="Planes médicos para Personas">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link>
        <span>»</span>
        <Link href="/planes-medicos">Planes médicos</Link>
        <span>»</span>
        <span>Planes médicos para Personas</span>
      </nav>

      <section className="content-section plan-hub-intro">
        <h1>Planes médicos para Personas</h1>
      </section>

      <section className="content-section plan-hub-grid plan-hub-grid-personas">
        {personaPlans.map((plan) => (
          <article className="plan-hub-card" key={plan.slug}>
            <div className="plan-hub-card-media">
              <Image src={plan.image} alt={plan.name} fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized />
            </div>
            <div className="plan-hub-card-copy">
              <h4>{plan.name}</h4>
              <ul className="plan-hub-card-list">
                {plan.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="plan-hub-card-actions">
                <Link className="primary-button small" href={`/planes-medicos/personas/${plan.slug}`}>
                  Ver plan <ArrowRight size={16} />
                </Link>
                <a
                  className="secondary-button small"
                  href={`https://online.humana.med.ec/app/precotizacion/data-contratante?cat=${plan.quoteCat}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart size={16} /> Cotizar plan
                </a>
                <a
                  className="secondary-button small whatsapp"
                  href={`https://api.whatsapp.com/send?phone=593992642828&text=${encodeURIComponent(plan.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> Pedir asesoría
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </SiteShell>
  );
}
