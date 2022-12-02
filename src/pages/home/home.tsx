import { push } from '@itznevikat/router'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import {
  Icon24Add,
  Icon28LightbulbOutline,
  Icon28LogoVkColor
} from '@vkontakte/icons'
import { send } from '@vkontakte/vk-bridge'
import {
  CellButton,
  Div,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  SimpleCell,
  Spacing,
  Subhead,
  Switch,
  Title
} from '@vkontakte/vkui'
import { ErrorSnackbar, FriendList } from '../../components'
import { useFriends, useSnackbar, useUser } from '../../hooks'
import { ProfileCard } from './components'
import styles from './home.module.pcss'

export const Home: FC<NavIdProps> = (props) => {
  const { setUser } = useUser()
  const { friends, setFriends } = useFriends()
  const [flashlightAvailable, setFlashlightAvailable] = useState(false)
  const [flashlightEnabled, setFlashlightEnabled] = useState(false)
  const { setSnackbar } = useSnackbar()

  useEffect(() => {
    Promise.all([
      send('VKWebAppGetUserInfo').then((value) => setUser(value)),
      send('VKWebAppFlashGetInfo').then((value) =>
        setFlashlightAvailable(value.is_available)
      ),
      axios.get('https://jsonplaceholder.typicode.com/users').then((r) => {
        setFriends(r.data)
      })
    ])
  }, [])

  const toggleFlashlight = () => {
    send('VKWebAppFlashSetLevel', { level: flashlightEnabled ? 0 : 1 }).then(
      () => setFlashlightEnabled(!flashlightEnabled)
    )
  }

  return (
    <Panel {...props}>
      <PanelHeader>
        <Title
          level="2"
          weight="medium"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Icon28LogoVkColor />
          ui
        </Title>
      </PanelHeader>

      <Group padding={'m'}>
        <ProfileCard />
        <Spacing size={12} />
        <Group mode={'plain'}>
          <SimpleCell
            before={<Icon28LightbulbOutline />}
            Component="label"
            after={
              <Switch
                disabled={!flashlightAvailable}
                onChange={toggleFlashlight}
                checked={flashlightEnabled}
              />
            }
            subtitle="На телефоне включится фонарик"
            onClick={() => {
              if (!flashlightAvailable) {
                setSnackbar(
                  <ErrorSnackbar>
                    Я не могу включить ваш фонарик, возможно его просто нету =(
                  </ErrorSnackbar>
                )
              }
            }}
          >
            Больше света!
          </SimpleCell>
        </Group>
      </Group>

      <Group>
        <Div className={styles.friendListContainer}>
          <Div className={styles.title}>
            <Title level={'3'}>Друзья</Title>
            <Subhead
              style={{
                color: 'var(--text_secondary)'
              }}
            >
              {friends?.length}
            </Subhead>
          </Div>
          <FriendList friends={friends.slice(0, 3)} />
          <CellButton
            centered
            before={<Icon24Add />}
            onClick={() => push('/friends')}
          >
            Показать всех друзей
          </CellButton>
        </Div>
      </Group>
    </Panel>
  )
}
