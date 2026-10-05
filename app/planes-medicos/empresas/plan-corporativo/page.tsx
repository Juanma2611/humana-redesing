import type { Metadata } from "next";
import PlanCorporativoClient from "./PlanCorporativoClient";

export const metadata: Metadata = {
  title: "Plan Corporativo - Humana S.A.",
};

export default function PlanCorporativoPage() {
  return <PlanCorporativoClient />;
}
