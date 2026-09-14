import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, HeartHandshake, HeartPulse, Hospital, MapPin,
  Network, ShieldCheck, Sparkles, Stethoscope, UsersRound,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const values = [
  { icon: HeartHandshake, title: "Calidez", copy: "Cuidamos a cada persona con cercanía y empatía." },
  { icon: ShieldCheck, title: "Integridad", copy: "Actuamos con transparencia y responsabilidad." },
  { icon: Sparkles, title: "Excelencia", copy: "Buscamos calidad e innovación en cada experiencia." },
  { icon: UsersRound, title: "Respeto", copy: "El ser humano está en el centro de lo que hacemos." },
];

const ecosystem = [
  { icon: HeartPulse, title: "Humana", copy: "Planes de medicina prepagada y acompañamiento para cada etapa." },
  { icon: Hospital, title: "Hospital Metropolitano", copy: "Respaldo hospitalario dentro del ecosistema de salud." },
  { icon: Stethoscope, title: "Metrored", copy: "Atención ambulatoria y servicios médicos más cerca de ti." },
  { icon: HeartHandshake, title: "Fundación Metrofraternidad", copy: "Una vocación social que amplía el acceso a atención médica." },
];

export default function About() {
  return <SiteShell title="¿Por qué Humana?">
    <section className="about-hero">
      <Image src="/humana-historia-hero.png" alt="Familia ecuatoriana recibiendo orientación de una profesional de salud" fill priority sizes="100vw" unoptimized />
      <div className="about-hero-shade" />
      <div className="about-hero-copy">
        <span className="kicker">¿Por qué Humana?</span>
        <h1>Más de 30 años cuidando lo que más importa.</h1>
        <p>Salud, bienestar y respaldo para las personas, familias y empresas del Ecuador.</p>
        <div className="about-hero-actions"><Link className="primary-button" href="/planes">Conoce nuestros planes <ArrowRight size={18} /></Link><Link className="secondary-button" href="#nuestra-historia">Nuestra historia</Link></div>
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
      <div className="about-ecosystem-grid">{ecosystem.map(({ icon: Icon, title, copy }) => <article key={title}><Icon /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="about-values">
      <div className="section-heading centered"><span className="kicker">Nuestra forma de cuidar</span><h2>Humanos en cada decisión.</h2><p>El respeto por el ser humano guía nuestro servicio.</p></div>
      <div className="about-values-grid">{values.map(({ icon: Icon, title, copy }) => <article key={title}><span><Icon /></span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="about-purpose"><Network /><div><span className="kicker light">Nuestro compromiso</span><h2>Tu salud no se vive en partes.</h2><p>Por eso conectamos prevención, atención y respaldo para acompañarte cuando lo necesites.</p></div><Link className="white-button" href="/planes">Encuentra tu plan <ArrowRight size={18} /></Link></section>
  </SiteShell>;
}
