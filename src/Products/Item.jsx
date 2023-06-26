import React, { useContext } from 'react'
import { ApiContext, ThemeContext } from '../contexts'
import classes from './item.module.css'

export const Item = ({ title, price, image, description, id }) => {
  const theme = useContext(ThemeContext)
  // @ts-ignore
  const { deleteItemHandler } = useContext(ApiContext)

  return (
    <div className={`${classes.item} ${classes[theme]}`}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <p>{price}</p>
      <button type="button" className={classes.button} onClick={() => deleteItemHandler(id)}>
        Delete me NOW
      </button>
    </div>
  )
}
