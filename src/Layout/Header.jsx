import classes from './header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = ({ theme, setTheme }) => (
  <header className={classes.headerContainer}>
    <button
      type="button"
      className={classes.toggleButton}
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      TOGGLE
    </button>
    <nav>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to="/items">
            Items
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? classes.active : '')} to="/timer">
            Timer
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
)
