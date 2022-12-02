import { createContext } from 'react'
import { Friend } from '../components'

export const FriendsContext = createContext<{
  friends: Friend[] | []
  setFriends: (newFriends: Friend[] | []) => void
}>({
  friends: [],
  setFriends: () => void 0
})
