import type { Metadata } from "next";
import { Headset, ShieldAlert } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalClosingCta, InstitutionalExploreCards, officialContactChannels } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Canal de Reporte Confidencial - Humana S.A.",
  description: "Canal de Reporte Confidencial de Grupo Conclina para informar sobre eventos irregulares o actividades ilícitas de forma confidencial.",
};

const testimonies = [
  "Apropiación indebida de fondos y activos.",
  "Creación de transacciones ficticias o documentación.",
  "Sobornos y retornos.",
  "Conflictos de intereses.",
  "Colusión entre empleados y proveedores o clientes.",
  "Intimidación sexual o de hostigamiento físico.",
  "Compras para uso personal.",
  "Nepotismo o favoritismo inadecuado.",
  "Otros que considere importantes.",
];

export default function CanalReporteConfidencialPage() {
  return (
    <SiteShell title="Canal de Reporte Confidencial">
      <InstitutionalBreadcrumb page="Canal de Reporte Confidencial" />

      {/* Plantilla institucional (aprobada en Humana S.A.): hero de borde a
          borde. Esta página no tenía foto ni párrafo de intro propios (solo
          el H1); se mantiene así, sin inventar un subtítulo nuevo. */}
      <section className="institutional-hero">
        <div className="institutional-hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="institutional-hero-copy" style={{ maxWidth: 820 }}>
            <span className="kicker">¿Quiénes somos?</span>
            <h1>Canal de Reporte Confidencial</h1>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: "64px clamp(24px,7vw,110px)" }}>
        <div className="institutional-topic-grid" style={{ maxWidth: 1180, margin: "0 auto", gridTemplateColumns: "1fr 1fr" }}>
          <article className="plan-hub-card">
            <span className="plan-hub-card-icon"><Headset size={22} /></span>
            <h2 style={{ fontSize: 19, margin: "0 0 10px", color: "#073b60" }}>Conócenos e Informa</h2>
            <p className="text-justify-wide" style={{ margin: "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Grupo Conclina C.A., conformado por: «Hospital Metropolitano», «Humana», y «Metroambulat», en
              aplicación de las mejores prácticas empresariales, incorpora la Dirección de Auditoría
              Corporativa, dedicada al mejoramiento del ambiente de control interno.
            </p>
            <p className="text-justify-wide" style={{ margin: "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Por ello, le ofrecemos el Canal de Reporte Confidencial, con el fin de recibir comentarios
              acerca de eventos irregulares, que puedan suscitar un riesgo de actividades ilícitas.
            </p>
            <p style={{ margin: "0 0 10px", color: "#073b60", fontSize: 15, lineHeight: 1.6, fontWeight: 700 }}>¡Le invitamos a colaborar con nosotros reportándonos cualquier situación inusual!</p>
            <p style={{ margin: "0 0 6px", color: "#3f5f73", fontSize: 15 }}>Para esto puede:</p>
            <ul className="plan-faq-checklist">
              <li>Llamar al 399-8000 Ext. 2136.</li>
              <li>Escribir a conclina_confidencial@hotmail.com</li>
              <li>O visitarnos en las oficinas de Auditoría Corporativa CONCLINA ubicadas en el edificio Meditrópoli – Planta Baja junto a Presidencia Ejecutiva.</li>
            </ul>
          </article>

          <article className="plan-hub-card">
            <span className="plan-hub-card-icon"><ShieldAlert size={22} /></span>
            <h2 style={{ fontSize: 19, margin: "0 0 10px", color: "#073b60" }}>Políticas</h2>
            <p className="text-justify-wide" style={{ margin: "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Auditoría Corporativa del Grupo Conclina garantiza la confidencialidad de los reportes que
              lleguen hasta sus centros de comunicación. Nuestro principal interés es brindar a los
              colaboradores, proveedores, y demás clientes internos y externos un entorno propicio basado
              en el alto nivel profesional, experticia y ética de los auditores para generar nexos de
              confianza y apertura en el desarrollo de temas relevantes respecto de fraudes o ilícitos en
              general.
            </p>
            <p className="text-justify-wide" style={{ margin: "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              La información transmitida debe encontrarse basada en testimonios, conversaciones o
              circunstancias reales y no en percepciones ni calificativos. Únicamente se tomarán en cuenta
              los comentarios que no contengan epítetos, adjetivos o juicios de valor que atenten contra la
              moral y susceptibilidad de los involucrados.
            </p>
            <p className="text-justify-wide" style={{ margin: 0, color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Las comunicaciones que sean examinadas permanecerán en los archivos corporativos privados
              junto con los soportes de la investigación. No serán divulgados, ni se tomarán represalias
              contra los informantes.
            </p>
          </article>
        </div>
      </section>

      <section className="institutional-topic-section">
        <div className="institutional-topic-grid" style={{ maxWidth: 1180, margin: "0 auto", gridTemplateColumns: "1fr 1fr" }}>
          <article className="plan-hub-card">
            <h2 style={{ fontSize: 19, margin: "0 0 10px", color: "#073b60" }}>Testimonios que serán recibidos</h2>
            <ul className="plan-faq-checklist">
              {testimonies.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <article className="plan-hub-card">
            <h2 style={{ fontSize: 19, margin: "0 0 10px", color: "#073b60" }}>Canales de comunicación</h2>
            <ul className="plan-faq-checklist">
              {officialContactChannels.map((channel) => (
                <li key={channel.label}><strong>{channel.label}:</strong> {channel.value}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <InstitutionalClosingCta />

      <InstitutionalExploreCards currentHref="/por-que-humana/canal-de-reporte-confidencial/" />
    </SiteShell>
  );
}
