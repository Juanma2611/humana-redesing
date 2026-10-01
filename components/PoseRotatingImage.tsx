"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Alterna entre varias poses de un mismo personaje (misma toma y fondo),
 * con un fundido cruzado suave en vez de un corte brusco. Se usa en los
 * asistentes virtuales de los planes para dar sensación de "vida" sin el
 * costo de un video.
 */
export function PoseRotatingImage({
  images,
  alt,
  width,
  height,
  className,
  intervalMs = 4000,
}: {
  images: string[];
  alt: string;
  width: number;
  height: number;
  className?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div
      className={`pose-rotating-image ${className ?? ""}`}
      style={{ position: "relative", aspectRatio: `${width} / ${height}` }}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? alt : ""}
          width={width}
          height={height}
          unoptimized
          priority={false}
          aria-hidden={i === index ? undefined : true}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.1s ease",
          }}
        />
      ))}
    </div>
  );
}
