// Archivo de artículos y tarjetas retirados del blog público.
// No se borran del repo por si el equipo (Hiro) quiere reutilizar alguno.
//
// 1) unusedArticles: 15 artículos redactados en una sesión anterior que NO
//    corresponden a ningún slug del sitemap oficial de humana.med.ec. No
//    tienen página ni aparecen en ningún listado del blog. Incluye el que
//    usaba la tarjeta de blog de la Home ("¿Cuánto cuesta una hospitalización
//    en Ecuador en 2026?"); la Home ahora usa 3 posts provisionales reales
//    de la categoría Bienestar en su lugar (ver app/page.tsx).
// 2) retiredPlanSlides: 5 tarjetas de "Slide cotizador" (Plan Proteger,
//    Humana Kids, Plan Jóvenes, Plan Prosonrisas, Individual y Familiar).
//    No son posts de blog, son promos de planes; se sacaron de /blog/.

import type { BlogBodyBlock } from "./blog-articles";

export const unusedArticles = [
  {
    image: "/blog/blog-01.jpg",
    date: "Sep 11, 2026",
    category: "Bienestar",
    title: "¿Cuánto cuesta una hospitalización en Ecuador en 2026?",
    copy: "Una hospitalización imprevista representa uno de los mayores riesgos para la estabilidad económica de una familia. Conoce los valores aproximados de un internamiento hospitalario en Ecuador durante el 2026 y cómo contar con un plan de salud adecuado te resguarda frente a estos costos elevados.",
    slug: "cuanto-cuesta-una-hospitalizacion-en-ecuador-en-2026",
    body: [
      { "type": "p", "text": "Afrontar una internación hospitalaria, ya sea por una cirugía programada o por una emergencia repentina, es un escenario que ninguna persona desea atravesar. Sin embargo, más allá de la preocupación por la salud física, los costos asociados a una estancia hospitalaria en el sector privado de Ecuador en 2026 pueden llegar a ser sumamente elevados." },
      { "type": "p", "text": "Comprender la estructura de estos valores permite dimensionar la importancia crucial de contar con un plan de medicina prepagada que asuma la carga financiera del evento." },
      { "type": "h3", "text": "¿Por qué el costo de una hospitalización se incrementa rápidamente?" },
      { "type": "p", "text": "La factura final de un internamiento hospitalario no comprende únicamente la habitación o el uso de la cama. Una hospitalización requiere la convergencia de tecnología médica avanzada, personal especializado las 24 horas y el uso constante de insumos y fármacos de alta complejidad." },
      { "type": "h3", "text": "Factores y costos promedio de una hospitalización en 2026" },
      { "type": "h3", "text": "Habitación y cuidados diarios" },
      { "type": "p", "text": "El costo por día de una habitación privada estándar en una clínica de prestigio en Ecuador oscila entre $150 y $350 USD. En caso de requerir la Unidad de Cuidados Intensivos (UCI), la tarifa diaria puede superar fácilmente los $1,200 a $2,500 USD debido al monitoreo especializado constante." },
      { "type": "h3", "text": "Uso de quirófano y equipamiento" },
      { "type": "p", "text": "Las horas de quirófano, el instrumental quirúrgico y la tecnología aplicada (como laparoscopía o robótica) suman valores significativos que varían entre $500 y $3,000 USD dependiendo de la complejidad de la cirugía." },
      { "type": "h3", "text": "Honorarios profesionales" },
      { "type": "p", "text": "Comprende los honorarios del cirujano principal, ayudantes, anestesiólogo, médicos tratantes e interconsultantes que supervisan la evolución del paciente durante su estadía." },
      { "type": "h3", "text": "Medicamentos e insumos hospitalarios" },
      { "type": "p", "text": "Los antibióticos de alta generación, anestésicos, sueros, suturas e insumos desechables utilizados durante la hospitalización constituyen frecuentemente un alto porcentaje de la factura total." },
      { "type": "h3", "text": "Exámenes complementarios" },
      { "type": "p", "text": "Tomografías, exámenes de sangre continuos, electrocardiogramas y radiografías solicitados durante la estancia para evaluar la evolución clínica." },
      { "type": "h3", "text": "Estimación total ante eventos comunes en el sector privado" },
      { "type": "ul", "items": [
        "Hospitalización breve por procedimiento menor (1-2 días): Entre $1,200 y $2,800 USD.",
        "Intervención quirúrgica moderada (ej. apendectomía o vesícula, 2-3 días): Entre $3,000 y $6,000 USD.",
        "Tratamiento complejo o alta especialidad con UCI (más de 5 días): Puede sobrepasar rápidamente los $10,000 a $25,000 USD.",
      ] },
      { "type": "h3", "text": "Protege tu tranquilidad y tu economía" },
      { "type": "p", "text": "Frente a valores de esta magnitud, disponer de una cobertura médica privada que otorgue crédito directo en las principales clínicas del país se traduce en paz mental instantánea. No tendrás que recurrir a préstamos de emergencia ni liquidar ahorros patrimoniales." },
      { "type": "p", "text": "Invertir preventivamente en un plan de medicina prepagada es la forma más inteligente y responsable de asegurar que ante cualquier contingencia hospitalaria, la única preocupación sea la pronta recuperación." },
      { "type": "p", "text": "Si deseas prevenir deudas médicas y contar con un respaldo hospitalario sólido en Ecuador, cotiza un plan con Humana y protege a los que más quieres, recuerda que los costos de hospitalización en Ecuador suelen ser altos." },
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-10.jpg",
    date: "Ago 2, 2026",
    category: "Bienestar",
    title: "¿Qué sucede cuando una enfermedad requiere tratamiento continuo?",
    copy: "Cuando una persona recibe el diagnóstico de una enfermedad crónica o de una condición que requiere seguimiento permanente, el desafío va más allá del tratamiento inicial. En muchos casos, es necesario mantener controles médicos, medicamentos, exámenes y terapias...",
    slug: "que-sucede-cuando-una-enfermedad-requiere-tratamiento-continuo",
    body: [
      {
        "type": "p",
        "text": "Cuando una persona recibe el diagnóstico de una enfermedad crónica o de una condición que requiere seguimiento permanente, el desafío va más allá del tratamiento inicial. En muchos casos, es necesario mantener controles médicos, medicamentos, exámenes y terapias durante largos periodos de tiempo."
      },
      {
        "type": "p",
        "text": "Los tratamientos médicos continuos forman parte de la vida de millones de personas y son fundamentales para controlar enfermedades, prevenir complicaciones y mejorar la calidad de vida."
      },
      {
        "type": "h3",
        "text": "¿Qué son los tratamientos médicos continuos?"
      },
      {
        "type": "p",
        "text": "Se trata de procesos de atención que requieren seguimiento constante por parte de profesionales de la salud. Dependiendo de la enfermedad, pueden incluir consultas periódicas, medicación permanente, exámenes de control o terapias especializadas."
      },
      {
        "type": "p",
        "text": "Algunos ejemplos son:"
      },
      {
        "type": "ul",
        "items": [
          "Diabetes.",
          "Hipertensión arterial.",
          "Enfermedades cardiovasculares.",
          "Asma y enfermedades respiratorias crónicas.",
          "Trastornos autoinmunes.",
          "Tratamientos oncológicos.",
          "Enfermedades renales crónicas."
        ]
      },
      {
        "type": "p",
        "text": "Cada caso es diferente, pero todos comparten la necesidad de mantener una atención médica regular para lograr una mejor evolución del paciente."
      },
      {
        "type": "h3",
        "text": "Los principales desafíos de un tratamiento prolongado"
      },
      {
        "type": "h3",
        "text": "Seguimiento médico constante"
      },
      {
        "type": "p",
        "text": "Las consultas periódicas permiten evaluar la evolución de la enfermedad y realizar ajustes oportunos en el tratamiento cuando sea necesario."
      },
      {
        "type": "p",
        "text": "El control adecuado puede ayudar a prevenir complicaciones y mejorar los resultados a largo plazo."
      },
      {
        "type": "h3",
        "text": "Gastos recurrentes de salud"
      },
      {
        "type": "p",
        "text": "Los tratamientos prolongados suelen implicar gastos frecuentes relacionados con consultas, medicamentos, exámenes y procedimientos médicos."
      },
      {
        "type": "p",
        "text": "Por ello, muchas familias buscan alternativas que les permitan gestionar estos costos de manera más eficiente."
      },
      {
        "type": "h3",
        "text": "Impacto en la calidad de vida"
      },
      {
        "type": "p",
        "text": "Además del aspecto físico, algunas enfermedades pueden generar cambios en la rutina diaria, el trabajo y las actividades personales."
      },
      {
        "type": "p",
        "text": "Contar con apoyo médico oportuno contribuye a que el paciente pueda mantener una mejor calidad de vida y un mayor bienestar emocional."
      },
      {
        "type": "h3",
        "text": "Importancia de la continuidad del tratamiento"
      },
      {
        "type": "p",
        "text": "Suspender controles o tratamientos por razones económicas o de acceso puede afectar negativamente la salud del paciente."
      },
      {
        "type": "p",
        "text": "La continuidad en la atención médica es clave para mantener la enfermedad bajo control y reducir riesgos futuros."
      },
      {
        "type": "h3",
        "text": "La importancia de contar con respaldo médico"
      },
      {
        "type": "p",
        "text": "Frente a enfermedades que requieren atención permanente, disponer de una cobertura médica adecuada puede facilitar el acceso a consultas, exámenes y otros servicios necesarios para el seguimiento del tratamiento."
      },
      {
        "type": "p",
        "text": "Esto no solo brinda mayor tranquilidad financiera, sino que también permite que el paciente se concentre en su bienestar y recuperación."
      },
      {
        "type": "p",
        "text": "La salud es una inversión a largo plazo, especialmente cuando se trata de enfermedades que requieren cuidados constantes. Contar con el respaldo adecuado puede marcar una gran diferencia en cada etapa del proceso."
      },
      {
        "type": "p",
        "text": "Si deseas conocer opciones de cobertura médica que te acompañen durante tratamientos médicos continuos, explora los planes de Humana y encuentra la protección ideal para ti y tu familia."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-13.jpg",
    date: "Jul 21, 2026",
    category: "Bienestar",
    title: "Embarazo y gastos médicos: lo que muchas familias no calculan",
    copy: "La llegada de un bebé es una de las experiencias más importantes para una familia. Sin embargo, además de la emoción y la planificación del hogar, es fundamental considerar los costos asociados al cuidado de la salud durante el embarazo. Cuando se habla de gastos...",
    slug: "embarazo-y-gastos-medicos-lo-que-muchas-familias-no-calculan",
    body: [
      {
        "type": "p",
        "text": "La llegada de un bebé es una de las experiencias más importantes para una familia. Sin embargo, además de la emoción y la planificación del hogar, es fundamental considerar los costos asociados al cuidado de la salud durante el embarazo."
      },
      {
        "type": "p",
        "text": "Cuando se habla de gastos médicos embarazo Ecuador, muchas personas piensan únicamente en el parto, pero existen otros servicios que forman parte del proceso y que pueden representar una inversión importante."
      },
      {
        "type": "h3",
        "text": "Más allá del parto"
      },
      {
        "type": "p",
        "text": "Durante el embarazo suelen realizarse:"
      },
      {
        "type": "ul",
        "items": [
          "Controles prenatales periódicos.",
          "Ecografías y exámenes de laboratorio.",
          "Consultas con especialistas.",
          "Atención de posibles complicaciones.",
          "Hospitalización y parto."
        ]
      },
      {
        "type": "p",
        "text": "Cada uno de estos servicios es clave para monitorear la salud de la madre y del bebé, garantizando un seguimiento adecuado durante los nueve meses de gestación."
      },
      {
        "type": "h3",
        "text": "La importancia de planificar"
      },
      {
        "type": "p",
        "text": "Contar con una cobertura médica permite afrontar esta etapa con mayor tranquilidad, facilitando el acceso a consultas, exámenes y atención especializada cuando sea necesario."
      },
      {
        "type": "p",
        "text": "Planificar con anticipación no solo ayuda a organizar las finanzas familiares, sino también a enfocarse en lo más importante: disfrutar el embarazo con la confianza de contar con respaldo médico."
      },
      {
        "type": "p",
        "text": "Si estás pensando en formar una familia o ya estás esperando un bebé, conoce las opciones de cobertura médica que pueden acompañarte en cada etapa de este proceso."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-17.jpg",
    date: "Jun 14, 2026",
    category: "Consejos",
    title: "Elegir cómo cuidar tu salud: lo que debes saber sobre cobertura pública y privada.",
    copy: "Lo que debes saber sobre cobertura pública y privada. Tomar decisiones sobre la salud no siempre es sencillo, especialmente cuando existen distintas opciones de cobertura que pueden generar dudas. En este contexto, entender la diferencia entre salud pública y privada...",
    slug: "elegir-como-cuidar-tu-salud-lo-que-debes-saber-sobre-cobertura-publica-y-privada",
    body: [
      {
        "type": "h3",
        "text": "Lo que debes saber sobre cobertura pública y privada"
      },
      {
        "type": "p",
        "text": "Tomar decisiones sobre la salud no siempre es sencillo, especialmente cuando existen distintas opciones de cobertura que pueden generar dudas. En este contexto, entender la diferencia entre salud pública y privada no solo permite tomar una mejor decisión, sino también construir un bienestar más completo a lo largo del tiempo."
      },
      {
        "type": "p",
        "text": "En Ecuador, el sistema de salud funciona bajo un modelo mixto, donde conviven la salud pública y la salud privada. Ambos sistemas cumplen un rol importante, pero responden a dinámicas y necesidades diferentes, lo que hace clave entender cómo funcionan."
      },
      {
        "type": "p",
        "text": "En este sentido, la salud pública tiene como principal objetivo garantizar el acceso universal. Es decir, cualquier persona puede recibir atención médica sin importar su situación económica. Además, cubre desde consultas generales hasta tratamientos de mayor complejidad, lo que la convierte en un pilar fundamental para la población. De hecho, el sistema público atiende a la mayor parte de los ecuatorianos, lo que refleja su importancia dentro del país."
      },
      {
        "type": "p",
        "text": "Sin embargo, debido a esta alta demanda, también enfrenta ciertos desafíos. Los tiempos de espera para consultas, estudios o procedimientos pueden ser más prolongados, y la disponibilidad de atención puede variar según la zona o el nivel de complejidad del servicio. Esto no implica una menor calidad, sino que responde a la cantidad de personas que dependen de este sistema de manera simultánea."
      },
      {
        "type": "p",
        "text": "Por otro lado, la salud privada se enfoca en ofrecer una atención más ágil y personalizada. Permite acceder a especialistas con mayor rapidez, realizarse estudios en menor tiempo y contar con seguimiento continuo, lo que facilita la detección oportuna y el control de la salud. Además, brinda mayor flexibilidad para elegir médicos, centros de atención y horarios, adaptándose mejor al ritmo de vida de cada persona."
      },
      {
        "type": "p",
        "text": "No obstante, esta alternativa implica una inversión, ya que funciona a través de planes o seguros de salud que varían según la cobertura. Por eso, es importante analizar el valor que aporta en términos de acceso, tiempo y tranquilidad."
      },
      {
        "type": "p",
        "text": "A partir de esto, surge una idea clave: no se trata necesariamente de elegir entre salud pública o privada, sino de entender cómo cada una puede aportar al bienestar. De hecho, muchas personas combinan ambos sistemas, utilizando la salud pública como base y la privada como una herramienta para acceder a atención más oportuna."
      },
      {
        "type": "p",
        "text": "Además, este enfoque cobra aún más relevancia si se considera que una gran parte de las enfermedades puede prevenirse o controlarse con chequeos regulares y atención temprana. Tener acceso a servicios de salud sin demoras puede marcar una diferencia importante en la calidad de vida a largo plazo."
      },
      {
        "type": "p",
        "text": "En consecuencia, la decisión no debería basarse únicamente en lo inmediato, sino en cómo cada opción se adapta a tu estilo de vida, tus necesidades y la importancia que le das a la prevención. Contar con acceso oportuno a atención médica y acompañamiento constante puede generar un impacto significativo en tu bienestar."
      },
      {
        "type": "p",
        "text": "Hoy más que nunca, construir salud implica tomar decisiones informadas y entender que el cuidado no empieza cuando aparece un problema, sino mucho antes. Porque más allá del sistema que elijas, lo importante es sentirte respaldado en cada etapa de tu vida."
      },
      {
        "type": "p",
        "text": "Si quieres complementar tu acceso a la salud con atención ágil y acompañamiento constante, conoce nuestros planes de Cobertura Médica Integral."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-18.jpg",
    date: "Jun 2, 2026",
    category: "Bienestar",
    title: "Rodéate de personas que sumen a tu bienestar.",
    copy: "¿Por qué las personas a tu alrededor también son claves en tu bienestar? Hablar de salud ya no implica únicamente pensar en el cuerpo, sino en un equilibrio más amplio que incluye también el bienestar emocional. En este contexto, las relaciones humanas cumplen un rol...",
    slug: "rodeate-de-personas-que-sumen-a-tu-bienestar",
    body: [
      {
        "type": "h3",
        "text": "¿Por qué las personas a tu alrededor también son claves en tu bienestar?"
      },
      {
        "type": "p",
        "text": "Hablar de salud ya no implica únicamente pensar en el cuerpo, sino en un equilibrio más amplio que incluye también el bienestar emocional. En este contexto, las relaciones humanas cumplen un rol fundamental, ya que las personas que nos rodean pueden influir de manera directa en cómo nos sentimos, cómo enfrentamos los desafíos y cómo construimos nuestra calidad de vida."
      },
      {
        "type": "p",
        "text": "A lo largo del tiempo, distintos estudios han demostrado que contar con redes de apoyo emocional sólidas no solo mejora el estado de ánimo, sino que también tiene un impacto positivo en la salud física. De hecho, las personas que mantienen vínculos sociales saludables tienden a experimentar menores niveles de estrés, mejor respuesta ante situaciones difíciles e incluso menor riesgo de desarrollar enfermedades crónicas."
      },
      {
        "type": "p",
        "text": "En este sentido, surge el concepto de \"personas vitamina\", aquellas que aportan energía positiva, acompañamiento y contención emocional. No se trata de vínculos perfectos, sino de relaciones que generan bienestar, donde existe escucha, empatía y apoyo en distintos momentos de la vida. Estas conexiones pueden encontrarse en la familia, en amistades, en espacios laborales o en comunidades que comparten intereses en común."
      },
      {
        "type": "p",
        "text": "Por el contrario, el aislamiento social o la falta de vínculos significativos puede afectar tanto la salud mental como física. La sensación de soledad sostenida se ha asociado con mayores niveles de ansiedad, depresión e incluso con un impacto negativo en el sistema inmunológico. Esto refuerza la idea de que el bienestar no es solo individual, sino también relacional."
      },
      {
        "type": "p",
        "text": "Además, las redes de apoyo no solo funcionan en momentos difíciles. También son clave para sostener hábitos saludables, motivar cambios positivos y acompañar procesos personales. Compartir objetivos, conversar o simplemente sentirse escuchado puede marcar una diferencia significativa en la forma en que una persona vive su día a día."
      },
      {
        "type": "p",
        "text": "En este sentido, algunas acciones simples pueden ayudarte a fortalecer estas conexiones:"
      },
      {
        "type": "ul",
        "items": [
          "Mantener el contacto, incluso en lo cotidiano, con un mensaje o una llamada.",
          "Dedicar tiempo de calidad, priorizando momentos sin distracciones.",
          "Escuchar activamente, mostrando interés genuino por lo que la otra persona comparte.",
          "Expresar gratitud, reconociendo el valor de ese vínculo en tu vida.",
          "Acompañar tanto en momentos difíciles como en los logros y alegrías.",
          "Respetar espacios y tiempos, entendiendo que cada relación también necesita equilibrio."
        ]
      },
      {
        "type": "p",
        "text": "Ahora bien, construir estas redes no siempre es inmediato. Requiere tiempo, apertura y disposición para generar vínculos genuinos. En muchos casos, implica también identificar qué relaciones aportan bienestar y cuáles pueden generar desgaste emocional, para así priorizar aquellas que suman de manera positiva."
      },
      {
        "type": "p",
        "text": "Por ello, cuidar la salud emocional también implica cuidar las relaciones. Pequeñas acciones como mantener el contacto, dedicar tiempo de calidad o expresar apoyo pueden fortalecer estos vínculos y hacerlos más significativos."
      },
      {
        "type": "p",
        "text": "En consecuencia, entender que el bienestar se construye en conjunto permite ampliar la forma en que cuidamos nuestra salud. Las personas que nos rodean no solo acompañan, sino que también influyen en cómo vivimos, sentimos y enfrentamos la vida."
      },
      {
        "type": "p",
        "text": "Hoy más que nunca, rodearse de personas que aporten bienestar es una decisión que impacta en la salud a largo plazo. Porque, al final, sentirse acompañado también es una forma de cuidarse."
      },
      {
        "type": "p",
        "text": "Cotiza tu nuevo plan con cobertura en nutrición."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-20.jpg",
    date: "May 28, 2026",
    category: "Bienestar",
    title: "El bienestar se construye todos los días.",
    copy: "Más allá de la ausencia de enfermedad, hoy la salud se entiende como un proceso que se construye todos los días a través de decisiones, hábitos y acceso oportuno a servicios médicos. En este contexto, hablar de salud es también hablar de calidad de vida, bienestar se...",
    slug: "el-bienestar-se-construye-todos-los-dias",
    body: [
      {
        "type": "p",
        "text": "Más allá de la ausencia de enfermedad, hoy la salud se entiende como un proceso que se construye todos los días a través de decisiones, hábitos y acceso oportuno a servicios médicos. En este contexto, hablar de salud es también hablar de calidad de vida, bienestar se construye todos los días."
      },
      {
        "type": "p",
        "text": "A lo largo del tiempo, la forma en que entendemos el bienestar ha evolucionado. Actualmente, no se limita únicamente al estado físico, sino que también incluye el equilibrio emocional, la energía diaria y la capacidad de realizar actividades cotidianas con normalidad. Esto implica que la salud no depende solo de la atención médica cuando algo ocurre, sino también de cómo cada persona gestiona su día a día."
      },
      {
        "type": "p",
        "text": "En este sentido, uno de los enfoques más relevantes es la prevención. Según la Organización Mundial de la Salud, alrededor del 80% de las enfermedades cardiovasculares y la diabetes tipo 2 podrían prevenirse con hábitos saludables y controles oportunos. Sin embargo, muchas personas aún no incorporan chequeos médicos regulares en su rutina, lo que puede retrasar diagnósticos y limitar las opciones de tratamiento."
      },
      {
        "type": "p",
        "text": "De la misma manera, los hábitos cotidianos cumplen un rol fundamental en la construcción del bienestar. Mantener una buena hidratación, llevar una alimentación balanceada, realizar actividad física de forma regular y respetar los tiempos de descanso son acciones que influyen directamente en el funcionamiento del organismo. De hecho, la Organización Mundial de la Salud recomienda al menos 150 minutos de actividad física moderada a la semana, aunque una gran parte de la población no alcanza este nivel, aumentando el riesgo de enfermedades crónicas."
      },
      {
        "type": "p",
        "text": "Por otro lado, el acceso oportuno a servicios de salud es un factor determinante. Contar con atención médica adecuada no solo permite tratar enfermedades, sino también prevenirlas, realizar controles periódicos y recibir orientación profesional. En América Latina, una parte importante de la población aún enfrenta barreras de acceso, lo que refuerza la necesidad de generar soluciones que faciliten una atención continua y de calidad."
      },
      {
        "type": "p",
        "text": "Es importante reconocer que el bienestar no es un estado estático, sino una construcción constante. Cada decisión cuenta: desde incorporar hábitos saludables hasta priorizar la prevención y acceder a atención médica a tiempo."
      },
      {
        "type": "p",
        "text": "Hoy más que nunca, cuidar la salud es una responsabilidad compartida que comienza en lo individual y se refleja en lo colectivo. Apostar por el bienestar diario no solo mejora la vida en el presente, sino que también permite proyectar un futuro con mayor tranquilidad y calidad de vida."
      },
      {
        "type": "p",
        "text": "Si quieres empezar a cuidar tu bienestar de forma integral, conoce nuestros planes de Cobertura Médica Integral."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-21.jpg",
    date: "Mar 28, 2026",
    category: "Seguros",
    title: "PH15: el plan para quienes tienen una vida llena de planes.",
    copy: "PH15: el plan para quienes tienen una vida llena de planes. Independizarse no es solo mudarse, pagar tus cuentas o decidir qué hacer un fin de semana. Es asumir que tu bienestar ahora depende de ti. Es entender que cada decisión que tomas —desde aceptar un nuevo...",
    slug: "ph15-el-plan-para-quienes-tienen-una-vida-llena-de-planes",
    body: [
      {
        "type": "h3",
        "text": "PH15: el plan para quienes tienen una vida llena de planes"
      },
      {
        "type": "p",
        "text": "Independizarse no es solo mudarse, pagar tus cuentas o decidir qué hacer un fin de semana. Es asumir que tu bienestar ahora depende de ti. Es entender que cada decisión que tomas —desde aceptar un nuevo trabajo hasta reservar un viaje o empezar un entrenamiento— forma parte de un proyecto más grande: tu vida."
      },
      {
        "type": "p",
        "text": "Durante mucho tiempo, la protección estuvo asociada a etapas posteriores: formar una familia, comprar una casa o alcanzar cierta estabilidad económica. Sin embargo, las nuevas generaciones han cambiado esa narrativa. Hoy, la independencia no es un destino lejano; es una realidad que comienza mucho antes. De hecho, estudios globales como el Millennial & Gen Z Survey de Deloitte muestran que más del 70% de jóvenes prioriza su bienestar físico y emocional como uno de los aspectos más importantes de su vida, incluso por encima de la acumulación de bienes materiales. Esta transformación revela algo clave: cuidarse ya no es una opción secundaria, es parte del estilo de vida."
      },
      {
        "type": "p",
        "text": "Pero ser independiente también implica enfrentar una verdad poco cómoda: ya no hay una red automática que absorba los imprevistos. Cuando algo sucede —una emergencia, una lesión, una consulta inesperada— el impacto no es solo físico. También puede afectar tus finanzas, tus planes y tu tranquilidad. Y es ahí donde la idea de protección deja de ser un gasto para convertirse en una herramienta de estabilidad."
      },
      {
        "type": "p",
        "text": "La generación actual no busca vivir con miedo al riesgo; busca vivir con tranquilidad frente al riesgo. Existe una diferencia importante. No se trata de anticipar lo peor, sino de saber que, si ocurre algo, tendrás cómo responder sin detener tu vida."
      },
      {
        "type": "p",
        "text": "Los jóvenes valoran soluciones claras y flexibles. Buscan una atención médica centrada en el paciente, que combine cobertura hospitalaria, atención ambulatoria y acceso eficiente a distintos servicios de salud."
      },
      {
        "type": "p",
        "text": "En este contexto nace Plan Jóvenes – PH15, un plan que crece contigo. Porque la libertad no es hacerlo todo solo, es tomar decisiones inteligentes desde el inicio. PH15 combina respaldo y practicidad: atención médica integral, copago en medicinas, cobertura por accidentes y crédito hospitalario cuando lo necesites."
      },
      {
        "type": "p",
        "text": "Además, es el único plan en el mercado que te permite evolucionar. Si más adelante quieres acceder a una cobertura superior, puedes cambiar sin empezar de cero. Más libertad, menos complicaciones."
      },
      {
        "type": "p",
        "text": "Porque la verdadera libertad no es actuar sin respaldo, sino tomar decisiones sabiendo que estás protegido. Es poder aceptar un reto profesional sin preocuparte por cómo responderías ante una emergencia. Es viajar con la tranquilidad de que tu bienestar está cubierto. Es entrenar, emprender o mudarte sabiendo que un imprevisto no pondrá en pausa tu proyecto de vida."
      },
      {
        "type": "p",
        "text": "Ser responsable de tu bienestar no te quita libertad; te la amplía. Cuando decides proteger tu salud estás protegiendo tus metas, tu estabilidad financiera y tu tranquilidad emocional. Y eso es parte del crecimiento adulto que muchas veces no se habla lo suficiente: aprender que cuidarte es un acto consciente."
      },
      {
        "type": "p",
        "text": "PH15 acompaña esta etapa porque entiende que tu vida está llena de planes. No es solo una cobertura médica; es una forma de respaldar tu bienestar integral. Está pensado para jóvenes que quieren tomar el control de sus decisiones, que valoran la prevención y que entienden que invertir en protección es invertir en continuidad."
      },
      {
        "type": "p",
        "text": "En Humana entendemos que el bienestar no es estático ni se limita a la ausencia de enfermedad. Es equilibrio entre salud física, estabilidad emocional y seguridad financiera. Por eso diseñamos planes que acompañen el momento de vida en el que te encuentras, no el que otros creen que deberías estar viviendo."
      },
      {
        "type": "p",
        "text": "Porque si tu vida está llena de planes, necesitas un respaldo. Conoce más sobre Plan Jóvenes – PH15 y empieza a construir tu independencia con decisiones inteligentes."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-22.jpg",
    date: "Mar 24, 2026",
    category: "Consejos",
    title: "La ciencia detrás de una sonrisa saludable.",
    copy: "La felicidad suele asociarse con grandes momentos, pero en realidad se manifiesta en gestos cotidianos. Uno de los más poderosos es la sonrisa. Sonreír no solo comunica alegría; también refleja bienestar físico y emocional. Diversos estudios en psicología positiva han...",
    slug: "la-ciencia-detras-de-una-sonrisa-saludable",
    body: [
      {
        "type": "p",
        "text": "La felicidad suele asociarse con grandes momentos, pero en realidad se manifiesta en gestos cotidianos. Uno de los más poderosos es la sonrisa. Sonreír no solo comunica alegría; también refleja bienestar físico y emocional."
      },
      {
        "type": "p",
        "text": "Diversos estudios en psicología positiva han demostrado que sonreír activa neurotransmisores como la dopamina y la serotonina, asociados al placer y la sensación de bienestar. Incluso investigaciones han señalado que el simple acto de sonreír puede reducir los niveles de estrés y mejorar el estado de ánimo. Además, informes globales sobre felicidad muestran que las relaciones interpersonales, la salud y la estabilidad emocional son los principales factores que influyen en la percepción de felicidad."
      },
      {
        "type": "p",
        "text": "Pero hay un punto clave que muchas veces pasa desapercibido: la salud bucal influye directamente en la confianza para sonreír."
      },
      {
        "type": "p",
        "text": "Según la Organización Mundial de la Salud, las enfermedades bucodentales afectan a miles de millones de personas en el mundo. La caries no tratada es una de las afecciones más comunes a nivel global. Cuando no se atienden a tiempo, los problemas dentales pueden generar dolor crónico, infecciones y afectar incluso otras áreas del organismo."
      },
      {
        "type": "p",
        "text": "La evidencia médica también ha vinculado enfermedades periodontales con afecciones cardiovasculares y metabólicas. Esto confirma que la boca no es un sistema aislado, sino una puerta de entrada clave para la salud integral."
      },
      {
        "type": "p",
        "text": "Conoce los planes de Prosonrisas y adquiere el tuyo desde $6.63 por persona."
      },
      {
        "type": "ul",
        "items": [
          "Plan Plus ($6.63 por persona): Cubre tratamientos divididos 36 procedimientos básicos y preventivos, consultas y limpiezas.",
          "Plan Full ($23.08 por persona): Ofrece una cobertura más amplia, incluyendo tratamientos divididos en 50 procedimientos especializados como endodoncia, periodoncia y ortodoncia preventiva."
        ]
      },
      {
        "type": "p",
        "text": "Además del impacto físico, la salud dental tiene un componente emocional importante. Problemas visibles en la sonrisa pueden afectar la autoestima, la seguridad en entornos laborales y la interacción social. En jóvenes y adultos, una sonrisa saludable está asociada con mayor confianza y bienestar emocional."
      },
      {
        "type": "p",
        "text": "Entonces, la prevención es fundamental. Controles odontológicos periódicos, limpiezas profesionales y diagnóstico temprano reducen tratamientos complejos y costos mayores en el futuro."
      },
      {
        "type": "p",
        "text": "En este contexto, contar con un plan de cobertura dental accesible se convierte en una herramienta preventiva clave. El Plan ProSonrisas de Humana ofrece cobertura dental integral. Este plan está enfocado en servicios preventivos, diagnósticos y tratamientos especializados que permiten mantener la salud bucal de forma continua y evitar complicaciones en el futuro."
      },
      {
        "type": "p",
        "text": "En el Día de la Felicidad, vale la pena recordar que sonreír con seguridad es una expresión de bienestar. La felicidad no es solo un estado emocional; también es el resultado de decisiones conscientes sobre nuestra salud."
      },
      {
        "type": "p",
        "text": "Porque una sonrisa saludable no es solo estética. Es confianza, prevención y tranquilidad."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-23.jpg",
    date: "Mar 21, 2026",
    category: "Actualidad",
    title: "Cuidar tu bienestar también es cuidar tus finanzas",
    copy: "Cuando hablamos de bienestar, solemos pensar en alimentación, ejercicio o equilibrio emocional. Sin embargo, hay un factor que influye de manera directa en la tranquilidad y la calidad de vida: la estabilidad financiera. La relación entre bienestar y dinero no siempre...",
    slug: "cuidar-tu-bienestar-tambien-es-cuidar-tus-finanzas",
    body: [
      {
        "type": "p",
        "text": "Cuando hablamos de bienestar, solemos pensar en alimentación, ejercicio o equilibrio emocional. Sin embargo, hay un factor que influye de manera directa en la tranquilidad y la calidad de vida: la estabilidad financiera. La relación entre bienestar y dinero no siempre es evidente, pero está presente en muchas decisiones cotidianas y en la forma en que enfrentamos los imprevistos."
      },
      {
        "type": "p",
        "text": "El bienestar no solo se ve afectado cuando aparece un problema médico. También se altera cuando surge cualquier gasto inesperado: la reparación del auto, la pérdida de un dispositivo importante para trabajar, un daño en el hogar o una emergencia familiar. En esos momentos, la preocupación no es solo económica. Aparecen la ansiedad, la incertidumbre y la sensación de pérdida de control."
      },
      {
        "type": "p",
        "text": "Diversos estudios han demostrado que el estrés financiero es una de las principales fuentes de tensión emocional. Las personas que sienten inseguridad sobre su situación económica presentan mayores niveles de ansiedad, dificultades para dormir y menor bienestar general. En América Latina, la percepción de no poder cubrir gastos o ahorrar afecta a una parte importante de la población, lo que evidencia que la tranquilidad económica es también un componente clave del bienestar emocional."
      },
      {
        "type": "p",
        "text": "La razón es simple: cuando las finanzas son inestables, la mente permanece en estado de alerta. Se posponen decisiones importantes, se evitan actividades por miedo a gastar y, en muchos casos, se deja de priorizar el propio cuidado. El bienestar empieza a depender de la incertidumbre."
      },
      {
        "type": "p",
        "text": "En este contexto, la salud ocupa un lugar especialmente sensible. Un imprevisto médico puede convertirse en uno de los gastos más difíciles de afrontar. Consultas especializadas, exámenes, tratamientos o procedimientos pueden afectar los ahorros personales, alterar la planificación financiera e incluso generar endeudamiento. Más allá del impacto económico, estas situaciones también generan estrés, preocupación y una carga emocional adicional en un momento en el que la prioridad debería ser la recuperación."
      },
      {
        "type": "p",
        "text": "Por eso, la prevención es clave tanto para la salud como para la estabilidad económica. Los chequeos médicos periódicos permiten detectar a tiempo posibles condiciones y evitar tratamientos más complejos y costosos en el futuro."
      },
      {
        "type": "p",
        "text": "Por ejemplo, al evaluar una cobertura médica, es importante comprender qué incluye realmente. La cobertura hospitalaria contempla internaciones, cirugías y atención de emergencias dentro de los servicios hospitalarios, mientras que la cobertura ambulatoria incluye consultas médicas, estudios y exámenes sin necesidad de hospitalización. Entender la diferencia entre cobertura hospitalaria vs ambulatoria ayuda a tomar decisiones más informadas."
      },
      {
        "type": "p",
        "text": "Pero el bienestar financiero no depende únicamente de la cobertura médica. También se construye con pequeños hábitos que fortalecen la sensación de control sobre el futuro. No se trata de grandes ingresos, sino de decisiones conscientes."
      },
      {
        "type": "p",
        "text": "Algunas acciones simples pueden marcar la diferencia:"
      },
      {
        "type": "ul",
        "items": [
          "Destinar un pequeño porcentaje mensual al ahorro, aunque sea una cantidad mínima.",
          "Crear un fondo para imprevistos, equivalente a uno o dos meses de gastos.",
          "Registrar los gastos principales para identificar fugas de dinero.",
          "Priorizar inversiones en bienestar, como salud preventiva, actividad física o apoyo emocional.",
          "Evitar el endeudamiento impulsivo y planificar los gastos importantes."
        ]
      },
      {
        "type": "p",
        "text": "Estos hábitos no solo mejoran la organización financiera. También reducen la ansiedad y fortalecen la sensación de seguridad personal. Cuando existe un respaldo económico, las decisiones se toman con mayor calma y el enfoque puede mantenerse en lo que realmente importa: el bienestar, los proyectos personales y la calidad de vida."
      },
      {
        "type": "p",
        "text": "Actuar de manera oportuna no solo protege el bienestar físico, también reduce el impacto financiero. Por eso contar con una Cobertura Médica Integral no representa un gasto adicional dentro del presupuesto, se trata de una inversión en tranquilidad. Tener cobertura permite acceder a atención sin que cada consulta o procedimiento represente una preocupación económica inesperada. La diferencia no está solo en el costo, sino en la certeza de contar con respaldo cuando más se necesita."
      },
      {
        "type": "p",
        "text": "En Humana sabemos brindar tranquilidad y respaldo en momentos importantes. Nuestros planes están diseñados para acompañarte y ayudarte a proteger tanto tu bienestar como tu estabilidad. Porque cuidar tu bienestar también es cuidar todo lo que has construido."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-24.jpg",
    date: "Mar 18, 2026",
    category: "Actualidad",
    title: "Hospital vs clínica: cuándo acudir a cada uno y cómo tomar la mejor decisión.",
    copy: "Saber cuándo acudir a un hospital y cuándo a una clínica puede marcar la diferencia en tiempo de atención, costos y nivel de complejidad médica. Muchas personas dudan ante un síntoma o una emergencia leve, lo que genera ansiedad y, en algunos casos, saturación...",
    slug: "hospital-vs-clinica-cuando-acudir-a-cada-uno-y-como-tomar-la-mejor-decision",
    body: [
      {
        "type": "p",
        "text": "Saber cuándo acudir a un hospital y cuándo a una clínica puede marcar la diferencia en tiempo de atención, costos y nivel de complejidad médica. Muchas personas dudan ante un síntoma o una emergencia leve, lo que genera ansiedad y, en algunos casos, saturación innecesaria de los servicios hospitalarios."
      },
      {
        "type": "p",
        "text": "Entender las diferencias entre hospital vs clínica permite tomar decisiones informadas y recibir la atención adecuada según cada situación."
      },
      {
        "type": "h3",
        "text": "¿Qué es un hospital?"
      },
      {
        "type": "p",
        "text": "Un hospital es un centro médico preparado para atender emergencias de alta complejidad, cirugías mayores, hospitalizaciones prolongadas y casos críticos. Cuenta con unidad de cuidados intensivos (UCI), quirófanos especializados, banco de sangre y equipos médicos disponibles las 24 horas."
      },
      {
        "type": "p",
        "text": "Debes acudir a un hospital cuando presentas:"
      },
      {
        "type": "ul",
        "items": [
          "Dolor intenso en el pecho",
          "Dificultad severa para respirar",
          "Pérdida de conciencia",
          "Traumatismos graves",
          "Hemorragias importantes",
          "Síntomas neurológicos repentinos (como dificultad para hablar o mover una parte del cuerpo)"
        ]
      },
      {
        "type": "p",
        "text": "En estas situaciones, el tiempo es determinante y la infraestructura hospitalaria es la más adecuada."
      },
      {
        "type": "h3",
        "text": "¿Qué es una clínica?"
      },
      {
        "type": "p",
        "text": "Una clínica suele enfocarse en atención ambulatoria, consultas médicas programadas, chequeos preventivos, exámenes diagnósticos y procedimientos de menor complejidad. Algunas clínicas cuentan con áreas de emergencia, pero para casos no críticos."
      },
      {
        "type": "p",
        "text": "Es recomendable acudir a una clínica cuando presentas:"
      },
      {
        "type": "ul",
        "items": [
          "Síntomas leves o moderados de gripe",
          "Dolor abdominal no intenso",
          "Fiebre sin signos de alarma",
          "Controles de enfermedades crónicas",
          "Chequeos preventivos",
          "Evaluaciones médicas especializadas"
        ]
      },
      {
        "type": "p",
        "text": "En estos casos, la atención suele ser más ágil y adecuada al nivel de complejidad."
      },
      {
        "type": "p",
        "text": "La diferencia principal radica en la capacidad de respuesta. Los hospitales están diseñados para emergencias graves y hospitalizaciones. Las clínicas están orientadas a prevención, diagnóstico temprano y tratamientos ambulatorios."
      },
      {
        "type": "p",
        "text": "Acudir directamente a un hospital por afecciones leves puede implicar tiempos de espera prolongados y costos mayores, cuando una clínica podría resolver el caso de forma eficiente."
      },
      {
        "type": "p",
        "text": "Tomar la decisión correcta no solo mejora tu experiencia como paciente, también optimiza el uso de los servicios de salud. En muchas situaciones, contar con orientación médica o acceso oportuno a consulta puede ayudarte a decidir correctamente entre hospital vs clínica."
      },
      {
        "type": "p",
        "text": "La información adecuada y el respaldo correcto no solo reducen la incertidumbre, también te permiten actuar con seguridad y tranquilidad. Porque saber cuándo ir al hospital y cuándo acudir a una clínica es parte de una decisión responsable sobre tu salud."
      },
      {
        "type": "p",
        "text": "Estar preparado también es prevenir."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-25.jpg",
    date: "Mar 17, 2026",
    category: "Bienestar",
    title: "Mujeres humanas: bienestar, prevención y liderazgo en cada etapa de la vida.",
    copy: "Hablar del Día de la Mujer es reconocer una historia de transformación constante. A lo largo de las últimas décadas, las mujeres han ampliado su participación en educación, liderazgo y emprendimiento, pero también han comenzado a priorizar algo fundamental: su...",
    slug: "mujeres-humanas-bienestar-prevencion-y-liderazgo-en-cada-etapa-de-la-vida",
    body: [
      {
        "type": "p",
        "text": "Hablar del Día de la Mujer es reconocer una historia de transformación constante. A lo largo de las últimas décadas, las mujeres han ampliado su participación en educación, liderazgo y emprendimiento, pero también han comenzado a priorizar algo fundamental: su bienestar integral."
      },
      {
        "type": "p",
        "text": "En Ecuador, las mujeres representan más del 50% de la población y cada vez ocupan más espacios en la educación superior y en la toma de decisiones. Sin embargo, también enfrentan mayores niveles de carga mental y estrés asociados a la doble jornada laboral y familiar. Esto hace que el autocuidado no sea opcional, sino necesario."
      },
      {
        "type": "p",
        "text": "Diversos estudios en América Latina han demostrado que las mujeres presentan mayor prevalencia de ansiedad y trastornos relacionados con el estrés en comparación con los hombres. Además, suelen postergar sus propios chequeos médicos por priorizar responsabilidades familiares o laborales, lo que retrasa diagnósticos oportunos."
      },
      {
        "type": "p",
        "text": "Por eso, la salud preventiva, el acceso a chequeos ginecológicos y diagnósticos tempranos son importantes y en ese sentido ha mejorado significativamente en la región. La detección temprana del cáncer de mama, por ejemplo, puede aumentar considerablemente las probabilidades de tratamiento exitoso cuando se realiza a tiempo."
      },
      {
        "type": "p",
        "text": "Sin embargo, hablar de prevención en la mujer también implica reconocer una realidad compleja: encontrar equilibrio no siempre es sencillo. Las mujeres de hoy enfrentan múltiples responsabilidades de manera simultánea. Desarrollo profesional, formación académica, maternidad, cuidado de familiares, emprendimientos y metas personales conviven en una misma agenda. Este equilibrio constante entre lo laboral, lo emocional y lo familiar representa uno de los grandes retos contemporáneos."
      },
      {
        "type": "p",
        "text": "A lo largo de la historia, las mujeres han conquistado espacios fundamentales en educación, política y liderazgo empresarial. Estos avances han sido trascendentales, pero también han traído nuevas exigencias. La presión por cumplir con todos los roles, muchas veces con estándares elevados, puede generar desgaste físico y emocional si no se acompaña de una cultura real de autocuidado."
      },
      {
        "type": "p",
        "text": "Cuidarse, entonces, no es un acto secundario dentro de esa dinámica. Es el eje que permite sostener cada uno de esos roles con mayor estabilidad. La prevención médica, el descanso adecuado y la salud mental no compiten con el liderazgo; lo fortalecen."
      },
      {
        "type": "p",
        "text": "En conclusión, la salud femenina también implica equilibrio hormonal, salud mental, estabilidad financiera y acompañamiento profesional en cada etapa. Desde la adolescencia hasta la madurez, las necesidades cambian, pero la prevención sigue siendo el eje central."
      },
      {
        "type": "p",
        "text": "Ser una Mujer Humana es entender que la fortaleza también está en pedir apoyo, en priorizar el descanso y en tomar decisiones responsables sobre la propia salud."
      },
      {
        "type": "p",
        "text": "Celebrar el Día de la Mujer también es reconocer que el bienestar no es un lujo. Es un derecho, una herramienta de autonomía y una base para seguir construyendo liderazgo."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-26.jpg",
    date: "Mar 10, 2026",
    category: "Consejos",
    title: "Humana Spot: un espacio seguro para conversaciones muy humanas.",
    copy: "Humana Spot, un nuevo espacio para conectar emociones a través de conversaciones humanas. En un entorno donde todo ocurre con rapidez y donde el tiempo para detenernos parece cada vez más escaso, crear un espacio para conversar se convierte en una decisión consciente....",
    slug: "humana-spot-un-espacio-seguro-para-conversaciones-muy-humanas",
    body: [
      {
        "type": "h3",
        "text": "Humana Spot, un nuevo espacio para conectar emociones a través de conversaciones humanas"
      },
      {
        "type": "p",
        "text": "En un entorno donde todo ocurre con rapidez y donde el tiempo para detenernos parece cada vez más escaso, crear un espacio para conversar se convierte en una decisión consciente. Humana Spot nace desde esa intención: abrir un lugar donde las emociones, las experiencias y las historias tengan profundidad, sentido y escucha real."
      },
      {
        "type": "p",
        "text": "Este podcast es una extensión del compromiso de marca de Humana con el bienestar integral. Porque entendemos que la salud no se limita a consultas médicas o servicios hospitalarios, sino que también está profundamente vinculada con lo que sentimos, pensamos y compartimos."
      },
      {
        "type": "p",
        "text": "Humana Spot es un espacio seguro. Y cuando hablamos de un espacio seguro, nos referimos a un entorno donde las conversaciones se construyen desde el respeto, la empatía y la autenticidad. Un lugar donde se puede hablar abiertamente sobre amor propio, relaciones, manejo del estrés, salud mental, crecimiento personal e independencia, sin juicios ni etiquetas."
      },
      {
        "type": "p",
        "text": "Porque sabemos que la salud emocional es parte fundamental de la atención médica integral, ya que influye directamente en nuestras decisiones, nuestra productividad y nuestra forma de enfrentar los desafíos cotidianos, creamos Humana Spot."
      },
      {
        "type": "p",
        "text": "Diversos estudios en psicología y bienestar han demostrado que expresar emociones y sentirse escuchado reduce los niveles de ansiedad y fortalece la estabilidad emocional. Hablar también es una forma de prevención. Así como un diagnóstico médico oportuno permite actuar a tiempo en la salud física, una conversación honesta puede generar claridad y alivio en la salud mental."
      },
      {
        "type": "p",
        "text": "En Humana creemos en una atención centrada en la persona. Esto significa comprender que cada individuo tiene una historia, un contexto y procesos únicos. Por eso, este podcast se convierte en una herramienta complementaria al cuidado tradicional, promoviendo una visión de bienestar que integra cuerpo, mente y entorno."
      },
      {
        "type": "p",
        "text": "A lo largo de sus episodios, Humana Spot abordará temas que forman parte del bienestar integral: equilibrio entre vida personal y profesional, toma de decisiones conscientes, construcción de proyectos con propósito, relaciones saludables, independencia emocional y responsabilidad personal. Son conversaciones cercanas que reflejan situaciones reales y que acompañan sin invadir."
      },
      {
        "type": "p",
        "text": "Detrás de cada persona, proyecto, empresa o marca, siempre existe una red humana intentando hacer lo mejor posible. Escuchar historias reales nos recuerda que no estamos solos en nuestros procesos. Y esa sensación de acompañamiento también impacta en nuestra salud."
      },
      {
        "type": "p",
        "text": "El compromiso de Humana no se limita a brindar cobertura médica o acceso a servicios de salud. También implica generar espacios que fortalezcan el bienestar emocional y promuevan la reflexión. Porque cuando existe equilibrio entre salud física, estabilidad emocional y seguridad, las decisiones se toman con mayor claridad y tranquilidad."
      },
      {
        "type": "p",
        "text": "Este podcast es una invitación a bajar las tensiones, a reflexionar sin presión y a reconectar con lo que somos. Es tu rincón íntimo, pero cero invasivo, para inspirarte y sentirte acompañado."
      },
      {
        "type": "p",
        "text": "Te invitamos a escuchar Humana Spot en Spotify y ser parte de esta Red Humana que conversa, reflexiona y construye bienestar desde una mirada más consciente y cercana."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-27.jpg",
    date: "Mar 7, 2026",
    category: "Consejos",
    title: "Amor propio y bienestar integral para una vida sana.",
    copy: "En los últimos años, el amor propio se ha convertido en un tema cada vez más presente en conversaciones, redes sociales y espacios de bienestar. Sin embargo, más allá de las frases motivacionales o los momentos de inspiración, el verdadero amor propio se refleja en...",
    slug: "amor-propio-y-bienestar-integral-para-una-vida-sana",
    body: [
      {
        "type": "p",
        "text": "En los últimos años, el amor propio se ha convertido en un tema cada vez más presente en conversaciones, redes sociales y espacios de bienestar. Sin embargo, más allá de las frases motivacionales o los momentos de inspiración, el verdadero amor propio se refleja en las decisiones cotidianas que tomamos para cuidarnos."
      },
      {
        "type": "p",
        "text": "El concepto de amor propio ha evolucionado según las perspectivas históricas, culturales y psicológicas del tiempo. Sin embargo, en términos generales, el amor propio está relacionado con: autoestima, autoconcepto, aceptarse y cuidarse. Muchos de estos elementos se van formando en los primeros años de vida."
      },
      {
        "type": "p",
        "text": "Entonces, ¿por qué hoy estamos hablando más del amor propio? Según la Organización Mundial de la Salud, después de la pandemia hubo un aumento del 25% de casos de depresión y ansiedad, especialmente en jóvenes y mujeres. Y este espacio de aislamiento presentó una nueva forma de ver las cosas: el bienestar dejó de ser un tema opcional y pasó a ser una necesidad urgente."
      },
      {
        "type": "p",
        "text": "Hoy, amarse no es solo sentirse bien emocionalmente. Es escucharse, respetar los propios límites y priorizar el bienestar físico, mental y emocional incluso en medio de la rutina, las responsabilidades y el ritmo acelerado del día a día."
      },
      {
        "type": "p",
        "text": "No hay una receta mágica para el alcanzar el bienestar integral, no se trata únicamente de evitar enfermedades, sino de construir un equilibrio que permita vivir con energía, tranquilidad y calidad de vida. Dormir lo suficiente, alimentarse de manera consciente, mantenerse activo, gestionar el estrés y acudir a controles médicos periódicos son acciones simples que, sostenidas en el tiempo, hacen una gran diferencia."
      },
      {
        "type": "h3",
        "text": "¿Cómo sabes si lo que estás haciendo es amor propio?"
      },
      {
        "type": "p",
        "text": "La prevención es una de las formas más inteligentes de cuidado. Reconocer las señales de alerta y entender cuándo ir a urgencias o cuándo acudir a un hospital es parte del autocuidado. No es reaccionar cuando algo ocurre, sino anticiparse."
      },
      {
        "type": "p",
        "text": "La salud mental también ocupa un lugar fundamental. El estrés constante, la ansiedad o el agotamiento emocional se han vuelto parte de la vida cotidiana para muchas personas. Cuidar la mente implica reconocer las propias emociones, establecer límites saludables, buscar espacios de descanso y, cuando sea necesario, contar con el acompañamiento de un profesional. Pedir ayuda no es una señal de debilidad, sino una decisión de responsabilidad personal."
      },
      {
        "type": "p",
        "text": "Otro aspecto importante del amor propio es la tranquilidad. Sentirse protegido frente a situaciones inesperadas reduce la incertidumbre y permite enfocarse en lo realmente importante: vivir y disfrutar. Contar con acceso oportuno a servicios hospitalarios y atención médica no solo impacta en la salud, también influye en el bienestar emocional, ya que disminuye el estrés asociado a posibles imprevistos."
      },
      {
        "type": "p",
        "text": "El autocuidado tiene además un efecto positivo en el entorno. Las personas que se sienten bien consigo mismas suelen tener más energía, mayor estabilidad emocional y mejores relaciones interpersonales. El bienestar individual se proyecta hacia la familia, los amigos y el entorno laboral. Cuidarse también es una forma de cuidar a los demás."
      },
      {
        "type": "p",
        "text": "En pocas palabras, el amor propio significa tomar decisiones conscientes hoy pensando en el futuro. Significa no postergar la salud, priorizar el bienestar y construir una vida con mayor tranquilidad. No se trata de cambios radicales, sino de pequeños hábitos y decisiones que, sumados, generan un impacto profundo."
      },
      {
        "type": "p",
        "text": "En Humana sabemos que el bienestar integral no es un extra, es la base para aceptarte, cuidarte y fortalecer tu amor propio. Por eso, desarrollamos planes que incluyen acompañamiento psicológico y orientación nutricional, porque el verdadero amor propio también se construye con apoyo y hábitos saludables."
      },
      {
        "type": "p",
        "text": "Cuidarte no es solo una intención, es una decisión que se practica todos los días como parte de tu responsabilidad personal."
      },
      {
        "type": "p",
        "text": "Si quieres conocer más sobre nuestros planes con consultas psicológicas y orientación nutricional, comunícate con nosotros."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-28.jpg",
    date: "Ene 25, 2026",
    category: "Consejos",
    title: "¿Por qué este año te lanzarás de cabeza y le dirás que sí a todas tus metas, ilusiones y propósitos?",
    copy: "Cada inicio de año llega cargado de nuevas metas, ilusiones y propósitos. Decimos que este será el año en el que cuidaremos más de nosotros, viajaremos, emprenderemos proyectos, cambiaremos hábitos o simplemente viviremos con mayor tranquilidad. Sin embargo, muchas...",
    slug: "por-que-este-ano-te-lanzaras-de-cabeza-y-le-diras-que-si-a-todas-tus-metas-ilusi",
    body: [
      {
        "type": "p",
        "text": "Cada inicio de año llega cargado de nuevas metas, ilusiones y propósitos. Decimos que este será el año en el que cuidaremos más de nosotros, viajaremos, emprenderemos proyectos, cambiaremos hábitos o simplemente viviremos con mayor tranquilidad. Sin embargo, muchas veces esos propósitos se quedan en el camino por una razón fundamental: no nos sentimos lo suficientemente bien para sostenerlos en el tiempo. En Humana creemos que decirle \"sí\" a tus propósitos empieza por decirle \"sí\" a tu bienestar."
      },
      {
        "type": "p",
        "text": "Cuando cuentas con salud y tranquilidad, tus metas dejan de ser solo deseos y se convierten en planes reales."
      },
      {
        "type": "p",
        "text": "Tener propósitos es importante, pero tener las condiciones para cumplirlos lo es aún más. El bienestar físico y emocional es la base que te permite avanzar con seguridad hacia lo que te propones. Sin salud, cualquier plan se vuelve frágil; con ella, todo parece posible."
      },
      {
        "type": "p",
        "text": "Un plan médico integral de Humana te brinda la confianza de saber que estás protegido ante imprevistos, que puedes acceder a atención médica cuando lo necesites y que tu salud no será un obstáculo en tu camino. Esa tranquilidad es clave para animarte a tomar decisiones, asumir retos y lanzarte de cabeza a nuevas experiencias."
      },
      {
        "type": "p",
        "text": "Este año, decirle que sí a tus propósitos significa cuidarte de forma consciente. Significa no postergar consultas, atenderte a tiempo, prevenir en lugar de corregir y entender que tu salud es una inversión, no un gasto. Cuando sabes que cuentas con respaldo médico, te mueves con mayor seguridad en cada aspecto de tu vida: trabajo, estudios, deporte, viajes o nuevos hábitos."
      },
      {
        "type": "p",
        "text": "Por ejemplo, aquí podrás hacer un checklist de las metas que quisieras cumplir en 2026."
      },
      {
        "type": "p",
        "text": "Te recomendamos crear un Vision Board y lo tengas presente todo el año para que se cumplan tus objetivos"
      },
      {
        "type": "ul",
        "items": [
          "Mejorar la salud (comer mejor, hacerse chequeos, dormir más)",
          "Hacer ejercicio con regularidad",
          "Reducir el estrés y cuidar la salud mental",
          "Adoptar hábitos más saludables",
          "Bajar de peso o mejorar la condición física",
          "Dejar malos hábitos (fumar, sedentarismo, excesos)",
          "Viajar más o conocer nuevos destinos",
          "Pasar más tiempo con la familia",
          "Tener un bebé o agrandar la familia",
          "Mudarse o mejorar el hogar",
          "Casarse o consolidar una relación",
          "Lograr un mejor equilibrio entre vida personal y trabajo",
          "Emprender un negocio propio",
          "Cambiar de trabajo o buscar crecimiento profesional",
          "Ahorrar o mejorar las finanzas personales",
          "Estudiar algo nuevo (idiomas, cursos, especializaciones)",
          "Aumentar ingresos",
          "Organizar mejor el tiempo y la productividad",
          "Cumplir sueños postergados",
          "Salir de la zona de confort",
          "Trabajar en el amor propio",
          "Tomar decisiones importantes",
          "Vivir con más tranquilidad y seguridad",
          "Disfrutar más el presente"
        ]
      },
      {
        "type": "p",
        "text": "Además, recuerda que un plan médico integral te acompaña en cada etapa. No importa si tu propósito es mejorar tu calidad de vida, iniciar una nueva rutina, enfocarte en tu crecimiento personal o simplemente vivir con menos preocupaciones. Sentirte bien te da la energía, el enfoque y la constancia que necesitas para mantener tus objetivos durante todo el año, no solo en enero."
      },
      {
        "type": "p",
        "text": "En Humana entendemos que los propósitos no son iguales para todos, pero todos tienen algo en común: necesitan bienestar para cumplirse. Por eso, nuestros planes están pensados para acompañarte, cuidarte y darte la tranquilidad que necesitas para avanzar con confianza."
      },
      {
        "type": "p",
        "text": "Este año no se trata solo de hacer una lista de propósitos, como por ejemplo propósitos nutricionales, sino de crear las condiciones para cumplirlos. Lanzarte de cabeza significa apostar por ti, por tu salud y por tu bienestar. Cuando cuentas con un plan médico integral de Humana, tus metas dejan de ser promesas y se transforman en decisiones reales."
      },
      {
        "type": "p",
        "text": "Decirle que sí a tus propósitos es decirle que sí a cuidarte, a sentirte bien y a vivir con tranquilidad. Este año, haz que tus objetivos sean posibles desde la base más importante: tu bienestar integral."
      },
      {
        "type": "p",
        "text": "Estamos contigo tu familia en todo momento y en cualquier lugar. Recuerda nuestros canales de contacto para solventar cualquier duda que tengas sobre tus coberturas y planes."
      }
    ] as BlogBodyBlock[],
  },
  {
    image: "/blog/blog-30.jpg",
    date: "Dic 19, 2025",
    category: "Consejos",
    title: "Esta Navidad una experiencia más Humana",
    copy: "Cada diciembre, las luces se encienden, las calles se llenan de música y los calendarios empiezan a saturarse de compromisos. Y aunque es fácil dejarnos llevar por el ritmo acelerado de regalos, compras y decoraciones, este año te invitamos a hacer una pausa. A...",
    slug: "esta-navidad-una-experiencia-mas-humana",
    body: [
      {
        "type": "p",
        "text": "Cada diciembre, las luces se encienden, las calles se llenan de música y los calendarios empiezan a saturarse de compromisos. Y aunque es fácil dejarnos llevar por el ritmo acelerado de regalos, compras y decoraciones, este año te invitamos a hacer una pausa."
      },
      {
        "type": "p",
        "text": "A respirar."
      },
      {
        "type": "p",
        "text": "A mirar alrededor."
      },
      {
        "type": "p",
        "text": "A recordar que la Navidad no es lo que damos, sino lo que compartimos."
      },
      {
        "type": "p",
        "text": "Porque más allá de los obsequios y la tradición, existe algo más profundo que nos une: nuestra empatía y solidaridad."
      },
      {
        "type": "h3",
        "text": "Volver a lo esencial y vivir una experiencia Humana"
      },
      {
        "type": "p",
        "text": "La Navidad siempre ha sido un puente. Un puente hacia las personas que amamos, hacia quienes nos acompañaron todo el año y hacia quienes, incluso desde la distancia, siguen siendo parte de nosotros."
      },
      {
        "type": "p",
        "text": "Pero muchas veces perdemos de vista que lo más valioso no se compra:"
      },
      {
        "type": "ul",
        "items": [
          "Un abrazo sincero.",
          "Una conversación que cura.",
          "Una risa compartida.",
          "Una historia que vuelve a unirnos."
        ]
      },
      {
        "type": "p",
        "text": "La esencia de la Navidad está en esa conexión tan humana que nos recuerda que no estamos solos, que pertenecemos a alguien, a un grupo, a una historia."
      },
      {
        "type": "h3",
        "text": "Empatía, ver y sentir con el corazón"
      },
      {
        "type": "p",
        "text": "Este año, detente a mirar a quienes te rodean. Todos estamos cargando algo: responsabilidades, cansancio, ilusiones, pérdidas o nuevos comienzos."
      },
      {
        "type": "p",
        "text": "La Navidad es un buen momento para practicar la empatía, para ser conscientes de lo que otros sienten y necesitan."
      },
      {
        "type": "p",
        "text": "Un mensaje inesperado, una llamada, un gesto amable… a veces basta con un \"¿cómo estás de verdad?\" para transformar la noche de alguien."
      },
      {
        "type": "h3",
        "text": "Solidaridad, compartir lo que somos"
      },
      {
        "type": "p",
        "text": "No hace falta dar grandes cosas para ser solidarios."
      },
      {
        "type": "p",
        "text": "En Navidad, lo más valioso es lo que no se envuelve: tiempo, atención y energía."
      },
      {
        "type": "p",
        "text": "A veces basta con gestos simples:"
      },
      {
        "type": "ul",
        "items": [
          "Visitar a ese familiar que atraviesa un momento difícil",
          "Incluir a ese amigo que se quedó sin planes,",
          "Preparar una comida especial para quien hoy más lo necesita",
          "Enseñar a los niños a dar, no desde la obligación, sino desde la empatía y la bondad."
        ]
      },
      {
        "type": "p",
        "text": "Porque a veces, un gesto sincero es el mejor regalo."
      },
      {
        "type": "h3",
        "text": "Conversaciones que importan"
      },
      {
        "type": "p",
        "text": "Apaga los celulares, siéntense en círculo y pregúntense qué ha significado este año para cada uno."
      },
      {
        "type": "p",
        "text": "Para inspirarte sobre cómo hacer que las conversaciones familiares sean significativas y enriquecedoras durante las fiestas, visita este artículo con ideas para pasar una hermosa Navidad en familia, incluyendo escuchar a los mayores y compartir recuerdos."
      },
      {
        "type": "p",
        "text": "Te presentamos 25 actividades para pasar una Navidad en familia."
      },
      {
        "type": "h3",
        "text": "Un ritual familiar"
      },
      {
        "type": "p",
        "text": "Encender una vela por quienes ya no están, escribir deseos en papelitos, ver fotos antiguas o preparar un postre juntos."
      },
      {
        "type": "p",
        "text": "Para encontrar ideas sobre tradiciones familiares y rituales navideños que fortalezcan los vínculos, incluso cocinar un postre típico de Navidad, como los deliciosos pristiños con miel."
      },
      {
        "type": "p",
        "text": "Mira esta deliciosa receta y sorprende a todos."
      },
      {
        "type": "h3",
        "text": "Tiempo de calidad con los niños"
      },
      {
        "type": "p",
        "text": "No necesitan el juguete más caro; necesitan tu presencia: leer cuentos, armar un pesebre, cantar villancicos, cocinar juntos."
      },
      {
        "type": "p",
        "text": "Aquí tienes consejos concretos sobre cómo crear experiencias valiosas con los niños durante la Navidad, centradas en el tiempo y la conexión más que en los regalos: Navidad: inicia desde la emoción por decorar la casa con luces, armar el árbol y el nacimiento, preparar el sahumerio y el playlist de villancicos para las celebraciones en familia."
      },
      {
        "type": "ul",
        "items": [
          "Decorar un árbol",
          "Ideas fáciles para armar tu pesebre",
          "Villancicos"
        ]
      },
      {
        "type": "h3",
        "text": "Una cena más ligera, pero más significativa"
      },
      {
        "type": "p",
        "text": "Menos platos, más historias. Menos estrés, más mirada y escucha."
      },
      {
        "type": "p",
        "text": "Aunque muchas culturas tienen cenas tradicionales extensas, puedes orientar a tus lectores a celebrar con sentido y moderación con ideas que fomentan convivencia y conexión en torno a la mesa."
      },
      {
        "type": "p",
        "text": "¿Qué tal si este año todos cocinan en familia un menú diferente al pavo?"
      },
      {
        "type": "p",
        "text": "Revisa la siguiente receta."
      },
      {
        "type": "p",
        "text": "Y sí la tradición de familia es viajar juntos en estas fechas, te vamos a dar unos tips para disfrutar sin preocupaciones y con toda la tranquilidad."
      },
      {
        "type": "h3",
        "text": "Consejos prácticos para viajar en Navidad"
      },
      {
        "type": "p",
        "text": "Si estás planeando un viaje en esta temporada alta, estos tips pueden ayudarte a reducir el estrés y evitar contratiempos:"
      },
      {
        "type": "ul",
        "items": [
          "Reserva con anticipación vuelos, alojamiento y actividades, ya que diciembre es uno de los meses con mayor demanda turística.",
          "Prefiere vuelos temprano en la mañana, suelen tener menos retrasos y mayor puntualidad.",
          "Llega con suficiente tiempo al aeropuerto, especialmente en fechas festivas.",
          "Si viajas con niños o en familia, empaca snacks y opciones de entretenimiento para hacer el trayecto más llevadero."
        ]
      },
      {
        "type": "p",
        "text": "Sin embargo, incluso con una buena planificación, siempre pueden surgir imprevistos. Por eso, viajar sin estrés también significa sentirse respaldado durante el viaje."
      },
      {
        "type": "h3",
        "text": "La importancia de contar con asistencia en viaje"
      },
      {
        "type": "p",
        "text": "Contar con asistencia médica en viajes es fundamental para proteger tu bienestar cuando estás fuera de casa. Ante una emergencia, tener un respaldo adecuado puede marcar la diferencia entre una situación complicada y una solución oportuna."
      },
      {
        "type": "p",
        "text": "Los planes médicos MetroHumana incluyen asistencia en viaje, un beneficio pensado para acompañarte durante tus desplazamientos dentro y fuera del país, especialmente en fechas como Navidad y Año Nuevo."
      },
      {
        "type": "p",
        "text": "Este respaldo te permite acceder a atención médica o a reembolsos, según las condiciones de tu plan, ayudándote a mantener la tranquilidad incluso lejos de Ecuador."
      },
      {
        "type": "h3",
        "text": "Planes MetroHumana con asistencia en viaje"
      },
      {
        "type": "ul",
        "items": [
          "MetroHumana 50 mil: Cobertura anual por beneficiario de hasta USD 50.000, con asistencia en viaje incluida.",
          "MetroHumana 80 mil: Cobertura de hasta USD 80.000, ideal para quienes buscan mayor respaldo durante viajes y emergencias médicas.",
          "MetroHumana 150 mil: Cobertura de hasta USD 150.000, pensada para viajes largos o destinos con costos médicos elevados."
        ]
      },
      {
        "type": "p",
        "text": "Viajar sin estrés en Navidad no solo depende del destino, sino de la tranquilidad con la que enfrentas el camino."
      },
      {
        "type": "p",
        "text": "Cuidar tu bienestar también es parte del viaje."
      },
      {
        "type": "p",
        "text": "Y esa es, hoy más que nunca, nuestra esencia: ser Humana."
      },
      {
        "type": "p",
        "text": "Estamos contigo tu familia en estas fiestas, si necesitas contar con nosotros escribe a nuestros canales de contacto y prepárate para vivir una Navidad llena de experiencias más humanas."
      }
    ] as BlogBodyBlock[],
  },
];

export const retiredPlanSlides = [
  {
    "date": "Ago 21, 2026",
    "category": "Slide cotizador",
    "title": "Plan Proteger",
    "copy": "Plan de gastos médicos mayores para enfermedades o accidentes graves, desde $25,82 al mes. Se activa una vez superado el deducible. Hasta $500.000 de cobertura por incapacidad.",
    "image": "/blog/blog-05.jpg",
    "detailSlug": "proteger"
  },
  {
    "date": "Ago 21, 2026",
    "category": "Slide cotizador",
    "title": "Humana Kids",
    "copy": "La versión especializada de nuestro plan familiar para menores de edad desde $79,54 al mes. Incluye control de niño sano y vacunas. De 0 a 17 años.",
    "image": "/blog/blog-06.jpg"
  },
  {
    "date": "Ago 21, 2026",
    "category": "Slide cotizador",
    "title": "Plan Jóvenes",
    "copy": "De 18 a 35 años. Cobertura accesible diseñada para la independencia desde $58,27 al mes. Cobertura de $15.000.",
    "image": "/blog/blog-07.jpg"
  },
  {
    "date": "Ago 21, 2026",
    "category": "Slide cotizador",
    "title": "Plan Prosonrisas",
    "copy": "Plan dental para ti y tu familia. Desde $6,63 al mes por persona. Para todas las edades.",
    "image": "/blog/blog-08.jpg"
  },
  {
    "date": "Ago 20, 2026",
    "category": "Slide cotizador",
    "title": "Individual y Familiar",
    "copy": "Cobertura para ti y toda tu familia con la red médica más amplia del Ecuador. Cobertura desde $15.000 hasta $150.000. Para todas las edades.",
    "image": "/blog/blog-09.jpg",
    "detailSlug": "individual-familiar"
  }
] satisfies Array<{ date: string; category: string; title: string; copy: string; image: string; detailSlug?: string }>;
