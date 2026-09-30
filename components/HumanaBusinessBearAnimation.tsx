"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import "./HumanaBusinessBearAnimation.css";

const STORAGE_KEY = "humana-business-bear-video-closed";
const WELCOME_MESSAGE =
  "Hola, soy tu asistente Humana Business. Te acompañaré a descubrir cómo proteger el bienestar de tu equipo.";

/**
 * Asistente visual animado de Humana Business: el oso oficial del video
 * (fondo eliminado por segmentación, sin chroma key) reproducido como
 * WebM con transparencia. Aparece una sola vez por sesión con un mensaje
 * de bienvenida y queda como una insignia discreta en la esquina inferior
 * derecha, sin tapar nunca el contenido de la página.
 */
export function HumanaBusinessBearAnimation() {
  const [visible, setVisible] = useState(false);
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let closed = false;
    try {
      closed = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* sessionStorage no disponible (modo privado, etc.): se ignora */
    }
    if (closed) return;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const revealTimer = window.setTimeout(() => {
      setVisible(true);
      // En móvil el mensaje arranca cerrado: con la pantalla más chica, la
      // burbuja de bienvenida llegaba a tapar los botones del hero. El
      // oso queda visible igual; el usuario abre el mensaje con un toque.
      setBubbleOpen(!isMobile);
    }, 500);
    return () => window.clearTimeout(revealTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const video = videoRef.current;
    if (!video) return;

    // React a veces no sincroniza el atributo JSX "muted" como propiedad
    // real del elemento tras la hidratación; si el navegador lee
    // video.muted=false en ese momento, bloquea el autoplay sin avisar.
    // Se fuerza explícitamente por código para que el autoplay no falle.
    video.muted = true;
    video.defaultMuted = true;

    const attemptPlay = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          /* se reintenta más abajo (canplay / primera interacción del usuario) */
        });
      }
    };

    attemptPlay();
    video.addEventListener("loadedmetadata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);

    // Última red de seguridad: algunos navegadores solo permiten iniciar
    // la reproducción tras un gesto del usuario (toque, clic, scroll).
    const onUserGesture = () => {
      if (video.paused) attemptPlay();
    };
    window.addEventListener("pointerdown", onUserGesture, { once: true });
    window.addEventListener("scroll", onUserGesture, { once: true, passive: true });

    return () => {
      video.removeEventListener("loadedmetadata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
      window.removeEventListener("pointerdown", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
    };
  }, [visible]);

  const dismiss = () => {
    setVisible(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* noop */
    }
  };

  const closeBubble = () => setBubbleOpen(false);
  const toggleBubble = () => setBubbleOpen((current) => !current);

  if (!visible) return null;

  return (
    <div className="business-bear-video-assistant" role="complementary" aria-label="Asistente virtual Humana Business">
      {bubbleOpen && (
        <div className="business-bear-video-bubble" role="status">
          <button
            type="button"
            className="business-bear-video-bubble-close"
            onClick={closeBubble}
            aria-label="Cerrar mensaje"
          >
            <X size={13} aria-hidden="true" />
          </button>
          <p>{WELCOME_MESSAGE}</p>
        </div>
      )}
      <div className="business-bear-video-figure">
        <button
          type="button"
          className="business-bear-video-toggle"
          onClick={toggleBubble}
          aria-label={bubbleOpen ? "Ocultar mensaje del asistente" : "Mostrar mensaje del asistente"}
        >
          <video
            ref={videoRef}
            className="business-bear-video"
            src="/images/planes/business/humana-business-bear-animation.webm"
            poster="/images/planes/business/humana-business-bear.png"
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          className="business-bear-video-dismiss"
          onClick={dismiss}
          aria-label="Cerrar asistente virtual"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
