import type { Metadata } from "next";
import DirectorioClient from "./DirectorioClient";

export const metadata: Metadata = { title: "Red de prestadores Humana S.A. - Humana S.A." };

export default function DirectorioPage() {
  return <DirectorioClient />;
}
