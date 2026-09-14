import Link from "next/link";
import { ArrowRight, HeartHandshake, House, Luggage, MessageSquareText, Pill, Smile, Stethoscope, Video } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";

const items = [
  {icon:Video,title:"Teleconsulta médica",copy:"Recibe orientación médica a distancia cuando el servicio esté incluido en tu plan.",href:"/servicios#teleconsulta"},
  {icon:House,title:"Médico a domicilio",copy:"Conoce cómo solicitar atención en casa y las condiciones aplicables.",href:"/servicios"},
  {icon:Pill,title:"Red de farmacias",copy:"Ubica opciones para adquirir medicinas con la modalidad disponible en tu cobertura.",href:"/servicios#farmacias"},
  {icon:Luggage,title:"Asistencia en viajes",copy:"Consulta el respaldo disponible cuando necesitas atención fuera de tu ciudad o país.",href:"/servicios#urgencias"},
  {icon:Smile,title:"Atención dental",copy:"Explora servicios odontológicos y prestadores habilitados.",href:"/planes"},
  {icon:Stethoscope,title:"Red médica",copy:"Busca profesionales, centros y servicios por ubicación y especialidad.",href:"/red-medica"},
];

export default function Benefits() {
  return <SiteShell title="Beneficios"><PageHero eyebrow="Aprovecha mejor tu plan" title="Beneficios explicados sin letra pequeña" description="Cada beneficio muestra para qué sirve, cómo acceder y dónde confirmar si está incluido en tu cobertura." imageSrc="/beneficios-hero.webp" imageAlt="Doctora orientando a una afiliada sobre el cuidado de su salud" imagePosition="center" />
    <section className="content-section"><div className="benefits-hub">{items.map(({icon:Icon,title,copy,href}) => <article key={title}><Icon /><h2>{title}</h2><p>{copy}</p><Link href={href}>Cómo utilizarlo <ArrowRight size={17} /></Link></article>)}</div><div className="benefit-alert"><HeartHandshake /><div><strong>Recuerda</strong><p>La disponibilidad, límites y condiciones dependen del plan contratado. La versión final consultaría tu cobertura después de iniciar sesión.</p></div><Link className="primary-button" href="/cliente">Ver MiHumana demo</Link></div></section>
  </SiteShell>;
}
