import { notFound } from "next/navigation";
import { PlanDetailView } from "@/components/plan-detail-view";
import { planDetails } from "@/lib/plan-details";

export function generateStaticParams() {
  return planDetails.map((plan) => ({ slug: plan.slug }));
}

export default async function PlanDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const plan = planDetails.find((p) => p.slug === slug);
  if (!plan) notFound();

  return <PlanDetailView plan={plan} />;
}
