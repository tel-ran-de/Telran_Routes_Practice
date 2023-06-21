import { useState, useEffect } from "react";
import { ItemList } from "./Products/ItemList";
import { ApiContext, ThemeContext } from "./contexts";
import classes from "./app.module.css";
import { AddItem } from "./Products/AddItem";
import { postItem, deleteItem } from "./utils";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?limit=7&offset=1"
        );
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setIsLoading(false);
      }
    };
    getdata();
  }, []);

  const postItemHandler = async (obj) => {
    const data = await postItem(obj);
    console.log(data);
    setItems([...items, data]);
  };

  const deleteItemHandler = async (id) => {
    const response = await deleteItem(id);

    response.ok
      ? setItems((prevItems) => prevItems.filter((item) => item.id !== id))
      : console.log("We've got a prob");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <ApiContext.Provider
        value={{ items, postItemHandler, deleteItemHandler }}
      >
        <div className={classes.gridContainer}>
          <div className={classes.addItemContainer}>
            <h1 className={classes.header}>E-shop</h1>
            <AddItem />

            <button
              className={classes.toggleButton}
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              Toggle theme
            </button>
          </div>

          {isLoading ? <h1>LOADING...</h1> : <ItemList />}
          {error && <h1>An error occurred: {error.message}</h1>}
        </div>
      </ApiContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
