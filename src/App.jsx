import { useState } from 'react'
import { Header } from './Layout/Header'
import { ItemsPage } from './Pages/ItemsPage'
// import { Timer } from './components/Timer'
import { ThemeContext } from './contexts'

function App() {
  const [theme, setTheme] = useState()
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} theme={theme} />
        <ItemsPage />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
