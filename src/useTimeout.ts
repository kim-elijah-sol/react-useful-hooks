import { useEffect, useRef } from 'react'
import { useIsMounted } from 'useIsMounted'

export function useTimeout(fn: () => void, delay?: number): void
export function useTimeout(fn: () => void, delay = 300) {
  const savedFn = useRef<() => void>(fn)

  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted) {
      savedFn.current = fn
    }
  }, [isMounted, fn])

  useEffect(() => {
    const timer = setTimeout(() => {
      savedFn.current()
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])
}
