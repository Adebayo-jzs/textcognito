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

export default function NewRegisterpage() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
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
            
            router.push('/auth/login')
        } catch (error) {
            setError(error instanceof Error ? error.message : 'An error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="min-h-screen w-full flex bg-[#0a080c]">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 justify-center relative bg-[#0a080c]">
                {/* Logo */}
                <div className="absolute top-8 left-8 md:left-12 lg:left-16 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#8f48ec] to-[#a855f7] rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-bold text-xl">TextCognito</span>
                </div>

                <div className="max-w-md w-full mx-auto mt-12 lg:mt-0">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-white mb-3">Create an account</h1>
                        <p className="text-gray-400">Sign up to start receiving anonymous messages.</p>
                    </div>

                    <div className="mb-8">
                        <Button variant="outline" className="w-full h-12 bg-[#1a1a1a] border-white/10 text-white hover:bg-[#252525] hover:text-white flex items-center gap-2 rounded-xl">
                            <Google fontSize="small" />
                            Continue with Google
                        </Button>
                    </div>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0a080c] px-2 text-gray-500">Or continue with email</span>
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
                                className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#8f48ec] focus-visible:border-[#8f48ec] h-12 rounded-xl"
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
                                className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#8f48ec] focus-visible:border-[#8f48ec] h-12 rounded-xl"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-gray-300 ml-1">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#8f48ec] focus-visible:border-[#8f48ec] h-12 rounded-xl"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        
                        <div className="space-y-2">
                            <Label htmlFor="repeat-password" className="text-gray-300 ml-1">Repeat Password</Label>
                            <Input
                                id="repeat-password"
                                type="password"
                                placeholder="••••••••"
                                required
                                className="bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-[#8f48ec] focus-visible:border-[#8f48ec] h-12 rounded-xl"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)} 
                            />
                        </div>

                        {error && (
                            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <Button 
                            type="submit" 
                            className="w-full bg-[#8f48ec] hover:bg-[#7b3bd1] text-white font-bold h-12 text-base rounded-full mt-4 transition-all shadow-lg shadow-[#8f48ec]/20" 
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

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Don't have an account?{' '}
                        <Link href="/auth/login" className="text-[#8f48ec] hover:text-[#a865f0] font-bold hover:underline transition-colors">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Side - Visual */}
            <div className="hidden lg:flex w-1/2 bg-[#0a080c] relative items-center justify-center p-12 overflow-hidden border-l border-white/5">
                 {/* Background Elements */}
                 <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#8f48ec]/5 via-[#0a080c] to-[#0a080c]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8f48ec] rounded-full blur-[150px] opacity-10"></div>
                 
                 {/* Content */}
                 <div className="relative z-10 max-w-lg w-full">
                    <div className="bg-[#121016]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 shadow-2xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Join the Community</h3>
                            <p className="text-gray-400 leading-relaxed">
                                "TextCognito has completely transformed how I connect with friends. The anonymity features are robust and the interface is beautiful."
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#8f48ec] to-[#a855f7] flex items-center justify-center text-white font-bold text-lg">
                                JD
                            </div>
                            <div>
                                <div className="text-white font-bold flex items-center gap-2">
                                    John Doe
                                    <div className="w-4 h-4 rounded-full bg-[#8f48ec] flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">Early Adopter</div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/5">
                            <div className="flex items-center gap-2 justify-between">
                                <div className="flex -space-x-3">
                                    {[1,2,3].map(i => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-[#2a2a2a] border-2 border-[#121016] flex items-center justify-center text-[10px] text-white">
                                           
                                        </div>
                                    ))}
                                </div>
                                <div className="text-xs text-gray-400">
                                    Joined by <span className="text-[#8f48ec] font-bold">500,000+</span> users
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Floating Mockup (Optional, positioned behind or around) */}
                 <div className="absolute -bottom-20 -right-20 opacity-20 transform rotate-12 bg-black border border-white/10 rounded-3xl p-4 w-96 h-96 blur-sm pointer-events-none"></div>
            </div>
        </section>
    );
}