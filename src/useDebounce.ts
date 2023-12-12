import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay?: number): T
export function useDebounce<T>(value: T, delay: number = 300) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return debouncedValue
}
