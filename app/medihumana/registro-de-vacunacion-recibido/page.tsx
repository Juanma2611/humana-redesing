import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Registro de vacunación recibido - Humana S.A.",
  description: "Confirmación de registro de vacunación en Medihumana. Pronto nos pondremos en contacto contigo.",
};

const services = [
  { label: "Médico a domicilio", href: "https://servicio.humana.med.ec/hc/es/articles/4402813434253-M%C3%A9dico-a-domicilio" },
  { label: "Teleconsultas", href: "https://servicio.humana.med.ec/hc/es/articles/4402720816013-Teleconsulta-m%C3%A9dica" },
  { label: "Ambulancia", href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre" },
  { label: "Programa de pacientes Covid-19", href: "https://servicio.humana.med.ec/hc/es/articles/4403176927757-Programa-de-pacientes-Covid" },
  { label: "Plan de vacunación infantil", href: "https://servicio.humana.med.ec/hc/es/articles/4403717589517-Plan-de-vacunaci%C3%B3n-infantil" },
  { label: "Plan de medicación continua", href: "https://servicio.humana.med.ec/hc/es/sections/360013986011-Plan-de-medicaci%C3%B3n-Continua" },
  { label: "Autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  { label: "Red de Prestadores", href: "https://red.humana.med.ec/RedHumana" },
];

export default function RegistroVacunacionRecibidoPage() {
  return (
    <SiteShell title="Registro de vacunación recibido">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/medihumana/">Medihumana</Link><span>»</span>
        <span>Registro de vacunación recibido</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 760 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/6", borderRadius: 20, overflow: "hidden", marginBottom: 24 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/03/contigo-desde-hoy-y-para-siempre-small-v2-1.png" alt="Contigo desde hoy y para siempre" fill sizes="760px" unoptimized style={{ objectFit: "cover" }} />
        </div>
        <h1>Registro de vacunación recibido</h1>
        <p>Gracias por registrarse, hemos recibido su solicitud y pronto le contactaremos.</p>
        <p>Reciba un cordial saludo de Humana.</p>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 64px" }}>
        <h2>Haz clic y accede a nuestros servicios</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
          {services.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="secondary-button small">{s.label}</a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
