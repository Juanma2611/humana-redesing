import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

export function getClient() {
  const token = process.env.SANITY_API_TOKEN;
  if (!projectId) throw new Error("Falta SANITY_PROJECT_ID (Project ID de sanity.io/manage).");
  if (!token) throw new Error("Falta SANITY_API_TOKEN (token con permiso Editor).");
  return createClient({ projectId, dataset, apiVersion, token, useCdn: false });
}
