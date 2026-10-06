// Catálogo oficial de rutas del blog, según el sitemap de humana.med.ec.
// Es la ÚNICA fuente de verdad para slug + categoría de cada post oficial.
// No todos los posts listados aquí tienen contenido todavía: los que no están
// en `lib/blog-articles.ts` quedan "pendientes de contenido oficial" y no
// generan página pública ni aparecen en ningún listado (ver blog-source.ts).

export type BlogCategorySlug =
  | "bienestar"
  | "humana-news"
  | "consejos"
  | "seguros"
  | "actualidad"
  | "salud"
  | "servicios-humana"
  | "sin-categoria";

export const blogCategories: { slug: BlogCategorySlug; label: string }[] = [
  { slug: "bienestar", label: "Bienestar" },
  { slug: "humana-news", label: "Humana News" },
  { slug: "consejos", label: "Consejos" },
  { slug: "seguros", label: "Seguros" },
  { slug: "actualidad", label: "Actualidad" },
  { slug: "salud", label: "Salud" },
  { slug: "servicios-humana", label: "Servicios Humana" },
  { slug: "sin-categoria", label: "Sin categoría" },
];

export type BlogCatalogEntry = { slug: string; category: BlogCategorySlug };

// Categorías del sitio oficial SIN posts confirmados (investigacion, portada,
// obra-social, y la subcategoría servicios-humana/servicios-online-y-a-domicilio):
// por instrucción explícita, NO se crean páginas para ellas todavía. Quedan
// pendientes de decisión.
export const blogCatalog: BlogCatalogEntry[] = [
  // --- bienestar (40: 37 del sitemap + 3 confirmados fuera de sitemap) ---
  { slug: "cual-es-la-diferencia-entre-medicina-prepagada-y-seguro-medico", category: "bienestar" },
  { slug: "que-cubre-realmente-una-cobertura-medica-en-ecuador", category: "bienestar" },
  { slug: "embarazo-y-gastos-medicos", category: "bienestar" },
  { slug: "enfermedad-requiere-tratamiento-continuo", category: "bienestar" },
  { slug: "la-disciplina-tambien-es-bienestar-como-el-deporte-transforma-tu-vida", category: "bienestar" },
  { slug: "sintomas-del-resfriado", category: "bienestar" },
  { slug: "estimulacion-cognitiva-y-prevencion-del-alzheimer", category: "bienestar" },
  { slug: "personas-que-sumen", category: "bienestar" },
  { slug: "bienestar-se-construye", category: "bienestar" },
  { slug: "mujeres-humanas-bienestar-prevencion-liderazgo", category: "bienestar" },
  { slug: "dia-mundial-del-cancer", category: "bienestar" },
  { slug: "salud-mental-mama-depresion-parto", category: "bienestar" },
  { slug: "salud-infantil", category: "bienestar" },
  { slug: "influenza-tipo-a", category: "bienestar" },
  { slug: "madre-y-mujer-al-mismo-tiempo", category: "bienestar" },
  { slug: "mejora-tus-habitos-alimenticios", category: "bienestar" },
  { slug: "rutina-de-entrenamiento", category: "bienestar" },
  { slug: "diez-consejos-prevenir-cancer", category: "bienestar" },
  { slug: "propositos-nutricionales", category: "bienestar" },
  { slug: "como-elegir-el-mejor-plan-medico", category: "bienestar" },
  { slug: "afecciones-cardiacas-en-mujeres", category: "bienestar" },
  { slug: "bienestar-mental-plan-medico", category: "bienestar" },
  { slug: "actividades-fisicas-distintas-edades", category: "bienestar" },
  { slug: "vida-saludable-2", category: "bienestar" },
  { slug: "compromiso-consideracion", category: "bienestar" },
  { slug: "estres-vida-sociedad-jovenes", category: "bienestar" },
  { slug: "regreso-clases-prevencion-bienestar", category: "bienestar" },
  { slug: "cambio-climatico-en-ecuador", category: "bienestar" },
  { slug: "relacion-entre-el-sueno-y-la-salud", category: "bienestar" },
  { slug: "manejar-estres-jovenes", category: "bienestar" },
  { slug: "mujeres-adolescentes-cambios-hormonas-ciclo", category: "bienestar" },
  { slug: "inversion-ahorro-bienestar-familia-utilidades", category: "bienestar" },
  { slug: "mujer-rol-bienestar-de-su-familia", category: "bienestar" },
  { slug: "bienestar-mental", category: "bienestar" },
  { slug: "diabetes-ecuador", category: "bienestar" },
  { slug: "cinco-consejos-para-tener-un-corazon-sano", category: "bienestar" },
  { slug: "la-importancia-de-una-postura-saludable", category: "bienestar" },
  { slug: "consecuencia-emergencia-medica-sin-cobertura-ecuador", category: "bienestar" },
  { slug: "revisar-contratar-una-cobertura-salud-ecuador", category: "bienestar" },
  { slug: "diccionario-medico-financiero-terminos-cobertura-salud-ecuador", category: "bienestar" },

  // --- humana-news (28) ---
  { slug: "que-la-temporada-festiva-no-afecte-tus-habitos-alimenticios", category: "humana-news" },
  { slug: "humana-gran-contribuyente", category: "humana-news" },
  { slug: "premio-ekos-equidad-genero-2023", category: "humana-news" },
  { slug: "blog-regula-tu-presion-arterial-con-dos-simples-pasos", category: "humana-news" },
  { slug: "blog-me-puedo-contagiar-de-covid-si-ya-estoy-vacunado", category: "humana-news" },
  { slug: "decalogo-para-prevenir-y-aliviar-los-sintomas-del-resfriado", category: "humana-news" },
  { slug: "detecta-a-tiempo-los-sintomas-de-la-influenza-tipo-a", category: "humana-news" },
  { slug: "avances-y-seguridad-de-las-vacunas-y-su-contribucion-a-la-salud-publica", category: "humana-news" },
  { slug: "una-pausa-activa-puede-ser-tu-mejor-aliada-en-horas-de-trabajo", category: "humana-news" },
  { slug: "item-menu-por-que-humana", category: "humana-news" },
  { slug: "nuevo-centro-metrored-en-guayaquil-2", category: "humana-news" },
  { slug: "humana-y-farmaenlace-firmaron-importante-alianza-comercial", category: "humana-news" },
  { slug: "diez-consejos-utiles-para-prevenir-el-cancer-segun-la-oms", category: "humana-news" },
  { slug: "cuales-son-tus-propositos-nutricionales-para-el-2019", category: "humana-news" },
  { slug: "10-maneras-de-controlar-la-presion-arterial-alta-sin-medicamentos", category: "humana-news" },
  { slug: "4-pasos-para-controlar-la-diabetes-de-por-vida", category: "humana-news" },
  { slug: "humana-express", category: "humana-news" },
  { slug: "nota-medicamentos-a-domicilio", category: "humana-news" },
  { slug: "premio-ekos-reputacion", category: "humana-news" },
  { slug: "farmacias-metrored", category: "humana-news" },
  { slug: "puntos-de-venta-pharmacys", category: "humana-news" },
  { slug: "4-pasos-para-controlar-la-diabetes-de-por-vida-2", category: "humana-news" },
  { slug: "como-acelerar-tu-metabolismo-para-bajar-de-peso", category: "humana-news" },
  { slug: "la-importancia-del-ejercicio-aerobico", category: "humana-news" },
  { slug: "humana-con-endurance-ecuador", category: "humana-news" },
  { slug: "nuevo-centro-metrored-en-guayaquil", category: "humana-news" },
  { slug: "humana-en-forma", category: "humana-news" },
  { slug: "humana-sortea-5-planes-marathon-juega-seguro", category: "humana-news" },

  // --- consejos (22) ---
  { slug: "navidad-experiencias-mas-humanas", category: "consejos" },
  { slug: "vacunar-a-tus-hijos", category: "consejos" },
  { slug: "humana-spot-un-espacio-seguro", category: "consejos" },
  { slug: "elegir-como-cuidar-tu-salud", category: "consejos" },
  { slug: "corazon-sano", category: "consejos" },
  { slug: "cobertura-basica-vs-completa-que-cambia-realmente", category: "consejos" },
  { slug: "ciencia-detras-sonrisa-saludable", category: "consejos" },
  { slug: "enfermedades-bucodentales", category: "consejos" },
  { slug: "claves-para-elegir-tu-plan-medico", category: "consejos" },
  { slug: "cuidarse-es-prevenir", category: "consejos" },
  { slug: "amor-propio-bienestar-integral", category: "consejos" },
  { slug: "metas-ilusiones-y-propositos", category: "consejos" },
  { slug: "postura-saludable", category: "consejos" },
  { slug: "nutricion-salud-integral", category: "consejos" },
  { slug: "enfermedades-preexistentes-padre-madre-debe-saber", category: "consejos" },
  { slug: "historia-real-bancarrota", category: "consejos" },
  { slug: "20-razones-plan-medico-integral", category: "consejos" },
  { slug: "alimentacion-saludable", category: "consejos" },
  { slug: "pausa-activa-en-trabajo", category: "consejos" },
  { slug: "convierte-al-sol-en-tu-aliado", category: "consejos" },
  { slug: "vida-saludable", category: "consejos" },
  { slug: "productividad-trabajando", category: "consejos" },

  // --- seguros (20) ---
  { slug: "como-evitar-deudas-por-gastos-medicos-inesperados", category: "seguros" },
  { slug: "que-enfermedades-suelen-generar-mayores-gastos-medicos", category: "seguros" },
  { slug: "plan-dental-ecuador", category: "seguros" },
  { slug: "ph15-el-plan-vida-llena-planes", category: "seguros" },
  { slug: "plan-medico-colaboradores", category: "seguros" },
  { slug: "red-medica-de-humana", category: "seguros" },
  { slug: "por-que-deberias-tener-un-plan-medico", category: "seguros" },
  { slug: "medico-en-la-familia", category: "seguros" },
  { slug: "plan-medico-para-colaboradores", category: "seguros" },
  { slug: "chequeo-prevencion-consulta-medica", category: "seguros" },
  { slug: "como-tratan-los-seguros-privados-el-cancer", category: "seguros" },
  { slug: "copago-con-tu-plan-medico", category: "seguros" },
  { slug: "cambiate-de-plan-medico-sin-preocupaciones", category: "seguros" },
  { slug: "atencion-medica-para-adultos-mayores", category: "seguros" },
  { slug: "seguro-medico-antes-durante-y-despues-del-embarazo", category: "seguros" },
  { slug: "mujeres-saludables-hogar-laboral", category: "seguros" },
  { slug: "mama-mujeres-paptest-examen-prevencion", category: "seguros" },
  { slug: "importancia-declarar-enfermedades-preexistentes", category: "seguros" },
  { slug: "plan-medico-deducible", category: "seguros" },
  { slug: "beneficios-telemedicina-planes-medicos", category: "seguros" },

  // --- actualidad (7) ---
  { slug: "habitos-saludables-para-construir-salud-a-largo-plazo", category: "actualidad" },
  { slug: "cuidar-tu-bienestar-finanzas", category: "actualidad" },
  { slug: "hospital-vs-clinica-cuando-acudir-a-cada-uno", category: "actualidad" },
  { slug: "planes-de-cobertura-medica", category: "actualidad" },
  { slug: "asistencia-medica-internacional-vs-nacional", category: "actualidad" },
  { slug: "salud-mental-mama-depresion-parto-2", category: "actualidad" },
  { slug: "accidentes-ecuador", category: "actualidad" },

  // --- salud (4) ---
  { slug: "guia-completa-para-entender-la-cobertura-medica-en-ecuador", category: "salud" },
  { slug: "salud-publica-vs-privada-ecuador-cual-es-la-diferencia", category: "salud" },
  { slug: "por-que-es-importante-acceder-a-consultas-telematicas", category: "salud" },
  { slug: "tecnologias-emergentes-cuidado-alud", category: "salud" },

  // --- servicios-humana (3) ---
  { slug: "9-razones-para-contratar-un-plan-de-gastos-medicos-mayores", category: "servicios-humana" },
  { slug: "gran-red-medica-integral", category: "servicios-humana" },
  { slug: "nuevos-topes-consultas-medicas", category: "servicios-humana" },

  // --- sin-categoria (1) ---
  { slug: "bienestar-ocupacional-inversion-estrategica-empresas", category: "sin-categoria" },
];

export function findCatalogEntry(category: string, slug: string): BlogCatalogEntry | undefined {
  return blogCatalog.find((p) => p.category === category && p.slug === slug);
}

export function findCatalogEntryBySlug(slug: string): BlogCatalogEntry | undefined {
  return blogCatalog.find((p) => p.slug === slug);
}

export function getCategoryLabel(category: string): string {
  return blogCategories.find((c) => c.slug === category)?.label ?? category;
}
