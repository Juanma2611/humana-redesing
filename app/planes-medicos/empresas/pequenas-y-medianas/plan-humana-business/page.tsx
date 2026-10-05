import type { Metadata } from "next";
import HumanaBusinessClient from "./HumanaBusinessClient";

export const metadata: Metadata = {
  title: "Plan Humana Business - Humana S.A.",
  description:
    "Un plan de medicina prepagada con nivel de coberturas corporativas, flexible y asequible, con acceso a una amplia red de prestadores en el país.",
};

export default function PlanHumanaBusinessPage() {
  return <HumanaBusinessClient />;
}
