import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalClosingCta, InstitutionalExploreCards, officialContactChannels } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Contacto - Humana S.A.",
  description:
    "Ponemos a su disposición distintos canales de comunicación, con gusto atenderemos todas sus dudas y requerimientos, será un placer servirle.",
};

const channelIcons = [MessageCircle, MapPin, Mail, MapPin, Mail, Phone];

const socials = [
  { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/HumanaEc" },
  { icon: SiInstagram, label: "Instagram", href: "https://www.instagram.com/humanaec/" },
  { icon: SiTiktok, label: "TikTok", href: "https://www.tiktok.com/@humanaec" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/company/humana-ecuador/" },
  { icon: SiYoutube, label: "YouTube", href: "https://www.youtube.com/humanaecuadorsa" },
];

export default function ContactoPage() {
  return (
    <SiteShell title="Contacto">
      <InstitutionalBreadcrumb page="Contacto" />

      {/* Plantilla institucional (aprobada en Humana S.A.): hero de borde a
          borde en vez de intro plana sobre blanco. */}
      <section className="institutional-hero">
        <div className="institutional-hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div className="institutional-hero-copy" style={{ maxWidth: 820 }}>
            <span className="kicker">¿Quiénes somos?</span>
            <h1>Contacto</h1>
            <p className="text-justify-wide">
              Ponemos a su disposición distintos canales de comunicación, con gusto atenderemos todas sus
              dudas y requerimientos, será un placer servirle.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ padding: "64px clamp(24px,7vw,110px) 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {officialContactChannels.map((channel, i) => {
            const Icon = channelIcons[i];
            return (
              <a key={channel.label} href={channel.href} target={channel.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="plan-hub-card" style={{ padding: 20, textDecoration: "none", color: "inherit", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span className="plan-hub-card-icon" style={{ flexShrink: 0 }}><Icon size={20} /></span>
                <div><strong style={{ color: "#073b60" }}>{channel.label}</strong><p style={{ margin: "4px 0 0", color: "#3f5f73", fontSize: 14 }}>{channel.value}</p></div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="institutional-topic-section">
        <div className="section-heading centered" style={{ marginBottom: 20, position: "relative", zIndex: 1 }}>
          <h2>Síguenos en redes sociales</h2>
        </div>
        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="secondary-button small">
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </section>

      <InstitutionalClosingCta />

      <InstitutionalExploreCards currentHref="/por-que-humana/contacto/" />
    </SiteShell>
  );
}
