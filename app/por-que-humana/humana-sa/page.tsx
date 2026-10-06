import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalRelatedLinks } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Humana S.A. - Humana S.A.",
  description: "Humana S.A. es una empresa prestadora de servicios integrales de salud y bienestar, parte de Conclina C.A., con cerca de 250.000 afiliados en Ecuador.",
};

export default function HumanaSaPage() {
  return (
    <SiteShell title="Humana S.A.">
      <InstitutionalBreadcrumb page="Humana S.A." />

      <section className="content-section plan-hub-intro" style={{ maxWidth: 860 }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden", marginBottom: 24 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/11/humana-fachada-solo-logo-quito-medicina-prepagada.png" alt="Fachada de Humana S.A. en Quito" fill sizes="860px" unoptimized style={{ objectFit: "cover" }} />
        </div>
        <h1>Humana S.A.</h1>
        <p>
          Humana S.A. es una empresa prestadora de servicios integrales de salud y bienestar. Desde 1994,
          cuidamos el bienestar de nuestros clientes financiando sus necesidades de salud, por eso
          garantizamos el acceso a los mejores prestadores y proveedores del país con un servicio ágil,
          cálido, confiable y humano. El respeto por el ser humano ha sido nuestra principal misión, donde
          la ética, la calidez y la integridad han marcado los valores en el servicio que damos a todos
          los ecuatorianos.
        </p>
        <p>
          Formamos parte del grupo más importante en prestaciones médicas en Ecuador, Conclina C.A., que
          está conformado por el Hospital Metropolitano, Humana y Metrored. Esta importante red se ha
          convertido en sinónimo de excelencia, seguridad, calidad, eficiencia e innovación.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 48px" }}>
        <h2>Política de calidad</h2>
        <p>
          Brindamos un sistema de financiamiento de servicios integrales de salud y bienestar para
          nuestros clientes, con acceso a los mejores prestadores y proveedores del país, a través de un
          servicio ágil, cálido, confiable y humano; comprometidos con la mejora continua de nuestro
          sistema de gestión de calidad e innovación de nuestros procesos y canales de comunicación; con
          talento humano competente que satisfaga las necesidades de nuestros clientes y aliados
          estratégicos, así como los requisitos aplicables.
        </p>

        <h2>Nuestros clientes</h2>
        <p>
          Contamos con cerca de 250.000 afiliados, quienes son el mejor ejemplo de que estamos cumpliendo
          con nuestro objetivo de cuidar el bienestar de miles de personas y sus familias, en todas las
          etapas de su vida.
        </p>
        <p>
          Contamos con clientes individuales y familiares, empresariales como también corporativos. La
          cartera de clientes corporativos la integran importantes empresas del país en sectores como el
          petrolero, telecomunicaciones, automotriz, industrial, servicios, salud, entre otros.
        </p>

        <h2>Nuestro personal</h2>
        <p>
          Somos conscientes que una compañía de medicina prepagada debe sostenerse sobre la eficiencia y
          la calidez. Contamos con un equipo profesional de más de 400 ejecutivos especializados en
          diversas áreas y con un enfoque de asesoría al cliente.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px 64px" }}>
        <div className="plan-hub-card" style={{ padding: 28 }}>
          <h3>Compra online</h3>
          <p>
            Adquiere tu plan médico de forma fácil, segura y 100% digital. ¿Quieres saber cómo funciona el
            sistema de compra online? Es un modo seguro y rápido de contratar tu plan.
          </p>
          <Link className="primary-button" href="/cotizador/">
            <ShoppingCart size={16} /> Cotizar online <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <InstitutionalRelatedLinks />
    </SiteShell>
  );
}
