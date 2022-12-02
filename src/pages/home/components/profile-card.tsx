import { Icon20HomeOutline, Icon20UserOutline } from '@vkontakte/icons'
import { Avatar, Div, Link, Subhead, Title } from '@vkontakte/vkui'
import { FC } from 'react'
import { useUser } from '../../../hooks'
import styles from './profile-card.module.pcss'

export const ProfileCard: FC = () => {
  const { user } = useUser()

  return (
    <Div className={styles.profile}>
      <Avatar src={user?.photo_100} size={88} />
      <div className={styles.profileContent}>
        <Title level="3" weight="1">
          {!user && 'Загрузка...'}
          {user?.first_name} {user?.last_name}
        </Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Subhead
            color={'#99A2AD;'}
            style={{ display: 'flex', alignItems: 'center', gap: 8 }}
          >
            <Icon20HomeOutline width={16} height={16} fill={'#99A2AD'} />
            {user?.city
              ? user?.city.title
              : user?.country
              ? user?.country.title
              : 'Н/Д'}
          </Subhead>
          <Link href={'https://vk.com/id0'} target={'_blank'}>
            <Subhead style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon20UserOutline width={16} height={16} />
              Открыть профиль
            </Subhead>
          </Link>
        </div>
      </div>
    </Div>
  )
}
