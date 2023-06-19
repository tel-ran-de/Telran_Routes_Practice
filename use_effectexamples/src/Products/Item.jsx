import classes from './item.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../contexts'

export const Item = ({ title, price, image, description }) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <div className={`${classes.item} ${classes[theme]}`}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}$</span>
    </div>
  )
}
