import { useEffect, useRef } from 'react'
import { useIsMounted } from 'useIsMounted'

export interface Interval {
  cancel: () => void
}

export function useInterval(fn: () => void, interval?: number): Interval
export function useInterval(fn: () => void, interval = 300) {
  const savedFn = useRef<() => void>(fn)

  const timer = useRef<number>()

  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted) {
      savedFn.current = fn
    }
  }, [isMounted, fn])

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
