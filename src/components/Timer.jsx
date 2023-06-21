import { useState, useEffect } from 'react'

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevSeconds) => prevSeconds + 0.1)
      }, 100)
    }

    return () => clearInterval(timer)
  }, [isRunning])

  const handleStopResume = () => {
    setIsRunning((prevState) => !prevState)
  }

  const formatTime = (times) => {
    const minutes = Math.floor(times / 60)
      .toString()
      .padStart(2, '0')

    const seconds = Math.floor(times % 60)
      .toString()
      .padStart(2, '0')

    const milliseconds = Math.floor((times % 1) * 1000)
      .toString()
      .padStart(3, '0')

    return `${minutes}:${seconds}.${milliseconds}`
  }

  return (
    <div>
      <div>
        <h1>Timer</h1>
        <h1>{formatTime(time)}</h1>
        <button type="button" onClick={() => setTime(0)}>
          Clear timer
        </button>
        <button type="button" onClick={handleStopResume}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  )
}
