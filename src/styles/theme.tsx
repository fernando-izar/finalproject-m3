import {  createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#69b9aa',
      contrastText: "#fff" 
    },
    secondary: {
      main: '#d4eeca'
    },
    text: {
      primary: '#ffffff',
      secondary:'#2b937f',
    }
  }
})

export default theme;