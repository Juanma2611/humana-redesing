import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Vademecum - Humana S.A." };

export default function VademecumPage() {
  return (
    <SiteShell title="Vademecum">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Vademecum</span>
      </nav>
      <section className="content-section plan-hub-intro" style={{ maxWidth: 700 }}>
        <h1>Vademecum</h1>
        <p>
          Si quiere revisar el Vademecum de Medicamentos por favor acceda con usuario registrado a
          nuestra Central de ayuda y entre al artículo.
        </p>
        <p style={{ color: "#5e7384", fontSize: 14 }}>Ruta: Inicio &gt; HUMANA CONTIGO &gt; ATENCIÓN GENERAL &gt; CONOCIENDO A HUMANA</p>
        <a className="primary-button" href="https://servicio.humana.med.ec/hc/es/articles/7622327615629-Vademecum" target="_blank" rel="noreferrer">
          Acceso al Vademecum
        </a>
      </section>
    </SiteShell>
  );
}
