import { useCallback, useState } from 'react'

export function useBoolean(
  defaultValue?: boolean
): [boolean, () => void, () => void, () => void]
export function useBoolean(defaultValue: boolean = false) {
  const [value, setValue] = useState(defaultValue)

  const toggle = useCallback(() => setValue((value) => !value), [])

  const setTrue = useCallback(() => setValue(true), [])

  const setFalse = useCallback(() => setValue(false), [])

  return [value, toggle, setTrue, setFalse] as const
}
