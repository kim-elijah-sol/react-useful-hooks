import { useEffect, useState } from 'react'
import { useIsMounted } from 'useIsMounted'

export interface WindowSize {
  width: number
  height: number
}

export function useWindowSize(): WindowSize
export function useWindowSize() {
  const isMounted = useIsMounted()

  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    if (isMounted) {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isMounted])

  return windowSize
}
