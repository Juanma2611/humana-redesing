import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Building2, Check, ClipboardList, HeartPulse, Mail, MapPin, MessageCircle, Monitor, Phone,
  RotateCcw, ShieldCheck, Sparkles, Stethoscope, UserRound,
  UsersRound,
} from "lucide-react";
import { SiApple, SiGoogleplay, SiWhatsapp } from "react-icons/si";
import { SiteShell } from "@/components/site-shell";
import { blogArticles } from "@/lib/blog-articles";
import { HospitalCarousel } from "@/components/hospital-carousel";

const quickServices = [
  { image: "/icons/red-prestadores.png", title: "Red de prestadores", copy: "La red de prestadores que te garantiza una atención médica de calidad", cta: "Ver Directorio", href: "/red-medica" },
  { image: "/icons/formularios.png", title: "Descarga de formularios", copy: "Descarga los formularios necesarios para realizar tus trámites", cta: "Formularios", href: "/servicios" },
  { image: "/icons/portal-broker.png", title: "Portal de Bróker", copy: "Optimiza tu trabajo en una sola plataforma y transforma la experiencia", cta: "Ver más", href: "/portal-broker", logo: true },
  { image: "/icons/cotizar-plan.png", title: "Cotizar un plan", copy: "Encuentra una amplia gama de Planes médicos en un único sitio.", cta: "Cotizar ahora", href: "/planes", featured: true },
];

const channels = [
  { icon: SiWhatsapp, label: "WhatsApp", href: "/servicios", brandColor: "#0b80bd", brandSize: 26 },
  { icon: Monitor, label: "Oficina virtual", href: "/cliente" },
  { icon: ClipboardList, label: "Formulario", href: "/servicios" },
  { icon: MapPin, label: "Oficinas", href: "#oficinas" },
  { icon: Mail, label: "Correo", href: "/servicios" },
  { icon: Phone, label: "1800 humana (48 62 62)", href: "tel:1800486262" },
];


const officialBenefits = [
  { image: "/icons/medico-domicilio.png", title: "Médico a domicilio", copy: "Solicita un médico para que acuda en el lugar donde lo necesites." },
  { image: "/icons/asistencia-viajes.png", title: "Asistencia en viajes", copy: "Viaja seguro con cobertura por un monto máximo de $100.000." },
  { image: "/icons/teleconsulta-medica.png", title: "Teleconsulta médica", copy: "Ilimitadas y sin costo, agendando tu cita en el 1800 48 62 62 o mediante APP." },
  { image: "/icons/farmacia-domicilio.png", title: "Farmacia a domicilio", copy: "Solicita tus medicinas y aplica tu cobertura con Medicity, Pharmacys y Fybeca." },
  { image: "/icons/ambulancia-terrestre.png", title: "Ambulancia terrestre", copy: "Recibe asistencia médica oportuna en caso de emergencia." },
  { image: "/icons/seguro-vida.png", title: "Seguro de vida", copy: "Si en algún momento llegas a faltar, ofrecemos a tus familiares un importante apoyo mediante el seguro de vida." },
  { image: "/icons/asistencia-exequial.png", title: "Asistencia Exequial", copy: "Cobertura de sepelio con Jardines del Valle para titulares y dependientes." },
  { icon: Sparkles, title: "Todos los beneficios", copy: "Conoce todos los beneficios que tienes al adquirir un plan médico con Humana, para cada tipo de seguro, conoce nuestros planes.", href: "/beneficios" },
];

const medicalPlans = [
  { icon: ShieldCheck, title: "Plan Proteger", copy: <>Plan de gastos médicos mayores para enfermedades o accidentes graves, <strong>desde $25,82 al mes.</strong> Se activa una vez superado el deducible. Hasta $500.000 de cobertura por incapacidad.</>, href: "/planes?segment=proteger" },
  { icon: UsersRound, title: "Individual y Familiar", copy: <>Cobertura para ti y toda tu familia con la red médica más amplia del Ecuador. <strong>Cobertura desde $15.000 hasta $150.000.</strong> Para todas las edades.</>, href: "/planes" },
  { icon: HeartPulse, title: "Plan Prosonrisas", copy: <>Plan dental para ti y tu familia. <strong>Desde $6,63 al mes por persona.</strong> Para todas las edades.</>, href: "/planes?segment=dental" },
  { icon: UserRound, title: "Plan Jóvenes", copy: <>De 18 a 35 años. Cobertura accesible diseñada para la independencia desde $58,27 al mes. <strong>Cobertura de $15.000.</strong></>, href: "/planes?segment=individual" },
];

export default function Home() {
  return <SiteShell title="Experiencia completa">
    <section className="hero" id="inicio">
      <Image className="hero-image" src="/familia-humana.png" alt="Familia compartiendo un momento de bienestar" fill priority sizes="100vw" unoptimized />
      <div className="hero-shade" />
      <div className="hero-content">
        <div className="eyebrow"><HeartPulse size={17} /> Medicina prepagada y seguros de salud</div>
        <h1>Tu bienestar.<br /><span>Nuestra prioridad.</span></h1>
        <p>Planes para ti, tu familia o tu empresa, con orientación clara para que encuentres lo que necesitas sin complicaciones.</p>
        <div className="hero-actions">
          <Link className="primary-button" href="/planes">Encuentra tu plan <ArrowRight size={18} /></Link>
          <div className="hero-actions-secondary">
            <Link className="secondary-button" href="/planes#asesor"><MessageCircle size={18} /> Hablar con un asesor</Link>
            <Link className="client-button" href="/cliente"><UserRound size={18} /> Ya soy cliente</Link>
          </div>
        </div>
        <div className="hero-trust-proof"><span className="trust-avatar-stack" aria-hidden="true"><i><UserRound /></i><i><UsersRound /></i><i><Building2 /></i></span><p><strong>Más de 200.000</strong> personas y empresas confían en Humana</p></div>
        <div className="trust-row"><span><Check size={15} /> Recorrido personalizado</span><span><Check size={15} /> Servicios fáciles de encontrar</span></div>
      </div>
    </section>

    <section className="home-official-section home-access" aria-labelledby="home-access-title">
      <div className="section-heading centered"><span className="kicker">Accesos rápidos</span><h2 id="home-access-title">Todo lo que necesitas, en un solo lugar</h2></div>
      <div className="home-access-grid">
        {quickServices.map(({image,title,copy,cta,href,featured,logo}) => <article className={featured ? "featured" : ""} key={title}>{logo ? <Image className="service-logo" src={image} alt="" width={140} height={56} unoptimized /> : <span><Image src={image} alt="" width={28} height={28} unoptimized /></span>}<h3>{title}</h3><p>{copy}</p><Link href={href}>{cta} <ArrowRight /></Link></article>)}
        <article className="provider-portal"><span className="home-service-icon"><Building2 /></span><div><h3>Portal del Prestador</h3><p>El portal donde los prestadores de salud administran su convenio, y donde las instituciones puedan iniciar su proceso de inclusión.</p></div><Link href="https://humana.med.ec/portal-prestador/">Acceso <ArrowRight /></Link></article>
      </div>
      <article className="communication-card"><div><span className="kicker">Estamos para ayudarte</span><h3>Canales de comunicación</h3></div><div className="channel-grid">{channels.map(({icon:Icon,label,href,brandColor,brandSize}) => <Link key={label} href={href}><Icon style={brandColor ? { color: brandColor, width: brandSize, height: brandSize } : undefined} /><span>{label}</span></Link>)}</div></article>
      <div className="home-network-strip"><p>La Red Humana que nos ayuda a <strong>cuidarte:</strong></p><HospitalCarousel /></div>
    </section>

    <section className="guide-section">
      <div className="guide-copy"><span className="kicker light">Tu cobertura ideal</span><h2>No tienes que conocer todos los planes para elegir bien.</h2><p>Responde preguntas simples y recibe una orientación inicial de acuerdo con tu etapa de vida y prioridades.</p><Link className="white-button" href="/encontrar-plan">Comenzar recomendador <ArrowRight size={18} /></Link></div>
      <div className="guide-steps"><div><span>1</span><p><strong>Cuéntanos</strong> a quién deseas proteger</p></div><div><span>2</span><p><strong>Define</strong> qué es más importante para ti</p></div><div><span>3</span><p><strong>Recibe</strong> una sugerencia para comparar</p></div></div>
    </section>

    <section className="home-official-section home-blog" aria-labelledby="home-blog-title">
      <div className="section-heading centered"><span className="kicker">Información para cuidarte</span><Link href="/blog"><h2 id="home-blog-title" className="home-blog-title">BLOG <span>humana</span></h2></Link></div>
      <div className="home-blog-grid">{blogArticles.map(article => <article key={article.title}><div className="home-blog-image"><Image src={article.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized /></div><div className="home-blog-copy"><h3>{article.title}</h3><span>{article.date} | Bienestar</span><p>{article.copy}</p><div className="home-blog-actions"><Link href="/blog">Leer más <ArrowRight /></Link><Link className="primary-button small" href="/planes">Cotizar en 1 minuto <ArrowRight size={16} /></Link></div></div></article>)}</div>
      <div className="home-blog-viewall"><Link className="secondary-button" href="/blog">Ver todos los blogs <ArrowRight size={18} /></Link></div>
    </section>

    <section className="home-digital-band">
      <article><span className="kicker light">Trámites digitales</span><h2>Reembolso Online, qué lindo vivir en esta época</h2><p>Con HUMANA EXPRESS puedes hacer tus reembolsos 100% online, más rápido y desde donde quieras. Ten el control de tu plan médico.</p><Link className="white-button" href="/servicios/reembolsos"><RotateCcw /> Reembolso online</Link><Link className="home-text-link" href="/servicios/reembolsos">Instrucciones de acceso <ArrowRight /></Link></article>
      <article><span className="kicker light">Central de ayuda</span><h2>Humana Contigo</h2><p>Antes de ir al médico o solicitar un examen de laboratorio, de ingresar al hospital o comprar medicinas, te recomendamos conocer a fondo las posibilidades que te ofrece tu plan.</p><Link className="white-button" href="/servicios">Acceder a la Central de Ayuda <ArrowRight /></Link></article>
    </section>

    <section className="home-official-section home-included" aria-labelledby="home-benefits-title">
      <div className="section-heading"><span className="kicker">Más valor para ti</span><h2 id="home-benefits-title">Beneficios incluidos en tu plan</h2><p>Ten el control siempre, nuestros servicios te acompañan para que te sientas tranquilo, <strong>seguro y protegido.</strong></p></div>
      <div className="home-benefits-grid">{officialBenefits.map(({image,icon:Icon,title,copy,href}) => <article key={title}><span>{image ? <Image src={image} alt="" width={28} height={28} unoptimized /> : Icon ? <Icon /> : null}</span><div className="benefit-copy"><h3>{title}</h3><p>{copy}</p></div>{href && <Link href={href}>Conocer beneficios <ArrowRight /></Link>}</article>)}</div>
    </section>

    <section className="home-app-showcase" aria-labelledby="mihumana-title">
      <div className="home-app-copy"><span className="kicker">Tu plan contigo</span><h2 id="mihumana-title">MiHumana App</h2><h3>Todos los servicios en tu celular</h3><p>Todos los <strong>documentos importantes</strong> para realizar sus trámites, en formato PDF editable, tales como solicitar reembolso, pre-autorización de cirugía, autorizaciones de débito, y más.</p><p>Obtenga el mejor beneficio de su cobertura médica, conociendo todas las <strong>prestaciones de su plan</strong>, sus <strong>deducibles y beneficios incluidos.</strong> Puede descargar el manual de uso de su plan.</p><div className="app-downloads"><a href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer"><SiGoogleplay /><span>Disponible en<strong>Google Play</strong></span></a><a href="https://apps.apple.com/ec/search?term=mi%20humana" target="_blank" rel="noreferrer"><SiApple /><span>Disponible en<strong>App Store</strong></span></a></div></div>
      <div className="home-phone" aria-label="Vista conceptual de MiHumana App"><div className="home-phone-notch" /><Image src="/humana-logo-oficial.png" alt="Humana" width={180} height={80} unoptimized /><small>Estamos aquí para acompañarte</small><strong>MH50 · HUMANA</strong><div className="phone-plan"><span>Plan contratado</span><b>Cobertura familiar</b><small>4 beneficiarios</small></div><div className="phone-actions"><span><ShieldCheck />Mi Plan</span><span><RotateCcw />Mis reembolsos</span><span><Stethoscope />Agenda</span><span><MessageCircle />Ayuda</span></div></div>
    </section>

    <section className="home-official-section home-plans" aria-labelledby="home-plans-title">
      <div className="section-heading"><span className="kicker">Elige tu respaldo</span><h2 id="home-plans-title">Planes médicos</h2></div>
      <div className="home-plan-grid">{medicalPlans.map(({icon:Icon,title,copy,href}) => <Link href={href} key={title}><div><Icon /></div><h3>{title}</h3><p>{copy}</p><span>Conocer plan <ArrowRight /></span></Link>)}</div>
    </section>

    <section className="home-foundation">
      <div className="foundation-visual"><Image src="/familia-humana.png" alt="Familia acompañada por Humana" fill sizes="(max-width: 900px) 100vw, 45vw" unoptimized /></div>
      <div><span className="kicker">Nuestro compromiso</span><h2>Humana junto a Fundación Metrofraternidad,</h2><h3>brindando esperanza a quienes más lo necesita.</h3><p>Humana, sus afiliados y un cuerpo médico especializado entregan su conocimiento y dedicación para brindar atenciones médicas y cirugías complejas a niños y jóvenes de escasos recursos.</p><Link className="primary-button" href="/conocenos">Obra social Metrofraternidad <ArrowRight /></Link><blockquote><strong>Nuestro mejor plan es ayudar</strong><span><b>6.900</b> atenciones a niños y adolescentes de escasos recursos.</span></blockquote></div>
    </section>

    <section className="home-official-section home-about" aria-labelledby="home-about-title">
      <div className="section-heading"><span className="kicker">Nuestra historia</span><h2 id="home-about-title">Nosotros</h2></div>
      <div className="home-about-copy"><p><strong>Humana S.A.</strong> es una compañía de salud y medicina prepagada que forma parte del grupo más importante en prestaciones médicas en el Ecuador: <strong>Conclina C.A.</strong>, al que también pertenece el Hospital Metropolitano, Fundación Metrofraternidad, y Metrored.</p><p>Nuestra trayectoria de 29 años en el mercado nos ha permitido cuidar del tesoro más preciado: <strong>La salud y el bienestar de miles de familias ecuatorianas.</strong> Actualmente contamos con más de 200.000 afiliados a nivel nacional.</p><p>Humana pone al servicio de sus afiliados la <strong>red de prestadores médicos más representativa, seguros y confiables del país</strong>, garantizando una atención médica de calidad:</p><p>Somos una empresa líder en <strong>planes de medicina prepagada</strong> que cuida el <strong>bienestar de personas y empresas</strong> ecuatorianas desde 1994. Estamos aquí para respaldarte con una amplia gama de <strong>coberturas y red de clínicas, hospitales, médicos, centros médicos, laboratorios y farmacias</strong> en todo el país. Nos adaptamos a tus necesidades y te ofrecemos <strong>acompañamiento 24/7</strong> para guiarte en el uso de tu plan cuando lo necesites.</p><Link href="/conocenos">Conoce más sobre Humana <ArrowRight /></Link></div>
    </section>
  </SiteShell>;
}
