// Verifica que el token y la red funcionan antes de tocar contenido.
import { getClient } from "./client";

const client = getClient();
const counts = await client.fetch<Record<string, number>>(
  `{"home": count(*[_type == "homePage"]), "planes": count(*[_type == "plan"]), "blog": count(*[_type == "blogPost"]), "borradores": count(*[_id in path("drafts.**")])}`,
);
console.log(`Conexión correcta con el proyecto ${client.config().projectId} (${client.config().dataset}).`);
console.table(counts);
