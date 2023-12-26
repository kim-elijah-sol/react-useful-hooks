import { useEffect, useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

export interface Interval {
  cancel: () => void
}

export function useInterval(fn: () => void, interval?: number): Interval
export function useInterval(fn: () => void, interval = 300) {
  const savedFn = useRef<() => void>(fn)

  const timer = useRef<number>()

  useIsomorphicLayoutEffect(() => {
    savedFn.current = fn
  }, [fn])

  useEffect(() => {
    timer.current = setInterval(() => {
      savedFn.current()
    }, interval)

    return () => {
      clearInterval(timer.current)
    }
  }, [interval])

  const cancel = () => {
    clearInterval(timer.current)
  }

  return {
    cancel,
  }
}
