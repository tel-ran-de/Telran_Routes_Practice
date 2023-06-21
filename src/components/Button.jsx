import { useContext } from 'react'
import { ThemeContext } from '../contexts'

export const Button = ({ children, onClick }) => {
  const theme = useContext(ThemeContext)
  const className = `button-${theme}`
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
