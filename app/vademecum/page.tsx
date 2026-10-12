import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Vademecum - Humana S.A.",
  description: "Accede al Vademecum de Medicamentos de Humana a través de nuestra Central de ayuda con tu usuario registrado.",
};

const route = ["Inicio", "HUMANA CONTIGO", "ATENCIÓN GENERAL", "CONOCIENDO A HUMANA"];

export default function VademecumPage() {
  return (
    <SiteShell title="Vademecum">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Vademecum</span>
      </nav>

      <div className="biz-page" data-accent="teal">
        <section className="biz-section is-light" style={{ paddingTop: "clamp(56px, 7vw, 88px)" }}>
          <div className="biz-container">
            <div className="institutional-hero-inner">
              <div className="institutional-hero-copy">
                <span className="biz-eyebrow" style={{ color: "var(--humana-teal)" }}>CENTRAL DE AYUDA</span>
                <h1 style={{ fontSize: "clamp(36px,4.2vw,50px)" }}>Vademecum</h1>
                <p>
                  Si quiere revisar el Vademecum de Medicamentos por favor acceda con usuario registrado a
                  nuestra Central de ayuda y entre al artículo.
                </p>

                <nav aria-label="Ruta en la Central de ayuda" className="vademecum-route">
                  {route.map((step, i) => (
                    <span key={step} className="vademecum-route-step">
                      {i > 0 && <ChevronRight size={14} aria-hidden="true" />}
                      {step}
                    </span>
                  ))}
                </nav>

                <a className="primary-button" style={{ marginTop: 28 }} href="https://servicio.humana.med.ec/hc/es/articles/7622327615629-Vademecum" target="_blank" rel="noreferrer">
                  Acceso al Vademecum <ArrowRight size={18} />
                </a>
              </div>
              <figure className="institutional-hero-media">
                <Image src="/images/vademecum/vademecum-hero.webp" alt="Farmacéutica revisando un medicamento en los estantes de una farmacia" fill sizes="(max-width: 980px) 100vw, 45vw" unoptimized />
              </figure>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
