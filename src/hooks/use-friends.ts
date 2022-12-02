import { useContext } from 'react'

import { FriendsContext } from '../contexts'

export const useFriends = () => useContext(FriendsContext)
