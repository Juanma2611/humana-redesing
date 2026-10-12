export type BlogBodyBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "cta"; text: string; label: string; href: string };

// ============================================================================
// CONTENIDO DE MUESTRA — NO SON POSTS REALES.
//
// Por decisión confirmada (Hiro, diseño web): los posts del blog NO se
// migran a este proyecto. Los artículos reales pasarán directamente de
// WordPress a WordPress cuando se programe el sitio final. El importador
// en scripts/import-wordpress-posts.ts queda guardado pero sin usar.
//
// Estos 3 artículos existen solo para mostrar cómo luce el diseño del
// blog (listado, categoría y plantilla de artículo) con contenido real
// maquetado: título, fecha, categoría, imagen, cuerpo con H2/H3, listas,
// cita destacada y CTA. El texto fue redactado para esta maqueta y NO
// debe tratarse como contenido oficial de Humana ni publicarse tal cual.
//
// Los 3 usan la categoría "bienestar" porque la Home muestra siempre 3
// posts de esa categoría (ver app/page.tsx) — así la Home conserva su
// diseño aprobado de 3 tarjetas sin alterar texto ni estructura.
// ============================================================================
export type SampleBlogPost = {
  slug: string;
  category: string;
  date: string;
  categoryLabel: string;
  image: string;
  title: string;
  copy: string;
  body: BlogBodyBlock[];
  /** Contenido de muestra para la plantilla visual, no un post oficial. */
  provisional: true;
};

export const provisionalBlogPosts: SampleBlogPost[] = [
  {
    slug: "cual-es-la-diferencia-entre-medicina-prepagada-y-seguro-medico",
    category: "bienestar",
    categoryLabel: "Bienestar",
    date: "Sep 4, 2026",
    image: "/blog/blog-02.jpg",
    title: "¿Cuál es la diferencia entre medicina prepagada y seguro médico?",
    copy: "Aunque suelen usarse como sinónimos, la medicina prepagada y el seguro médico poseen diferencias estructurales, operativas y de regulación en Ecuador. Conocer las características distintivas de cada modalidad te permitirá tomar la decisión más idónea para la protección de tu salud y la de tu familia.",
    provisional: true,
    body: [
      {
        type: "p",
        text: "En el ámbito de la salud privada en Ecuador, es muy frecuente escuchar de manera indistinta los términos «medicina prepagada» y «seguro médico de asistencia médica». Sin embargo, aunque ambos tienen la finalidad de proteger la salud y la economía familiar ante eventualidades médicas, existen diferencias clave en su funcionamiento, enfoque asistencial y marcos normativos.",
      },
      {
        type: "p",
        text: "Entender estas diferencias facilita la elección del servicio que mejor se adapte al estilo de vida, hábitos y presupuesto de cada persona u hogar.",
      },
      {
        type: "h2",
        text: "¿Por qué suele haber confusión entre ambos conceptos?",
      },
      {
        type: "p",
        text: "La confusión surge porque ambas opciones brindan acceso a clínicas privadas, atención médica especializada y la posibilidad de mitigar gastos elevados en emergencias. No obstante, la forma en que se presta el servicio y la relación contractual con los médicos prestadores varía sensiblemente.",
      },
      {
        type: "h2",
        text: "Diferencias clave entre medicina prepagada y seguro médico",
      },
      {
        type: "h3",
        text: "Modelo y enfoque de servicio",
      },
      {
        type: "ul",
        items: [
          "Medicina Prepagada: Se enfoca en la prestación directa e integral de servicios de salud. Promueve activamente la medicina preventiva, chequeos frecuentes y la atención primaria continua, además del amparo hospitalario.",
          "Seguro Médico: Se fundamenta en un principio indemnizatorio o de reembolso financiero frente a la ocurrencia de un siniestro (enfermedad o accidente). Tradicionalmente se orienta más a la cobertura de grandes eventos hospitalarios o de alto costo.",
        ],
      },
      {
        type: "h3",
        text: "Modalidad de pago y redes de atención",
      },
      {
        type: "ul",
        items: [
          "Medicina Prepagada: Prioriza la utilización de redes cerradas o abiertas de prestadores (médicos y clínicas con convenio) donde el afiliado accede mediante atención médica directa o copago de menor cuantía, sin necesidad de desembolsar la totalidad del costo.",
          "Seguro Médico: Suele basarse con mayor frecuencia en la modalidad de reembolso (el paciente paga al prestador y luego presenta las facturas para recuperar un porcentaje estipulado), aunque también existen pólizas con crédito directo hospitalario.",
        ],
      },
      {
        type: "h3",
        text: "Regulación y normativa en Ecuador",
      },
      {
        type: "p",
        text: "Ambos esquemas están supeditados a la Ley Orgánica que Regula las Compañías que Presten Servicios de Medicina Prepagada y a las Seguridades Privadas, garantizando la protección de los derechos de los usuarios y el cumplimiento obligatorio de coberturas mínimas para enfermedades preexistentes y catastróficas.",
      },
      {
        type: "quote",
        text: "La medicina prepagada prioriza acompañarte antes de que algo pase; el seguro médico prioriza respaldarte después de que algo pasó.",
      },
      {
        type: "h2",
        text: "¿Cuál opción conviene elegir según tus necesidades?",
      },
      {
        type: "ul",
        items: [
          "Elige Medicina Prepagada si: Buscas un aliado constante para el cuidado integral de la salud, valoras las consultas preventivas continuas, prefieres la atención directa en clínicas asociadas sin tener que tramitar reembolsos constantes y deseas asistencia médica cercana para toda la familia.",
          "Elige un Seguro Médico si: Requieres principalmente una protección financiera ante eventualidades hospitalarias de gran magnitud, o si acostumbras atenderte exclusivamente con médicos particulares fuera de cualquier red y prefieres el esquema de reembolso.",
        ],
      },
      {
        type: "p",
        text: "Analizar las diferencias entre medicina prepagada y seguro de asistencia médica te ayuda a invertir inteligentemente en tranquilidad. Contar con un modelo que priorice la prevención y la rapidez en la atención marca un estándar superior en el cuidado de la vida.",
      },
      {
        type: "cta",
        text: "¿Quieres un plan que te acompañe antes y después de que algo pase?",
        label: "Explora los planes de Humana",
        href: "/planes-medicos/",
      },
    ],
  },
  {
    slug: "que-cubre-realmente-una-cobertura-medica-en-ecuador",
    category: "bienestar",
    categoryLabel: "Bienestar",
    date: "Ago 30, 2026",
    image: "/blog/blog-03.jpg",
    title: "¿Qué cubre realmente una cobertura médica en Ecuador?",
    copy: "Muchas personas se preguntan qué servicios incluye efectivamente su plan de salud. Conocer el alcance real de una cobertura médica en Ecuador desde consultas ambulatorias hasta procedimientos quirúrgicos complejos es fundamental para aprovechar al máximo sus beneficios y evitar contratiempos financieros.",
    provisional: true,
    body: [
      {
        type: "p",
        text: "Al contratar una cobertura médica privada, una de las preguntas más frecuentes es: ¿hasta dónde llega la protección de mi plan? Aunque la percepción general es que se utiliza principalmente para emergencias u hospitalizaciones, la realidad es que un plan integral acompaña al usuario en todas las etapas del cuidado de la salud.",
      },
      {
        type: "p",
        text: "Saber qué servicios están amparados te permite planificar chequeos rutinarios, atender dolencias menores y enfrentar complicaciones mayores con respaldo económico absoluto.",
      },
      {
        type: "h2",
        text: "¿Por qué es importante conocer los alcances de tu cobertura?",
      },
      {
        type: "p",
        text: "Un error común es asumir que todas las coberturas funcionan de la misma manera o que cubren cualquier tipo de procedimiento. Conocer las prestaciones incluidas evita malos entendidos al momento de solicitar reembolsos o autorizaciones para procedimientos médicos.",
      },
      {
        type: "p",
        text: "Además, al conocer tus beneficios activos, puedes aprovechar servicios de medicina preventiva que muchas veces están incluidos y no se utilizan por falta de información.",
      },
      {
        type: "h2",
        text: "Servicios que ampara una cobertura médica integral",
      },
      {
        type: "h3",
        text: "Atención ambulatoria",
      },
      {
        type: "p",
        text: "Incluye las consultas con médicos generales y especialistas (pediatría, ginecología, cardiología, etc.), además de exámenes de laboratorio clínico e imágenes de diagnóstico (radiografías, ecografías, resonancias magnéticas).",
      },
      {
        type: "h3",
        text: "Atención de emergencias",
      },
      {
        type: "p",
        text: "Cobertura inmediata frente a eventos fortuitos, accidentes o dolencias agudas que requieran estabilización médica en centros de salud y áreas de urgencia hospitalaria.",
      },
      {
        type: "h3",
        text: "Hospitalización y cirugías",
      },
      {
        type: "p",
        text: "Cubre los costos de alojamiento hospitalario, quirófano, honorarios médicos y quirúrgicos, anestesia, medicamentos administrados durante la estancia e insumos médicos.",
      },
      {
        type: "h3",
        text: "Maternidad y cuidado del recién nacido",
      },
      {
        type: "p",
        text: "Atención del parto normal o cesárea, controles prenatales y la primera atención médica especializada para el recién nacido, sujeto a las condiciones contratadas.",
      },
      {
        type: "h3",
        text: "Medicamentos recetados",
      },
      {
        type: "p",
        text: "Descuentos o cobertura por reembolso en medicinas indicadas por el médico tratante para tratamientos ambulatorios.",
      },
      {
        type: "h3",
        text: "Servicios auxiliares y ambulancia",
      },
      {
        type: "p",
        text: "Transporte terrestre de emergencia, atenciones médicas domiciliarias y tratamientos de rehabilitación o fisioterapia postoperatoria.",
      },
      {
        type: "quote",
        text: "Un plan integral no se usa solo cuando algo sale mal: acompaña cada etapa, desde el chequeo preventivo hasta la cirugía de mayor complejidad.",
      },
      {
        type: "h2",
        text: "Aspectos que generalmente requieren revisión o cláusulas especiales",
      },
      {
        type: "ul",
        items: [
          "Enfermedades preexistentes: Condiciones diagnosticadas antes de la contratación que requieren cumplir periodos de carencia o montos específicos regulados por ley.",
          "Tratamientos estéticos o cosméticos: Procedimientos que no responden a una necesidad médica o reconstructiva.",
          "Procedimientos experimentales: Tratamientos que no cuentan con validación o registro sanitario oficial en el país.",
        ],
      },
      {
        type: "p",
        text: "Tener claridad sobre los alcances de tu plan te permite tomar el control total de la salud familiar. Desde una simple prueba de rutina hasta una intervención de alta complejidad, estar respaldado garantiza un acceso ágil y de calidad superior.",
      },
      {
        type: "cta",
        text: "¿Quieres conocer exactamente qué incluye cada plan?",
        label: "Compara los planes de Humana",
        href: "/planes-medicos/",
      },
    ],
  },
  {
    slug: "la-disciplina-tambien-es-bienestar-como-el-deporte-transforma-tu-vida",
    category: "bienestar",
    categoryLabel: "Bienestar",
    date: "Jun 21, 2026",
    image: "/blog/blog-15.jpg",
    title: "La disciplina también es bienestar: cómo el deporte transforma tu vida.",
    copy: "La disciplina también es bienestar: cómo el deporte transforma tu vida. El bienestar no se construye de un día para otro. Se forma en lo cotidiano, en las decisiones pequeñas que repetimos incluso cuando no tenemos ganas, y en los hábitos que, con el tiempo, empiezan...",
    provisional: true,
    body: [
      {
        type: "p",
        text: "El bienestar no se construye de un día para otro. Se forma en lo cotidiano, en las decisiones pequeñas que repetimos incluso cuando no tenemos ganas, y en los hábitos que, con el tiempo, empiezan a definir cómo nos sentimos. En ese proceso, la disciplina suele ser vista como una exigencia, cuando en realidad puede convertirse en una herramienta para cuidarnos mejor.",
      },
      {
        type: "p",
        text: "En el contexto del deporte, esta idea toma aún más sentido. La disciplina no se trata únicamente de cumplir con una rutina o alcanzar un objetivo físico, sino de sostener prácticas que generan equilibrio. Es aprender a organizar el tiempo, respetar los procesos y entender que el bienestar es resultado de la constancia, no de la perfección.",
      },
      {
        type: "h2",
        text: "El cuerpo se activa, la mente se ordena",
      },
      {
        type: "p",
        text: "A través del movimiento, el cuerpo encuentra una forma de activarse, pero también la mente logra ordenarse. El ejercicio físico tiene un impacto directo en la salud emocional, ayudando a reducir el estrés, mejorar el estado de ánimo y fortalecer la autoestima. Por eso, incorporar actividad física en la rutina no solo responde a una meta estética o de rendimiento, sino a una necesidad integral de bienestar.",
      },
      {
        type: "p",
        text: "En este camino, el entorno también juega un rol clave. El deporte, especialmente cuando se vive en equipo, permite construir redes de apoyo donde se aprende a confiar, a gestionar la frustración y a sostener el compromiso. Estas experiencias, aunque se desarrollen en un contexto deportivo, se trasladan fácilmente a la vida diaria, influyendo en la forma en que enfrentamos desafíos personales y profesionales.",
      },
      {
        type: "quote",
        text: "La disciplina deja de ser una obligación y se transforma en una decisión personal: una forma de priorizarse y de construir una base sólida para el bienestar.",
      },
      {
        type: "h2",
        text: "La disciplina también vive en el descanso",
      },
      {
        type: "p",
        text: "Sin embargo, la disciplina no se limita al momento de entrenar. También está presente en el descanso, en la alimentación y en la capacidad de escuchar al propio cuerpo. Entender cuándo avanzar y cuándo detenerse es parte de un equilibrio necesario para mantener hábitos saludables en el tiempo.",
      },
      {
        type: "p",
        text: "Muchas veces se cree que para generar cambios se necesitan grandes esfuerzos, pero la realidad es que el bienestar comienza con pequeños pasos.",
      },
      {
        type: "h3",
        text: "Tres claves para sostener el hábito",
      },
      {
        type: "ul",
        items: [
          "Elegir una actividad que genere disfrute, para facilitar la constancia en el tiempo.",
          "Mantener cierta regularidad, sin exigirse la perfección desde el primer día.",
          "Evitar comparaciones: el punto de partida de cada persona es distinto.",
        ],
      },
      {
        type: "p",
        text: "En consecuencia, el deporte se convierte en una herramienta que va más allá de lo físico. Permite desarrollar constancia, mejorar la calidad de vida y fortalecer la conexión entre cuerpo y mente. No se trata de alcanzar un ideal, sino de avanzar de forma consciente hacia una vida más equilibrada.",
      },
      {
        type: "p",
        text: "Hoy, más que nunca, entender la disciplina como un acto de autocuidado permite resignificar la manera en que nos relacionamos con el bienestar. Porque moverse también es escucharse, y construir hábitos sostenibles es una forma de vivir mejor.",
      },
      {
        type: "cta",
        text: "Cuida tu cuerpo y tu mente con un plan que te acompaña todos los días, no solo en la emergencia.",
        label: "Conoce los planes de Humana",
        href: "/planes-medicos/",
      },
    ],
  },
];

export const contactBlocks = [
  { icon: "store", label: "Conoce más en:", value: "humana.med.ec/planes-medicos/", href: "https://humana.med.ec/planes-medicos/" },
  { icon: "mail", label: "Correo:", value: "servicioalcliente@humana.med.ec", href: "mailto:servicioalcliente@humana.med.ec" },
  { icon: "whatsapp", label: "WhatsApp:", value: "+593 2401 7802", href: "https://wa.me/59324017802" },
  { icon: "phone", label: "Atención Telefónica:", value: "1800 HUMANA (48 62 62)", href: "tel:1800486262" },
  { icon: "globe", label: "Oficina Virtual:", value: "humana.med.ec/oficina-virtual", href: "https://humana.med.ec/oficina-virtual" },
  { icon: "app", label: "Descarga la app:", value: "\"Mi Humana\" en App Store o Google Play", href: "https://apps.apple.com/ec/search?term=mi%20humana" },
  { icon: "quote", label: "Cotiza tu nuevo plan:", value: "humana.med.ec/cotizador/", href: "https://humana.med.ec/cotizador/" },
];
