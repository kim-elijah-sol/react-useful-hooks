import { useEffect, useState } from 'react'

export function usePrevious<T>(value: T): T | null
export function usePrevious<T>(value: T) {
  const [currentValue, setCurrentValue] = useState<T>(value)
  const [previousValue, setPreviousValue] = useState<T | null>(null)

  useEffect(() => {
    if (currentValue !== value) {
      setPreviousValue(currentValue)
      setCurrentValue(value)
    }
  }, [value])

  return previousValue
}
