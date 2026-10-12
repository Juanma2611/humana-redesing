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

      <div className="biz-page" data-accent="navy">
        {/* Hero ------------------------------------------------------- */}
        <section className="biz-hero" id="h30p15-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">REDES PREFERENTES</span>
            <h1>Red Humano30 / Preciso15</h1>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              <div style={{ position: "relative", width: 130, height: 56, background: "#fff", borderRadius: 12, padding: 8 }}><Image src="https://humana.med.ec/wp-content/uploads/2021/04/PRECISO-15.png" alt="Logo Preciso 15" fill sizes="130px" unoptimized style={{ objectFit: "contain" }} /></div>
              <div style={{ position: "relative", width: 130, height: 56, background: "#fff", borderRadius: 12, padding: 8 }}><Image src="https://humana.med.ec/wp-content/uploads/2021/04/HUMANO-30.png" alt="Logo Humano 30" fill sizes="130px" unoptimized style={{ objectFit: "contain" }} /></div>
            </div>
          </div>
        </section>

        {/* Red Ambulatoria -------------------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">COBERTURA AMBULATORIA</span>
              <h2>Red Ambulatoria</h2>
            </div>
            <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: 360, aspectRatio: "3/1", margin: "0 auto 24px" }}>
                <Image src="https://humana.med.ec/wp-content/uploads/2021/04/metrored-medilink-logos.png" alt="Logos Metrored y Medilink" fill sizes="360px" unoptimized style={{ objectFit: "contain" }} />
              </div>
              <p className="text-justify-wide">En el resto de prestadores de Modalidad Cerrada de la Red CAM (Centros de Atención Médica) no aplica crédito ni cobertura vía reembolso.</p>
            </div>
          </div>
        </section>

        {/* Red Hospitalaria --------------------------------------------- */}
        <section className="biz-section is-dark">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">COBERTURA HOSPITALARIA</span>
              <h2>Red Hospitalaria</h2>
            </div>

            <div className="h30p15-table-wrap plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24, marginTop: 32 }}>
              <table className="plan-detail-table">
                <thead><tr><th>Ciudad</th><th>Prestador</th><th>Humano 30<br />(Metrohumana 30.000)</th><th>Preciso 15<br />(Practihumana 15.000)</th></tr></thead>
                <tbody>
                  {hospitals.map((h) => (
                    <tr key={h.prestador}>
                      <td>{h.ciudad}</td>
                      <th scope="row">{h.prestador}</th>
                      <td className={h.h30 === "No aplica" ? "cell-na" : undefined}>{h.h30}</td>
                      <td className={h.p15 === "No aplica" ? "cell-na" : undefined}>{h.p15}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="h30p15-cards" style={{ marginTop: 32 }}>
              {hospitals.map((h) => (
                <div className="h30p15-card" key={h.prestador}>
                  <span className="h30p15-card-city">{h.ciudad}</span>
                  <span className="h30p15-card-name">{h.prestador}</span>
                  <div className={h.h30 === "No aplica" ? "h30p15-card-row is-na" : "h30p15-card-row"}><span>Humano 30 (Metrohumana 30.000)</span><span>{h.h30}</span></div>
                  <div className={h.p15 === "No aplica" ? "h30p15-card-row is-na" : "h30p15-card-row"}><span>Preciso 15 (Practihumana 15.000)</span><span>{h.p15}</span></div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: 13, color: "#f0c781", background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.2)", borderRadius: 12, padding: 14, marginTop: 20, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
              ⚠️ En la página oficial esta tabla usa celdas combinadas: solo se leen explícitamente &quot;90%&quot;
              (primera fila de Humano 30 y tercera fila de Preciso 15) y &quot;No aplica&quot; (Preciso 15 en Clínica
              Moderna, Hospital Metropolitano y Kennedy Alborada). Los demás &quot;90%&quot; son la lectura más
              probable de las celdas combinadas — confirmar con Comercial antes de publicar.
            </p>

            <p className="text-justify-wide" style={{ color: "rgba(255,255,255,.85)", maxWidth: 820, margin: "24px auto 0", textAlign: "center" }}>
              En el resto de prestadores de Modalidad Cerrada de la RED Hospitalaria, tendrán cobertura como
              Modalidad Abierta vía reembolso al 80% y aplicará como cualquier incapacidad.
            </p>
          </div>
        </section>

        {/* Planes individuales y familiares ------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <h2>Planes Individuales y Familiares</h2>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24, justifyContent: "center" }}>
              {planLinks.map((p) => <Link key={p.label} href={p.href} className="secondary-button small">{p.label}</Link>)}
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
