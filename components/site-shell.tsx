"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, ChevronDown, Clock3, HeartPulse, Headphones, Layers3, MapPin, Menu, MessageCircle, ShieldCheck, Smartphone, SmilePlus, UsersRound, X } from "lucide-react";
import { SiFacebook, SiInstagram, SiTiktok, SiYoutube } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import { MotionOrchestrator } from "@/components/motion-orchestrator";

const plansMenu = [
  { segment: "individual", label: "Individual", icon: HeartPulse },
  { segment: "familiar", label: "Familiar", icon: UsersRound },
  { segment: "dental", label: "ProSonrisas", icon: SmilePlus },
  { segment: "empresa", label: "Empresas", icon: Building2 },
  { segment: "proteger", label: "Protección extra", icon: Layers3 },
] as const;

const footerOffices = {
  Quito: {
    address: "Matriz: Inglaterra E3-266 y Av. Amazonas, Edificio Stratta.",
    detail: "Lunes a viernes · 08h30 a 17h30",
    phone: "(02) 401 7000",
    phoneHref: "tel:+59324017000",
  },
  Guayaquil: {
    address: "Av. Joaquín José Orrantia, Edificio Ágora Ciudad Viva, piso 5, oficinas 506–508. Frente al Mall del Sol, junto al Sheraton.",
    detail: "Lunes a viernes · 08h30 a 17h00",
    phone: "04 501 0008",
    phoneHref: "tel:+59345010008",
  },
  Cuenca: {
    address: "Alfonso Moreno Mora y Juan Íñiguez, esquina. Edificio Génova, locales 1 y 2.",
    detail: "Lunes a viernes · 08h30–12h30 y 13h00–16h30",
    phone: "098 444 2294",
    phoneHref: "tel:+593984442294",
  },
} as const;

type FooterOffice = keyof typeof footerOffices;

const paymentBrands = [
  { name: "VISA", image: "/payment/visa-logo.png", width: 26 },
  { name: "Mastercard", image: "/payment/mastercard-logo.png", width: 24 },
  { name: "American Express", image: "/payment/amex-logo.png", width: 25 },
  { name: "Diners Club International", image: "/payment/dinersclub-logo.png", width: 42 },
  { name: "Paymentez", image: "/payment/paymentez-logo.png", width: 64 },
  { name: "Place to Pay", image: "/payment/placetopay-logo.png", width: 62 },
];

export function SiteShell({ children, title = "Prototipo navegable" }: { children: React.ReactNode; title?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [plansOpen, setPlansOpen] = useState(false);
  const [activeOffice, setActiveOffice] = useState<FooterOffice>("Quito");
  const office = footerOffices[activeOffice];
  const plansDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!plansOpen) return;
    const onOutside = (event: MouseEvent) => {
      if (plansDropdownRef.current && !plansDropdownRef.current.contains(event.target as Node)) setPlansOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, [plansOpen]);

  const closeMenus = () => { setPlansOpen(false); setMenuOpen(false); };

  return (
    <main data-page-title={title}>
      <MotionOrchestrator />
      <div className="prototype-bar">
        <div className="prototype-portals"><Link href="https://humana.med.ec/portal-prestador/">Portal Prestador</Link><Link href="/portal-broker">Portal Bróker</Link></div>
      </div>
      <header className="site-header full-header">
        <Link className="brand" href="/" aria-label="Humana, inicio">
          <Image src="/humana-logo-oficial.png" alt="Humana · Cobertura Médica Integral" width={746} height={334} priority unoptimized />
        </Link>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Navegación principal">
          <div className={`nav-plans-dropdown${plansOpen ? " open" : ""}`} ref={plansDropdownRef}>
            <button type="button" className="nav-plans-trigger" aria-haspopup="true" aria-expanded={plansOpen} onClick={() => setPlansOpen((open) => !open)}>
              Planes <ChevronDown size={14} className="nav-plans-caret" aria-hidden="true" />
            </button>
            <div className="nav-plans-menu" role="menu">
              {plansMenu.map(({ segment, label, icon: Icon }) => (
                <Link key={segment} href={`/planes?segment=${segment}`} role="menuitem" onClick={closeMenus}>
                  <span className="nav-plans-menu-icon"><Icon size={17} aria-hidden="true" /></span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>
          <Link href="/encontrar-plan">Para ti</Link>
          <Link href="/empresas">Empresas</Link>
          <Link href="/conocenos">Conócenos</Link>
          <Link href="/beneficios">Beneficios</Link>
          <Link href="/red-medica">Red médica</Link>
          <Link href="/servicios">Servicios para clientes</Link>
          <a href="/blog">Bienestar</a>
        </nav>
        <div className="header-actions">
          <div className="help-mini"><Headphones size={18} /><span>¿Necesitas ayuda?<strong>02 395 7400</strong></span></div>
          <Link className="login-link bordered" href="/cliente">MiHumana</Link>
          <Link className="primary-button small" href="/planes">Cotiza tu plan</Link>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</button>
      </header>
      {children}
      <footer className="site-footer">
        <div className="footer-trust">
          <div className="footer-brand">
            <Image src="/humana-logo-oficial.png" alt="Humana · Cobertura Médica Integral" width={746} height={334} unoptimized />
            <div><strong>Tu bienestar, acompañado siempre.</strong><p>Más de 200.000 personas y empresas confían en Humana.</p></div>
          </div>
          <div className="footer-trust-actions"><Link href="/cliente"><ShieldCheck /> Ya soy cliente</Link><Link href="/planes">Conocer planes</Link></div>
        </div>

        <div className="footer-main-grid">
          <section className="footer-link-column" aria-labelledby="footer-explora"><h2 id="footer-explora">Descubre Humana</h2><Link href="/conocenos">¿Por qué Humana?</Link><Link href="/planes">Planes médicos</Link><Link href="/planes?segment=dental">ProSonrisas</Link><Link href="/empresas">Empresas</Link><Link href="/beneficios">Beneficios</Link><a href="/blog">Bienestar</a></section>
          <section className="footer-link-column" aria-labelledby="footer-plan"><h2 id="footer-plan">Usa tu plan</h2><Link href="/cliente">MiHumana</Link><Link href="/servicios/reembolsos">Reembolsos</Link><Link href="/servicios/autorizaciones">Autorizaciones</Link><Link href="/red-medica">Red médica</Link><Link href="/servicios">Centro de servicios</Link></section>

          <section className="footer-office-card" id="oficinas" aria-labelledby="footer-offices">
            <div className="footer-card-heading"><span><Building2 /></span><div><small>Estamos cerca</small><h2 id="footer-offices">Nuestras oficinas</h2></div></div>
            <div className="footer-office-tabs" role="tablist" aria-label="Ciudad de la oficina">
              {(Object.keys(footerOffices) as FooterOffice[]).map(city => <button key={city} type="button" role="tab" aria-selected={activeOffice === city} className={activeOffice === city ? "active" : ""} onClick={() => setActiveOffice(city)}>{city}</button>)}
            </div>
            <div className="footer-office-detail" role="tabpanel" aria-live="polite"><p><MapPin /> {office.address}</p><p><Clock3 /> {office.detail}</p><a href={office.phoneHref}><Headphones /> {office.phone}</a></div>
            <div className="footer-contact-lines"><a href="tel:1800486262"><Headphones /> <span>Afiliados<strong>1800 HUMANA (486262)</strong></span></a><a href="tel:+59324017000"><MessageCircle /> <span>Matriz<strong>(02) 401 7000</strong></span></a></div>
          </section>

          <section className="footer-digital-card" aria-labelledby="footer-digital">
            <div className="footer-card-heading"><span><Smartphone /></span><div><small>Todo en un solo lugar</small><h2 id="footer-digital">Servicios digitales</h2></div></div>
            <div className="footer-service-links"><Link href="/cliente">Portal de afiliados</Link><Link href="/cliente">Pago en línea</Link><Link href="/red-medica">Agendar cita médica</Link></div>
            <p>Descarga MiHumana</p>
            <div className="footer-apps"><a href="https://play.google.com/store/apps/details?id=com.libelulasoft.humana" target="_blank" rel="noreferrer"><Image src="/badges/google-play-badge.png" alt="Disponible en Google Play" width={897} height={240} unoptimized /></a><a href="https://apps.apple.com/ec/search?term=mi%20humana" target="_blank" rel="noreferrer"><Image src="/badges/app-store-badge.png" alt="Disponible en el App Store" width={841} height={240} unoptimized /></a></div>
          </section>
        </div>

        <div className="footer-meta-grid">
          <section><h2>Normativa y privacidad</h2><div className="footer-inline-links"><span>Lineamientos sanitarios</span><span>Ley de medicina prepagada</span><span>Protección de datos</span><span>Política de cookies</span></div></section>
          <section><h2>Pago seguro</h2><div className="footer-payment-brands" aria-label="Medios de pago">{paymentBrands.map(({name,image,width}) => <span key={name} className="payment-chip"><Image src={image} alt={name} width={width} height={40} unoptimized /></span>)}</div></section>
        </div>

        <div className="footer-bottom">
          <p className="concept-note">Prototipo conceptual. Información, direcciones, beneficios, nombres y procesos sujetos a validación oficial de Humana.</p>
          <div className="footer-social" aria-label="Redes sociales"><a href="https://www.facebook.com/HumanaEc/" target="_blank" rel="noreferrer" aria-label="Facebook"><SiFacebook /></a><a href="https://www.instagram.com/humanaec/" target="_blank" rel="noreferrer" aria-label="Instagram"><SiInstagram /></a><a href="https://www.tiktok.com/@humanaec" target="_blank" rel="noreferrer" aria-label="TikTok"><SiTiktok /></a><a href="https://www.youtube.com/humanaecuadorsa" target="_blank" rel="noreferrer" aria-label="YouTube"><SiYoutube /></a><a href="https://www.linkedin.com/company/humana-ecuador/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a></div>
        </div>
        <p className="footer-copyright">Humana Cobertura Médica Integral · Planes médicos y medicina prepagada en Ecuador · Todos los derechos reservados © 2026</p>
      </footer>
    </main>
  );
}

export function PageHero({ eyebrow, title, description, children, imageSrc, imageAlt, imagePosition = "center" }: { eyebrow: string; title: string; description: string; children?: React.ReactNode; imageSrc?: string; imageAlt?: string; imagePosition?: string }) {
  return <section className={`page-hero ${imageSrc ? "page-hero-with-image" : ""}`}>
    {imageSrc && <Image className="page-hero-media" src={imageSrc} alt={imageAlt ?? ""} fill priority sizes="100vw" style={{ objectPosition: imagePosition }} unoptimized />}
    {imageSrc && <div className="page-hero-shade" aria-hidden="true" />}
    <div className="page-hero-copy"><span className="kicker">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children}</div>
  </section>;
}
