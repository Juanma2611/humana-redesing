import type { Metadata } from "next";
import PlanPymeClient from "./PlanPymeClient";

export const metadata: Metadata = {
  title: "Plan Pyme - Humana S.A.",
  description:
    "Un plan médico diseñado para empresas de 5 hasta 25 colaboradores, que brinda bienestar y calidad de vida a su capital humano.",
};

export default function PlanPymePage() {
  return <PlanPymeClient />;
}
