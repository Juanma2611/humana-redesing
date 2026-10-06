import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, HeartHandshake, HeartPulse, Hospital, MapPin,
  Network, ShieldCheck, Sparkles, Stethoscope, UsersRound,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { InstitutionalExploreCards } from "@/components/institutional-nav";

export const metadata: Metadata = {
  title: "¿Quiénes somos? - Humana S.A.",
  description: "Humana S.A. es una compañía de salud prepagada que forma parte de Conclina C.A. Desde 1994 cuidamos la salud y el bienestar de más de 200.000 afiliados en Ecuador.",
};

const values = [
  { icon: HeartHandshake, title: "Calidez", copy: "Cuidamos a cada persona con cercanía y empatía." },
  { icon: ShieldCheck, title: "Integridad", copy: "Actuamos con transparencia y responsabilidad." },
  { icon: Sparkles, title: "Excelencia", copy: "Buscamos calidad e innovación en cada experiencia." },
  { icon: UsersRound, title: "Respeto", copy: "El ser humano está en el centro de lo que hacemos." },
];

const ecosystem = [
  { icon: HeartPulse, title: "Humana", copy: "Planes de medicina prepagada y acompañamiento para cada etapa.", href: "/por-que-humana/humana-sa" },
  { icon: Hospital, title: "Hospital Metropolitano", copy: "Respaldo hospitalario dentro del ecosistema de salud.", href: "/por-que-humana/hospital-metropolitano" },
  { icon: Stethoscope, title: "Metrored", copy: "Atención ambulatoria y servicios médicos más cerca de ti.", href: "/por-que-humana/metrored" },
  { icon: HeartHandshake, title: "Fundación Metrofraternidad", copy: "Una vocación social que amplía el acceso a atención médica.", href: "/por-que-humana/fundacion-metrofraternidad" },
];

export default function PorQueHumanaPage() {
  return <SiteShell title="¿Quiénes somos?">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link>
      <span>»</span>
      <span>¿Quiénes somos?</span>
    </nav>

    {/*
      Piloto pase de diseño (Grupo Conócenos): se fusiona visualmente el
      bloque de intro (logo + H1 + 3 párrafos) con el hero de imagen que
      antes venía después, para que la página abra con una sola pieza visual
      en vez de dos secciones de estilo distinto seguidas. No se quita, ni
      resume, ni reescribe ningún texto: se mantiene el mismo H1, los mismos
      3 párrafos, y el mismo H2+párrafo+acciones+trust badge que ya existían,
      solo se reordena el contenedor visual.

      Nota de cifras (pendiente de validar con Comercial, NO se unifica):
      esta página usa "Más de 200.000" (texto oficial de esta página), pero
      /por-que-humana/humana-sa/ usa "cerca de 250.000". Es una
      inconsistencia que ya existe en el sitio oficial; cada página conserva
      su cifra tal cual.
    */}
    <section className="about-hero">
      <Image src="/humana-historia-hero.png" alt="Familia ecuatoriana recibiendo orientación de una profesional de salud" fill priority sizes="100vw" unoptimized />
      <div className="about-hero-shade" />
      <div className="about-hero-copy">
        <div style={{ position: "relative", width: 140, height: 56, marginBottom: 18 }}>
          <Image src="https://humana.med.ec/wp-content/uploads/2022/11/conclina-logo.png" alt="Logo Conclina" fill sizes="140px" unoptimized style={{ objectFit: "contain", objectPosition: "left" }} />
        </div>
        <h1>¿Quiénes somos?</h1>
        <p>
          <strong>Humana S.A.</strong> es una compañía de salud prepagada, que forma parte del grupo más
          importante en prestaciones médicas, <strong>Conclina C.A.</strong>, al que también pertenece el
          Hospital Metropolitano, Fundación Metrofraternidad, y Metrored.
        </p>
        <p>
          Nuestra trayectoria en el mercado ecuatoriano desde 1994 nos ha permitido cuidar del tesoro más
          preciado: <strong>la salud y el bienestar de miles de familias ecuatorianas.</strong> Actualmente
          contamos con <Link href="/somos-parte-de-la-red-humana/">más de 200.000 afiliados</Link> a nivel
          nacional.
        </p>
        <p>
          El respeto por el ser humano ha sido nuestra principal misión, donde la <strong>ética</strong>, la{" "}
          <strong>calidez</strong> y la <strong>integridad</strong> han marcado los valores en el servicio
          que damos a todos los ecuatorianos.
        </p>
        <span className="kicker">¿Por qué Humana?</span>
        <h2>Más de 30 años cuidando lo que más importa.</h2>
        <p>Salud, bienestar y respaldo para las personas, familias y empresas del Ecuador.</p>
        <div className="about-hero-actions"><Link className="primary-button" href="/planes-medicos/">Conoce nuestros planes <ArrowRight size={18} /></Link><Link className="secondary-button" href="#nuestra-historia">Nuestra historia</Link></div>
        <div className="about-trust"><UsersRound /><span><strong>Más de 200.000</strong> personas y empresas confían en Humana</span></div>
      </div>
    </section>

    <section className="about-numbers" aria-label="Datos clave de Humana">
      <article><strong>1994</strong><span>Nacimos en Ecuador</span></article>
      <article><strong>+30 años</strong><span>Experiencia en salud</span></article>
      <article><strong>+200.000</strong><span>Personas y empresas confían en Humana</span></article>
      <article><MapPin /><span>Presencia nacional</span></article>
    </section>

    <section className="about-story" id="nuestra-historia">
      <div className="about-story-intro"><span className="kicker">Quiénes somos</span><h2>Una historia construida alrededor de las personas.</h2><p>Humana es una compañía ecuatoriana de medicina prepagada que, desde 1994, acompaña a sus afiliados financiando el acceso a servicios de salud y atención médica.</p></div>
      <div className="about-timeline">
        <article><span>1994</span><div><h3>Comenzamos a cuidar</h3><p>Humana inicia su historia en Quito con el propósito de proteger la salud y el bienestar.</p></div></article>
        <article><span>+30</span><div><h3>Crecemos con Ecuador</h3><p>Décadas de experiencia nos permiten comprender las necesidades de personas, familias y empresas.</p></div></article>
        <article><span>Hoy</span><div><h3>Más de 200.000 personas y empresas confían en Humana</h3><p>Seguimos evolucionando para ofrecer una experiencia más clara, cercana y útil.</p></div></article>
      </div>
    </section>

    <section className="about-ecosystem">
      <div className="about-ecosystem-heading"><div><span className="kicker light">Respaldo Grupo Conclina</span><h2>Un ecosistema integral de salud.</h2></div><p>Humana forma parte de Grupo Conclina junto a instituciones que conectan protección, atención médica y compromiso social.</p></div>
      <div className="about-ecosystem-grid">{ecosystem.map(({ icon: Icon, title, copy, href }) => <Link href={href} key={title} style={{ textDecoration: "none", color: "inherit" }}><article><Icon /><h3>{title}</h3><p>{copy}</p></article></Link>)}</div>
    </section>

    <section className="about-values">
      <div className="section-heading centered"><span className="kicker">Nuestra forma de cuidar</span><h2>Humanos en cada decisión.</h2><p>El respeto por el ser humano guía nuestro servicio.</p></div>
      <div className="about-values-grid">{values.map(({ icon: Icon, title, copy }) => <article key={title}><span><Icon /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <InstitutionalExploreCards />

    <section className="about-purpose"><Network /><div><span className="kicker light">Nuestro compromiso</span><h2>Tu salud no se vive en partes.</h2><p>Por eso conectamos prevención, atención y respaldo para acompañarte cuando lo necesites.</p></div><Link className="white-button" href="/planes-medicos/">Encuentra tu plan <ArrowRight size={18} /></Link></section>
  </SiteShell>;
}
