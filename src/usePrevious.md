# usePrevious

### 🔍 Overview

usePrevious is a custom React Hook that tracks and stores the previous state of a given value.

This hook maintains a reference to the previous value whenever the current value updates.

It allows easy access to a component's previous state and is useful for implementing logic based on previous state values.

```typescript
function usePrevious<T>(value: T): T | null
```

```typescript
function usePrevious(value): previousValue
```

### 💡 Example

```tsx
import { usePrevious } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount !== null ? prevCount : 'None'}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}
```
