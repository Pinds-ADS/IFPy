import './App.css'
import {Button, Typography} from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>

        <Typography variant='h5' color='primary'>Rola</Typography>
        <Button variant="contained" color='primary'>Contained</Button>
        <Button variant="outlined" color='primary'>Contained</Button>
        <Button variant="text" color='primary'>Contained</Button>

      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
