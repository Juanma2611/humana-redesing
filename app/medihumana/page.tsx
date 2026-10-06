import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Activity, ArrowRight, ClipboardList, FileText, Headphones, Hospital, House, MessageCircleQuestion, Pill, ReceiptText, ShieldCheck, Video } from "lucide-react";
import { PageHero, SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Medihumana - Humana S.A.",
  description:
    "Medihumana es el conjunto de servicios exclusivos que Humana coordina para que puedas recibir todas las prestaciones médicas y farmacéuticas a las que tienes…",
};

const services = [
  {icon:ReceiptText,title:"Reembolsos",copy:"Conoce requisitos, simula una solicitud y revisa el proceso.",href:"/servicios/reembolsos/"},
  {icon:ShieldCheck,title:"Autorizaciones",copy:"Identifica cuándo se necesita autorización y cómo gestionarla.",href:"/servicios/autorizaciones/"},
  {icon:Hospital,title:"Red de prestadores",copy:"Busca atención por ciudad, especialidad y tipo de servicio.",href:"/directorio/"},
  {icon:FileText,title:"Formularios",copy:"Ubica formularios frecuentes sin recorrer varias páginas.",href:"#formularios"},
  {icon:ClipboardList,title:"Contratos y certificados",copy:"Actualización de datos, certificados e información del contrato.",href:"#contratos"},
  {icon:Video,title:"Teleconsulta",copy:"Acceso orientativo a atención médica remota.",href:"#teleconsulta"},
  {icon:Pill,title:"Medicinas y farmacias",copy:"Información sobre cobertura directa y farmacias de la red.",href:"#farmacias"},
  {icon:Headphones,title:"Urgencias y ayuda",copy:"Qué hacer y a qué canal acudir según tu necesidad.",href:"#urgencias"},
  {icon:House,title:"Atención en casa",copy:"Información sobre médico a domicilio y servicios coordinados.",href:"#atencion-casa"},
  {icon:MessageCircleQuestion,title:"Central de ayuda",copy:"Respuestas frecuentes sobre el uso del plan y los trámites.",href:"#ayuda"},
];

const officialServices = [
  {
    title: "Médico a domicilio",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/medico-a-domicilio-v2.png",
    copy: "Recibirás una asistencia médica oportuna, de calidad y segura en la comodidad de tu hogar o lugar donde requieras de atención. Una vez realizado el diagnóstico el médico determinará si es necesario el traslado a una clínica o a un hospital de nuestra red. De lo contrario, prescribirá medicinas y podrá adquirirlas en la farmacia en convenio más cercana.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/articles/4402813434253-M%C3%A9dico-a-domicilio" },
  },
  {
    title: "Teleconsulta médica",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/teleconsulta-medica-v2.png",
    copy: "Conoce nuestro servicio de TELECONSULTA para medicina general, medicina interna y pediatría, estas consultas serán por vía telefónica.",
    buttons: [
      { label: "Agendar cita en Metrored", href: "https://www.metrored.med.ec/servicios/untitledcitas-medicas" },
      { label: "Agendar cita por teléfono", href: "https://servicio.humana.med.ec/hc/es/articles/4402720816013-Teleconsulta-m%C3%A9dica" },
    ],
  },
  {
    title: "Ambulancia terrestre",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/ambulancia-terrestre-v2.png",
    copy: "Recibirás una asistencia médica oportuna, de calidad y segura en la comodidad de tu hogar. Una vez realizado el diagnóstico el médico determinará si es necesario el traslado a una clínica o a un hospital de nuestra red. De lo contrario, prescribirá medicinas y podrá adquirirlas en la farmacia en convenio más cercana.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre" },
  },
  {
    title: "Plan de vacunación infantil",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/plan-de-vacunacion-infantil-v2.png",
    copy: null,
    list: [
      "Acceso solo para infantes (niñas y niños) hasta 23 meses de edad activos en el contrato.",
      "El Titular debe completar correctamente todos los campos del formulario.",
      "Metrored se comunica con usted para coordinar la cita de colocación de la vacuna. (Puede ser en Metrored Carolina, Metrored Guayaquil o a domicilio con un costo adicional de $7).",
      "Únicamente paga la diferencia del valor según su plan contratado para cada vacuna.",
    ],
    listTitle: "¿Cómo acceder al programa?",
    button: { label: "Completar la solicitud", href: "https://servicio.humana.med.ec/hc/es/articles/4403717589517-Plan-de-vacunaci%C3%B3n-infantil" },
  },
  {
    title: "Programa de pacientes Covid",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/programa-pacientes-covid-v2.png",
    copy: "Si presentas síntomas o ya cuentas con una prueba de hisopado RT-PCR positiva, comunícate con los siguientes números para incluirte en nuestro programa de atención ambulatoria.",
    button: { label: "Ver condiciones de uso", href: "https://servicio.humana.med.ec/hc/es/articles/4403176927757-Programa-de-pacientes-Covid" },
  },
  {
    title: "Autorizaciones",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/autorizaciones-v2.png",
    copy: null,
    list: ["Uso de autorizaciones", "Autorizaciones emergentes", "Autorizaciones ambulatorias", "Autorizaciones hospitalarias", "Autorizaciones de asistencias"],
    button: { label: "Ver todas las autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  },
  {
    title: "Plan de medicación continua",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/plan-de-medicacion-continua-v2.png",
    copy: "Se considera pacientes crónicos a aquellos que padecen afecciones de larga duración que precisan medicación continua, como diabetes o hipertensión, epilepsia u osteoporosis. El Plan de medicación continua está diseñado para todos los afiliados que toman medicación de manera continua, ofreciendo la acumulación y canje de beneficios a través de la compra en los puntos de venta autorizados.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/sections/360013986011-Plan-de-medicaci%C3%B3n-Continua" },
  },
  {
    title: "Red de prestadores",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/red-de-prestadores-v2.png",
    copy: "Humana pone al servicio de sus afiliados la red de prestadores médicos más representativa y confiable del país, garantizando una atención médica de calidad. Para acceder a nuestra red de prestadores modalidad cerrada o de la Red Humana ingrese a Red Humana o comuníquese con el 1800 HUMANA (48 62 62).",
    button: { label: "Visita nuestra red", href: "https://red.humana.med.ec/RedHumana" },
  },
];

export default function MedihumanaPage() {
  return <SiteShell title="Medihumana">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link><span>»</span><span>Medihumana</span>
    </nav>

    <PageHero eyebrow="Usa tu plan sin complicarte" title="Medihumana" description="Medihumana es el conjunto de servicios exclusivos que Humana coordina para que puedas recibir todas las prestaciones médicas y farmacéuticas a las que tienes acceso con tu plan. Atendemos todas tus consultas y requerimientos las 24 horas al día los 7 días de la semana." imageSrc="/servicios-clientes-hero.webp" imageAlt="Afiliada utilizando los servicios digitales de Humana con acompañamiento" imagePosition="center" />

    <section className="content-section servicios-section"><div className="service-grid">{services.map(({icon:Icon,title,copy,href}) => <Link id={href.startsWith("#") ? href.slice(1) : undefined} className="service-card" href={href} key={title}><Icon /><div><h2>{title}</h2><p>{copy}</p></div><ArrowRight /></Link>)}</div>
      <div className="journey-panel"><Activity /><div><h2>¿No sabes qué trámite necesitas?</h2><p>Describe tu situación con palabras simples y el centro de ayuda te conduciría al proceso correcto.</p></div><Link className="primary-button" href="/cliente/">Ver MiHumana demo</Link></div>
    </section>

    <section className="content-section" style={{ maxWidth: 900, margin: "0 auto", padding: "24px 24px 64px" }}>
      {officialServices.map((service) => (
        <div key={service.title} className="plan-hub-card" style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "center", padding: 28, marginBottom: 24 }}>
          <div style={{ position: "relative", width: 160, height: 120, flexShrink: 0 }}>
            <Image src={service.image} alt={service.title} fill sizes="160px" unoptimized style={{ objectFit: "contain" }} />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <h2 style={{ marginTop: 0 }}>{service.title}</h2>
            {service.copy && <p>{service.copy}</p>}
            {service.list && (
              <>
                {service.listTitle && <strong>{service.listTitle}</strong>}
                <ul className="plan-faq-checklist">{service.list.map((item) => <li key={item}>{item}</li>)}</ul>
              </>
            )}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              {service.button && <a className="secondary-button small" href={service.button.href} target="_blank" rel="noreferrer">{service.button.label}</a>}
              {service.buttons?.map((b) => <a key={b.label} className="secondary-button small" href={b.href} target="_blank" rel="noreferrer">{b.label}</a>)}
            </div>
          </div>
        </div>
      ))}
    </section>
  </SiteShell>;
}
