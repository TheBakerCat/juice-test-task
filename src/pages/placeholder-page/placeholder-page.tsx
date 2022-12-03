import { push } from '@itznevikat/router'
import { Icon28LogoVkColor } from '@vkontakte/icons'
import {
  Button,
  NavIdProps,
  Panel,
  PanelHeader,
  Placeholder,
  Title
} from '@vkontakte/vkui'
import { FC } from 'react'
import placeholderIcon from '../../static/placeholder-icon.svg'

export const PlaceholderPage: FC<NavIdProps> = (props) => {
  return (
    <Panel {...props}>
      <PanelHeader>
        <Title
          level="2"
          weight="1"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Icon28LogoVkColor />
          ui
        </Title>
      </PanelHeader>

      <Placeholder
        stretched
        title={'Немного лирики'}
        icon={<img src={placeholderIcon} alt={'Placeholder Icon'} />}
        action={
          <Button size={'l'} onClick={() => push('?modal=placeholder-modal')}>
            Нажми на меня
          </Button>
        }
      >
        Прежде чем описание станет хорошим, его необходимо написать. Не правда
        ли?
      </Placeholder>
    </Panel>
  )
}
