/* Resuelve las URLs antiguas con ?segment= y/o ?plan= (del prototipo previo
   a /planes-medicos/) a la página y ancla oficiales correspondientes.
   Usado por app/planes/page.tsx y app/planes-medicos/page.tsx. */

const planTargets: Record<string, string> = {
  ph15: "/planes-medicos/personas/plan-individual-y-familiar/practihumana15/",
  ph30: "/planes-medicos/personas/plan-individual-y-familiar/practihumana30/",
  mh50: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana50/",
  mh80: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana80/",
  mh150: "/planes-medicos/personas/plan-individual-y-familiar/metrohumana150/",
  proteger: "/planes-medicos/personas/plan-proteger/",
  prosonrisas: "/planes-medicos/personas/plan-prosonrisas/",
  dental: "/planes-medicos/personas/plan-prosonrisas/",
  business: "/planes-medicos/empresas/pequenas-y-medianas/plan-humana-business/",
};

const segmentTargets: Record<string, string> = {
  individual: "/planes-medicos/personas/#individual",
  familiar: "/planes-medicos/personas/#familiar",
  dental: "/planes-medicos/personas/#dental",
  proteger: "/planes-medicos/personas/#proteger",
  empresa: "/planes-medicos/empresas/",
};

export function resolveLegacyPlanTarget(searchParams: Record<string, string | string[] | undefined>): string | null {
  const plan = Array.isArray(searchParams.plan) ? searchParams.plan[0] : searchParams.plan;
  const segment = Array.isArray(searchParams.segment) ? searchParams.segment[0] : searchParams.segment;

  if (plan === "advisor") return "/planes-medicos/#asesor";
  if (plan && planTargets[plan]) return planTargets[plan];
  if (segment && segmentTargets[segment]) return segmentTargets[segment];
  return null;
}
