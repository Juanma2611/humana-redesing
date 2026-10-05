import { notFound } from "next/navigation";
import { PlanDetailView } from "@/components/plan-detail-view";
import { planDetails } from "@/lib/plan-details";

export default function PlanIndividualYFamiliarPage() {
  const plan = planDetails.find((p) => p.slug === "individual-familiar");
  if (!plan) notFound();

  return <PlanDetailView plan={plan} />;
}
