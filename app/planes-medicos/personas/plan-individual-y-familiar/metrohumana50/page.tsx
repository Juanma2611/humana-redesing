import type { Metadata } from "next";
import Mh50Client from "./Mh50Client";

export const metadata: Metadata = {
  title: "Metrohumana50 - Humana S.A.",
  description: "Metrohumana50: plan médico familiar de Humana, más recomendado para familias, con cobertura en consultas, hospitalización y emergencias.",
};

export default function Metrohumana50Page() {
  return <Mh50Client />;
}
