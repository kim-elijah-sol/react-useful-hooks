# useIsMounted

### 🔍 Overview

The useIsMounted hook is used in React applications to ensure that certain operations, especially those accessing client-side only features like the window object, are executed only after the component has mounted.

This is crucial in server-side rendering (SSR) environments to prevent errors that can occur when trying to access browser-specific objects on the server.

```typescript
function useIsMounted(): boolean
```

```typescript
function useIsMounted(): isMounted
```

### 💡 Example

```tsx
import { useEffect } from 'react'
import { useIsMounted } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const isMounted = useIsMounted()

  useEffect(() => {
    if (isMounted) {
      // Safely access the window object
      console.log(window)
    }
  }, [isMounted])
}
```
