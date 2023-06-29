import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Layout/Header'
import { ThemeContext } from './contexts'

function App() {
  const [theme, setTheme] = useState()
  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} theme={theme} />
        <Outlet />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
