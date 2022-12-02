import { FC } from 'react'
import { back } from '@itznevikat/router'
import {
  Icon28BillSeparatedOutline,
  Icon28IncognitoOutline,
  Icon28TagOutline,
  Icon56Stars3Outline
} from '@vkontakte/icons'
import {
  Button,
  Group,
  ModalCard,
  NavIdProps,
  SimpleCell
} from '@vkontakte/vkui'

export const PlaceholderModal: FC<NavIdProps> = (props) => {
  return (
    <ModalCard
      {...props}
      onClose={back}
      icon={<Icon56Stars3Outline />}
      header="Это модальное окно"
      subheader="Короткое описание, а может и не короткое"
      actions={
        <Button size="l" mode="primary" onClick={back}>
          Понятно
        </Button>
      }
    >
      <Group>
        <SimpleCell
          before={<Icon28TagOutline />}
          subtitle={'Короткое описание'}
          disabled
        >
          Number one
        </SimpleCell>
        <SimpleCell
          before={<Icon28BillSeparatedOutline />}
          subtitle={'Короткое описание'}
          disabled
        >
          Number two
        </SimpleCell>
        <SimpleCell
          before={<Icon28IncognitoOutline />}
          subtitle={'Елочка гори'}
          disabled
        >
          Number three
        </SimpleCell>
      </Group>
    </ModalCard>
  )
}
