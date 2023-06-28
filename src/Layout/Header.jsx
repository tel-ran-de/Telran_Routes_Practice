import classes from './header.module.css'

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
  </header>
)
