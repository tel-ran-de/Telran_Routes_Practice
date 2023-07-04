import { useContext } from 'react'
import { Item } from './Item'
import classes from './itemList.module.css'
import { ApiContext } from '../contexts'
import { NavLink } from 'react-router-dom'

export function ItemList() {
  const { items } = useContext(ApiContext)

  return (
    <div>
      <div className={classes.itemList}>
        {items.map((product) => (
          <NavLink key={product.id} to={`/items/${product.id}`}>
            <Item
              image={product.images[0]}
              description={product.description}
              title={product.title}
              price={product.price}
              id={product.id}
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}
