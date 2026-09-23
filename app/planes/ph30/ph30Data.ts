/* ------------------------------------------------------------------------ */
/* Datos del plan PH30 · Plan Clásico - PractiHumana 30.000                  */
/* ------------------------------------------------------------------------ */
/* FUENTE PRIORITARIA (manda ante cualquier conflicto):                     */
/*   [C] "PH30_ANEXO.pdf" — Contrato Individual de Prestación de Servicios   */
/*       de Atención Integral de Salud Prepagada, Plan Clásico -            */
/*       Practihumana 30.000. "Tabla de Beneficios" (pág. 1-6) + "Anexo de  */
/*       Coberturas Adicionales Sin Costo" (pág. 9-10), mismo PDF.           */
/* FUENTE COMERCIAL (solo para tono/lenguaje, nunca para cifras en conflicto)*/
/*   [A] "TABLA-PH30-2025.pdf" — tabla/infografía comercial PH30.            */
/*                                                                            */
/* CONTRADICCIONES DETECTADAS ENTRE [A] Y [C] (se documentan también en el   */
/* reporte final entregado al cliente; en todos los casos manda [C]):        */
/*  1) Ambulancia aérea/fluvial: [A] la publicita "$1.500 por reembolso al   */
/*     80%", pero la Tabla de Beneficios y el Anexo de Coberturas            */
/*     Adicionales de [C] la marcan como "N/A". NO se publica como           */
/*     confirmada: se omite del listado de beneficios incluidos.             */
/*  2) Nutrición/Psicología: [A] anuncia 3 consultas de nutrición y 6 de     */
/*     psicología; el Anexo de Coberturas Adicionales de [C] (pág. 10)       */
/*     especifica 6 consultas de nutrición y 12 de psicología al año. Se usa */
/*     [C] (6 y 12).                                                         */
/*  3) Emergencia ambulatoria por accidente al 100%: [A] la marca "N/A" en   */
/*     la tabla comercial, pero el Anexo de Coberturas Adicionales de [C]    */
/*     (pág. 9) SÍ la establece: 100% en Red Dirigida y Red Humana, sin      */
/*     deducible, hasta $300, si la atención es dentro de 48h del accidente  */
/*     y no requiere hospitalización. Se usa [C] (sí aplica).                */
/*  4) Asistencia en viajes: tanto [A] como [C] (pág. 3 tabla comercial y    */
/*     tabla de beneficios incluidos) confirman "No aplica" para titulares   */
/*     y dependientes de PH30. NO se comunica como beneficio del plan.       */
/* ------------------------------------------------------------------------ */

export const planIdentity = {
  code: "PH30",
  fullName: "Plan Clásico · PractiHumana 30.000", // [C] pág. 1
  type: "Individual",
  modality: "Mixta",
  network: "Practihumana",
  tariff: "Hospital Metropolitano -25%",
  maxCoverage: "$30.000",
  deductible: "$60",
};

/* Cifras esenciales, siempre visibles sin depender de animación. */
export const essenceStats = [
  { value: "$30.000", label: "de cobertura máxima\npor beneficiario" }, // [C] pág. 1
  { value: "90%", label: "de cobertura hospitalaria\nen Red Humana" }, // [C] pág. 2
  { value: "$60", label: "de deducible\nanual" }, // [C] pág. 1
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

/* IMÁGENES TEMPORALES: las 5 fotos exclusivas de PH30 (formato
   "ph30-hospitalizacion.png", etc.) todavía no fueron entregadas por el
   cliente. Mientras llegan, se reutilizan escenas genéricas de Red Humana ya
   existentes en el repo (PH15/MH50), documentadas explícitamente con
   `imageIsTemporaryFrom`. Cuando el cliente envíe las fotos definitivas,
   deben guardarse en `public/images/planes/ph30/` y solo hace falta
   actualizar el campo `image` de cada capítulo (y quitar
   `imageIsTemporaryFrom`) para reemplazarlas. */
export const chapters: Chapter[] = [
  {
    id: "hospitalizacion",
    number: "01",
    navLabel: "Hospitalización",
    theme: "deep",
    image: "/images/planes/ph30/ph30-hospitalizacion.jpg",
    imagePosition: "68% 38%",
    imageAlt: "Persona siendo atendida en un ambiente hospitalario cálido y seguro",
    eyebrow: "HOSPITALIZACIÓN",
    title: "El siguiente nivel de respaldo.",
    lead: "Habitación, cirugía, medicamentos, cuidados intensivos y rehabilitación, sin límite de días de hospitalización.",
    essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días"],
    dialogTitle: "Hospitalización",
    dialogLead: "Cobertura hospitalaria completa: habitación, visita médica, cirugía, terapia intensiva, medicamentos, insumos, apoyo psicológico, rehabilitación y cuidados paliativos, sin límite de días internado.",
    detailItems: [
      { label: "Copago Red Humana (cerrada)", value: "10% · cobertura 90%" }, // [C] pág. 2
      { label: "Copago libre elección (abierta)", value: "20% · cobertura 80%" }, // [C] pág. 2
      { label: "Cuarto y alimentación diaria", value: "Hasta $160 por día" }, // [C] pág. 2
      { label: "Acompañante (cama y alimentación)", value: "Hasta $50 por día" }, // [C] pág. 2/3
      { label: "Carencia", value: "90 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Trasplantes: pretrasplante, trasplante y postrasplante de órganos (donante vivo y cadavérico)", value: "Hasta $15.000 · 90% Red Humana / 80% libre elección · 90 días de carencia" }, // [C] pág. 2-3
      { label: "Diálisis y hemodiálisis (domiciliaria y no domiciliaria, ambulatoria y hospitalaria)", value: "Hasta $15.000 · 30 días ambulatorio / 90 días hospitalario" }, // [C] pág. 2/5
      { label: "Prótesis quirúrgicamente necesaria por incapacidad", value: "Hasta $3.000 · 90 días de carencia" }, // [C] pág. 6
    ],
  },
  {
    id: "ambulatoria",
    number: "02",
    navLabel: "Atención ambulatoria",
    theme: "light",
    image: "/images/planes/ph30/ph30-ambulatoria.jpg",
    imagePositionMobile: "center 20%",
    imageAlt: "Consulta médica cercana entre paciente y doctora",
    eyebrow: "ATENCIÓN AMBULATORIA",
    title: "Cuidarte hoy, con más red.",
    lead: "Consultas, exámenes y médico a domicilio, con copagos claros desde el primer momento, dentro de la Red Practihumana.",
    essentials: ["Consultas básicas desde $8", "Médico a domicilio $10", "Exámenes al 90% en Red CAM"],
    dialogTitle: "Atención ambulatoria",
    dialogLead: "Consultas médicas, exámenes de diagnóstico y médico a domicilio, con copagos definidos desde el primer día de cobertura.",
    detailItems: [
      { label: "Especialidades básicas en Red CAM", value: "Copago $8" }, // [C] pág. 1
      { label: "Otras subespecialidades en Red CAM", value: "Copago $12" }, // [C] pág. 1
      { label: "Red Preferida", value: "Copago $15" }, // [C] pág. 1
      { label: "Médico a domicilio (medicina general)", value: "Copago $10" }, // [C] pág. 1
      { label: "Carencia", value: "30 días" }, // [C] pág. 1
    ],
    conditions: [
      { label: "Exámenes de diagnóstico en Red CAM", value: "90% de cobertura (copago 10%)" }, // [C] pág. 2
      { label: "Otros exámenes/procedimientos en Red CAM", value: "80% de cobertura (copago 20%)" }, // [C] pág. 2
      { label: "Consultas médicas por reembolso", value: "20% de copago, sin límite hasta $30 por consulta" }, // [C] pág. 1
      { label: "Exámenes de diagnóstico por reembolso", value: "20% de copago (aplica deducible)" }, // [C] pág. 2
      { label: "Medicina alternativa (homeopatía, acupuntura, moxibustión, medicina ancestral)", value: "15 sesiones al año por reembolso, hasta $20 por sesión" }, // [C] pág. 9 (Anexo)
    ],
  },
  {
    id: "medicinas",
    number: "03",
    navLabel: "Medicinas",
    theme: "teal",
    image: "/images/planes/ph30/ph30-medicinas.jpg",
    imageAlt: "Entrega de medicamentos en una farmacia de la red Humana",
    eyebrow: "MEDICINAS",
    title: "Tu tratamiento, cubierto.",
    lead: "Acceso a farmacias de la red Humana, con cobertura de tus medicinas entre el 70% y el 90% según el medicamento.",
    essentials: ["Medicinas entre 70% y 90%", "Tope anual $1.000"],
    dialogTitle: "Medicinas",
    dialogLead: "Cobertura farmacéutica anual con un tope de $1.000, según el vademécum del medicamento y la red utilizada.",
    detailItems: [
      { label: "Vademécum A (genéricos y de marca)", value: "90% de cobertura (copago 10%)" }, // [C] pág. 2
      { label: "Vademécum B (genéricos y de marca)", value: "70% de cobertura (copago 30%)" }, // [C] pág. 2
      { label: "Medicinas en otros prestadores de Red Humana", value: "70% de cobertura (copago 30%)" }, // [C] pág. 2
      { label: "Tope anual del beneficio farmacéutico", value: "$1.000" }, // [C] pág. 2
      { label: "Carencia", value: "30 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Medicinas por reembolso (libre elección)", value: "50% de cobertura, hasta el tope de cobertura, 30 días de carencia" }, // [C] pág. 2
    ],
  },
  {
    id: "maternidad",
    number: "04",
    navLabel: "Maternidad",
    theme: "warm",
    image: "/images/planes/ph30/ph30-maternidad.jpg",
    imageAlt: "Madre gestante en un control prenatal acompañada de su médico",
    eyebrow: "MATERNIDAD",
    title: "Acompañamos cada etapa.",
    lead: "Atención prenatal, parto y protección ante complicaciones, con mayor respaldo para el inicio de tu familia.",
    essentials: ["$100 atención prenatal", "$1.500 parto o cesárea", "$2.250 complicaciones del parto"],
    dialogTitle: "Maternidad",
    dialogLead: "Atención prenatal, parto o cesárea, y complicaciones del parto y del recién nacido, conforme a las condiciones del plan.",
    detailItems: [
      { label: "Atención prenatal (consultas y exámenes)", value: "Hasta $100" }, // [C] pág. 3
      { label: "Parto normal, cesárea o aborto no provocado", value: "Hasta $1.500 (copago 10% Red Humana / 20% libre elección)" }, // [C] pág. 3
      { label: "Complicaciones del parto y del recién nacido", value: "Hasta $2.250" }, // [C] pág. 3
      { label: "Carencia de maternidad", value: "60 días" }, // [C] pág. 3
    ],
    conditions: [
      { label: "Inclusión intrauterina (semana 20-32), maternidad cubierta", value: "Hasta el tope de cobertura del plan ($30.000), según condiciones contractuales" }, // [C] pág. 3
      { label: "Inclusión intrauterina en período de carencia", value: "Hasta $200" }, // [C] pág. 3
      { label: "Enfermedades congénitas del recién nacido (maternidad no cubierta)", value: "Hasta $500" }, // [C] pág. 3
      { label: "Control de niño sano (hasta los 5 años)", value: "Hasta $30 por consulta, adicional a tarifa 0" }, // [C] pág. 6
      { label: "Vacunas de control de niño sano (hasta los 2 años)", value: "Hasta $50 por dosis, esquema MSP" }, // [C] pág. 6
      { label: "Leche medicada", value: "Hasta $100 al año" }, // [C] pág. 4
    ],
  },
  {
    id: "emergencias",
    number: "05",
    navLabel: "Emergencias",
    theme: "deep",
    image: "/images/planes/ph30/ph30-emergencias.jpg",
    imagePositionMobile: "center 15%",
    imageAlt: "Atención de emergencia médica a un paciente",
    eyebrow: "EMERGENCIAS",
    title: "Cuando no puede esperar.",
    lead: "Cobertura de emergencia y urgencia médica por accidente o enfermedad, activa desde las 24 horas de afiliación.",
    essentials: ["Cobertura hasta el tope del plan", "Activa a las 24 horas", "Incluye período de carencia y mora"],
    dialogTitle: "Emergencias",
    dialogLead: "Urgencias por accidente o enfermedad, dentro de la Red Humana, hasta el monto máximo contratado.",
    detailItems: [
      { label: "Emergencia y urgencia por accidente o enfermedad", value: "Hasta el monto máximo de cobertura (copago desde 10%)" }, // [C] pág. 5
      { label: "Emergencia con servicio suspendido por mora", value: "Hasta $300" }, // [C] pág. 5
      { label: "Emergencia en período de carencia (incluye preexistencias)", value: "Hasta $300" }, // [C] pág. 5
      { label: "Carencia", value: "24 horas" }, // [C] pág. 5
    ],
    conditions: [
      { label: "Emergencia ambulatoria por accidente (100%, sin hospitalización, dentro de 48h)", value: "100% de cobertura, hasta $300, sin deducible, en Red Dirigida y Red Humana" }, // [C] pág. 9 (Anexo)
      { label: "Ambulancia terrestre", value: "Hasta 4 eventos al año por núcleo familiar, hasta $100 por evento en Red Humana" }, // [C] pág. 2 / [A]
    ],
  },
];

/* Beneficios incluidos SIN costo adicional — solo los confirmados para PH30
   en el contrato/anexo. Se excluye explícitamente la asistencia en viajes
   (contrato: "No aplica") y la ambulancia aérea/fluvial (contrato: "N/A",
   pese a que la tabla comercial la anuncia hasta $1.500). */
export const featuredBenefits = [
  { iconKey: "HeartHandshake", title: "Seguro de vida", detail: "$5.000 para integrantes de 18 a 64 años" }, // [A] pág. 3
  { iconKey: "Ribbon", title: "Asistencia exequial", detail: "Para titular y dependientes" }, // [A] pág. 3
  { iconKey: "Ambulance", title: "Ambulancia terrestre", detail: "4 eventos al año, hasta $100 por evento en Red Humana" }, // [C]/[A]
  { iconKey: "HomeIcon", title: "Médico a domicilio", detail: "Consulta de medicina general con copago de $10" }, // [C]
  { iconKey: "FlaskConical", title: "PAP anual", detail: "Vía reembolso al 100%, cobertura hasta $15" }, // [C] pág. 10
  { iconKey: "HeartPulse", title: "PSA y mamografía", detail: "Desde los 40 años, reembolso al 100%, hasta $20 y $30" }, // [C] pág. 10
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
   contrato PH30. Se muestran en acordeones sobrios (segundo nivel visual). */
export const specialCases = [
  {
    iconKey: "FlaskConical",
    value: "Progresiva",
    label: "Preexistencias declaradas: sin cobertura hasta el mes 12 · hasta $1.350 en red cerrada entre el mes 13 y 24 (sin costo, según Anexo) · desde el mes 25, hasta 20 salarios básicos unificados según el contrato",
  }, // [C] pág. 6 (tabla general) + pág. 9 (Anexo beneficio adicional meses 13-24)
  { iconKey: "HandHeart", value: "20 salarios básicos unificados", label: "Discapacidad, incluye preexistencias relacionadas · carencia 3 meses" }, // [C] pág. 6
  { iconKey: "Users", value: "$15.000 al año", label: "Adulto mayor con continuidad menor a 5 años" }, // [A] pág. 2 — PENDIENTE DE VALIDACIÓN: no se ubicó esta fila en el texto corrido del contrato (pág. 1-6), solo en la tabla comercial
];

export const rehabCoverages = [
  { iconKey: "HeartHandshake", value: "$50 por día · hasta 30 días", label: "Cuidados paliativos y de largo plazo, domiciliarios o no domiciliarios" }, // [C] pág. 4/6
  { iconKey: "Activity", value: "15 sesiones · $15 por sesión", label: "Terapias de rehabilitación: lenguaje, cardíaca, física, dolor, ondas de choque y respiratoria" }, // [C] pág. 6
  { iconKey: "Wallet", value: "Hasta $300 al año", label: "Ayudas técnicas: compra o alquiler de prótesis, órtesis y equipo médico duradero" }, // [C] pág. 4
  { iconKey: "Wallet", value: "Hasta $80 al año", label: "Ayudas técnicas: recambios de prótesis, órtesis y equipo médico duradero" }, // [C] pág. 4
  { iconKey: "Bone", value: "Hasta $2.000 al año", label: "Cirugías robóticas" }, // [C] pág. 6
  { iconKey: "Bike", value: "Hasta $900 al año", label: "Deportes extremos" }, // [C] pág. 6
  { iconKey: "Ribbon", value: "Hasta $500 al año", label: "Cirugía reconstructiva y rehabilitación oncológica, incluye implantes" }, // [C] pág. 4
  { iconKey: "FlaskConical", value: "Hasta $200 al año", label: "Pruebas de sensibilidad y tratamientos inmunológicos" }, // [C] pág. 4
];

export const preventionCoverages = [
  { iconKey: "Baby", value: "Hasta $30", label: "Control de niño sano hasta los 5 años" }, // [C] pág. 6
  { iconKey: "Syringe", value: "Hasta $50 por dosis", label: "Vacunas de control de niño sano hasta los 2 años" }, // [C] pág. 6
  { iconKey: "ShieldPlus", value: "Hasta $1.000 al año", label: "Control de natalidad definitivo" }, // [C] pág. 4
  { iconKey: "ShieldPlus", value: "Hasta $10 al año", label: "Control de natalidad no definitivo" }, // [C] pág. 4
  { iconKey: "Milk", value: "Hasta $100 al año", label: "Leche medicada (fórmula alimenticia medicada)" }, // [C] pág. 4
  { iconKey: "FlaskConical", value: "6 consultas al año, hasta $30 (copago 20%)", label: "Especialidad nutricional" }, // [C] pág. 10 (Anexo) — corrige la tabla comercial, que anuncia 3 consultas
  { iconKey: "HandHeart", value: "12 consultas al año, hasta $30 (copago 20%)", label: "Especialidad en psicología" }, // [C] pág. 10 (Anexo) — corrige la tabla comercial, que anuncia 6 consultas
];

export const otherConditions = [
  { iconKey: "Cross", value: "Hasta $300 al año", label: "Delgadez, obesidad, enanismo y retardo de crecimiento" }, // [C] pág. 3/6
  { iconKey: "HeartPulse", value: "Hasta $300 al año", label: "Lesiones por enajenación mental, estupefacientes, sustancias psicotrópicas, alcohol o drogas" }, // [C] pág. 4
  { iconKey: "Users", value: "Extracción hasta $70 por molar", label: "Extracción de terceros molares · vía reembolso al 100%, con deducible, carencia de 90 días" }, // [C] pág. 10 (Anexo)
];

export const contactChannels = [
  { iconKey: "MessageCircle", label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { iconKey: "PhoneCall", label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { iconKey: "Phone", label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];
