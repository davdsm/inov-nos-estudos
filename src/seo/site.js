export const SITE = {
  name: 'Inov@ nos Estudos',
  shortName: 'Inov@ nos Estudos',
  defaultTitle: 'Inova nos Estudos - Apoio ao estudo em Gemunde',
  tagline: 'Mais que explicações, construímos confiança!',
  description:
    'Centro de estudo em Gemunde (Maia). Apoio ao estudo, trabalhos de casa e preparação para testes e exames nacionais, do 1.º ao 12.º ano, com as mesmas duas professoras todos os dias.',
  locale: 'pt_PT',
  language: 'pt-PT',
  url: (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, ''),
  ogImagePath: '/og-image.jpg',
  twitterHandle: '@inovanosestudos',
  address: {
    street: 'Via Engenheiro Belmiro Mendes de Azevedo 311',
    locality: 'Gemunde',
    region: 'Maia',
    postalCode: '',
    country: 'PT',
  },
  phones: ['+351914829000', '+351914874972'],
  phoneDisplay: ['914 829 000', '914 874 972'],
  email: '',
  instagram: 'https://www.instagram.com/inovanosestudos',
  geo: {
    // Approximate — Gemunde, Maia
    latitude: 41.2485,
    longitude: -8.6175,
  },
  sameAs: ['https://www.instagram.com/inovanosestudos'],
}

export function absoluteUrl(path = '/') {
  const base = SITE.url
  if (!base) return path
  if (path.startsWith('http')) return path
  return `${base}${path.startsWith('/') ? path : `/${path}`}`
}

export function homeJsonLd() {
  const pageUrl = absoluteUrl('/')
  const image = absoluteUrl(SITE.ogImagePath)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${pageUrl}#organization`,
        name: SITE.name,
        alternateName: 'Inova nos Estudos',
        description: SITE.description,
        url: pageUrl || undefined,
        image,
        logo: absoluteUrl('/assets/inova-mark.png'),
        telephone: SITE.phones,
        sameAs: SITE.sameAs,
        slogan: SITE.tagline,
        address: {
          '@type': 'PostalAddress',
          streetAddress: SITE.address.street,
          addressLocality: SITE.address.locality,
          addressRegion: SITE.address.region,
          addressCountry: SITE.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: SITE.geo.latitude,
          longitude: SITE.geo.longitude,
        },
        areaServed: [
          { '@type': 'Place', name: 'Gemunde' },
          { '@type': 'Place', name: 'Maia' },
          { '@type': 'AdministrativeArea', name: 'Área Metropolitana do Porto' },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Serviços de apoio ao estudo',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Apoio ao estudo diário' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ajuda nos trabalhos de casa' } },
            {
              '@type': 'Offer',
              itemOffered: { '@type': 'Service', name: 'Preparação para testes e exames nacionais' },
            },
            { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Aula experimental' } },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${pageUrl}#website`,
        url: pageUrl || undefined,
        name: SITE.name,
        description: SITE.description,
        inLanguage: SITE.language,
        publisher: { '@id': `${pageUrl}#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl || undefined,
        name: SITE.defaultTitle,
        description: SITE.description,
        isPartOf: { '@id': `${pageUrl}#website` },
        about: { '@id': `${pageUrl}#organization` },
        primaryImageOfPage: { '@type': 'ImageObject', url: image },
        inLanguage: SITE.language,
      },
    ],
  }
}
