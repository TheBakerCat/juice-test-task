import { back } from '@itznevikat/router'
import {
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack
} from '@vkontakte/vkui'
import { FC } from 'react'
import { FriendList } from '../../components'
import { useFriends } from '../../hooks'

export const AllFriends: FC<NavIdProps> = (props) => {
  const { friends } = useFriends()

  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={back} />}>
        Все друзья
      </PanelHeader>

      <Group mode={'plain'}>
        <FriendList friends={friends} />
      </Group>
    </Panel>
  )
}
