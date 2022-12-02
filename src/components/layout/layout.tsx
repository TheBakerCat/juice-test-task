import { FC, Fragment } from 'react'

import {
  Epic,
  Match,
  ModalRoot,
  View,
  matchPopout,
  useParams
} from '@itznevikat/router'
import { Icon28NewsfeedLinesOutline, Icon28Profile } from '@vkontakte/icons'
import {
  PanelHeader,
  ScreenSpinner,
  SplitCol,
  SplitLayout,
  VKCOM,
  usePlatform
} from '@vkontakte/vkui'

import { AllFriends, Fallback, Home, PlaceholderPage } from '../../pages'
import { PlaceholderModal } from '../../modals'
import { TestActionSheet, TestAlert } from '../../popouts'
import { useSnackbar } from '../../hooks'

import { LayoutButton } from './button'
import { LayoutSidebar } from './sidebar'
import { LayoutTabbar } from './tabbar'

const Nav: FC = () => (
  <Fragment>
    <LayoutButton story="/placeholder" before={<Icon28NewsfeedLinesOutline />}>
      Placeholder
    </LayoutButton>
    <LayoutButton story="/" before={<Icon28Profile />}>
      Профиль
    </LayoutButton>
  </Fragment>
)

export const Layout: FC = () => {
  const platform = usePlatform()
  const { popout } = useParams()
  const { snackbar } = useSnackbar()

  return (
    <Match fallbackURL="/404">
      <SplitLayout
        header={platform !== VKCOM && <PanelHeader separator={false} />}
        modal={
          <ModalRoot>
            <PlaceholderModal nav="placeholder-modal" />
          </ModalRoot>
        }
        /* eslint-disable react/jsx-key */
        popout={matchPopout(popout, [
          <ScreenSpinner id="screen-spinner" />,
          <TestActionSheet nav="test-action-sheet" />,
          <TestAlert nav="test-alert" />
        ])}
        style={{
          justifyContent: 'center'
        }}
      >
        <SplitCol
          spaced={platform === VKCOM}
          animate={platform !== VKCOM}
          width={platform === VKCOM ? '650px' : '100%'}
          maxWidth={platform === VKCOM ? '650px' : '100%'}
        >
          <Epic
            nav="/"
            tabbar={
              platform !== VKCOM && (
                <LayoutTabbar>
                  <Nav />
                </LayoutTabbar>
              )
            }
          >
            <View nav="/placeholder">
              <PlaceholderPage nav="/" />
            </View>

            <View nav="/">
              <Home nav="/" />
              <AllFriends nav="/friends" />
              <Fallback nav="/404" />
            </View>
          </Epic>

          {snackbar}
        </SplitCol>

        {platform === VKCOM && (
          <LayoutSidebar>
            <Nav />
          </LayoutSidebar>
        )}
      </SplitLayout>
    </Match>
  )
}
