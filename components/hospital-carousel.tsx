"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const hospitals = [
  { name: "Hospital Alcívar", file: "hospital-alcivar" },
  { name: "Hospital de los Valles", file: "hospital-de-los-valles" },
  { name: "Hospital de Especialidades Alfredo G. Paulson", file: "hospital-alfredo-paulson" },
  { name: "Axxis Hospital", file: "axxis-hospital" },
  { name: "Metrored Centros Médicos", file: "metrored" },
  { name: "Hospital Metropolitano", file: "hospital-metropolitano" },
  { name: "OMNI Hospital", file: "omni-hospital" },
  { name: "Grupo Hospitalario Kennedy", file: "grupo-hospitalario-kennedy" },
  { name: "Hospital de Niños Dr. Roberto Gilbert E.", file: "hospital-roberto-gilbert" },
  { name: "Hospital Clínica San Francisco", file: "hospital-clinica-san-francisco" },
  { name: "Novaclínica Santa Cecilia", file: "novaclinica-santa-cecilia" },
  { name: "Clínica Integral", file: "clinica-integral" },
  { name: "Hospital del Río", file: "hospital-del-rio" },
  { name: "SIME Sistemas Médicos", file: "sime" },
  { name: "Hospital Monte Sinaí", file: "hospital-monte-sinai" },
  { name: "Clínica Paucarbamba", file: "clinica-paucarbamba" },
  { name: "Clínica Metropolitana", file: "clinica-metropolitana" },
  { name: "Hospital San Juan de Dios", file: "hospital-san-juan-de-dios" },
  { name: "Clínica Santa Ana", file: "clinica-santa-ana" },
  { name: "María Auxiliadora Clínica de Especialidades", file: "maria-auxiliadora" },
];

const VISIBLE = 5;

export function HospitalCarousel() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restartTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % hospitals.length);
    }, 3000);
  };

  useEffect(() => {
    restartTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const go = (dir: number) => {
    setIndex((i) => (i + dir + hospitals.length) % hospitals.length);
    restartTimer();
  };

  const visible = Array.from({ length: VISIBLE }, (_, i) => hospitals[(index + i) % hospitals.length]);

  return (
    <div className="hospital-carousel">
      <button type="button" className="hospital-carousel-arrow" onClick={() => go(-1)} aria-label="Ver hospitales anteriores">
        <ChevronLeft />
      </button>
      <div className="hospital-carousel-track" key={index}>
        {visible.map((h) => (
          <div className="hospital-carousel-logo" key={h.file} title={h.name}>
            <Image src={`/hospitals/${h.file}.png`} alt={h.name} width={140} height={48} unoptimized />
          </div>
        ))}
      </div>
      <button type="button" className="hospital-carousel-arrow" onClick={() => go(1)} aria-label="Ver más hospitales">
        <ChevronRight />
      </button>
    </div>
  );
}
