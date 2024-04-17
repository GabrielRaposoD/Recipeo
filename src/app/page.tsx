import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="relative flex max-h-screen min-h-screen flex-col items-center p-6">
      <Image
        src="/onboarding.png"
        alt="onboarding image"
        width={430}
        height={400}
        className="pointer-events-none absolute -z-10 -mt-6"
      />
      <hr className="flex-1" />
      <div className="flex flex-col pb-10">
        <h1 className="text-center text-2xl font-bold leading-loose tracking-wide">
          Start Cooking
        </h1>
        <p className="mt-4 text-center text-lg font-medium leading-7 tracking-wide">
          {`Let's join`} our community to cook better food!
        </p>
        <Button className="mt-16 w-full rounded-full" size="lg" asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </main>
  )
}
