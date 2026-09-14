import Link from "next/link";
import { Activity, ArrowRight, ClipboardList, FileText, Headphones, Hospital, House, MessageCircleQuestion, Pill, ReceiptText, ShieldCheck, Video } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";

const services = [
  {icon:ReceiptText,title:"Reembolsos",copy:"Conoce requisitos, simula una solicitud y revisa el proceso.",href:"/servicios/reembolsos"},
  {icon:ShieldCheck,title:"Autorizaciones",copy:"Identifica cuándo se necesita autorización y cómo gestionarla.",href:"/servicios/autorizaciones"},
  {icon:Hospital,title:"Red de prestadores",copy:"Busca atención por ciudad, especialidad y tipo de servicio.",href:"/red-medica"},
  {icon:FileText,title:"Formularios",copy:"Ubica formularios frecuentes sin recorrer varias páginas.",href:"#formularios"},
  {icon:ClipboardList,title:"Contratos y certificados",copy:"Actualización de datos, certificados e información del contrato.",href:"#contratos"},
  {icon:Video,title:"Teleconsulta",copy:"Acceso orientativo a atención médica remota.",href:"#teleconsulta"},
  {icon:Pill,title:"Medicinas y farmacias",copy:"Información sobre cobertura directa y farmacias de la red.",href:"#farmacias"},
  {icon:Headphones,title:"Urgencias y ayuda",copy:"Qué hacer y a qué canal acudir según tu necesidad.",href:"#urgencias"},
  {icon:House,title:"Atención en casa",copy:"Información sobre médico a domicilio y servicios coordinados.",href:"#atencion-casa"},
  {icon:MessageCircleQuestion,title:"Central de ayuda",copy:"Respuestas frecuentes sobre el uso del plan y los trámites.",href:"#ayuda"},
];

export default function Services() {
  return <SiteShell title="Servicios para clientes"><PageHero eyebrow="Usa tu plan sin complicarte" title="¿Qué necesitas hacer hoy?" description="Los servicios están organizados por tarea para que una persona nueva sepa inmediatamente dónde entrar." imageSrc="/servicios-clientes-hero.webp" imageAlt="Afiliada utilizando los servicios digitales de Humana con acompañamiento" imagePosition="center" />
    <section className="content-section"><div className="service-grid">{services.map(({icon:Icon,title,copy,href}) => <Link id={href.startsWith("#") ? href.slice(1) : undefined} className="service-card" href={href} key={title}><Icon /><div><h2>{title}</h2><p>{copy}</p></div><ArrowRight /></Link>)}</div>
      <div className="journey-panel"><Activity /><div><h2>¿No sabes qué trámite necesitas?</h2><p>Describe tu situación con palabras simples y el centro de ayuda te conduciría al proceso correcto.</p></div><Link className="primary-button" href="/cliente">Ver MiHumana demo</Link></div>
    </section></SiteShell>;
}
