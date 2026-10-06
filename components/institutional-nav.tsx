import Link from "next/link";
import {
  ArrowRight, Briefcase, ClipboardList, HeartHandshake, HeartPulse,
  Hospital, Lock, MapPin, Network, Newspaper, ShieldAlert, Stethoscope,
} from "lucide-react";

const relatedLinks = [
  { label: "Humana S.A.", href: "/por-que-humana/humana-sa" },
  { label: "Hospital Metropolitano", href: "/por-que-humana/hospital-metropolitano" },
  { label: "Metrored", href: "/por-que-humana/metrored" },
  { label: "Fundación Metrofraternidad", href: "/por-que-humana/fundacion-metrofraternidad" },
  { label: "Bienestar (blog)", href: "/blog" },
  { label: "Oficinas y Puntos de servicio", href: "https://servicio.humana.med.ec/hc/es/articles/4402730217741--Quieres-conocer-nuestros-puntos-de-servicio-" },
  { label: "Formulario de contacto", href: "https://servicio.humana.med.ec/hc/es/requests/new" },
  { label: "Trabaja con nosotros", href: "/por-que-humana/trabaja-con-nosotros" },
  { label: "Canal de Reporte Confidencial", href: "/por-que-humana/canal-de-reporte-confidencial" },
  { label: "Política de protección de datos", href: "/por-que-humana/politica-de-proteccion-de-datos" },
];

export function InstitutionalBreadcrumb({ page }: { page: string }) {
  return (
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link>
      <span>»</span>
      <Link href="/por-que-humana/">¿Quiénes somos?</Link>
      <span>»</span>
      <span>{page}</span>
    </nav>
  );
}

export function InstitutionalRelatedLinks() {
  return (
    <section className="content-section" style={{ maxWidth: 860, margin: "0 auto 48px", padding: "0 24px" }}>
      <div className="plan-hub-card-list" style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px", justifyContent: "center" }}>
        {relatedLinks.map((link) => (
          <Link key={link.label} href={link.href} className="secondary-button small" style={{ textDecoration: "none" }}>
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// Piloto de pase de diseño (Grupo "Conócenos"): mismos 10 enlaces de
// relatedLinks, pero presentados como tarjetas con ícono en vez de botones
// sueltos, y pensados para ir al final de la página (no justo después de la
// intro). Se usa SOLO en las páginas piloto aprobadas (/por-que-humana/ y
// /por-que-humana/humana-sa/) hasta que se apruebe extenderlo al resto; el
// resto de páginas institucionales sigue usando InstitutionalRelatedLinks
// sin cambios.
const exploreLinks = [
  { label: "Humana S.A.", copy: "Planes de medicina prepagada y acompañamiento para cada etapa.", href: "/por-que-humana/humana-sa/", icon: HeartPulse },
  { label: "Hospital Metropolitano", copy: "Respaldo hospitalario dentro del ecosistema de salud.", href: "/por-que-humana/hospital-metropolitano/", icon: Hospital },
  { label: "Metrored", copy: "Atención ambulatoria y servicios médicos más cerca de ti.", href: "/por-que-humana/metrored/", icon: Stethoscope },
  { label: "Fundación Metrofraternidad", copy: "Una vocación social que amplía el acceso a atención médica.", href: "/por-que-humana/fundacion-metrofraternidad/", icon: HeartHandshake },
  { label: "Bienestar (blog)", copy: "Contenido de salud y prevención para cuidarte mejor.", href: "/blog/", icon: Newspaper },
  { label: "Oficinas y Puntos de servicio", copy: "Encuentra el punto de atención más cercano.", href: "https://servicio.humana.med.ec/hc/es/articles/4402730217741--Quieres-conocer-nuestros-puntos-de-servicio-", icon: MapPin },
  { label: "Formulario de contacto", copy: "Escríbenos y te respondemos a la brevedad.", href: "https://servicio.humana.med.ec/hc/es/requests/new", icon: ClipboardList },
  { label: "Trabaja con nosotros", copy: "Súmate al equipo que cuida la salud de miles de familias.", href: "/por-que-humana/trabaja-con-nosotros/", icon: Briefcase },
  { label: "Canal de Reporte Confidencial", copy: "Reporta de forma confidencial cualquier situación inusual.", href: "/por-que-humana/canal-de-reporte-confidencial/", icon: ShieldAlert },
  { label: "Política de protección de datos", copy: "Cómo protegemos tu información personal.", href: "/por-que-humana/politica-de-proteccion-de-datos/", icon: Lock },
];

export function InstitutionalExploreCards({ currentHref }: { currentHref?: string } = {}) {
  const links = exploreLinks.filter((link) => link.href !== currentHref);
  // Evita una tarjeta huérfana sola en la última fila: usa 3 columnas
  // cuando el total es múltiplo de 3, si no, 2 columnas (en celular siempre 1).
  const columnsClass = links.length % 3 === 0 ? "institutional-explore-grid-3" : "institutional-explore-grid-2";
  return (
    <section className="institutional-explore-section">
      <div className="section-heading centered" style={{ marginBottom: 28 }}>
        <span className="kicker">Sigue explorando</span>
        <h2>Conoce más sobre Humana</h2>
      </div>
      <div className={`institutional-explore-grid ${columnsClass}`}>
        {links.map(({ label, copy, href, icon: Icon }) => (
          <Link key={label} href={href} className="plan-hub-card" style={{ textDecoration: "none", padding: 24, display: "flex", flexDirection: "row", gap: 16, alignItems: "center" }}>
            <span className="plan-hub-card-icon" style={{ flexShrink: 0 }}><Icon size={22} /></span>
            <span style={{ flex: 1 }}>
              <strong style={{ display: "block", color: "#073b60", fontSize: 16, marginBottom: 4 }}>{label}</strong>
              <span style={{ display: "block", color: "#3f5f73", fontSize: 14, lineHeight: 1.5 }}>{copy}</span>
            </span>
            <ArrowRight className="explore-arrow" size={18} />
          </Link>
        ))}
      </div>
    </section>
  );
}

// CTA de cierre genérico, reutilizado literal del texto ya aprobado en el
// hub /por-que-humana/ ("Tu salud no se vive en partes."). Se usa en las
// páginas institucionales que no tienen su propio CTA de cierre, para no
// inventar copy nuevo y mantener una sección de color antes de "Explora".
export function InstitutionalClosingCta() {
  return (
    <section className="content-section" style={{ padding: "0 clamp(24px,7vw,110px) 72px" }}>
      <div className="institutional-cta">
        <Network />
        <div style={{ flex: 1 }}>
          <h2>Tu salud no se vive en partes.</h2>
          <p>Por eso conectamos prevención, atención y respaldo para acompañarte cuando lo necesites.</p>
        </div>
        <Link className="white-button" href="/planes-medicos/">Encuentra tu plan <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}

export const officialContactChannels = [
  { label: "WhatsApp", value: "+593 2401 7002", href: "https://api.whatsapp.com/send?phone=59324017002" },
  { label: "Oficina virtual Humana Direct", value: "humana.med.ec/oficina-virtual", href: "https://humana.med.ec/humana-direct" },
  { label: "Formulario de Contacto", value: "humana.med.ec/formulario-de-contacto", href: "https://servicio.humana.med.ec/hc/es/requests/new" },
  { label: "Oficinas y centros de atención", value: "Ver ubicación", href: "https://servicio.humana.med.ec/hc/es/articles/4402730217741--Quieres-conocer-nuestros-puntos-de-servicio-" },
  { label: "Correo electrónico", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
  { label: "Teléfono", value: "1800 humana (48 62 62)", href: "tel:18004862862" },
];
