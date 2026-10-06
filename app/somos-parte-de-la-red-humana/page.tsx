import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Somos parte de la red Humana - Humana S.A." };

const topics = [
  { label: "Autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  { label: "Copago", href: "https://servicio.humana.med.ec/hc/es/articles/7467007406221-Farmacias-Puntos-de-venta" },
  { label: "Reembolso", href: "https://servicio.humana.med.ec/hc/es/articles/4402788919693-Gestionar-tus-reembolsos" },
  { label: "Contactos", href: "https://servicio.humana.med.ec/hc/es/articles/4417526509837-Conoce-nuestros-canales-de-comunicaci%C3%B3n" },
];

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

export default function SomosParteRedHumanaPage() {
  return (
    <SiteShell title="Somos parte de la red Humana">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Somos parte de la red Humana</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 760 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden", marginBottom: 24 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/08/para-que-todo-vaya.png" alt="Somos parte de la red Humana" fill sizes="760px" unoptimized style={{ objectFit: "cover" }} />
        </div>
        <h1>Somos parte de la red Humana</h1>
      </section>

      <section className="content-section" style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 48px" }}>
        <h3>Haz clic en el tema que necesitas consultar:</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
          {topics.map((t) => (
            <a key={t.label} href={t.href} target="_blank" rel="noreferrer" className="primary-button small">{t.label}</a>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 24px" }}>
        <h2>Haz clic y accede a nuestros servicios</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 16 }}>
          {services.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="secondary-button small">{s.label}</a>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 760, margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="plan-hub-card" style={{ padding: 24, display: "flex", gap: 14, alignItems: "center" }}>
          <ShieldCheck size={28} />
          <p style={{ margin: 0 }}>Para mayor información llama al: <strong>1800 HUMANA (48 62 62)</strong></p>
        </div>
      </section>
    </SiteShell>
  );
}
