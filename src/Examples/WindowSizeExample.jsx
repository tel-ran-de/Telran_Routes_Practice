import { useState, useEffect } from 'react'

export const WindowExample = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const handleresize = () => setWindowSize(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', handleresize)
    return () => {
      window.removeEventListener('resize', handleresize)
    }
  })
  return <div>{windowSize}</div>
}
