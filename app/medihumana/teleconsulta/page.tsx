import { permanentRedirect } from "next/navigation";

// En el sitio oficial esta URL no tiene contenido propio: redirige a la
// central de ayuda externa.
export default function TeleconsultaRedirect() {
  permanentRedirect("https://servicio.humana.med.ec/hc/es/articles/4402720816013-Teleconsulta-m%C3%A9dica");
}
