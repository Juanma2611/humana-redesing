import type { Metadata } from "next";
import ProtegerClient from "./ProtegerClient";

export const metadata: Metadata = {
  title: "Plan Proteger - Humana S.A.",
  description:
    "Nuestro Plan Proteger te ofrece la tranquilidad financiera frente a los gastos de atención médica, que pudieran derivarse de un accidente o enfermedad grave.",
};

export default function PlanProtegerPage() {
  return <ProtegerClient />;
}
