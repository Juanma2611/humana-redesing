"use client";

import Link from "next/link";
import {
  ArrowRight, Building2, Check, ChevronRight, FlaskConical, HeartPulse, Hospital,
  MapPin, Pill, Search, ShieldCheck, Stethoscope,
} from "lucide-react";
import { useState } from "react";
import { PageHero, SiteShell } from "@/components/site-shell";

const officialNetworkUrl = "https://red.humana.med.ec/RedHumana";

const careOptions = [
  { key: "especialistas", label: "Médicos y especialistas", copy: "Encuentra atención por especialidad y ubicación.", icon: Stethoscope },
  { key: "centros", label: "Centros y hospitales", copy: "Consulta establecimientos disponibles dentro de la red.", icon: Hospital },
  { key: "diagnostico", label: "Laboratorio e imagen", copy: "Ubica servicios de apoyo diagnóstico cerca de ti.", icon: FlaskConical },
  { key: "farmacias", label: "Farmacias", copy: "Revisa las alternativas vigentes para tus medicinas.", icon: Pill },
] as const;

const cities = ["Quito", "Guayaquil", "Cuenca", "Ambato", "Manta", "Loja", "Santo Domingo", "Machala", "Riobamba", "Ibarra", "Portoviejo"];

const serviceOptions: Record<(typeof careOptions)[number]["key"], string[]> = {
  especialistas: ["Medicina general", "Pediatría", "Ginecología", "Cardiología", "Dermatología", "Traumatología", "Oftalmología", "Otorrinolaringología", "Gastroenterología", "Neurología", "Psicología", "Nutrición"],
  centros: ["Hospital", "Clínica", "Centro médico", "Centro ambulatorio", "Urgencias", "Maternidad"],
  diagnostico: ["Laboratorio clínico", "Imagenología", "Rayos X", "Ecografía", "Tomografía", "Resonancia magnética"],
  farmacias: ["Farmacia", "Medicación continua", "Medicinas a domicilio"],
};

export default function DirectorioClient() {
  const [care, setCare] = useState<(typeof careOptions)[number]["key"]>("especialistas");
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [searched, setSearched] = useState(false);
  const selectedCare = careOptions.find(option => option.key === care)!;
  const SelectedIcon = selectedCare.icon;

  return <SiteShell title="Red médica">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link><span>»</span><span>Red de prestadores</span>
    </nav>
    <section className="content-section" aria-label="Cifras de la red" style={{ maxWidth: 820, margin: "0 auto", padding: "32px 24px 0", display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap", textAlign: "center" }}>
      <div><strong style={{ fontSize: 32, color: "#073b60" }}>1255</strong><p style={{ margin: 0, color: "#3f5f73" }}>Médicos</p></div>
      <div><strong style={{ fontSize: 32, color: "#073b60" }}>235</strong><p style={{ margin: 0, color: "#3f5f73" }}>Hospitales y Clínicas</p></div>
      <div><strong style={{ fontSize: 32, color: "#073b60" }}>811</strong><p style={{ margin: 0, color: "#3f5f73" }}>Centros Médicos</p></div>
    </section>
    <PageHero eyebrow="Red de prestadores" title="Red de prestadores Humana S.A." description="Explora el tipo de atención que necesitas y prepara tu búsqueda en la Red Humana." imageSrc="/red-medica-hero.webp" imageAlt="Equipo médico de Humana colaborando en un centro de salud moderno" imagePosition="center">
      <div className="network-hero-actions"><a className="primary-button" href={officialNetworkUrl} target="_blank" rel="noreferrer">Consultar Red Humana <ArrowRight /></a><Link className="secondary-button" href="/servicios/autorizaciones">¿Necesitas autorización?</Link></div>
    </PageHero>

    <section className="content-section network-premium">
      <div className="network-intro">
        <div><span className="kicker">Comienza tu búsqueda</span><h2>¿Qué atención necesitas?</h2><p>Elige una categoría para preparar una búsqueda clara antes de entrar al directorio oficial.</p></div>
        <div className="network-live-proof"><ShieldCheck /><span><strong>Información siempre vigente</strong><small>La disponibilidad final depende de tu plan y de la red contratada.</small></span></div>
      </div>

      <div className="network-kind-grid" role="radiogroup" aria-label="Tipo de atención">
        {careOptions.map(({ key, label, copy, icon: Icon }) => <button key={key} type="button" role="radio" aria-checked={care === key} className={`network-kind-card ${care === key ? "active" : ""}`} onClick={() => { setCare(key); setSpecialty(""); setSearched(false); }}><span><Icon /></span><strong>{label}</strong><p>{copy}</p><Check /></button>)}
      </div>

      <div className="network-finder">
        <div className="network-finder-copy"><span><Search /></span><small>Búsqueda guiada</small><h2>Prepara tu consulta</h2><p>Completa los datos que conozcas. Luego podrás confirmar los prestadores y condiciones disponibles en la fuente oficial.</p><ul><li><Check /> Busca según tu ciudad</li><li><Check /> Filtra por especialidad o servicio</li><li><Check /> Verifica la cobertura de tu plan</li></ul></div>
        <form className="network-search-form" onSubmit={event => { event.preventDefault(); setSearched(true); }}>
          <div className="network-selected-type"><span><SelectedIcon /></span><div><small>Tipo de atención</small><strong>{selectedCare.label}</strong></div><ChevronRight /></div>
          <label><span>Ciudad</span><div><MapPin /><select value={city} onChange={event => { setCity(event.target.value); setSearched(false); }} aria-label="Selecciona una ciudad"><option value="">Selecciona tu ciudad</option>{cities.map(option => <option key={option} value={option}>{option}</option>)}</select></div></label>
          <label><span>Especialidad o servicio</span><div><Stethoscope /><select value={specialty} onChange={event => { setSpecialty(event.target.value); setSearched(false); }} aria-label="Selecciona una especialidad o servicio"><option value="">Selecciona una opción</option>{serviceOptions[care].map(option => <option key={option} value={option}>{option}</option>)}</select></div></label>
          <button type="submit">Preparar búsqueda <ArrowRight /></button>
          {searched && <div className="network-search-ready" role="status"><Check /><div><strong>Tu consulta está preparada</strong><p>{selectedCare.label}{city ? ` en ${city}` : ""}{specialty ? ` · ${specialty}` : ""}. Abre la Red Humana para revisar los resultados vigentes.</p></div></div>}
          <a className="network-official-button" href={officialNetworkUrl} target="_blank" rel="noreferrer"><Building2 /> Abrir directorio oficial <ArrowRight /></a>
        </form>
      </div>

      <div className="content-section" style={{ maxWidth: 820, margin: "0 auto", padding: "48px 0" }}>
        <h2>Red CAM</h2>
        <p>Es la red de Centros de Atención Médica que brinda servicios ambulatorios integrales. Esta modalidad funciona bajo un copago fijo que varía según la especialidad, y un porcentaje de cobertura para servicios complementarios, de acuerdo al plan contratado.</p>
        <h3>¿Cómo usar la RED?</h3>
        <ol>
          <li>Busque el prestador en el directorio según la ubicación geográfica y el servicio requerido.</li>
          <li>Identifique al prestador que lleve el icono de su Red CAM.</li>
          <li>Comuníquese al número de contacto del prestador seleccionado.</li>
          <li>Identifíquese como afiliado de Humana.</li>
          <li>Agende la cita de acuerdo a la disponibilidad.</li>
          <li>Acuda con 20 minutos de anticipación a la cita.</li>
          <li>Presente su documento de identificación.</li>
          <li>Cancele el copago.</li>
        </ol>
        <p style={{ color: "#5e7384", fontSize: 14 }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>

        <h2>Red Preferida</h2>
        <p>Es la red conformada por médicos especialistas, profesionales del más alto nivel, cuenta con más de 800 doctores en convenio a nivel nacional.</p>
        <ul className="plan-faq-checklist">
          <li><strong>Red Preferida Practihumana:</strong> Valor de copago $15 (aplica para planes Practihumana y Metrohumana).</li>
          <li><strong>Red Preferida Metrohumana:</strong> Valor de copago $25 (aplica para planes Metrohumana).</li>
        </ul>
        <p>Proceso: los mismos 8 pasos, identificando el icono de Red Preferida (PractiHumana o MetroHumana) y cancelando el copago según el tipo de red seleccionada.</p>
        <p style={{ color: "#5e7384", fontSize: 14 }}>Importante: Consultas de dermatología y oftalmología están sujetos a particularidades de crédito.</p>

        <h2>Red Reembolso</h2>
        <p>Esta red está conformada por más de 350 médicos especialistas a nivel nacional. Con esta red puede acceder a tarifas preferenciales por consultas médicas.</p>
        <p>Cómo usar la red: los mismos 8 pasos, identificando el icono de Red Reembolso y cancelando el valor preferencial.</p>
      </div>

      <div className="network-help-grid">
        <article><span><HeartPulse /></span><div><small>Antes de atenderte</small><h2>Confirma tu cobertura</h2><p>La inclusión de un prestador, el porcentaje y las condiciones pueden variar según el plan contratado.</p></div></article>
        <article><span><Building2 /></span><div><small>Información del prestador</small><h2>Revisa los datos vigentes</h2><p>Consulta ubicación, especialidad y disponibilidad directamente en la Red Humana.</p></div></article>
        <article><span><ShieldCheck /></span><div><small>Atención planificada</small><h2>Valida autorizaciones</h2><p>Algunos exámenes o procedimientos pueden requerir una autorización previa.</p><Link href="/servicios/autorizaciones">Conocer el proceso <ArrowRight /></Link></div></article>
      </div>
    </section>
  </SiteShell>;
}
