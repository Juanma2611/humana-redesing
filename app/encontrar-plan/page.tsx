"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Check, HeartPulse, Layers3, RotateCcw, ScanHeart, ShieldCheck, SmilePlus, Sparkles, UsersRound, WalletCards } from "lucide-react";
import { useState } from "react";
import { SiteShell, PageHero } from "@/components/site-shell";
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
  mh80: { name: "MH80 Control", segment: "familiar", icon: ScanHeart, reason: "Pensado para quienes valoran atención especializada y tecnología médica.", points: ["$80.000 por incapacidad", "Cirugía robótica", "Bienestar integral"] },
  mh150: { name: "MH150", segment: "familiar", icon: ShieldCheck, reason: "Mayor alcance para quienes buscan el máximo nivel de respaldo familiar.", points: ["$150.000 por incapacidad", "Maternidad ampliada", "Viajes 30 días/año"] },
  business: { name: "Humana Business", segment: "empresa", icon: Building2, reason: "Una solución configurable para proteger a tus colaboradores y fortalecer su bienestar.", points: ["Coberturas configurables", "Familiares opcionales", "Teleconsulta"] },
  proteger: { name: "Proteger", segment: "proteger", icon: Layers3, reason: "Un complemento para gastos médicos de gran alcance después del deducible.", points: ["Hasta $500.000", "Trasplantes hasta $250.000", "Chequeo anual"] },
  prosonrisas: { name: "ProSonrisas", segment: "dental", icon: SmilePlus, reason: "Protección dental para prevenir, diagnosticar y tratar tu sonrisa con una red nacional.", points: ["Desde $6,63 por persona", "Alternativas de 36 o 50 procedimientos", "Sin preexistencias ni topes de consulta"] },
  advisor: { name: "Asesoría personalizada", segment: "individual", icon: WalletCards, reason: "Por la etapa de vida indicada, necesitamos revisar continuidad, admisión y condiciones contigo.", points: ["Revisión de opciones", "Condiciones claras", "Acompañamiento humano"] },
};

export default function PlanFinder() {
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
  const resultHref = resultKey === "advisor" ? "/planes#asesor" : `/planes?segment=${result.segment}&plan=${resultKey}`;

  return <SiteShell title="Recomendador de plan">
    <PageHero eyebrow="Tu cobertura ideal" title="Te ayudamos a elegir" description="Preguntas simples. Una recomendación clara." />
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
        {answers.dentalAddOn === "yes" && resultKey !== "prosonrisas" && <div className="dental-addon-result"><span><SmilePlus /></span><div><small>Complemento recomendado</small><h3>Agrega ProSonrisas</h3><p>Protección dental con alternativas de 36 o 50 procedimientos desde $6,63 por persona.</p></div><Link href="/planes?segment=dental&plan=prosonrisas">Ver plan dental <ArrowRight /></Link></div>}
        {resultKey === "advisor" && <div className="result-warning"><Sparkles size={19} /><p>La documentación no confirma por sí sola la edad máxima de ingreso. Un asesor debe revisar tu caso antes de recomendar un producto.</p></div>}
        <div className="result-actions"><Link className="primary-button" href={resultHref}>{resultKey === "advisor" ? "Hablar con un asesor" : "Ver este plan"}<ArrowRight size={18} /></Link><button className="secondary-button" onClick={reset}><RotateCcw size={18} /> Empezar de nuevo</button></div>
      </div>}
      <aside className="wizard-aside"><h3>Así encontramos tu opción</h3><ol><li><span>1</span><div><strong>Tu realidad</strong><p>A quién deseas proteger.</p></div></li><li><span>2</span><div><strong>Tus prioridades</strong><p>Qué atención valoras más.</p></div></li><li><span>3</span><div><strong>Tu sonrisa</strong><p>Si también quieres protección dental.</p></div></li><li><span>4</span><div><strong>Tu resultado</strong><p>Una recomendación clara para explorar.</p></div></li></ol></aside>
    </section>
  </SiteShell>;
}
