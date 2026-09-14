# Proyecto: Rediseño estratégico Humana Ecuador

Este paquete contiene el código fuente completo de la versión publicada del prototipo de Humana.

## Objetivo

Continuar el rediseño UX/UI de Humana Ecuador sin perder lo ya construido. Mantener una experiencia premium, humana, clara, moderna, orientada a conversión y adaptable a móvil y escritorio.

## Tecnología

- React 19 + TypeScript
- Next.js 16 sobre Vinext/Vite
- Tailwind CSS 4
- Lucide React
- Cloudflare Workers / Sites
- Node.js 22.13 o superior

## Cómo ejecutar

```bash
npm ci
npm run dev
```

Para validar una entrega:

```bash
npm test
```

## Estructura principal

- `app/page.tsx`: página principal.
- `app/planes/page.tsx`: presentación interactiva de planes.
- `app/encontrar-plan/page.tsx`: recomendador de planes.
- `app/cliente/page.tsx`: perfil demostrativo MiHumana de Andrea y simulador MH50.
- `app/red-medica/page.tsx`: buscador demostrativo de la red médica.
- `app/servicios/`: servicios, autorizaciones y reembolsos.
- `app/empresas/page.tsx`: propuesta empresarial.
- `app/beneficios/page.tsx`: beneficios.
- `app/conocenos/page.tsx`: información institucional.
- `app/blog/page.tsx`: blog.
- `components/site-shell.tsx`: navegación, barra superior y pie de página.
- `app/globals.css`: sistema visual y estilos responsive.
- `public/`: imágenes y recursos gráficos usados por el sitio.

## Decisiones que deben conservarse

- Mensaje de confianza: “Más de 200.000 personas y empresas confían en Humana”.
- Hero principal con “Encuentra tu plan”, “Hablar con un asesor” y “Ya soy cliente”.
- Barra superior con “Portal Prestador” y “Portal Bróker”.
- Accesos rápidos inmediatamente después del hero.
- Recomendador funcional y siempre visible durante todos sus pasos.
- Tarjetas de detalles de planes compactas y horizontales.
- PH15 destacado como opción individual recomendada y MH50 como opción familiar recomendada.
- Perfil demostrativo de Andrea, esposo y dos hijos con plan MH50.
- Simulador de copagos personalizado por beneficiario, con aviso visible de cálculo aproximado y referencial.
- Textos de la página principal preservados por su intención SEO.
- Animaciones sutiles, sin exceso de tarjetas repetitivas ni apariencia genérica de contenido generado.

## Importante sobre datos y conexiones

La experiencia es un prototipo. Los prestadores, cálculos, accesos, formularios y datos familiares son demostrativos hasta conectarlos con las fuentes y servicios oficiales de Humana. No convertir valores referenciales en promesas contractuales sin revisar los anexos oficiales.

## Despliegue actual

La configuración de Sites está en `.openai/hosting.json`. Si el proyecto se migra a otro proveedor, adapta el build y las variables del proveedor sin borrar el código fuente ni los recursos existentes.
