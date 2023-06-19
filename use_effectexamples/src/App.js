import { useState, useEffect } from 'react'
import { ItemList } from './Products/ItemList'
import { ApiContext } from './contexts'
import classes from './app.module.css'
import { AddItem } from './Products/AddItem'
import { postItem } from './utils'

function App() {
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
      } catch (error) {
        console.error('Error:', error)
        setError(error)
        setIsLoading(false)
      }
    }
    getdata()
  }, [])

  const postData = async (obj) => {
    const data = await postItem(obj)
    console.log(data)
    setItems([...items, data])
  }

  return (
    <ApiContext.Provider value={{ items, postData }}>
      <div>
        <div className={classes.addItemContainer}>
          <AddItem />
        </div>
        {isLoading ? <h1>LOADING...</h1> : <ItemList />}
        {error && <h1>An error occurred: {error.message}</h1>}
      </div>
    </ApiContext.Provider>
  )
}

export default App
