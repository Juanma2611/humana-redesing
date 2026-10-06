import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";

// Texto legal copiado literal del sitio oficial (humana.med.ec), extraído el 6 de
// octubre de 2026. No resumir, no reescribir. Cualquier cambio debe aprobarlo el área legal.

export const metadata: Metadata = { title: "Política de Cookies - Humana S.A." };

export default function PoliticaCookiesPage() {
  return (
    <SiteShell title="Política de Cookies">
      <section className="content-section plan-hub-intro" style={{ maxWidth: 900 }}>
        <h1>Política de Cookies</h1>
      </section>

      <section className="content-section" style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px 64px", textAlign: "left" }}>
        <p>
          Desde MEDICINA PARA EL ECUADOR MEDIECUADOR HUMANA S.A (HUMANA), queremos comunicarte que
          nuestros sitios web utilizan cookies propias y de terceros para medir y analizar la navegación
          de nuestros usuarios. Al utilizar nuestros sitios web, aceptas el uso de cookies de acuerdo con
          los términos de esta Política.
        </p>

        <h2>¿Qué son las Cookies?</h2>
        <p>
          Las cookies son archivos que se pueden descargar en tu equipo a través de las páginas web. Son
          herramientas que tienen un papel esencial para la prestación de numerosos servicios de la
          sociedad de la información. Entre otros, permiten a una página web almacenar y recuperar
          información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la
          información obtenida, se pueden utilizar para reconocer al usuario y mejorar el servicio
          ofrecido.
        </p>
        <p>Hay dos tipos de cookies:</p>
        <ul className="plan-faq-checklist">
          <li><strong>Cookies propias:</strong> las crea el sitio al que accedes y que se muestra en la barra de direcciones.</li>
          <li><strong>Cookies de terceros:</strong> las crean otros sitios. Un sitio que visites puede insertar contenido de otros sitios, como imágenes, anuncios y texto. Todos estos sitios pueden guardar cookies y otros datos para personalizar tu experiencia.</li>
        </ul>

        <h2>¿Cómo utilizamos las cookies?</h2>
        <p>
          Como la mayoría de los servicios online, nuestros sitios web utilizan cookies de primera parte y
          de terceros para varios fines. Las cookies de primera parte son necesarias en su mayoría para
          que los sitios web funcionen correctamente y no recopilan ninguno de sus datos personales
          identificables.
        </p>
        <p>
          Las cookies de terceros que se utilizan en sitios web son principalmente para entender cómo
          funcionan los sitios web, cómo interactúan con nuestros sitios web, manteniendo nuestros
          servicios seguros, proporcionando publicidad relevante para ti y, en general, proporcionándote
          una mejor y mejorada experiencia de usuario y ayuda a acelerar tus futuras interacciones con
          nuestros sitios web.
        </p>

        <h2>¿Qué tipos de Cookies utilizan nuestros sitios web?</h2>
        <p>
          HUMANA siempre está en mejora continua para brindar a sus usuarios mejoras en sus sitios web y
          los servicios que ofrece. Se utilizan las cookies para mejorar la funcionalidad y uso de los
          sitios web, así como entender como el usuario interactúa con los sitios web de HUMANA.
        </p>
        <p>Los tipos de Cookies que utilizan los sitios web son:</p>
        <ul className="plan-faq-checklist">
          <li><strong>Cookies necesarias:</strong> son cruciales para las funciones básicas del sitio web y el sitio web no funcionará de la forma prevista sin ellas. Estas cookies no almacenan ningún dato de identificación personal.</li>
          <li><strong>Cookies funcionales:</strong> ayudan a realizar ciertas funcionalidades, como compartir el contenido del sitio web en plataformas de redes sociales, recopilar comentarios y otras características de terceros.</li>
          <li><strong>Cookies de analítica:</strong> se utilizan para comprender cómo interactúan los visitantes con el sitio web. Estas cookies ayudan a proporcionar información sobre métricas el número de visitantes, el porcentaje de rebote, la fuente de tráfico, etc.</li>
          <li><strong>Cookies de rendimiento:</strong> se utilizan para comprender y analizar los índices de rendimiento clave del sitio web, lo que ayuda a proporcionar una mejor experiencia de usuario para los visitantes.</li>
          <li><strong>Cookies de anuncio:</strong> se utilizan para entregar a los visitantes anuncios personalizados basados en las páginas que visitaron antes y analizar la efectividad de la campaña publicitaria.</li>
        </ul>
        <p>Si deseas conocer mayor detalle, te facilitamos un enlace donde podrás ver el listado detallado de cookies.</p>

        <h2>¿Cómo modificar la configuración de las Cookies?</h2>
        <p>
          Por otro lado, en todo momento, podrás restringir, bloquear o borrar las cookies de los sitios
          web de HUMANA, utilizando el navegador. A continuación, te proporcionamos el acceso a páginas
          informativas de los principales navegadores de internet para la configuración de cookies:
        </p>
        <ul className="plan-faq-checklist">
          <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">Microsoft Edge</a></li>
          <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noreferrer">Safari</a></li>
        </ul>
        <p>Si usa un navegador diferente a los mencionados, por favor te recomendamos que visites la documentación de soporte oficial del navegador.</p>

        <h2>Reserva de derecho a modificar las Cookies</h2>
        <p>
          HUMANA se reserva el derecho a modificar el uso de cookies, por motivos técnicos, por cambios en
          los servicios ofrecidos por HUMANA o por decisiones estratégicas de la compañía. En estos casos
          se avisará en la presente página web a los usuarios respecto a las modificaciones en las
          cookies.
        </p>

        <h2>Actualización de Política de Cookies</h2>
        <p>
          Esta Política de Cookies puede ser actualizada en cualquier momento en función de exigencias
          legislativas. Por ello te recomendamos revisar periódicamente la política al acceder a nuestros
          sitios web.
        </p>
      </section>
    </SiteShell>
  );
}
