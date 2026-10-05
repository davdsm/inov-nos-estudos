import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Button } from '../Button'

export function SiteHeader({ showNav = false }) {
  const [wide, setWide] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth >= 900 : false,
  )

  useEffect(() => {
    const onR = () => setWide(window.innerWidth >= 900)
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: 'var(--veil-light)',
        backdropFilter: 'var(--blur-veil)',
        WebkitBackdropFilter: 'var(--blur-veil)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '10px var(--gutter-page)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: 'var(--navy-800)',
          }}
        >
          <img
            src="/assets/inova-mark.png"
            alt="Inov@ nos Estudos"
            style={{ width: 44, height: 44, display: 'block' }}
          />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 19,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}
            className="site-brand-text"
          >
            Inov@ nos Estudos
          </span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {showNav && wide && (
            <div style={{ display: 'flex', gap: 20, fontWeight: 700, fontSize: 15 }}>
              <a href="/#disciplinas" style={{ textDecoration: 'none', color: 'var(--navy-800)' }}>
                Disciplinas
              </a>
              <a href="/#professoras" style={{ textDecoration: 'none', color: 'var(--navy-800)' }}>
                Professoras
              </a>
              <a href="/#marcar" style={{ textDecoration: 'none', color: 'var(--navy-800)' }}>
                Aula experimental
              </a>
              <a href="/#contactos" style={{ textDecoration: 'none', color: 'var(--navy-800)' }}>
                Contactos
              </a>
            </div>
          )}
          {!showNav && (
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: 'var(--navy-800)',
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              ← Voltar ao site
            </Link>
          )}
          <Button variant="secondary" size="sm" as="a" href="tel:+351914829000">
            Ligar
          </Button>
        </nav>
      </div>
    </header>
  )
}
