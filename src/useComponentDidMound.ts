import { useIsomorphicLayoutEffect } from 'useIsomorphicLayoutEffect'
import { useIsMounted } from './useIsMounted'

export function useComponentDidMound(callback: () => void): void
export function useComponentDidMound(callback: () => void) {
  const isMounted = useIsMounted()

  useIsomorphicLayoutEffect(() => {
    if (isMounted) {
      callback()
    }
  }, [isMounted])
}
