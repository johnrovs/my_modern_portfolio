import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Generic carousel controller: tracks the active slide, exposes next/prev/goTo,
 * and (optionally) auto-advances on an interval, pausing while hovered/focused
 * or when the tab isn't visible.
 */
export function useCarousel(length, { autoPlay = true, interval = 5000 } = {}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback(
    (next) => {
      setDirection(next > index || (index === length - 1 && next === 0) ? 1 : -1)
      setIndex(((next % length) + length) % length)
    },
    [index, length]
  )

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (!autoPlay || paused || length <= 1) return
    timerRef.current = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % length)
    }, interval)
    return () => clearInterval(timerRef.current)
  }, [autoPlay, paused, interval, length])

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  return { index, direction, next, prev, goTo, pause: () => setPaused(true), resume: () => setPaused(false) }
}
