import type { Metadata } from "next";
import PoliticaCookiesClient from "./PoliticaCookiesClient";

export const metadata: Metadata = {
  title: "Política de Cookies - Humana S.A.",
  description: "Política de Cookies de Humana S.A.: qué son las cookies, cómo las utilizamos y cómo modificar su configuración en tu navegador.",
};

export default function PoliticaCookiesPage() {
  return <PoliticaCookiesClient />;
}
