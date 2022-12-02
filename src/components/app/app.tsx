import { FC, useEffect, useState } from 'react'

import { send, subscribe } from '@vkontakte/vk-bridge'
import type { VKUpdateConfigData } from '@vkontakte/vk-bridge'
import {
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  Platform,
  WebviewType
} from '@vkontakte/vkui'

import { Layout, SnackbarProvider, UserProvider } from '../'
import { useTheme } from '../../hooks'
import { currentPlatform } from '../../utils'

import '@vkontakte/vkui/dist/vkui.css'
import './app.css'
import { FriendsProvider } from '../friends-provider'

export const App: FC = () => {
  const [platform, setPlatform] = useState<Platform>(currentPlatform)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    console.log('App: ', theme)
  }, [theme])

  useEffect(() => {
    const updateAppearance = (config: VKUpdateConfigData) => {
      if (config.appearance) {
        setTheme(config.appearance)
        console.log('Appearance changed:', config.appearance)
      }
    }

    send('VKWebAppGetConfig').then((config) => {
      updateAppearance(config as VKUpdateConfigData)

      subscribe(({ detail: { type, data } }) => {
        if (type === 'VKWebAppUpdateConfig') {
          updateAppearance(data as VKUpdateConfigData)
        }
      })
    })

    send('VKWebAppInit')
  }, [])

  useEffect(() => {
    const onResize = () => {
      setPlatform(currentPlatform)
    }

    window.addEventListener('resize', onResize, false)
    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [])

  return (
    <ConfigProvider
      platform={platform}
      appearance={theme}
      webviewType={
        platform === Platform.VKCOM ? WebviewType.INTERNAL : WebviewType.VKAPPS
      }
    >
      <AdaptivityProvider>
        <AppRoot noLegacyClasses>
          <SnackbarProvider>
            <UserProvider>
              <FriendsProvider>
                <Layout />
              </FriendsProvider>
            </UserProvider>
          </SnackbarProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  )
}
