import type { Metadata } from "next";
import ReembolsosClient from "./ReembolsosClient";

export const metadata: Metadata = {
  title: "Reembolsos | Humana S.A.",
  description: "Conoce el proceso para solicitar el reembolso de tus gastos médicos con Humana, de forma rápida y sencilla.",
};

export default function ReembolsosPage() {
  return <ReembolsosClient />;
}
