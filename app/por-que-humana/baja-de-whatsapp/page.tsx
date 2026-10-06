import type { Metadata } from "next";
import BajaWhatsappClient from "./BajaWhatsappClient";

export const metadata: Metadata = { title: "Baja de WhatsApp - Humana S.A." };

export default function BajaDeWhatsappPage() {
  return <BajaWhatsappClient />;
}
