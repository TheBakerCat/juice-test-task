import { Icon48Game } from '@vkontakte/icons'
import { FC } from 'react'
import { back, push } from '@itznevikat/router'
import {
  Button,
  Group,
  NavIdProps,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  Placeholder
} from '@vkontakte/vkui'

export const Fallback: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader before={<PanelHeaderBack onClick={back} />}>404</PanelHeader>

      <Group>
        <Placeholder
          icon={<Icon48Game />}
          title={'Как так?'}
          action={
            <Button size={'l'} onClick={() => push('/')}>
              Нажми на меня
            </Button>
          }
        >
          УУпс, здесь ничего нет!! :(
        </Placeholder>
      </Group>
    </Panel>
  )
}
