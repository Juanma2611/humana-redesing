"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Check, HeartPulse, Layers3, PhoneCall, RotateCcw, ScanHeart, ShieldCheck, Sparkles, SmilePlus, UsersRound, WalletCards } from "lucide-react";
import { useState } from "react";
import { SiteShell } from "@/components/site-shell";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";

type Question = { key: string; title: string; help: string; options: [string, string][] };

const audienceQuestion: Question = { key: "profile", title: "¿A quién quieres proteger?", help: "Elige la opción que más se parece a ti.", options: [["persona", "Solo a mí"], ["familia", "A mi familia"], ["empresa", "A mi equipo de trabajo"], ["extra", "Quiero complementar mi plan"], ["dental", "Solo quiero cuidado dental"]] };

const personalQuestions: Question[] = [
  { key: "age", title: "¿En qué etapa de vida estás?", help: "Solo necesitamos un rango general.", options: [["joven", "18 a 29 años"], ["adulto", "30 a 49 años"], ["maduro", "50 a 64 años"], ["senior", "65 años o más"]] },
  { key: "priority", title: "¿Qué es más importante para ti?", help: "Piensa en lo que te daría más tranquilidad.", options: [["economia", "Empezar con una opción accesible"], ["familia", "Maternidad y cuidado familiar"], ["tecnologia", "Atención especializada y tecnología"], ["respaldo", "La mayor cobertura posible"]] },
  { key: "use", title: "¿Qué atención usarías más?", help: "Elige la más cercana a tu realidad.", options: [["consultas", "Consultas y exámenes"], ["familia", "Pediatría y maternidad"], ["hospital", "Hospitalización y cirugías"], ["bienestar", "Psicología, nutrición y terapias"]] },
  { key: "coverage", title: "¿Qué nivel de respaldo buscas?", help: "Esto nos ayuda a afinar la recomendación.", options: [["esencial", "Esencial para comenzar"], ["equilibrado", "Equilibrio entre uso y cobertura"], ["amplio", "Cobertura amplia"], ["maximo", "Máximo respaldo"]] },
];

const businessQuestions: Question[] = [
  { key: "team", title: "¿Cuántas personas quieres proteger?", help: "Una aproximación es suficiente.", options: [["small", "2 a 10"], ["medium", "11 a 50"], ["large", "51 a 100"], ["xlarge", "Más de 100"]] },
  { key: "businessPriority", title: "¿Qué valoras más para tu equipo?", help: "Elige la prioridad principal.", options: [["benefit", "Un beneficio laboral atractivo"], ["family", "Incluir a sus familias"], ["maternity", "Opción de maternidad"], ["flex", "Configurar la cobertura"]] },
  { key: "businessCoverage", title: "¿Qué cobertura deseas explorar?", help: "Podrás ajustar la opción con un asesor.", options: [["10", "$10.000"], ["20", "$20.000"], ["50", "$50.000"], ["unsure", "Necesito orientación"]] },
  { key: "familyExtension", title: "¿Deseas incluir familiares?", help: "Esta opción depende de la contratación.", options: [["yes", "Sí"], ["no", "No"], ["later", "Tal vez después"], ["unsure", "Quiero asesoría"]] },
];

const protectQuestions: Question[] = [
  { key: "base", title: "¿Ya cuentas con un plan médico?", help: "Proteger funciona como complemento.", options: [["individual", "Sí, individual"], ["company", "Sí, empresarial"], ["corporate", "Sí, corporativo"], ["none", "Todavía no"]] },
  { key: "extraPriority", title: "¿Qué gasto te preocupa más?", help: "Elige el escenario más importante para ti.", options: [["hospital", "Hospitalización de alto costo"], ["transplant", "Trasplantes"], ["robotic", "Cirugía robótica"], ["general", "Respaldo adicional general"]] },
  { key: "deductible", title: "¿Qué deducible deseas explorar?", help: "La cobertura opera después del deducible.", options: [["5", "$5.000"], ["10", "$10.000"], ["20", "$20.000"], ["unsure", "Necesito orientación"]] },
  { key: "prevention", title: "¿También valoras la prevención?", help: "Proteger incluye un chequeo anual por contrato.", options: [["yes", "Sí, es importante"], ["some", "En parte"], ["no", "No es mi prioridad"], ["unsure", "Quiero conocer más"]] },
];

const dentalQuestions: Question[] = [
  { key: "dentalFor", title: "¿Para quién buscas cuidado dental?", help: "Puedes incluir a tus seres queridos sin restricción de parentesco.", options: [["me", "Solo para mí"], ["family", "Para mi familia"], ["loved", "Para un ser querido"], ["team", "Para mi equipo"]] },
  { key: "dentalPriority", title: "¿Qué cuidado te interesa más?", help: "Elige lo que más se acerca a tu necesidad.", options: [["prevent", "Limpiezas y prevención"], ["restore", "Restauraciones"], ["specialty", "Especialistas y endodoncia"], ["complete", "Una alternativa más completa"]] },
  { key: "dentalHelp", title: "¿Cómo prefieres continuar?", help: "Podrás comparar Plus y Full antes de cotizar.", options: [["compare", "Comparar las dos opciones"], ["plus", "Explorar ProSonrisas Plus"], ["full", "Explorar ProSonrisas Full"], ["advisor", "Hablar con un asesor"]] },
];

const dentalAddOnQuestion: Question = { key: "dentalAddOn", title: "Cuidar tu sonrisa también es parte de tu bienestar.", help: "¿Quieres añadir protección dental a tu recomendación?", options: [["yes", "Sí, quiero proteger mi sonrisa"], ["no", "No, continuar solo con mi plan médico"]] };

const resultMap = {
  ph15: { name: "PH15", segment: "individual", icon: Sparkles, reason: "Una opción para empezar a cuidarte, con consultas accesibles y respaldo hospitalario.", points: ["$15.000 anuales", "Consultas desde $4", "90% hospitalario en red"] },
  ph30: { name: "PH30", segment: "individual", icon: HeartPulse, reason: "Respaldo cotidiano para consultas, exámenes y atención hospitalaria.", points: ["$30.000 anuales", "Médico a domicilio", "Maternidad y niño sano"] },
  mh50: { name: "MH50", segment: "familiar", icon: UsersRound, reason: "La opción destacada para proteger a tu familia con cobertura equilibrada.", points: ["$50.000 por incapacidad", "90% hospitalario en red", "Psicología y nutrición"] },
  mh80: { name: "Metrohumana80", segment: "familiar", icon: ScanHeart, reason: "Pensado para quienes valoran atención especializada y tecnología médica.", points: ["$80.000 por incapacidad", "Cirugía robótica", "Bienestar integral"] },
  mh150: { name: "MH150", segment: "familiar", icon: ShieldCheck, reason: "Mayor alcance para quienes buscan el máximo nivel de respaldo familiar.", points: ["$150.000 por incapacidad", "Maternidad ampliada", "Viajes 30 días/año"] },
  business: { name: "Humana Business", segment: "empresa", icon: Building2, reason: "Una solución configurable para proteger a tus colaboradores y fortalecer su bienestar.", points: ["Coberturas configurables", "Familiares opcionales", "Teleconsulta"] },
  proteger: { name: "Proteger", segment: "proteger", icon: Layers3, reason: "Un complemento para gastos médicos de gran alcance después del deducible.", points: ["Hasta $500.000", "Trasplantes hasta $250.000", "Chequeo anual"] },
  prosonrisas: { name: "ProSonrisas", segment: "dental", icon: SmilePlus, reason: "Protección dental para prevenir, diagnosticar y tratar tu sonrisa con una red nacional.", points: ["Desde $6,63 por persona", "Alternativas de 36 o 50 procedimientos", "Sin preexistencias ni topes de consulta"] },
  advisor: { name: "Asesoría personalizada", segment: "individual", icon: WalletCards, reason: "Por la etapa de vida indicada, necesitamos revisar continuidad, admisión y condiciones contigo.", points: ["Revisión de opciones", "Condiciones claras", "Acompañamiento humano"] },
};

/* Prestadores oficiales de la franja "La Red Humana que nos ayuda a
   cuidarte". No tenemos acceso a los logos oficiales, así que se
   muestran como nombre en una franja de chips (ver resumen al usuario
   con el listado de archivos de logo que harían falta). */
const networkProviders = [
  "Metrored", "Hospital Metropolitano", "Omni Hospital", "Kennedy Grupo Hospitalario",
  "Clínica Pasteur", "Hospital Vozandes", "Hospital Alcívar", "Hospital de los Valles",
  "Hospital Clínica Mujer", "Axxis Hospital", "Hospital Pediátrico", "Hospital Clínica San Francisco",
  "Novaclínica", "Clínica Integral", "Hospital del Río", "SIME",
  "Corporación Médica Monte Sinaí", "Clínica Paucarbamba", "Centro Quirúrgico Metropolitano",
  "Hospital San Juan de Dios", "Clínica Santa Ana", "Clínica María Auxiliadora",
];

const planInterestOptions = ["Individual y Familiar", "Plan Prosonrisas", "Plan Jóvenes", "Humana Kids", "Plan Proteger", "Humana Business", "Todavía no lo sé"];

function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="biz-lead-form" id="hablemos-de-tu-plan">
      {submitted ? (
        <div className="biz-lead-success" role="status">
          <Check size={18} />
          <span>¡Gracias! Formulario demostrativo: no se envió ningún dato real. En la versión oficial, un asesor de Humana te contactará.</span>
        </div>
      ) : (
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
          <label>Nombre y apellido<input type="text" name="name" required /></label>
          <label>Teléfono<input type="tel" name="phone" required /></label>
          <label>Correo electrónico<input type="email" name="email" required /></label>
          <label>Ciudad<input type="text" name="city" /></label>
          <label>Plan de interés
            <select name="planInterest" defaultValue="">
              <option value="" disabled>Selecciona una opción</option>
              {planInterestOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
          <button type="submit" className="primary-button">Solicitar llamada</button>
        </form>
      )}
      <p className="biz-lead-disclaimer">Formulario demostrativo del prototipo. No envía información a ningún sistema.</p>
    </div>
  );
}

export default function CotizadorClient() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [finished, setFinished] = useState(false);
  const branch = answers.profile === "empresa" ? businessQuestions : answers.profile === "extra" ? protectQuestions : answers.profile === "dental" ? dentalQuestions : personalQuestions;
  const questions = answers.profile === "dental" ? [audienceQuestion, ...branch] : [audienceQuestion, ...branch, dentalAddOnQuestion];
  const question = questions[step];
  const selected = answers[question?.key];
  const choose = (value: string) => setAnswers((current) => question.key === "profile" ? { profile: value } : { ...current, [question.key]: value });
  const next = () => step < questions.length - 1 ? setStep(step + 1) : setFinished(true);
  const reset = () => { setAnswers({}); setStep(0); setFinished(false); };

  let resultKey: keyof typeof resultMap = "ph30";
  if (answers.profile === "empresa") resultKey = "business";
  else if (answers.profile === "extra") resultKey = "proteger";
  else if (answers.profile === "dental") resultKey = "prosonrisas";
  else if (answers.age === "senior") resultKey = "advisor";
  else if (answers.priority === "tecnologia") resultKey = "mh80";
  else if (answers.priority === "respaldo" || answers.coverage === "maximo") resultKey = "mh150";
  else if (answers.profile === "familia" || answers.priority === "familia" || answers.use === "familia") resultKey = "mh50";
  else if (answers.age === "joven" && (answers.priority === "economia" || answers.coverage === "esencial")) resultKey = "ph15";
  const result = resultMap[resultKey];
  const ResultIcon = result.icon;
  const resultHref = resultKey === "advisor" ? "/planes-medicos#asesor" : `/planes-medicos?segment=${result.segment}&plan=${resultKey}`;

  return <SiteShell title="Recomendador de plan">
    <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Inicio</Link><span>»</span><span>Cotizador</span>
    </nav>

    <div className="biz-page" data-accent="blue">
      {/* Hero ------------------------------------------------------- */}
      <section className="biz-hero" id="cotizador-inicio">
        <div className="biz-hero-copy">
          <span className="biz-eyebrow">TU COBERTURA IDEAL</span>
          <h1>Cotizador</h1>
          <p className="biz-hero-body">Preguntas simples. Una recomendación clara.</p>
        </div>
      </section>
    </div>

    <div className="cotizador-quiz-row">
      <figure className="cotizador-quiz-media" aria-hidden="true">
        <Image src="/images/cotizador/cotizador-quiz-familia.webp" alt="Familia revisando su cobertura médica en una tablet" fill sizes="(max-width: 980px) 100vw, 360px" unoptimized />
      </figure>
      {/* Recomendador: NO TOCAR — aprobado tal cual está. --------------- */}
      <section className="wizard-wrap">
      {!finished && question ? <div key="plan-questions" className="wizard-card">
        <div className="wizard-top"><button onClick={() => step > 0 && setStep(step - 1)} disabled={step === 0}><ArrowLeft size={18} /> Volver</button><span>Paso {step + 1} de {questions.length}</span></div>
        <Progress value={((step + 1) / questions.length) * 100} className="wizard-progress" />
        <div className="wizard-question"><span className="kicker">Una pregunta a la vez</span><h2>{question.title}</h2><p>{question.help}</p></div>
        <RadioGroup value={selected} onValueChange={choose} className="choice-grid" aria-label={question.title}>
          {question.options.map(([value, label]) => <label className={selected === value ? "choice-card selected" : "choice-card"} key={value}><RadioGroupItem value={value} id={`${question.key}-${value}`} /><span>{label}</span>{selected === value && <Check size={19} />}</label>)}
        </RadioGroup>
        <button className="primary-button wizard-next" disabled={!selected} onClick={next}>{step === questions.length - 1 ? "Ver mi recomendación" : "Continuar"}<ArrowRight size={18} /></button>
      </div> : <div key="plan-result" className="result-card recommendation-result">
        <div className="result-icon"><ResultIcon size={34} /></div><span className="kicker">Tu recomendación</span><h2>{result.name}</h2><p>{result.reason}</p>
        <div className="result-points">{result.points.map(point => <span key={point}><Check /> {point}</span>)}</div>
        {answers.dentalAddOn === "yes" && resultKey !== "prosonrisas" && <div className="dental-addon-result"><span><SmilePlus /></span><div><small>Complemento recomendado</small><h3>Agrega ProSonrisas</h3><p>Protección dental con alternativas de 36 o 50 procedimientos desde $6,63 por persona.</p></div><Link href="/planes-medicos/?segment=dental&plan=prosonrisas">Ver plan dental <ArrowRight /></Link></div>}
        {resultKey === "advisor" && <div className="result-warning"><Sparkles size={19} /><p>La documentación no confirma por sí sola la edad máxima de ingreso. Un asesor debe revisar tu caso antes de recomendar un producto.</p></div>}
        <div className="result-actions"><Link className="primary-button" href={resultHref}>{resultKey === "advisor" ? "Hablar con un asesor" : "Ver este plan"}<ArrowRight size={18} /></Link><button className="secondary-button" onClick={reset}><RotateCcw size={18} /> Empezar de nuevo</button></div>
      </div>}
      <aside className="wizard-aside"><h3>Así encontramos tu opción</h3><ol><li><span>1</span><div><strong>Tu realidad</strong><p>A quién deseas proteger.</p></div></li><li><span>2</span><div><strong>Tus prioridades</strong><p>Qué atención valoras más.</p></div></li><li><span>3</span><div><strong>Tu sonrisa</strong><p>Si también quieres protección dental.</p></div></li><li><span>4</span><div><strong>Tu resultado</strong><p>Una recomendación clara para explorar.</p></div></li></ol></aside>
      </section>
    </div>

    <div className="biz-page" data-accent="blue">
      {/* Planes oficiales ------------------------------------------- */}
      <section className="biz-section is-light">
        <div className="biz-container">
          <div className="biz-section-head">
            <span className="biz-eyebrow">O ELIGE DIRECTAMENTE TU PLAN</span>
            <h2>Elige el plan que se ajusta a ti</h2>
          </div>
          <div className="plan-hub-grid plan-hub-grid-personas" style={{ marginTop: 40 }}>
            {[
              { name: "Individual y Familiar", copy: "Cobertura para ti y toda tu familia con la red médica más amplia del Ecuador. Cobertura desde $15.000 hasta $150.000. Para todas las edades.", image: "/images/planes/mh150/mh150-hospitalizacion.jpg", imageAlt: "Persona protegida por un plan médico Humana", cat: null },
              { name: "Plan Prosonrisas", copy: "Plan dental para ti y tu familia. Desde $6,63 al mes por persona. Para todas las edades.", image: "/images/planes/prosonrisas/prosonrisas-equipo.jpg", imageAlt: "Equipo de especialistas odontológicos de la red Prosonrisas", cat: "dental" },
              { name: "Plan Jóvenes", copy: "De 18 a 35 años. Cobertura accesible diseñada para la independencia desde $58,27 al mes. Cobertura de $15.000.", image: "/images/cotizador/plan-jovenes.webp", imageAlt: "Joven caminando por la ciudad revisando su celular", cat: "empaquetado" },
              { name: "Humana Kids", copy: "La versión especializada de nuestro plan familiar para menores de edad desde $79,54 al mes. Incluye control de niño sano y vacunas. De 0 a 17 años.", image: "/images/cotizador/humana-kids.webp", imageAlt: "Pediatra atendiendo a un niño acompañado de su madre", cat: null },
              { name: "Plan Proteger", copy: "Plan de gastos médicos mayores para enfermedades o accidentes graves, desde $25,82 al mes. Se activa una vez superado el deducible. Hasta $500.000 de cobertura por incapacidad.", image: "/images/planes/mh80/mh80-photo-cirugia-robotica.jpg", imageAlt: "Cirugía robótica de alta precisión", cat: "proteger" },
            ].map((plan) => (
              <article className="plan-hub-card" key={plan.name}>
                <div className="plan-hub-card-media"><Image src={plan.image} alt={plan.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></div>
                <div className="plan-hub-card-copy">
                  <h4>{plan.name}</h4>
                  <p>{plan.copy}</p>
                  <div className="plan-hub-card-actions">
                    {plan.cat && <a className="primary-button small" href={`https://online.humana.med.ec/app/precotizacion/data-contratante?cat=${plan.cat}`} target="_blank" rel="noreferrer">Cotizar online</a>}
                    <a className="secondary-button small" href="#hablemos-de-tu-plan"><PhoneCall size={14} /> Solicitar llamada</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* La Red Humana que nos ayuda a cuidarte ------------------------ */}
      <section className="biz-section is-dark">
        <div className="biz-container">
          <div className="biz-section-head">
            <span className="biz-eyebrow">RESPALDO NACIONAL</span>
            <h2>La Red Humana que nos ayuda a cuidarte</h2>
          </div>
          <div className="biz-provider-grid">
            {networkProviders.map((name) => <span className="biz-provider-chip" key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      {/* Protege tu salud en 4 pasos ------------------------------------ */}
      <section className="biz-section is-light">
        <div className="biz-container">
          <div className="biz-section-head">
            <h2>Protege tu salud en 4 pasos</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginTop: 36, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>
            {["Cotiza", "Selecciona plan", "Registra tus datos", "Pago seguro"].map((label, i) => (
              <div key={label} className="plan-hub-card" style={{ padding: 24, textAlign: "center" }}>
                <strong style={{ fontSize: 28, color: "#0b80bd" }}>{i + 1}</strong>
                <p style={{ margin: "10px 0 0" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¡Hablemos de tu plan! ------------------------------------------- */}
      <section className="biz-section is-dark">
        <div className="biz-container">
          <div className="biz-section-head">
            <span className="biz-eyebrow">TE LLAMAMOS NOSOTROS</span>
            <h2>¡Hablemos de tu plan!</h2>
            <p>Déjanos tus datos y un asesor de Humana te contacta.</p>
          </div>
          <div className="cotizador-lead-row">
            <figure className="cotizador-lead-media" aria-hidden="true">
              <Image src="/images/cotizador/cotizador-asesora.webp" alt="Asesora de Humana atendiendo una llamada en el centro de contacto" fill sizes="(max-width: 860px) 100vw, 420px" unoptimized />
            </figure>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes -------------------------------------------- */}
      <section className="biz-section is-light">
        <div className="biz-container">
          <div className="biz-section-head">
            <h2>Dudas sobre su plan</h2>
          </div>
          <div className="biz-faq">
            <details>
              <summary><span>¿Qué debe saber antes de comprar en nuestra web?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p>Su compra es 100% segura bajo normas de comercio electrónico y firma electrónica.</p>
                <p>Una vez realizada la compra, recibe a su correo electrónico el respaldo de su pago, contrato aceptado y detalles de su registro.</p>
                <p>La compra pasará a un proceso de revisión de nuestro equipo de servicio al cliente que puede tomar de 24 a 48 horas, si no hay novedades se integrará nuestro sistema. En caso de requerir información adicional, un asesor de servicio al cliente se pondría en contacto con usted.</p>
              </div>
            </details>
            <details>
              <summary><span>¿Si ha padecido de enfermedades crónicas o recurrentes es necesario informarlas?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p>Claro que sí, registrar sus enfermedades preexistentes (cirugías, hospitalizaciones, enfermedades crónicas o recurrentes) le garantiza acceder a la cobertura en los plazos y montos establecidos según el plan adquirido.</p>
              </div>
            </details>
            <details>
              <summary><span>¿En qué hospitales o prestadores médicos puede recibir atención?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p>Existen dos tipos de red según el plan elegido:</p>
                <p><strong>Plan Individual, Familiar e infantil</strong> (aplica para Plan Individual y Familiar y Humana Kids)</p>
                <p><strong>Red Practihumana:</strong> Red de hospitales, médicos, centros médicos específicos donde puedes recibir atención de forma directa pagando el porcentaje de cobertura establecida por su plan. Si aplica cobertura vía reembolso se cubrirá acorde a los valores normales y acostumbrados para tu plan.</p>
                <p><strong>Red Metrohumana:</strong> Es la más amplia y completa, ya que aplica toda la red de hospitales, médicos, centros médicos que forman parte de nuestro convenio. Recibirás atención de forma directa pagando el porcentaje de cobertura establecida por tu plan. Si aplicas cobertura vía reembolso se cubrirá acorde a los valores normales y acostumbrados para tu plan.</p>
                <p><a href="https://red.humana.med.ec/RedHumana" target="_blank" rel="noreferrer">Conozca la red</a></p>
                <p><strong>Cobertura contra el Cáncer y Gastos mayores</strong> (aplica para Plan Proteger)</p>
                <p><strong>Red Metrohumana:</strong> Es la más amplia, ya que aplica toda la red de hospitales, médicos, centros médicos que forman parte de nuestro convenio. Recibirá atención de forma directa pagando el porcentaje de cobertura establecida por su plan una vez superado el deducible. Si aplica cobertura vía reembolso se cubrirá acorde a los valores normales y acostumbrados para su plan.</p>
                <p><strong>Cobertura dental</strong> (aplica para Plan Prosonrisas)</p>
                <p><strong>Red dental:</strong> Accede a una red exclusiva de centros odontológicos en convenio, donde paga solo el % que le corresponde, sin reembolso o aplicación de deducibles.</p>
              </div>
            </details>
            <details>
              <summary><span>¿Desde cuándo puede usar su plan?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p><strong>Plan Individual, Infantil y Gastos mayores</strong> (Plan Individual y Familiar, Humana Kids y Plan Proteger):</p>
                <ul>
                  <li>Emergencia médica vital: 24 horas</li>
                  <li>Ambulatoria: luego de 30 días</li>
                  <li>Hospitalaria: luego de 90 días</li>
                  <li>Maternidad (inicio): planificar luego de 60 días</li>
                  <li>Cobertura de enfermedades preexistentes (montos referenciales): desde el mes 7 al 12 hasta $540 · desde el mes 13 al 24 hasta $1.350 · desde el mes 25 hasta 20 salarios básicos unificados</li>
                  <li>Discapacidades: hasta 20 salarios básicos unificados · declaradas luego de 90 días</li>
                </ul>
                <p><strong>Cobertura dental</strong> (Plan Prosonrisas): prestaciones básicas 24 horas, procedimientos específicos luego de 60 días, preexistencias (montos referenciales) igual a los tramos del plan individual.</p>
                <p>Visite nuestra <a href="https://servicio.humana.med.ec/" target="_blank" rel="noreferrer">central de ayuda</a> para recibir asesoría personalizada.</p>
              </div>
            </details>
          </div>

          <div className="biz-section-head" style={{ marginTop: 56 }}>
            <h2>Dudas sobre su pago</h2>
          </div>
          <div className="biz-faq">
            <details>
              <summary><span>¿Cuáles son las formas de pago disponibles?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p>✔ Pago inicial: todas las tarjetas de crédito (Diners, Visa, Mastercard, Discover, American Express) nacionales e internacionales y tarjetas de débito (Visa o Mastercard) nacionales.</p>
                <p>✔ Siguientes cuotas: tarjetas de crédito nacionales e internacionales aprobadas en nuestro comercio, o cuentas bancarias de ahorros o corrientes de bancos y cooperativas del país.</p>
              </div>
            </details>
            <details>
              <summary><span>¿En qué fechas se realizan los cobros mensuales?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <ul>
                  <li>Vigencia del 1 al 15 del mes: primer día hábil de cada mes.</li>
                  <li>Del 16 al 21 del mes: los 15 de cada mes (día hábil).</li>
                  <li>Del 22 al fin de mes: los 22 de cada mes (día hábil).</li>
                </ul>
              </div>
            </details>
            <details>
              <summary><span>¿Qué es la firma electrónica?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <ul>
                  <li>La firma electrónica de documentos digitales, es un certificado legal, que se produce de manera ágil, ecológica y siempre bajo la más estricta seguridad.</li>
                  <li>Es la equivalencia de la firma manuscrita ya que tiene la misma validez legal y está amparada en la Ley de Comercio Electrónico.</li>
                  <li>Se envía un pin al e-mail mediante el cual se facilita dicha firma electrónica, sin necesidad de los complicados trámites tradicionales.</li>
                </ul>
              </div>
            </details>
            <details>
              <summary><span>¿Cómo solicitar reversos o anulaciones de compras?</span><span className="biz-faq-plus" aria-hidden="true">+</span></summary>
              <div className="biz-faq-content">
                <p><strong>Reversos automáticos compra:</strong> Las compras realizadas el mismo día y que no hayan sido integradas a nuestro sistema, podrán ser reversadas de manera automática de la siguiente manera:</p>
                <p><strong>Botón de pago Paymentez:</strong> Compras realizadas antes de 17h39 se las podrá reversar hasta las 17h40 del mismo día, compras desde las 17h41 se las puede reversar hasta las 17h39 del día siguiente. Compras que no se hayan podido reversar en ese lapso, ingresarán a devolución manual de 5 días hábiles.</p>
                <p><strong>Botón de pago Place to Pay:</strong> Compras realizadas el mismo día se podrán reversar hasta las 23h59 del mismo día. Compras que no se hayan podido reversar en ese lapso, ingresarán a devolución manual de 5 días hábiles.</p>
                <p>Si necesita un reverso automático puede escribirnos a: <a href="mailto:servicioalcliente@humana.med.ec">servicioalcliente@humana.med.ec</a></p>
                <p><strong>Anulación contrato:</strong> Si desea solicitar la anulación de una compra ya suscrita en nuestro sistema, le recomendamos solicitarla por medio de nuestra <a href="https://servicio.humana.med.ec/" target="_blank" rel="noreferrer">central de ayuda</a>.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Beneficios incluidos en tu plan ---------------------------------- */}
      <section className="biz-section is-dark">
        <div className="biz-container">
          <div className="biz-section-head">
            <h2>Beneficios incluidos en tu plan</h2>
            <p>Ten el control siempre, nuestros servicios te acompañan para que te sientas tranquilo y protegido.</p>
          </div>
          <div className="plan-detail-table-wrap" style={{ background: "#fff", borderRadius: 20, padding: 24, marginTop: 32, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
            <table className="plan-detail-table">
              <tbody>
                <tr><th scope="row">Médico a domicilio</th><td>Solicita un médico para que acuda en el lugar donde lo necesites.</td></tr>
                <tr><th scope="row">Asistencia en viajes</th><td>Viaja seguro con cobertura por un monto máximo de $100.000.</td></tr>
                <tr><th scope="row">Teleconsulta médica</th><td>Ilimitadas y sin costo, agendando tu cita en el 1800 48 62 62 o mediante APP.</td></tr>
                <tr><th scope="row">Farmacia a domicilio</th><td>Solicita tus medicinas y aplica tu cobertura con Medicity, Pharmacys y Fybeca.</td></tr>
                <tr><th scope="row">Ambulancia terrestre</th><td>Recibe asistencia médica oportuna en caso de emergencia.</td></tr>
                <tr><th scope="row">Seguro de vida</th><td>Si en algún momento llegas a faltar, ofrecemos a tus familiares un importante apoyo.</td></tr>
                <tr><th scope="row">Asistencia Exequial</th><td>Cobertura de sepelio con Jardines del Valle para titulares y dependientes.</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <a className="biz-btn-primary" href="https://servicio.humana.med.ec/hc/es/articles/4402807362573-Beneficios-Incluidos" target="_blank" rel="noreferrer">
              Conoce todos los beneficios
            </a>
          </div>
        </div>
      </section>

      {/* Tarifa cero -------------------------------------------------------- */}
      <section className="biz-section is-light">
        <div className="biz-container">
          <div className="biz-section-head">
            <h2>Tarifa cero</h2>
          </div>
          <div style={{ maxWidth: 680, margin: "32px auto 0" }}>
            <ul className="plan-faq-checklist">
              <li>Prestaciones de prevención primaria (aplica para los planes con Cobertura Integral de Medicina Prepagada).</li>
              <li>El afiliado, para acceder a las prestaciones de tarifa 0, deberá pedir una preautorización en cualquier oficina de Humana.</li>
              <li>Estas atenciones se darán únicamente en prestadores autorizados por Humana.</li>
            </ul>
            <a className="secondary-button small" style={{ marginTop: 16 }} href="https://planes.humana.med.ec/hubfs/Ver%20m%C3%A1s%20Planes%20suscriptor/Tarifa%20Cero/TARIFA-CERO.pdf" target="_blank" rel="noreferrer">Ver más</a>
          </div>
        </div>
      </section>

      {/* Testimonios -------------------------------------------------------- */}
      <section className="biz-section is-dark is-close">
        <div className="biz-container">
          <div className="biz-section-head">
            <h2>Nuestros clientes nos recomiendan</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginTop: 36 }}>
            {[
              ["El Sr que me atendió fue atento y eficiente. Tenía conocimiento del trámite y no se demoró. Gracias", "María Teresa S. P."],
              ["Me indicó claramente el procedimiento a realizar, y me envió el correo al cual debía enviar la información. Excelente Servicio", "Xavier Antonio M. L."],
              ["Fui atendida con amabilidad y respondió todas mis inquietudes facilitando mi proceso médico.", "Myriam Magdalena R. B."],
              ["Excelente atención en un ambiente protegido con todas las medidas de bio seguridad.", "Marilú R. V."],
              ["Excelente atención, hoy hice uso de teleconsulta y me atendieron muy bien tanto por el chat, la llamada del médico, el envío por wp de la receta y sus indicaciones.", "Jhoset P. L."],
              ["Excelente atención de primera muy humanos.", "José David I. D."],
            ].map(([quote, author]) => (
              <div key={author} className="cotizador-testimonial-card">
                <p>&ldquo;{quote}&rdquo;</p>
                <strong>{author}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </SiteShell>;
}
