// Valores compartidos por el Studio y los scripts.
// El Project ID no es secreto; los tokens viven solo en variables de entorno.
export const projectId = process.env.SANITY_STUDIO_PROJECT_ID || process.env.SANITY_PROJECT_ID || "";
export const dataset = process.env.SANITY_STUDIO_DATASET || process.env.SANITY_DATASET || "production";
export const apiVersion = "2025-01-01";
