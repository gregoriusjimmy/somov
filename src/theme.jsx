import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
// import '@material-ui/lab/themeAugmentation'

let theme = createMuiTheme({
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
      fontSize: '3rem',
      fontFamily: "'Montserrat', 'sans-serif'",
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
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
theme = responsiveFontSizes(theme)
export default theme
