# useInterval

### 🔍 Overview

The useInterval hook is a custom React hook that provides a way to execute a function at regular intervals.

This hook is particularly useful for repeating actions such as polling an API, updating UI elements, or creating custom timers.

It also includes a cancel function to stop the interval execution when needed.

```typescript
function useInterval(
  fn: () => void,
  interval?: number
): {
  cancel: () => void
}
```

```typescript
function useInterval(fn, interval = 300): { cancel }
```

### 💡 Example

```tsx
import { useState } from 'react'
import { useInterval } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [count, setCount] = useState(0)

  const { cancel } = useInterval(() => {
    setCount(count + 1)
  }, 1000)

  return (
    <>
      <p>{count}</p>

      <button onClick={cancel}>Cancel</button>
    </>
  )
}
```
