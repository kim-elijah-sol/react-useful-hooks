import { useRef } from 'react'

export interface ThrottleFn {
  run: (fn: () => void) => void
  cancel: () => void
}

export function useThrottleFn(interval?: number): ThrottleFn
export function useThrottleFn(interval: number = 300) {
  const timer = useRef<number>()
  const lastExecutedTime = useRef<number>(Date.now())

  const run = (fn: () => void) => {
    const now = Date.now()

    if (
      lastExecutedTime.current &&
      now >= lastExecutedTime.current + interval
    ) {
      lastExecutedTime.current = now
      fn()
    } else {
      if (timer.current) {
        clearTimeout(timer.current)
      }

      timer.current = window.setTimeout(() => {
        lastExecutedTime.current = now
        fn()
      }, interval)
    }
  }

  const cancel = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  return {
    run,
    cancel,
  }
}
