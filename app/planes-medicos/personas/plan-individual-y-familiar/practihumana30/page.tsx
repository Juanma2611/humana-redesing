import type { Metadata } from "next";
import Ph30Client from "./Ph30Client";

export const metadata: Metadata = { title: "Practihumana30 - Humana S.A." };

export default function Practihumana30Page() {
  return <Ph30Client />;
}
