import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = S =>
  S.list()
    .title("Contenido")
    .items([
      S.listItem().title("Home").id("homePage").child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.documentTypeListItem("plan").title("Planes"),
      S.documentTypeListItem("blogPost").title("Blog"),
    ]);
