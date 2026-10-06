import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  { title: "Mi Red: Guía Médica Humana", copy: "Aproveche al máximo su cobertura usando la Red médica Humana. Mediante la APP puede encontrar los mejores prestadores bajo distintas categorías: Consulta médica · Hospitalización · Exámenes de Laboratorio e Imagen · Terapias · Centros odontológicos." },
  { title: "Autorizaciones y Mi Plan", copy: "En esta sección puedes consultar la información básica sobre tus planes contratados, tal como: Estado de tus pagos · Fecha de vigencia · Datos de contacto · Periodos de carencia · Porcentajes de cobertura · Beneficiarios del plan · Listado de atenciones recibidas." },
  { title: "Mis Reembolsos", copy: "Consulte el estado de sus reembolsos, descargando o enviando sus liquidaciones a su propio email. Si tiene dudas sobre algún trámite, ingrese al chat en línea o llame directamente a nuestro call center, uno de nuestros agentes le ayudará." },
  { title: "Panel de control", copy: "Con la APP MiHumana tendrás a tu disposición: Consulta de coberturas, beneficiarios, tiempos de carencia… · Descarga de documentos · Lista de prestadores georeferenciados · Gestión de Reembolsos · Agendamiento de citas y consulta médica · Pago en línea · Solicitud de medicamentos, autorizaciones y certificado de afiliación · Consulta médica · Etc." },
  { title: "Compra de medicinas", copy: "Por medio de la APP solicite sus medicamentos con cobertura directa SIN reembolso, mediante nuestros prestadores Medicity y Farmacias Económicas. Seleccione su ciudad, e introduzca los datos del formulario: Paciente · Fecha de emisión de la receta · Dirección · Foto de la receta original." },
  { title: "Agendamiento de citas", copy: "Ahora puede agendar sus citas médicas en Metrored directamente desde la aplicación. Puede realizar el pago de la consulta médica en la app o presencialmente." },
];

export default function AppPage() {
  return (
    <SiteShell title="MiHumana APP">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>APP</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 820 }}>
        <h1>MiHumana APP</h1>
        <p><strong>Todos los servicios en tu celular</strong></p>
        <div style={{ position: "relative", width: "100%", maxWidth: 420, aspectRatio: "4/3", margin: "20px auto", borderRadius: 20, overflow: "hidden" }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2024/09/mujer-celular-app-mi-humana.jpg" alt="MiHumana APP" fill sizes="420px" unoptimized style={{ objectFit: "cover" }} />
        </div>
        <div className="plan-hub-card-actions" style={{ justifyContent: "center" }}>
          <a className="primary-button" href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer">Google Play</a>
          <a className="secondary-button" href="https://apps.apple.com/ec/app/mi-humana/id1468370810" target="_blank" rel="noreferrer">App Store</a>
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24 }}>
          <table className="plan-detail-table">
            <thead><tr><th></th><th>Android</th><th>iOS</th></tr></thead>
            <tbody>
              {specs.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.android}</td><td>{row.ios}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        {sections.map((s) => (
          <div key={s.title} style={{ marginBottom: 24 }}>
            <h2>{s.title}</h2>
            <p>{s.copy}</p>
          </div>
        ))}
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 64px" }}>
        <ul className="plan-faq-checklist">
          <li>Todos los <a href="https://servicio.humana.med.ec/hc/es/articles/4402730448653-Descarga-de-Formularios" target="_blank" rel="noreferrer">documentos importantes</a> para realizar sus trámites, en formato PDF editable, tales como solicitar reembolso, pre-autorización de cirugía, autorizaciones de débito, y más.</li>
          <li>Aproveche al máximo su cobertura usando la <a href="https://red.humana.med.ec/" target="_blank" rel="noreferrer">Red médica Humana</a>. Mediante la APP puede encontrar los mejores prestadores bajo distintas categorías, segmentados por ciudad, sector o especialidad.</li>
          <li>Por medio de la app solicite sus medicamentos con cobertura directa SIN reembolsos, mediante nuestro aliado Medicity.</li>
          <li>Obtenga el mejor beneficio de su cobertura médica, conociendo todas las prestaciones de su plan, sus deducibles y beneficios incluidos. Puede descargar el manual de uso de su plan.</li>
        </ul>
      </section>
    </SiteShell>
  );
}
