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

export default function Network() {
  const [care, setCare] = useState<(typeof careOptions)[number]["key"]>("especialistas");
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [searched, setSearched] = useState(false);
  const selectedCare = careOptions.find(option => option.key === care)!;
  const SelectedIcon = selectedCare.icon;

  return <SiteShell title="Red médica">
    <PageHero eyebrow="Red de prestadores" title="Tu atención, más cerca de ti" description="Explora el tipo de atención que necesitas y prepara tu búsqueda en la Red Humana." imageSrc="/red-medica-hero.webp" imageAlt="Equipo médico de Humana colaborando en un centro de salud moderno" imagePosition="center">
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

      <div className="network-help-grid">
        <article><span><HeartPulse /></span><div><small>Antes de atenderte</small><h2>Confirma tu cobertura</h2><p>La inclusión de un prestador, el porcentaje y las condiciones pueden variar según el plan contratado.</p></div></article>
        <article><span><Building2 /></span><div><small>Información del prestador</small><h2>Revisa los datos vigentes</h2><p>Consulta ubicación, especialidad y disponibilidad directamente en la Red Humana.</p></div></article>
        <article><span><ShieldCheck /></span><div><small>Atención planificada</small><h2>Valida autorizaciones</h2><p>Algunos exámenes o procedimientos pueden requerir una autorización previa.</p><Link href="/servicios/autorizaciones">Conocer el proceso <ArrowRight /></Link></div></article>
      </div>
    </section>
  </SiteShell>;
}
