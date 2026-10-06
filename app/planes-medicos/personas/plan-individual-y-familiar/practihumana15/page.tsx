import type { Metadata } from "next";
import Ph15Client from "./Ph15Client";

export const metadata: Metadata = { title: "Practihumana15 - Humana S.A." };

export default function Practihumana15Page() {
  return <Ph15Client />;
}
