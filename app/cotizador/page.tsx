import type { Metadata } from "next";
import CotizadorClient from "./CotizadorClient";

export const metadata: Metadata = {
  title: "Cotizador - Humana S.A.",
  description:
    "Accede a un plan médico completo pagando hasta 10% en tus atenciones o medicinas, sin aplicación de deducibles en nuestra red.",
};

export default function CotizadorPage() {
  return <CotizadorClient />;
}
