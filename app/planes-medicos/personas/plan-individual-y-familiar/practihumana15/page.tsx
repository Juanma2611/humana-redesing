import type { Metadata } from "next";
import Ph15Client from "./Ph15Client";

export const metadata: Metadata = {
  title: "Practihumana15 - Humana S.A.",
  description: "Practihumana15 (PH15): el plan médico individual más recomendado de Humana, con cobertura esencial en consultas, hospitalización y emergencias.",
};

export default function Practihumana15Page() {
  return <Ph15Client />;
}
