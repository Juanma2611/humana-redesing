"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, ChevronDown, Mail, Printer } from "lucide-react";
import { InstitutionalBreadcrumb, InstitutionalClosingCta, InstitutionalExploreCards, officialContactChannels } from "@/components/institutional-nav";

// Texto legal copiado literal del sitio oficial (humana.med.ec), extraído el 6 de
// octubre de 2026. No resumir, no reescribir, no reordenar. Cualquier cambio a este
// contenido debe ser aprobado por el área legal de Humana. Este archivo solo cambia
// la presentación (numeración visual, índice, recuadros, enlaces "volver al
// índice"): ninguna palabra del texto legal se modifica.

const sections = [
  { id: "seccion-1", num: "01", title: "1. RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES" },
  { id: "seccion-2", num: "02", title: "2. DEFINICIONES" },
  { id: "seccion-3", num: "03", title: "3. FUENTES DE RECOLECCIÓN DE DATOS PERSONALES" },
  { id: "seccion-4", num: "04", title: "4. ENLACES Y APLICACIÓN PREFERENTE" },
  { id: "seccion-5", num: "05", title: "5. FINALIDAD DEL TRATAMIENTO DE LOS DATOS PERSONALES" },
  { id: "seccion-6", num: "06", title: "6. BASE LEGITIMADORA DE TRATAMIENTO" },
  { id: "seccion-7", num: "07", title: "7. PRINCIPIOS Y DISPOSICIONES RECTORAS" },
  { id: "seccion-8", num: "08", title: "8. COMUNICACIONES O TRANSFERENCIA INTERNACIONAL A TERCEROS" },
  { id: "seccion-9", num: "09", title: "9. EJERCICIO DE DERECHOS SOBRE LOS DATOS PERSONALES" },
  { id: "seccion-10", num: "10", title: "10. EL TIEMPO DE CONSERVACIÓN DE LOS DATOS PERSONALES" },
  { id: "seccion-11", num: "11", title: "11. MEDIDAS DE SEGURIDAD" },
  { id: "seccion-12", num: "12", title: "12. CANALES DE ACCESO A EJERCICIO DE DERECHOS" },
  { id: "seccion-13", num: "13", title: "13. PROCEDIMIENTO PARA EJERCICIO DE DERECHOS DE DATOS PERSONALES" },
  { id: "seccion-14", num: "14", title: "14. DE LA MODIFICACIÓN DE LA POLÍTICA" },
  { id: "seccion-15", num: "15", title: "15. VIGENCIA DE LA POLÍTICA" },
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

export default function PoliticaDatosClient() {
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

  const handlePrint = () => window.print();

  return (
    <div className="legal-page" ref={rootRef}>
      <InstitutionalBreadcrumb page="Política de protección de datos" />

      {/* Hero corto y sobrio ------------------------------------------- */}
      <section className="legal-hero">
        <span className="legal-hero-kicker">Documento legal</span>
        <h1>Política de protección de datos personales de Medicina para el Ecuador, MEDIECUADOR HUMANA S.A.</h1>
        <p className="legal-hero-entity">MEDIECUADOR HUMANA S.A.</p>
        <p className="legal-hero-intro text-justify-wide">
          MEDICINA PARA EL ECUADOR, MEDIECUADOR HUMANA S.A (en adelante «HUMANA») ha desarrollado esta
          Política de Privacidad en Materia de Protección de Datos Personales (en adelante «Política»)
          con la finalidad de determinar y detallar los niveles de protección de datos personales que
          trata, en estricto cumplimiento de los principios, derechos y obligaciones determinados en
          las normas ecuatorianas.
        </p>
        <button type="button" className="legal-print-btn" onClick={handlePrint}>
          <Printer size={16} aria-hidden="true" /> Imprimir
        </button>

        <nav aria-label="En esta página encontrarás" className="legal-index-box" id="legal-index">
          <strong>En esta página encontrarás</strong>
          <div className="legal-index-box-grid">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`}><span>{s.num}</span>{s.title}</a>
            ))}
          </div>
        </nav>
      </section>

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
      <div className="legal-layout">
        <aside className="legal-sidebar">
          <nav aria-label="Índice de secciones">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className={activeSection === s.id ? "is-active" : ""}>
                <span className="legal-sidebar-num">{s.num}</span>{s.title}
              </a>
            ))}
          </nav>
        </aside>

        <div className="legal-content">
          <section className="legal-section">
            <SectionHead id="seccion-1" />
            <p className="text-justify-wide">
              HUMANA es el responsable de tratamiento de sus datos personales, se encuentra domiciliada en la
              provincia de Pichincha, cantón Quito, ciudad de Quito, calle Río Amazonas Número N33 e
              Inglaterra, Edificio Stratta.
            </p>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-2" />
            <p className="text-justify-wide">Salvo que el contexto requiera otra cosa, los términos siguientes tendrán los significados que se señalan a continuación:</p>
            <dl className="legal-definitions">
              <div><dt>Base de datos</dt><dd>Conjunto estructurado de datos cualquiera que fuera la forma, modalidad de creación, almacenamiento, organización, tipo de soporte, tratamiento, procesamiento, localización o acceso, centralizado, descentralizado o repartido de forma funcional o geográfica.</dd></div>
              <div><dt>Dato personal</dt><dd>Dato que identifica o hace identificable a una persona natural, directa o indirectamente.</dd></div>
              <div><dt>Datos sensibles</dt><dd>Datos relativos a: etnia, identidad de género, identidad cultural, religión, ideología, filiación política, pasado judicial, condición migratoria, orientación sexual, salud, datos biométricos, datos genéticos y aquellos cuyo tratamiento indebido pueda dar origen a discriminación, atenten o puedan atentar contra los derechos y libertades fundamentales.</dd></div>
              <div><dt>Encargado del tratamiento de datos personales</dt><dd>Persona natural o jurídica, pública o privada, autoridad pública, u otro organismo que solo o conjuntamente con otros trate datos personales a nombre y por cuenta de un responsable de tratamiento de datos personales.</dd></div>
              <div><dt>Socios comerciales</dt><dd>hace referencia a los subcontratistas, distribuidores, brókeres, proveedores, prestadores u otras empresas con quienes tenemos una relación comercial permanente para ofrecer productos, servicios o información.</dd></div>
              <div><dt>Responsable de tratamiento de datos personales</dt><dd>persona natural o jurídica, pública o privada, autoridad pública, u otro organismo, que solo o conjuntamente con otros decide sobre la finalidad y el tratamiento de datos personales.</dd></div>
              <div><dt>Titular de datos personales</dt><dd>Persona natural cuyos datos son objeto de tratamiento.</dd></div>
              <div><dt>Transferencia o comunicación de datos</dt><dd>Manifestación, declaración, entrega, consulta, interconexión, cesión, transmisión, difusión, divulgación o cualquier forma de revelación de datos personales realizada a una persona distinta al titular, responsable o encargado del tratamiento de datos personales. Los datos personales que comuniquen deben ser exactos, completos y actualizados.</dd></div>
              <div><dt>Tratamiento</dt><dd>Cualquier operación o conjunto de operaciones realizadas sobre datos personales, ya sea por procedimientos técnicos de carácter automatizado, parcialmente automatizado o no automatizado, tales como: la recogida, recopilación, obtención, registro, organización, estructuración, conservación, custodia, adaptación, modificación, eliminación, indexación, extracción, consulta, elaboración, utilización, posesión, aprovechamiento, distribución, cesión, comunicación o transferencia, o cualquier otra forma de habilitación de acceso, cotejo, interconexión, limitación, supresión, destrucción y, en general, cualquier uso de datos personales.</dd></div>
              <div><dt>Vulneración de la seguridad de los datos personales</dt><dd>Incidente de seguridad que afecta la confidencialidad, disponibilidad o integridad de los datos personales.</dd></div>
            </dl>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-3" />
            <p className="text-justify-wide">Los datos personales que son tratados por HUMANA pueden provenir de las siguientes modalidades y fuentes:</p>
            <h3>MODALIDADES</h3>
            <ol className="legal-list">
              <li><strong>Datos entregados por su titular de datos personales:</strong> El titular entrega datos los cuales se declara son completos, correctos y actualizados.</li>
              <li><strong>Datos generados como consecuencia contractual:</strong> Datos obtenidos conforme al desarrollo, mantenimiento o inicio de la relación con HUMANA.</li>
              <li><strong>Datos inferidos:</strong> Información obtenida por la compañía mediante la realización de perfilados, exámenes y, análisis con el consentimiento previo del titular de datos personales.</li>
              <li><strong>Datos procedentes de terceros:</strong> Los terceros pueden ser pertenecientes al sector público o privado, de información pública o de fuentes de acceso público.</li>
            </ol>
            <h3>FUENTES</h3>
            <ol className="legal-list">
              <li><strong>Página web de HUMANA, Aplicaciones de HUMANA, otros portales pertenecientes o que utilice HUMANA y redes sociales:</strong> Para consumo y envío de información del Afiliado a través de portales o plataformas tecnológicas pertenecientes o que utilice HUMANA.</li>
              <li><strong>Otros medios tecnológicos:</strong> Mediante el intercambio de correos electrónicos, llamadas telefónicas, formularios, facturas de compra, WhatsApp, transmisión o transferencia por parte de aliados estratégicos, comunicación o envío de formularios de terceros individualizados como: agentes, brókers, asesores y corredores de seguros. A su vez mediante la consulta para validación de identidad a través de los servicios provistos por la Dirección General de Registro Civil, Identificación y Cedulación (DIGERCIC).</li>
              <li>
                <strong>Cookies:</strong>
                <ul className="legal-list legal-list-nested">
                  <li>El acceso a los sitios web puede implicar el uso de cookies propias o de terceros, las cuales son pequeñas cantidades de información que se almacenan en el navegador del Cliente o usuario, lo que implica que el sitio web puede consultar la actividad previa del navegador.</li>
                  <li>Las cookies sirven para facilitar la navegación en el sitio web, hacerlo más amigable, recordar accesos y conocer la información sobre los hábitos. Sin embargo, usted puede permitir el uso de cookies o rechazarlo o también puede cambiar su configuración siempre que lo desee, pero recuerde que esto podría ocasionar que el sitio no funcione correctamente y que algunas opciones no estén disponibles; de los diferentes tipos de cookies que se utilizan en los sitios web las cookies necesarias siempre estarán habilitadas para un funcionamiento básico de los sitios web.</li>
                  <li>A través de las mencionadas tecnologías se puede recopilar información sobre la actividad del usuario en línea en los sitios web de HUMANA y de terceros aliados, páginas web que visita, vínculos en los que hace clic y la cantidad de tiempo que pasa en los mismos, IP, URL, navegador que utiliza, ubicación desde donde se conecta entre otros. El usuario podrá eliminar o bloquear cookies utilizando las configuraciones en la configuración de cookies ubicado en la parte inferior izquierda del sitio web o mediante los diferentes navegadores de internet, pero si elige cancelar las cookies, es posible que no pueda utilizar alguna de las características disponibles en los sitios web.</li>
                </ul>
              </li>
            </ol>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-4" />
            <p className="text-justify-wide">
              El sitio web de HUMANA podrá incluir hipervínculos o enlaces que permita acceder a páginas web de
              terceros aliados distintos a HUMANA. Los titulares de dichos sitios web dispondrán de sus propias
              políticas de privacidad, políticas de cookies y términos y condiciones. Los Clientes se
              comprometen a cumplir las políticas de las empresas aliadas de HUMANA.
            </p>

            <h3>4.1 TIPO DE DATOS</h3>
            <ul className="legal-list">
              <li><strong>Datos de candidato cargo laboral,</strong> información de contacto, información sobre el CV, historial laboral, referencias laborales e información de formación, conocimientos; entre otros.</li>
              <li><strong>Datos personales de posibles Clientes</strong> incluyen datos básicos (por ejemplo, nombre, apellidos, dirección, ciudad, número de teléfono, dirección de correo electrónico, nacionalidad, fecha de nacimiento, pasaporte, sector al que pertenece, firma manuscrita o electrónica, voz, por grabación de comunicaciones telefónicas, imagen por documento de identidad).</li>
              <li><strong>Datos personales de Cliente</strong> incluyen datos básicos (por ejemplo, nombre, apellidos, dirección residencial, ciudad, calle principal, barrio, nombre conjunto, zona, número de teléfono, dirección de correo electrónico, nacionalidad, información crediticia, género, ocupación principal, profesión, firma manuscrita o electrónica, voz por grabación de comunicaciones telefónicas, imagen, empresa/lugar de trabajo, cargo actual, relación de dependencia, dirección de trabajo, ciudad, calle principal, barrio, ingresos, activos, patrimonio. Cargas familiares, nombre cónyuge, cédula cónyuge, lugar de trabajo cónyuge, cargo, dirección, teléfono, referencias bancarias, referencias personales) estos datos podrán ser: identificativos, de contacto, relativos a características personales, académicos y profesionales, económicos y financieros o netamente contractual.</li>
              <li><strong>Datos personales sensibles de Afiliados</strong> Datos personales de salud y aquellos complementarios cuya categoría es especial y requiere de un consentimiento expreso e informado de las finalidades a destinarse. Los datos personales de salud pueden ser los siguientes: biométricos, pasado judicial, condición migratoria, datos crediticios, condición de discapacidad, datos del estado de salud, datos clínicos, datos genéticos, datos de origen étnico o racional, datos de comportamiento de hábitos personales, características personales o fisiológicas, geolocalización.</li>
              <li><strong>Datos de Afiliados menores de edad</strong> Datos personales sensibles y cuya categoría es especial por lo que requiere un consentimiento expreso e informado de su representante legal para la provisión o intervención del tratamiento médico provisto por: la ejecución de un contrato de atención integral de salud prepagada por parte de los prestadores médicos aliados, cumplimiento de obligación legal y en virtud de proteger el interés vital del interesado.</li>
              <li><strong>Datos personales de los Colaboradores, trabajadores/empleados</strong> Datos básicos como nombres, teléfonos, correos electrónicos entre otro. Datos especiales como crediticios y de salud. Datos derivados del contrato de trabajo, formularios solicitados, datos obtenidos de cámaras de seguridad, formatos de afiliación a seguros.</li>
              <li><strong>Datos personales de terceros / proveedores/socios comerciales</strong> datos de personas o miembros del personal de los proveedores, por ejemplo, información de contacto, información contenida en correos electrónicos y otras comunicaciones comerciales, información sobre cuentas bancarias; datos de productos y servicios contratados, características de los productos y servicios contratados, contratos, facturación, consultas, peticiones y reclamaciones realizadas, entre otros.</li>
              <li><strong>Datos personales de usuarios de páginas web</strong>, por ejemplo, direcciones IP, datos de localización, datos de archivos de registro, información de contacto. Datos de usuario y contraseña para registro y acceso en Apps o plataformas web de HUMANA.</li>
            </ul>
            <p className="text-justify-wide">Los datos de salud señalados de forma previa en este apartado serán tratados cumpliendo los principios de confidencialidad y secreto profesional conforme lo estipula la Ley.</p>
            <p className="text-justify-wide">
              Los datos recolectados se almacenarán y/o procesarán en los servidores ubicados un data center,
              ya sean propios, o contratados con terceros y/o proveedores, localizados dentro o fuera del país
              que cumplan con las características de puerto seguro, y que garanticen todas las medidas de
              seguridad de la información.
            </p>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-5" />

            <h3>1. Socios comerciales, proveedores, aliados estratégicos para brindar los servicios:</h3>
            <ul className="legal-list">
              <li>Actividades de mercadeo de los productos y servicios de HUMANA, así como de los servicios de estas y sus filiales: entidades vinculadas contractualmente, relación de cooperación o alianzas estratégicas entre sociedades comerciales para el envío de comercial relacionada a los productos y servicios ofertados en la rama de la salud, beneficios y servicios promocionales, envío de comunicaciones comerciales.</li>
              <li>Implementación de mejoras continuas a servicios y productos</li>
              <li>Análisis de datos y elaboración de perfiles de usuarios de los productos o servicios ofertados en el mercado por parte de la compañía.</li>
              <li>Actividades de cálculo para el financiamiento de servicios de atención integral de salud prepagada, análisis estadísticos y/ actuariales para determinación de tarifas tanto de renovación (contratos en curso) como de venta nueva (nuevos riesgos a suscribir).</li>
              <li>Realizar análisis de riesgo financiero para evaluar la capacidad de pago y prevenir fraudes, lavado de activos y asociación ilícita. Además, llevar a cabo auditorías internas o externas para detectar comportamientos irregulares.</li>
              <li>Revisar y/o consultar la información sobre el comportamiento crediticio, manejo de cuentas, tarjetas de crédito, inversiones y en general sobre el cumplimiento de las obligaciones, información de activos y pasivos, en todas las entidades de información crediticia que se estimen convenientes, debidamente constituidas y autorizadas por la autoridad competente.</li>
              <li>Cumplir con la facturación y obligaciones derivadas.</li>
              <li>Cumplir con las obligaciones derivadas de la relación contractual</li>
            </ul>

            <h3>2. Clientes y Prospectos:</h3>
            <ul className="legal-list">
              <li>Contacto al Prospecto para dar información acerca del producto y/o servicio solicitado o por referidos.</li>
              <li>Contacto al Cliente sobre productos nuevos, contratados, renovados o modificados, incluyendo el contacto de oferta de mejores condiciones contractuales.</li>
              <li>Formalización, desarrollo y ejecución del contrato.</li>
              <li>Mercadeo de los productos y/o servicios relacionados con los previamente solicitados los cuales pueden incluir perfilamientos.</li>
              <li>Envío de comunicaciones comerciales.</li>
              <li>Suministrar los datos recolectados a autoridades de control y vigilancia, de policía, judiciales y/o administrativas, en virtud de un requerimiento legal.</li>
              <li>Contactar telefónicamente, medios electrónicos -SMS, correo electrónico o, chat para realizar encuestas, estudios y/o confirmación de datos personales necesarios para dar seguimientos rutinarios, ejecución de una relación contractual, campañas de fidelización o mejora de servicio.</li>
              <li>Realizar análisis de riesgo financiero para evaluar la capacidad de pago y prevenir fraudes, lavado de activos y asociación ilícita. Además, llevar a cabo auditorías internas o externas para detectar comportamientos irregulares.</li>
              <li>Revisar y/o consultar la información sobre el comportamiento crediticio, manejo de cuentas, tarjetas de crédito, inversiones y en general sobre el cumplimiento de las obligaciones, información de activos y pasivos, en todas las entidades de información crediticia que se estimen convenientes, debidamente constituidas y autorizadas por la autoridad competente.</li>
              <li>Cesión de datos personales a terceros relacionados con la finalidad de poder brindar el servicio o realizar estudios estadísticos.</li>
              <li>Captar las cookies, rastreadores GIF, etiquetas de pixel y Google Analytics a través de las cuales son posibles monitorear el comportamiento del usuario, así como brindar una mejor experiencia en su navegación.</li>
              <li>Gestión del uso de canales y herramientas digitales.</li>
              <li>Para mejora de los servicios, productos y web brindada a Clientes y Prospectos.</li>
              <li>Atención a quejas, reclamos y requerimientos de usuarios.</li>
              <li>Notificar los cambios de la presente Política de Protección de Datos Personales.</li>
              <li>Dar cumplimiento a las obligaciones legalmente establecidas, así como dar cumplimiento de las obligaciones contractuales.</li>
              <li>Cumplir con la facturación y obligaciones de cobro.</li>
              <li>Análisis de datos y elaboración de perfiles de usuarios de los productos o servicios ofertados en el mercado por parte de la compañía.</li>
              <li>Realizar análisis de riesgo financiero para evaluar la capacidad de pago y prevenir fraudes, lavado de activos y asociación ilícita. Además, llevar a cabo auditorías internas o externas para detectar comportamientos irregulares.</li>
              <li>Para fines de investigación científica o estadística.</li>
            </ul>

            <h3>3. Afiliados / Beneficiarios:</h3>
            <ul className="legal-list">
              <li>Cumplimiento contractual y prestación de servicio médico.</li>
              <li>Gestión de pago planes o servicios de atención integral de salud prepagada contratados y gestionar la relación comercial, evaluar la solvencia económica.</li>
              <li>Ejecución de reembolsos, pagos y verificación de auditorías médicas.</li>
              <li>Para fines de investigación científica o estadística.</li>
              <li>Realizar análisis de riesgo financiero para evaluar la capacidad de pago y prevenir fraudes, lavado de activos y asociación ilícita. Además, llevar a cabo auditorías internas o externas para detectar comportamientos irregulares.</li>
              <li>Revisar y/o consultar la información sobre el comportamiento crediticio, manejo de cuentas, tarjetas de crédito, inversiones y en general sobre el cumplimiento de las obligaciones, información de activos y pasivos, en todas las entidades de información crediticia que se estimen convenientes, debidamente constituidas y autorizadas por la autoridad competente.</li>
            </ul>

            <h3>4. Menores de edad:</h3>
            <ul className="legal-list">
              <li>Atención integral de salud prepagada y ejecución de obligaciones contractuales suscritas por el titular del contrato.</li>
              <li>Para fines de investigación científica o estadística.</li>
            </ul>

            <h3>5. Colaboradores y candidatos:</h3>
            <ul className="legal-list">
              <li>Proceso de selección, o futuros procesos.</li>
              <li>Contactar a los candidatos.</li>
              <li>Verificar la veracidad y autenticidad de la información suministrada en su hoja de vida.</li>
              <li>Compartir información con proveedores y aliados para realizar visitas domiciliarias, exámenes médicos de ingreso.</li>
              <li>Dar cumplimiento a obligaciones laborales en calidad de empleador.</li>
              <li>Facilitar la seguridad de las instalaciones, bienes y personal de la empresa.</li>
              <li>Cualquier otra finalidad que resulte necesaria para el desarrollo del objeto social y la actividad económica de HUMANA.</li>
              <li>Evaluar la calidad y desempeño del empleado en cumplimiento de sus funciones derivadas del contrato de trabajo.</li>
              <li>Suministrar información a los entes de control para auditorías internas y externas.</li>
              <li>Tratamiento de información de familiares, para beneficios y en caso de emergencia contactar a los familiares.</li>
              <li>Revisar y/o consultar la información sobre el comportamiento crediticio, manejo de cuentas, tarjetas de crédito, inversiones y en general sobre el cumplimiento de las obligaciones, información de activos y pasivos, en todas las entidades de información crediticia que se estimen convenientes, debidamente constituidas y autorizadas por la autoridad competente.</li>
              <li>Potencialmente, incluir imágenes de uno o varios colaboradores en ejercicio de sus funciones, en material publicitario (físico o digital) de la compañía, que podrá ser distribuido de manera interna y externa.</li>
              <li>El tratamiento de datos personales sensibles, particularmente datos de salud, en virtud de la realización exámenes médicos ocupacionales anuales, información que constará en el file del Colaborador y tratamiento de manera reservado.</li>
            </ul>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-6" />
            <ul className="legal-list">
              <li>Cumplimiento contractual.</li>
              <li>Consentimiento previo de titular de datos personales.</li>
            </ul>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <header className="legal-section-head">
              <span className="legal-num" aria-hidden="true">07</span>
              <h2 id="seccion-7">7. PRINCIPIOS Y DISPOSICIONES RECTORAS QUE HUMANA, SUS COLABORADORES Y SOCIOS COMERCIALES APLICARÁN PARA EL ADECUADO TRATAMIENTO DE LOS DATOS PERSONALES</h2>
            </header>
            <h3>PRINCIPIOS</h3>
            <p className="text-justify-wide">Los principios que regirán el tratamiento de datos personales en la compañía desde su recopilación serán los establecidos en la Ley Orgánica de Protección de Datos Personal del Ecuador.</p>
            <h3>DISPOSICIONES</h3>
            <ol className="legal-list">
              <li>El Cliente, colaborador o proveedor que proporcione datos falsos, quedará excluido de nuestra red de forma permanente; además HUMANA se reserva tomar las medidas judiciales o extrajudiciales que ameriten.</li>
              <li>Los colaboradores se comprometen a dar un buen uso a las redes sociales en la medida en la cual compartan y/o comuniquen información relacionada con HUMANA, siempre en miras de los principios previamente establecidos.</li>
              <li>Únicamente se recolectarán datos que sean necesarios para el giro del negocio y siempre que se cuente con consentimiento de su titular de datos personales, con excepción de mandato legal u orden de autoridad competente.</li>
            </ol>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <header className="legal-section-head">
              <span className="legal-num" aria-hidden="true">08</span>
              <h2 id="seccion-8">8. COMUNICACIONES O TRANSFERENCIA INTERNACIONAL A TERCEROS DETERMINADOS QUE ACCEDEN A DATOS PERSONALES</h2>
            </header>
            <p className="text-justify-wide">HUMANA no venderá, intercambiará, alquilará ni compartirá la información personal del titular de datos personales excepto en las formas establecidas en esta Política.</p>
            <p className="text-justify-wide">HUMANA compartirá información con:</p>
            <ul className="legal-list">
              <li>Proveedores de servicios como: auditores externos, prestadores de servicios de salud, profesionales de salud, comprador o vendedor potencial de activos de la compañía, proveedores, entre otros.</li>
              <li>Autoridades con las cuales debe actuar, para garantizar el cumplimiento de la Ley.</li>
              <li>Mediante la autorización del titular de datos personales: a cualquiera de las sociedades controladas, controlantes y/o vinculadas con HUMANA, a cualquier título y en el momento, forma y condiciones que estime pertinente.</li>
            </ul>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-9" />
            <p className="text-justify-wide">El titular, beneficiario y/o contratante podrá ejercer los siguientes derechos en relación con el tratamiento de sus datos personales recabados por el responsable HUMANA:</p>
            <ol className="legal-list">
              <li><strong>Derecho de información:</strong> el titular de datos podrá consultar respecto a sus datos personales los fines del tratamiento, la base legal para el tratamiento, tipo de tratamiento, tiempo de conservación, existencia de una base de datos en la que constan sus datos personales, origen de los datos cuando no se hayan obtenido directamente del titular, tratamientos ulteriores, identidad y datos de contacto del responsable y delegado del tratamiento de datos personales, transferencias o comunicaciones nacionales o internacionales, consecuencias para el titular de los datos personales de su entrega o negativa a ello, efecto de suministrar datos personales erróneos o inexactos, posibilidad de revocar el consentimiento, la existencia y forma en la que pueden hacerse efectivos sus derechos, mecanismos para hacer efectivo su derecho a la portabilidad, medio y forma de realizar sus reclamos ante el responsable del tratamiento de datos personales y Autoridad de Protección de Datos Personales y, existencia de valoraciones y decisiones automatizadas, incluida la elaboración de perfiles.</li>
              <li><strong>Derecho de acceso:</strong> El titular de datos personales tiene derecho a conocer y a obtener, gratuitamente, del responsable de tratamiento acceso a todos sus datos personales y a su información, sin necesidad de presentar justificación alguna y deberá ser atendido dentro del plazo de quince (15) días.</li>
              <li><strong>Derecho de rectificación y actualización:</strong> de sus datos personales inexactos o incompletos. Se deberá atender el requerimiento en un plazo de quince (15) días.</li>
              <li><strong>Derecho de eliminación:</strong> derecho a que el responsable del tratamiento suprima sus datos personales, cuando: 1) El tratamiento no cumpla con los principios establecidos en la ley; 2) El tratamiento no sea necesario o pertinente para el cumplimiento de la finalidad; 3) Los datos personales hayan cumplido con la finalidad para la cual fueron recogidos o tratados; 4) Haya vencido el plazo de conservación de los datos personales; 5) El tratamiento afecte derechos fundamentales o libertades individuales; 6) Revoque el consentimiento prestado o señale no haberlo otorgado para uno o varios fines específicos, sin necesidad de que medie justificación alguna; o, 7) Exista obligación legal. Esta obligación la deberá cumplir en el plazo de quince (15) días de recibida la solicitud.</li>
              <li><strong>Derecho de oposición:</strong> El titular de datos personales tiene el derecho a oponerse o negarse al tratamiento de sus datos personales, en los siguientes casos: 1) No se afecten derechos y libertades fundamentales de terceros, la ley se lo permita, no se trate de información pública, de interés público o cuyo tratamiento está ordenado por la ley. 2) El tratamiento de datos personales tenga por objeto la mercadotecnia directa; el interesado tendrá derecho a oponerse en todo momento al tratamiento de los datos personales que le conciernan. 3) Cuando no sea necesario su consentimiento para el tratamiento como consecuencia de la concurrencia de un interés legítimo, y se justifique en una situación concreta personal del titular de datos personales, siempre que una ley no disponga lo contrario. Esta solicitud deberá ser atendida dentro del plazo de quince (15) días.</li>
              <li><strong>Derecho a la portabilidad:</strong> derecho a recibir del responsable del tratamiento, sus datos personales en un formato compatible, actualizado, estructurado, común, interoperable y de lectura mecánica, preservando sus características; o a transmitirlos a otros responsables. Luego de completada la transferencia de datos, el responsable que lo haga procederá a su eliminación, salvo que el titular de datos personales disponga su conservación.</li>
              <li><strong>Derecho a la suspensión del tratamiento:</strong> El titular de datos personales tendrá derecho a obtener del responsable del tratamiento la suspensión del tratamiento de los datos, cuando se cumpla alguna de las condiciones establecidas en la ley.</li>
              <li><strong>Derecho a no ser objeto de una decisión basada única o parcialmente en valoraciones automatizadas:</strong> incluida la elaboración de perfiles, que produzcan efectos jurídicos en él o que atenten contra sus derechos y libertades fundamentales.</li>
            </ol>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-10" />
            <p className="text-justify-wide">Los datos personales de los titulares de datos personales se conservarán durante el tiempo necesario para cumplir con las finalidades contratadas.</p>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-11" />
            <p className="text-justify-wide">
              HUMANA cumplirá con todas las medidas técnicas, físicas, legales y organizativas aplicables para
              la protección de los datos personales. Se utilizará los estándares de la industria para la
              protección de la confidencialidad de la información. HUMANA no puede garantizar la vulneración de
              sus sistemas, por interceptaciones ilegales no autorizadas, que hayan violentado dichas medidas.
            </p>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-12" />
            <div className="legal-callout">
              <Mail size={20} aria-hidden="true" />
              <div>
                <p className="text-justify-wide">
                  El titular de datos personales podrá ejercer sus derechos, comunicándose con HUMANA a través del{" "}
                  <a href="https://humana.med.ec/archivos/formularios/formulario-de-ejercicio-de-derechos.pdf" target="_blank" rel="noreferrer">formulario de ejercicio de derechos</a>.
                </p>
                <p className="text-justify-wide">
                  Alternativamente, como titular de datos personales podrías comunicar directamente tu requerimiento
                  al siguiente correo: <a href="mailto:yoprotejomisdatos@humana.med.ec">yoprotejomisdatos@humana.med.ec</a>
                </p>
              </div>
            </div>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-13" />
            <p className="text-justify-wide">
              Todas las solicitudes o peticiones de ejercicio de derechos de datos personales deberán ser
              dirigidas al área encargada de protección de datos de HUMANA con nombre de asunto – Protección
              Datos Personales.
            </p>
            <p className="text-justify-wide">
              El titular podrá ejercer sus derechos sobre sus datos personales en cualquier momento, y HUMANA
              deberá atender la consulta en el plazo máximo de quince (15) días contados a partir de la fecha de
              recibo de la misma. HUMANA podrá requerir la aclaración o ampliación de la información al titular,
              contenida en la solicitud, dentro de cinco (5) días de recibida la solicitud. En consecuencia, el
              titular contará con el término de diez (10) días, a partir del día siguiente al que recibió la
              notificación, para aclarar o completar.
            </p>
            <p className="text-justify-wide">
              En el caso de que el titular aclare o complete dentro del término concedido, la solicitud será
              atendida por HUMANA, dentro del plazo correspondiente. El requerimiento que no sea atendido podrá
              ser archivado mediante notificación debidamente fundamentada al titular. Esto no impide la
              presentación de una nueva solicitud por parte del titular.
            </p>
            <p className="text-justify-wide">
              Los Titulares podrán en todo momento rectificar, conocer y actualizar sus datos, entre otros,
              frente a datos parciales, inexactos, incompletos, fraccionados, que induzcan a error, o aquellos
              cuyo tratamiento esté expresamente prohibido o no haya sido autorizado. Así mismo, el Titular o su
              representante podrán solicitar la corrección o actualización de sus datos.
            </p>
            <p className="text-justify-wide">La comunicación que será tramitada mediante solicitud escrita en donde se incluyan los siguientes datos:</p>
            <ul className="legal-list">
              <li>Identificación del Titular o del representante (Nombres y apellidos completos, número de cédula de identidad o pasaporte y dirección domiciliaria o electrónica para notificaciones). Así también se incluirán los datos de la o del representado.</li>
              <li>Descripción clara y precisa de datos personales respecto de los cuales se busca ejercer alguno de los derechos y cualquier elemento que facilite la localización de los datos personales en la institución, mediante los cuales usted haya provisto.</li>
              <li>Explicación clara y precisa de su petición.</li>
              <li>Identificación del derecho o derechos que desea ejercer.</li>
              <li>Incluir documentos que acreditan identidad y representación legal.</li>
            </ul>
            <BackToIndex />
          </section>

          <section className="legal-section">
            <SectionHead id="seccion-14" />
            <p className="text-justify-wide">
              HUMANA podrá modificar esta Política y/o las prácticas de envío de e-mails. En caso de que HUMANA
              modifique la Política, éste notificará al titular de datos personales publicando una versión
              actualizada de la Política en esta sección o mediante el envío de un e-mail o informándolo en la
              página principal u otras secciones para mantener actualizado al titular de datos personales de los
              cambios realizados. En el caso que el titular de datos personales no acepte los nuevos términos y
              condiciones de la Política, el vínculo entre éste y HUMANA quedará disuelto y la información
              personal de dicho titular de los datos no será usada de otra forma que la que fue informada al
              momento de recabarse.
            </p>
            <BackToIndex />
          </section>

          <section className="legal-section" id="seccion-15-wrap">
            <SectionHead id="seccion-15" />
            <p className="text-justify-wide">
              La presente Política empezará a regir a partir del mes de septiembre de 2023. Datos Personales que
              sean almacenados, utilizados o transmitidos permanecerán en las bases de datos de HUMANA durante
              el tiempo que sea necesario para cumplir con las finalidades expuestas en este documento o para
              que la Empresa pueda cumplir con sus deberes legales.
            </p>
          </section>

          {/* Pie: vigencia + enlace a contacto -------------------------- */}
          <div className="legal-footer-box">
            <div>
              <strong>Vigencia de la Política</strong>
              <p className="text-justify-wide">
                La presente Política empezará a regir a partir del mes de septiembre de 2023. Datos Personales que
                sean almacenados, utilizados o transmitidos permanecerán en las bases de datos de HUMANA durante
                el tiempo que sea necesario para cumplir con las finalidades expuestas en este documento o para
                que la Empresa pueda cumplir con sus deberes legales.
              </p>
            </div>
            <a className="ghost-button" href="#canales-comunicacion">Ver canales de contacto</a>
          </div>
        </div>
      </div>

      <section className="content-section" id="canales-comunicacion">
        <div className="plan-hub-card" style={{ maxWidth: 820, margin: "0 auto", padding: 24, position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: 19, margin: "0 0 10px", color: "#073b60" }}>Canales de comunicación</h2>
          <ul className="plan-faq-checklist">
            {officialContactChannels.map((channel) => (
              <li key={channel.label}><strong>{channel.label}:</strong> {channel.value}</li>
            ))}
          </ul>
        </div>
      </section>

      <InstitutionalClosingCta />

      <InstitutionalExploreCards currentHref="/por-que-humana/politica-de-proteccion-de-datos/" />
    </div>
  );
}
