import type { Metadata } from "next";
import PlanCorporativoClient from "./PlanCorporativoClient";

export const metadata: Metadata = {
  title: "Plan Corporativo - Humana S.A.",
  description: "Plan médico corporativo de Humana: cobertura integral de salud diseñada para grandes empresas y sus colaboradores.",
};

export default function PlanCorporativoPage() {
  return <PlanCorporativoClient />;
}
