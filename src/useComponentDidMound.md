# useComponentDidMount

### 🔍 Overview

This custom React hook, useComponentDidMount, is designed to mimic the behavior of the componentDidMount lifecycle method in class components.

It executes a callback function only after the component has mounted.

```typescript
function useComponentDidMount(callback: () => void): void
```

### 💡 Example

```tsx
import { useComponentDidMount } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  useComponentDidMount(() => {
    console.log('component is mounted')
  })
}
```
