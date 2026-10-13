"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUp, ArrowUpRight, BarChart3, ChevronDown, Gauge, Megaphone, Puzzle, ShieldCheck,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";

// Texto legal copiado literal del sitio oficial (humana.med.ec). No resumir,
// no reescribir, no reordenar. Cualquier cambio a este contenido debe ser
// aprobado por el área legal de Humana. Este archivo solo cambia la
// presentación (índice, tarjetas, botones de navegador): ninguna palabra del
// texto legal se modifica.

const sections = [
  { id: "seccion-1", num: "01", title: "Introducción" },
  { id: "seccion-2", num: "02", title: "¿Qué son las Cookies?" },
  { id: "seccion-3", num: "03", title: "¿Cómo utilizamos las cookies?" },
  { id: "seccion-4", num: "04", title: "¿Qué tipos de Cookies utilizan nuestros sitios web?" },
  { id: "seccion-5", num: "05", title: "¿Cómo modificar la configuración de las Cookies?" },
  { id: "seccion-6", num: "06", title: "Reserva de derecho a modificar las Cookies" },
  { id: "seccion-7", num: "07", title: "Actualización de Política de Cookies" },
];

const cookieKinds = [
  { icon: ShieldCheck, title: "Cookies necesarias", copy: "Son cruciales para las funciones básicas del sitio web y el sitio web no funcionará de la forma prevista sin ellas. Estas cookies no almacenan ningún dato de identificación personal." },
  { icon: Puzzle, title: "Cookies funcionales", copy: "Ayudan a realizar ciertas funcionalidades, como compartir el contenido del sitio web en plataformas de redes sociales, recopilar comentarios y otras características de terceros." },
  { icon: BarChart3, title: "Cookies de analítica", copy: "Se utilizan para comprender cómo interactúan los visitantes con el sitio web. Estas cookies ayudan a proporcionar información sobre métricas el número de visitantes, el porcentaje de rebote, la fuente de tráfico, etc." },
  { icon: Gauge, title: "Cookies de rendimiento", copy: "Se utilizan para comprender y analizar los índices de rendimiento clave del sitio web, lo que ayuda a proporcionar una mejor experiencia de usuario para los visitantes." },
  { icon: Megaphone, title: "Cookies de anuncio", copy: "Se utilizan para entregar a los visitantes anuncios personalizados basados en las páginas que visitaron antes y analizar la efectividad de la campaña publicitaria." },
];

const browsers = [
  { label: "Google Chrome", href: "https://support.google.com/chrome/answer/95647?hl=es" },
  { label: "Mozilla Firefox", href: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
  { label: "Microsoft Edge", href: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
  { label: "Safari", href: "https://support.apple.com/es-es/HT201265" },
];

function BackToIndex() {
  return (
    <a className="legal-back-to-index" href="#legal-index">
      Volver al índice <ArrowUp size={13} aria-hidden="true" />
    </a>
  );
}

function SectionHead({ id }: { id: string }) {
  const s = sections.find((x) => x.id === id)!;
  return (
    <header className="legal-section-head">
      <span className="legal-num" aria-hidden="true">{s.num}</span>
      <h2 id={id}>{s.title}</h2>
    </header>
  );
}

export default function PoliticaCookiesClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [mobileIndexOpen, setMobileIndexOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const sectionEls = sections
      .map((s) => root.querySelector<HTMLElement>(`#${s.id}`)?.closest(".legal-section"))
      .filter((el): el is HTMLElement => !!el);
    if (!sectionEls.length) return;

    const onScroll = () => {
      let current = activeSection;
      sectionEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.35) {
          current = el.id || current;
        }
      });
      setActiveSection((prev) => (prev === current ? prev : current));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SiteShell title="Política de Cookies">
      <nav className="article-breadcrumb plan-detail-breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Inicio</Link><span>»</span><span>Política de Cookies</span>
      </nav>

      <div className="legal-page" ref={rootRef}>
        {/* Hero compacto navy (documento legal, no pantalla completa) ------ */}
        <div className="biz-page" data-accent="navy">
          <section className="biz-hero">
            <div className="biz-hero-copy">
              <span className="biz-eyebrow">NORMATIVA Y PRIVACIDAD</span>
              <h1>Política de Cookies</h1>
              <p className="biz-hero-body" style={{ marginBottom: 0 }}>MEDICINA PARA EL ECUADOR MEDIECUADOR HUMANA S.A.</p>
            </div>
          </section>
        </div>

        {/* Índice móvil desplegable --------------------------------------- */}
        <div className="legal-mobile-index">
          <button type="button" onClick={() => setMobileIndexOpen((v) => !v)} aria-expanded={mobileIndexOpen}>
            Índice <ChevronDown size={16} aria-hidden="true" style={{ transform: mobileIndexOpen ? "rotate(180deg)" : undefined }} />
          </button>
          {mobileIndexOpen && (
            <div className="legal-mobile-index-panel">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} onClick={() => setMobileIndexOpen(false)} className={activeSection === s.id ? "is-active" : ""}>
                  <span>{s.num}</span>{s.title}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Lectura en dos columnas ------------------------------------------ */}
        <div className="legal-layout" id="legal-index">
          <aside className="legal-sidebar">
            <nav aria-label="Índice de secciones">
              {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? "is-active" : ""}>
                  <span className="legal-sidebar-num">{s.num}</span>{s.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="legal-content" style={{ maxWidth: 760 }}>
            <section className="legal-section">
              <SectionHead id="seccion-1" />
              <p className="text-justify-wide">
                Desde MEDICINA PARA EL ECUADOR MEDIECUADOR HUMANA S.A (HUMANA), queremos comunicarte que
                nuestros sitios web utilizan cookies propias y de terceros para medir y analizar la navegación
                de nuestros usuarios. Al utilizar nuestros sitios web, aceptas el uso de cookies de acuerdo con
                los términos de esta Política.
              </p>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-2" />
              <p className="text-justify-wide">
                Las cookies son archivos que se pueden descargar en tu equipo a través de las páginas web. Son
                herramientas que tienen un papel esencial para la prestación de numerosos servicios de la
                sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar
                información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la
                información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio
                ofrecido.
              </p>
              <p className="text-justify-wide">Hay dos tipos de cookies:</p>
              <div className="cookie-type-grid">
                <div className="cookie-type-card">
                  <strong>Cookies propias</strong>
                  <p>Las crea el sitio al que accedes y que se muestra en la barra de direcciones.</p>
                </div>
                <div className="cookie-type-card">
                  <strong>Cookies de terceros</strong>
                  <p>Las crean otros sitios. Un sitio que visites puede insertar contenido de otros sitios, como imágenes, anuncios y texto. Todos estos sitios pueden guardar cookies y otros datos para personalizar tu experiencia.</p>
                </div>
              </div>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-3" />
              <p className="text-justify-wide">
                Como la mayoría de los servicios online, nuestros sitios web utilizan cookies de primera parte y
                de terceros para varios fines. Las cookies de primera parte son necesarias en su mayoría para
                que los sitios web funcionen correctamente y no recopilan ninguno de sus datos personales
                identificables.
              </p>
              <p className="text-justify-wide">
                Las cookies de terceros que se utilizan en sitios web son principalmente para entender cómo
                funcionan los sitios web, cómo interactúan con nuestros sitios web, manteniendo nuestros
                servicios seguros, proporcionando publicidad relevante para ti y, en general, proporcionándote
                una mejor y mejorada experiencia de usuario y ayuda a acelerar tus futuras interacciones con
                nuestros sitios web.
              </p>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-4" />
              <p className="text-justify-wide">
                HUMANA siempre está en mejora continua para brindar a sus usuarios mejoras en sus sitios web y
                los servicios que ofrece. Se utilizan las cookies para mejorar la funcionalidad y uso de los
                sitios web, así como entender como el usuario interactúa con los sitios web de HUMANA.
              </p>
              <p className="text-justify-wide">Los tipos de Cookies que utilizan los sitios web son:</p>
              <div className="cookie-kind-grid">
                {cookieKinds.map(({ icon: Icon, title, copy }) => (
                  <div className="cookie-kind-card" key={title}>
                    <div className="cookie-kind-icon"><Icon aria-hidden="true" /></div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
              <p className="text-justify-wide">Si deseas conocer mayor detalle, te facilitamos un enlace donde podrás ver el listado detallado de cookies.</p>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-5" />
              <p className="text-justify-wide">
                Por otro lado, en todo momento, podrás restringir, bloquear o borrar las cookies de los sitios
                web de HUMANA, utilizando el navegador. A continuación, te proporcionamos el acceso a páginas
                informativas de los principales navegadores de internet para la configuración de cookies:
              </p>
              <div className="cookie-browser-grid">
                {browsers.map((b) => (
                  <a key={b.label} className="cookie-browser-btn" href={b.href} target="_blank" rel="noreferrer">
                    {b.label} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <p className="text-justify-wide">Si usa un navegador diferente a los mencionados, por favor te recomendamos que visites la documentación de soporte oficial del navegador.</p>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-6" />
              <p className="text-justify-wide">
                HUMANA se reserva el derecho a modificar el uso de cookies, por motivos técnicos, por cambios en
                los servicios ofrecidos por HUMANA o por decisiones estratégicas de la compañía. En estos casos
                se avisará en la presente página web a los usuarios respecto a las modificaciones en las
                cookies.
              </p>
              <BackToIndex />
            </section>

            <section className="legal-section">
              <SectionHead id="seccion-7" />
              <p className="text-justify-wide">
                Esta Política de Cookies puede ser actualizada en cualquier momento en función de exigencias
                legislativas. Por ello te recomendamos revisar periódicamente la política al acceder a nuestros
                sitios web.
              </p>
            </section>

            <div style={{ textAlign: "center", marginTop: 8 }}>
              <a className="secondary-button small" href="#legal-index">Volver arriba <ArrowUp size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
