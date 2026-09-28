import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Artículo",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Título (H1)", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "URL", type: "slug", options: { source: "title", maxLength: 80 }, validation: r => r.required() }),
    defineField({ name: "date", title: "Fecha", type: "string", description: "Formato del sitio, ej.: Sep 11, 2026" }),
    defineField({ name: "category", title: "Categoría", type: "string" }),
    defineField({ name: "image", title: "Imagen (ruta)", type: "string" }),
    defineField({ name: "excerpt", title: "Resumen", type: "text", rows: 4 }),
    defineField({
      name: "body", title: "Contenido", type: "array",
      description: "Bloques en orden. Subtítulo = H3 del sitio.",
      of: [
        defineArrayMember({ type: "object", name: "h3", title: "Subtítulo (H3)", fields: [defineField({ name: "text", title: "Texto", type: "string" })], preview: { select: { title: "text" }, prepare: ({ title }) => ({ title, subtitle: "H3" }) } }),
        defineArrayMember({ type: "object", name: "p", title: "Párrafo", fields: [defineField({ name: "text", title: "Texto", type: "text", rows: 4 })], preview: { select: { title: "text" }, prepare: ({ title }) => ({ title, subtitle: "Párrafo" }) } }),
        defineArrayMember({ type: "object", name: "ul", title: "Lista", fields: [defineField({ name: "items", title: "Elementos", type: "array", of: [{ type: "string" }] })], preview: { select: { items: "items" }, prepare: ({ items }) => ({ title: (items || []).join(" · "), subtitle: "Lista" }) } }),
      ],
    }),
  ],
  orderings: [{ title: "Más recientes", name: "createdDesc", by: [{ field: "_createdAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category" } },
});
