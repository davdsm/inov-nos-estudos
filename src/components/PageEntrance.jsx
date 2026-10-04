import { createContext, useContext, useEffect, useState } from 'react'

const PageMotionContext = createContext({ armed: true })

export function usePageMotion() {
  return useContext(PageMotionContext)
}

/** Ecrã em branco → depois os Reveals fazem fade-in dos elementos. */
export function PageEntrance({ children, blankMs = 450, armDelay = 500 }) {
  const [ready, setReady] = useState(false)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true)
      setArmed(true)
      return
    }

    const show = window.setTimeout(() => setReady(true), blankMs)
    const arm = window.setTimeout(() => setArmed(true), armDelay)

    return () => {
      window.clearTimeout(show)
      window.clearTimeout(arm)
    }
  }, [blankMs, armDelay])

  return (
    <PageMotionContext.Provider value={{ armed }}>
      <div className={`page-entrance${ready ? ' is-ready' : ''}`}>
        <div className="page-entrance__blank" aria-hidden="true" />
        {children}
      </div>
    </PageMotionContext.Provider>
  )
}
