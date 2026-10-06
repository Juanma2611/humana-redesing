import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, ShieldCheck, ShoppingCart, UsersRound } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalBreadcrumb, InstitutionalExploreCards } from "@/components/institutional-nav";

const stats = [
  { value: "Desde 1994", label: "Trayectoria en Ecuador" },
  { value: "Cerca de 250.000", label: "Afiliados" },
  { value: "Más de 400", label: "Ejecutivos especializados" },
];

const topics = [
  {
    icon: ShieldCheck,
    title: "Política de calidad",
    paragraphs: [
      "Brindamos un sistema de financiamiento de servicios integrales de salud y bienestar para nuestros clientes, con acceso a los mejores prestadores y proveedores del país, a través de un servicio ágil, cálido, confiable y humano; comprometidos con la mejora continua de nuestro sistema de gestión de calidad e innovación de nuestros procesos y canales de comunicación; con talento humano competente que satisfaga las necesidades de nuestros clientes y aliados estratégicos, así como los requisitos aplicables.",
    ],
  },
  {
    icon: UsersRound,
    title: "Nuestros clientes",
    paragraphs: [
      "Contamos con cerca de 250.000 afiliados, quienes son el mejor ejemplo de que estamos cumpliendo con nuestro objetivo de cuidar el bienestar de miles de personas y sus familias, en todas las etapas de su vida.",
      "Contamos con clientes individuales y familiares, empresariales como también corporativos. La cartera de clientes corporativos la integran importantes empresas del país en sectores como el petrolero, telecomunicaciones, automotriz, industrial, servicios, salud, entre otros.",
    ],
  },
  {
    icon: Briefcase,
    title: "Nuestro personal",
    paragraphs: [
      "Somos conscientes que una compañía de medicina prepagada debe sostenerse sobre la eficiencia y la calidez. Contamos con un equipo profesional de más de 400 ejecutivos especializados en diversas áreas y con un enfoque de asesoría al cliente.",
    ],
  },
];

export const metadata: Metadata = {
  title: "Humana S.A. - Humana S.A.",
  description: "Humana S.A. es una empresa prestadora de servicios integrales de salud y bienestar, parte de Conclina C.A., con cerca de 250.000 afiliados en Ecuador.",
};

export default function HumanaSaPage() {
  return (
    <SiteShell title="Humana S.A.">
      <InstitutionalBreadcrumb page="Humana S.A." />

      {/*
        Piloto pase de diseño (Grupo Conócenos): se arma un hero de dos
        columnas (foto + H1 + texto), igual en espíritu al hero del hub
        /por-que-humana/, en vez de una foto pequeña flotando sobre una
        columna angosta de texto. Ningún párrafo se modifica.

        Nota de cifras (pendiente de validar con Comercial, NO se unifica):
        esta página dice "cerca de 250.000 afiliados" (texto oficial de esta
        página), mientras /por-que-humana/ dice "Más de 200.000". Es una
        inconsistencia que ya existe en el sitio oficial; cada página
        conserva su cifra tal cual, con la expresión literal del texto.
      */}
      <section className="institutional-hero">
        <div className="institutional-hero-inner">
          <div className="institutional-hero-media">
            <Image src="https://humana.med.ec/wp-content/uploads/2022/11/humana-fachada-solo-logo-quito-medicina-prepagada.png" alt="Fachada de Humana S.A. en Quito" fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized style={{ objectFit: "cover" }} />
          </div>
          <div className="institutional-hero-copy">
            <span className="kicker">¿Quiénes somos?</span>
            <h1>Humana S.A.</h1>
            <p>
              Humana S.A. es una empresa prestadora de servicios integrales de salud y bienestar. Desde
              1994, cuidamos el bienestar de nuestros clientes financiando sus necesidades de salud, por
              eso garantizamos el acceso a los mejores prestadores y proveedores del país con un servicio
              ágil, cálido, confiable y humano. El respeto por el ser humano ha sido nuestra principal
              misión, donde la ética, la calidez y la integridad han marcado los valores en el servicio
              que damos a todos los ecuatorianos.
            </p>
            <p>
              Formamos parte del grupo más importante en prestaciones médicas en Ecuador, Conclina C.A.,
              que está conformado por el Hospital Metropolitano, Humana y Metrored. Esta importante red se
              ha convertido en sinónimo de excelencia, seguridad, calidad, eficiencia e innovación.
            </p>
          </div>
        </div>
      </section>

      <div className="about-numbers" aria-label="Datos clave de Humana S.A.">
        {stats.map((s) => <article key={s.value}><strong>{s.value}</strong><span>{s.label}</span></article>)}
      </div>

      <section className="content-section" style={{ padding: "64px clamp(24px,7vw,110px) 48px" }}>
        <div className="institutional-topic-grid" style={{ maxWidth: 1180, margin: "0 auto" }}>
          {topics.map(({ icon: Icon, title, paragraphs }) => (
            <article className="plan-hub-card" key={title}>
              <span className="plan-hub-card-icon"><Icon size={22} /></span>
              <h2 style={{ fontSize: 20, margin: "0 0 10px" }}>{title}</h2>
              {paragraphs.map((p, i) => (
                <p key={i} style={{ margin: i === paragraphs.length - 1 ? 0 : "0 0 10px", color: "#3f5f73", fontSize: 15, lineHeight: 1.6 }}>{p}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ padding: "0 clamp(24px,7vw,110px) 72px" }}>
        <div className="institutional-cta">
          <ShoppingCart />
          <div style={{ flex: 1 }}>
            <h2>Compra online</h2>
            <p>Adquiere tu plan médico de forma fácil, segura y 100% digital. ¿Quieres saber cómo funciona el sistema de compra online? Es un modo seguro y rápido de contratar tu plan.</p>
          </div>
          <Link className="white-button" href="/cotizador/">Cotizar online <ArrowRight size={18} /></Link>
        </div>
      </section>

      <InstitutionalExploreCards currentHref="/por-que-humana/humana-sa/" />
    </SiteShell>
  );
}
