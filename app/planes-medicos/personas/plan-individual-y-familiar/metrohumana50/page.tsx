import type { Metadata } from "next";
import Mh50Client from "./Mh50Client";

export const metadata: Metadata = { title: "Metrohumana50 - Humana S.A." };

export default function Metrohumana50Page() {
  return <Mh50Client />;
}
