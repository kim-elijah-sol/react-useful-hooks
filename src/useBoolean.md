# useBoolean

### 🔍 Overview

The useBoolean hook is a custom React hook designed for managing boolean states within functional components. It provides an easy and intuitive way to toggle a boolean value or to explicitly set it to true or false.

```typescript
function useBoolean(
  defaultValue?: boolean
): [boolean, () => void, () => void, () => void]
```

```typescript
function useBoolean(defaultValue = false): [bool, toggle, setTrue, setFalse]
```

### 💡 Example

```tsx
import { useBoolean } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
    const [isAutoLogin, toggleAutoLogin, checkAutoLogin, uncheckAutoLogin] = useBoolean()

    ...
}
```
