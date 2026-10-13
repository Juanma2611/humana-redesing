"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

export function ShareButtons({ title, path }: { title: string; path: string }) {
  const [copied, setCopied] = useState(false);

  const getUrl = () => (typeof window !== "undefined" ? window.location.origin + path : path);

  const share = (kind: "whatsapp" | "facebook" | "linkedin") => {
    const url = encodeURIComponent(getUrl());
    const text = encodeURIComponent(title);
    const links: Record<string, string> = {
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };
    window.open(links[kind], "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="blog-share-row">
      <strong>Compartir:</strong>
      <button type="button" className="blog-share-btn" onClick={() => share("whatsapp")} aria-label="Compartir en WhatsApp"><SiWhatsapp size={17} /></button>
      <button type="button" className="blog-share-btn" onClick={() => share("facebook")} aria-label="Compartir en Facebook"><SiFacebook size={17} /></button>
      <button type="button" className="blog-share-btn" onClick={() => share("linkedin")} aria-label="Compartir en LinkedIn"><FaLinkedin size={17} /></button>
      <button type="button" className="blog-share-btn" onClick={copyLink} aria-label="Copiar enlace">{copied ? <Check size={17} /> : <Link2 size={17} />}</button>
    </div>
  );
}
