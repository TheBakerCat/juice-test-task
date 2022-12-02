import { AppearanceType } from '@vkontakte/vk-bridge'
import { FC, ReactNode, useState } from 'react'
import { ThemeContext } from '../contexts'

type ThemeProviderProps = {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<AppearanceType | undefined>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
