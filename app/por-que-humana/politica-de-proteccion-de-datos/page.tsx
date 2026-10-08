import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import PoliticaDatosClient from "./PoliticaDatosClient";

// Texto legal copiado literal del sitio oficial (humana.med.ec), extraído el 6 de
// octubre de 2026. No resumir, no reescribir, no reordenar. Cualquier cambio a este
// contenido debe ser aprobado por el área legal de Humana. El texto en sí vive en
// PoliticaDatosClient.tsx (componente cliente, para el índice interactivo); este
// archivo solo mantiene el title/meta oficiales y el H1 sin tocarlos.

export const metadata: Metadata = {
  title: "Política de datos personales | MEDIECUADOR HUMANA S.A.",
  description:
    "Consulta la política de protección de datos personales de MEDIECUADOR HUMANA S.A. y conoce cómo resguardamos tu información.",
};

export default function PoliticaProteccionDatosPage() {
  return (
    <SiteShell title="Política de protección de datos personales">
      <PoliticaDatosClient />
    </SiteShell>
  );
}
