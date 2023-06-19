import { useContext, useState } from 'react'
import { Item } from './Item'
import { AddItem } from './AddItem'
import classes from './itemList.module.css'
import { postData } from '../utils'
import { ApiContext } from '../contexts'

export const ItemList = () => {
  const { items } = useContext(ApiContext)
  console.log(items)

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
          />
        ))}
      </div>
    </div>
  )
}
