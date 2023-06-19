import classes from './item.module.css'

export const Item = ({ title, price, image, description }) => {
  return (
    <div className={classes.item}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <span>{price}$</span>
    </div>
  )
}
