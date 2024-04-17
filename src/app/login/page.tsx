'use client'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { GoogleIcon } from '@/components/icons/google'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  password: z
    .string()
    .min(8, 'Must be at least 8 characters long')
    .regex(/[0-9]/, 'Must have at least one number')
    .regex(/[A-Z]/, 'Must have at least one uppercase letter')
    .regex(/[a-z]/, 'Must have at least one lowercase letter')
    .regex(/[$&+,:;=?@#|'<>.^*()%!-]/, 'Must have at least one special character'),
  email: z.string().email(),
})

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center p-6">
      <h1 className="mb-2 mt-20 text-center text-2xl font-bold leading-loose tracking-wide">
        Welcome Back!
      </h1>
      <p className="mb-8 text-center text-sm font-medium leading-7 tracking-wide">
        Please Enter your account here
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col">
          <Input placeholder="Email" className="mb-4 rounded-full" />
          <Input placeholder="Password" type="password" className="mb-6 rounded-full" />
          <Link href="#" className="mb-16 w-full text-right text-sm font-medium">
            Forgot password?
          </Link>
          <Button className="mb-6 w-full rounded-full" size="lg" type="submit">
            Login
          </Button>
        </form>
      </Form>
      <p className="mb-6 text-center text-sm font-medium leading-7 tracking-wide">
        Or continue with
      </p>
      <Button className="mb-6 w-full rounded-full" size="lg" type="submit" variant="destructive">
        <GoogleIcon className="mr-2 w-4 fill-current text-white" />
        Google
      </Button>
      <div className="flex flex-row gap-x-2 text-sm font-medium">
        <p>{`Don't`} have any account?</p>
        <Link href="#" className="text-primary">
          Sign Up
        </Link>
      </div>
    </main>
  )
}
