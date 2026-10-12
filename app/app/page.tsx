import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Gauge, MapPin, Pill, ReceiptText, ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Consulta el Estado de tus Reembolsos en la APP",
  description:
    "Consulta y descarga tus liquidaciones de reembolsos o envíalas a tu email. Si tienes dudas, ingresa al chat en línea para asistencia inmediata.",
};

const specs = [
  { label: "Versión", android: "11.2", ios: "3.7.13" },
  { label: "Última actualización", android: "16 de julio de 2024", ios: "06 de noviembre de 2025" },
  { label: "Tamaño", android: "128MB", ios: "43.5 MB" },
  { label: "Requiere", android: "Android 9 y versiones posteriores", ios: "iOS 16.6 o posterior" },
  { label: "Otros", android: "10.000+ descargas", ios: "Disponible para iPhone, iPad, Mac" },
];

const sections = [
  { icon: MapPin, title: "Mi Red: Guía Médica Humana", copy: "Aproveche al máximo su cobertura usando la Red médica Humana. Mediante la APP puede encontrar los mejores prestadores bajo distintas categorías: Consulta médica · Hospitalización · Exámenes de Laboratorio e Imagen · Terapias · Centros odontológicos." },
  { icon: ShieldCheck, title: "Autorizaciones y Mi Plan", copy: "En esta sección puedes consultar la información básica sobre tus planes contratados, tal como: Estado de tus pagos · Fecha de vigencia · Datos de contacto · Periodos de carencia · Porcentajes de cobertura · Beneficiarios del plan · Listado de atenciones recibidas." },
  { icon: ReceiptText, title: "Mis Reembolsos", copy: "Consulte el estado de sus reembolsos, descargando o enviando sus liquidaciones a su propio email. Si tiene dudas sobre algún trámite, ingrese al chat en línea o llame directamente a nuestro call center, uno de nuestros agentes le ayudará." },
  { icon: Gauge, title: "Panel de control", copy: "Con la APP MiHumana tendrás a tu disposición: Consulta de coberturas, beneficiarios, tiempos de carencia… · Descarga de documentos · Lista de prestadores georeferenciados · Gestión de Reembolsos · Agendamiento de citas y consulta médica · Pago en línea · Solicitud de medicamentos, autorizaciones y certificado de afiliación · Consulta médica · Etc." },
  { icon: Pill, title: "Compra de medicinas", copy: "Por medio de la APP solicite sus medicamentos con cobertura directa SIN reembolso, mediante nuestros prestadores Medicity y Farmacias Económicas. Seleccione su ciudad, e introduzca los datos del formulario: Paciente · Fecha de emisión de la receta · Dirección · Foto de la receta original." },
  { icon: CalendarCheck, title: "Agendamiento de citas", copy: "Ahora puede agendar sus citas médicas en Metrored directamente desde la aplicación. Puede realizar el pago de la consulta médica en la app o presencialmente." },
];

/* Mockup de celular en CSS puro (marco + pantalla con formas de marca,
   sin texto inventado ni capturas reales de la app). */
function PhoneMock() {
  return (
    <div className="app-phone-mock" aria-hidden="true">
      <div className="app-phone-screen">
        <div className="app-phone-bar" />
        <div className="app-phone-bar short" />
        <div className="app-phone-card"><span /></div>
        <div className="app-phone-card"><span /></div>
        <div className="app-phone-card"><span /></div>
        <div className="app-phone-dots"><span /><span /><span /></div>
      </div>
    </div>
  );
}

export default function AppPage() {
  return (
    <SiteShell title="MiHumana APP">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>APP</span>
      </nav>

      <div className="biz-page" data-accent="blue">
        {/* Hero ------------------------------------------------------- */}
        <section className="biz-hero" id="app-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">MIHUMANA APP</span>
            <h1>MiHumana APP</h1>
            <p className="biz-hero-line"><strong>Todos los servicios en tu celular</strong></p>
            <div className="biz-hero-actions">
              <a className="biz-btn-primary" href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer">Google Play</a>
              <a className="biz-btn-primary" href="https://apps.apple.com/ec/app/mi-humana/id1468370810" target="_blank" rel="noreferrer">App Store</a>
            </div>
          </div>
          <figure className="biz-hero-image" style={{ position: "relative" }}>
            <Image src="/images/app/app-hero.webp" alt="Mujer revisando la app MiHumana en su celular, tomando un café en una terraza" fill sizes="(max-width: 980px) 100vw, 1180px" unoptimized />
            <div className="app-phone-float"><PhoneMock /></div>
          </figure>
        </section>

        {/* Las 6 funciones ------------------------------------------------- */}
        <section className="biz-section is-dark">
          <div className="biz-container">
            <div className="biz-section-head">
              <span className="biz-eyebrow">TODO EN UN SOLO LUGAR</span>
              <h2>Lo que puedes hacer desde la app</h2>
            </div>
            <div className="biz-feature-grid">
              {sections.map(({ icon: Icon, title, copy }) => (
                <div key={title} className="biz-feature-grid-card">
                  <div className="biz-feature-grid-icon"><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Franja con foto + texto oficial corto --------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-feature">
              <figure className="biz-feature-media">
                <Image src="/images/app/app-funciones.webp" alt="Padre e hija revisando juntos la app MiHumana en el celular" fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
              </figure>
              <div className="biz-feature-copy">
                <span className="biz-eyebrow">MIHUMANA APP</span>
                <h2>Todos los servicios en tu celular</h2>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
                  <a className="biz-btn-primary" href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer">Google Play</a>
                  <a className="biz-btn-primary" href="https://apps.apple.com/ec/app/mi-humana/id1468370810" target="_blank" rel="noreferrer">App Store</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Más recursos -------------------------------------------------- */}
        <section className="biz-section is-brand">
          <div className="biz-container">
            <div className="biz-section-head">
              <h2>Más recursos dentro de la app</h2>
            </div>
            <div style={{ maxWidth: 760, margin: "32px auto 0" }}>
              <ul className="biz-text-list">
                <li>Todos los <a href="https://servicio.humana.med.ec/hc/es/articles/4402730448653-Descarga-de-Formularios" target="_blank" rel="noreferrer">documentos importantes</a> para realizar sus trámites, en formato PDF editable, tales como solicitar reembolso, pre-autorización de cirugía, autorizaciones de débito, y más.</li>
                <li>Aproveche al máximo su cobertura usando la <a href="https://red.humana.med.ec/" target="_blank" rel="noreferrer">Red médica Humana</a>. Mediante la APP puede encontrar los mejores prestadores bajo distintas categorías, segmentados por ciudad, sector o especialidad.</li>
                <li>Por medio de la app solicite sus medicamentos con cobertura directa SIN reembolsos, mediante nuestro aliado Medicity.</li>
                <li>Obtenga el mejor beneficio de su cobertura médica, conociendo todas las prestaciones de su plan, sus deducibles y beneficios incluidos. Puede descargar el manual de uso de su plan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Ficha técnica --------------------------------------------------- */}
        <section className="biz-section is-light">
          <div className="biz-container">
            <div className="biz-section-head">
              <h2>Ficha técnica</h2>
            </div>
            <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24, marginTop: 32, maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}>
              <table className="plan-detail-table">
                <thead><tr><th></th><th>Android</th><th>iOS</th></tr></thead>
                <tbody>
                  {specs.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.android}</td><td>{row.ios}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
