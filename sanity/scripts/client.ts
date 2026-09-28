import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

// El token normalmente lo inyecta el entorno de Claude Code (credencial de API),
// así que no está en el proceso. SANITY_API_TOKEN queda como alternativa local.
export function getClient() {
  if (!projectId) throw new Error("Falta SANITY_PROJECT_ID (Project ID de sanity.io/manage).");
  return createClient({ projectId, dataset, apiVersion, token: process.env.SANITY_API_TOKEN, useCdn: false });
}
