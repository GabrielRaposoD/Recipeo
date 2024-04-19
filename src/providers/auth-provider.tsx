'use client'

import { User } from '@/payload-types'
import { createContext } from 'react'

type AuthContextType = {
  user: User | null
}

const AuthContext = createContext<AuthContextType>({
  user: null,
})

const AuthProvider: React.FC<{ children: React.ReactNode } & AuthContextType> = ({
  children,
  user,
}) => {
  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export { AuthProvider, AuthContext }
