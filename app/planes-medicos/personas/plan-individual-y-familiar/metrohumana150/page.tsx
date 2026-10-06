import type { Metadata } from "next";
import Mh150Client from "./Mh150Client";

export const metadata: Metadata = {
  title: "Metrohumana150 - Humana S.A.",
  description: "Metrohumana150: plan médico familiar de Humana con amplia cobertura en consultas, hospitalización y emergencias.",
};

export default function Metrohumana150Page() {
  return <Mh150Client />;
}
