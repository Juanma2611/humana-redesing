import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks, officialContactChannels } from "@/components/institutional-nav";

export const metadata: Metadata = { title: "Canal de Reporte Confidencial - Humana S.A." };

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

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <h1>Canal de Reporte Confidencial</h1>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <h3>Conócenos e Informa:</h3>
        <p>
          Grupo Conclina C.A., conformado por: «Hospital Metropolitano», «Humana», y «Metroambulat», en
          aplicación de las mejores prácticas empresariales, incorpora la Dirección de Auditoría
          Corporativa, dedicada al mejoramiento del ambiente de control interno.
        </p>
        <p>
          Por ello, le ofrecemos el Canal de Reporte Confidencial, con el fin de recibir comentarios
          acerca de eventos irregulares, que puedan suscitar un riesgo de actividades ilícitas.
        </p>
        <p><strong>¡Le invitamos a colaborar con nosotros reportándonos cualquier situación inusual!</strong></p>
        <p>Para esto puede:</p>
        <ul className="plan-faq-checklist">
          <li>Llamar al 399-8000 Ext. 2136.</li>
          <li>Escribir a conclina_confidencial@hotmail.com</li>
          <li>O visitarnos en las oficinas de Auditoría Corporativa CONCLINA ubicadas en el edificio Meditrópoli – Planta Baja junto a Presidencia Ejecutiva.</li>
        </ul>

        <h3>Políticas:</h3>
        <p>
          Auditoría Corporativa del Grupo Conclina garantiza la confidencialidad de los reportes que
          lleguen hasta sus centros de comunicación. Nuestro principal interés es brindar a los
          colaboradores, proveedores, y demás clientes internos y externos un entorno propicio basado en
          el alto nivel profesional, experticia y ética de los auditores para generar nexos de confianza y
          apertura en el desarrollo de temas relevantes respecto de fraudes o ilícitos en general.
        </p>
        <p>
          La información transmitida debe encontrarse basada en testimonios, conversaciones o
          circunstancias reales y no en percepciones ni calificativos. Únicamente se tomarán en cuenta los
          comentarios que no contengan epítetos, adjetivos o juicios de valor que atenten contra la moral y
          susceptibilidad de los involucrados.
        </p>
        <p>
          Las comunicaciones que sean examinadas permanecerán en los archivos corporativos privados junto
          con los soportes de la investigación. No serán divulgados, ni se tomarán represalias contra los
          informantes.
        </p>

        <h3>Testimonios que serán recibidos:</h3>
        <ul className="plan-faq-checklist">
          {testimonies.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="plan-hub-card" style={{ padding: 24 }}>
          <h3>Canales de comunicación</h3>
          <ul className="plan-faq-checklist">
            {officialContactChannels.map((channel) => (
              <li key={channel.label}><strong>{channel.label}:</strong> {channel.value}</li>
            ))}
          </ul>
        </div>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
