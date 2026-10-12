import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, FileCheck2, Settings, UserCog } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { ExpedienteChecklist } from "./ExpedienteChecklist";

export const metadata: Metadata = {
  title: "Portal Prestador - Humana S.A.",
  description:
    "GAIA es el portal donde los prestadores de salud administran su convenio y donde las instituciones que quieren integrarse a la red inician su proceso de…",
};

const steps = [
  "Crea tus credenciales. Entra a Registro de prestador —la misma opción “No tengo cuenta” de la pantalla de acceso— para generar tu usuario y contraseña, y comenzar el registro como prestador interesado.",
  "Completa el formulario. Llena el formulario de Prestador Interesado con los datos de tu institución y los servicios que ofreces. Detalla únicamente los servicios para los cuales tu permiso de funcionamiento te acredita.",
  "Carga tus documentos. Adjunta en el formulario los cuatro documentos obligatorios. El tarifario y el staff médico se cargan en los formatos que el portal te entrega.",
];

const areas = [
  { icon: Settings, title: "Gestión de servicios", items: ["Agregar nuevos servicios a la sucursal activa.", "Inactivar servicios vigentes del convenio de forma temporal.", "Inactivar servicios de forma permanente, según tus necesidades de gestión."] },
  { icon: Building2, title: "Administración de sucursales", items: ["Incorporar nuevas sucursales al convenio.", "Consultar y administrar las sucursales ya registradas."] },
  { icon: UserCog, title: "Actualización del staff médico", items: ["Incluir personal médico en una o varias sucursales.", "Excluir personal médico de una o varias sucursales."] },
  { icon: FileCheck2, title: "Documentación regulatoria", items: ["Actualizar el permiso de funcionamiento de cada sucursal.", "Cargar y mantener al día el resto de tu documentación."] },
];

export default function PortalPrestadorPage() {
  return (
    <SiteShell title="Portal Prestador">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Portal Prestador</span>
      </nav>

      <div className="biz-page" data-accent="teal">
        {/* Hero ----------------------------------------------------------- */}
        <section className="biz-hero" id="portal-prestador-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">GAIA</span>
            <h1>Tu convenio con Humana, <span>gestionado en línea.</span></h1>
            <p className="biz-hero-body">
              GAIA es el portal donde los prestadores de salud administran su convenio y donde las
              instituciones que quieren integrarse a la red inician su proceso de inclusión.
            </p>
          </div>
          <div className="biz-container" style={{ marginTop: 8 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 680, margin: "0 auto" }}>
              <div className="biz-list-card"><strong>Sin trámites presenciales</strong><p style={{ margin: 0, color: "rgba(255,255,255,.85)", fontSize: 15 }}>Solicitudes, cargas y actualizaciones desde el portal.</p></div>
              <div className="biz-list-card"><strong>Documentación en línea</strong><p style={{ margin: 0, color: "rgba(255,255,255,.85)", fontSize: 15 }}>Permisos, tarifario y staff médico siempre vigentes.</p></div>
            </div>
          </div>
          <figure className="biz-hero-image">
            <Image src="/images/portal-prestador/portal-prestador-hero.webp" alt="Administradora de un centro médico gestionando su convenio con Humana desde su computadora" fill sizes="(max-width: 1200px) 100vw, 1180px" unoptimized />
          </figure>
        </section>

        {/* Acceso: Quiero ser prestador / Ya tengo convenio ---------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">INGRESA AL PORTAL</span>
              <h2>Elige tu acceso</h2>
            </div>
            <div className="plan-hub-grid" style={{ marginTop: 40, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
              <article className="plan-hub-card">
                <div className="plan-hub-card-copy">
                  <h3>Quiero ser prestador</h3>
                  <p><strong>Registro de prestador interesado.</strong> Inicia el proceso de negociación y evaluación para incorporarte a la red de prestadores de Humana.</p>
                  <a className="primary-button" href="https://gaia.humana.med.ec/registro-prestador" target="_blank" rel="noreferrer">Crear mis credenciales <ArrowRight size={16} /></a>
                  <p style={{ fontSize: 13, color: "#5e7384" }}>Equivale a la opción &quot;No tengo cuenta&quot; de la pantalla de acceso.</p>
                </div>
              </article>
              <article className="plan-hub-card">
                <div className="plan-hub-card-copy">
                  <h3>Ya tengo convenio</h3>
                  <p><strong>Portal Prestadores.</strong> Administra servicios, sucursales, staff médico y documentación regulatoria de tu convenio vigente.</p>
                  <a className="primary-button" href="https://portalprestador.humana.med.ec/auth/login" target="_blank" rel="noreferrer">Soy prestador <ArrowRight size={16} /></a>
                  <p style={{ fontSize: 13, color: "#5e7384" }}>Usa las credenciales asignadas a tu institución.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Tres pasos: línea de tiempo -------------------------------------- */}
        <section className="biz-section is-dark">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">POSTULACIÓN</span>
              <h2>Tres pasos para iniciar tu postulación</h2>
              <p>El registro como prestador interesado abre tu proceso de negociación y evaluación con Humana. Completa los tres pasos en orden.</p>
            </div>
            <ol className="biz-timeline" style={{ maxWidth: 900 }}>
              {steps.map((text, i) => (
                <li className="biz-timeline-step" key={text}>
                  <span className="biz-timeline-num">{String(i + 1).padStart(2, "0")}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Prepara tu expediente: checklist interactiva --------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">DOCUMENTACIÓN</span>
              <h2>Prepara tu expediente</h2>
              <p>Marca cada documento a medida que lo tengas listo. Cuando completes los obligatorios, estarás en condiciones de llenar el formulario sin interrupciones.</p>
            </div>
            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <ExpedienteChecklist />
            </div>
          </div>
        </section>

        {/* Qué puedes gestionar en el portal -------------------------------- */}
        <section className="biz-section is-brand">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">TU CONVENIO ACTIVO</span>
              <h2>Qué puedes gestionar en el portal</h2>
              <p>Con tu convenio activo, resuelves de forma ágil y directa los cambios que antes requerían trámite. Estas son las cuatro áreas disponibles.</p>
            </div>
            <div className="biz-feature-grid">
              {areas.map(({ icon: Icon, title, items }) => (
                <div key={title} className="biz-feature-grid-card">
                  <div className="biz-feature-grid-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <ul className="biz-text-list" style={{ fontSize: 14.5, color: "rgba(255,255,255,.78)", marginTop: 10 }}>
                    {items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cierre ------------------------------------------------------------ */}
        <section className="biz-section is-dark is-close">
          <div className="biz-container biz-close">
            <div className="biz-section-head">
              <span className="biz-eyebrow">GAIA</span>
              <h2>Todo listo para ingresar.</h2>
              <p>Si ya tienes convenio, entra con tus credenciales. Si vas a postular, crea tu cuenta desde el registro de prestador y continúa con el formulario.</p>
            </div>
            <div className="biz-close-actions">
              <a className="biz-btn-primary" href="https://gaia.humana.med.ec/registro-prestador" target="_blank" rel="noreferrer">Registrarme como prestador <ArrowRight aria-hidden="true" /></a>
              <a className="biz-btn-link" href="https://portalprestador.humana.med.ec/auth/login" target="_blank" rel="noreferrer">Ingresar al portal <ArrowRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
