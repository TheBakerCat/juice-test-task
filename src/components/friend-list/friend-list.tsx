import {
  InitialsAvatar,
  SimpleCell,
  Subhead,
  calcInitialsAvatarColor
} from '@vkontakte/vkui'
import { FC } from 'react'

export const FriendList: FC<FriendListProps> = (props) => {
  const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(' ')
    return `${firstName[0]}${lastName[0]}`
  }

  return (
    <div>
      {props.friends?.map((friend, index) => (
        <SimpleCell
          multiline
          style={{ minHeight: '80px' }}
          key={index}
          before={
            <InitialsAvatar gradientColor={calcInitialsAvatarColor(friend.id)}>
              {getInitials(friend.name)}
            </InitialsAvatar>
          }
          subtitle={
            <Subhead>
              {friend.email}
              <br />
              {friend.phone}
            </Subhead>
          }
        >
          {friend.name}
        </SimpleCell>
      ))}
    </div>
  )
}

export interface FriendListProps {
  friends: Friend[] | []
}

export interface Friend {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
