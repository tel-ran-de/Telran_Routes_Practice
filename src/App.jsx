import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Layout/Header'
import { ThemeContext } from './contexts'
import { Form } from 'components/Form'

function App() {
  const [theme, setTheme] = useState()
  const [logged, setLogged] = useState(false)

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        {logged ? (
          <>
            <Header setTheme={setTheme} theme={theme} />
            <Outlet />
          </>
        ) : (
          <Form setLogged={setLogged} />
        )}
      </ThemeContext.Provider>
    </div>
  )
}

export default App
