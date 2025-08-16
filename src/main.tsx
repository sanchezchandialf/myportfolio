import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import { getDesignTokens } from './theme/theme.ts'
import App from './App.tsx'

const Main = () => {
  const [mode] = useState<'light' | 'dark'>('light')
  const theme = createTheme(getDesignTokens(mode))
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
