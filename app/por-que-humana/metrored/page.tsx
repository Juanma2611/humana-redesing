import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Metrored - Humana S.A.",
  description:
    "Metrored ofrece servicios médicos ambulatorios en centros médicos, centros de toma de muestras para laboratorio ubicados junto a farmacias Fybeca y…",
};

const quitoCenters = [
  { name: "Calderón", address: "Entre Hospital docente y Coral, Capitán Giovanni Calles, Quito 170206", map: "https://maps.app.goo.gl/Mwpruxr6kFcSaSdN6", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-calderon-v2.jpg" },
  { name: "Metrored Quicentro Sur", address: "Quicentro Sur. Av. Morán Valverde y Av. Quitumbe Ñan, Subsuelo 1, local 014.", map: "https://maps.app.goo.gl/P7WH1mfytWiTyDQZ8", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-quicentro-sur.jpg" },
  { name: "Centros para toma de muestras", address: "Diego de Vásquez N77-272. Frente a Colegio Einstein.", map: "https://maps.app.goo.gl/Njj5fmwX7GYBwhQP7", image: "https://humana.med.ec/wp-content/uploads/2026/07/centros-para-toma-de-muestra-metrored.jpg" },
  { name: "La Carolina", address: "Av. República 481 y Martin Carrión. Entre Pradera y Diego de Almagro.", map: "https://maps.app.goo.gl/TefKuQSmj6bTS77C8", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-carolina.jpg" },
  { name: "Plaza de toros", address: "Av. Amazonas N42-88 y Tomás de Berlanga.", map: "https://maps.app.goo.gl/rxfUjiwxmXQE4WVKA", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-plaza-de-toros.jpg" },
  { name: "Cumbayá", address: "Av. Oswaldo Guayasamín e Isidro Ayora, junto a Mc Donalds.", map: "https://maps.app.goo.gl/QbFW2dm6iFcNPCEg9", image: "https://humana.med.ec/wp-content/uploads/2026/07/metroered-cumbaya.jpg" },
  { name: "Los Chillos", address: "Autopista General Rumiñahui, S/N. Frente al local comercial Hipermarket.", map: "https://maps.app.goo.gl/RcTmBhLvTy1nhHx56", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-valle-de-los-chillos.jpg" },
  { name: "El Condado", address: "Av. John F. Kennedy N71-94 y Pasaje Rembrandt, a 200 metros del Condado Shopping.", map: "https://maps.app.goo.gl/V9eMUuGgJhnJxr2Y9", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-el-condado.jpg" },
];

const guayaquilCenters = [
  { name: "Ciudad Celeste", address: "Av. León Febres-Cordero Ribadeneyra y Av. Ciudad Celeste, La Piazza Ciudad Celeste.", map: "https://maps.app.goo.gl/8HM2mFBotYRhwhD19", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-ciudad-celeste.jpg" },
  { name: "Kennedy", address: "Av. Francisco de Orellana S-34 y Nahim Isaías, diagonal al hotel Hilton Colón.", map: "https://maps.app.goo.gl/FjvacQdJE9rwb97XA", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-keneddy.jpg" },
  { name: "La Alborada", address: "Av. Rodolfo Baquerizo y José María Egas, junto a Banco Pichincha La Alborada.", map: "https://maps.app.goo.gl/UuumxX8eGrrB3MMG9", image: "https://humana.med.ec/wp-content/uploads/2026/07/metrored-la-alborada.jpg" },
];

function CenterCard({ center }: { center: { name: string; address: string; map: string; image: string } }) {
  return (
    <article className="plan-hub-card">
      <div className="plan-hub-card-media">
        <Image src={center.image} alt={center.name} fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized />
      </div>
      <div className="plan-hub-card-copy">
        <h4>{center.name}</h4>
        <p style={{ color: "#3f5f73", fontSize: 14.5 }}>{center.address}</p>
        <a className="secondary-button small" href={center.map} target="_blank" rel="noreferrer">
          <MapPin size={16} /> Ver mapa
        </a>
      </div>
    </article>
  );
}

export default function MetroredPage() {
  return (
    <SiteShell title="Metrored">
      <InstitutionalBreadcrumb page="Metrored" />

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <div style={{ position: "relative", width: 200, height: 72, margin: "0 auto 20px" }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2020/12/metrored-logo-humana-medicina-prepagada.png" alt="Logo Metrored" fill sizes="200px" unoptimized style={{ objectFit: "contain" }} />
        </div>
        <h1>Metrored</h1>
        <p>
          Centros Médicos Metrored es la más moderna red de servicios médicos ambulatorios del Ecuador. La
          red pertenece a Metroambulat S.A., una empresa del grupo Conclina CA – Hospital Metropolitano,
          líder en el mercado de salud privada desde 1985.
        </p>
        <a className="primary-button" href="https://www.metrored.med.ec/servicios/untitledcitas-medicas" target="_blank" rel="noreferrer">
          Agendar cita en Metrored
        </a>
        <p style={{ marginTop: 20 }}>
          Metrored ofrece servicios médicos ambulatorios en centros médicos, centros de toma de muestras
          para laboratorio ubicados junto a farmacias Fybeca y dispensarios médicos ubicados dentro de la
          empresa con la que Metroambulat S.A. tiene convenio.
        </p>
        <p><strong>Consultas Médicas:</strong> Metrored brinda en sus centros médicos atención ambulatoria en diversas especialidades médicas.</p>
        <p><strong>Centros Médicos:</strong> Metrored siempre busca estar más cerca de ti y proporciona centros médicos en Quito como en Guayaquil.</p>
        <p><strong>Salud Ocupacional:</strong> Metroambulat es el servicio de atención médica ocupacional para las empresas de Ecuador.</p>
      </section>

      <section className="content-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Quito</h2>
        <div className="plan-hub-grid plan-hub-grid-personas" style={{ marginTop: 20 }}>
          {quitoCenters.map((center) => <CenterCard key={center.name} center={center} />)}
        </div>
      </section>

      <section className="content-section" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Guayaquil</h2>
        <div className="plan-hub-grid plan-hub-grid-personas" style={{ marginTop: 20 }}>
          {guayaquilCenters.map((center) => <CenterCard key={center.name} center={center} />)}
        </div>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
