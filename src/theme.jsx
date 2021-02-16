import { createMuiTheme } from '@material-ui/core/styles'
// import '@material-ui/lab/themeAugmentation'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#df78ef',
      main: '#CC4A5A',
      dark: '#B92437',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffddc1',
      main: '#FFFFFF',
      dark: '#FFFFFF',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Open Sans'],
    h1: {
      fontSize: 36,
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: 600,
    },
    h2: {
      fontSize: 26,
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: 600,
    },
    button: {
      fontSize: 18,
      fontFamily: "'Open Sans'",
      fontWeight: 700,
    },
    subtitle2: {
      color: 'white',
    },
  },
})

export default theme
