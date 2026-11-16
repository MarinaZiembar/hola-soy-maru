# Hola! Soy Maru ;)

Landing de mi servicio freelance de diseño y desarrollo web. Next.js (App Router) + React + TypeScript, sin librerías extra: las animaciones son CSS + un par de hooks.

Producción: https://hola-soy-maru.vercel.app (se deploya sola con cada push a `main`).

## Arrancar

```bash
npm install
npm run dev
```

## Qué editar

Todo el texto (ES y EN) está en **`lib/content.ts`**:

- `LINKEDIN_URL`: tu URL real de LinkedIn.
- `work.items`: trabajos reales (`url` opcional, `cover` = portada generativa de 4 formas).
- `testimonials.items`: **son de ejemplo**, reemplazalos por testimonios reales.
- `faq.items`: preguntas frecuentes; revisá que las respuestas reflejen cómo trabajás.
- `EMAIL`: mail de contacto.

Foto: en `components/About.tsx`, dentro de `.about-photo`, descomentá el `<img src="/maru.jpg" />` y poné la foto en `/public`.

## Secciones

Hero (composición cinética `Kinetic.tsx`) → Trabajos "Confiaron en mí" (carrusel 100vh, `Projects.tsx`; cada slide usa `theme`) → Sobre mí (azul) → Proceso (negro) → Servicios "¿En qué te ayudo?" (amarillo) → FAQ → Contacto (negro). `Testimonials.tsx` queda listo pero fuera de la página; para mostrarlo, agregalo en `app/page.tsx`.

## Sistema visual

- Base: papel `#F2EFE8` + tinta `#141414`, grilla de 6 columnas de fondo.
- Acentos: rojo `#FF4A1C`, azul `#2B4BFF` (también fondo de Beneficios), amarillo `#FFC21A`.
- Tipografías: Archivo + IBM Plex Mono (`next/font/google`).
- Logo y favicon (`app/icon.svg`): el ;) geométrico (`components/Wink.tsx`).
- Respeta `prefers-reduced-motion`.
