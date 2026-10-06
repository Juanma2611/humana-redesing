import type { Metadata } from "next";
import Mh150Client from "./Mh150Client";

export const metadata: Metadata = { title: "Metrohumana150 - Humana S.A." };

export default function Metrohumana150Page() {
  return <Mh150Client />;
}
