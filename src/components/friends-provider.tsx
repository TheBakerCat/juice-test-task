import { FC, ReactNode, useState } from 'react'
import { FriendsContext } from '../contexts'
import { Friend } from './friend-list/friend-list'

type FriendsProviderProps = {
  children: ReactNode
}

export const FriendsProvider: FC<FriendsProviderProps> = ({ children }) => {
  const [friends, setFriends] = useState<Friend[] | []>([])

  return (
    <FriendsContext.Provider value={{ friends, setFriends }}>
      {children}
    </FriendsContext.Provider>
  )
}
