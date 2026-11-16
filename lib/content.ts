// Todo el texto del sitio vive acá.
// TODO: reemplazá LINKEDIN_URL, trabajos y testimonios por los reales.

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
type Item = { title: string; desc: string };
type Service = { title: string; desc: string; ideal: string; items: string[] };
type Testimonial = { quote: string; name: string; role: string };
type Part = string | { shape: ShapeName };

export type Dict = {
  nav: { services: string; process: string; work: string; about: string; faq: string; cta: string };
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
  benefits: { label: string; title: string; items: Item[] };
  services: { label: string; title: string; aside: string; idealLabel: string; cta: string; items: Service[] };
  process: { label: string; title: string; steps: Item[] };
  work: { label: string; title: string; view: string; soon: string; items: Project[] };
  about: { label: string; statement: Part[]; body: string[]; facts: { k: string; v: string }[]; button: string };
  testimonials: { label: string; title: string; items: Testimonial[] };
  faq: { label: string; title: string; items: { q: string; a: string }[] };
  contact: { label: string; title: string; sub: string; copy: string; copied: string; write: string };
  footer: { made: string; top: string };
};

export const dict: Record<Lang, Dict> = {
  es: {
    nav: { services: "Servicios", process: "Proceso", work: "Trabajos", about: "Quién soy", faq: "FAQ", cta: "Pedí tu presupuesto" },
    hero: {
      eyebrow: "Diseño + desarrollo web · Buenos Aires",
      title1: "Hola!",
      title2: "Soy Maru",
      headline: "Hago sitios web que hacen crecer tu negocio.",
      sub: "Diseño y desarrollo a medida: lindos, rápidos y pensados para que tus visitas se conviertan en clientes.",
      cta: "Pedí tu presupuesto",
      secondary: "Ver servicios",
      trust: ["Diseño a medida", "100% responsive", "SEO incluido"],
    },
    marquee: ["Sitios institucionales", "E-commerce", "Sitios a medida", "Landing pages", "Diseño UX/UI", "Animaciones"],
    benefits: {
      label: "Por qué conmigo",
      title: "Un sitio que trabaja para vos",
      items: [
        { title: "Nada de plantillas", desc: "Diseño pensado para tu marca y tu público, no un template que tiene todo el mundo." },
        { title: "Rápido y en Google", desc: "Código prolijo y optimizado para que cargue al toque y te encuentren." },
        { title: "Se ve bien en todos lados", desc: "Celular, tablet o compu: tu sitio se adapta y se ve impecable." },
        { title: "Diseñadora + dev", desc: "Una sola persona de punta a punta: menos vueltas, más coherencia." },
      ],
    },
    services: {
      label: "Servicios",
      title: "¿Qué necesitás?",
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
      title: "Así trabajamos",
      steps: [
        { title: "Primera charla", desc: "Me contás tu idea, tus tiempos y qué necesitás. Yo pregunto mucho." },
        { title: "Realización y feedback", desc: "Diseño y desarrollo con avances frecuentes. Vos opinás, yo ajusto." },
        { title: "Entrega", desc: "Tu sitio online, rápido y responsive. Te explico todo para que sea tuyo." },
        { title: "Mantenimiento", desc: "No desaparezco: cambios, mejoras y actualizaciones cuando las necesites." },
      ],
    },
    work: {
      label: "Trabajos",
      title: "Algunas cosas que hice",
      view: "Ver proyecto",
      soon: "Próximamente",
      items: [
        { title: "uMarket", kind: "Marketplace", desc: "Las bases de un marketplace, desde cero y en equipo.", cover: ["square", "quarter", "circle", "half"], accent: "blue" },
        { title: "CRT Dreams", kind: "Three.js · Experimental", desc: "Televisores retro flotando en un cielo pastel.", cover: ["ring", "square", "triangle", "circle"], accent: "red" },
        { title: "Tu proyecto", kind: "Próximamente", desc: "Este lugar está guardado para lo que hagamos juntxs.", cover: ["circle", "circle", "square", "ring"], accent: "yellow" },
      ],
    },
    about: {
      label: "Quién soy",
      statement: ["Mitad diseñadora", { shape: "circle" }, "mitad dev", { shape: "square" }, "y bastante curiosa", { shape: "triangle" }],
      body: [
        "Soy Marina, pero todos me dicen Maru. Estudié Diseño Gráfico en la UBA, después me enamoré del código y desde entonces hago las dos cosas a la vez.",
        "Trabajo como Sr Frontend Engineer, así que tu sitio va a estar hecho con las mismas herramientas y el mismo cuidado que uso en productos grandes.",
      ],
      facts: [
        { k: "Base", v: "Buenos Aires, AR" },
        { k: "Formación", v: "Diseño Gráfico, UBA" },
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
    nav: { services: "Services", process: "Process", work: "Work", about: "About", faq: "FAQ", cta: "Get a quote" },
    hero: {
      eyebrow: "Web design + development · Buenos Aires",
      title1: "Hola!",
      title2: "I'm Maru",
      headline: "I build websites that help your business grow.",
      sub: "Custom design and development: beautiful, fast and built to turn your visitors into clients.",
      cta: "Get a quote",
      secondary: "See services",
      trust: ["Custom design", "100% responsive", "SEO included"],
    },
    marquee: ["Business websites", "E-commerce", "Custom websites", "Landing pages", "UX/UI Design", "Motion"],
    benefits: {
      label: "Why me",
      title: "A website that works for you",
      items: [
        { title: "No templates", desc: "Design made for your brand and your audience, not a theme everyone else has." },
        { title: "Fast and on Google", desc: "Clean, optimized code so it loads in a snap and people can find you." },
        { title: "Looks good everywhere", desc: "Phone, tablet or laptop: your site adapts and looks flawless." },
        { title: "Designer + dev", desc: "One person from start to finish: less back and forth, more consistency." },
      ],
    },
    services: {
      label: "Services",
      title: "What do you need?",
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
      title: "How we work",
      steps: [
        { title: "First chat", desc: "You tell me your idea, your timing and what you need. I ask a lot of questions." },
        { title: "Build & feedback", desc: "Design and development with frequent check-ins. You give feedback, I adjust." },
        { title: "Delivery", desc: "Your site goes live, fast and responsive. I walk you through everything." },
        { title: "Maintenance", desc: "I don't vanish: changes, improvements and updates whenever you need them." },
      ],
    },
    work: {
      label: "Work",
      title: "Some things I made",
      view: "View project",
      soon: "Coming soon",
      items: [
        { title: "uMarket", kind: "Marketplace", desc: "Laying the foundations of a marketplace, from scratch, as a team.", cover: ["square", "quarter", "circle", "half"], accent: "blue" },
        { title: "CRT Dreams", kind: "Three.js · Experimental", desc: "Retro TVs floating in a pastel sky.", cover: ["ring", "square", "triangle", "circle"], accent: "red" },
        { title: "Your project", kind: "Coming soon", desc: "This spot is saved for what we'll make together.", cover: ["circle", "circle", "square", "ring"], accent: "yellow" },
      ],
    },
    about: {
      label: "About",
      statement: ["Half designer", { shape: "circle" }, "half dev", { shape: "square" }, "and pretty curious", { shape: "triangle" }],
      body: [
        "I'm Marina, but everyone calls me Maru. I studied Graphic Design at UBA, then fell in love with code, and I've been doing both ever since.",
        "I work as a Sr Frontend Engineer, so your site will be built with the same tools and the same care I use on big products.",
      ],
      facts: [
        { k: "Based in", v: "Buenos Aires, AR" },
        { k: "Studied", v: "Graphic Design, UBA" },
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
