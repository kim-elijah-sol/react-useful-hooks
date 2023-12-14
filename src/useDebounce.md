# useDebounce

### 🔍 Overview

The useDebounce hook is a custom React hook used for implementing debounce functionality.

This hook allows for a delay in updating the final value of a state until after a specified delay time has passed since the last change.

This is particularly useful in scenarios where frequent updates are unnecessary or potentially harmful to performance, such as during real-time search or input validation.

```typescript
function useDebounce<T>(value: T, delay?: number): T
```

```typescript
function useDebounce(value, delay = 300): debouncedValue
```

### 💡 Example

```tsx
import { useDebounce } from '@kim-elijah-sol/react-useful-hooks'

function Component() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // Effect for API call or other operations
  useEffect(() => {
    // API call or other operations using debouncedSearchTerm
  }, [debouncedSearchTerm])

  return (
    <input
      type='text'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}
```
