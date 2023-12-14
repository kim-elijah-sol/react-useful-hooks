# useDebounceFn

### 🔍 Overview

The useDebounceFn hook is a custom React hook that provides debounced function execution.

This hook is useful for delaying function execution to avoid high-frequency calls in scenarios such as real-time search, window resizing, or scroll events.

It allows you to specify a delay after which the function will be executed, and also provides a method to cancel the execution.

```typescript
function useDebounceFn<T>(delay?: number): {
  run: (fn: () => void) => void
  cancel: () => void
}
```

```typescript
function useDebounceFn(delay = 300): { run; cancel }
```

### 💡 Example

```tsx
import { useState } from 'react'
import { useDebounceFn } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [count, setCount] = useState(0)

  const { run, cancel } = useDebounceFn(500)

  return (
    <>
      <p>{count}</p>

      <button
        onClick={() => {
          run(() => {
            setCount((count) => count + 1)
          })
        }}
      >
        Delayed +1
      </button>

      <button onClick={cancel}>Cancel</button>
    </>
  )
}
```
