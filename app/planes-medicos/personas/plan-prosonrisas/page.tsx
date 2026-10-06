import type { Metadata } from "next";
import ProsonrisasClient from "./ProsonrisasClient";

export const metadata: Metadata = {
  title: "Plan Prosonrisas - Humana S.A.",
  description:
    "Te ofrecemos varias opciones según tus necesidades odontológicas. Nuestros Planes ProSonrisas (Plus y Full) le ayudarán a mantener una óptima salud bucodental de por vida.",
};

export default function PlanProsonrisasPage() {
  return <ProsonrisasClient />;
}
