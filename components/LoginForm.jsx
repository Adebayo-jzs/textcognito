'use client'

import { cn } from '@/lib/utils'
import { createClient } from '@/lib/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Loader2,Check } from 'lucide-react'
import { Google } from "@mui/icons-material"
import { GoogleLogin } from './google-signin'
import { HugeiconsIcon } from '@hugeicons/react'
// import { Eye,EyeOff } from '@hugeicons/core-free-icons/index'
import { ViewOffSlashIcon,ViewIcon,Checkmark } from '@hugeicons/core-free-icons/index'

export function NewLoginForm({
  className,
  ...props
}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false) 
    const [passwordVisible, setPasswordVisible] = useState(false);
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
     


    // Function to toggle the password visibility state
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <section className="min-h-screen w-full flex ">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 justify-center relative bg-[#1a191b]">
                {/* Logo */}
                <Link href={"/"}>
                <div className="absolute top-6 left-8 md:left-12 lg:left-16 flex items-center gap-2">
                    {/* <div className="w-8 h-8 bg-gradient-to-br from-[#D1C0EC] to-[#8D77A8] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#1b0e20] rounded-full"></div>
                    </div> */}
                    <img src="/txtlogo.png" alt="" width={150}/>
                </div>
                </Link>

                {/* <div className={cn("flex flex-col gap-6", className)} {...props}> */}
                <div className="max-w-md w-full mx-auto mt-12 lg:mt-5">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold tracking-tight text-white">Welcome back</h1>
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
                        <div className="grid gap-2 relative">
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
                            type={passwordVisible ? "text" : "password"}
                            required
                            className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <HugeiconsIcon icon={passwordVisible ? ViewIcon : ViewOffSlashIcon} size={23} onClick={togglePasswordVisibility} className='absolute bottom-3 right-3 cursor-pointer' />
                        </div>
                        
                        {error && (
                        <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                            {error}
                        </div>
                        )}

                        <Button type="submit" className="w-full bg-[#D1C0EC] hover:bg-[#C4ADDD] text-[#1b0e20] font-bold h-12 rounded-xl transition-all hover:-translate-y-0.5" disabled={isLoading}>
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
                    <div className="text-center text-sm text-gray-400 mt-4">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="underline underline-offset-4 hover:text-[#D1C0EC] text-white">
                        Sign up
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-[#121212] relative items-center justify-center p-12 overflow-hidden border-l border-white/5">
                 <div className="relative z-10 max-w-lg w-full">
                    <div className="bg-[#1a191b] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Join the Community</h3>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                TextCognito is being built by a solo developer leveraging AI to create meaningful, safe, and beautifully designed products. No massive team — just a deep passion for building things that matter.
                            </p>
                        </div>
                        <Link href="https://theebayo.name.ng">
                        <div className="flex items-center gap-5">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#D1C0EC] to-[#8D77A8] flex items-center justify-center text-[#1b0e20] font-bold text-xl">
                                AA
                            </div>
                            <div>
                                <div className="text-white font-bold flex items-center gap-2 text-lg">
                                    Adebayo Adedeji
                                    <div className="w-5 h-5 rounded-full bg-[#D1C0EC] flex items-center justify-center">
                                        {/* <Check className="w-3 h-3 text-[#1b0e20]" /> */}
                                        <HugeiconsIcon icon={Checkmark} className="w-3 h-3 text-[#1b0e20]"/>
                                    </div>
                                </div>
                                <div className="text-sm text-gray-400">Software Developer</div>
                            </div>
                        </div>
                        </Link>

                        <div className="mt-10 pt-8 border-t border-white/5">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex -space-x-3">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-10 h-10 rounded-full bg-[#2a2a2a] border-2 border-[#1b0e20] flex items-center justify-center text-[10px] text-white">
                                           {/* Avatars would go here */}
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm text-gray-400">
                                    Joined by <span className="text-[#D1C0EC] font-bold">5+</span> users
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
    );
}
