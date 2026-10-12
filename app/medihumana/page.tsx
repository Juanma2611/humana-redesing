import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Ambulance, ArrowRight, Hospital, House, MessageCircle, Pill,
  ShieldCheck, Syringe, Video,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Medihumana - Humana S.A.",
  description:
    "Medihumana es el conjunto de servicios exclusivos que Humana coordina para que puedas recibir todas las prestaciones médicas y farmacéuticas a las que tienes…",
};

/* Bloque oficial "Haz clic y accede a nuestros servicios": solo estos 8
   accesos (mismo set que ya se usa en las páginas de confirmación de
   Medihumana). Cada uno lleva a su sección dentro de esta misma página,
   en el mismo orden agrupado que las secciones de abajo. */
const quickAccess = [
  { icon: House, label: "Médico a domicilio", href: "#medico-a-domicilio" },
  { icon: Video, label: "Teleconsultas", href: "#teleconsultas" },
  { icon: Ambulance, label: "Ambulancia", href: "#ambulancia" },
  { icon: Syringe, label: "Plan de vacunación infantil", href: "#vacunacion-infantil" },
  { icon: ShieldCheck, label: "Programa de pacientes Covid-19", href: "#covid-19" },
  { icon: Pill, label: "Plan de medicación continua", href: "#medicacion-continua" },
  { icon: ShieldCheck, label: "Autorizaciones", href: "#autorizaciones" },
  { icon: Hospital, label: "Red de Prestadores", href: "#red-de-prestadores" },
];

type OfficialService = {
  id: string;
  group: string;
  title: string;
  image: string;
  copy?: string | null;
  list?: string[];
  listTitle?: string;
  phones?: { src: string; alt: string; href?: string }[];
  button?: { label: string; href: string };
  buttons?: { label: string; href: string }[];
};

/* Contenido oficial de los 8 servicios (texto, imágenes y enlaces tal
   como ya estaban verificados en el sitio), agrupados en 3 familias:
   atención médica directa, programas de salud, y trámites/red. Cada
   grupo comparte el mismo eyebrow para que se lean como conjunto. */
const officialServices: OfficialService[] = [
  {
    id: "medico-a-domicilio",
    group: "ATENCIÓN MÉDICA",
    title: "Médico a domicilio",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/medico-a-domicilio-v2.png",
    copy: "Recibirás una asistencia médica oportuna, de calidad y segura en la comodidad de tu hogar o lugar donde requieras de atención. Una vez realizado el diagnóstico el médico determinará si es necesario el traslado a una clínica o a un hospital de nuestra red. De lo contrario, prescribirá medicinas y podrá adquirirlas en la farmacia en convenio más cercana.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/articles/4402813434253-M%C3%A9dico-a-domicilio" },
  },
  {
    id: "teleconsultas",
    group: "ATENCIÓN MÉDICA",
    title: "Teleconsulta médica",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/teleconsulta-medica-v2.png",
    copy: "Conoce nuestro servicio de TELECONSULTA para medicina general, medicina interna y pediatría, estas consultas serán por vía telefónica.",
    buttons: [
      { label: "Agendar cita en Metrored", href: "https://www.metrored.med.ec/servicios/untitledcitas-medicas" },
      { label: "Agendar cita por teléfono", href: "https://servicio.humana.med.ec/hc/es/articles/4402720816013-Teleconsulta-m%C3%A9dica" },
    ],
  },
  {
    id: "ambulancia",
    group: "ATENCIÓN MÉDICA",
    title: "Ambulancia terrestre",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/ambulancia-terrestre-v2.png",
    copy: "Recibirás una asistencia médica oportuna, de calidad y segura en la comodidad de tu hogar. Una vez realizado el diagnóstico el médico determinará si es necesario el traslado a una clínica o a un hospital de nuestra red. De lo contrario, prescribirá medicinas y podrá adquirirlas en la farmacia en convenio más cercana.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/articles/4402736531597-Ambulancia-terrestre" },
  },
  {
    id: "vacunacion-infantil",
    group: "PROGRAMAS DE SALUD",
    title: "Plan de vacunación infantil",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/plan-de-vacunacion-infantil-v2.png",
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
    id: "covid-19",
    group: "PROGRAMAS DE SALUD",
    title: "Programa de pacientes Covid",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/programa-pacientes-covid-v2.png",
    copy: "Si presentas síntomas o ya cuentas con una prueba de hisopado RT-PCR positiva, comunícate con los siguientes números para incluirte en nuestro programa de atención ambulatoria.",
    phones: [
      { src: "https://humana.med.ec/wp-content/uploads/2021/06/telefono-metrored.png", alt: "Teléfono Metrored" },
      { src: "https://humana.med.ec/wp-content/uploads/2021/06/telefono-medilink.png", alt: "Teléfono Medilink", href: "https://api.whatsapp.com/send?phone=593993183975" },
    ],
    button: { label: "Ver condiciones de uso", href: "https://servicio.humana.med.ec/hc/es/articles/4403176927757-Programa-de-pacientes-Covid" },
  },
  {
    id: "medicacion-continua",
    group: "PROGRAMAS DE SALUD",
    title: "Plan de medicación continua",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/plan-de-medicacion-continua-v2.png",
    copy: "Se considera pacientes crónicos a aquellos que padecen afecciones de larga duración que precisan medicación continua, como diabetes o hipertensión, epilepsia u osteoporosis. El Plan de medicación continua está diseñado para todos los afiliados que toman medicación de manera continua, ofreciendo la acumulación y canje de beneficios a través de la compra en los puntos de venta autorizados.",
    button: { label: "Más información", href: "https://servicio.humana.med.ec/hc/es/sections/360013986011-Plan-de-medicaci%C3%B3n-Continua" },
  },
  {
    id: "autorizaciones",
    group: "TRÁMITES Y RED",
    title: "Autorizaciones",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/autorizaciones-v2.png",
    list: ["Uso de autorizaciones", "Autorizaciones emergentes", "Autorizaciones ambulatorias", "Autorizaciones hospitalarias", "Autorizaciones de asistencias"],
    button: { label: "Ver todas las autorizaciones", href: "https://servicio.humana.med.ec/hc/es/categories/360006583511-AUTORIZACIONES" },
  },
  {
    id: "red-de-prestadores",
    group: "TRÁMITES Y RED",
    title: "Red de prestadores",
    image: "https://humana.med.ec/wp-content/uploads/2024/08/red-de-prestadores-v2.png",
    copy: "Humana pone al servicio de sus afiliados la red de prestadores médicos más representativa y confiable del país, garantizando una atención médica de calidad. Para acceder a nuestra red de prestadores modalidad cerrada o de la Red Humana ingrese a Red Humana o comuníquese con el 1800 HUMANA (48 62 62).",
    button: { label: "Visita nuestra red", href: "https://red.humana.med.ec/RedHumana" },
  },
];

/* 3 fondos alternados, nunca dos iguales seguidos: navy oscuro, azul de
   marca oscuro (.is-brand, variante sin el extremo celeste claro de
   .is-color) y gris azulado #f4f7fb. Nada de blanco plano. */
const bgClass = (i: number) => (i % 3 === 0 ? "is-dark" : i % 3 === 1 ? "is-light" : "is-brand");

export default function MedihumanaPage() {
  return (
    <SiteShell title="Medihumana">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Medihumana</span>
      </nav>

      <div className="biz-page" data-accent="blue">
        {/* Hero + accesos rápidos, misma placa navy ----------------------- */}
        <section className="biz-hero" id="medihumana-inicio">
          <div className="biz-hero-copy">
            <span className="biz-eyebrow">USA TU PLAN SIN COMPLICARTE</span>
            <h1>Medihumana</h1>
            <p className="biz-hero-body">
              Medihumana es el conjunto de servicios exclusivos que Humana coordina para que puedas recibir
              todas las prestaciones médicas y farmacéuticas a las que tienes acceso con tu plan. Atendemos
              todas tus consultas y requerimientos las 24 horas al día los 7 días de la semana.
            </p>
            <div className="biz-hero-stat">
              <strong>24/7</strong>
              <span>los 7 días de la semana</span>
            </div>
          </div>

          <div className="biz-container" style={{ marginTop: 56 }}>
            <div className="biz-section-head">
              <h2>Haz clic y accede a nuestros servicios</h2>
            </div>
            <div className="medi-quick-grid">
              {quickAccess.map(({ icon: Icon, label, href }) => (
                <Link className="medi-quick-card" href={href} key={label}>
                  <span className="medi-quick-icon"><Icon aria-hidden="true" /></span>
                  <span className="medi-quick-label">{label}</span>
                  <ArrowRight className="medi-quick-arrow" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Los 8 servicios oficiales, agrupados y alternados -------------- */}
        {officialServices.map((service, i) => (
          <section className={`biz-section ${bgClass(i)}`} id={service.id} key={service.id}>
            <div className="biz-container">
              <div className={`biz-feature${i % 2 === 1 ? " reverse" : ""}`}>
                <figure className="biz-feature-media">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width: 860px) 100vw, 50vw" unoptimized />
                </figure>
                <div className="biz-feature-copy">
                  <span className="biz-eyebrow">{service.group}</span>
                  <h2>{service.title}</h2>

                  {service.copy && <p className="text-justify-wide">{service.copy}</p>}

                  {service.phones && (
                    <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "4px 0 20px" }}>
                      {service.phones.map((phone) => {
                        const img = (
                          <span className="biz-phone-chip" key={phone.src}>
                            <Image src={phone.src} alt={phone.alt} width={180} height={48} unoptimized style={{ objectFit: "contain", width: "auto", height: 32 }} />
                          </span>
                        );
                        return phone.href ? <a key={phone.src} href={phone.href} target="_blank" rel="noreferrer">{img}</a> : img;
                      })}
                    </div>
                  )}

                  {service.list && (
                    <div className="biz-list-card">
                      {service.listTitle && <strong>{service.listTitle}</strong>}
                      <ul>{service.list.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
                    {service.button && (
                      <a className="biz-btn-primary" href={service.button.href} target="_blank" rel="noreferrer">
                        {service.button.label} <ArrowRight aria-hidden="true" />
                      </a>
                    )}
                    {service.buttons?.map((b) => (
                      <a key={b.label} className="biz-btn-primary" href={b.href} target="_blank" rel="noreferrer">
                        {b.label} <ArrowRight aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Cierre: contacto directo --------------------------------------- */}
        <section className="biz-section is-dark is-close">
          <div className="biz-container biz-close">
            <div className="biz-section-head">
              <span className="biz-eyebrow">MEDIHUMANA</span>
              <h2>¿Necesitas ayuda con alguno de estos servicios?</h2>
              <p>Escríbenos y te guiamos en el trámite que necesites.</p>
            </div>
            <div className="biz-close-actions">
              <a className="biz-btn-primary" href="https://wa.me/59324017002" target="_blank" rel="noreferrer">
                <MessageCircle aria-hidden="true" size={16} /> Escribir por WhatsApp
              </a>
              <Link className="biz-btn-link" href="/">Volver al inicio <ArrowRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  );
}
