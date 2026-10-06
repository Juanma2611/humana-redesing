import type { Metadata } from "next";
import AutorizacionesClient from "./AutorizacionesClient";

export const metadata: Metadata = {
  title: "Autorizaciones | Humana S.A.",
  description: "Solicita y consulta tus autorizaciones médicas con Humana de manera rápida y sencilla.",
};

export default function AutorizacionesPage() {
  return <AutorizacionesClient />;
}
