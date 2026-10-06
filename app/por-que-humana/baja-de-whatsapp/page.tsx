import type { Metadata } from "next";
import BajaWhatsappClient from "./BajaWhatsappClient";

export const metadata: Metadata = {
  title: "Baja de WhatsApp - Humana S.A.",
  description: "Solicita dejar de recibir notificaciones de Humana por WhatsApp.",
};

export default function BajaDeWhatsappPage() {
  return <BajaWhatsappClient />;
}
