# Hola! Soy Maru ;)

Landing de mi negocio freelance. Next.js (App Router) + React + TypeScript, sin librerías extra: todas las animaciones son CSS + un par de hooks.

## Arrancar

```bash
npm install
npm run dev
```

Abrí http://localhost:3000

## Qué editar

Todo el texto (ES y EN) está en **`lib/content.ts`**:

- `LINKEDIN_URL`: poné tu URL real de LinkedIn.
- `projects.items`: proyectos reales. `url` es opcional; `cover` son las 4 formas de la portada generativa y `accent` el color de acento.
- `testimonials.items`: **son de ejemplo**, reemplazalos por testimonios reales antes de publicar.
- `EMAIL`: tu mail de contacto.

Foto: en `components/About.tsx`, dentro de `.about-photo`, descomentá el `<img src="/maru.jpg" />` y poné la foto en `/public` (se ve en blanco y negro y toma color al pasar el mouse).

## Sistema visual

- Base neutra: papel `#F2EFE8` + tinta `#141414`, grilla de 6 columnas con líneas finas de fondo.
- Acentos (solo en formas y detalles): rojo `#FF4A1C`, azul `#2B4BFF`, amarillo `#FFC21A`.
- Tipografías: Archivo (títulos y texto) + IBM Plex Mono (labels), vía `next/font/google`.
- Formas: `components/Shape.tsx` (círculo, semicírculo, cuarto, cuadrado, triángulo, anillo, rombo).

## Animaciones

- Hero: letras que suben una a una, grilla de fichas tipo Bauhaus que cambian solas y giran con hover (`TileGrid.tsx`), y el ";)" hecho con formas que guiña (`Wink.tsx`).
- Proyectos: lista editorial; en desktop una portada generativa sigue al cursor.
- Proceso: línea que se completa y formas que aparecen en secuencia.
- Paquetes: acordeón con glifos geométricos.
- Testimonios: slider automático con barra de progreso.
- Cursor custom, header que se esconde al bajar, hora de Buenos Aires en vivo.
- Respeta `prefers-reduced-motion`.

## Estructura

```
app/         layout (fuentes, metadata), page, globals.css
components/  Header, Hero, TileGrid, Wink, Marquee, About, Projects, Cover, Process, Packages, Testimonials, Contact, Cursor, Shape, Reveal, SectionHead
lib/         content.ts (textos), i18n.tsx (idioma: default ES, se guarda en localStorage)
```
