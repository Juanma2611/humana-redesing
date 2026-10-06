import type { Metadata } from "next";
import DirectorioClient from "./DirectorioClient";

export const metadata: Metadata = {
  title: "Red de prestadores Humana S.A. - Humana S.A.",
  description: "Humana dispone para sus afiliados de la red de prestadores médicos más representativa y confiable del país: Red CAM, Red Preferida y Red Reembolso.",
};

export default function DirectorioPage() {
  return <DirectorioClient />;
}
