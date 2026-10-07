export type BlogBodyBlock =
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

// CONTENIDO PROVISIONAL — reemplazar por el texto oficial de WordPress.
// Estos 10 artículos tienen slug y categoría oficiales (coinciden con el
// sitemap de humana.med.ec), pero el texto fue redactado de nuevo y NO es
// el contenido real migrado. Se muestran solo para revisar el diseño.
// No cuentan como posts migrados hasta que se reemplacen con el importador
// de WordPress (ver scripts/import-wordpress-posts.ts).
export type ProvisionalBlogPost = {
  slug: string;
  category: string;
  date: string;
  categoryLabel: string;
  image: string;
  title: string;
  copy: string;
  body: BlogBodyBlock[];
  provisional: true;
};

export const provisionalBlogPosts: ProvisionalBlogPost[] = [
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
        "type": "p",
        "text": "En el ámbito de la salud privada en Ecuador, es muy frecuente escuchar de manera indistinta los términos «medicina prepagada» y «seguro médico de asistencia médica». Sin embargo, aunque ambos tienen la finalidad de proteger la salud y la economía familiar ante eventualidades médicas, existen diferencias clave en su funcionamiento, enfoque asistencial y marcos normativos."
      },
      {
        "type": "p",
        "text": "Entender estas diferencias facilita la elección del servicio que mejor se adapte al estilo de vida, hábitos y presupuesto de cada persona u hogar."
      },
      {
        "type": "h3",
        "text": "¿Por qué suele haber confusión entre ambos conceptos?"
      },
      {
        "type": "p",
        "text": "La confusión surge porque ambas opciones brindan acceso a clínicas privadas, atención médica especializada y la posibilidad de mitigar gastos elevados en emergencias. No obstante, la forma en que se presta el servicio y la relación contractual con los médicos prestadores varía sensiblemente."
      },
      {
        "type": "h3",
        "text": "Diferencias clave entre Medicina Prepagada vs Seguro Médico"
      },
      {
        "type": "h3",
        "text": "Modelo y enfoque de servicio"
      },
      {
        "type": "ul",
        "items": [
          "Medicina Prepagada: Se enfoca en la prestación directa e integral de servicios de salud. Promueve activamente la medicina preventiva, chequeos frecuentes y la atención primaria continua, además del amparo hospitalario.",
          "Seguro Médico: Se fundamenta en un principio indemnizatorio o de reembolso financiero frente a la ocurrencia de un siniestro (enfermedad o accidente). Tradicionalmente se orienta más a la cobertura de grandes eventos hospitalarios o de alto costo."
        ]
      },
      {
        "type": "h3",
        "text": "Modalidad de pago y redes de atención"
      },
      {
        "type": "ul",
        "items": [
          "Medicina Prepagada: Prioriza la utilización de redes cerradas o abiertas de prestadores (médicos y clínicas con convenio) donde el afiliado accede mediante atención médica directa o copago de menor cuantía, sin necesidad de desembolsar la totalidad del costo.",
          "Seguro Médico: Suele basarse con mayor frecuencia en la modalidad de reembolso (el paciente paga al prestador y luego presenta las facturas para recuperar un porcentaje estipulado), aunque también existen pólizas con crédito directo hospitalario."
        ]
      },
      {
        "type": "h3",
        "text": "Regulación y normativa en Ecuador"
      },
      {
        "type": "p",
        "text": "Ambos esquemas están supeditados a la Ley Orgánica que Regula las Compañías que Presten Servicios de Medicina Prepagada y a las Seguridades Privadas, garantizando la protección de los derechos de los usuarios y el cumplimiento obligatorio de coberturas mínimas para enfermedades preexistentes y catastróficas."
      },
      {
        "type": "h3",
        "text": "¿Cuál opción conviene elegir según tus necesidades?"
      },
      {
        "type": "ul",
        "items": [
          "Elige Medicina Prepagada si: Buscas un aliado constante para el cuidado integral de la salud, valoras las consultas preventivas continuas, prefieres la atención directa en clínicas asociadas sin tener que tramitar reembolsos constantes y deseas asistencia médica cercana para toda la familia.",
          "Elige un Seguro Médico si: Requieres principalmente una protección financiera ante eventualidades hospitalarias de gran magnitud, o si acostumbras atenderte exclusivamente con médicos particulares fuera de cualquier red y prefieres el esquema de reembolso."
        ]
      },
      {
        "type": "h3",
        "text": "Decisiones informadas para el bienestar familiar"
      },
      {
        "type": "p",
        "text": "Analizar las diferencias entre medicina prepagada y seguro de asistencia médica te ayuda a invertir inteligentemente en tranquilidad. Contar con un modelo que priorice la prevención y la rapidez en la atención marca un estándar superior en el cuidado de la vida."
      },
      {
        "type": "p",
        "text": "Evalúa junto a tu familia cuál es el mecanismo asistencial que mejor responde a sus dinámicas de salud diarias y proyecciones a largo plazo."
      },
      {
        "type": "p",
        "text": "Si deseas disfrutar de los beneficios de un plan de medicina prepagada pensado para el bienestar integral de tu familia, explora la propuesta de Humana y cotiza la mejor opción."
      }
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
        "type": "p",
        "text": "Al contratar una cobertura médica privada, una de las preguntas más frecuentes es: ¿hasta dónde llega la protección de mi plan? Aunque la percepción general es que se utiliza principalmente para emergencias u hospitalizaciones, la realidad es que un plan integral acompaña al usuario en todas las etapas del cuidado de la salud."
      },
      {
        "type": "p",
        "text": "Saber qué servicios están amparados te permite planificar chequeos rutinarios, atender dolencias menores y enfrentar complicaciones mayores con respaldo económico absoluto."
      },
      {
        "type": "h3",
        "text": "¿Por qué es importante conocer los alcances de tu cobertura?"
      },
      {
        "type": "p",
        "text": "Un error común es asumir que todas las coberturas funcionan de la misma manera o que cubren cualquier tipo de procedimiento. Conocer las prestaciones incluidas evita malos entendidos al momento de solicitar reembolsos o autorizaciones para procedimientos médicos."
      },
      {
        "type": "p",
        "text": "Además, al conocer tus beneficios activos, puedes aprovechar servicios de medicina preventiva que muchas veces están incluidos y no se utilizan por falta de información."
      },
      {
        "type": "h3",
        "text": "Servicios que ampara una cobertura médica integral"
      },
      {
        "type": "h3",
        "text": "Atención ambulatoria"
      },
      {
        "type": "p",
        "text": "Incluye las consultas con médicos generales y especialistas (pediatría, ginecología, cardiología, etc.), además de exámenes de laboratorio clínico e imágenes de diagnóstico (radiografías, ecografías, resonancias magnéticas)."
      },
      {
        "type": "h3",
        "text": "Atención de emergencias"
      },
      {
        "type": "p",
        "text": "Cobertura inmediata frente a eventos fortuitos, accidentes o dolencias agudas que requieran estabilización médica en centros de salud y áreas de urgencia hospitalaria."
      },
      {
        "type": "h3",
        "text": "Hospitalización y cirugías"
      },
      {
        "type": "p",
        "text": "Cubre los costos de alojamiento hospitalario, quirófano, honorarios médicos y quirúrgicos, anestesia, medicamentos administrados durante la estancia e insumos médicos."
      },
      {
        "type": "h3",
        "text": "Maternidad y cuidado del recién nacido"
      },
      {
        "type": "p",
        "text": "Atención del parto normal o cesárea, controles prenatales y la primera atención médica especializada para el recién nacido, sujeto a las condiciones contratadas."
      },
      {
        "type": "h3",
        "text": "Medicamentos recetados"
      },
      {
        "type": "p",
        "text": "Descuentos o cobertura por reembolso en medicinas indicadas por el médico tratante para tratamientos ambulatorios."
      },
      {
        "type": "h3",
        "text": "Servicios auxiliares y ambulancia"
      },
      {
        "type": "p",
        "text": "Transporte terrestre de emergencia, atenciones médicas domiciliarias y tratamientos de rehabilitación o fisioterapia postoperatoria."
      },
      {
        "type": "h3",
        "text": "Aspectos que generalmente requieren revisión o cláusulas especiales"
      },
      {
        "type": "ul",
        "items": [
          "Enfermedades preexistentes: Condiciones diagnosticadas antes de la contratación que requieren cumplir periodos de carencia o montos específicos regulados por ley.",
          "Tratamientos estéticos o cosméticos: Procedimientos que no responden a una necesidad médica o reconstructiva.",
          "Procedimientos experimentales: Tratamientos que no cuentan con validación o registro sanitario oficial en el país."
        ]
      },
      {
        "type": "h3",
        "text": "Aprovecha al máximo tu respaldo en una cobertura médica en Ecuador"
      },
      {
        "type": "p",
        "text": "Tener claridad sobre los alcances de tu plan te permite tomar el control total de la salud familiar. Desde una simple prueba de rutina hasta una intervención de alta complejidad, estar respaldado garantiza un acceso ágil y de calidad superior."
      },
      {
        "type": "p",
        "text": "Revisar periódicamente las condiciones de tu contrato te da la certeza de que tu plan evoluciona según las necesidades cambien a lo largo de las distintas etapas de la vida."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica que te ofrezcan la mayor claridad y protección integral en Ecuador, explora los planes de Humana y encuentra la alternativa que mejor se adapte a ti."
      }
    ],
  },
  {
    slug: "guia-completa-para-entender-la-cobertura-medica-en-ecuador",
    category: "salud",
    categoryLabel: "Salud",
    date: "Ago 27, 2026",
    image: "/blog/blog-04.jpg",
    title: "Guía completa para entender la cobertura médica en Ecuador",
    copy: "Navegar por el sistema de salud y comprender cómo funcionan los planes de asistencia médica puede generar muchas dudas. En Ecuador, contar con un respaldo que proteja a la familia frente a imprevistos es una prioridad, pero es fundamental saber exactamente qué implica...",
    provisional: true,
    body: [
      {
        "type": "p",
        "text": "Navegar por el sistema de salud y comprender cómo funcionan los planes de asistencia médica puede generar muchas dudas. En Ecuador, contar con un respaldo que proteja a la familia frente a imprevistos es una prioridad, pero es fundamental saber exactamente qué implica tener una cobertura médica y cómo sacarle el máximo provecho."
      },
      {
        "type": "p",
        "text": "Entender este servicio te permite tomar decisiones informadas, optimizar tu presupuesto mensual y garantizar una atención oportuna cuando más lo necesitas."
      },
      {
        "type": "h3",
        "text": "¿Qué es y cómo funciona la cobertura médica privada?"
      },
      {
        "type": "p",
        "text": "La cobertura médica privada es un acuerdo de protección mediante el cual una entidad de medicina prepagada o aseguradora asume la totalidad o una parte importante de los costos médicos derivados de consultas, exámenes, atenciones de emergencia, hospitalizaciones y cirugías."
      },
      {
        "type": "p",
        "text": "A diferencia de la atención en la red pública, la cobertura privada otorga acceso inmediato a prestadores de salud privados, clínicas especializadas y médicos de libre elección o dentro de una red contratada, evitando largas listas de espera."
      },
      {
        "type": "h3",
        "text": "Conceptos clave para entender"
      },
      {
        "type": "ul",
        "items": [
          "Deducible: Es el monto anual que el afiliado debe asumir de su propio bolsillo antes de que la cobertura médica comience a reembolsar o cubrir los gastos según el plan contratado.",
          "Copago: Es el porcentaje o tarifa fija que le corresponde pagar al usuario por cada servicio o atención recibida (por ejemplo, el plan cubre el 80% y el afiliado asume el 20%).",
          "Red Afiliada vs. Libre Selección: La red afiliada está compuesta por clínicas y médicos con convenio directo, donde la atención suele ser con crédito directo. La libre selección permite acudir a cualquier especialista, solicitando posteriormente un reembolso.",
          "Periodos de carencia: Tiempo determinado que debe transcurrir desde la contratación del plan para poder hacer uso de ciertas coberturas específicas, como maternidad o enfermedades preexistentes.",
          "Techo o Límite Máximo Anual: La cantidad máxima de dinero que la compañía cubrirá por afiliado durante un año de contrato."
        ]
      },
      {
        "type": "h3",
        "text": "Pasos para elegir la cobertura médica ideal en Ecuador"
      },
      {
        "type": "ul",
        "items": [
          "Evalúa las necesidades familiares: Considera edades, historial médico y la frecuencia promedio de visitas al doctor de cada integrante.",
          "Analiza la red de prestadores: Verifica que los hospitales, clínicas y laboratorios más cercanos o de tu preferencia estén incluidos dentro de la red del plan.",
          "Revisa los montos de cobertura: Asegúrate de que los límites para hospitalización y eventos amparados sean acordes a los costos médicos reales del país.",
          "Verifica la transparencia del contrato: Conoce detalladamente las exclusiones, tiempos de carencia y requisitos para reembolsos."
        ]
      },
      {
        "type": "h3",
        "text": "La tranquilidad de estar bien informado"
      },
      {
        "type": "p",
        "text": "Comprender detalladamente los alcances de tu cobertura médica elimina sorpresas en momentos vulnerables. Disponer de una guía clara te permite utilizar de manera óptima los servicios preventivos y reaccionar con rapidez ante emergencias clínicas."
      },
      {
        "type": "p",
        "text": "Más allá de contratar un servicio, entender tu plan de salud representa la garantía de que tus seres queridos recibirán la mejor atención técnica y humana sin comprometer el patrimonio que has construido."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica en Ecuador que te ayuden a proteger a tu familia con total transparencia, explora los planes de Humana y encuentra la alternativa que mejor se adapte a tus necesidades."
      }
    ],
  },
  {
    slug: "como-evitar-deudas-por-gastos-medicos-inesperados",
    category: "seguros",
    categoryLabel: "Seguros",
    date: "Jul 28, 2026",
    image: "/blog/blog-11.jpg",
    title: "Cómo evitar deudas por gastos médicos inesperados",
    copy: "Los imprevistos de salud pueden ocurrir cuando menos se esperan. Una emergencia, una hospitalización o la necesidad de realizar exámenes y tratamientos especializados pueden generar gastos importantes que impactan el presupuesto familiar. Por esta razón, prepararse...",
    provisional: true,
    body: [
      {
        "type": "p",
        "text": "Los imprevistos de salud pueden ocurrir cuando menos se esperan. Una emergencia, una hospitalización o la necesidad de realizar exámenes y tratamientos especializados pueden generar gastos importantes que impactan el presupuesto familiar."
      },
      {
        "type": "p",
        "text": "Por esta razón, prepararse para enfrentar gastos médicos inesperados es una de las mejores decisiones para proteger tanto la salud como la estabilidad financiera de una familia."
      },
      {
        "type": "h3",
        "text": "¿Por qué los gastos médicos pueden convertirse en una deuda?"
      },
      {
        "type": "p",
        "text": "Muchas personas no consideran dentro de su planificación financiera los costos asociados a una emergencia médica. Cuando ocurre una situación inesperada, es común recurrir a préstamos, tarjetas de crédito o utilizar ahorros destinados a otros objetivos."
      },
      {
        "type": "p",
        "text": "Algunos de los gastos más frecuentes incluyen:"
      },
      {
        "type": "ul",
        "items": [
          "Consultas médicas de emergencia.",
          "Exámenes de laboratorio e imagen.",
          "Medicamentos.",
          "Hospitalización.",
          "Cirugías y procedimientos especializados.",
          "Terapias y procesos de recuperación."
        ]
      },
      {
        "type": "p",
        "text": "Dependiendo de la complejidad del caso, estos costos pueden acumularse rápidamente y generar una carga económica considerable."
      },
      {
        "type": "h3",
        "text": "Consejos para evitar deudas por gastos médicos inesperados"
      },
      {
        "type": "h3",
        "text": "Mantén un fondo para emergencias"
      },
      {
        "type": "p",
        "text": "Contar con un ahorro destinado exclusivamente para situaciones imprevistas puede ayudar a cubrir gastos iniciales sin afectar el presupuesto mensual."
      },
      {
        "type": "p",
        "text": "Aunque no siempre sea posible cubrir todos los costos médicos con ahorros, disponer de un fondo de respaldo brinda mayor tranquilidad ante una emergencia."
      },
      {
        "type": "h3",
        "text": "Prioriza la prevención"
      },
      {
        "type": "p",
        "text": "Los chequeos médicos periódicos permiten detectar posibles problemas de salud a tiempo y reducir el riesgo de complicaciones que puedan requerir tratamientos más costosos en el futuro."
      },
      {
        "type": "p",
        "text": "La prevención sigue siendo una de las mejores inversiones para cuidar tanto la salud como las finanzas."
      },
      {
        "type": "h3",
        "text": "Infórmate sobre los costos de atención"
      },
      {
        "type": "p",
        "text": "Conocer los costos aproximados de consultas, exámenes y procedimientos médicos permite tomar decisiones más informadas y planificar mejor los gastos relacionados con la salud."
      },
      {
        "type": "p",
        "text": "Además, ayuda a identificar qué servicios podrían requerir una cobertura adicional."
      },
      {
        "type": "h3",
        "text": "Considera una cobertura médica privada"
      },
      {
        "type": "p",
        "text": "Contar con un plan de cobertura médica puede ayudar a reducir significativamente el impacto económico de una emergencia o enfermedad inesperada."
      },
      {
        "type": "p",
        "text": "Dependiendo del plan contratado, es posible acceder a beneficios relacionados con consultas médicas, exámenes, hospitalización y otros servicios de salud que brindan respaldo financiero cuando más se necesita."
      },
      {
        "type": "h3",
        "text": "La tranquilidad de estar preparado"
      },
      {
        "type": "p",
        "text": "Nadie puede predecir cuándo ocurrirá una emergencia médica, pero sí es posible prepararse para afrontarla de mejor manera. Tener hábitos preventivos, mantener un fondo de emergencia y contar con una cobertura médica adecuada son acciones que pueden marcar una gran diferencia."
      },
      {
        "type": "p",
        "text": "Más allá del aspecto económico, estar protegido permite enfocarse en lo más importante: la recuperación y el bienestar de la familia."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica que te ayuden a enfrentar gastos médicos inesperados con mayor tranquilidad, explora los planes de Humana y encuentra la alternativa que mejor se adapte a tus necesidades."
      }
    ],
  },
  {
    slug: "que-enfermedades-suelen-generar-mayores-gastos-medicos",
    category: "seguros",
    categoryLabel: "Seguros",
    date: "Jul 25, 2026",
    image: "/blog/blog-12.jpg",
    title: "¿Qué enfermedades suelen generar mayores gastos médicos?",
    copy: "La salud es uno de los activos más valiosos, pero cuando aparece una enfermedad compleja o de larga duración, los gastos médicos pueden incrementarse significativamente. Por eso, conocer cuáles son las enfermedades más costosas Ecuador permite tomar decisiones más...",
    provisional: true,
    body: [
      {
        "type": "p",
        "text": "La salud es uno de los activos más valiosos, pero cuando aparece una enfermedad compleja o de larga duración, los gastos médicos pueden incrementarse significativamente. Por eso, conocer cuáles son las enfermedades más costosas Ecuador permite tomar decisiones más informadas sobre prevención y protección financiera."
      },
      {
        "type": "h3",
        "text": "Enfermedades que suelen generar mayores costos"
      },
      {
        "type": "p",
        "text": "Algunas condiciones médicas requieren tratamientos continuos, controles frecuentes y atención especializada. Entre las que suelen representar mayores gastos se encuentran:"
      },
      {
        "type": "ul",
        "items": [
          "Enfermedades cardiovasculares.",
          "Cáncer y tratamientos oncológicos.",
          "Diabetes con complicaciones.",
          "Enfermedades renales crónicas.",
          "Trastornos neurológicos.",
          "Enfermedades autoinmunes."
        ]
      },
      {
        "type": "p",
        "text": "Estos diagnósticos pueden implicar consultas médicas recurrentes, exámenes especializados, medicamentos de alto costo, hospitalizaciones e incluso cirugías."
      },
      {
        "type": "h3",
        "text": "El impacto de los gastos médicos"
      },
      {
        "type": "p",
        "text": "Más allá del tratamiento inicial, muchas enfermedades requieren un seguimiento constante durante meses o años. Esto puede representar una carga económica importante para las familias, especialmente cuando se presentan complicaciones inesperadas."
      },
      {
        "type": "p",
        "text": "Por esta razón, la detección temprana y los controles preventivos son fundamentales para mejorar el pronóstico y reducir riesgos asociados."
      },
      {
        "type": "h3",
        "text": "La importancia de contar con respaldo médico"
      },
      {
        "type": "p",
        "text": "Aunque nadie espera enfrentar una enfermedad compleja, estar preparado puede marcar una gran diferencia. Una cobertura médica adecuada facilita el acceso oportuno a atención especializada, exámenes diagnósticos y tratamientos cuando más se necesitan."
      },
      {
        "type": "p",
        "text": "Invertir en prevención y protección médica es una forma de cuidar tanto la salud como la estabilidad financiera de la familia."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica para protegerte ante imprevistos, descubre los planes que Humana tiene para ti."
      }
    ],
  },
  {
    slug: "salud-publica-vs-privada-ecuador-cual-es-la-diferencia",
    category: "salud",
    categoryLabel: "Salud",
    date: "Jul 15, 2026",
    image: "/blog/blog-14.jpg",
    title: "Salud pública vs privada en Ecuador: ¿cuál es la diferencia?",
    copy: "Salud pública vs privada en Ecuador: diferencias reales. Cuando hablamos de acceso a servicios médicos en el país, una de las preguntas más frecuentes es cuál es la mejor alternativa entre la salud pública y la salud privada. Aunque ambos sistemas tienen el mismo...",
    provisional: true,
    body: [
      {
        "type": "h3",
        "text": "Salud pública vs privada en Ecuador: diferencias reales"
      },
      {
        "type": "p",
        "text": "Cuando hablamos de acceso a servicios médicos en el país, una de las preguntas más frecuentes es cuál es la mejor alternativa entre la salud pública y la salud privada. Aunque ambos sistemas tienen el mismo objetivo: cuidar la salud de las personas, existen diferencias importantes en cuanto a acceso, tiempos de atención, cobertura y experiencia del paciente."
      },
      {
        "type": "p",
        "text": "Entender la realidad de la salud pública vs privada Ecuador permite evaluar cuál opción se adapta mejor a las necesidades de cada persona y familia."
      },
      {
        "type": "h3",
        "text": "¿Cómo funciona la salud pública en Ecuador?"
      },
      {
        "type": "p",
        "text": "La salud pública está conformada principalmente por los servicios ofrecidos por el Ministerio de Salud Pública (MSP), así como por instituciones como el Instituto Ecuatoriano de Seguridad Social (IESS)."
      },
      {
        "type": "p",
        "text": "Su principal característica es que busca garantizar el acceso a atención médica para toda la población, ofreciendo consultas, tratamientos, emergencias y programas de prevención sin costo directo para los usuarios o mediante aportaciones al sistema de seguridad social."
      },
      {
        "type": "p",
        "text": "Entre sus principales ventajas se encuentran:"
      },
      {
        "type": "ul",
        "items": [
          "Cobertura amplia a nivel nacional.",
          "Acceso a servicios esenciales de salud.",
          "Atención médica sin desembolsos directos en la mayoría de los casos.",
          "Programas de vacunación y prevención."
        ]
      },
      {
        "type": "p",
        "text": "Sin embargo, debido a la alta demanda, los usuarios pueden enfrentar tiempos de espera prolongados para citas, procedimientos o consultas con especialistas."
      },
      {
        "type": "h3",
        "text": "¿Cómo funciona la salud privada?"
      },
      {
        "type": "p",
        "text": "La salud privada está compuesta por clínicas, hospitales, centros médicos y planes de cobertura médica que operan de manera independiente al sistema público."
      },
      {
        "type": "p",
        "text": "Su principal ventaja es la posibilidad de acceder a una atención más rápida, personalizada y flexible, permitiendo elegir médicos, centros de atención y horarios según las necesidades del paciente."
      },
      {
        "type": "p",
        "text": "Algunos beneficios que suelen destacarse son:"
      },
      {
        "type": "ul",
        "items": [
          "Menores tiempos de espera.",
          "Acceso más ágil a especialistas.",
          "Mayor comodidad en la atención.",
          "Amplia red de clínicas y hospitales privados.",
          "Coberturas complementarias para consultas, exámenes y hospitalización."
        ]
      },
      {
        "type": "p",
        "text": "Muchas personas optan por la salud privada como complemento al sistema público, especialmente cuando buscan atención oportuna para ellos y sus familias."
      },
      {
        "type": "h3",
        "text": "Principales diferencias entre salud pública y privada en Ecuador"
      },
      {
        "type": "h3",
        "text": "Tiempos de atención"
      },
      {
        "type": "p",
        "text": "Una de las diferencias más evidentes está relacionada con la disponibilidad de citas y procedimientos médicos."
      },
      {
        "type": "p",
        "text": "Mientras que en el sistema público la demanda puede generar tiempos de espera más largos, en la atención privada generalmente es posible acceder a consultas y exámenes en menor tiempo."
      },
      {
        "type": "h3",
        "text": "Cobertura y acceso"
      },
      {
        "type": "p",
        "text": "La salud pública ofrece acceso universal a servicios básicos y especializados dentro de su red de establecimientos."
      },
      {
        "type": "p",
        "text": "Por otro lado, la salud privada permite acceder a una red específica de prestadores, dependiendo del plan contratado y de las coberturas incluidas."
      },
      {
        "type": "h3",
        "text": "Personalización de la atención"
      },
      {
        "type": "p",
        "text": "En el sistema privado suele existir una mayor flexibilidad para elegir médicos, especialistas y centros de atención."
      },
      {
        "type": "p",
        "text": "Esto puede traducirse en una experiencia más personalizada para el paciente y un seguimiento más cercano de su historial médico."
      },
      {
        "type": "h3",
        "text": "Costos"
      },
      {
        "type": "p",
        "text": "La salud pública está financiada por el Estado y los aportes al sistema de seguridad social."
      },
      {
        "type": "p",
        "text": "La salud privada implica un pago directo o la contratación de un plan de cobertura médica que ayude a cubrir consultas, exámenes, tratamientos y hospitalizaciones según las condiciones establecidas."
      },
      {
        "type": "h3",
        "text": "¿Cuál es la mejor opción?"
      },
      {
        "type": "p",
        "text": "No existe una única respuesta. La elección dependerá de factores como las necesidades médicas, el presupuesto, la frecuencia de uso de servicios de salud y la importancia que cada persona otorgue a aspectos como rapidez, flexibilidad o acceso a determinadas especialidades."
      },
      {
        "type": "p",
        "text": "Para muchas familias ecuatorianas, la mejor alternativa es complementar la atención pública con un plan de cobertura médica privada que permita acceder de manera más ágil a servicios médicos cuando sea necesario."
      },
      {
        "type": "h3",
        "text": "La importancia de contar con una cobertura médica adecuada"
      },
      {
        "type": "p",
        "text": "Más allá de elegir entre salud pública o privada, lo verdaderamente importante es garantizar un acceso oportuno a la atención médica. La prevención, los controles periódicos y la posibilidad de recibir atención cuando se necesita son factores que impactan directamente en la calidad de vida."
      },
      {
        "type": "p",
        "text": "Contar con una cobertura médica adecuada brinda tranquilidad y respaldo frente a situaciones inesperadas, permitiendo cuidar la salud propia y la de la familia con mayor confianza."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica que se adapten a tus necesidades, explora los planes de Humana y encuentra la protección ideal para tu bienestar."
      }
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
        "type": "p",
        "text": "El bienestar no se construye de un día para otro. Se forma en lo cotidiano, en las decisiones pequeñas que repetimos incluso cuando no tenemos ganas, y en los hábitos que, con el tiempo, empiezan a definir cómo nos sentimos. En ese proceso, la disciplina suele ser vista como una exigencia, cuando en realidad puede convertirse en una herramienta para cuidarnos mejor."
      },
      {
        "type": "p",
        "text": "En el contexto del deporte, esta idea toma aún más sentido. La disciplina no se trata únicamente de cumplir con una rutina o alcanzar un objetivo físico, sino de sostener prácticas que generan equilibrio. Es aprender a organizar el tiempo, respetar los procesos y entender que el bienestar es resultado de la constancia, no de la perfección."
      },
      {
        "type": "p",
        "text": "A través del movimiento, el cuerpo encuentra una forma de activarse, pero también la mente logra ordenarse. El ejercicio físico tiene un impacto directo en la salud emocional, ayudando a reducir el estrés, mejorar el estado de ánimo y fortalecer la autoestima. Por eso, incorporar actividad física en la rutina no solo responde a una meta estética o de rendimiento, sino a una necesidad integral de bienestar."
      },
      {
        "type": "p",
        "text": "En este camino, el entorno también juega un rol clave. El deporte, especialmente cuando se vive en equipo, permite construir redes de apoyo donde se aprende a confiar, a gestionar la frustración y a sostener el compromiso. Estas experiencias, aunque se desarrollen en un contexto deportivo, se trasladan fácilmente a la vida diaria, influyendo en la forma en que enfrentamos desafíos personales y profesionales."
      },
      {
        "type": "p",
        "text": "Sin embargo, la disciplina no se limita al momento de entrenar. También está presente en el descanso, en la alimentación y en la capacidad de escuchar al propio cuerpo. Entender cuándo avanzar y cuándo detenerse es parte de un equilibrio necesario para mantener hábitos saludables en el tiempo."
      },
      {
        "type": "p",
        "text": "Muchas veces se cree que para generar cambios se necesitan grandes esfuerzos, pero la realidad es que el bienestar comienza con pequeños pasos. Elegir una actividad que genere disfrute, mantener cierta regularidad y evitar comparaciones son aspectos fundamentales para construir una relación más saludable con el movimiento."
      },
      {
        "type": "p",
        "text": "A partir de esto, la disciplina deja de ser una obligación y se transforma en una decisión personal. Una forma de priorizarse, de generar orden interno y de construir una base sólida para el bienestar en diferentes áreas de la vida. Porque cuando una persona logra sostener hábitos que la hacen sentir bien, ese equilibrio se refleja también en su entorno."
      },
      {
        "type": "p",
        "text": "En consecuencia, el deporte se convierte en una herramienta que va más allá de lo físico. Permite desarrollar constancia, mejorar la calidad de vida y fortalecer la conexión entre cuerpo y mente. No se trata de alcanzar un ideal, sino de avanzar de forma consciente hacia una vida más equilibrada."
      },
      {
        "type": "p",
        "text": "Hoy, más que nunca, entender la disciplina como un acto de autocuidado permite resignificar la manera en que nos relacionamos con el bienestar. Porque moverse también es escucharse, y construir hábitos sostenibles es una forma de vivir mejor."
      },
      {
        "type": "p",
        "text": "Si quieres profundizar en este tema y conocer más sobre cómo la disciplina puede impactar en tu bienestar integral, te invitamos a ver el episodio completo de Humana Spot."
      }
    ],
  },
  {
    slug: "cobertura-basica-vs-completa-que-cambia-realmente",
    category: "consejos",
    categoryLabel: "Consejos",
    date: "Jun 17, 2026",
    image: "/blog/blog-16.jpg",
    title: "Cobertura básica vs completa: ¿qué cambia realmente?",
    copy: "Cobertura de salud básica vs completa: diferencias clave. Elegir una cobertura de salud no siempre es una decisión simple, especialmente cuando existen distintas opciones que, a primera vista, pueden parecer similares. En este contexto, entender la diferencia...",
    provisional: true,
    body: [
      {
        "type": "h3",
        "text": "Cobertura de salud básica vs completa: diferencias clave"
      },
      {
        "type": "p",
        "text": "Elegir una cobertura de salud no siempre es una decisión simple, especialmente cuando existen distintas opciones que, a primera vista, pueden parecer similares. En este contexto, entender la diferencia entre una cobertura básica y una completa es fundamental para tomar decisiones más informadas y alineadas con el bienestar a largo plazo."
      },
      {
        "type": "p",
        "text": "En muchos casos, la elección suele basarse únicamente en el costo. Sin embargo, más allá del precio, lo importante es analizar el nivel de protección, acceso y acompañamiento que cada tipo de cobertura ofrece. Esto cobra aún más relevancia si se considera que la salud no solo implica atender emergencias, sino también prevenir y dar seguimiento constante."
      },
      {
        "type": "p",
        "text": "Por un lado, una cobertura básica suele incluir lo esencial: consultas médicas generales, atención en casos de urgencia y algunos servicios hospitalarios. Este tipo de planes están diseñados para responder ante situaciones puntuales, funcionando como un respaldo en momentos específicos. Por eso, pueden ser una opción para quienes buscan una solución más accesible o no requieren un seguimiento frecuente."
      },
      {
        "type": "p",
        "text": "No obstante, su alcance puede ser limitado cuando se trata de estudios especializados, acceso a ciertos médicos o tiempos de atención. En muchos casos, estos servicios implican costos adicionales o no están incluidos, lo que puede dificultar la continuidad del cuidado de la salud."
      },
      {
        "type": "p",
        "text": "Por otro lado, una cobertura completa ofrece un enfoque más integral. Incluye no solo la atención ante enfermedades o emergencias, sino también servicios orientados a la prevención, como chequeos periódicos, acceso a especialistas y seguimiento médico continuo. Esto permite detectar a tiempo posibles condiciones y acompañar de manera más cercana el estado de salud de cada persona."
      },
      {
        "type": "p",
        "text": "Además, este tipo de cobertura suele brindar mayor flexibilidad y acceso, reduciendo tiempos de espera y facilitando la atención oportuna. Esto es clave si se considera que la detección temprana puede marcar una diferencia significativa en el tratamiento y evolución de muchas enfermedades."
      },
      {
        "type": "p",
        "text": "De hecho, organismos internacionales como la Organización Mundial de la Salud destacan que una gran parte de las enfermedades crónicas pueden prevenirse o controlarse con acceso regular a servicios de salud, chequeos y seguimiento adecuado. En este sentido, contar con una cobertura que facilite ese acceso continuo se vuelve un factor determinante."
      },
      {
        "type": "p",
        "text": "A partir de esto, surge una idea importante: no se trata solo de tener cobertura, sino de qué tipo de cobertura se adapta mejor a tu estilo de vida y necesidades. Mientras una opción básica puede resolver situaciones puntuales, una cobertura completa permite acompañar el bienestar de forma más constante y anticiparse a posibles riesgos."
      },
      {
        "type": "p",
        "text": "En consecuencia, la decisión no debería centrarse únicamente en el presente, sino en el nivel de respaldo que cada persona busca para el futuro. Tener acceso a atención médica oportuna, seguimiento continuo y herramientas de prevención puede generar un impacto real en la calidad de vida."
      },
      {
        "type": "p",
        "text": "Hoy más que nunca, construir salud implica mirar más allá de lo inmediato y apostar por soluciones que acompañen en cada etapa. Porque al final, no se trata solo de atenderse cuando algo ocurre, sino de contar con el respaldo necesario para cuidar la salud todos los días."
      },
      {
        "type": "p",
        "text": "Si quieres contar con una cobertura ajustada a tus necesidades y que te acompañe de forma integral, conoce nuestros planes de Cobertura Médica Integral."
      }
    ],
  },
  {
    slug: "habitos-saludables-para-construir-salud-a-largo-plazo",
    category: "actualidad",
    categoryLabel: "Actualidad",
    date: "May 30, 2026",
    image: "/blog/blog-19.jpg",
    title: "Hábitos saludables para construir salud a largo plazo.",
    copy: "Hábitos saludables para construir salud. Construir salud a largo plazo no depende de cambios extremos ni de rutinas difíciles de sostener, sino de decisiones pequeñas y consistentes que se integran en la vida diaria. En el marco de este...",
    provisional: true,
    body: [
      {
        "type": "h3",
        "text": "Hábitos saludables para construir salud"
      },
      {
        "type": "p",
        "text": "Construir salud a largo plazo no depende de cambios extremos ni de rutinas difíciles de sostener, sino de decisiones pequeñas y consistentes que se integran en la vida diaria. En el marco de este enfoque, hablar de bienestar implica entender que no existe un solo hábito clave, sino un conjunto de pilares que, en equilibrio, permiten que el cuerpo funcione mejor."
      },
      {
        "type": "p",
        "text": "En ese sentido, el movimiento, la alimentación y el descanso forman la base de una vida saludable. Sin embargo, más allá de conocerlos, el verdadero desafío está en lograr que estos hábitos se mantengan en el tiempo."
      },
      {
        "type": "p",
        "text": "Por un lado, el movimiento cumple un rol fundamental en la prevención de enfermedades. La Organización Mundial de la Salud recomienda al menos 150 minutos de actividad física moderada a la semana, ya que esto contribuye a reducir el riesgo de enfermedades cardiovasculares, metabólicas y musculares. Aun así, una gran parte de la población no alcanza este nivel, muchas veces porque asocia el ejercicio con exigencia o falta de tiempo."
      },
      {
        "type": "p",
        "text": "Por otro lado, la alimentación influye directamente en el funcionamiento del organismo. Mantener una dieta equilibrada no implica restricciones extremas, sino priorizar alimentos variados, frescos y adecuados a las necesidades de cada persona. De hecho, una alimentación adecuada puede ayudar a prevenir enfermedades crónicas como la diabetes tipo 2 y la hipertensión."
      },
      {
        "type": "p",
        "text": "A su vez, el descanso suele ser uno de los pilares más subestimados. Dormir entre 7 y 9 horas por noche permite que el cuerpo se recupere, regula funciones hormonales y mejora la concentración y el estado de ánimo. La falta de sueño, en cambio, puede afectar tanto la salud física como emocional."
      },
      {
        "type": "p",
        "text": "Ahora bien, aunque estos pilares son conocidos, muchas personas encuentran dificultad para sostenerlos. En este punto, es importante entender que no se trata solo de información, sino de hábitos. Existen diferentes enfoques que explican cómo construirlos, como la regla de los 21 días o metodologías como los hábitos atómicos, que plantean que pequeños cambios repetidos generan grandes resultados en el tiempo."
      },
      {
        "type": "p",
        "text": "Sin embargo, más allá de las teorías, lo más efectivo suele ser simplificar el proceso. Incorporar hábitos no debería sentirse como una carga, sino como una adaptación progresiva."
      },
      {
        "type": "p",
        "text": "Algunos puntos clave pueden ayudar a lograrlo:"
      },
      {
        "type": "ul",
        "items": [
          "Empezar con cambios pequeños y alcanzables, en lugar de transformaciones radicales.",
          "Elegir actividades físicas que se disfruten, para facilitar la constancia.",
          "Mantener horarios regulares de comida y descanso.",
          "Evitar la perfección y enfocarse en la continuidad."
        ]
      },
      {
        "type": "p",
        "text": "En consecuencia, la clave para construir salud no está en hacerlo perfecto, sino en hacerlo posible. Cuando los hábitos se adaptan a la vida de cada persona, es más probable que se mantengan en el tiempo."
      },
      {
        "type": "p",
        "text": "Hoy más que nunca, cuidar la salud implica encontrar un equilibrio entre lo que el cuerpo necesita y lo que realmente se puede sostener. Porque al final, no se trata de hacer más, sino de hacerlo de forma constante."
      },
      {
        "type": "p",
        "text": "Si quieres acompañar tus hábitos con respaldo médico, conoce nuestros planes de Cobertura Médica Integral."
      }
    ],
  },
  {
    slug: "por-que-es-importante-acceder-a-consultas-telematicas",
    category: "salud",
    categoryLabel: "Salud",
    date: "Ene 20, 2026",
    image: "/blog/blog-29.jpg",
    title: "¿Por qué es importante acceder a consultas telemáticas?",
    copy: "En la rutina diaria, el trabajo, la familia y las responsabilidades suelen ocupar el primer lugar, dejando la salud para \"cuando haya tiempo\". Muchas personas mayores de edad saben que algo no está del todo bien, pero postergan la consulta médica por falta de tiempo...",
    provisional: true,
    body: [
      {
        "type": "p",
        "text": "En la rutina diaria, el trabajo, la familia y las responsabilidades suelen ocupar el primer lugar, dejando la salud para \"cuando haya tiempo\". Muchas personas mayores de edad saben que algo no está del todo bien, pero postergan la consulta médica por falta de tiempo, largas esperas o la incomodidad de trasladarse a un centro de salud."
      },
      {
        "type": "p",
        "text": "Hoy, la medicina ha evolucionado y ofrece una solución práctica, segura y eficiente: las consultas telemáticas. Acceder a atención médica desde casa ya no es el futuro, es una realidad que mejora tu bienestar y te ayuda a cuidar tu salud sin complicaciones."
      },
      {
        "type": "p",
        "text": "Las consultas telemáticas permiten recibir atención médica profesional sin salir de casa, utilizando solo un celular, tablet o computadora. Este tipo de atención es ideal si llevas una vida activa y necesitas respuestas rápidas y efectivas. En lugar de perder horas en salas de espera o reorganizar toda tu agenda, puedes consultar con un especialista en el momento que lo necesites, de forma cómoda y segura."
      },
      {
        "type": "p",
        "text": "Uno de los principales beneficios es la rapidez. Muchas molestias, controles médicos, seguimientos o primeras evaluaciones pueden resolverse en el mismo día. Con un plan médico que incluya consultas telemáticas, tienes acceso inmediato a profesionales de la salud que pueden orientarte, diagnosticarte y brindarte un tratamiento oportuno, evitando que pequeños problemas se conviertan en complicaciones mayores."
      },
      {
        "type": "p",
        "text": "Además, este tipo de atención reduce la exposición a factores de riesgo. Al evitar traslados innecesarios y el contacto con ambientes saturados, proteges tu salud y la de tu familia. Esto es especialmente importante cuando se trata de prevenir contagios o evitar el estrés que muchas veces genera la atención presencial."
      },
      {
        "type": "p",
        "text": "La comodidad también juega un rol fundamental. Estar en casa, en un entorno familiar, facilita la comunicación con el médico y permite que la consulta sea más tranquila y efectiva. No importa si estás trabajando, o con una agenda apretada: la telemedicina se adapta a tu ritmo de vida."
      },
      {
        "type": "p",
        "text": "Contar con un plan de cobertura médica integral que incluya consultas telemáticas no solo es una inversión en atención, sino en tranquilidad. Saber que puedes acceder a un médico cuando lo necesites, sin demoras y sin excusas, te da la seguridad de que tu salud está protegida hoy y a largo plazo."
      },
      {
        "type": "p",
        "text": "Imagina los siguientes escenarios en los que puedas requerir una atención médica virtual y si es tu caso, recuerda contar con un Plan Médico Humana con esta cobertura."
      },
      {
        "type": "h3",
        "text": "Si estás en otra ciudad o de viaje"
      },
      {
        "type": "p",
        "text": "Imagina que estás por trabajo o vacaciones en otra ciudad y comienzas con dolor de garganta, malestar general o una alergia. En lugar de buscar un centro médico desconocido, puedes acceder a una consulta telemática desde tu celular, hablar con un médico, recibir orientación y, si es necesario, una indicación de tratamiento sin importar dónde te encuentres."
      },
      {
        "type": "h3",
        "text": "Si no puedes salir de casa"
      },
      {
        "type": "p",
        "text": "Muchas personas evitan ir al médico porque tienen fiebre, dolor corporal, malestar intenso o están cuidando a un familiar. Con la telemedicina, puedes atenderte desde tu casa, sin exponerte al clima, al tráfico o a largas esperas. El médico evalúa tus síntomas, te orienta y te ayuda a decidir si necesitas atención presencial o si puedes tratarte desde casa."
      },
      {
        "type": "h3",
        "text": "Si no tienes permiso en la oficina"
      },
      {
        "type": "p",
        "text": "En jornadas laborales exigentes, pedir permiso para ir al médico no siempre es fácil. Una consulta telemática puede realizarse en un horario flexible, incluso durante un receso o al finalizar la jornada. En pocos minutos puedes resolver una duda médica, recibir indicaciones o un seguimiento, sin afectar tu trabajo ni postergar tu salud."
      },
      {
        "type": "h3",
        "text": "Si tienes una agenda muy ajustada"
      },
      {
        "type": "p",
        "text": "Entre reuniones, responsabilidades familiares y compromisos personales, muchas personas no encuentran \"el momento perfecto\" para ir al médico. La atención telemática elimina traslados y tiempos muertos, permitiéndote resolver una consulta en el mismo día, desde cualquier lugar, con solo conexión a internet."
      },
      {
        "type": "h3",
        "text": "Para controles y seguimientos médicos"
      },
      {
        "type": "p",
        "text": "No todas las consultas requieren presencia física. Resultados de exámenes, seguimiento de tratamientos, control de enfermedades crónicas o ajustes de medicación pueden resolverse perfectamente mediante una consulta virtual, de forma rápida y efectiva."
      },
      {
        "type": "h3",
        "text": "Para una primera orientación médica"
      },
      {
        "type": "p",
        "text": "Si no estás seguro de la gravedad de tus síntomas, una consulta telemática es ideal como primer paso. El médico puede orientarte, darte tranquilidad o indicarte si es necesario acudir a una atención presencial, evitando preocupaciones innecesarias o demoras en la atención."
      },
      {
        "type": "p",
        "text": "Cuidar tu salud no debería ser una tarea pendiente. Hoy existen herramientas que facilitan el acceso a la atención médica y se adaptan a tu estilo de vida. Las consultas telemáticas te permiten resolver en un solo día lo que antes podía postergarse por semanas. Con un plan médico adecuado, tienes la oportunidad de priorizar tu bienestar, ahorrar tiempo y recibir atención profesional de manera rápida, efectiva y segura."
      },
      {
        "type": "p",
        "text": "Invertir en tu bienestar es invertir en tu calidad de vida. No esperes a que una molestia se convierta en un problema mayor. Accede a un plan médico PractiHumana o MetroHumana con consultas telemáticas y descubre lo fácil que es cuidarte, sin salir de casa."
      },
      {
        "type": "p",
        "text": "Estamos contigo tu familia en todo momento y en cualquier lugar. Recuerda nuestros canales de contacto para solventar cualquier duda que tengas sobre tus coberturas y planes."
      }
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
