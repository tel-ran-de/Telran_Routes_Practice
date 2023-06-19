import { useState, useEffect } from 'react'
import { ItemList } from './Products/ItemList'
import { ApiContext, ThemeContext } from './contexts'
import classes from './app.module.css'
import { AddItem } from './Products/AddItem'
import { postItem } from './utils'
import { Button } from './Button'

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [theme, setTheme] = useState('dark')

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
    <ThemeContext.Provider value={theme}>
      <ApiContext.Provider value={{ items, postData }}>
        <div>
          <button
            onClick={() => {
              console.log('sdfsd')
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }}
          >
            Toggle theme
          </button>
          <Button> AYE</Button>
          <div className={classes.addItemContainer}>
            <AddItem />
          </div>
          {isLoading ? <h1>LOADING...</h1> : <ItemList />}
          {error && <h1>An error occurred: {error.message}</h1>}
        </div>
      </ApiContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
