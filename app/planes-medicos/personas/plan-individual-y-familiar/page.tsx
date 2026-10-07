import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndividualFamiliarView } from "./IndividualFamiliarView";
import { planDetails } from "@/lib/plan-details";

export const metadata: Metadata = {
  title: "Plan Individual y Familiar - Cobertura de Salud - Humana",
  description:
    "Plan de Cobertura de Salud individual y familiar permite acceso a hospitales, clínicas, médicos, centros, laboratorios, farmacias en Ecuador",
};

export default function PlanIndividualYFamiliarPage() {
  const plan = planDetails.find((p) => p.slug === "individual-familiar");
  if (!plan) notFound();

  return <IndividualFamiliarView plan={plan} />;
}
