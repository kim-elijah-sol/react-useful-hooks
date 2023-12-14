import { useEffect, useState } from 'react'
import { useIsMounted } from 'useIsMounted'
import { useThrottleFn } from 'useThrottleFn'

export interface ScrollYOptions {
  throttle?: number
}

export function useScrollY(options?: ScrollYOptions): number
export function useScrollY(options?: ScrollYOptions) {
  const [scrollY, setScrollY] = useState(0)

  const isMounted = useIsMounted()

  const throttleFn = useThrottleFn(options?.throttle ?? 0)

  useEffect(() => {
    if (isMounted) {
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
    }
  }, [isMounted])

  return scrollY
}
