import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlanDetailView } from "@/components/plan-detail-view";
import { planDetails } from "@/lib/plan-details";

export const metadata: Metadata = {
  title: "Plan Individual y Familiar - Cobertura de Salud - Humana",
  description:
    "Plan de Cobertura de Salud individual y familiar permite acceso a hospitales, clínicas, médicos, centros, laboratorios, farmacias en Ecuador",
};

export default function PlanIndividualYFamiliarPage() {
  const plan = planDetails.find((p) => p.slug === "individual-familiar");
  if (!plan) notFound();

  return <PlanDetailView plan={plan} />;
}
