// Cuadros de cobertura oficiales de los planes empresariales (Humana Business y Plan Pyme).
// Fuente: humana.med.ec, extraído el 5 de octubre de 2026.

export type CuadroSection = { section?: string; label: string; value: string };

export const cuadroA: CuadroSection[] = [
  { section: "DATOS GENERALES", label: "Cobertura por enfermedad", value: "$10.000" },
  { label: "Alternativas de deducible anual por persona", value: "$50, $80 o $100" },
  { label: "Red", value: "Metrohumana" },
  { section: "HOSPITALIZACIÓN", label: "Cobertura", value: "90%" },
  { label: "Habitación y alimentación", value: "$120" },
  { section: "AMBULATORIA", label: "Consultas médicas ESPECIALIDADES BÁSICAS en centros médicos autorizados - SIN DEDUCIBLE", value: "Metrored $4 - Otros $8" },
  { label: "Consultas médicas SUBESPECIALIDADES en centros médicos autorizados - SIN DEDUCIBLE", value: "Metrored $8 - Otros $12" },
  { label: "Consultas médicas en Red de médicos asociados", value: "$15 y $25" },
  { label: "Consultas médicas en Libre elección por reembolso", value: "70% de $64" },
  { label: "Médico a domicilio", value: "$10" },
  { label: "Exámenes de diagnóstico", value: "90% en Red Humana" },
  { label: "Terapias de Rehabilitación (Lenguaje, cardíaca, física, neurológica, de dolor, ondas de choque y respiratoria). Aplica deducible", value: "Valor por sesión $30, hasta un máximo de 30 sesiones por tipo de terapia" },
  { section: "MEDICINAS", label: "Monto copago anual en toda la red de Farmacias", value: "$1.000" },
  { label: "Copago Medicinas A", value: "90% hasta tope de cobertura" },
  { label: "Copago Medicinas B", value: "70% hasta tope de cobertura" },
  { label: "Copago Otros prestadores", value: "70% hasta tope de cobertura" },
  { label: "Copago Libre elección por reembolso", value: "60% hasta tope de cobertura" },
  { section: "EXÁMENES DE DIAGNÓSTICO", label: "Exámenes de diagnóstico (Laboratorio - Rayos x convencional y ecografías) en centros médicos preautorizados - SIN DEDUCIBLE", value: "90% en Red Humana" },
  { label: "Otros exámenes de diagnóstico en centros médicos preautorizados", value: "80% en Red Humana" },
  { label: "Exámenes de diagnóstico Libre elección por reembolso", value: "70%" },
  { label: "Medicina Alternativa", value: "Máx 30 sesiones anuales, hasta $30 c/u" },
  { section: "EMERGENCIA POR ACCIDENTE", label: "Cobertura al 100% sin deducible", value: "$1.000" },
  { section: "MATERNIDAD", label: "Atención de embarazo, incluye atención prenatal, el evento del parto, normal o cesárea, o aborto no provocado, y la recepción del recién nacido sin complicaciones, siempre y cuando el embarazo esté cubierto. (Aplica deducible)", value: "$1.800 al 100% en Red Humana" },
  { label: "Complicaciones del parto y/o del recién nacido", value: "$5.000 al 100% en Red Humana" },
  { section: "PREEXISTENCIAS", label: "Contratos con más de 21 titulares", value: "Desde el mes 4 al 24: $2.000 por año" },
  { label: "Contratos con menos de 21 titulares", value: "Desde el mes 24 en adelante: $5.000 por año" },
  { section: "ADULTO MAYOR", label: "Porcentaje de cobertura tope hasta el año 5", value: "50%" },
  { section: "PERSONAS CON DISCAPACIDAD", label: "Máximo de cobertura tope", value: "Hasta el tope de cobertura" },
  { section: "BENEFICIOS INCLUIDOS", label: "SEGURO DE VIDA: Cobertura de muerte por cualquier causa. Aplica únicamente para el titular", value: "$5.000" },
  { label: "ASISTENCIA EXEQUIAL: Cobertura para el titular y dependientes", value: "Coordinación únicamente con Humana a través de Jardines del Valle" },
];

// Cuadro B (MetroHumana 5.000): igual al Cuadro A salvo las filas señaladas aquí.
const cuadroBOverrides: Record<string, string> = {
  "Cobertura por enfermedad": "$5.000",
  "Cobertura al 100% sin deducible": "$500",
  "Atención de embarazo, incluye atención prenatal, el evento del parto, normal o cesárea, o aborto no provocado, y la recepción del recién nacido sin complicaciones, siempre y cuando el embarazo esté cubierto. (Aplica deducible)": "$900 al 100% en Red Humana",
  "Complicaciones del parto y/o del recién nacido": "$2.500 al 100% en Red Humana",
  "Contratos con más de 21 titulares": "Desde el mes 4 al 24: $1.000 por año",
  "Contratos con menos de 21 titulares": "Desde el mes 24 en adelante: $2.500 por año",
};

export const cuadroB: CuadroSection[] = cuadroA.map((row) =>
  row.label in cuadroBOverrides ? { ...row, value: cuadroBOverrides[row.label] } : row,
);
