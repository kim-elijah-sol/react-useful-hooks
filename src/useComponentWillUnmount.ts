import { useIsMounted } from 'useIsMounted'
import { useIsomorphicLayoutEffect } from 'useIsomorphicLayoutEffect'

export function useComponentWillUnmount(cleanup: () => void): void
export function useComponentWillUnmount(cleanup: () => void) {
  const isMounted = useIsMounted()

  useIsomorphicLayoutEffect(() => {
    if (isMounted) {
      return () => {
        cleanup()
      }
    }
  }, [isMounted])
}
