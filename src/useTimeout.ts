import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export function useTimeout(fn: () => void, delay?: number): void
export function useTimeout(fn: () => void, delay = 300) {
  const savedFn = useRef<() => void>(fn)

  useIsomorphicLayoutEffect(() => {
    savedFn.current = fn
  }, [fn])

  useEffect(() => {
    const timer = setTimeout(() => {
      savedFn.current()
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [delay])
}
