'use client'

import { cn } from '@/lib/utils'
import { createClient } from '@/lib/client'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useState } from 'react'

export function GoogleLogin({ className, ...props }) {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSocialLogin = async (e) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/oauth?next=/protected`,
        },
      })

      if (error) throw error
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred')
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-6 mt-5', className)} {...props}>
       
          <form onSubmit={handleSocialLogin}>
            <div className="flex flex-col gap-6">
              {error && <p className="text-sm text-destructive-500">{error}</p>}
              <Button type="submit" className="w-full h-12 bg-[#44334A]/30 border-white/10 text-white hover:bg-[#44334A]/50 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2" disabled={isLoading}>
                <Image src={"/google.png"}  width={20} height={20} alt=""/>
                {isLoading ? 'Logging in...' : 'Continue with Google'}
              </Button>
            </div>
          </form>
        
    </div>
  )
}