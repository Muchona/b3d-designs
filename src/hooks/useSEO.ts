import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
}

const SITE_NAME = 'B3D Designs';
const BASE_URL = 'https://b3ddesigns.ie';
const DEFAULT_OG_IMAGE = `${BASE_URL}/logo.png`;

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export default function useSEO(config: SEOConfig) {
  const location = useLocation();

  useEffect(() => {
    // Title
    document.title = config.title.includes(SITE_NAME)
      ? config.title
      : `${config.title} | ${SITE_NAME}`;

    // Basic Meta
    setMetaTag('description', config.description);
    if (config.keywords) {
      setMetaTag('keywords', config.keywords);
    }

    // Canonical
    const canonicalUrl = config.canonical || `${BASE_URL}${location.pathname}`;
    setCanonical(canonicalUrl);

    // Robots
    if (config.noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph
    setMetaTag('og:title', config.ogTitle || config.title, 'property');
    setMetaTag('og:description', config.ogDescription || config.description, 'property');
    setMetaTag('og:image', config.ogImage || DEFAULT_OG_IMAGE, 'property');
    setMetaTag('og:url', canonicalUrl, 'property');
    setMetaTag('og:type', config.ogType || 'website', 'property');
    setMetaTag('og:site_name', SITE_NAME, 'property');
    setMetaTag('og:locale', 'en_IE', 'property');

    // Twitter Card
    setMetaTag('twitter:card', config.twitterCard || 'summary_large_image');
    setMetaTag('twitter:title', config.ogTitle || config.title);
    setMetaTag('twitter:description', config.ogDescription || config.description);
    setMetaTag('twitter:image', config.ogImage || DEFAULT_OG_IMAGE);

    // Geo tags (consistent for all pages)
    setMetaTag('geo.region', 'IE-D');
    setMetaTag('geo.placename', 'Dublin, Ireland');
    setMetaTag('geo.position', '53.2941;-6.1331');
    setMetaTag('ICBM', '53.2941, -6.1331');

  }, [config, location.pathname]);
}
