import { useEffect, useState } from 'react'
import { Product } from './ProductCard'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=10&offset=1')
        const data = await response.json()
        console.log(data[0].images[0])
        setProducts(data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setError(error)
        setIsLoading(false)
      }
    }
    getdata()
  }, [])

  return (
    <div>
      {error ? <h1>An error occurred: {error.message}</h1> : null}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        products.map((product) => (
          <Product
            key={product.id}
            image={product.images[0]}
            description={product.description}
            title={product.title}
          />
        ))
      )}
    </div>
  )
}
