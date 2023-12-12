import { useEffect, useRef, useState } from 'react'

export function useThrottle<T>(value: T, interval?: number): T
export function useThrottle<T>(value: T, interval: number = 300) {
  const [throttledValue, setThrottledValue] = useState<T>(value)
  const lastExecutedTime = useRef<number>(Date.now())

  useEffect(() => {
    const now = Date.now()

    if (
      lastExecutedTime.current &&
      now >= lastExecutedTime.current + interval
    ) {
      lastExecutedTime.current = now
      setThrottledValue(value)
    } else {
      const timeout = window.setTimeout(() => {
        lastExecutedTime.current = now
        setThrottledValue(value)
      }, interval)

      return () => window.clearTimeout(timeout)
    }
  }, [value, interval])

  return throttledValue
}
