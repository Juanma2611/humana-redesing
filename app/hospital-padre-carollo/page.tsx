import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Hospital Padre Carollo - Humana S.A.",
  description: "Beneficios exclusivos para afiliados de Humana en el Hospital Padre Carollo Quito, adquiridos a través del bróker Unibroker.",
};

const benefits = [
  "Cobertura Hospitalaria al 100% en el Hospital Padre Carollo Quito",
  "Dos consultas médicas gratuitas de Medicina Familiar / al año por contrato",
  "Una Profilaxis odontológica anual gratuita para el titular",
  "6% de descuento en exámenes de laboratorio ambulatorias",
  "6% de descuento en exámenes de imagen (excepto tomografías y derivaciones por resonancias)",
];

export default function HospitalPadreCarolloPage() {
  return (
    <SiteShell title="Hospital Padre Carollo">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Hospital Padre Carollo</span>
      </nav>

      <section className="content-section plan-hub-intro" style={{ maxWidth: 760 }}>
        <div style={{ position: "relative", width: 160, height: 70, margin: "0 auto 20px" }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/02/logo-padre-carollo.png" alt="Logo Hospital Padre Carollo" fill sizes="160px" unoptimized style={{ objectFit: "contain" }} />
        </div>
        <h1>Hospital Padre Carollo</h1>
        <p>
          Aplica únicamente para contratos adquiridos a través del bróker Unibroker en Hospital Padre
          Carollo Quito desde el 7 de febrero de 2022.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 700, margin: "0 auto", padding: "0 24px 64px" }}>
        <h2>Beneficios</h2>
        <ul className="plan-faq-checklist">
          {benefits.map((b) => <li key={b}><Check size={16} /><span>{b}</span></li>)}
        </ul>
      </section>
    </SiteShell>
  );
}
