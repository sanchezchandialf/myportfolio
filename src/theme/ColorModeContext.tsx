import { createContext } from 'react'

export const ColorModeContext = createContext<{ toggleColorMode: () => void }>({
  toggleColorMode: () => {},
})

export default ColorModeContext
