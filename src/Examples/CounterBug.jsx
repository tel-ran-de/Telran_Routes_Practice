import React, { useEffect, useState } from 'react'

export const CounterBugExample = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>
        Count:
        {count}
      </h1>
      <h2>{name}</h2>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  )
}
