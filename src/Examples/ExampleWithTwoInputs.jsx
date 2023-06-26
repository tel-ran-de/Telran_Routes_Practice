import { useState, useEffect } from 'react'

export const TwoInput = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useEffect(() => {
    console.log('sss')
  }, [name])
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        PRESS
      </button>
      <input onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
    </div>
  )
}
