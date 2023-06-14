import { useEffect } from 'react'
import { AnotherTest } from './AnotherTest'
import { ProductList } from './Products'

function App() {
  console.log('render')
  useEffect(() => {
    console.log('onMount')
  })
  return (
    <div className="App">
      <AnotherTest />
    </div>
  )
}

export default App
