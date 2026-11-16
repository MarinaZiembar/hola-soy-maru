import { dict, EMAIL, INSTAGRAM_URL, LINKEDIN_URL } from "@/lib/content";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * Datos estructurados (schema.org) para buscadores y motores de IA:
 * sitio, servicio profesional, persona, catálogo de servicios, proyectos y preguntas frecuentes.
 */
export default function StructuredData() {
  const es = dict.es;
  const personId = `${SITE_URL}/#maru`;
  const businessId = `${SITE_URL}/#servicio`;

  const graph = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: ["es-AR", "en"],
      publisher: { "@id": businessId },
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Marina Ziembar",
      alternateName: "Maru",
      jobTitle: "Desarrolladora web front-end freelance",
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      sameAs: [LINKEDIN_URL, INSTAGRAM_URL],
      knowsAbout: ["Desarrollo web", "Desarrollo front-end", "React", "Next.js", "TypeScript", "E-commerce", "Diseño web", "SEO"],
      knowsLanguage: ["es", "en"],
      address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
    },
    {
      "@type": "ProfessionalService",
      "@id": businessId,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}${OG_IMAGE}`,
      logo: `${SITE_URL}/icon.svg`,
      email: EMAIL,
      founder: { "@id": personId },
      areaServed: [
        { "@type": "Country", name: "Argentina" },
        { "@type": "Place", name: "Remoto / todo el mundo" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "Buenos Aires", addressCountry: "AR" },
      sameAs: [INSTAGRAM_URL, LINKEDIN_URL],
      knowsLanguage: ["es", "en"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de desarrollo web",
        itemListElement: es.services.items.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: `${s.desc} Ideal para: ${s.ideal} Incluye: ${s.items.join(", ")}.`,
            provider: { "@id": businessId },
          },
        })),
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#proyectos`,
      name: "Proyectos realizados",
      itemListElement: es.work.items
        .filter((p) => p.url)
        .map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "CreativeWork", name: p.title, description: p.desc, url: p.url, creator: { "@id": personId } },
        })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: es.faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
