import { StrictMode, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/900.css'
import './index.css'
import { getDesignTokens } from './theme/theme.ts'
import { ColorModeContext } from './theme/ColorModeContext.tsx'
import App from './App.tsx'

const Main = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = {
    toggleColorMode: () => {
      setMode(prev => (prev === 'light' ? 'dark' : 'light'))
    },
  }
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
