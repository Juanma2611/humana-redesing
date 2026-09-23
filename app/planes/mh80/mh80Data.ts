/* ------------------------------------------------------------------------ */
/* Datos del plan MH80 · Plan Familiar - Metrohumana 80.000                  */
/* ------------------------------------------------------------------------ */
/* FUENTE PRIORITARIA (manda ante cualquier conflicto):                     */
/*   [C] "MH80-E-COMMERCE-UNIFICADO-29-04-2025-CE.pdf" — Contrato Individual */
/*       de Prestación de Servicios de Atención Integral de Salud Prepagada, */
/*       Plan Individual Modular 80.000. "Tabla de Beneficios" (pág. 1-8 del */
/*       PDF) + "Anexo de Coberturas Adicionales sin Costo, Plan Individual  */
/*       Modular 80.000" (pág. 10-11 del PDF, mismo archivo).                */
/* FUENTE COMERCIAL (solo para tono/lenguaje, nunca para cifras en conflicto)*/
/*   [A] "43833e0c-MH80_plan_.pdf" — tabla/infografía comercial Plan MH80.   */
/*                                                                            */
/* CONTRADICCIONES DETECTADAS ENTRE [A] Y [C] (se documentan también en el   */
/* reporte final entregado al cliente; en todos los casos manda [C]):        */
/*  1) Medicinas: [A] presenta una tabla "Copago Medicinas A (Genérico) 90%  */
/*     / Medicinas B (Marca) 70% / Otros prestadores 70% / Libre elección    */
/*     60%" con tope anual de $1.000. La Tabla de Beneficios de [C] (pág. 2  */
/*     del contrato) NO segmenta por vademécum A/B: establece un copago      */
/*     "hasta el 30%" en cadenas de farmacia en convenio (vía crédito, sin   */
/*     deducible) y 30%/40% para farmacias de especialidad y reembolso. Se   */
/*     usa [C] como cifra dura (copago desde 30%, cobertura desde 70%) y se  */
/*     marca la referencia de [A] (90%/70%/tope $1.000) como orientativa,    */
/*     con nota "PENDIENTE DE VALIDACIÓN" para el desglose por vademécum.    */
/*  2) Consultas médicas en Red Metrohumana: [A] las anuncia "Metrored desde */
/*     $4, otros desde $8"; la Tabla de Beneficios de [C] (pág. 1) da un     */
/*     rango de copago "Desde $0 hasta $25" con sublímite al monto máximo    */
/*     contratado. Se usa [C] (rango $0–$25) para la cifra dura, y se cita   */
/*     [A] solo como referencia de entrada ("desde $4") en el tono          */
/*     comercial.                                                            */
/*  3) Preexistencias: el cuerpo general del contrato ([C], tabla principal) */
/*     marca carencia de 24 meses con tope de 20 salarios básicos            */
/*     unificados (SBU). El Anexo de Coberturas Adicionales sin Costo ([C],  */
/*     mismo PDF) añade cobertura progresiva sin costo adicional: hasta $540 */
/*     desde el mes 6 y hasta $1.350 desde el mes 12/24. No hay              */
/*     contradicción real: es un beneficio adicional que se suma al tope     */
/*     general; ambos se documentan de forma progresiva.                     */
/* ------------------------------------------------------------------------ */

export const planIdentity = {
  code: "MH80",
  fullName: "Plan Individual Modular 80.000 · Metrohumana", // [C] pág. 1
  type: "Individual y Familiar",
  modality: "Mixta",
  network: "Metrohumana",
  tariff: "Hospital Metropolitano",
  maxCoverage: "$80.000",
  deductible: "$200",
};

/* Cifras esenciales, siempre visibles sin depender de animación. */
export const essenceStats = [
  { value: "$80.000", label: "de cobertura máxima\npor beneficiario" }, // [C] pág. 1
  { value: "80%", label: "de cobertura hospitalaria\nen Red Metrohumana" }, // [C] pág. 1 / pág. 3
  { value: "$200", label: "de deducible\nanual" }, // [C] pág. 1
];

export type ChapterDetailItem = { label: string; value: string };

export type Chapter = {
  id: string;
  number: string;
  navLabel: string;
  theme: "deep" | "light" | "teal" | "warm";
  image: string;
  imageAlt: string;
  imageIsTemporaryFrom?: string; // documenta origen si la foto es prestada de otro plan
  imagePosition?: string; // object-position CSS en desktop (evitar cortar rostros)
  imagePositionMobile?: string; // object-position CSS en movil, si difiere del de desktop
  eyebrow: string;
  title: string;
  lead: string;
  essentials: string[];
  dialogTitle: string;
  dialogLead: string;
  detailItems: ChapterDetailItem[];
  conditions: ChapterDetailItem[]; // para el acordeón "condiciones técnicas"
};

/* IMÁGENES TEMPORALES: las fotos exclusivas de MH80 todavía no fueron
   entregadas por el cliente. Mientras llegan, se reutilizan las escenas
   familiares ya existentes en el repo para MH50 (plan también familiar,
   con fotografía más cercana al tono buscado para MH80), documentadas
   explícitamente con `imageIsTemporaryFrom`. Cuando el cliente envíe las
   fotos definitivas, deben guardarse en `public/images/planes/mh80/` y
   solo hace falta actualizar el campo `image` de cada capítulo (y quitar
   `imageIsTemporaryFrom`) para reemplazarlas. */
export const chapters: Chapter[] = [
  {
    id: "hospitalizacion",
    number: "01",
    navLabel: "Hospitalización",
    theme: "deep",
    image: "/mh50-hospitalizacion.jpg",
    imageIsTemporaryFrom: "mh50",
    imageAlt: "Persona siendo atendida en un ambiente hospitalario cálido y seguro",
    eyebrow: "HOSPITALIZACIÓN",
    title: "Respaldo cuando tu familia más lo necesita.",
    lead: "Habitación, cirugía, medicamentos, cuidados intensivos y rehabilitación, sin límite de días de hospitalización.",
    essentials: ["80% en Red Metrohumana", "70% por libre elección", "Sin límite de días"],
    dialogTitle: "Hospitalización",
    dialogLead: "Cobertura hospitalaria completa: habitación, visita médica, cirugía, terapia intensiva, medicamentos, insumos, apoyo psicológico, rehabilitación y cuidados paliativos, sin límite de días internado, en Red Direccionada.",
    detailItems: [
      { label: "Copago Red Metrohumana (cerrada)", value: "20% · cobertura 80%" }, // [C] pág. 3
      { label: "Copago libre elección (abierta)", value: "30% · cobertura 70%" }, // [C] pág. 3
      { label: "Cuarto y alimentación diaria", value: "Hasta $160 por día, sin límite de días" }, // [C] pág. 3
      { label: "Terapia intensiva / cuidados intensivos", value: "Hasta el monto máximo contratado" }, // [C] pág. 3
      { label: "Carencia", value: "90 días" }, // [C] pág. 3
    ],
    conditions: [
      { label: "Trasplante de órganos (no experimental, receptor y donante vivo o cadavérico)", value: "50% del monto máximo contratado · 30 días ambulatorio / 90 días hospitalario" }, // [C] pág. 7
      { label: "Diálisis y hemodiálisis en Red / Libre elección", value: "Hasta $25.000 · 80% en Red / 70% libre elección" }, // [C] pág. 3
      { label: "Prótesis quirúrgicamente necesarias (endoprótesis, implantes cocleares, stents, marcapasos y similares)", value: "Hasta $5.000 · 90 días de carencia" }, // [C] pág. 6
      { label: "Cama y alimentación de acompañante (menores de 16 y mayores de 75 años)", value: "Hasta $50 por día · 90 días de carencia" }, // [C] pág. 6
    ],
  },
  {
    id: "ambulatoria",
    number: "02",
    navLabel: "Atención ambulatoria",
    theme: "light",
    image: "/mh50-ambulatoria.jpg",
    imageIsTemporaryFrom: "mh50",
    imageAlt: "Consulta médica cercana entre paciente y doctora",
    eyebrow: "ATENCIÓN AMBULATORIA",
    title: "Cuidar a tu familia, sin complicaciones.",
    lead: "Consultas, teleconsultas, exámenes y médico a domicilio, con copagos claros desde el primer momento, dentro de la Red Metrohumana.",
    essentials: ["Consultas desde $0 de copago", "Médico a domicilio desde $10", "Exámenes al 80% en Red Cerrada"],
    dialogTitle: "Atención ambulatoria",
    dialogLead: "Consultas médicas, teleconsultas, exámenes de diagnóstico y médico a domicilio, con copagos definidos desde el primer día de cobertura.",
    detailItems: [
      { label: "Consultas médicas en Red Metrohumana", value: "Desde $0 hasta $25 de copago" }, // [C] pág. 1
      { label: "Teleconsultas médicas preautorizadas", value: "Desde $10 hasta $15 de copago" }, // [C] pág. 1
      { label: "Médico a domicilio (consultas domiciliarias preautorizadas)", value: "Desde $10 hasta $15 de copago" }, // [C] pág. 1
      { label: "Consultas médicas por reembolso", value: "20% de copago, hasta $60 por consulta" }, // [C] pág. 1
      { label: "Carencia", value: "30 días" }, // [C] pág. 1
    ],
    conditions: [
      { label: "Exámenes de diagnóstico (laboratorio, rayos X y ecografías) en Red Cerrada", value: "20% de copago (cobertura 80%), sin deducible" }, // [C] pág. 2
      { label: "Otros exámenes/procedimientos preautorizados en Red Cerrada", value: "20% de copago, aplica deducible" }, // [C] pág. 2
      { label: "Exámenes de diagnóstico por reembolso", value: "20% de copago (aplica deducible)" }, // [C] pág. 2
      { label: "Terapias de rehabilitación ambulatorias (lenguaje, cardíaca, física, dolor, ondas de choque, respiratoria)", value: "20% de copago, hasta $25 por sesión · máximo 15 sesiones por tipo de terapia" }, // [C] pág. 1
      { label: "Medicina alternativa (homeópatas, acupunturistas, moxibustión, medicina ancestral)", value: "Hasta $20 por sesión, máximo 15 sesiones al año" }, // [C] pág. 1
    ],
  },
  {
    id: "medicinas",
    number: "03",
    navLabel: "Medicinas",
    theme: "teal",
    image: "/mh50-medicinas.jpg",
    imageIsTemporaryFrom: "mh50",
    imageAlt: "Entrega de medicamentos en una farmacia de la red Humana",
    eyebrow: "MEDICINAS",
    title: "Tu tratamiento, cubierto.",
    lead: "Acceso a la red de farmacias de convenio de Humana, con cobertura de tus medicinas desde el 70%, según el prestador y la modalidad de acceso.",
    // PENDIENTE DE VALIDACIÓN: la tabla comercial [A] anuncia un desglose por
    // vademécum (Medicinas A/genérico 90%, Medicinas B/marca 70%) con tope
    // anual de $1.000; ese desglose no se encontró de forma explícita en el
    // texto corrido de la Tabla de Beneficios del contrato [C] (pág. 2), que
    // solo diferencia por canal de acceso. Se presenta la cifra de [C] como
    // dato duro y se referencia [A] únicamente como tono comercial.
    essentials: ["Cobertura desde 70% en Red Metrohumana", "Cadenas de farmacia en convenio, vía crédito"],
    dialogTitle: "Medicinas",
    dialogLead: "Cobertura farmacéutica en la red de farmacias en convenio de Humana, con copagos según el canal de acceso utilizado.",
    detailItems: [
      { label: "Medicinas en cadenas de farmacias en convenio (vía crédito, sin deducible)", value: "Copago hasta 30% (cobertura desde 70%)" }, // [C] pág. 2
      { label: "Medicinas en farmacias de especialidad de Red Cerrada (preautorizadas)", value: "30% de copago (aplica deducible)" }, // [C] pág. 2
      { label: "Medicinas por reembolso (libre elección)", value: "30% de copago en Red Cerrada / 40% en Red Abierta (aplica deducible)" }, // [C] pág. 2
      { label: "Medicamentos homeopáticos prescritos por médico acreditado", value: "30% de copago, sublímite $1.000" }, // [C] pág. 2
      { label: "Carencia", value: "30 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Referencia comercial de tope anual y desglose por vademécum", value: "Tope anual $1.000 · Genéricos 90% / Marca 70% (según tabla comercial [A], pendiente de validar contra el contrato)" }, // [A]
    ],
  },
  {
    id: "maternidad",
    number: "04",
    navLabel: "Maternidad",
    theme: "warm",
    image: "/mh50-maternidad.jpg",
    imageIsTemporaryFrom: "mh50",
    imageAlt: "Madre gestante en un control prenatal acompañada de su médico",
    eyebrow: "MATERNIDAD",
    title: "Una nueva etapa también merece protección.",
    lead: "Atención prenatal, parto, cesárea y recepción del recién nacido, con acompañamiento también ante complicaciones.",
    essentials: ["$4.000 en maternidad cubierta", "$4.000 ante complicaciones", "60 días de carencia"],
    dialogTitle: "Maternidad",
    dialogLead: "Atención prenatal, parto o cesárea, y complicaciones del parto y del recién nacido, conforme a las condiciones del plan.",
    detailItems: [
      { label: "Maternidad en período de carencia (atención prenatal)", value: "Hasta $100, carencia 30 días ambulatorio" }, // [C] pág. 3
      { label: "Maternidad en curso", value: "20% de copago Red Cerrada / 30% Red Abierta · sublímite $300 · carencia 60 días" }, // [C] pág. 3
      { label: "Maternidad cubierta: parto normal, cesárea o aborto no provocado, y recepción del recién nacido sin complicaciones", value: "10% de copago Red Cerrada / 30% Red Abierta · sublímite $4.000 · carencia 60 días" }, // [C] pág. 3
      { label: "Complicaciones del parto y/o del recién nacido", value: "20% de copago Red Cerrada / 30% Red Abierta · sublímite $4.000, adicional a maternidad cubierta" }, // [C] pág. 3
    ],
    conditions: [
      { label: "Recién nacido con inclusión intrauterina en maternidad cubierta", value: "Hasta el monto máximo contratado" }, // [C] pág. 4
      { label: "Recién nacido sin inclusión intrauterina, inscrito dentro de los primeros 7 días", value: "Hasta $1.000" }, // [C] pág. 4
      { label: "Recién nacido sin inclusión intrauterina, inscrito después del día 7", value: "Hasta $300" }, // [C] pág. 4
    ],
  },
  {
    id: "emergencias",
    number: "05",
    navLabel: "Emergencias",
    theme: "deep",
    image: "/plan-mh80-hero.jpeg",
    imageAlt: "Atención de emergencia médica a un paciente",
    eyebrow: "EMERGENCIAS",
    title: "Cuando más importa, Humana está contigo.",
    lead: "Cobertura de emergencia y urgencia médica por accidente o enfermedad, con crédito inmediato al 100% en accidentes, dentro de la Red Direccionada y Red Metrohumana.",
    essentials: ["100% en emergencia por accidente", "Hasta $1.000 por evento", "Activa a las 24 horas"],
    dialogTitle: "Emergencias",
    dialogLead: "Urgencias por accidente o enfermedad, dentro de Red Metrohumana, hasta el monto máximo contratado, con crédito preferente en accidentes.",
    detailItems: [
      { label: "Crédito en emergencia ambulatoria por accidente (100%, sin hospitalización, dentro de 48h)", value: "100% de cobertura, hasta $1.000, sin deducible, en Red Direccionada y Red Metrohumana" }, // [C] pág. 4 / [A]
      { label: "Emergencia y urgencia médica por accidente o enfermedad, vía reembolso", value: "20% de copago Red Cerrada / 30% Red Abierta, hasta el monto máximo contratado" }, // [C] pág. 4
      { label: "Emergencia con servicio suspendido por mora", value: "20% de copago Red Cerrada / 30% Red Abierta, hasta $500" }, // [C] pág. 5
      { label: "Emergencia en período de carencia (incluye preexistencias)", value: "20% de copago Red Cerrada / 30% Red Abierta, hasta $500" }, // [C] pág. 5
      { label: "Carencia", value: "24 horas" }, // [C] pág. 4
    ],
    conditions: [
      { label: "Ambulancia terrestre", value: "Sin copago · máximo 4 eventos al año, hasta $100 por evento · carencia 24 horas" }, // [C] pág. 2 / [A]
    ],
  },
];

/* Beneficios incluidos SIN costo adicional — solo los confirmados para MH80
   en el material comercial ([A] pág. 4) y el contrato/anexo ([C]). */
export const featuredBenefits = [
  { iconKey: "HeartHandshake", title: "Seguro de vida", detail: "Para titular y dependientes" }, // [A] pág. 4
  { iconKey: "Ribbon", title: "Asistencia exequial", detail: "Para titular y dependientes" }, // [A] pág. 4
  { iconKey: "Ambulance", title: "Ambulancia terrestre", detail: "4 eventos al año, hasta $100 por evento" }, // [C]/[A]
  { iconKey: "HomeIcon", title: "Médico a domicilio", detail: "Consulta domiciliaria desde $10 de copago" }, // [C]
  { iconKey: "Video", title: "Teleconsulta", detail: "Consulta médica preautorizada desde $10 de copago" }, // [C]
  { iconKey: "Sparkles", title: "Asistencia en viajes", detail: "Para titular y dependientes" }, // [A] pág. 4
];

/* Carencias generales del plan */
export const waitingPeriods = [
  { period: "24 h", title: "Emergencias" }, // [C] pág. 4
  { period: "30 días", title: "Atención ambulatoria" }, // [C] pág. 1
  { period: "90 días", title: "Hospitalización" }, // [C] pág. 3
  { period: "60 días", title: "Maternidad" }, // [C] pág. 3
  { period: "24 meses", title: "Preexistencias" }, // [C] pág. 6 — ver detalle progresivo en el acordeón
  { period: "3 meses", title: "Discapacidad" }, // [C] pág. 7
];

/* Coberturas adicionales y condiciones técnicas — solo lo confirmado en el
   contrato MH80. Se muestran en acordeones sobrios (segundo nivel visual). */
export const specialCases = [
  {
    iconKey: "FlaskConical",
    value: "Progresiva",
    label: "Preexistencias declaradas: sin costo adicional, hasta $540 desde el mes 6 · hasta $1.350 desde el mes 12, ambos según el Anexo de Coberturas Adicionales · desde el mes 24, cobertura plena hasta 20 salarios básicos unificados, según el contrato",
  }, // [C] Anexo pág. 1 (progresiva) + tabla principal pág. 6 (24 meses / 20 SBU)
  { iconKey: "HandHeart", value: "20 salarios básicos unificados", label: "Personas con discapacidad acreditada, incluye preexistencias relacionadas · carencia 3 meses" }, // [C] pág. 7
  { iconKey: "Users", value: "50% de cobertura", label: "Adulto mayor de 65 años sin continuidad mínima de 5 años en el mismo tipo de plan" }, // [C] Cláusula 5.1
];

export const rehabCoverages = [
  { iconKey: "HeartHandshake", value: "Hasta $1.500 al año", label: "Cuidados paliativos y de largo plazo, domiciliarios o no domiciliarios, hasta $50 diarios" }, // [C] pág. 6
  { iconKey: "Activity", value: "15 sesiones · hasta $25 por sesión", label: "Terapias de rehabilitación: lenguaje, cardíaca, física, dolor, ondas de choque y respiratoria" }, // [C] pág. 1/3
  { iconKey: "Wallet", value: "Hasta $200 al año", label: "Ayudas técnicas: compra, alquiler o recambio de equipo médico duradero, órtesis y prótesis no dental" }, // [C] pág. 7
  { iconKey: "Bone", value: "50% del monto máximo contratado", label: "Trasplante de órganos, incluye pre y postrasplante" }, // [C] pág. 7
  { iconKey: "Ribbon", value: "Hasta $1.500 al año", label: "Cirugía reconstructiva o correctiva por enfermedades oncológicas, incluye implantes" }, // [C] pág. 6
  { iconKey: "FlaskConical", value: "Hasta $200 al año", label: "Pruebas de sensibilidad y tratamientos inmunológicos, incluye vacunas e inmunoterapia oral" }, // [C] pág. 6
];

export const preventionCoverages = [
  { iconKey: "Baby", value: "Desde $0 hasta $25", label: "Consultas médicas de control del niño sano, adicional a la cobertura de Tarifa 0" }, // [C] pág. 8
  { iconKey: "Syringe", value: "Hasta $50 por dosis", label: "Vacunas de control del niño sano, esquema del Ministerio de Salud Pública" }, // [C] pág. 8
  { iconKey: "FlaskConical", value: "Vía reembolso al 100%, hasta $15", label: "Un Pap Test al año, para titular o dependientes" }, // [C] Anexo pág. 1
  { iconKey: "HeartPulse", value: "Vía reembolso al 100%, hasta $20", label: "Antígeno prostático (PSA) al año, desde los 40 años" }, // [C] Anexo pág. 1
  { iconKey: "HeartPulse", value: "Vía reembolso al 100%, hasta $30", label: "Una mamografía al año, desde los 40 años" }, // [C] Anexo pág. 1
  { iconKey: "Users", value: "Vía reembolso al 100%, hasta $70 por molar", label: "Extracción de terceros molares, carencia 90 días" }, // [C] Anexo pág. 1
  { iconKey: "FlaskConical", value: "6 consultas al año, hasta $60 (copago 20%)", label: "Especialidad nutricional" }, // [C] Anexo pág. 1
  { iconKey: "HandHeart", value: "12 consultas al año, hasta $60 (copago 20%)", label: "Especialidad en psicología" }, // [C] Anexo pág. 1
];

export const otherConditions = [
  { iconKey: "Cross", value: "Hasta $200 al año", label: "Delgadez, obesidad, enanismo y retardo de crecimiento" }, // [C] pág. 5
  { iconKey: "HeartPulse", value: "Hasta $200 al año", label: "Lesiones por enajenación mental, estupefacientes, sustancias psicotrópicas, alcohol o drogas" }, // [C] pág. 5
  { iconKey: "ShieldPlus", value: "Hasta el monto máximo contratado", label: "Control de natalidad definitivo, incluye ligaduras y vasectomía" }, // [C] pág. 5
  { iconKey: "ShieldPlus", value: "Hasta $10 al año", label: "Control de natalidad no definitivo" }, // [C] pág. 6
];

export const contactChannels = [
  { iconKey: "MessageCircle", label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { iconKey: "PhoneCall", label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { iconKey: "Phone", label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];

/* Preguntas frecuentes de MH80, orientadas al cliente. Respuestas basadas en
   las condiciones generales del contrato ([C], cláusulas 1, 2, 6 y 8). */
export const faqs = [
  {
    question: "¿A quién puedo incluir en mi plan MH80?",
    answer: "MH80 es un plan Individual y Familiar: puedes incluir a tus dependientes y beneficiarios conforme al procedimiento de afiliación de Humana, presentando la tarjeta de afiliación y la declaración de condiciones de salud de cada nuevo integrante.", // [C] cláusula 8.2
  },
  {
    question: "¿Cuándo puedo empezar a utilizar mi cobertura?",
    answer: "Cada prestación tiene su propio período de carencia desde tu afiliación: 24 horas para emergencias, 30 días para atención ambulatoria, 60 días para maternidad y 90 días para hospitalización. Las preexistencias declaradas tienen cobertura progresiva sin costo adicional.", // [C] Tabla de Beneficios
  },
  {
    question: "¿Cómo solicito atención médica?",
    answer: "Puedes acudir a la Red Metrohumana con copago, o a un prestador de tu preferencia por libre elección con reembolso posterior. Para atención domiciliaria o teleconsulta, la preautorización se gestiona a través de los canales de Humana.", // [C] cláusula 2.3.1
  },
  {
    question: "¿Qué servicios digitales incluye mi plan?",
    answer: "Acceso a Oficina Virtual, la app MiHumana, reembolsos en línea, teleconsultas, médico y enfermera a domicilio, plan de vacunación infantil y plan de medicación continua, entre otros servicios de acompañamiento.", // [A] pág. 3
  },
  {
    question: "¿Qué pasa si tengo una preexistencia declarada?",
    answer: "Humana financia tus preexistencias declaradas de forma progresiva y sin costo adicional: hasta $540 desde el mes 6 de afiliación y hasta $1.350 desde el mes 12, hasta llegar a la cobertura plena de hasta 20 salarios básicos unificados a partir del mes 24.", // [C] Anexo + tabla principal
  },
  {
    question: "¿Qué cubre la emergencia por accidente?",
    answer: "Si sufres un accidente y no requieres hospitalización, Humana otorga crédito y cobertura al 100% sin deducible hasta $1.000 por evento, siempre que la atención se reciba dentro de las 48 horas del accidente, en Red Direccionada y Red Metrohumana.", // [C] Anexo pág. 2 / [A]
  },
];
