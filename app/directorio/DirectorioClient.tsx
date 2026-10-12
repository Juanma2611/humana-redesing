import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const officialNetworkUrl = "https://red.humana.med.ec/RedHumana";

export default function DirectorioClient() {
  return <SiteShell title="Red médica">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link><span>»</span><span>Red de prestadores</span>
    </nav>

    <div className="biz-page" data-accent="blue">
      {/* Hero ------------------------------------------------------- */}
      <section className="biz-hero" id="directorio-inicio">
        <div className="biz-hero-copy">
          <span className="biz-eyebrow">RED DE PRESTADORES</span>
          <h1>Red de prestadores <span>Humana S.A.</span></h1>
          <p className="biz-hero-body">Explora el tipo de atención que necesitas y prepara tu búsqueda en la Red Humana.</p>
          <div className="biz-hero-actions">
            <a className="biz-btn-primary" href={officialNetworkUrl} target="_blank" rel="noreferrer">Consultar Red Humana <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="biz-hero-stats">
            <article><strong>1255</strong><p>Médicos</p></article>
            <article><strong>235</strong><p>Hospitales y Clínicas</p></article>
            <article><strong>811</strong><p>Centros Médicos</p></article>
          </div>
        </div>
      </section>

      {/* Red CAM ---------------------------------------------------- */}
      <section className="biz-section is-light">
        <div className="biz-container" style={{ maxWidth: 820 }}>
          <div className="biz-list-card">
            <h2 style={{ margin: "0 0 14px", color: "#073b60", fontSize: "clamp(28px,3.4vw,36px)" }}>Red CAM</h2>
            <p className="text-justify-wide">Es la red de Centros de Atención Médica que brinda servicios ambulatorios integrales. Esta modalidad funciona bajo un copago fijo que varía según la especialidad, y un porcentaje de cobertura para servicios complementarios, de acuerdo al plan contratado.</p>
            <h3 style={{ marginTop: 28 }}>¿Cómo usar la RED?</h3>
            <ol className="biz-step-list">
              {[
                "Busque el prestador en el directorio según la ubicación geográfica y el servicio requerido.",
                "Identifique al prestador que lleve el icono de su Red CAM.",
                "Comuníquese al número de contacto del prestador seleccionado.",
                "Identifíquese como afiliado de Humana.",
                "Agende la cita de acuerdo a la disponibilidad.",
                "Acuda con 20 minutos de anticipación a la cita.",
                "Presente su documento de identificación.",
                "Cancele el copago.",
              ].map((text, i) => (
                <li key={text}><span className="biz-step-num">{i + 1}</span><span>{text}</span></li>
              ))}
            </ol>
            <p style={{ color: "#5e7384", fontSize: 14, marginTop: 20 }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>
          </div>
        </div>
      </section>

      {/* Red Preferida ------------------------------------------------ */}
      <section className="biz-section is-dark">
        <div className="biz-container" style={{ maxWidth: 820 }}>
          <div className="biz-list-card">
            <h2 style={{ margin: "0 0 14px", fontSize: "clamp(28px,3.4vw,36px)" }}>Red Preferida</h2>
            <p className="text-justify-wide">Es la red conformada por médicos especialistas, profesionales del más alto nivel, cuenta con más de 800 doctores en convenio a nivel nacional.</p>
            <ul className="biz-text-list" style={{ marginTop: 16 }}>
              <li><strong>Red Preferida Practihumana:</strong> Valor de copago $15 (aplica para planes Practihumana y Metrohumana).</li>
              <li><strong>Red Preferida Metrohumana:</strong> Valor de copago $25 (aplica para planes Metrohumana).</li>
            </ul>
            <p className="text-justify-wide" style={{ marginTop: 16 }}>Proceso: los mismos 8 pasos, identificando el icono de Red Preferida (PractiHumana o MetroHumana) y cancelando el copago según el tipo de red seleccionada.</p>
            <p style={{ color: "rgba(255,255,255,.65)", fontSize: 14, marginTop: 16 }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>
          </div>
        </div>
      </section>

      {/* Red Reembolso ------------------------------------------------ */}
      <section className="biz-section is-light">
        <div className="biz-container" style={{ maxWidth: 820 }}>
          <div className="biz-list-card">
            <h2 style={{ margin: "0 0 14px", color: "#073b60", fontSize: "clamp(28px,3.4vw,36px)" }}>Red Reembolso</h2>
            <p className="text-justify-wide">Esta red está conformada por más de 350 médicos especialistas a nivel nacional. Con esta red puede acceder a tarifas preferenciales por consultas médicas.</p>
            <p className="text-justify-wide" style={{ marginTop: 12 }}>Cómo usar la red: los mismos 8 pasos, identificando el icono de Red Reembolso y cancelando el valor preferencial.</p>
          </div>
        </div>
      </section>

      {/* Cierre: Consultar Red Humana ------------------------------------ */}
      <section className="biz-section is-dark is-close">
        <div className="biz-container biz-close">
          <div className="biz-section-head">
            <span className="biz-eyebrow">RED DE PRESTADORES</span>
            <h2>Encuentra tu prestador en la Red Humana.</h2>
          </div>
          <div className="biz-close-actions">
            <a className="biz-btn-primary" href={officialNetworkUrl} target="_blank" rel="noreferrer">Consultar Red Humana <ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>
    </div>
  </SiteShell>;
}
