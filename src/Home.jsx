import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './components/Button'
import { Input } from './components/Input'
import { PersonaCard } from './components/PersonaCard'
import { PageEntrance } from './components/PageEntrance'
import { Reveal } from './components/Reveal'
import { RingFrame } from './components/RingFrame'
import { Select } from './components/Select'
import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { SeoHead } from './seo/SeoHead'
import { homeJsonLd } from './seo/site'

const DISCIPLINAS = [
  { nome: 'Português', cor: 'var(--teal-600)' },
  { nome: 'Inglês', cor: 'var(--pink-500)' },
  { nome: 'Matemática', cor: 'var(--navy-700)' },
  { nome: 'Físico-Química', cor: 'var(--amber-500)' },
  { nome: 'Biologia', cor: 'var(--teal-400)' },
]

const APOIOS = [
  { t: 'Apoio ao estudo diário', d: 'Todos os dias depois da escola, com uma professora ao lado.' },
  { t: 'Ajuda nos trabalhos de casa', d: 'Os trabalhos ficam feitos e percebidos antes de ir para casa.' },
  { t: 'Testes e exames nacionais', d: 'Preparação com tempo, matéria a matéria, até ao dia do teste.' },
]

const SERVICOS = [
  'Apoio ao estudo diário',
  'Ajuda nos trabalhos de casa',
  'Preparação para testes e exames nacionais',
]

const ANOS = ['1.º', '2.º', '3.º', '4.º', '5.º', '6.º', '7.º', '8.º', '9.º', '10.º', '11.º', '12.º'].map(
  (a) => `${a} ano`,
)

const OPCOES_DISCIPLINA = [
  'Português',
  'Inglês',
  'Matemática',
  'Físico-Química',
  'Biologia',
  'Apoio ao estudo',
  'Ainda não sei',
]

const outlineOnDark = {
  color: 'var(--white)',
  borderColor: 'var(--teal-400)',
  boxSizing: 'border-box',
  maxWidth: '100%',
}

const fullBtn = {
  boxSizing: 'border-box',
  maxWidth: '100%',
}

export default function Home({
  heroLayout = 'A',
  festaBanner = true,
  showCampanha = true,
}) {
  const [w, setW] = useState(() => (typeof window !== 'undefined' ? window.innerWidth : 390))
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [ano, setAno] = useState('')
  const [disciplina, setDisciplina] = useState('')
  const [aceitouTermos, setAceitouTermos] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erroTel, setErroTel] = useState('')
  const [erroTermos, setErroTermos] = useState('')

  useEffect(() => {
    const onR = () => setW(window.innerWidth)
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, [])

  const narrow = w < 520
  const portrait = narrow ? 140 : 190
  const ring = narrow ? 7 : 9
  const heroA = heroLayout === 'A'
  const heroB = heroLayout === 'B'
  const heroC = heroLayout === 'C'

  function enviar(e) {
    e.preventDefault()
    if (!aceitouTermos) {
      setErroTermos('Para continuar, aceita os Termos e Condições e a Política de Privacidade.')
      return
    }
    if (telefone.replace(/\D/g, '').length < 9) {
      setErroTel('Confirma o número: são 9 algarismos.')
      return
    }
    setEnviado(true)
  }

  function reset() {
    setEnviado(false)
    setNome('')
    setTelefone('')
    setAno('')
    setDisciplina('')
    setAceitouTermos(false)
    setErroTel('')
    setErroTermos('')
  }

  return (
    <PageEntrance armDelay={1200}>
    <div style={{ minHeight: '100vh', background: 'var(--sand-50)' }}>
      <SeoHead
        title="Inova nos Estudos - Apoio ao estudo em Gemunde"
        path="/"
        jsonLd={homeJsonLd()}
      />
      <div className="page-entrance__header">
        <SiteHeader showNav />
      </div>

      <div className="page-entrance__body">
      {festaBanner && (
        <Reveal as="div" stagger={0.3} style={{ background: 'var(--amber-200)' }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: '12px var(--gutter-page)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px 12px',
              fontSize: 15,
              textAlign: 'center',
            }}
          >
            <span>
              <strong>A festa de inauguração foi no domingo, 27 de setembro.</strong> Obrigado a quem
              apareceu.
            </span>
            <a
              href="https://www.instagram.com/inovanosestudos"
              target="_blank"
              rel="noreferrer"
              style={{ fontWeight: 700, color: 'var(--navy-800)' }}
            >
              Ver fotos no Instagram →
            </a>
          </div>
        </Reveal>
      )}

      <main id="topo">
        {heroA && (
          <section
            data-screen-label="Hero A"
            style={{ position: 'relative', overflow: 'hidden', background: 'var(--sand-100)' }}
          >
            <div
              style={{
                position: 'absolute',
                width: 420,
                height: 420,
                borderRadius: '50%',
                background: 'var(--teal-100)',
                right: -160,
                top: -140,
              }}
            />
            <div
              style={{
                position: 'absolute',
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'var(--amber-200)',
                left: -80,
                bottom: -110,
              }}
            />
            <div
              style={{
                position: 'relative',
                maxWidth: 1200,
                margin: '0 auto',
                padding: 'clamp(40px,7vw,104px) var(--gutter-page)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))',
                gap: 40,
                alignItems: 'center',
              }}
            >
              <Reveal
                stagger={0.3}
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                  Gemunde · Maia · do 1.º ao 12.º ano
                </span>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(36px,6vw,56px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.015em',
                  }}
                >
                  O teu filho estuda com as mesmas duas professoras, todos os dias.
                </h1>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, maxWidth: 520 }}>
                  Apoio ao estudo, trabalhos de casa e preparação para testes e exames nacionais.
                  Liga-nos e combinamos uma aula experimental.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  <Button variant="primary" size="lg" as="a" href="tel:+351914874972">
                    Ligar agora
                  </Button>
                  <Button variant="outline" size="lg" as="a" href="#marcar">
                    Marcar aula experimental
                  </Button>
                </div>
              </Reveal>
              <Reveal
                stagger={0.3}
                delay={1.2}
                style={{ display: 'flex', justifyContent: 'center', gap: 16 }}
              >
                <div className="float-soft">
                  <RingFrame size={portrait} thickness={ring}>
                    <img
                      src="/assets/sofia.png"
                      alt="Prof.ª Sofia"
                      style={{
                        width: '116%',
                        height: '116%',
                        objectFit: 'cover',
                        objectPosition: '50% 8%',
                      }}
                    />
                  </RingFrame>
                </div>
                <div className="float-soft float-soft--alt" style={{ marginTop: 40 }}>
                  <RingFrame size={portrait} thickness={ring}>
                    <img
                      src="/assets/beatriz.png"
                      alt="Prof.ª Beatriz"
                      style={{
                        width: '118%',
                        height: '118%',
                        objectFit: 'cover',
                        objectPosition: '50% 6%',
                      }}
                    />
                  </RingFrame>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {heroB && (
          <section
            data-screen-label="Hero B"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--navy-800)',
              color: 'var(--white)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: 360,
                height: 360,
                borderRadius: '50%',
                background: 'var(--navy-700)',
                right: -120,
                bottom: -160,
              }}
            />
            <Reveal
              stagger={0.3}
              style={{
                position: 'relative',
                maxWidth: 880,
                margin: '0 auto',
                padding: 'clamp(48px,8vw,112px) var(--gutter-page)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 24,
              }}
            >
              <img
                src="/assets/inova-mark.png"
                alt=""
                style={{ width: 'clamp(96px,16vw,140px)', height: 'auto', display: 'block' }}
              />
              <h1
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(36px,6.4vw,60px)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.015em',
                  color: 'var(--white)',
                }}
              >
                Liga-nos. Combinamos uma aula experimental.
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: 'var(--navy-100)',
                  maxWidth: 560,
                }}
              >
                Do 1.º ao 12.º ano, em Gemunde. Português, Inglês, Matemática, Físico-Química e
                Biologia.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  width: '100%',
                  maxWidth: 360,
                }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  full
                  as="a"
                  href="tel:+351914874972"
                  style={fullBtn}
                >
                  Ligar 914 874 972
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  full
                  as="a"
                  href="tel:+351914829000"
                  style={outlineOnDark}
                >
                  Ligar 914 829 000
                </Button>
                <a href="#marcar" style={{ color: 'var(--white)', fontWeight: 700, fontSize: 15 }}>
                  Prefiro deixar o contacto →
                </a>
              </div>
            </Reveal>
          </section>
        )}

        {heroC && (
          <section data-screen-label="Hero C" style={{ background: 'var(--teal-100)' }}>
            <div
              style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: 'clamp(40px,7vw,96px) var(--gutter-page)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
                gap: 32,
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                  Centro de estudo em Gemunde
                </span>
                <h1
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(36px,6vw,56px)',
                    lineHeight: 1.05,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Do 1.º ao 12.º ano, perto de casa.
                </h1>
                <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, maxWidth: 500 }}>
                  O teu filho estuda todos os dias com a Prof.ª Sofia e a Prof.ª Beatriz.
                </p>
              </div>
              <div
                style={{
                  background: 'var(--white)',
                  border: '1px solid var(--grey-200)',
                  borderRadius: 24,
                  boxShadow: 'var(--shadow-card)',
                  padding: 'clamp(22px,4vw,32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {SERVICOS.map((s) => (
                    <div
                      key={s}
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'baseline',
                        fontSize: 17,
                        fontWeight: 700,
                      }}
                    >
                      <span style={{ color: 'var(--teal-600)' }}>→</span>
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <div style={{ height: 1, background: 'var(--grey-200)' }} />
                <Button
                  variant="primary"
                  size="lg"
                  full
                  as="a"
                  href="tel:+351914829000"
                  style={fullBtn}
                >
                  Ligar agora
                </Button>
                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    textAlign: 'center',
                    color: 'var(--text-muted)',
                  }}
                >
                  914 829 000 · também por WhatsApp
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="disciplinas" data-screen-label="Disciplinas" style={{ scrollMarginTop: 70 }}>
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: 'clamp(56px,7vw,112px) var(--gutter-page)',
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            <Reveal stagger={0.3} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
              <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                Disciplinas e níveis
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(30px,4.6vw,44px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.015em',
                }}
              >
                Do 1.º ao 12.º ano.
              </h2>
            </Reveal>
            <Reveal stagger={0.3} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {DISCIPLINAS.map((d) => (
                <span
                  key={d.nome}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '10px 18px',
                    borderRadius: 999,
                    border: `2px solid ${d.cor}`,
                    background: 'var(--white)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 18,
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      background: d.cor,
                    }}
                  />
                  {d.nome}
                </span>
              ))}
            </Reveal>
            <Reveal
              stagger={0.3}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,260px),1fr))',
                gap: 20,
              }}
            >
              {APOIOS.map((a) => (
                <div
                  key={a.t}
                  style={{
                    background: 'var(--white)',
                    border: '1px solid var(--grey-200)',
                    borderRadius: 24,
                    boxShadow: 'var(--shadow-card)',
                    padding: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 22,
                      lineHeight: 1.15,
                    }}
                  >
                    {a.t}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.55,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {a.d}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section
          id="professoras"
          data-screen-label="Professoras"
          style={{ background: 'var(--sand-100)', scrollMarginTop: 70 }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: 'clamp(56px,7vw,112px) var(--gutter-page)',
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            <Reveal stagger={0.3} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 680 }}>
              <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                Quem acompanha
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(30px,4.6vw,44px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.015em',
                }}
              >
                As mesmas caras, todos os dias.
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                A Prof.ª Sofia e a Prof.ª Beatriz conhecem o nome, o feitio e o caderno de cada aluno.
              </p>
            </Reveal>
            <Reveal
              stagger={0.3}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
                gap: 20,
              }}
            >
              <div className="float-soft">
                <PersonaCard
                  name="Prof.ª Sofia"
                  role="Área das ciências"
                  photo="/assets/sofia.png"
                  subjects={['Matemática', 'Físico-Química', 'Biologia']}
                />
              </div>
              <div className="float-soft float-soft--alt">
                <PersonaCard
                  name="Prof.ª Beatriz"
                  role="Área das humanidades"
                  photo="/assets/beatriz.png"
                  tone="teal"
                  subjects={['Português', 'Inglês']}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {showCampanha && (
          <section data-screen-label="Como estudar">
            <Reveal
              stagger={0.3}
              style={{
                maxWidth: 1200,
                margin: '0 auto',
                padding: 'clamp(56px,7vw,112px) var(--gutter-page)',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,400px),1fr))',
                gap: 32,
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                  Como estudar
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(30px,4.6vw,44px)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.015em',
                  }}
                >
                  3 horas na véspera ou 20 minutos por dia?
                </h2>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, maxWidth: 480 }}>
                  Um bocadinho todos os dias chega ao teste descansado. E dorme na noite anterior.
                </p>
              </div>
              <img
                src="/assets/lua-comparacao-v2.png"
                alt="Lua cansada com caneca de café; 3 horas na véspera ao lado de 9 blocos de 20 minutos. É a mesma matéria."
                style={{
                  width: '100%',
                  maxWidth: 560,
                  height: 'auto',
                  display: 'block',
                  justifySelf: 'center',
                }}
              />
            </Reveal>
          </section>
        )}

        <section
          id="marcar"
          data-screen-label="Marcar aula"
          style={{ background: 'var(--navy-800)', scrollMarginTop: 70 }}
        >
          <Reveal
            stagger={0.3}
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: 'clamp(56px,7vw,112px) var(--gutter-page)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,380px),1fr))',
              gap: 32,
              alignItems: 'start',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <span className="u-eyebrow" style={{ color: 'var(--teal-400)' }}>
                Aula experimental
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: 'clamp(30px,4.6vw,44px)',
                  lineHeight: 1.08,
                  letterSpacing: '-0.015em',
                  color: 'var(--white)',
                }}
              >
                Vem experimentar uma tarde.
              </h2>
              <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: 'var(--navy-100)' }}>
                Deixa o teu contacto e ligamos-te para combinar o dia. Se preferires, liga já.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <Button variant="sunny" size="md" as="a" href="tel:+351914829000">
                  Ligar 914 829 000
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  as="a"
                  href="https://wa.me/351914874972"
                  style={outlineOnDark}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
            <div
              style={{
                background: 'var(--white)',
                borderRadius: 24,
                boxShadow: 'var(--shadow-lg)',
                padding: 'clamp(22px,4vw,32px)',
              }}
            >
              {enviado ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 0' }}>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: 'var(--font-display)',
                      fontWeight: 800,
                      fontSize: 26,
                    }}
                  >
                    Recebemos o teu pedido.
                  </h3>
                  <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6 }}>
                    Vamos ligar-te para {telefone} e combinar o dia.
                  </p>
                  <a
                    href="#marcar"
                    onClick={(e) => {
                      e.preventDefault()
                      reset()
                    }}
                    style={{ fontWeight: 700, fontSize: 15 }}
                  >
                    Enviar outro pedido
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={enviar}
                  style={{ display: 'flex', flexDirection: 'column', gap: 16, margin: 0 }}
                >
                  <Input
                    label="O teu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                  <Input
                    label="Telefone"
                    type="tel"
                    placeholder="9xx xxx xxx"
                    value={telefone}
                    onChange={(e) => {
                      setTelefone(e.target.value)
                      setErroTel('')
                    }}
                    required
                    error={erroTel || undefined}
                  />
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,180px),1fr))',
                      gap: 16,
                    }}
                  >
                    <Select
                      label="Ano do teu filho"
                      options={ANOS}
                      placeholder="Escolhe"
                      value={ano}
                      onChange={(e) => setAno(e.target.value)}
                    />
                    <Select
                      label="Disciplina"
                      options={OPCOES_DISCIPLINA}
                      placeholder="Escolhe"
                      value={disciplina}
                      onChange={(e) => setDisciplina(e.target.value)}
                    />
                  </div>
                  <label className="terms-check">
                    <input
                      type="checkbox"
                      checked={aceitouTermos}
                      onChange={(e) => {
                        setAceitouTermos(e.target.checked)
                        setErroTermos('')
                      }}
                      required
                    />
                    <span>
                      Li e aceito os{' '}
                      <Link to="/termos" target="_blank" rel="noreferrer">
                        Termos e Condições
                      </Link>{' '}
                      e a{' '}
                      <Link to="/privacidade" target="_blank" rel="noreferrer">
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>
                  {erroTermos && <span className="terms-error">{erroTermos}</span>}
                  <button type="submit" className="submit-btn">
                    Pedir aula experimental
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </section>

        <section id="contactos" data-screen-label="Contactos" style={{ scrollMarginTop: 70 }}>
          <Reveal
            stagger={0.3}
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              padding: 'clamp(56px,7vw,112px) var(--gutter-page)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
              gap: 32,
              alignItems: 'stretch',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <span className="u-eyebrow" style={{ color: 'var(--teal-700)' }}>
                  Contactos
                </span>
                <h2
                  style={{
                    margin: 0,
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(30px,4.6vw,44px)',
                    lineHeight: 1.08,
                    letterSpacing: '-0.015em',
                  }}
                >
                  Estamos em Gemunde.
                </h2>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  fontSize: 17,
                  lineHeight: 1.5,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span className="u-eyebrow" style={{ color: 'var(--text-muted)' }}>
                    Morada
                  </span>
                  <span>Via Engenheiro Belmiro Mendes de Azevedo 311, Gemunde</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span className="u-eyebrow" style={{ color: 'var(--text-muted)' }}>
                    Telefone e WhatsApp
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontWeight: 700 }}>
                    <a href="tel:+351914829000">914 829 000</a>
                    <a href="tel:+351914874972">914 874 972</a>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span className="u-eyebrow" style={{ color: 'var(--text-muted)' }}>
                    Instagram
                  </span>
                  <a
                    href="https://www.instagram.com/inovanosestudos"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: 700 }}
                  >
                    @inovanosestudos
                  </a>
                </div>
              </div>
            </div>
            <div
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid var(--grey-200)',
                boxShadow: 'var(--shadow-card)',
                minHeight: 300,
                background: 'var(--grey-100)',
              }}
            >
              <iframe
                title="Mapa"
                src="https://www.google.com/maps?q=Via%20Engenheiro%20Belmiro%20Mendes%20de%20Azevedo%20311%2C%20Gemunde&output=embed"
                style={{ border: 0, width: '100%', height: '100%', minHeight: 300, display: 'block' }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
      </div>
    </div>
    </PageEntrance>
  )
}
