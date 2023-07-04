import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export const SingleItemPage = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const data = await response.json()
        console.log(data)
        setItem(data)
        console.log(item)
      } catch (err) {
        console.log(err)
      }
    }
    getdata()
  }, [id])

  console.log(item)
  return (
    <div>
      <h1> {item.title}</h1>
      <p>About: {item.description}</p>
      <p>Price: {item.price}</p>
      <img src={item.images} />
    </div>
  )
}
