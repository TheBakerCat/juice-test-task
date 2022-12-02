import { AppearanceType } from '@vkontakte/vk-bridge'
import { createContext } from 'react'

export const ThemeContext = createContext<{
  theme: AppearanceType | undefined
  setTheme: (theme: AppearanceType | undefined) => void
}>({
  theme: 'light',
  setTheme: () => void 0
})
