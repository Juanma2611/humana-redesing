/* ------------------------------------------------------------------------ */
/* Datos del plan MH150 · Plan Premium - MetroHumana 150.000                 */
/* ------------------------------------------------------------------------ */
/* FUENTE PRIORITARIA (manda ante cualquier conflicto):                     */
/*   [C] "MH150_anexo_.pdf" — Contrato Individual de Prestación de Servicios */
/*       de Atención Integral de Salud Prepagada, Plan Premium -            */
/*       MetroHumana 150.000. "Tabla de Beneficios" (pág. 1-6) + "Anexo de  */
/*       Coberturas Adicionales Sin Costo" (pág. 9-10), mismo PDF.           */
/* FUENTE COMERCIAL (solo para tono/lenguaje, nunca para cifras en conflicto)*/
/*   [A] "TABLA-MH150-2025-07-05-25.pdf" — tabla/infografía comercial MH150. */
/*                                                                            */
/* CONTRADICCIONES DETECTADAS ENTRE [A] Y [C]:                               */
/*  Ninguna contradicción material fue detectada entre el contrato/anexo y  */
/*  la tabla comercial para las cifras usadas en esta página. La ambulancia */
/*  aérea/fluvial ($1.500 por reembolso al 80%, 24h de carencia) sí consta  */
/*  en ambas fuentes de forma consistente (a diferencia de PH30, donde esa  */
/*  cobertura no aplicaba). Se usa [C] como referencia numérica siempre que */
/*  hay ambigüedad de redacción entre ambas.                                */
/* ------------------------------------------------------------------------ */

export const planIdentity = {
  code: "MH150",
  fullName: "Plan Premium · MetroHumana 150.000", // [C] pág. 1
  type: "Individual / Familiar",
  modality: "Mixta",
  network: "Metrohumana",
  tariff: "Hospital Metropolitano",
  maxCoverage: "$150.000",
  deductible: "$150",
};

/* Cifras esenciales, siempre visibles sin depender de animación. */
export const essenceStats = [
  { value: "$150.000", label: "de cobertura máxima\npor beneficiario" }, // [C] pág. 1
  { value: "90%", label: "de cobertura hospitalaria\nen Red Humana" }, // [C] pág. 2
  { value: "$150", label: "de deducible\nanual" }, // [C] pág. 1
];

export type ChapterDetailItem = { label: string; value: string };

export type Chapter = {
  id: string;
  number: string;
  navLabel: string;
  theme: "deep" | "light" | "teal" | "warm";
  image: string;
  imageAlt: string;
  imageIsTemporaryFrom?: string;
  imagePosition?: string;
  imagePositionMobile?: string;
  eyebrow: string;
  title: string;
  lead: string;
  essentials: string[];
  dialogTitle: string;
  dialogLead: string;
  detailItems: ChapterDetailItem[];
  conditions: ChapterDetailItem[];
};

/* IMÁGENES TEMPORALES: MH150 todavía no cuenta con set fotográfico propio.
   Mientras se reciben las fotos definitivas de familias/hospitales premium,
   se reutilizan escenas ya existentes en el repo (PH30/PH15/MH50),
   documentadas explícitamente con `imageIsTemporaryFrom`. Cuando el cliente
   entregue las fotos definitivas, deben guardarse en
   `public/images/planes/mh150/` y solo hace falta actualizar el campo
   `image` de cada capítulo (y quitar `imageIsTemporaryFrom`). */
export const chapters: Chapter[] = [
  {
    id: "hospitalizacion",
    number: "01",
    navLabel: "Hospitalización",
    theme: "deep",
    image: "/images/planes/ph30/ph30-hospitalizacion.jpg",
    imageIsTemporaryFrom: "PH30 (public/images/planes/ph30/ph30-hospitalizacion.jpg)",
    imagePosition: "68% 38%",
    imageAlt: "Persona siendo atendida en un ambiente hospitalario cálido y seguro",
    eyebrow: "HOSPITALIZACIÓN",
    title: "El respaldo más completo.",
    lead: "Habitación, cirugía, medicamentos, cuidados intensivos y rehabilitación, sin límite de días de hospitalización, con la mayor cobertura de la familia MH.",
    essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días"],
    dialogTitle: "Hospitalización",
    dialogLead: "Cobertura hospitalaria completa: habitación, visita médica, cirugía, terapia intensiva, medicamentos, insumos, apoyo psicológico, rehabilitación y cuidados paliativos, sin límite de días internado.",
    detailItems: [
      { label: "Copago Red Humana (cerrada)", value: "10% · cobertura 90%" }, // [C]/[A] pág. 2
      { label: "Copago libre elección (abierta)", value: "20% · cobertura 80%" }, // [C]/[A] pág. 2
      { label: "Cuarto y alimentación diaria", value: "Hasta $200 por día" }, // [C]/[A] pág. 2/3
      { label: "Acompañante (cama y alimentación)", value: "Hasta $50 por día" }, // [C]/[A] pág. 2/3
      { label: "Carencia", value: "90 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Trasplantes: pretrasplante, trasplante y postrasplante de órganos (donante vivo y cadavérico)", value: "Hasta $75.000 · 90% Red Humana / 80% libre elección · 30 días ambulatorio / 90 días hospitalario" }, // [C] pág. 2 / [A]
      { label: "Diálisis y hemodiálisis (domiciliaria y no domiciliaria, ambulatoria y hospitalaria)", value: "Hasta $75.000 · 30 días ambulatorio / 90 días hospitalario" }, // [C] pág. 2 / [A]
      { label: "Prótesis quirúrgicamente necesaria por incapacidad", value: "Hasta $10.000 · 90 días de carencia" }, // [C] pág. 6
    ],
  },
  {
    id: "ambulatoria",
    number: "02",
    navLabel: "Atención médica",
    theme: "light",
    image: "/images/planes/ph30/ph30-ambulatoria.jpg",
    imageIsTemporaryFrom: "PH30 (public/images/planes/ph30/ph30-ambulatoria.jpg)",
    imagePositionMobile: "center 20%",
    imageAlt: "Consulta médica cercana entre paciente y doctora especialista",
    eyebrow: "ATENCIÓN AMBULATORIA",
    title: "Acceso directo al especialista.",
    lead: "Consultas, exámenes y médico a domicilio dentro de la amplia Red Metrohumana, con copagos claros y cobertura de hasta el 90% en exámenes de diagnóstico.",
    essentials: ["Consultas básicas desde $4", "Médico a domicilio $10", "Exámenes al 90% en Red CAM"],
    dialogTitle: "Atención ambulatoria",
    dialogLead: "Consultas médicas y con especialistas, exámenes de diagnóstico y médico a domicilio, con copagos definidos desde el primer día de cobertura dentro de la Red Metrohumana.",
    detailItems: [
      { label: "Especialidades básicas en Red CAM (Metrored / Otros)", value: "Copago $4 / $8" }, // [A] pág. 2 — coincide con [C] pág. 1
      { label: "Otras subespecialidades en Red CAM (Metrored / Otros)", value: "Copago $8 / $12" }, // [A] pág. 2 — coincide con [C] pág. 1
      { label: "Red Preferida (Practihumana y Metrohumana / solo Metrohumana)", value: "Copago $15 / $25" }, // [A] pág. 2
      { label: "Médico a domicilio (medicina general)", value: "Copago $10" }, // [C]/[A] pág. 1
      { label: "Carencia", value: "30 días" }, // [C] pág. 1
    ],
    conditions: [
      { label: "Exámenes de diagnóstico en Red CAM", value: "90% de cobertura (copago 10%)" }, // [C] pág. 2
      { label: "Otros exámenes/procedimientos en Red CAM", value: "80% de cobertura (copago 20%)" }, // [C] pág. 2
      { label: "Consultas médicas por reembolso", value: "10% de copago, hasta $80 por consulta" }, // [C] pág. 1 / [A]
      { label: "Exámenes de diagnóstico por reembolso", value: "10% de copago (aplica deducible)" }, // [C] pág. 2
      { label: "Medicina alternativa (homeopatía, acupuntura, moxibustión, medicina ancestral)", value: "15 sesiones al año por reembolso, hasta $20 por sesión" }, // [C]/[A] pág. 2
    ],
  },
  {
    id: "medicinas",
    number: "03",
    navLabel: "Medicinas",
    theme: "teal",
    image: "/images/planes/ph30/ph30-medicinas.jpg",
    imageIsTemporaryFrom: "PH30 (public/images/planes/ph30/ph30-medicinas.jpg)",
    imageAlt: "Entrega de medicamentos en una farmacia de la red Humana",
    eyebrow: "MEDICINAS",
    title: "Tu tratamiento, cubierto al máximo.",
    lead: "Acceso a la amplia red de farmacias asociadas a Humana, con cobertura de tus medicinas entre el 70% y el 90%, y el tope anual más alto de la familia MH.",
    essentials: ["Medicinas entre 70% y 90%", "Tope anual $2.000"],
    dialogTitle: "Medicinas",
    dialogLead: "Cobertura farmacéutica anual con un tope de $2.000, según el vademécum del medicamento y la red utilizada.",
    detailItems: [
      { label: "Vademécum A (genéricos y de marca)", value: "90% de cobertura (copago 10%)" }, // [C]/[A] pág. 2
      { label: "Vademécum B (genéricos y de marca)", value: "70% de cobertura (copago 30%)" }, // [C]/[A] pág. 2
      { label: "Medicinas en otros prestadores de Red Humana", value: "70% de cobertura (copago 30%)" }, // [C]/[A] pág. 2
      { label: "Tope anual del beneficio farmacéutico", value: "$2.000" }, // [C]/[A] pág. 2
      { label: "Carencia", value: "30 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Medicinas por reembolso (libre elección)", value: "70% de cobertura, hasta el tope de cobertura, 30 días de carencia" }, // [C]/[A] pág. 2
    ],
  },
  {
    id: "maternidad",
    number: "04",
    navLabel: "Maternidad",
    theme: "warm",
    image: "/images/planes/ph30/ph30-maternidad.jpg",
    imageIsTemporaryFrom: "PH30 (public/images/planes/ph30/ph30-maternidad.jpg)",
    imageAlt: "Madre gestante en un control prenatal acompañada de su médico",
    eyebrow: "MATERNIDAD",
    title: "Una nueva etapa también merece protección.",
    lead: "Atención prenatal, parto y protección ante complicaciones, con el mayor respaldo económico de la familia MH para el inicio de tu familia.",
    essentials: ["$700 atención prenatal", "$7.500 parto o cesárea", "$11.250 complicaciones del parto"],
    dialogTitle: "Maternidad",
    dialogLead: "Atención prenatal, parto o cesárea, y complicaciones del parto y del recién nacido, conforme a las condiciones del plan.",
    detailItems: [
      { label: "Atención prenatal (consultas y exámenes)", value: "Hasta $700" }, // [C]/[A] pág. 3/2
      { label: "Parto normal, cesárea o aborto no provocado", value: "Hasta $7.500 (copago 10% Red Humana / 20% libre elección)" }, // [C]/[A] pág. 3/2
      { label: "Complicaciones del parto y del recién nacido", value: "Hasta $11.250" }, // [C]/[A] pág. 3/2
      { label: "Carencia de maternidad", value: "60 días" }, // [C] pág. 3
    ],
    conditions: [
      { label: "Inclusión intrauterina (semana 20-32), maternidad cubierta", value: "Hasta el tope de cobertura del plan ($150.000), según condiciones contractuales" }, // [C]/[A] pág. 3/2
      { label: "Inclusión intrauterina en período de carencia", value: "Hasta $700" }, // [C]/[A] pág. 3/2
      { label: "Enfermedades congénitas del recién nacido (maternidad no cubierta)", value: "Hasta $2.500" }, // [C]/[A] pág. 3/2
      { label: "Control de niño sano (hasta los 5 años)", value: "Hasta $65 por consulta, adicional a tarifa 0" }, // [C]/[A] pág. 6/3
      { label: "Vacunas de control de niño sano (hasta los 2 años)", value: "Hasta $50 por dosis, esquema MSP" }, // [C]/[A] pág. 6/3
      { label: "Leche medicada", value: "Hasta $250 al año" }, // [C]/[A] pág. 4/3
    ],
  },
  {
    id: "emergencias",
    number: "05",
    navLabel: "Emergencias",
    theme: "deep",
    image: "/images/planes/ph30/ph30-emergencias.jpg",
    imageIsTemporaryFrom: "PH30 (public/images/planes/ph30/ph30-emergencias.jpg)",
    imagePositionMobile: "center 15%",
    imageAlt: "Atención de emergencia médica a un paciente",
    eyebrow: "EMERGENCIAS",
    title: "Cuando más importa, Humana está contigo.",
    lead: "Cobertura de emergencia y urgencia médica por accidente o enfermedad, activa desde las 24 horas de afiliación, hasta el tope máximo de tu plan.",
    essentials: ["Cobertura hasta el tope del plan", "Activa a las 24 horas", "Incluye período de carencia y mora"],
    dialogTitle: "Emergencias",
    dialogLead: "Urgencias por accidente o enfermedad, dentro de la Red Humana, hasta el monto máximo contratado.",
    detailItems: [
      { label: "Emergencia y urgencia por accidente o enfermedad", value: "Hasta el monto máximo de cobertura (copago desde 10%)" }, // [C]/[A] pág. 5/3
      { label: "Emergencia con servicio suspendido por mora", value: "Hasta $500" }, // [C]/[A] pág. 5/3
      { label: "Emergencia en período de carencia (incluye preexistencias)", value: "Hasta $500" }, // [C]/[A] pág. 5/3
      { label: "Carencia", value: "24 horas" }, // [C] pág. 5
    ],
    conditions: [
      { label: "Crédito en emergencia ambulatoria por accidente (100%, sin hospitalización, dentro de 48h)", value: "100% de cobertura, hasta $1.000, sin deducible, en Red Dirigida y Red Humana" }, // [C] pág. 9 (Anexo) / [A]
      { label: "Ambulancia terrestre", value: "Hasta 4 eventos al año por núcleo familiar, hasta $100 por evento en Red Humana / $50 por evento libre elección" }, // [C]/[A]
    ],
  },
];

/* Beneficios incluidos SIN costo adicional — los confirmados para MH150 en
   el contrato/anexo y la tabla comercial. A diferencia de PH30, MH150 sí
   incluye ambulancia aérea/fluvial y asistencia en viajes, coherente con su
   posicionamiento de mayor respaldo. */
export const featuredBenefits = [
  { iconKey: "HeartHandshake", title: "Seguro de vida", detail: "$5.000 para integrantes de 18 a 64 años" }, // [C]/[A] pág. 3
  { iconKey: "Ribbon", title: "Asistencia exequial", detail: "Para titular y dependientes" }, // [C]/[A] pág. 3
  { iconKey: "Plane", title: "Asistencia en viajes", detail: "30 días al año por afiliado, para titulares y dependientes" }, // [A] — superior a otros planes MH
  { iconKey: "Ambulance", title: "Ambulancia terrestre", detail: "4 eventos al año, hasta $100 por evento en Red Humana" }, // [C]/[A]
  { iconKey: "Waves", title: "Ambulancia aérea o fluvial", detail: "Vía reembolso al 80%, hasta $1.500 (aplica deducible)" }, // [C]/[A] pág. 2/3
  { iconKey: "HomeIcon", title: "Médico a domicilio", detail: "Consulta de medicina general con copago de $10" }, // [C]/[A]
  { iconKey: "FlaskConical", title: "PAP anual", detail: "Vía reembolso al 100%, cobertura hasta $15" }, // [C]/[A] pág. 9/3
  { iconKey: "HeartPulse", title: "PSA y mamografía", detail: "Desde los 40 años, reembolso al 100%, hasta $20 y $30" }, // [C]/[A] pág. 9-10/3
];

/* Carencias generales del plan */
export const waitingPeriods = [
  { period: "24 h", title: "Emergencias" }, // [C] pág. 5
  { period: "30 días", title: "Atención ambulatoria" }, // [C] pág. 1
  { period: "90 días", title: "Hospitalización" }, // [C] pág. 2
  { period: "60 días", title: "Maternidad" }, // [C] pág. 3
  { period: "24 meses", title: "Preexistencias" }, // [C] pág. 6 — ver detalle progresivo en el acordeón
  { period: "3 meses", title: "Discapacidad" }, // [C] pág. 6
];

/* Coberturas adicionales y condiciones técnicas — solo lo confirmado en el
   contrato MH150. Se muestran en acordeones sobrios (segundo nivel visual). */
export const specialCases = [
  {
    iconKey: "FlaskConical",
    value: "Progresiva",
    label: "Preexistencias declaradas: hasta $540 entre el mes 7 y 12 · hasta $1.350 entre el mes 13 y 24 (beneficio adicional sin costo, según Anexo) · desde el mes 25, hasta 20 salarios básicos unificados según el contrato",
  }, // [C] pág. 6 (tabla general) + pág. 9 (Anexo beneficio adicional meses 7-24) + [A]
  { iconKey: "HandHeart", value: "20 salarios básicos unificados", label: "Discapacidad, incluye preexistencias relacionadas · carencia 3 meses" }, // [C]/[A] pág. 6
  { iconKey: "Users", value: "$75.000 al año", label: "Adulto mayor con continuidad menor a 5 años" }, // [C]/[A] — límite máximo de cobertura anual
];

export const rehabCoverages = [
  { iconKey: "HeartHandshake", value: "$100 por día · hasta 30 días", label: "Cuidados paliativos y de largo plazo, domiciliarios o no domiciliarios" }, // [C]/[A] pág. 4/6/3
  { iconKey: "Activity", value: "30 sesiones · $25 por sesión", label: "Terapias de rehabilitación: lenguaje, cardíaca, física, dolor, ondas de choque y respiratoria" }, // [C]/[A] pág. 6/3
  { iconKey: "Wallet", value: "Hasta $1.500 al año", label: "Ayudas técnicas: compra o alquiler de prótesis, órtesis y equipo médico duradero" }, // [C]/[A] pág. 4/3
  { iconKey: "Wallet", value: "Hasta $400 al año", label: "Ayudas técnicas: recambios de prótesis, órtesis y equipo médico duradero" }, // [C]/[A] pág. 4/3
  { iconKey: "Bone", value: "Hasta $5.000 al año", label: "Cirugías robóticas" }, // [C]/[A] pág. 6/3
  { iconKey: "Bike", value: "Hasta $4.500 al año", label: "Deportes extremos" }, // [C]/[A] pág. 6/3
  { iconKey: "Ribbon", value: "Hasta $2.500 al año", label: "Cirugía reconstructiva y rehabilitación oncológica, incluye implantes" }, // [C]/[A] pág. 4/3
  { iconKey: "FlaskConical", value: "Hasta $200 al año", label: "Pruebas de sensibilidad y tratamientos inmunológicos" }, // [C]/[A] pág. 4/3
];

export const preventionCoverages = [
  { iconKey: "Baby", value: "Hasta $65", label: "Control de niño sano hasta los 5 años" }, // [C]/[A] pág. 6/3
  { iconKey: "Syringe", value: "Hasta $50 por dosis", label: "Vacunas de control de niño sano hasta los 2 años" }, // [C]/[A] pág. 6/3
  { iconKey: "ShieldPlus", value: "Hasta $2.000 al año", label: "Control de natalidad definitivo" }, // [C]/[A] pág. 4/3
  { iconKey: "ShieldPlus", value: "Hasta $10 al año", label: "Control de natalidad no definitivo" }, // [C]/[A] pág. 4/3
  { iconKey: "Milk", value: "Hasta $250 al año", label: "Leche medicada (fórmula alimenticia medicada)" }, // [C]/[A] pág. 4/3
  { iconKey: "FlaskConical", value: "6 consultas al año, hasta $65 (20% copago vía reembolso)", label: "Especialidad nutricional" }, // [C] pág. 10 (Anexo) / [A] pág. 3
  { iconKey: "HandHeart", value: "12 consultas al año, hasta $65 (20% copago vía reembolso)", label: "Especialidad en psicología" }, // [C] pág. 10 (Anexo) / [A] pág. 3
];

export const otherConditions = [
  { iconKey: "Cross", value: "Hasta $300 al año", label: "Delgadez, obesidad, enanismo y retardo de crecimiento" }, // [C]/[A] pág. 4/3
  { iconKey: "HeartPulse", value: "Hasta $300 al año", label: "Lesiones por enajenación mental, estupefacientes, sustancias psicotrópicas, alcohol o drogas" }, // [C]/[A] pág. 4/3
  { iconKey: "Users", value: "Extracción hasta $70 por molar", label: "Extracción de terceros molares · vía reembolso al 100%, con deducible, carencia de 90 días" }, // [C] pág. 10 (Anexo) / [A] pág. 3
  { iconKey: "Sparkles", value: "Desde $160 hasta $200", label: "Upgrade de habitación en hospitales de élite seleccionados, sujeto a disponibilidad" }, // [C] pág. 10 (Anexo) / [A] pág. 3
];

/* Chips de farmacias de la Red Humana donde aplica la cobertura directa de
   medicinas — placeholders de texto, sin logos reales, hasta contar con el
   material gráfico oficial. */
export const pharmacyPartners = [
  "Pharmacy's",
  "Medicity",
  "Farmacias Económicas",
  "Fybeca",
  "Sana Sana",
]; // [A] pág. 2

export const faqItems = [
  {
    question: "¿A quién puedo incluir en mi plan?",
    answer: "Puedes incluir a tu cónyuge o pareja en unión de hecho, y a tus hijos solteros, discapacitados o niños legalmente adoptados, hasta el cuarto grado de consanguinidad y segundo de afinidad, según las condiciones contractuales.", // [C] pág. 12 (definición de "dependiente")
  },
  {
    question: "¿Cuándo puedo utilizar mi cobertura?",
    answer: "Cada prestación tiene su propio período de carencia: 24 horas para emergencias, 30 días para atención ambulatoria y medicinas, 90 días para hospitalización y 60 días para maternidad. Las preexistencias declaradas tienen cobertura progresiva desde el mes 7.", // [C] pág. 1-6
  },
  {
    question: "¿Cómo solicito atención médica?",
    answer: "Puedes preautorizar tu atención dentro de la Red Metrohumana (copago directo, sin trámites de reembolso) o acudir a un prestador de libre elección y solicitar el reembolso posterior con tu factura y la documentación requerida.", // [C] pág. 16-18
  },
  {
    question: "¿Qué servicios incluye mi plan?",
    answer: "MH150 cubre hospitalización sin límite de días, atención ambulatoria y con especialistas, medicinas, maternidad, emergencias, y beneficios adicionales sin costo como seguro de vida, asistencia exequial, asistencia en viajes y ambulancia aérea o fluvial.", // [C]/[A]
  },
  {
    question: "¿Qué pasa si tengo una enfermedad preexistente?",
    answer: "Las preexistencias declaradas al momento de la contratación tienen cobertura progresiva: hasta $540 entre el mes 7 y 12, hasta $1.350 entre el mes 13 y 24 (beneficio adicional sin costo), y desde el mes 25 hasta 20 salarios básicos unificados, de conformidad con el contrato.", // [C] pág. 6/9
  },
];

export const contactChannels = [
  { iconKey: "MessageCircle", label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { iconKey: "PhoneCall", label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { iconKey: "Phone", label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];
