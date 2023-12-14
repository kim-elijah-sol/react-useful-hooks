# useThrottle

### 🔍 Overview

The useThrottle hook in React is designed to control the frequency at which a value is updated.

This is particularly useful when you need to limit the rate of executing some code, like during window resizing, scrolling, or handling fast-changing input values.

```typescript
function useThrottle<T>(value: T, interval?: number): T
```

```typescript
function useThrottle(value, interval = 300): throttledValue
```

### 💡 Example

```tsx
import { useThrottle } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const throttledSearchTerm = useThrottle(searchTerm, 500)

  // Effect for API call or other operations
  useEffect(() => {
    // API call or other operations using throttledSearchTerm
  }, [throttledSearchTerm])

  return (
    <input
      type='text'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
```
