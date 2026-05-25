/**
 * Structured Data (JSON-LD) generators for AEO (Answer Engine Optimization)
 * These schemas make B3D Designs machine-readable for AI engines like
 * Google AI Overviews, ChatGPT, Perplexity, and voice assistants.
 */

const BASE_URL = 'https://b3ddesigns.ie';

// ─── Organization Schema ────────────────────────────────────────
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'B3D Designs',
    legalName: 'B3D Design',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE_URL}/logo.png`,
    description:
      'Premium 3D architectural visualization studio based in Dublin, Ireland. Specializing in photorealistic exterior and interior renders, planning permission visuals, and virtual reality walkthroughs.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Scotstown',
      addressLocality: 'Scotstown',
      addressRegion: 'Co Monaghan',
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 54.2646,
      longitude: -7.0691,
    },
    email: 'b3ddesigns@outlook.ie',
    sameAs: [
      'https://www.instagram.com/b3ddesign/',
      'https://www.linkedin.com/in/fintan-blacklock-3d-designer/',
    ],
    foundingLocation: {
      '@type': 'Place',
      name: 'Dublin, Ireland',
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'AdministrativeArea', name: 'Northern Ireland' },
    ],
    knowsAbout: [
      '3D Architectural Visualization',
      'Interior Design Rendering',
      'Virtual Reality Walkthroughs',
      'Planning Permission Visuals',
      '3D Exterior Rendering',
      'CAD Drawings',
      'BIM Visualization',
    ],
  };
}

// ─── LocalBusiness Schema ───────────────────────────────────────
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}/#business`,
    name: 'B3D Designs',
    url: BASE_URL,
    image: `${BASE_URL}/logo.png`,
    description:
      'Dublin-based 3D architectural visualization studio providing photorealistic renders, VR walkthroughs, and planning permission visuals for architects, developers, and designers across Ireland, UK, and worldwide.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Scotstown',
      addressLocality: 'Scotstown',
      addressRegion: 'Co Monaghan',
      addressCountry: 'IE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 54.2646,
      longitude: -7.0691,
    },
    email: 'b3ddesigns@outlook.ie',
    priceRange: '€€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:30',
      },
    ],
    sameAs: [
      'https://www.instagram.com/b3ddesign/',
      'https://www.linkedin.com/in/fintan-blacklock-3d-designer/',
    ],
  };
}

// ─── WebSite Schema ─────────────────────────────────────────────
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'B3D Designs',
    description:
      'Premium 3D architectural visualization, VR walkthroughs & interior design rendering. Serving Ireland, UK, Northern Ireland & clients worldwide.',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: 'en',
  };
}

// ─── BreadcrumbList Schema ──────────────────────────────────────
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ─── Service Schema ─────────────────────────────────────────────
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.url}/#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@id': `${BASE_URL}/#organization`,
    },
    areaServed: [
      { '@type': 'Country', name: 'Ireland' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    ...(service.image ? { image: service.image } : {}),
  };
}

// ─── FAQPage Schema ─────────────────────────────────────────────
export function getFAQSchema(questions: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

// ─── WebPage Schema ─────────────────────────────────────────────
export function getWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${page.url}/#webpage`,
    url: page.url,
    name: page.name,
    description: page.description,
    isPartOf: {
      '@id': `${BASE_URL}/#website`,
    },
    about: {
      '@id': `${BASE_URL}/#organization`,
    },
    inLanguage: 'en',
  };
}
