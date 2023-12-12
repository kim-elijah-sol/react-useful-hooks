import { useRef } from 'react'

export interface DebounceFn {
  run: (fn: () => void) => void
  cancel: () => void
}

export function useDebounceFn(delay?: number): DebounceFn
export function useDebounceFn(delay: number = 300) {
  const timer = useRef<number>()

  const run = (fn: () => void) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = window.setTimeout(() => {
      fn()
    }, delay)
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
