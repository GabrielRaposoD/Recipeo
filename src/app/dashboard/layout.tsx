import { AuthProvider } from '@/providers/auth-provider'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const payload = await getPayload({
    config: configPromise,
  })

  const headersObject = headers()

  const auth = await payload.auth({ headers: headersObject })

  if (!auth.user) {
    redirect('/login')
  }

  return <AuthProvider user={auth.user}>{children}</AuthProvider>
}

export default DashboardLayout
