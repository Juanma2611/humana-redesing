import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks } from "@/components/institutional-nav";

export const metadata: Metadata = { title: "Fundación Metrofraternidad - Humana S.A." };

const programs = [
  {
    title: "1. Cirugías de Alta Complejidad.",
    body: [
      "El objetivo es salvar la vida o mejorar la calidad de pacientes pediátricos a través de cirugías resolutivas de alta complejidad. Para esto, Metrofraternidad enfoca su campo de acción en 4 especialidades médicas que son traumatología pediátrica, cardiología pediátrica, cirugía pediátrica y traumatología. Para conocer más sobre las especialidades que trata Metrofraternidad, haz click aquí.",
      "En este programa se han salvado la vida de más de 10.000 niños y adolescentes.",
    ],
    link: "https://www.metrofraternidad.org/",
  },
  {
    title: "2. Programa de Ceguera Infantil.",
    body: [
      "Más del 80% de casos de ceguera infantil pueden prevenirse con un tratamiento adecuado. Por eso Metrofraternidad cuenta con un programa enfocado en brindar atención clínica y quirúrgica a pacientes pediátricos de escasos recursos de todo el país. Este es el único programa de Metrofraternidad que cuenta con un consultorio médico y que, además, visita comunidades en brigadas de salud visual.",
      "Hasta la fecha se han atendido a más de 5.000 niños; esto quiere decir que gracias a una atención médica especializada y una cirugía correctiva oportuna, han evitado la ceguera.",
    ],
  },
  {
    title: "3. Brigadas Médicas.",
    body: [
      "Metrofraternidad, en alianza con el Hospital Metropolitano y su cuerpo médico, además de otros socios estratégicos, recorre el país con un equipo y personal médico especializado para realizar brigadas de tipo clínico – quirúrgicos. De esta manera, se solucionan casos de baja y mediana complejidad en zonas con poco o nulo acceso a servicios de salud, y los casos más graves son luego derivados al Hospital Metropolitano.",
    ],
  },
];

export default function FundacionMetrofraternidadPage() {
  return (
    <SiteShell title="Fundación Metrofraternidad">
      <InstitutionalBreadcrumb page="Fundación Metrofraternidad" />

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
          <div style={{ position: "relative", width: 130, height: 56 }}>
            <Image src="https://humana.med.ec/wp-content/uploads/2022/09/metro-frat-logo.png" alt="Logo Fundación Metrofraternidad" fill sizes="130px" unoptimized style={{ objectFit: "contain" }} />
          </div>
          <div style={{ position: "relative", width: 130, height: 56 }}>
            <Image src="https://humana.med.ec/wp-content/uploads/2022/09/logo-metrofraternidad-humana.png" alt="Logo Humana junto a Fundación Metrofraternidad" fill sizes="130px" unoptimized style={{ objectFit: "contain" }} />
          </div>
        </div>
        <h1>Humana junto a Fundación Metrofraternidad,</h1>
        <p><strong>brindando esperanza a quienes más lo necesita.</strong></p>
        <p>
          Humana, sus afiliados y un cuerpo médico especializado entregan su conocimiento y dedicación
          para brindar atenciones médicas y cirugías complejas a niños y jóvenes de escasos recursos.
        </p>
        <p>
          Por ello expresamos nuestro compromiso con Fundación Metrofraternidad para que más niños de
          escasos recursos de todo el país tengan la esperanza de vivir su niñez a plenitud, contribuyendo
          a que los más pequeños reciban atención médica especializada. Conozca el testimonio de
          Madeleine:
        </p>
        <div style={{ position: "relative", maxWidth: 640, margin: "20px auto", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden" }}>
          <iframe
            src="https://www.youtube.com/embed/pjU_vkKoYyk"
            title="Testimonio de Madeleine - Fundación Metrofraternidad"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            allowFullScreen
          />
        </div>
        <p><strong>Nuestro mejor plan es ayudar.</strong> 6.900 atenciones a niños y adolescentes de escasos recursos.</p>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Los 3 programas de Metrofraternidad</h2>
        {programs.map((program) => (
          <div key={program.title} style={{ marginTop: 24 }}>
            <h3>{program.title}</h3>
            {program.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {program.link && (
              <a href={program.link} target="_blank" rel="noreferrer" className="secondary-button small">
                Conocer especialidades
              </a>
            )}
          </div>
        ))}
      </section>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 820 }}>
        <h2>Cuando adquieres un plan además de la mejor atención, te sumas a esta noble causa.</h2>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
