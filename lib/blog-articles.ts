export const blogArticles = [
  { image: "/blog/blog-01.jpg", date: "Sep 11, 2026", category: "Bienestar", title: "¿Cuánto cuesta una hospitalización en Ecuador en 2026?", copy: "Una hospitalización imprevista representa uno de los mayores riesgos para la estabilidad económica de una familia. Conoce los valores aproximados de un internamiento hospitalario en Ecuador durante el 2026 y cómo contar con un plan de salud adecuado te resguarda frente a estos costos elevados." },
  { image: "/blog/blog-02.jpg", date: "Sep 4, 2026", category: "Bienestar", title: "¿Cuál es la diferencia entre medicina prepagada y seguro médico?", copy: "Aunque suelen usarse como sinónimos, la medicina prepagada y el seguro médico poseen diferencias estructurales, operativas y de regulación en Ecuador. Conocer las características distintivas de cada modalidad te permitirá tomar la decisión más idónea para la protección de tu salud y la de tu familia." },
  { image: "/blog/blog-03.jpg", date: "Ago 30, 2026", category: "Bienestar", title: "¿Qué cubre realmente una cobertura médica en Ecuador?", copy: "Muchas personas se preguntan qué servicios incluye efectivamente su plan de salud. Conocer el alcance real de una cobertura médica en Ecuador desde consultas ambulatorias hasta procedimientos quirúrgicos complejos es fundamental para aprovechar al máximo sus beneficios y evitar contratiempos financieros." },
];

const fallbackImages = [
  "/bienestar-hero.webp",
  "/familia-humana.png",
  "/humana-business-team-v2.png",
  "/humana-business-team.jpg",
  "/humana-historia-hero.png",
  "/humana-prosonrisas-hero.png",
  "/plan-mh150-hero.jpeg",
  "/plan-mh80-hero.jpeg",
  "/plan-ph15-hero.jpeg",
  "/plan-ph30-hero.jpeg",
  "/beneficios-hero.webp",
  "/red-medica-hero.webp",
  "/servicios-clientes-hero.webp",
];

const moreBlogArticlesRaw = [
  { date: "Ago 27, 2026", category: "Salud", title: "Guía completa para entender la cobertura médica en Ecuador", copy: "Navegar por el sistema de salud y comprender cómo funcionan los planes de asistencia médica puede generar muchas dudas. En Ecuador, contar con un respaldo que proteja a la familia frente a imprevistos es una prioridad, pero es fundamental saber exactamente qué implica..." },
  { date: "Ago 2, 2026", category: "Bienestar", title: "¿Qué sucede cuando una enfermedad requiere tratamiento continuo?", copy: "Cuando una persona recibe el diagnóstico de una enfermedad crónica o de una condición que requiere seguimiento permanente, el desafío va más allá del tratamiento inicial. En muchos casos, es necesario mantener controles médicos, medicamentos, exámenes y terapias..." },
  { date: "Jul 28, 2026", category: "Seguros", title: "Cómo evitar deudas por gastos médicos inesperados", copy: "Los imprevistos de salud pueden ocurrir cuando menos se esperan. Una emergencia, una hospitalización o la necesidad de realizar exámenes y tratamientos especializados pueden generar gastos importantes que impactan el presupuesto familiar. Por esta razón, prepararse..." },
  { date: "Jul 25, 2026", category: "Seguros", title: "¿Qué enfermedades suelen generar mayores gastos médicos?", copy: "La salud es uno de los activos más valiosos, pero cuando aparece una enfermedad compleja o de larga duración, los gastos médicos pueden incrementarse significativamente. Por eso, conocer cuáles son las enfermedades más costosas Ecuador permite tomar decisiones más..." },
  { date: "Jul 21, 2026", category: "Bienestar", title: "Embarazo y gastos médicos: lo que muchas familias no calculan", copy: "La llegada de un bebé es una de las experiencias más importantes para una familia. Sin embargo, además de la emoción y la planificación del hogar, es fundamental considerar los costos asociados al cuidado de la salud durante el embarazo. Cuando se habla de gastos..." },
  { date: "Jul 15, 2026", category: "Salud", title: "Salud pública vs privada en Ecuador: ¿cuál es la diferencia?", copy: "Salud pública vs privada en Ecuador: diferencias reales. Cuando hablamos de acceso a servicios médicos en el país, una de las preguntas más frecuentes es cuál es la mejor alternativa entre la salud pública y la salud privada. Aunque ambos sistemas tienen el mismo..." },
  { date: "Jun 21, 2026", category: "Bienestar", title: "La disciplina también es bienestar: cómo el deporte transforma tu vida.", copy: "La disciplina también es bienestar: cómo el deporte transforma tu vida. El bienestar no se construye de un día para otro. Se forma en lo cotidiano, en las decisiones pequeñas que repetimos incluso cuando no tenemos ganas, y en los hábitos que, con el tiempo, empiezan..." },
  { date: "Jun 17, 2026", category: "Consejos", title: "Cobertura básica vs completa: ¿qué cambia realmente?", copy: "Cobertura de salud básica vs completa: diferencias clave. Elegir una cobertura de salud no siempre es una decisión simple, especialmente cuando existen distintas opciones que, a primera vista, pueden parecer similares. En este contexto, entender la diferencia..." },
  { date: "Jun 14, 2026", category: "Consejos", title: "Elegir cómo cuidar tu salud: lo que debes saber sobre cobertura pública y privada.", copy: "Lo que debes saber sobre cobertura pública y privada. Tomar decisiones sobre la salud no siempre es sencillo, especialmente cuando existen distintas opciones de cobertura que pueden generar dudas. En este contexto, entender la diferencia entre salud pública y privada..." },
  { date: "Jun 2, 2026", category: "Bienestar", title: "Rodéate de personas que sumen a tu bienestar.", copy: "¿Por qué las personas a tu alrededor también son claves en tu bienestar? Hablar de salud ya no implica únicamente pensar en el cuerpo, sino en un equilibrio más amplio que incluye también el bienestar emocional. En este contexto, las relaciones humanas cumplen un rol..." },
  { date: "May 30, 2026", category: "Actualidad", title: "Hábitos saludables para construir salud a largo plazo.", copy: "Hábitos saludables para construir salud. Construir salud a largo plazo no depende de cambios extremos ni de rutinas difíciles de sostener, sino de decisiones pequeñas y consistentes que se integran en la vida diaria. En el marco de este..." },
  { date: "May 28, 2026", category: "Bienestar", title: "El bienestar se construye todos los días.", copy: "Más allá de la ausencia de enfermedad, hoy la salud se entiende como un proceso que se construye todos los días a través de decisiones, hábitos y acceso oportuno a servicios médicos. En este contexto, hablar de salud es también hablar de calidad de vida, bienestar se..." },
  { date: "Mar 28, 2026", category: "Seguros", title: "PH15: el plan para quienes tienen una vida llena de planes.", copy: "PH15: el plan para quienes tienen una vida llena de planes. Independizarse no es solo mudarse, pagar tus cuentas o decidir qué hacer un fin de semana. Es asumir que tu bienestar ahora depende de ti. Es entender que cada decisión que tomas —desde aceptar un nuevo..." },
  { date: "Mar 24, 2026", category: "Consejos", title: "La ciencia detrás de una sonrisa saludable.", copy: "La felicidad suele asociarse con grandes momentos, pero en realidad se manifiesta en gestos cotidianos. Uno de los más poderosos es la sonrisa. Sonreír no solo comunica alegría; también refleja bienestar físico y emocional. Diversos estudios en psicología positiva han..." },
  { date: "Mar 21, 2026", category: "Actualidad", title: "Cuidar tu bienestar también es cuidar tus finanzas", copy: "Cuando hablamos de bienestar, solemos pensar en alimentación, ejercicio o equilibrio emocional. Sin embargo, hay un factor que influye de manera directa en la tranquilidad y la calidad de vida: la estabilidad financiera. La relación entre bienestar y dinero no siempre..." },
  { date: "Mar 18, 2026", category: "Actualidad", title: "Hospital vs clínica: cuándo acudir a cada uno y cómo tomar la mejor decisión.", copy: "Saber cuándo acudir a un hospital y cuándo a una clínica puede marcar la diferencia en tiempo de atención, costos y nivel de complejidad médica. Muchas personas dudan ante un síntoma o una emergencia leve, lo que genera ansiedad y, en algunos casos, saturación..." },
  { date: "Mar 17, 2026", category: "Bienestar", title: "Mujeres humanas: bienestar, prevención y liderazgo en cada etapa de la vida.", copy: "Hablar del Día de la Mujer es reconocer una historia de transformación constante. A lo largo de las últimas décadas, las mujeres han ampliado su participación en educación, liderazgo y emprendimiento, pero también han comenzado a priorizar algo fundamental: su..." },
  { date: "Mar 10, 2026", category: "Consejos", title: "Humana Spot: un espacio seguro para conversaciones muy humanas.", copy: "Humana Spot, un nuevo espacio para conectar emociones a través de conversaciones humanas. En un entorno donde todo ocurre con rapidez y donde el tiempo para detenernos parece cada vez más escaso, crear un espacio para conversar se convierte en una decisión consciente...." },
  { date: "Mar 7, 2026", category: "Consejos", title: "Amor propio y bienestar integral para una vida sana.", copy: "En los últimos años, el amor propio se ha convertido en un tema cada vez más presente en conversaciones, redes sociales y espacios de bienestar. Sin embargo, más allá de las frases motivacionales o los momentos de inspiración, el verdadero amor propio se refleja en..." },
  { date: "Ene 25, 2026", category: "Consejos", title: "¿Por qué este año te lanzarás de cabeza y le dirás que sí a todas tus metas, ilusiones y propósitos?", copy: "Cada inicio de año llega cargado de nuevas metas, ilusiones y propósitos. Decimos que este será el año en el que cuidaremos más de nosotros, viajaremos, emprenderemos proyectos, cambiaremos hábitos o simplemente viviremos con mayor tranquilidad. Sin embargo, muchas..." },
  { date: "Ene 20, 2026", category: "Salud", title: "¿Por qué es importante acceder a consultas telemáticas?", copy: "En la rutina diaria, el trabajo, la familia y las responsabilidades suelen ocupar el primer lugar, dejando la salud para \"cuando haya tiempo\". Muchas personas mayores de edad saben que algo no está del todo bien, pero postergan la consulta médica por falta de tiempo..." },
  { date: "Dic 19, 2025", category: "Consejos", title: "Esta Navidad una experiencia más Humana", copy: "Cada diciembre, las luces se encienden, las calles se llenan de música y los calendarios empiezan a saturarse de compromisos. Y aunque es fácil dejarnos llevar por el ritmo acelerado de regalos, compras y decoraciones, este año te invitamos a hacer una pausa. A..." },
];

const officialImages: Record<number, string> = {
  0: "/blog/blog-04.jpg",
  1: "/blog/blog-05.jpg",
  2: "/blog/blog-06.jpg",
  3: "/blog/blog-07.jpg",
  4: "/blog/blog-08.jpg",
};

export const moreBlogArticles = moreBlogArticlesRaw.map((article, i) => ({
  ...article,
  image: officialImages[i] ?? fallbackImages[i % fallbackImages.length],
}));

export const allBlogArticles = [...blogArticles, ...moreBlogArticles];

export const blogPlans = [
  { date: "Ago 21, 2026", category: "Slide cotizador", title: "Plan Proteger", copy: "Plan de gastos médicos mayores para enfermedades o accidentes graves, desde $25,82 al mes. Se activa una vez superado el deducible. Hasta $500.000 de cobertura por incapacidad.", image: "/plan-ph15-hero.jpeg" },
  { date: "Ago 21, 2026", category: "Slide cotizador", title: "Humana Kids", copy: "La versión especializada de nuestro plan familiar para menores de edad desde $79,54 al mes. Incluye control de niño sano y vacunas. De 0 a 17 años.", image: "/familia-humana.png" },
  { date: "Ago 21, 2026", category: "Slide cotizador", title: "Plan Jóvenes", copy: "De 18 a 35 años. Cobertura accesible diseñada para la independencia desde $58,27 al mes. Cobertura de $15.000.", image: "/plan-ph30-hero.jpeg" },
  { date: "Ago 21, 2026", category: "Slide cotizador", title: "Plan Prosonrisas", copy: "Plan dental para ti y tu familia. Desde $6,63 al mes por persona. Para todas las edades.", image: "/humana-prosonrisas-hero.png" },
  { date: "Ago 20, 2026", category: "Slide cotizador", title: "Individual y Familiar", copy: "Cobertura para ti y toda tu familia con la red médica más amplia del Ecuador. Cobertura desde $15.000 hasta $150.000. Para todas las edades.", image: "/plan-mh150-hero.jpeg" },
];
