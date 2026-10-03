import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function LegalPage({ title, eyebrow, updated, children }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--sand-50)' }}>
      <SiteHeader />
      <main>
        <article
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: 'clamp(40px,7vw,80px) var(--gutter-page)',
          }}
        >
          <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
            {eyebrow}
          </span>
          <h1
            style={{
              margin: '12px 0 8px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(32px,5vw,48px)',
              lineHeight: 1.08,
              letterSpacing: '-0.015em',
            }}
          >
            {title}
          </h1>
          <p style={{ margin: '0 0 40px', fontSize: 15, color: 'var(--text-muted)' }}>
            Última atualização: {updated}
          </p>
          <div className="legal-prose">{children}</div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
