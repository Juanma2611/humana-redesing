import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalClosingCta, InstitutionalExploreCards } from "@/components/institutional-nav";

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

      {/* Plantilla institucional (aprobada en Humana S.A.): hero de borde a
          borde. No hay foto propia de Metrored para la columna de imagen,
          así que usa el logo oficial contenido en vez de inventar una
          fotografía. */}
      <section className="institutional-hero">
        <div className="institutional-hero-inner">
          <div className="institutional-hero-media is-logo">
            <Image src="https://humana.med.ec/wp-content/uploads/2020/12/metrored-logo-humana-medicina-prepagada.png" alt="Logo Metrored" fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized />
          </div>
          <div className="institutional-hero-copy">
            <span className="kicker">¿Quiénes somos?</span>
            <h1>Metrored</h1>
            <p className="text-justify-wide">
              Centros Médicos Metrored es la más moderna red de servicios médicos ambulatorios del
              Ecuador. La red pertenece a Metroambulat S.A., una empresa del grupo Conclina CA – Hospital
              Metropolitano, líder en el mercado de salud privada desde 1985.
            </p>
            <a className="primary-button" href="https://www.metrored.med.ec/servicios/untitledcitas-medicas" target="_blank" rel="noreferrer">
              Agendar cita en Metrored <ArrowRight size={16} />
            </a>
            <p className="text-justify-wide" style={{ marginTop: 18 }}>
              Metrored ofrece servicios médicos ambulatorios en centros médicos, centros de toma de
              muestras para laboratorio ubicados junto a farmacias Fybeca y dispensarios médicos ubicados
              dentro de la empresa con la que Metroambulat S.A. tiene convenio.
            </p>
            <p style={{ margin: "10px 0 0" }}><strong>Consultas Médicas:</strong> Metrored brinda en sus centros médicos atención ambulatoria en diversas especialidades médicas.</p>
            <p style={{ margin: "6px 0 0" }}><strong>Centros Médicos:</strong> Metrored siempre busca estar más cerca de ti y proporciona centros médicos en Quito como en Guayaquil.</p>
            <p style={{ margin: "6px 0 0" }}><strong>Salud Ocupacional:</strong> Metroambulat es el servicio de atención médica ocupacional para las empresas de Ecuador.</p>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: "64px clamp(24px,7vw,110px)" }}>
        <div className="section-heading centered" style={{ marginBottom: 28 }}>
          <span className="kicker">Dónde encontrarnos</span>
          <h2>Quito</h2>
        </div>
        <div className="plan-hub-grid plan-hub-grid-personas" style={{ maxWidth: 1180, margin: "0 auto" }}>
          {quitoCenters.map((center) => <CenterCard key={center.name} center={center} />)}
        </div>
      </section>

      <section className="institutional-topic-section">
        <div className="section-heading centered" style={{ marginBottom: 28, position: "relative", zIndex: 1 }}>
          <h2>Guayaquil</h2>
        </div>
        <div className="plan-hub-grid plan-hub-grid-personas" style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {guayaquilCenters.map((center) => <CenterCard key={center.name} center={center} />)}
        </div>
      </section>

      <InstitutionalClosingCta />

      <InstitutionalExploreCards currentHref="/por-que-humana/metrored/" />
    </SiteShell>
  );
}
