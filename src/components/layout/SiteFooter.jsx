import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer style={{ background: 'var(--navy-800)', color: 'var(--white)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '40px var(--gutter-page)',
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <img
              src="/assets/inova-mark.png"
              alt="Inov@ nos Estudos"
              style={{ width: 56, height: 56, display: 'block' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20 }}>
                Inov@ nos Estudos
              </span>
              <span className="u-script" style={{ fontSize: 22, color: 'var(--amber-400)' }}>
                Mais que explicações, construímos confiança!
              </span>
            </div>
          </div>
          <span style={{ fontSize: 14, color: 'var(--navy-100)' }}>
            Via Engenheiro Belmiro Mendes de Azevedo 311, Gemunde
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px 20px',
            paddingTop: 16,
            borderTop: '1px solid rgba(255,255,255,.12)',
            fontSize: 14,
          }}
        >
          <Link to="/termos" style={{ color: 'var(--navy-100)', fontWeight: 600 }}>
            Termos e Condições
          </Link>
          <Link to="/privacidade" style={{ color: 'var(--navy-100)', fontWeight: 600 }}>
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
