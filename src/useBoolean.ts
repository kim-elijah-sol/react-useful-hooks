import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export function useBoolean(
  defaultValue: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>]
export function useBoolean(defaultValue: boolean = false) {
  const [value, setValue] = useState(defaultValue)

  const toggle = useCallback(() => setValue((value) => !value), [])

  return [value, toggle, setValue] as const
}
