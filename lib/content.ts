// Todo el texto del sitio vive acá.
// TODO: reemplazá LINKEDIN_URL, trabajos y testimonios por los reales.

export type Lang = "es" | "en";
export type ShapeName = "circle" | "half" | "quarter" | "square" | "triangle" | "ring" | "diamond";

export const EMAIL = "marinaziembar@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/marina-ziembar";

type Project = {
  title: string;
  kind: string;
  desc: string;
  url?: string;
  /** Portada generativa: 4 formas en grilla 2x2 */
  cover: [ShapeName, ShapeName, ShapeName, ShapeName];
  accent: "red" | "blue" | "yellow";
  /** color de fondo del slide en el carrusel */
  theme: "ink" | "red" | "yellow" | "blue" | "paper";
  /** logo circular en /public/projects */
  logo?: string;
  period?: string;
  /** texto del link (dominio) */
  linkLabel?: string;
  /** si es true, el slide muestra un botón a contacto */
  contact?: boolean;
};
type Item = { title: string; desc: string };
type Service = { title: string; desc: string; ideal: string; items: string[] };
type Testimonial = { quote: string; name: string; role: string };
type Part = string | { shape: ShapeName };

export type Dict = {
  nav: { work: string; process: string; about: string; services: string; faq: string; cta: string };
  hero: {
    eyebrow: string;
    title1: string;
    title2: string;
    headline: string;
    sub: string;
    cta: string;
    secondary: string;
    trust: string[];
  };
  marquee: string[];
  services: { label: string; title: string; aside: string; idealLabel: string; cta: string; items: Service[] };
  process: { label: string; title: string; steps: Item[] };
  work: { label: string; title: string; view: string; soon: string; prev: string; next: string; items: Project[] };
  about: { label: string; statement: Part[]; body: string[]; facts: { k: string; v: string }[]; button: string };
  testimonials: { label: string; title: string; items: Testimonial[] }; // (sección oculta por ahora)
  faq: { label: string; title: string; items: { q: string; a: string }[] };
  contact: { label: string; title: string; sub: string; copy: string; copied: string; write: string };
  footer: { made: string; top: string };
};

export const dict: Record<Lang, Dict> = {
  es: {
    nav: { work: "Proyectos", process: "Proceso", about: "Sobre mí", services: "Servicios", faq: "FAQ", cta: "Pedí tu presupuesto" },
    hero: {
      eyebrow: "Diseño + desarrollo web · Buenos Aires",
      title1: "Hola!",
      title2: "Soy Maru",
      headline: "Hago sitios web que hacen crecer tu negocio.",
      sub: "Diseño y desarrollo a medida: lindos, rápidos y pensados para que tus visitas se conviertan en clientes.",
      cta: "Pedí tu presupuesto",
      secondary: "Ver proyectos",
      trust: ["Diseño a medida", "100% responsive", "SEO incluido"],
    },
    marquee: ["Sitios institucionales", "E-commerce", "Sitios a medida", "Landing pages", "Diseño UX/UI", "Animaciones"],
    services: {
      label: "Servicios",
      title: "¿En qué te ayudo?",
      aside: "Cada proyecto es distinto, así que el presupuesto lo armamos juntxs.",
      idealLabel: "Ideal para",
      cta: "Pedir presupuesto",
      items: [
        {
          title: "Sitio institucional",
          desc: "Tu marca en internet, clara y con personalidad.",
          ideal: "Emprendimientos, profesionales y pymes.",
          items: ["Hasta 5 secciones", "Diseño a medida", "Responsive", "SEO básico", "Formulario de contacto"],
        },
        {
          title: "E-commerce",
          desc: "Una tienda online para vender sin dolores de cabeza.",
          ideal: "Marcas que quieren vender online.",
          items: ["Catálogo de productos", "Carrito y pagos", "Panel de administración", "Responsive", "SEO básico"],
        },
        {
          title: "Sitio a medida",
          desc: "¿Algo animado, raro o experimental? Mi favorito.",
          ideal: "Lanzamientos, campañas y proyectos especiales.",
          items: ["Animaciones y 3D", "Funcionalidades custom", "Integraciones", "Lo que se te ocurra"],
        },
      ],
    },
    process: {
      label: "Proceso",
      title: "De la idea a tu web, en 4 pasos",
      steps: [
        { title: "Primera charla", desc: "Me contás tu idea, tus tiempos y qué necesitás. Yo pregunto mucho." },
        { title: "Realización y feedback", desc: "Diseño y desarrollo con avances frecuentes. Vos opinás, yo ajusto." },
        { title: "Entrega", desc: "Tu sitio online, rápido y responsive. Te explico todo para que sea tuyo." },
        { title: "Mantenimiento", desc: "No desaparezco: cambios, mejoras y actualizaciones cuando las necesites." },
      ],
    },
    work: {
      label: "Proyectos",
      title: "Proyectos realizados",
      view: "Ver proyecto",
      soon: "Próximamente",
      prev: "Anterior",
      next: "Siguiente",
      items: [
        { title: "Umarket", kind: "E-commerce · itti", period: "2025 — 2026", desc: "Marketplace online en Paraguay. Participé en sentar sus bases desde cero, junto al equipo.", url: "https://umarket.com.py/es", linkLabel: "umarket.com.py", logo: "/projects/umarket-square.jpg", cover: ["square", "quarter", "circle", "half"], accent: "blue", theme: "ink" },
        { title: "El caso ueno", kind: "Sitio editorial", period: "2026", desc: "Una investigación periodística contada como póster interactivo, con las novedades hora a hora.", url: "https://expediente-ueno.vercel.app", linkLabel: "expediente-ueno.vercel.app", logo: "/projects/ueno-square.jpg", cover: ["ring", "square", "triangle", "circle"], accent: "blue", theme: "red" },
        { title: "Âme Pilates", kind: "Sitio institucional", period: "2026", desc: "El sitio de un estudio de pilates y body ballet: elegante, simple y a medida.", url: "https://www.amepilates.com.ar", linkLabel: "amepilates.com.ar", logo: "/projects/ame-square.jpg", cover: ["half", "diamond", "quarter", "circle"], accent: "red", theme: "yellow" },
        { title: "Relocation by Lambo", kind: "Sitio institucional", period: "2026", desc: "Sitio para un servicio de relocation: claro, confiable y fácil de navegar.", url: "https://www.relocationbylambo.com.ar", linkLabel: "relocationbylambo.com.ar", logo: "/projects/relocation-square.jpg", cover: ["quarter", "circle", "square", "triangle"], accent: "yellow", theme: "blue" },
        { title: "Tu proyecto", kind: "Próximamente", desc: "Este lugar está guardado para lo que hagamos juntxs.", cover: ["circle", "circle", "square", "ring"], accent: "red", theme: "paper", contact: true },
      ],
    },
    about: {
      label: "Sobre mí",
      statement: ["Desarrolladora web front‑end", { shape: "circle" }, "que convierte ideas", { shape: "square" }, "en sitios que funcionan", { shape: "triangle" }],
      body: [
        "Soy Marina, pero todos me dicen Maru. Soy desarrolladora web front-end y trabajo como Sr Frontend Engineer, construyendo sitios y productos digitales con React, Next.js y TypeScript.",
        "Tu sitio va a estar hecho con las mismas herramientas y el mismo cuidado que uso en productos grandes: rápido, prolijo, fácil de mantener y con mucha atención al detalle.",
      ],
      facts: [
        { k: "Rol", v: "Sr Frontend Engineer" },
        { k: "Base", v: "Buenos Aires, AR" },
        { k: "Stack", v: "React · Next.js · TS" },
        { k: "Idiomas", v: "Español / English" },
      ],
      button: "Mi LinkedIn",
    },
    testimonials: {
      label: "Testimonios",
      title: "Lo que dicen",
      // TODO: reemplazar por testimonios reales de clientes
      items: [
        { quote: "Testimonio de ejemplo: reemplazalo por uno real de un cliente antes de publicar.", name: "Nombre Apellido", role: "Cargo, Empresa" },
        { quote: "Otro testimonio de ejemplo, para ver cómo queda una cita un poco más larga en el diseño.", name: "Nombre Apellido", role: "Cargo, Empresa" },
        { quote: "Un tercero, cortito.", name: "Nombre Apellido", role: "Cargo, Empresa" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Preguntas frecuentes",
      items: [
        { q: "¿Cuánto cuesta un sitio?", a: "Depende de lo que necesites. Después de la primera charla te paso un presupuesto con todo detallado, sin letra chica." },
        { q: "¿Cuánto tarda?", a: "Depende del tamaño del proyecto. Antes de arrancar te doy una fecha estimada y vas viendo avances todo el tiempo." },
        { q: "¿Y si ya tengo un diseño?", a: "¡Genial! También puedo desarrollar a partir de tu diseño o el de tu equipo." },
        { q: "¿Qué pasa después de la entrega?", a: "No desaparezco: podemos seguir con mantenimiento para cambios, mejoras y actualizaciones." },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¡Creemos algo juntxs!",
      sub: "Contame tu idea y te respondo antes de que se enfríe el mate.",
      copy: "Copiar mail",
      copied: "¡Copiado!",
      write: "Escribime",
    },
    footer: { made: "Diseñado y desarrollado por Maru", top: "Arriba" },
  },
  en: {
    nav: { work: "Projects", process: "Process", about: "About", services: "Services", faq: "FAQ", cta: "Get a quote" },
    hero: {
      eyebrow: "Web design + development · Buenos Aires",
      title1: "Hola!",
      title2: "I'm Maru",
      headline: "I build websites that help your business grow.",
      sub: "Custom design and development: beautiful, fast and built to turn your visitors into clients.",
      cta: "Get a quote",
      secondary: "See projects",
      trust: ["Custom design", "100% responsive", "SEO included"],
    },
    marquee: ["Business websites", "E-commerce", "Custom websites", "Landing pages", "UX/UI Design", "Motion"],
    services: {
      label: "Services",
      title: "How can I help?",
      aside: "Every project is different, so we'll put the quote together.",
      idealLabel: "Great for",
      cta: "Get a quote",
      items: [
        {
          title: "Business website",
          desc: "Your brand online, clear and full of personality.",
          ideal: "Small businesses, freelancers and startups.",
          items: ["Up to 5 sections", "Custom design", "Responsive", "Basic SEO", "Contact form"],
        },
        {
          title: "E-commerce",
          desc: "An online store to sell without headaches.",
          ideal: "Brands that want to sell online.",
          items: ["Product catalog", "Cart & payments", "Admin panel", "Responsive", "Basic SEO"],
        },
        {
          title: "Custom website",
          desc: "Something animated, weird or experimental? My favorite.",
          ideal: "Launches, campaigns and special projects.",
          items: ["Animations & 3D", "Custom features", "Integrations", "Whatever you dream up"],
        },
      ],
    },
    process: {
      label: "Process",
      title: "From idea to website, in 4 steps",
      steps: [
        { title: "First chat", desc: "You tell me your idea, your timing and what you need. I ask a lot of questions." },
        { title: "Build & feedback", desc: "Design and development with frequent check-ins. You give feedback, I adjust." },
        { title: "Delivery", desc: "Your site goes live, fast and responsive. I walk you through everything." },
        { title: "Maintenance", desc: "I don't vanish: changes, improvements and updates whenever you need them." },
      ],
    },
    work: {
      label: "Projects",
      title: "Projects I've built",
      view: "View project",
      soon: "Coming soon",
      prev: "Previous",
      next: "Next",
      items: [
        { title: "Umarket", kind: "E-commerce · itti", period: "2025 — 2026", desc: "An online marketplace in Paraguay. I helped lay its foundations from scratch, as part of the team.", url: "https://umarket.com.py/es", linkLabel: "umarket.com.py", logo: "/projects/umarket-square.jpg", cover: ["square", "quarter", "circle", "half"], accent: "blue", theme: "ink" },
        { title: "El caso ueno", kind: "Editorial site", period: "2026", desc: "An investigative story told as an interactive poster, with updates hour by hour.", url: "https://expediente-ueno.vercel.app", linkLabel: "expediente-ueno.vercel.app", logo: "/projects/ueno-square.jpg", cover: ["ring", "square", "triangle", "circle"], accent: "blue", theme: "red" },
        { title: "Âme Pilates", kind: "Business website", period: "2026", desc: "The website for a pilates and body ballet studio: elegant, simple and custom-made.", url: "https://www.amepilates.com.ar", linkLabel: "amepilates.com.ar", logo: "/projects/ame-square.jpg", cover: ["half", "diamond", "quarter", "circle"], accent: "red", theme: "yellow" },
        { title: "Relocation by Lambo", kind: "Business website", period: "2026", desc: "A website for a relocation service: clear, trustworthy and easy to navigate.", url: "https://www.relocationbylambo.com.ar", linkLabel: "relocationbylambo.com.ar", logo: "/projects/relocation-square.jpg", cover: ["quarter", "circle", "square", "triangle"], accent: "yellow", theme: "blue" },
        { title: "Your project", kind: "Coming soon", desc: "This spot is saved for what we'll make together.", cover: ["circle", "circle", "square", "ring"], accent: "red", theme: "paper", contact: true },
      ],
    },
    about: {
      label: "About",
      statement: ["Front‑end web developer", { shape: "circle" }, "turning ideas", { shape: "square" }, "into websites that work", { shape: "triangle" }],
      body: [
        "I'm Marina, but everyone calls me Maru. I'm a front-end web developer working as a Sr Frontend Engineer, building websites and digital products with React, Next.js and TypeScript.",
        "Your site will be built with the same tools and the same care I use on big products: fast, clean, easy to maintain and with lots of attention to detail.",
      ],
      facts: [
        { k: "Role", v: "Sr Frontend Engineer" },
        { k: "Based in", v: "Buenos Aires, AR" },
        { k: "Stack", v: "React · Next.js · TS" },
        { k: "Languages", v: "Español / English" },
      ],
      button: "My LinkedIn",
    },
    testimonials: {
      label: "Testimonials",
      title: "Kind words",
      items: [
        { quote: "Sample testimonial: replace it with a real one from a client before publishing.", name: "Full Name", role: "Role, Company" },
        { quote: "Another sample testimonial, to see how a slightly longer quote looks in the layout.", name: "Full Name", role: "Role, Company" },
        { quote: "A third, short one.", name: "Full Name", role: "Role, Company" },
      ],
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "How much does a website cost?", a: "It depends on what you need. After our first chat I'll send you a detailed quote, no fine print." },
        { q: "How long does it take?", a: "It depends on the size of the project. Before we start I'll give you an estimated date, and you'll see progress all along." },
        { q: "What if I already have a design?", a: "Great! I can also build from your design or your team's." },
        { q: "What happens after launch?", a: "I don't vanish: we can keep going with maintenance for changes, improvements and updates." },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's create something together!",
      sub: "Tell me your idea and I'll reply before the mate gets cold.",
      copy: "Copy email",
      copied: "Copied!",
      write: "Email me",
    },
    footer: { made: "Designed and built by Maru", top: "Top" },
  },
};
