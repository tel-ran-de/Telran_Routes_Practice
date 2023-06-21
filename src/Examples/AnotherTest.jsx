import { useEffect, useState } from 'react'

export const AnotherTest = () => {
  const [text, setText] = useState('hi')
  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/${text}`)
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.error('Error:', error)
      }
    }
    getdata()
    return () => console.log('clean up')
  }, [text])
  return (
    <div>
      <h1>{text}</h1>
      <button type="button" onClick={() => setText('products')}>
        Products
      </button>
      <button type="button" onClick={() => setText('users')}>
        Users
      </button>
      <button type="button" onClick={() => setText('categories')}>
        Categories
      </button>
    </div>
  )
}
