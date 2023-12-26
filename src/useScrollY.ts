import { useState } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'
import { useThrottleFn } from './useThrottleFn'

export interface ScrollYOptions {
  throttle?: number
}

export function useScrollY(options?: ScrollYOptions): number
export function useScrollY(options?: ScrollYOptions) {
  const [scrollY, setScrollY] = useState(0)

  const throttleFn = useThrottleFn(options?.throttle ?? 0)

  useIsomorphicLayoutEffect(() => {
    function handleScroll() {
      throttleFn.run(() => {
        setScrollY(window.scrollY)
      })
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollY
}
