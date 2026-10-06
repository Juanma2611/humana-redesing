import type { Metadata } from "next";
import Mh80Client from "./Mh80Client";

export const metadata: Metadata = { title: "Metrohumana80 - Humana S.A." };

export default function Metrohumana80Page() {
  return <Mh80Client />;
}
