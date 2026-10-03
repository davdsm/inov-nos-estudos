import { Helmet } from 'react-helmet-async'
import { absoluteUrl, SITE } from './site'

export function SeoHead({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImagePath,
  type = 'website',
  noIndex = false,
  jsonLd,
}) {
  const fullTitle =
    !title || title === SITE.defaultTitle || title.startsWith('Inova nos Estudos')
      ? title || SITE.defaultTitle
      : title.includes(SITE.name)
        ? title
        : `${title} | ${SITE.name}`
  const pageUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'

  return (
    <Helmet>
      <html lang={SITE.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta
        name="keywords"
        content="apoio ao estudo, explicações, Gemunde, Maia, centro de estudo, trabalhos de casa, exames nacionais, Português, Matemática, Inglês, Físico-Química, Biologia, aula experimental"
      />
      <meta name="author" content={SITE.name} />
      <meta name="theme-color" content="#0A2A57" />
      {pageUrl && <link rel="canonical" href={pageUrl} />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      {pageUrl && <meta property="og:url" content={pageUrl} />}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta
        property="og:image:alt"
        content="Inov@ nos Estudos — centro de estudo em Gemunde, Maia. Hero do site com as professoras Sofia e Beatriz."
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta
        name="twitter:image:alt"
        content="Screenshot do início do site Inov@ nos Estudos em Gemunde, Maia"
      />

      <meta name="geo.region" content="PT-13" />
      <meta name="geo.placename" content="Gemunde, Maia" />
      <meta name="ICBM" content={`${SITE.geo.latitude}, ${SITE.geo.longitude}`} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  )
}
