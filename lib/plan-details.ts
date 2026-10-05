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
          { label: "Médico a domicilio", values: ["check", "check", "check", "check", "check"] },
          { label: "Asistencia en viaje", values: ["x", "x", "check", "check", "check"] },
          { label: "Teleconsulta", values: ["check", "check", "check", "check", "check"] },
          { label: "Medicinas a domicilio", values: ["check", "check", "check", "check", "check"] },
        ],
      },
    ],
    // ⚠️ Nota para el equipo (no mostrar al público): el sitio oficial tiene una inconsistencia
    // entre esta tabla comparativa y la pestaña propia de MH80 dentro de la misma página oficial:
    // la pestaña indica deducible $100 y 90% en hospitalización/exámenes, mientras que la tabla
    // comparativa y la página propia de MH80 (metrohumana80/) indican $200 y 80%. Aquí se usan
    // los valores de la página propia de MH80 ($200 / 80%) tal como pidió el equipo comercial.
    // Pendiente de validar y unificar con Comercial antes de corregir el sitio oficial.
    faqTitle: "Preguntas Frecuentes del Plan Individual y Familiar",
    faqs: [
      {
        question: "¿Qué cobertura de salud posee el Plan Individual y Familiar de Humana?",
        answer: [
          "El Plan Individual y Familiar de Humana ofrece una cobertura de salud integral, incluyendo consultas médicas, hospitalización, cirugías, exámenes de laboratorio, imágenes, emergencias, medicinas y atención preventiva. También cubre maternidad y atención médica para niños, dependiendo del plan contratado.",
        ],
      },
      {
        question: "¿Cuáles son los beneficios de afiliarme a este plan?",
        answer: [
          "Este plan te brinda seguridad y tranquilidad con acceso a una amplia red de prestadores de salud en todo el país, atención médica de calidad, reembolsos en caso de atención fuera de la red, cobertura en emergencias y descuentos en farmacias y laboratorios aliados.",
        ],
      },
      {
        question: "¿Cuánto cuesta el plan y qué formas de pago aceptan?",
        answer: [
          "El costo del plan varía según la edad, sexo y el número de personas incluidas en la cobertura. Aceptamos pagos con tarjetas de crédito, débito, transferencias bancarias y débitos automáticos para mayor comodidad. También ofrecemos opciones de pago mensual, trimestral o anual.",
        ],
      },
      {
        question: "¿Desde qué momento entra en vigencia mi cobertura?",
        answer: [
          "La cobertura de salud inicia una vez finalizado el proceso de afiliación y aprobado el contrato. Sin embargo, algunos beneficios tienen períodos de carencia, como la cobertura de maternidad y cirugías programadas. Vas a poder usar el plan luego de los siguientes tiempos de espera:",
          "Emergencia médica vital: 24 horas.",
          "Ambulatoria (atención que no requiere hospitalización): luego de 30 días.",
          "Hospitalaria: 90 días.",
          "Maternidad (inicio): planificar inicio de embarazo luego de 60 días.",
          "Discapacidades declaradas: 90 días.",
          "Enfermedades preexistentes declaradas: Planes metrohumana desde el 7mo mes · Planes practihumana desde el mes 24.",
          "Montos y coberturas para preexistencias y discapacidades aplican según condiciones del plan contratado.",
        ],
      },
      {
        question: "¿Puedo incluir a mis hijos o cónyuge en el plan?",
        answer: [
          "Sí, este plan está diseñado para cubrir a toda la familia. Puedes incluir a tu cónyuge, hijos y otros dependientes hasta el 4to grado de consanguinidad, asegurando su acceso a servicios de salud de calidad.",
        ],
      },
      {
        question: "¿Puedo usar el plan si estoy fuera de mi ciudad o en otro país?",
        answer: [
          "Sí, en caso de emergencias médicas, Humana cuenta con una cobertura de asistencia internacional y reembolsos para atenciones fuera de la red nacional, según las condiciones de tu plan.",
        ],
      },
      {
        question: "¿En qué lugares puedo recibir atención médica u hospitalaria?",
        answer: [
          "Puedes consultar la red de prestadores desde nuestra página web o aplicación móvil. También contamos con líneas de atención al cliente que te ayudarán a encontrar el médico o centro más cercano, pero debes tomar en cuenta lo siguiente:",
          "Plan metrohumana: puedes acceder al Hospital Metropolitano y a más de 20 hospitales a nivel nacional. Puedes recibir atención con tus médicos de confianza o de convenio y acceder a los mejores centros médicos a nivel nacional.",
          "Plan practihumana: para una mejor atención puedes acceder a 14 hospitales en convenio y usar la red de médicos y centros médicos exclusivos para esta cobertura. Con este plan no es recomendable usar hospitales o médicos fuera de la red direccionada.",
        ],
      },
      {
        question: "¿Cómo funcionan los reembolsos si me atiendo fuera de la red de Humana?",
        answer: [
          "Si te atiendes en un centro médico fuera de nuestra red, puedes solicitar un reembolso enviando los documentos requeridos a través de nuestros canales digitales o sucursales. La cobertura y el porcentaje de reembolso dependerán del plan contratado.",
        ],
      },
      {
        question: "¿Cómo puedo afiliarme y qué requisitos necesito?",
        answer: [
          "El proceso es sencillo. Solo necesitas presentar tu cédula y llenar la solicitud de afiliación. Puedes hacerlo en línea, en nuestras oficinas o con un asesor comercial. Si se requiere evaluación médica, te lo informaremos en el proceso.",
        ],
      },
    ],
  },
  {
    // Practihumana50: existe como URL propia en el sitio oficial, pero no aparece en la
    // tabla comparativa ni en la navegación "Planes individuales" de /plan-individual-y-familiar/.
    // Por eso no se enlaza desde ningún menú ni desde esa tabla comparativa en este sitio tampoco.
    slug: "practihumana50",
    name: "Practihumana50",
    eyebrow: "Planes médicos para Personas",
    title: "Practihumana50",
    description: [
      "Plan integral para ti y tu familia con una cobertura de hasta $50.000 anuales por persona. Cuentas con una importante red de prestadores de servicios médicos, como Northospital en Quito, el Hospital Clínica San Francisco en Guayaquil y otros en el resto del país.",
    ],
    heroImage: "https://humana.med.ec/wp-content/uploads/2020/12/1-practi-humana-50-215.png",
    coverageTables: [
      {
        title: "Cobertura",
        columns: ["Practihumana50"],
        rows: [
          { label: "Cobertura anual por persona", values: ["$50.000"] },
          { label: "Deducible anual por persona", values: ["$80"] },
          { label: "Red Humana", values: ["Practihumana"] },
          { label: "Hospitales referenciales", values: ["Northospital (Quito) / Hospital Clínica San Francisco (Guayaquil)"] },
          { label: "Hospitalización, cobertura de hasta el", values: ["90%"] },
          { label: "Consultas médicas desde", values: ["$4,50"] },
          { label: "Exámenes de diagnóstico, cobertura de hasta el", values: ["90%"] },
          { label: "Medicinas, cobertura de hasta el", values: ["90%"] },
        ],
      },
    ],
    faqTitle: "",
    faqs: [],
  },
];
