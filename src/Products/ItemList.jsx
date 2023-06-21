import { useContext } from 'react'
import { Item } from './Item'
import classes from './itemList.module.css'
import { ApiContext } from '../contexts'

export function ItemList() {
  const { items } = useContext(ApiContext)

  return (
    <div>
      <div className={classes.itemList}>
        {items.map((product) => (
          <Item
            key={product.id}
            image={product.images[0]}
            description={product.description}
            title={product.title}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  )
}
