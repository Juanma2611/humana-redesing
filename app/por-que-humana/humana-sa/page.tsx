import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, ShoppingCart, UsersRound } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalExploreCards } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "Humana S.A. - Humana S.A.",
  description: "Humana S.A. es una empresa prestadora de servicios integrales de salud y bienestar, parte de Conclina C.A., con cerca de 250.000 afiliados en Ecuador.",
};

export default function HumanaSaPage() {
  return (
    <SiteShell title="Humana S.A.">
      <InstitutionalBreadcrumb page="Humana S.A." />

      {/*
        Piloto pase de diseño (Grupo Conócenos): texto alineado a la
        izquierda con ancho máximo de lectura (antes centrado a todo el
        ancho). Ningún párrafo se modifica.

        Nota de cifras (pendiente de validar con Comercial, NO se unifica):
        esta página dice "cerca de 250.000 afiliados" (texto oficial de esta
        página), mientras /por-que-humana/ dice "Más de 200.000". Es una
        inconsistencia que ya existe en el sitio oficial; cada página
        conserva su cifra tal cual, con la expresión literal del texto.
      */}
      <section className="content-section plan-hub-intro" style={{ maxWidth: 760, textAlign: "left" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/7", borderRadius: 20, overflow: "hidden", marginBottom: 28 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/11/humana-fachada-solo-logo-quito-medicina-prepagada.png" alt="Fachada de Humana S.A. en Quito" fill sizes="760px" unoptimized style={{ objectFit: "cover" }} />
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

      <div className="institutional-stat-row" style={{ maxWidth: 760, margin: "0 auto 40px", padding: "0 24px" }}>
        <article><strong>Desde 1994</strong><span>Trayectoria en Ecuador</span></article>
        <article><strong>Cerca de 250.000</strong><span>Afiliados</span></article>
        <article><strong>Más de 400</strong><span>Ejecutivos especializados</span></article>
      </div>

      <section className="content-section" style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 48px" }}>
        <div className="institutional-topic-grid">
          <article className="plan-hub-card">
            <span className="plan-hub-card-icon"><ShieldCheck size={20} /></span>
            <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>Política de calidad</h2>
            <p style={{ margin: 0, color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Brindamos un sistema de financiamiento de servicios integrales de salud y bienestar para
              nuestros clientes, con acceso a los mejores prestadores y proveedores del país, a través de
              un servicio ágil, cálido, confiable y humano; comprometidos con la mejora continua de
              nuestro sistema de gestión de calidad e innovación de nuestros procesos y canales de
              comunicación; con talento humano competente que satisfaga las necesidades de nuestros
              clientes y aliados estratégicos, así como los requisitos aplicables.
            </p>
          </article>

          <article className="plan-hub-card">
            <span className="plan-hub-card-icon"><UsersRound size={20} /></span>
            <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>Nuestros clientes</h2>
            <p style={{ margin: "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Contamos con cerca de 250.000 afiliados, quienes son el mejor ejemplo de que estamos
              cumpliendo con nuestro objetivo de cuidar el bienestar de miles de personas y sus familias,
              en todas las etapas de su vida.
            </p>
            <p style={{ margin: 0, color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Contamos con clientes individuales y familiares, empresariales como también corporativos. La
              cartera de clientes corporativos la integran importantes empresas del país en sectores como
              el petrolero, telecomunicaciones, automotriz, industrial, servicios, salud, entre otros.
            </p>
          </article>

          <article className="plan-hub-card">
            <span className="plan-hub-card-icon"><Briefcase size={20} /></span>
            <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>Nuestro personal</h2>
            <p style={{ margin: 0, color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>
              Somos conscientes que una compañía de medicina prepagada debe sostenerse sobre la eficiencia
              y la calidez. Contamos con un equipo profesional de más de 400 ejecutivos especializados en
              diversas áreas y con un enfoque de asesoría al cliente.
            </p>
          </article>
        </div>
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

      <InstitutionalExploreCards />
    </SiteShell>
  );
}
