import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanDetailView } from "@/components/plan-detail-view";
import { planDetails } from "@/lib/plan-details";

export const metadata: Metadata = {
  title: "Practihumana50 - Humana S.A.",
  description: "Practihumana50: plan médico individual de Humana con cobertura en consultas, hospitalización y emergencias.",
};

// Página existente en el sitio oficial como URL propia, pero sin aparecer en la
// navegación "Planes individuales" ni en la tabla comparativa de
// /planes-medicos/personas/plan-individual-y-familiar/. No enlazar desde ahí.
export default function Practihumana50Page() {
  const plan = planDetails.find((p) => p.slug === "practihumana50");
  if (!plan) notFound();

  return <PlanDetailView plan={plan} />;
}
