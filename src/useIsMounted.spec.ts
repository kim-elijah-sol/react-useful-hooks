import { renderHook } from '@testing-library/react-hooks/dom'
import { useIsMounted } from './useIsMounted'

describe('useIsMounted', () => {
  it('should be defined', () => {
    expect(useIsMounted).toBeDefined()
  })

  it('should return true as default', () => {
    const { result } = renderHook(() => useIsMounted())

    expect(result.current).toBe(true)
  })
})
