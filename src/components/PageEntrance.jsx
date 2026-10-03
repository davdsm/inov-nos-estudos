import { createContext, useContext, useEffect, useState } from 'react'

const PageMotionContext = createContext({ armed: true })

export function usePageMotion() {
  return useContext(PageMotionContext)
}

export function PageEntrance({ children, armDelay = 1100 }) {
  const [ready, setReady] = useState(false)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReady(true)
      setArmed(true)
      return
    }

    const enter = requestAnimationFrame(() => {
      requestAnimationFrame(() => setReady(true))
    })

    const arm = window.setTimeout(() => setArmed(true), armDelay)

    return () => {
      cancelAnimationFrame(enter)
      window.clearTimeout(arm)
    }
  }, [armDelay])

  return (
    <PageMotionContext.Provider value={{ armed }}>
      <div className={`page-entrance${ready ? ' is-ready' : ''}`}>{children}</div>
    </PageMotionContext.Provider>
  )
}
