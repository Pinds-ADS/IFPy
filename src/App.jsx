import './App.css'
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from './theme'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import InstructionsPage from './pages/InstructionsPage';

function App() {

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/instructions/" element={<InstructionsPage />}/>
          </Routes>
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>

  )
}

export default App
