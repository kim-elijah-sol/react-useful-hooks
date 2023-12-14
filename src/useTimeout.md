# useTimeout

### 🔍 Overview

The useTimeout hook is a custom React hook designed for performing a single operation after a specified delay, only once the component is initially mounted.

This hook is ideal for scenarios where you need to execute a function after a delay, such as showing a welcome message, triggering animations, or starting a timer after the component is first rendered.

```typescript
function useTimeout(fn: () => void, delay?: number): void
```

```typescript
function useTimeout(fn, delay = 300): void
```

### 💡 Example

```tsx
import { useTimeout } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  useTimeout(() => {
    // 1 second after the component is mounted
    ...
  }, 1000)

  return ...
}
```
