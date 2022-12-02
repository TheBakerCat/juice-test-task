import { Root, createRoot } from 'react-dom/client'

import { App, ThemeProvider } from './components'

import '@vkontakte/vkui/dist/fonts.css'

const root: Root = createRoot(document.getElementById('root')!)
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
