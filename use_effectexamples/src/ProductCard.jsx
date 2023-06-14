import classes from './productCard.module.css'
export const Product = ({ title, price, image, description }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p>{description}</p>
      <span>{price}</span>
    </div>
  )
}
