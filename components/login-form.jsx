'use client'

import { cn } from '@/lib/utils'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Google } from "@mui/icons-material"
import { GoogleLogin } from './google-signin'

export function LoginForm({
  className,
  ...props
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
        return
      }

      router.push('/profile')
    } catch (error) {
      setError('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back</h1>
        <p className="text-balance text-sm text-gray-400">
          Enter your email below to login to your account
        </p>
      </div>
      <form onSubmit={handleLogin} className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="text-gray-300">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Link
              href="/auth/forgot-password"
              className="ml-auto text-sm underline-offset-4 hover:underline text-[#D1C0EC]"
            >
              Forgot your password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            required
            className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        {error && (
          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full bg-[#D1C0EC] hover:bg-[#C4ADDD] text-[#1b0e20] font-bold h-12 rounded-xl transition-all shadow-lg shadow-[#D1C0EC]/20 hover:shadow-[#D1C0EC]/40 hover:-translate-y-0.5" disabled={isLoading}>
          {isLoading ? (
             <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Logging in...
             </div>
          ) : (
             'Login'
          )}
        </Button>
        
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-white/10">
          <span className="relative z-10 bg-[#1b0e20] px-2 text-gray-400">
            Or continue with
          </span>
        </div>
         
      </form>
      <GoogleLogin/>
      <div className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" className="underline underline-offset-4 hover:text-[#D1C0EC] text-white">
          Sign up
        </Link>
      </div>
    </div>
  )
}
