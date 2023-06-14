import { useEffect, useState } from 'react'
import { Product } from './ProductCard'
import { postData } from '../utils'
import classes from './productList.module.css'
import { Form } from './Form'

export const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=7&offset=1')
        const data = await response.json()

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

  const handlePostedData = async (obj) => {
    try {
      const response = await postData(obj)
      setProducts([...products, response])
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div>
      <Form addNewProduct={handlePostedData} />
      {error ? <h1>An error occurred: {error.message}</h1> : null}
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <div className={classes.productList}>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.images[0]}
              description={product.description}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      )}
    </div>
  )
}
