import Link from "next/link";

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
      <Link href="/por-que-humana">¿Quiénes somos?</Link>
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

export const officialContactChannels = [
  { label: "WhatsApp", value: "+593 2401 7002", href: "https://api.whatsapp.com/send?phone=59324017002" },
  { label: "Oficina virtual Humana Direct", value: "humana.med.ec/oficina-virtual", href: "https://humana.med.ec/humana-direct" },
  { label: "Formulario de Contacto", value: "humana.med.ec/formulario-de-contacto", href: "https://servicio.humana.med.ec/hc/es/requests/new" },
  { label: "Oficinas y centros de atención", value: "Ver ubicación", href: "https://servicio.humana.med.ec/hc/es/articles/4402730217741--Quieres-conocer-nuestros-puntos-de-servicio-" },
  { label: "Correo electrónico", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
  { label: "Teléfono", value: "1800 humana (48 62 62)", href: "tel:18004862862" },
];
