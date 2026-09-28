import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "trust", title: "Confianza" },
  ],
  fields: [
    defineField({ name: "heroEyebrow", title: "Etiqueta superior", type: "string", group: "hero" }),
    defineField({ name: "heroTitleLine1", title: "Título · línea 1", type: "string", group: "hero", validation: r => r.required() }),
    defineField({ name: "heroTitleLine2", title: "Título · línea 2 (azul)", type: "string", group: "hero" }),
    defineField({ name: "heroDescription", title: "Texto de apoyo", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroPrimaryCta", title: "Botón principal", type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryCta", title: "Botón secundario", type: "string", group: "hero" }),
    defineField({ name: "heroClientCta", title: "Botón clientes", type: "string", group: "hero" }),
    defineField({ name: "trustHighlight", title: "Dato destacado", type: "string", group: "trust", description: "Ej.: Más de 200.000" }),
    defineField({ name: "trustText", title: "Texto del dato", type: "string", group: "trust" }),
    defineField({ name: "trustChecks", title: "Puntos de confianza", type: "array", of: [{ type: "string" }], group: "trust" }),
  ],
  preview: { prepare: () => ({ title: "Home" }) },
});
