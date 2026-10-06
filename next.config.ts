import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Las URLs oficiales de humana.med.ec terminan en "/" (ej. /plan-proteger/).
  // Mantener esto en true para que todas las rutas del sitio coincidan exactamente.
  trailingSlash: true,
};

export default nextConfig;
