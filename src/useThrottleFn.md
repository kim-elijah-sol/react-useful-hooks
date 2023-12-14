# useThrottleFn

### 🔍 Overview

The useThrottleFn hook is designed for throttling function executions in React applications.

This hook is useful for controlling the rate at which a function is executed, which is particularly beneficial in scenarios like handling rapidly firing events, such as window resizing, scrolling, or input changes.

```typescript
function useThrottleFn<T>(interval?: number): {
  run: (fn: () => void) => void
  cancel: () => void
}
```

```typescript
function useThrottleFn(interval = 300): { run; cancel }
```

### 💡 Example

```tsx
import { useThrottleFn } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [scrollTop, setScrollTop] = useState(0)

  const { run } = useThrottleFn(500)

  useEffect(() => {
    // API call
  }, [scrollTop])

  return (
    <div
      onScroll={(e) => {
        run(() => {
          setScrollTop(e.currentTarget.scrollTop)
        })
      }}
    />
  )
}
```
