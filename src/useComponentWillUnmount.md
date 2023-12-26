# useComponentWillUnmount

### 🔍 Overview

The useComponentWillUnmount hook is a custom React hook that simulates the behavior of the componentWillUnmount lifecycle method found in class components.

It is used to execute a cleanup function just before the component is unmounted.

```typescript
function useComponentWillUnmount(cleanup: () => void): void
```

### 💡 Example

```tsx
import { useComponentWillUnmount } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  useComponentWillUnmount(() => {
    console.log('component will unmount')
  })
}
```
