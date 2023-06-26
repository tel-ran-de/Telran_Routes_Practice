import { useEffect, useState } from 'react'

export const Test = () => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) ?? 9)

  useEffect(() => {
    localStorage.setItem('count', count)
    console.log(count)
  }, [count])

  const handleCount = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={handleCount}>
        увеличь
      </button>
    </div>
  )
}
