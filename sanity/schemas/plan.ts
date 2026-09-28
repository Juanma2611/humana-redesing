import { defineArrayMember, defineField, defineType } from "sanity";

const tableRow = defineArrayMember({
  type: "object",
  name: "tableRow",
  title: "Fila",
  fields: [
    defineField({ name: "label", title: "Concepto", type: "string" }),
    defineField({ name: "values", title: "Valores (uno por columna)", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "label", values: "values" }, prepare: ({ title, values }) => ({ title, subtitle: (values || []).join(" · ") }) },
});

export const plan = defineType({
  name: "plan",
  title: "Plan",
  type: "document",
  groups: [
    { name: "main", title: "Principal", default: true },
    { name: "coverage", title: "Coberturas" },
    { name: "benefits", title: "Beneficios" },
    { name: "faq", title: "Preguntas frecuentes" },
  ],
  fields: [
    defineField({ name: "name", title: "Nombre", type: "string", group: "main", validation: r => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", group: "main", options: { source: "name" }, validation: r => r.required() }),
    defineField({ name: "eyebrow", title: "Etiqueta superior", type: "string", group: "main" }),
    defineField({ name: "title", title: "Título (H1)", type: "string", group: "main" }),
    defineField({ name: "description", title: "Descripción (párrafos)", type: "array", of: [{ type: "text", rows: 3 }], group: "main" }),
    defineField({ name: "heroImage", title: "Imagen principal (ruta)", type: "string", group: "main" }),
    defineField({
      name: "coverageTables", title: "Tablas de cobertura", type: "array", group: "coverage",
      of: [defineArrayMember({
        type: "object", name: "coverageTable", title: "Tabla",
        fields: [
          defineField({ name: "title", title: "Título", type: "string" }),
          defineField({ name: "columns", title: "Columnas", type: "array", of: [{ type: "string" }] }),
          defineField({ name: "rows", title: "Filas", type: "array", of: [tableRow] }),
        ],
        preview: { select: { title: "title", columns: "columns" }, prepare: ({ title, columns }) => ({ title: title || "Tabla", subtitle: (columns || []).join(" · ") }) },
      })],
    }),
    defineField({ name: "coverageNotes", title: "Notas de cobertura", type: "array", of: [{ type: "string" }], group: "coverage" }),
    defineField({
      name: "mainBenefits", title: "Beneficios principales", type: "array", group: "benefits",
      of: [defineArrayMember({
        type: "object", name: "benefit",
        fields: [
          defineField({ name: "label", title: "Texto", type: "string" }),
          defineField({ name: "icon", title: "Icono (nombre interno)", type: "string" }),
        ],
        preview: { select: { title: "label", subtitle: "icon" } },
      })],
    }),
    defineField({
      name: "lifeInsurance", title: "Seguro de vida", type: "object", group: "benefits",
      fields: [
        defineField({ name: "title", title: "Título", type: "string" }),
        defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
      ],
    }),
    defineField({
      name: "checkup", title: "Chequeo anual", type: "object", group: "benefits",
      fields: [
        defineField({ name: "title", title: "Título", type: "string" }),
        defineField({ name: "note", title: "Nota", type: "string" }),
        defineField({ name: "tableTitle", title: "Título de la tabla", type: "string" }),
        defineField({ name: "items", title: "Procedimientos", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "procedureCount", title: "Número de procedimientos", type: "string" }),
        defineField({ name: "conditions", title: "Condiciones", type: "array", of: [{ type: "string" }] }),
      ],
    }),
    defineField({
      name: "huPlus", title: "Asistencias HU PLUS", type: "object", group: "benefits",
      fields: [
        defineField({ name: "title", title: "Título", type: "string" }),
        defineField({ name: "categories", title: "Categorías", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "description", title: "Descripción", type: "text", rows: 3 }),
      ],
    }),
    defineField({ name: "faqTitle", title: "Título de preguntas frecuentes", type: "string", group: "faq" }),
    defineField({
      name: "faqs", title: "Preguntas", type: "array", group: "faq",
      of: [defineArrayMember({
        type: "object", name: "faq",
        fields: [
          defineField({ name: "question", title: "Pregunta", type: "string" }),
          defineField({ name: "answer", title: "Respuesta (párrafos)", type: "array", of: [{ type: "text", rows: 3 }] }),
        ],
        preview: { select: { title: "question" } },
      })],
    }),
  ],
  preview: { select: { title: "name", subtitle: "eyebrow" } },
});
