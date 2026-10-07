"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { resolveLegacyPlanTarget } from "@/lib/legacy-plan-redirect";

/* Redirección de la URL antigua /planes (y sus variantes ?segment=/?plan=
   del prototipo previo) a la jerarquía oficial. Client-side: el build de
   este sitio (vinext) trata una página que SOLO llama a permanentRedirect()
   del lado del servidor como contenido estático y la precalcula una única
   vez en build time, ignorando el query string real de cada visita — por
   eso esta página se resuelve en el cliente, donde sí se lee la URL real. */
export default function PlanesRedirect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const target = resolveLegacyPlanTarget(Object.fromEntries(searchParams.entries())) ?? "/planes-medicos/";
    router.replace(target);
  }, [router, searchParams]);

  return null;
}
