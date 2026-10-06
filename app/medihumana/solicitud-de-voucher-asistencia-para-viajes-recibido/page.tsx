import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Solicitud de voucher de asistencia para viajes recibida",
  description:
    "Tu solicitud de voucher de asistencia para viajes ha sido recibida. Pronto recibirás la información necesaria para continuar con tu trámite.",
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

export default function VoucherRecibidoPage() {
  return (
    <SiteShell title="Solicitud de Voucher asistencia para viajes recibido">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span>
        <Link href="/medihumana">Medihumana</Link><span>»</span>
        <span>Solicitud de Voucher asistencia para viajes recibido</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 760 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/6", borderRadius: 20, overflow: "hidden", marginBottom: 24 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/07/cabecera-medihumana-central-de-ayuda.png" alt="Medihumana - Central de ayuda" fill sizes="760px" unoptimized style={{ objectFit: "cover" }} />
        </div>
        <h1>Solicitud de Voucher asistencia para viajes recibido</h1>
        <p>
          Su requerimiento está siendo procesado. Si toda la información está correcta, un agente de
          Experiencia del Cliente enviará en 24 horas su voucher o certificado de viaje a su correo.
        </p>
        <p>En caso de requerir alguna confirmación, le contactaremos para continuar el trámite.</p>
        <p>Reciba un cordial saludo de Humana S.A.</p>
        <a className="primary-button" href="https://servicio.humana.med.ec/hc/es/articles/4402811871629-Voucher-asistencia-para-viajes" target="_blank" rel="noreferrer">
          Nueva solicitud
        </a>
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
