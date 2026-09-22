/* ------------------------------------------------------------------------ */
/* Datos del plan PH15 · Plan Preferido - PractiHumana 15.000                */
/* ------------------------------------------------------------------------ */
/* FUENTE PRIORITARIA (manda ante cualquier conflicto):                     */
/*   [C] Contrato Individual PH15 2026-ENE, "Tabla de Beneficios" (pág.1-6) */
/*       + "Anexo de Coberturas Adicionales Sin Costo" (pág. 9-11),         */
/*       ambos parte del mismo PDF de contrato.                            */
/* FUENTE COMERCIAL (solo para tono/lenguaje, nunca para cifras en conflicto)*/
/*   [A] Anexo Cotizador PH15 Jóvenes (presentación comercial individual). */
/*                                                                          */
/* El tercer PDF entregado por el cliente                                   */
/* ("TABLA-PLAN-CONTROL-MH80-07-05-25.pdf") resultó ser, al leerlo, la      */
/* tabla comercial del plan METROHUMANA MH80 (Robot Da Vinci, $80.000,      */
/* deducible $200) y NO la presentación de ProSonrisas que mencionó el      */
/* cliente. No es un plan relacionado con PH15 ni con ProSonrisas, así que  */
/* se ignoró por completo para esta tarea. Ver reporte final para el detalle.*/
/* ------------------------------------------------------------------------ */

export const planIdentity = {
  code: "PH15",
  fullName: "Plan Preferido · PractiHumana 15.000", // [C] portada tabla de beneficios
  type: "Individual",
  modality: "Mixta",
  network: "Practihumana",
  tariff: "Hospital Metropolitano -25%",
  maxCoverage: "$15.000",
  deductible: "$50",
};

/* Cifras esenciales mostradas siempre visibles en el hero / sección "en tres ideas" */
export const essenceStats = [
  { value: "$15.000", label: "de cobertura máxima\npor beneficiario" }, // [C] pág. 1
  { value: "90%", label: "de cobertura hospitalaria\nen Red Humana" }, // [C] pág. 2
  { value: "$50", label: "de deducible\nanual" }, // [C] pág. 1
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
  eyebrow: string;
  title: string;
  lead: string;
  essentials: string[];
  dialogTitle: string;
  dialogLead: string;
  detailItems: ChapterDetailItem[];
  conditions: ChapterDetailItem[]; // para el acordeón "condiciones técnicas"
};

export const chapters: Chapter[] = [
  {
    id: "hospitalizacion",
    number: "01",
    navLabel: "Hospitalización",
    theme: "deep",
    image: "/ph15-hospitalizacion.jpg",
    imageAlt: "Persona joven siendo atendida en un ambiente hospitalario cálido",
    eyebrow: "HOSPITALIZACIÓN",
    title: "Si algo pasa, no estás solo.",
    lead: "Habitación, cirugía, medicamentos y cuidados intensivos, sin límite de días de hospitalización.",
    essentials: ["90% en Red Humana", "80% por libre elección", "Sin límite de días"],
    dialogTitle: "Hospitalización",
    dialogLead: "Cobertura hospitalaria completa: habitación, visita médica, cirugía, terapia intensiva, medicamentos e insumos, sin límite de días internado.",
    detailItems: [
      { label: "Copago Red Humana (cerrada)", value: "10% · cobertura 90%" }, // [C] pág. 2
      { label: "Copago libre elección (abierta)", value: "20% · cobertura 80%" }, // [C] pág. 2
      { label: "Cuarto y alimentación", value: "Hasta $160 por día" }, // [C] pág. 2
      { label: "Acompañante (cama y alimentación)", value: "Hasta $50 por día" }, // [C] pág. 2/3
      { label: "Carencia", value: "90 días" }, // [C] pág. 2
    ],
    conditions: [
      { label: "Trasplantes de órganos (pre, trasplante, post)", value: "Hasta $7.500 · 90 días de carencia" }, // [C] pág. 3
      { label: "Diálisis y hemodiálisis", value: "Hasta $7.500 · 30 días ambulatorio / 90 días hospitalario" }, // [C] pág. 3
      { label: "Prótesis quirúrgicamente necesaria", value: "Hasta $2.500 · 90 días de carencia" }, // [C] pág. 6
    ],
  },
  {
    id: "ambulatoria",
    number: "02",
    navLabel: "Atención ambulatoria",
    theme: "light",
    image: "/ph15-consultas.jpg",
    imageAlt: "Consulta médica cercana a un paciente joven",
    eyebrow: "ATENCIÓN AMBULATORIA",
    title: "Cuidarte hoy, sin complicarte.",
    lead: "Consultas y exámenes con copagos claros desde el primer momento, dentro de la Red Practihumana.",
    essentials: ["Consultas desde $8", "Médico a domicilio $10", "Exámenes al 90% en Red CAM"],
    dialogTitle: "Atención ambulatoria",
    dialogLead: "Consultas médicas, exámenes de diagnóstico y médico a domicilio, con copagos definidos desde el primer día.",
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
      { label: "Consultas médicas por reembolso", value: "20% de copago, sin límite hasta $25 por consulta" }, // [C] pág. 1
      { label: "Exámenes de diagnóstico por reembolso", value: "20% de copago (Red Humana) · 50% libre elección" }, // [C] pág. 2 / [A]
      { label: "Medicina alternativa (homeopatía, acupuntura, moxibustión, medicina ancestral)", value: "15 sesiones al año por reembolso, hasta $20 por sesión" }, // [A]
    ],
  },
  {
    id: "medicinas",
    number: "03",
    navLabel: "Medicinas",
    theme: "teal",
    image: "/ph15-medicinas.jpg",
    imageAlt: "Entrega de medicamentos en una farmacia de la red Humana",
    eyebrow: "MEDICINAS",
    title: "Tu tratamiento, cubierto.",
    lead: "Acceso a farmacias de la red Humana con cobertura de hasta el 90% según el medicamento.",
    essentials: ["Vademécum A: 90%", "Vademécum B: 70%", "Tope anual $1.000"],
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
      { label: "Medicinas por reembolso (libre elección)", value: "50% de cobertura, hasta el tope de la cobertura" }, // [C] pág. 2 / [A]
    ],
  },
  {
    id: "maternidad",
    number: "04",
    navLabel: "Maternidad",
    theme: "warm",
    image: "/mh50-maternidad.jpg",
    imageIsTemporaryFrom: "MH50 (mh50-maternidad.jpg) — imagen temporal reutilizada; PH15 no cuenta aún con foto propia de maternidad.",
    imageAlt: "Madre gestante en un control prenatal",
    eyebrow: "MATERNIDAD",
    title: "Acompañamos el inicio.",
    lead: "Atención prenatal, parto y protección para las complicaciones, desde el primer control.",
    essentials: ["$100 atención prenatal", "$750 parto o cesárea", "$1.125 complicaciones del parto"],
    dialogTitle: "Maternidad",
    dialogLead: "Atención prenatal, parto o cesárea, y complicaciones del parto y del recién nacido, conforme a las condiciones del plan.",
    detailItems: [
      { label: "Atención prenatal (consultas y exámenes)", value: "Hasta $100" }, // [C] pág. 3
      { label: "Parto normal, cesárea o aborto no provocado", value: "Hasta $750 (copago 10% Red Humana / 20% libre elección)" }, // [C] pág. 3
      { label: "Complicaciones del parto y del recién nacido", value: "Hasta $1.125" }, // [C] pág. 3
      { label: "Carencia de maternidad", value: "60 días" }, // [C] pág. 3
    ],
    conditions: [
      { label: "Inclusión intrauterina (semana 20-32), maternidad cubierta", value: "Hasta el tope de cobertura del plan" }, // [C] pág. 3
      { label: "Inclusión intrauterina en período de carencia", value: "Hasta $200" }, // [C] pág. 3
      { label: "Enfermedades congénitas del recién nacido", value: "Hasta $500" }, // [C] pág. 3
      { label: "Control de niño sano (hasta los 5 años)", value: "Hasta $25 por consulta, adicional a tarifa 0" }, // [C] pág. 6
      { label: "Vacunas de control de niño sano (hasta los 2 años)", value: "Hasta $50 por dosis, esquema MSP" }, // [C] pág. 6
      { label: "Leche medicada", value: "Hasta $50 al año" }, // [C] pág. 4
    ],
  },
  {
    id: "emergencias",
    number: "05",
    navLabel: "Emergencias",
    theme: "deep",
    image: "/ph15-emergencias.jpg",
    imageAlt: "Atención de emergencia médica a un paciente joven",
    eyebrow: "EMERGENCIAS",
    title: "Cuando no puede esperar.",
    lead: "Cobertura de emergencia y urgencia médica por accidente o enfermedad, activa desde las 24 horas de afiliación.",
    essentials: ["Cobertura hasta el tope del plan", "Activa a las 24 horas", "Incluye período de carencia y mora"],
    dialogTitle: "Emergencias",
    dialogLead: "Urgencias por accidente o enfermedad, dentro de la Red Humana, hasta el monto máximo contratado.",
    detailItems: [
      { label: "Emergencia y urgencia por accidente o enfermedad", value: "Hasta el monto máximo de cobertura (copago 10% Red Humana)" }, // [C] pág. 5
      { label: "Emergencia con servicio suspendido por mora", value: "Hasta $300" }, // [C] pág. 5
      { label: "Emergencia en período de carencia", value: "Hasta $300" }, // [C] pág. 5
      { label: "Carencia", value: "24 horas" }, // [C] pág. 5
    ],
    conditions: [
      { label: "Crédito en emergencia ambulatoria por accidente (sin hospitalización, dentro de 48h)", value: "100% de cobertura, hasta $300, sin deducible" }, // [A]
      { label: "Ambulancia terrestre", value: "Hasta 4 eventos al año, hasta $100 por evento en Red Humana" }, // [C] pág. 2 / [A]
    ],
  },
];

/* Beneficios incluidos SIN costo adicional — solo los confirmados para PH15
   en el contrato/anexo. Se excluyen explícitamente asistencia internacional
   de viajes, ambulancia aérea/fluvial, emergencia ambulatoria al 100% hasta
   $1.000, y consultas de nutrición/psicología: esos son beneficios propios
   de MH50/MetroHumana y NO están confirmados para PH15 ("No aplica" en el
   Anexo Cotizador PH15 Jóvenes, pág. 3). */
export const featuredBenefits = [
  { iconKey: "HeartHandshake", title: "Seguro de vida", detail: "$5.000 para integrantes de 18 a 64 años" }, // [C]/[A] pág. 3
  { iconKey: "Ribbon", title: "Asistencia exequial", detail: "Para titular y dependientes, según condiciones del servicio" }, // [A]
  { iconKey: "Ambulance", title: "Ambulancia terrestre", detail: "4 eventos al año, hasta $100 por evento en Red Humana" }, // [C]/[A]
  { iconKey: "HomeIcon", title: "Médico a domicilio", detail: "Consulta de medicina general con copago de $10" }, // [C]
  { iconKey: "Video", title: "Teleconsulta", detail: "Atención médica a distancia" },
  { iconKey: "PackageCheck", title: "Medicinas a domicilio", detail: "Entrega de tratamiento donde estés" },
];

/* Carencias generales del plan */
export const waitingPeriods = [
  { period: "24 h", title: "Emergencias" }, // [C] pág. 5
  { period: "30 días", title: "Atención ambulatoria" }, // [C] pág. 1
  { period: "60 días", title: "Maternidad" }, // [C] pág. 3
  { period: "90 días", title: "Hospitalización" }, // [C] pág. 2
  { period: "24 meses", title: "Preexistencias declaradas" }, // [C] pág. 6
  { period: "3 meses", title: "Discapacidad" }, // [C] pág. 6
];

/* Coberturas adicionales y condiciones técnicas — solo lo confirmado en el
   contrato PH15. Se muestran en acordeones sobrios. */
export const specialCases = [
  { iconKey: "FlaskConical", value: "20 salarios básicos", label: "Preexistencias declaradas · carencia de 24 meses" }, // [C] pág. 6
  { iconKey: "HandHeart", value: "20 salarios básicos", label: "Discapacidad, incluye preexistencias relacionadas · carencia 3 meses" }, // [C] pág. 6
  { iconKey: "Users", value: "$7.500 al año", label: "Adulto mayor con continuidad menor a 5 años" }, // [A] — PENDIENTE DE VALIDACIÓN: no se confirmó esta fila en las páginas 1-6 del contrato, solo en el anexo comercial
];

export const rehabCoverages = [
  { iconKey: "HeartHandshake", value: "$50 por día · hasta 30 días", label: "Cuidados paliativos y de largo plazo" }, // [C] pág. 4
  { iconKey: "Activity", value: "15 sesiones · $15 por sesión", label: "Terapias de rehabilitación: lenguaje, cardíaca, física, dolor, ondas de choque y respiratoria" }, // [C] pág. 6
  { iconKey: "Wallet", value: "Hasta $150 al año", label: "Ayudas técnicas: compra o alquiler de prótesis, órtesis y equipo médico duradero" }, // [C] pág. 4
  { iconKey: "Wallet", value: "Hasta $40 al año", label: "Ayudas técnicas: recambios de prótesis, órtesis y equipo médico duradero" }, // [C] pág. 4
  { iconKey: "Bone", value: "Hasta $1.000 al año", label: "Cirugías robóticas" }, // [C] pág. 6
  { iconKey: "Bike", value: "Hasta $450 al año", label: "Deportes extremos" }, // [C] pág. 6
  { iconKey: "Ribbon", value: "Hasta $500 al año", label: "Cirugía reconstructiva oncológica, incluye implantes" }, // [C] pág. 4
  { iconKey: "FlaskConical", value: "Hasta $200 al año", label: "Pruebas de sensibilidad y tratamientos inmunológicos" }, // [C] pág. 4
];

export const preventionCoverages = [
  { iconKey: "Baby", value: "Hasta $25", label: "Control de niño sano hasta los 5 años" }, // [C] pág. 6
  { iconKey: "Syringe", value: "Hasta $50 por dosis", label: "Vacunas de control de niño sano hasta los 2 años" }, // [C] pág. 6
  { iconKey: "ShieldPlus", value: "Hasta $500 al año", label: "Control de natalidad definitivo" }, // [C] pág. 6
  { iconKey: "ShieldPlus", value: "Hasta $10 al año", label: "Control de natalidad no definitivo" }, // [C] pág. 6
  { iconKey: "Milk", value: "Hasta $50 al año", label: "Leche medicada" }, // [C] pág. 4
];

export const otherConditions = [
  { iconKey: "Cross", value: "Hasta $300 al año", label: "Delgadez, obesidad, enanismo y retardo de crecimiento" }, // [C] pág. 4
  { iconKey: "HeartPulse", value: "Hasta $300 al año", label: "Lesiones por enajenación mental, estupefacientes o drogas" }, // [C] pág. 4
];

export const contactChannels = [
  { iconKey: "MessageCircle", label: "WhatsApp", value: "+593 2401 7002", href: "https://wa.me/59324017002" },
  { iconKey: "PhoneCall", label: "Línea gratuita", value: "1800 48 62 62", href: "tel:1800486262" },
  { iconKey: "Phone", label: "Correo", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
];
