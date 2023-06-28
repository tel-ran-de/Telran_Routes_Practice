import { useState, useEffect, useMemo, useCallback } from 'react'
import { ApiContext } from '../contexts'
import { ItemList } from '../Products/ItemList'
import { AddItem } from '../Products/AddItem'
import { postItem, deleteItem } from '../utils'
import classes from './itemPage.module.css'

export const ItemsPage = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getdata = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products?limit=7&offset=1')
        const data = await response.json()
        setItems(data)
        setIsLoading(false)
      } catch (err) {
        setError(error)
        setIsLoading(false)
      }
    }
    getdata()
  }, [error])

  const postItemHandler = useCallback(async (obj) => {
    const data = await postItem(obj)
    console.log(data)
    setItems((prevItems) => [...prevItems, data])
  }, [])

  const deleteItemHandler = useCallback(async (id) => {
    const response = await deleteItem(id)
    if (response.ok) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }
  }, [])

  const memoizedValue = useMemo(
    () => ({
      items,
      postItemHandler,
      deleteItemHandler,
    }),
    [items, postItemHandler, deleteItemHandler]
  )
  return (
    <ApiContext.Provider value={memoizedValue}>
      <div className={classes.gridContainer}>
        <div className={classes.addItemContainer}>
          <h1 className={classes.header}>E-shop</h1>
          <AddItem />
        </div>

        {isLoading ? <h1>LOADING...</h1> : <ItemList />}
        {error && (
          <h1>
            An error occurred:
            {error.message}
          </h1>
        )}
      </div>
    </ApiContext.Provider>
  )
}
