// Todo el texto del sitio vive acá.
// TODO: reemplazá LINKEDIN_URL, proyectos y testimonios por los reales.

export type Lang = "es" | "en";
export type ShapeName = "circle" | "half" | "quarter" | "square" | "triangle" | "ring" | "diamond";

export const EMAIL = "marinaziembar@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/TU-USUARIO"; // TODO

type Project = {
  title: string;
  kind: string;
  desc: string;
  url?: string;
  /** Portada generativa: 4 formas en grilla 2x2 */
  cover: [ShapeName, ShapeName, ShapeName, ShapeName];
  accent: "red" | "blue" | "yellow";
};
type Step = { title: string; desc: string };
type Pack = { title: string; desc: string; items: string[] };
type Testimonial = { quote: string; name: string; role: string };
type Part = string | { shape: ShapeName };

export type Dict = {
  nav: { about: string; projects: string; process: string; packages: string; contact: string };
  hero: {
    role: string;
    available: string;
    title1: string;
    title2: string;
    sub: string;
    cta: string;
    scroll: string;
    city: string;
  };
  marquee: string[];
  about: {
    label: string;
    statement: Part[];
    body: string[];
    facts: { k: string; v: string }[];
    button: string;
  };
  projects: { label: string; title: string; view: string; soon: string; items: Project[] };
  process: { label: string; title: string; steps: Step[] };
  packages: { label: string; title: string; sub: string; cta: string; items: Pack[] };
  testimonials: { label: string; title: string; items: Testimonial[] };
  contact: { label: string; title1: string; title2: string; sub: string; copy: string; copied: string; write: string };
  footer: { made: string; top: string };
};

export const dict: Record<Lang, Dict> = {
  es: {
    nav: { about: "Sobre mí", projects: "Proyectos", process: "Proceso", packages: "Paquetes", contact: "Contacto" },
    hero: {
      role: "Diseño + desarrollo web",
      available: "Tomando proyectos",
      title1: "Hola!",
      title2: "Soy Maru",
      sub: "Hago sitios web con buen diseño, código prolijo y un poquito de movimiento. De la primera idea al deploy, sin vueltas.",
      cta: "Charlemos",
      scroll: "Scroll",
      city: "Buenos Aires",
    },
    marquee: ["Sitios institucionales", "E-commerce", "Sitios a medida", "Diseño UX/UI", "Animaciones", "Next.js"],
    about: {
      label: "Sobre mí",
      statement: [
        "Mitad diseñadora",
        { shape: "circle" },
        "mitad dev",
        { shape: "square" },
        "y bastante curiosa",
        { shape: "triangle" },
      ],
      body: [
        "Soy Marina, pero todos me dicen Maru. Estudié Diseño Gráfico en la UBA, después me enamoré del código y desde entonces hago las dos cosas a la vez.",
        "Trabajo como Sr Frontend Engineer y ahora también te ayudo a vos: sitios que se ven bien, cargan rápido y tienen ese detalle que hace que alguien se quede un rato más.",
      ],
      facts: [
        { k: "Base", v: "Buenos Aires, AR" },
        { k: "Formación", v: "Diseño Gráfico, UBA" },
        { k: "Stack", v: "React · Next.js · TS" },
        { k: "Idiomas", v: "Español / English" },
      ],
      button: "Mi LinkedIn",
    },
    projects: {
      label: "Proyectos",
      title: "Algunas cosas que hice",
      view: "Ver proyecto",
      soon: "Próximamente",
      items: [
        { title: "uMarket", kind: "Marketplace", desc: "Las bases de un marketplace, desde cero y en equipo.", cover: ["square", "quarter", "circle", "half"], accent: "blue" },
        { title: "CRT Dreams", kind: "Three.js · Experimental", desc: "Televisores retro flotando en un cielo pastel.", cover: ["ring", "square", "triangle", "circle"], accent: "red" },
        { title: "Portfolio", kind: "Next.js · Motion", desc: "Mi portfolio personal, con formas que se mueven.", cover: ["half", "diamond", "quarter", "square"], accent: "yellow" },
        { title: "Tu proyecto", kind: "Próximamente", desc: "Este lugar está guardado para lo que hagamos juntxs.", cover: ["circle", "circle", "square", "ring"], accent: "red" },
      ],
    },
    process: {
      label: "Proceso",
      title: "Cómo trabajamos",
      steps: [
        { title: "Primera charla", desc: "Me contás tu idea, tus tiempos y qué necesitás. Yo pregunto mucho." },
        { title: "Realización y feedback", desc: "Diseño y desarrollo con avances frecuentes. Vos opinás, yo ajusto." },
        { title: "Entrega", desc: "Tu sitio online, rápido y responsive. Te explico todo para que sea tuyo." },
        { title: "Mantenimiento", desc: "No desaparezco: cambios, mejoras y actualizaciones cuando las necesites." },
      ],
    },
    packages: {
      label: "Paquetes",
      title: "¿Qué necesitás?",
      sub: "Cada proyecto es distinto, así que el presupuesto lo armamos juntxs.",
      cta: "Consultar",
      items: [
        { title: "Sitio institucional", desc: "Tu marca en internet, clara y con personalidad.", items: ["Hasta 5 secciones", "Diseño a medida", "Responsive", "SEO básico"] },
        { title: "E-commerce", desc: "Una tienda online para vender sin dolores de cabeza.", items: ["Catálogo de productos", "Carrito y pagos", "Panel de administración", "Responsive"] },
        { title: "Sitio a medida", desc: "¿Algo animado, raro o experimental? Mi favorito.", items: ["Animaciones y 3D", "Funcionalidades custom", "Integraciones", "Lo que se te ocurra"] },
      ],
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
    contact: {
      label: "Contacto",
      title1: "¿Hacemos",
      title2: "algo juntxs?",
      sub: "Escribime y te respondo antes de que se enfríe el mate.",
      copy: "Copiar mail",
      copied: "¡Copiado!",
      write: "Escribime",
    },
    footer: { made: "Diseñado y desarrollado por Maru", top: "Arriba" },
  },
  en: {
    nav: { about: "About", projects: "Projects", process: "Process", packages: "Packages", contact: "Contact" },
    hero: {
      role: "Web design + development",
      available: "Taking projects",
      title1: "Hola!",
      title2: "I'm Maru",
      sub: "I build websites with good design, tidy code and a little bit of motion. From the first idea to deploy, no fuss.",
      cta: "Let's talk",
      scroll: "Scroll",
      city: "Buenos Aires",
    },
    marquee: ["Business websites", "E-commerce", "Custom websites", "UX/UI Design", "Motion", "Next.js"],
    about: {
      label: "About",
      statement: [
        "Half designer",
        { shape: "circle" },
        "half dev",
        { shape: "square" },
        "and pretty curious",
        { shape: "triangle" },
      ],
      body: [
        "I'm Marina, but everyone calls me Maru. I studied Graphic Design at UBA, then fell in love with code, and I've been doing both ever since.",
        "I work as a Sr Frontend Engineer and now I can help you too: sites that look good, load fast and have that little detail that makes people stick around.",
      ],
      facts: [
        { k: "Based in", v: "Buenos Aires, AR" },
        { k: "Studied", v: "Graphic Design, UBA" },
        { k: "Stack", v: "React · Next.js · TS" },
        { k: "Languages", v: "Español / English" },
      ],
      button: "My LinkedIn",
    },
    projects: {
      label: "Projects",
      title: "Some things I made",
      view: "View project",
      soon: "Coming soon",
      items: [
        { title: "uMarket", kind: "Marketplace", desc: "Laying the foundations of a marketplace, from scratch, as a team.", cover: ["square", "quarter", "circle", "half"], accent: "blue" },
        { title: "CRT Dreams", kind: "Three.js · Experimental", desc: "Retro TVs floating in a pastel sky.", cover: ["ring", "square", "triangle", "circle"], accent: "red" },
        { title: "Portfolio", kind: "Next.js · Motion", desc: "My personal portfolio, full of moving shapes.", cover: ["half", "diamond", "quarter", "square"], accent: "yellow" },
        { title: "Your project", kind: "Coming soon", desc: "This spot is saved for what we'll make together.", cover: ["circle", "circle", "square", "ring"], accent: "red" },
      ],
    },
    process: {
      label: "Process",
      title: "How we work",
      steps: [
        { title: "First chat", desc: "You tell me your idea, your timing and what you need. I ask a lot of questions." },
        { title: "Build & feedback", desc: "Design and development with frequent check-ins. You give feedback, I adjust." },
        { title: "Delivery", desc: "Your site goes live, fast and responsive. I walk you through everything." },
        { title: "Maintenance", desc: "I don't vanish: changes, improvements and updates whenever you need them." },
      ],
    },
    packages: {
      label: "Packages",
      title: "What do you need?",
      sub: "Every project is different, so we'll put the quote together.",
      cta: "Ask about it",
      items: [
        { title: "Business website", desc: "Your brand online, clear and full of personality.", items: ["Up to 5 sections", "Custom design", "Responsive", "Basic SEO"] },
        { title: "E-commerce", desc: "An online store to sell without headaches.", items: ["Product catalog", "Cart & payments", "Admin panel", "Responsive"] },
        { title: "Custom website", desc: "Something animated, weird or experimental? My favorite.", items: ["Animations & 3D", "Custom features", "Integrations", "Whatever you dream up"] },
      ],
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
    contact: {
      label: "Contact",
      title1: "Shall we make",
      title2: "something together?",
      sub: "Drop me a line and I'll reply before the mate gets cold.",
      copy: "Copy email",
      copied: "Copied!",
      write: "Email me",
    },
    footer: { made: "Designed and built by Maru", top: "Top" },
  },
};
