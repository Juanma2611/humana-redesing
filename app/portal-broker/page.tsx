import Link from "next/link";
import { ArrowRight, Building2, UserRound } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";

export default function PortalBroker() {
  return <SiteShell title="Portal Bróker">
    <PageHero eyebrow="Portal Bróker" title="Bienvenido, Bróker" description="Selecciona el tipo de gestión que necesitas para continuar." imageSrc="/humana-business-team-v2.png" imageAlt="Equipo de empresarios trabajando" imagePosition="center" />
    <section className="content-section">
      <div className="broker-chooser">
        <Link className="broker-chooser-card" href="/portal-broker/personas">
          <span><UserRound /></span>
          <h2>Soy Bróker Personas</h2>
          <p>Gestiona pólizas y trámites de clientes individuales y familiares.</p>
          <span className="broker-chooser-cta">Continuar <ArrowRight size={18} /></span>
        </Link>
        <Link className="broker-chooser-card" href="/portal-broker/empresas">
          <span><Building2 /></span>
          <h2>Soy Bróker Empresas</h2>
          <p>Gestiona pólizas y trámites de clientes corporativos.</p>
          <span className="broker-chooser-cta">Continuar <ArrowRight size={18} /></span>
        </Link>
      </div>
    </section>
  </SiteShell>;
}
