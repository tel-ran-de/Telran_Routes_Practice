import classes from "./item.module.css";
import { useContext } from "react";
import { ApiContext, ThemeContext } from "../contexts";

export const Item = ({ title, price, image, description, id }) => {
  const theme = useContext(ThemeContext);
  const { deleteItemHandler } = useContext(ApiContext);

  return (
    <div className={`${classes.item} ${classes[theme]}`}>
      <h1>{title}</h1>
      <img className={classes.image} src={image} alt={title} />
      <p className={classes.description}>{description}</p>
      <p>{price}$</p>
      <button className={classes.button} onClick={() => deleteItemHandler(id)}>
        Delete me NOW
      </button>
    </div>
  );
};
