'use client'

import { useAuth } from '@/hooks/useAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <main className="relative flex max-h-screen min-h-screen flex-col items-center p-6">
      email: {user?.email}
    </main>
  )
}
