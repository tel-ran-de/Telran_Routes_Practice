import { useEffect } from 'react'
import { Test } from './Test'
import { ProductList } from './Products'

function App() {
  console.log('render')
  useEffect(() => {
    console.log('onMount')
  })
  return (
    <div className="App">
      <Test />
      <ProductList />
    </div>
  )
}

export default App
