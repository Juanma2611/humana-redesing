import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const officialNetworkUrl = "https://red.humana.med.ec/RedHumana";

const camSteps = [
  "Busque el prestador en el directorio según la ubicación geográfica y el servicio requerido.",
  "Identifique al prestador que lleve el icono de su Red CAM.",
  "Comuníquese al número de contacto del prestador seleccionado.",
  "Identifíquese como afiliado de Humana.",
  "Agende la cita de acuerdo a la disponibilidad.",
  "Acuda con 20 minutos de anticipación a la cita.",
  "Presente su documento de identificación.",
  "Cancele el copago.",
];

export default function DirectorioClient() {
  return <SiteShell title="Red médica">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link><span>»</span><span>Red de prestadores</span>
    </nav>

    <div className="biz-page" data-accent="blue">
      {/* Hero: foto completa + overlay navy ----------------------------- */}
      <section className="biz-hero-photo" id="directorio-inicio">
        <Image className="biz-hero-photo-img" src="/images/directorio/directorio-hero.webp" alt="Dos profesionales de la red de prestadores Humana conversando en el lobby de una clínica" fill sizes="100vw" unoptimized />
        <div className="biz-hero-photo-overlay" />
        <div className="biz-hero-photo-content">
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
      <section className="biz-section is-light" id="red-cam">
        <div className="biz-container">
          <div className="biz-feature">
            <figure className="biz-feature-media">
              <Image src="/images/directorio/red-cam.webp" alt="Afiliada siendo atendida en la recepción de un centro médico de la Red CAM" fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
            </figure>
            <div className="biz-feature-copy">
              <span className="biz-eyebrow">RED CAM</span>
              <h2>Red CAM</h2>
              <p className="text-justify-wide">Es la red de Centros de Atención Médica que brinda servicios ambulatorios integrales. Esta modalidad funciona bajo un copago fijo que varía según la especialidad, y un porcentaje de cobertura para servicios complementarios, de acuerdo al plan contratado.</p>
            </div>
          </div>

          <div className="biz-section-head" style={{ marginTop: 64 }}>
            <h3 style={{ fontSize: "clamp(22px,2.4vw,28px)", color: "#073b60", margin: 0 }}>¿Cómo usar la RED?</h3>
          </div>
          <ol className="biz-timeline">
            {camSteps.map((text, i) => (
              <li className="biz-timeline-step" key={text}>
                <span className="biz-timeline-num">{i + 1}</span>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          <p style={{ color: "#5e7384", fontSize: 14, marginTop: 32, textAlign: "center" }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>
        </div>
      </section>

      {/* Red Preferida ------------------------------------------------ */}
      <section className="biz-section is-dark" id="red-preferida">
        <div className="biz-container">
          <div className="biz-feature reverse">
            <figure className="biz-feature-media">
              <Image src="/images/directorio/red-preferida.webp" alt="Médico especialista de la Red Preferida conversando con un paciente en su consultorio" fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
            </figure>
            <div className="biz-feature-copy">
              <span className="biz-eyebrow">RED PREFERIDA</span>
              <h2>Red Preferida</h2>
              <p className="text-justify-wide">Es la red conformada por médicos especialistas, profesionales del más alto nivel, cuenta con más de 800 doctores en convenio a nivel nacional.</p>
            </div>
          </div>

          <div className="biz-price-cards">
            <div className="biz-price-card">
              <strong>$15</strong>
              <span>Red Preferida Practihumana</span>
              <small>Aplica para planes Practihumana y Metrohumana</small>
            </div>
            <div className="biz-price-card">
              <strong>$25</strong>
              <span>Red Preferida Metrohumana</span>
              <small>Aplica para planes Metrohumana</small>
            </div>
          </div>

          <div style={{ maxWidth: 680, margin: "32px auto 0", textAlign: "center" }}>
            <p className="text-justify-wide" style={{ color: "rgba(255,255,255,.85)" }}>Proceso: los mismos 8 pasos, identificando el icono de Red Preferida (PractiHumana o MetroHumana) y cancelando el copago según el tipo de red seleccionada.</p>
            <p style={{ color: "rgba(255,255,255,.6)", fontSize: 14, marginTop: 16 }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>
          </div>
        </div>
      </section>

      {/* Red Reembolso: bloque de color sin foto ------------------------- */}
      <section className="biz-section is-brand" id="red-reembolso">
        <div className="biz-container">
          <div className="biz-stat-block">
            <span className="biz-eyebrow">RED REEMBOLSO</span>
            <strong>350+</strong>
            <h2 style={{ color: "#fff", fontSize: "clamp(32px,3.6vw,38px)", margin: 0, fontWeight: 650 }}>médicos especialistas a nivel nacional</h2>
            <p className="text-justify-wide" style={{ color: "rgba(255,255,255,.85)", marginTop: 16 }}>Esta red está conformada por más de 350 médicos especialistas a nivel nacional. Con esta red puede acceder a tarifas preferenciales por consultas médicas.</p>
            <p className="text-justify-wide" style={{ color: "rgba(255,255,255,.85)", marginTop: 12 }}>Cómo usar la red: los mismos 8 pasos, identificando el icono de Red Reembolso y cancelando el valor preferencial.</p>
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
