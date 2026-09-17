export type PlanDetailFaq = { question: string; answer?: string[] };

export type PlanDetailTableRow = { label: string; values: string[] };
export type PlanDetailTable = { title?: string; columns: string[]; rows: PlanDetailTableRow[] };

export type PlanDetailBenefit = { icon: string; label: string };

export type PlanDetail = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string[];
  heroImage: string;
  coverageTables: PlanDetailTable[];
  coverageNotes?: string[];
  mainBenefits?: PlanDetailBenefit[];
  lifeInsurance?: { title: string; description: string };
  checkup?: {
    title: string;
    note: string;
    tableTitle: string;
    items: string[];
    procedureCount: string;
    conditions: string[];
  };
  huPlus?: { title: string; categories: string[]; description: string };
  faqs: PlanDetailFaq[];
  faqTitle: string;
};

export const planDetails: PlanDetail[] = [
  {
    slug: "proteger",
    name: "Proteger",
    eyebrow: "Plan complementario",
    title: "Plan médico Proteger",
    description: [
      "Nuestro Plan Proteger te ofrece la tranquilidad financiera frente a los gastos de atención médica, que pudieran derivarse de un accidente o enfermedad grave.",
    ],
    heroImage: "/humana-historia-hero.png",
    coverageTables: [
      {
        title: "Proteger F-G-H",
        columns: ["Cobertura"],
        rows: [
          { label: "COBERTURAS", values: [""] },
          { label: "Límite máximo de cobertura por incapacidad", values: ["$500.000"] },
          { label: "Red en convenio", values: ["MetroHumana"] },
          { label: "Montos por deducible", values: ["$5.000 / $10.000 / $20.000"] },
          { label: "ATENCIÓN AMBULATORIA", values: [""] },
          { label: "Consulta", values: ["100% hasta $80"] },
          { label: "Exámenes de diagnóstico", values: ["100%"] },
          { label: "Medicinas", values: ["100%"] },
          { label: "ATENCIÓN HOSPITALARIA", values: [""] },
          { label: "Hospitalización", values: ["100%"] },
          { label: "Cuarto y alimentación diaria", values: ["Hasta el monto de cobertura"] },
          { label: "OTROS BENEFICIOS", values: [""] },
          { label: "Cirugía reconstructiva y rehabilitación por enfermedades oncológicas, incluyendo implantes", values: ["Hasta el monto de cobertura"] },
          { label: "Trasplante de órganos", values: ["Hasta $250.000"] },
        ],
      },
    ],
    coverageNotes: [
      "Cobertura durante toda tu vida, sin límite de edad.",
      "Atención en los mejores hospitales y clínicas en convenio con Humana, o a través de prestadores de tu elección.",
    ],
    mainBenefits: [
      { icon: "cross", label: "Cobertura para cirugía reconstructiva y rehabilitación" },
      { icon: "heartpulse", label: "Cobertura integral de trasplante de órganos" },
      { icon: "droplets", label: "Cobertura para diálisis y hemodiálisis" },
      { icon: "hearthandshake", label: "Cuidados paliativos" },
      { icon: "activity", label: "Terapia de rehabilitación" },
      { icon: "ambulance", label: "Ambulancia terrestre" },
    ],
    lifeInsurance: {
      title: "Seguro de vida",
      description: "El Plan Proteger cuenta con un seguro de vida de 5.000 dólares (muerte por cualquier causa) para todos los afiliados del contrato que tengan 18 a 64 años de edad.",
    },
    checkup: {
      title: "Chequeo médico anual sin costo",
      note: "Solicita tu chequeo al 1800 Humana (48 62 62) o mediante WhatsApp",
      tableTitle: "PAQUETE · Metrored",
      items: [
        "Uroanálisis EMO",
        "Biometría hemática",
        "Glucosa",
        "Triglicéridos",
        "Colesterol",
        "HDI-LDL",
        "Consulta médica general o pediatra",
        "Coproparasitario simple",
        "Chequeo Optometría",
        "Profilaxis dental (certificado)",
      ],
      procedureCount: "10",
      conditions: [
        "Uno al año por contrato para titular o dependientes afiliados.",
        "Aplica con carta de autorización que recibirá en el lapso de 8 horas hábiles luego del ingreso de la solicitud.",
        "Sin carencia.",
        "Vigencia para utilizar chequeo 90 días luego de la emisión de tu plan.",
        "Chequeo médico se lo realiza en la red centros médicos Metrored en Quito o Guayaquil.",
      ],
    },
    huPlus: {
      title: "Asistencias HU PLUS",
      categories: ["Personal", "Mascotas", "Hogar"],
      description: "Como usuario de este plan, tiene acceso a la Asistencia Hu Assist Plus, para activarla puede llamar al 1800 Humana (48 62 62), o comunicarse con nosotros mediante WhatsApp. Para más información sobre esta asistencia puede visitar este artículo.",
    },
    faqTitle: "Preguntas frecuentes Plan Proteger",
    faqs: [
      {
        question: "¿Qué cubre el Plan Proteger de Humana?",
        answer: [
          "El Plan Proteger está diseñado para ofrecer protección ante enfermedades y accidentes graves hasta $500.000 de cobertura vitalicia",
        ],
      },
      { question: "¿Cuánto cuesta el Plan Proteger y qué formas de pago están disponibles?" },
      { question: "¿Qué enfermedades graves están cubiertas en el plan?" },
      { question: "¿Desde cuándo entra en vigencia la cobertura?" },
      { question: "¿Cómo funcionan los deducibles y cómo afectan mi cobertura?" },
      { question: "¿Este plan funciona como un seguro médico o es un complemento?" },
      { question: "¿Qué diferencia hay entre el Plan Proteger y un seguro médico tradicional?" },
      { question: "¿El plan cubre atenciones fuera de la red de Humana?" },
      { question: "¿Cómo puedo afiliarme al Plan Proteger?" },
    ],
  },
  {
    slug: "individual-familiar",
    name: "Individual y Familiar",
    eyebrow: "Planes médicos para Personas",
    title: "Plan Individual",
    description: [
      "Un plan de medicina individual y familiar, te permiten mantener un respaldo económico y médico en caso de una enfermedad o accidente.",
      "Te permite acceso oportuno a hospitales, clínicas, médicos, centros médicos, laboratorios, farmacias con cobertura directa por parte de la empresa o bajo la modalidad de pago y luego reembolso, para ti y los tuyos.",
      "Te invitamos a que consultes las opciones de cobertura de salud, beneficios y prestaciones de cada plan, con el fin de que escojas la opción que mejor se adapta a tus necesidades.",
    ],
    heroImage: "/familia-humana.png",
    coverageTables: [
      {
        title: "Cobertura de salud",
        columns: ["PH15", "PH30", "MH50", "MH80", "MH150"],
        rows: [
          { label: "Tipo de cobertura", values: ["Anual", "Anual", "Cobertura por incapacidad", "Cobertura por incapacidad", "Cobertura por incapacidad"] },
          { label: "Monto máximo por persona", values: ["$15.000", "$30.000", "$50.000", "$80.000", "$150.000"] },
          { label: "Deducible anual por persona", values: ["$50", "$60", "$80", "$200", "$150"] },
          { label: "Red Humana", values: ["Practihumana", "Practihumana", "Metrohumana", "Metrohumana", "Metrohumana"] },
          { label: "Hospitales referenciales", values: ["Northospital (Quito) / Hospital Clínica San Francisco (Guayaquil)", "Northospital (Quito) / Hospital Clínica San Francisco (Guayaquil)", "Hospital Metropolitano (Quito) / Omni Hospital (Guayaquil)", "Hospital Metropolitano (Quito) / Omni Hospital (Guayaquil)", "Hospital Metropolitano (Quito) / Omni Hospital (Guayaquil)"] },
          { label: "Hospitalización cobertura de hasta el", values: ["90%", "90%", "90%", "80%", "90%"] },
          { label: "Exámenes de diagnóstico cobertura de hasta el", values: ["90%", "90%", "90%", "80%", "90%"] },
          { label: "Consultas médicas desde", values: ["$4,00", "$4,00", "$4,00", "$4,00", "$4,00"] },
          { label: "Medicinas cobertura de hasta el", values: ["90%", "90%", "90%", "90%", "90%"] },
        ],
      },
      {
        title: "Beneficios incluidos",
        columns: ["PH15", "PH30", "MH50", "MH80", "MH150"],
        rows: [
          { label: "Seguro de vida", values: ["check", "check", "check", "check", "check"] },
          { label: "Asistencia exequial", values: ["check", "check", "check", "check", "check"] },
          { label: "Ambulancia terrestre", values: ["check", "check", "check", "check", "check"] },
          { label: "Médico a domicilio", values: ["x", "x", "check", "check", "check"] },
          { label: "Asistencia en viaje", values: ["x", "x", "check", "check", "check"] },
          { label: "Teleconsulta", values: ["check", "check", "check", "check", "check"] },
          { label: "Medicinas a domicilio", values: ["check", "check", "check", "check", "check"] },
        ],
      },
    ],
    faqTitle: "Preguntas Frecuentes del Plan Individual y Familiar",
    faqs: [
      {
        question: "¿Qué cobertura de salud posee el Plan Individual y Familiar de Humana?",
        answer: [
          "El Plan Individual y Familiar de Humana ofrece una cobertura de salud integral, incluyendo consultas médicas, hospitalización, cirugías, exámenes de laboratorio, imágenes, emergencias, medicinas y atención preventiva. También cubre maternidad y atención médica para niños, dependiendo del plan contratado.",
        ],
      },
      { question: "¿Cuáles son los beneficios de afiliarme a este plan?" },
      { question: "¿Cuánto cuesta el plan y qué formas de pago aceptan?" },
      { question: "¿Desde qué momento entra en vigencia mi cobertura?" },
      { question: "¿Puedo incluir a mis hijos o cónyuge en el plan?" },
      { question: "¿Puedo usar el plan si estoy fuera de mi ciudad o en otro país?" },
      { question: "¿En qué lugares puedo recibir atención médica u hospitalaria?" },
      { question: "¿Cómo funcionan los reembolsos si me atiendo fuera de la red de Humana?" },
      { question: "¿Cómo puedo afiliarme y qué requisitos necesito?" },
    ],
  },
];
