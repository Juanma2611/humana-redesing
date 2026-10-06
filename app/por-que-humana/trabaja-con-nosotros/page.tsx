import type { Metadata } from "next";
import TrabajaConNosotrosClient from "./TrabajaConNosotrosClient";

export const metadata: Metadata = {
  title: "Trabaja con nosotros - Humana S.A.",
  description: "Déjanos tus datos y envíanos tu hoja de vida, contaremos contigo para próximas candidaturas.",
};

export default function TrabajaConNosotrosPage() {
  return <TrabajaConNosotrosClient />;
}
