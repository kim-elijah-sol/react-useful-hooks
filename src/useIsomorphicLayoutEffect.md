# useIsomorphicLayoutEffect

### 🔍 Overview

The useIsomorphicLayoutEffect hook is a custom React hook that intelligently chooses between useLayoutEffect and useEffect based on the execution environment.

This hook is designed to work seamlessly in both browser and server-side rendering (SSR) contexts, such as when using Next.js or similar frameworks.

In a browser environment, where the window object is available, useLayoutEffect is used. This hook is appropriate for DOM manipulations and layout measurements.

In server-side rendering, where window is not available, the hook falls back to useEffect, which is a safer choice in non-browser environments.

### 💡 Example

```tsx
import { useIsomorphicLayoutEffect } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  useIsomorphicLayoutEffect(() => {
    // Perform layout effects here
  }, [])

  return ...
}
```
