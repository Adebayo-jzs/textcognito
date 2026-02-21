'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from "next/link";
import Mockup from "@/components/mockup";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/client';
import { Loader2, Check } from 'lucide-react';
import { Google } from "@mui/icons-material";
import { GoogleLogin } from '@/components/google-signin';
import { HugeiconsIcon } from '@hugeicons/react' 
import { ViewOffSlashIcon,ViewIcon , CheckCheck, CheckUnread01FreeIcons, Checkmark } from '@hugeicons/core-free-icons/index'    

export default function NewRegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false) 
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter()

    const handleSignUp = async (e) => {
        e.preventDefault()
        const supabase = createClient()
        setIsLoading(true)
        setError(null)
    
        if (password !== repeatPassword) {
            setError('Passwords do not match')
            setIsLoading(false)
            return
        }
    
        try {
            const { data: existingUser, error: usernameError } = await supabase
                .from('profiles')
                .select('id')
                .eq('username', username)
                .maybeSingle()
    
            if (usernameError) throw usernameError
    
            if (existingUser) {
                setError('Username already exists')
                setIsLoading(false)
                return
            }
            
            const { data, error: authError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: { username },
                    emailRedirectTo: `${window.location.origin}/protected`,
                },
            })
    
            if (authError) {
                setError(authError.message)
                setIsLoading(false)
                return
            }
            
            router.push('/login')
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    // Function to toggle the password visibility state
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <section className="min-h-screen w-full flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 justify-center relative bg-[#1a191b]">
                {/* Logo */}
                <Link href={"/"}>
                <div className="absolute top-6 left-8 md:left-12 lg:left-16 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#D1C0EC] to-[#8D77A8] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#1b0e20] rounded-full"></div>
                    </div>
                    <img src="/txtlogo.png" alt="" width={150}/>
                </div>
                </Link>

                <div className="max-w-md w-full mx-auto mt-12 lg:mt-5">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-3 tracking-tight">Create an account</h1>
                        <p className="text-gray-400">Sign up to start receiving anonymous messages.</p>
                    </div>

                    {/* <div className="mb-8">
                        <Button variant="outline" className="w-full h-12 bg-[#44334A]/30 border-white/10 text-white hover:bg-[#44334A]/50 hover:text-white flex items-center gap-2 rounded-xl transition-all">
                            <Google fontSize="small" />
                            Continue with Google
                        </Button>
                    </div> */}
                    <GoogleLogin/>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#1b0e20] px-2 text-gray-500">Or continue with email</span>
                        </div>
                    </div>
                    
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-gray-300 ml-1">Username</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="slickhumanity"
                                required
                                className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-300 ml-1">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="name@company.com"
                                required
                                className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        
                        <div className="grid gap-2 relative">
                            <Label htmlFor="password" className="text-gray-300 ml-1">Password</Label>
                            <Input
                                id="password"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <HugeiconsIcon icon={passwordVisible ? ViewIcon : ViewOffSlashIcon} size={23} onClick={togglePasswordVisibility} className='absolute bottom-3 right-3 cursor-pointer' />
                        </div>
                        
                        <div className="grid gap-2 relative">
                            <Label htmlFor="repeat-password" className="text-gray-300 ml-1">Repeat Password</Label>
                            <Input
                                id="repeat-password"
                                type={passwordVisible ? "text" : "password"}
                                placeholder="••••••••"
                                required
                                className="bg-[#44334A]/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#D1C0EC] focus-visible:border-[#D1C0EC] h-12 rounded-xl transition-all"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)} 
                            />
                            <HugeiconsIcon icon={passwordVisible ? ViewIcon : ViewOffSlashIcon} size={23} onClick={togglePasswordVisibility} className='absolute bottom-3 right-3 cursor-pointer' />
                        </div>

                        {error && (
                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <Button 
                            type="submit" 
                            className="w-full bg-[#D1C0EC] hover:bg-[#C4ADDD] text-[#1b0e20] font-bold h-12 text-base rounded-xl mt-4 transition-all  hover:-translate-y-0.5" 
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating account...
                                </>
                            ) : (
                                'Sign Up'
                            )}
                        </Button>
                    </form>

                    <div className="text-center text-sm text-gray-400 mt-4">
                        Already have an account?{" "}
                        <Link href="/login" className="underline underline-offset-4 hover:text-[#D1C0EC] text-white">
                        Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-[#121212] relative items-center justify-center p-12 overflow-hidden border-l border-white/5">
                 {/* Background Elements */}
                 {/* <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#8D77A8]/10 via-[#1b0e20] to-[#1b0e20]"></div> */}
                 {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8D77A8] rounded-full blur-[180px] opacity-10"></div> */}
                 
                 {/* Content */}
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