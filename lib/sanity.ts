// Lectura de contenido publicado en Sanity (backoffice).
// Solo lee documentos publicados del dataset público; nunca borradores.
const projectId = "hqo9jmzx";
const dataset = "production";
const apiVersion = "2025-01-01";

export async function sanityQuery<T>(query: string, params: Record<string, string> = {}): Promise<T | null> {
  const url = new URL(`https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", query);
  url.searchParams.set("perspective", "published");
  for (const [key, value] of Object.entries(params)) url.searchParams.set(`$${key}`, JSON.stringify(value));
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
    if (!res.ok) return null;
    const { result } = (await res.json()) as { result: T };
    return result;
  } catch {
    // Si Sanity no responde, cada página usa su contenido local de respaldo.
    return null;
  }
}
