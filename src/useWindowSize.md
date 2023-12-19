# useWindowSize

### 🔍 Overview

The useWindowSize hook is designed for React applications to provide an easy way to access and respond to changes in the browser window's size. This custom hook returns an object containing the width and height of the window, which updates whenever the window is resized.

This hook is particularly useful for responsive design, allowing components to adapt their layout and functionality based on the current window dimensions.

```typescript
function useWindowSize(): {
  width: number
  height: number
}
```

```typescript
function useWindowSize(): {
  width
  height
}
```

### 💡 Example

```tsx
import { useWindowSize } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const size = useWindowSize()

  return (
    <div>
      <p>Window width: {size.width}px</p>
      <p>Window height: {size.height}px</p>
    </div>
  )
}
```
