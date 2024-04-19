import { AuthContext } from '@/providers/auth-provider'
import { useContext } from 'react'

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { useAuth }
