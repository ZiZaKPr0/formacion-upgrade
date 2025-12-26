import React from 'react';

export const SEO: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Formación Upgrade",
    "description": "Academia online líder en formación tecnológica. Cursos profesionales, certificaciones oficiales y mentoría personalizada.",
    "url": "https://formacionupgrade.com",
    "logo": "https://formacionupgrade.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@formacionupgrade.com"
    },
    "sameAs": [
      // Añade aquí tus redes sociales cuando las tengas
      // "https://www.facebook.com/formacionupgrade",
      // "https://www.twitter.com/formacionupgrade",
      // "https://www.linkedin.com/company/formacionupgrade"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Formación Upgrade",
    "url": "https://formacionupgrade.com",
    "description": "Academia online líder en formación tecnológica",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://formacionupgrade.com?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

