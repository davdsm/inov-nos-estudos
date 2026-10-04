import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'
import { usePageMotion } from './PageEntrance'

export function Reveal({
  children,
  className = '',
  style,
  stagger = 0.3,
  delay = 0,
  as: Tag = 'div',
  once = true,
  threshold = 0.2,
  /** 'up' | 'down' | 'none' — direção do fade-in */
  from = 'up',
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const { armed } = usePageMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !armed || visible) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setVisible(true)
          if (once) io.disconnect()
        }
      },
      { threshold: [0, threshold, 0.25, 0.5, 0.75, 1], rootMargin: '0px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [armed, once, threshold, visible])

  const fromClass =
    from === 'down' ? ' reveal-item--down' : from === 'none' ? ' reveal-item--fade' : ''

  const items = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child
    const prevClass = child.props.className ? `${child.props.className} ` : ''
    return cloneElement(child, {
      className: `${prevClass}reveal-item${fromClass}`,
      style: {
        ...child.props.style,
        '--reveal-delay': `${delay + i * stagger}s`,
      },
    })
  })

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={style}
      {...rest}
    >
      {items}
    </Tag>
  )
}
