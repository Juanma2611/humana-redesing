import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Red Humano30 / Preciso15 - Humana S.A.",
  description:
    "En el resto de prestadores de Modalidad Cerrada de la Red CAM (Centros de Atención Médica) no aplica crédito ni cobertura vía reembolso",
};

const hospitals = [
  { ciudad: "Quito", prestador: "Clínica Moderna", h30: "90%", p15: "No aplica" },
  { ciudad: "Quito", prestador: "Hospital Metropolitano", h30: "90%", p15: "No aplica" },
  { ciudad: "Quito", prestador: "Clínica Emergencias San Francisco", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Clínica María Auxiliadora", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Hospital Padre Carollo", h30: "90%", p15: "90%" },
  { ciudad: "Quito", prestador: "Clínica de Especialidades Tumbaco", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Hospital Clínica San Francisco", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Clínica Alborada", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Sur Hospital", h30: "90%", p15: "90%" },
  { ciudad: "Guayaquil", prestador: "Hospital Clínica Kennedy Alborada", h30: "90%", p15: "No aplica" },
];

const planLinks = [
  { label: "Practihumana15", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana15" },
  { label: "Practihumana30", href: "/planes-medicos/personas/plan-individual-y-familiar/practihumana30" },
  { label: "Metrohumana50", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana50" },
  { label: "Metrohumana80", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana80" },
  { label: "Metrohumana150", href: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana150" },
];

export default function H30P15Page() {
  return (
    <SiteShell title="Red Humano30 / Preciso15">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Red Humano30 / Preciso15</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 820 }}>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", marginBottom: 20 }}>
          <div style={{ position: "relative", width: 120, height: 60 }}><Image src="https://humana.med.ec/wp-content/uploads/2021/04/PRECISO-15.png" alt="Logo Preciso 15" fill sizes="120px" unoptimized style={{ objectFit: "contain" }} /></div>
          <div style={{ position: "relative", width: 120, height: 60 }}><Image src="https://humana.med.ec/wp-content/uploads/2021/04/HUMANO-30.png" alt="Logo Humano 30" fill sizes="120px" unoptimized style={{ objectFit: "contain" }} /></div>
        </div>
        <h1>Red Humano30 / Preciso15</h1>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <h3>Red Ambulatoria</h3>
        <div style={{ position: "relative", width: "100%", maxWidth: 400, aspectRatio: "3/1", margin: "16px 0" }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2021/04/metrored-medilink-logos.png" alt="Logos Metrored y Medilink" fill sizes="400px" unoptimized style={{ objectFit: "contain", objectPosition: "left" }} />
        </div>
        <p>En el resto de prestadores de Modalidad Cerrada de la Red CAM (Centros de Atención Médica) no aplica crédito ni cobertura vía reembolso.</p>

        <h3>Red Hospitalaria</h3>
        <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24 }}>
          <table className="plan-detail-table">
            <thead><tr><th>Ciudad</th><th>Prestador</th><th>Humano 30<br />(Metrohumana 30.000)</th><th>Preciso 15<br />(Practihumana 15.000)</th></tr></thead>
            <tbody>
              {hospitals.map((h) => (
                <tr key={h.prestador}><td>{h.ciudad}</td><th scope="row">{h.prestador}</th><td>{h.h30}</td><td>{h.p15}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: "#a3690b", background: "#fff4e5", border: "1px solid #f3cf8a", borderRadius: 10, padding: 12, marginTop: 12 }}>
          ⚠️ En la página oficial esta tabla usa celdas combinadas: solo se leen explícitamente &quot;90%&quot;
          (primera fila de Humano 30 y tercera fila de Preciso 15) y &quot;No aplica&quot; (Preciso 15 en Clínica
          Moderna, Hospital Metropolitano y Kennedy Alborada). Los demás &quot;90%&quot; son la lectura más
          probable de las celdas combinadas — confirmar con Comercial antes de publicar.
        </p>

        <p>
          En el resto de prestadores de Modalidad Cerrada de la RED Hospitalaria, tendrán cobertura como
          Modalidad Abierta vía reembolso al 80% y aplicará como cualquier incapacidad.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 64px" }}>
        <h3>Planes Individuales y Familiares</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
          {planLinks.map((p) => <Link key={p.label} href={p.href} className="secondary-button small">{p.label}</Link>)}
        </div>
      </section>
    </SiteShell>
  );
}
