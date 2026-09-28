import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { dataset, projectId } from "./env";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

export default defineConfig({
  name: "humana",
  title: "Humana · Contenido web",
  projectId,
  dataset,
  plugins: [structureTool({ structure }), visionTool()],
  schema: { types: schemaTypes },
  document: {
    // La Home es un documento único: no se puede duplicar ni borrar desde el panel.
    actions: (prev, { schemaType }) =>
      schemaType === "homePage" ? prev.filter(a => !["duplicate", "delete", "unpublish"].includes(a.action ?? "")) : prev,
    newDocumentOptions: prev => prev.filter(item => item.templateId !== "homePage"),
  },
});
