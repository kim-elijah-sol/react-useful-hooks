import { act, renderHook } from '@testing-library/react-hooks/dom'

import { useBoolean } from './useBoolean'

describe('useBoolean', () => {
  it('should be defined', () => {
    expect(useBoolean).toBeDefined()
  })

  it('should return false as default', () => {
    const { result } = renderHook(() => useBoolean())

    const [bool] = result.current

    expect(bool).toBe(false)
  })

  it('should return true as default', () => {
    const { result } = renderHook(() => useBoolean(true))

    const [bool] = result.current

    expect(bool).toBe(true)
  })

  it('should return true when toggle', () => {
    const { result } = renderHook(() => useBoolean())

    const [, toggle] = result.current

    act(toggle)

    expect(result.current[0]).toBe(true)
  })

  it('should return false when toggle twice', () => {
    const { result } = renderHook(() => useBoolean())

    const [, toggle] = result.current

    act(toggle)
    act(toggle)

    expect(result.current[0]).toBe(false)
  })

  it('should return true when setTrue', () => {
    const { result } = renderHook(() => useBoolean())

    const [, , setTrue] = result.current

    act(setTrue)

    expect(result.current[0]).toBe(true)
  })

  it('should return false when setFalse', () => {
    const { result } = renderHook(() => useBoolean(true))

    const [, , , setFalse] = result.current

    act(setFalse)

    expect(result.current[0]).toBe(false)
  })
})
