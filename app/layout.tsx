import type { Metadata } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { IS_PROTOTYPE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Nueva experiencia web | Humana",
  description: "Propuesta conceptual de rediseño de la página principal de Humana.",
  // Prototipo en desarrollo: no debe indexarse para que Google no lo confunda
  // con el sitio oficial. Quitar IS_PROTOTYPE (lib/site-config.ts) al publicar.
  robots: IS_PROTOTYPE ? { index: false, follow: false } : undefined,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
