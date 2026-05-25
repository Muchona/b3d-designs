import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders JSON-LD structured data into the document <head>.
 * Supports single or multiple schema objects.
 * Each schema gets its own <script> tag for clean parsing.
 */
export default function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const schemas = Array.isArray(data) ? data : [data];
    const scriptElements: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptElements.push(script);
    });

    // Cleanup on unmount or data change
    return () => {
      scriptElements.forEach((script) => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, [data]);

  return null;
}
