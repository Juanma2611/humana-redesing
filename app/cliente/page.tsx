import type { Metadata } from "next";
import ClienteClient from "./ClienteClient";

export const metadata: Metadata = {
  title: "MiHumana - Portal de clientes | Humana S.A.",
  description: "Accede a MiHumana, el portal de clientes donde puedes gestionar tus autorizaciones, reembolsos y toda la información de tu plan médico.",
};

export default function ClientePage() {
  return <ClienteClient />;
}
