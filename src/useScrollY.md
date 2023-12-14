# useScrollY

### 🔍 Overview

The useScrollY hook is a custom React hook used to track the window's vertical scroll position (scrollY).

It offers an optional throttling feature to enhance performance by limiting the frequency of updates during scroll events.

This hook is useful for scenarios where the scroll position is needed to trigger certain UI effects or analytics tracking.

```typescript
function useScrollY(options?: { throttle?: number }): number
```

```typescript
function useScrollY(options): number
```

### 💡 Example

```tsx
import { useScrollY } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const scrollY = useScrollY({ throttle: 100 })

  return (
    <div>
      <p>Current Scroll Position: {scrollY}</p>
    </div>
  )
}
```
