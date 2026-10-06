import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, FileText } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Portal Prestador - Humana S.A.",
  description:
    "GAIA es el portal donde los prestadores de salud administran su convenio y donde las instituciones que quieren integrarse a la red inician su proceso de…",
};

const requiredDocs = [
  { code: "DOC-01", title: "RUC actualizado", copy: "Registro Único de Contribuyentes vigente de la institución." },
  { code: "DOC-02", title: "Permiso de funcionamiento vigente", copy: "Uno por cada sucursal que quieras incorporar al convenio." },
  { code: "DOC-03", title: "Tarifario de prestaciones", copy: "Debe presentarse en el formato que descargas desde el portal." },
  { code: "DOC-04", title: "Staff médico", copy: "También en el formato del portal. Reúne estos datos de cada profesional antes de llenarlo: Registro SENESCYT · RUC · Cédula · Especialidad médica." },
];

const optionalDocs = [
  { code: "OPC-01", title: "Póliza de responsabilidad civil", copy: "Suma respaldo a tu postulación, aunque no es requisito de ingreso." },
  { code: "OPC-02", title: "Carta de presentación", copy: "Describe tu institución, trayectoria y capacidad instalada." },
];

const areas = [
  { code: "Área 01", title: "Gestión de servicios", items: ["Agregar nuevos servicios a la sucursal activa.", "Inactivar servicios vigentes del convenio de forma temporal.", "Inactivar servicios de forma permanente, según tus necesidades de gestión."] },
  { code: "Área 02", title: "Administración de sucursales", items: ["Incorporar nuevas sucursales al convenio.", "Consultar y administrar las sucursales ya registradas."] },
  { code: "Área 03", title: "Actualización del staff médico", items: ["Incluir personal médico en una o varias sucursales.", "Excluir personal médico de una o varias sucursales."] },
  { code: "Área 04", title: "Documentación regulatoria", items: ["Actualizar el permiso de funcionamiento de cada sucursal.", "Cargar y mantener al día el resto de tu documentación."] },
];

export default function PortalPrestadorPage() {
  return (
    <SiteShell title="Portal Prestador">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Portal Prestador</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <span className="plan-hub-card-icon" style={{ margin: "0 auto 12px" }}>GAIA</span>
        <h1>Tu convenio con Humana, gestionado en línea.</h1>
        <p>
          GAIA es el portal donde los prestadores de salud administran su convenio y donde las
          instituciones que quieren integrarse a la red inician su proceso de inclusión.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 24, textAlign: "left" }}>
          <div className="plan-hub-card" style={{ padding: 20 }}><strong>Sin trámites presenciales</strong><p>Solicitudes, cargas y actualizaciones desde el portal.</p></div>
          <div className="plan-hub-card" style={{ padding: 20 }}><strong>Documentación en línea</strong><p>Permisos, tarifario y staff médico siempre vigentes.</p></div>
        </div>
      </section>

      <section className="content-section plan-hub-grid" style={{ maxWidth: 900 }}>
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
      </section>

      <section className="content-section" style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px" }}>
        <h2>Tres pasos para iniciar tu postulación</h2>
        <p>El registro como prestador interesado abre tu proceso de negociación y evaluación con Humana. Completa los tres pasos en orden.</p>
        <ol>
          <li><strong>Paso 01 · Crea tus credenciales.</strong> Entra a Registro de prestador —la misma opción &quot;No tengo cuenta&quot; de la pantalla de acceso— para generar tu usuario y contraseña, y comenzar el registro como prestador interesado.</li>
          <li><strong>Paso 02 · Completa el formulario.</strong> Llena el formulario de Prestador Interesado con los datos de tu institución y los servicios que ofreces. Detalla únicamente los servicios para los cuales tu permiso de funcionamiento te acredita.</li>
          <li><strong>Paso 03 · Carga tus documentos.</strong> Adjunta en el formulario los cuatro documentos obligatorios. El tarifario y el staff médico se cargan en los formatos que el portal te entrega.</li>
        </ol>
      </section>

      <section className="content-section" style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Prepara tu expediente</h2>
        <p>Marca cada documento a medida que lo tengas listo. Cuando completes los obligatorios, estarás en condiciones de llenar el formulario sin interrupciones.</p>
        <h3>Documentos obligatorios</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {requiredDocs.map((doc) => (
            <div key={doc.code} className="plan-hub-card" style={{ padding: 18 }}>
              <FileText size={18} /> <strong>{doc.code} {doc.title}</strong><p>{doc.copy}</p>
            </div>
          ))}
        </div>
        <h3 style={{ marginTop: 24 }}>Documentos opcionales</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {optionalDocs.map((doc) => (
            <div key={doc.code} className="plan-hub-card" style={{ padding: 18 }}>
              <FileText size={18} /> <strong>{doc.code} {doc.title}</strong><p>{doc.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Qué puedes gestionar en el portal</h2>
        <p>Con tu convenio activo, resuelves de forma ágil y directa los cambios que antes requerían trámite. Estas son las cuatro áreas disponibles.</p>
        {areas.map((area) => (
          <div key={area.code} style={{ marginTop: 16 }}>
            <strong>{area.code} · {area.title}</strong>
            <ul className="plan-faq-checklist">{area.items.map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul>
          </div>
        ))}
      </section>

      <section className="sales-assurance">
        <div><FileText /><span><strong>Todo listo para ingresar</strong><small>Si ya tienes convenio, entra con tus credenciales. Si vas a postular, crea tu cuenta desde el registro de prestador y continúa con el formulario.</small></span></div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a className="ghost-button" href="https://gaia.humana.med.ec/registro-prestador" target="_blank" rel="noreferrer">Registrarme como prestador</a>
          <a className="ghost-button" href="https://portalprestador.humana.med.ec/auth/login" target="_blank" rel="noreferrer">Ingresar al portal <ArrowRight size={16} /></a>
        </div>
      </section>
    </SiteShell>
  );
}
