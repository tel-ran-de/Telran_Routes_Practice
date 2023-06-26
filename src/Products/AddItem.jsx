import { useContext, useState } from 'react'
import classes from './addItem.module.css'
import { ApiContext } from '../contexts'

export function AddItem() {
  const { postItemHandler } = useContext(ApiContext)

  const [product, setProduct] = useState({
    id: new Date(),
    title: '',
    price: 1,
    description: '',
    categoryId: 1,
    images: ['https://picsum.photos/640/640?r=6408'],
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    postItemHandler(product)
    setProduct({
      id: new Date(),
      title: '',
      price: 1,
      description: '',
      categoryId: 1,
      images: ['https://picsum.photos/640/640?r=6408'],
    })
  }

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <label htmlFor="title">
        title
        <input
          type="text"
          id="title"
          name="title"
          value={product.title}
          onChange={(e) => setProduct((prev) => ({ ...prev, title: e.target.value }))}
        />
      </label>
      <label htmlFor="price">
        price
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={(e) => setProduct((prev) => ({ ...prev, price: e.target.value }))}
        />
      </label>
      <label htmlFor="description">
        description
        <input
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={(e) => setProduct((prev) => ({ ...prev, description: e.target.value }))}
        />
      </label>
      <button type="submit">ADD</button>
    </form>
  )
}
