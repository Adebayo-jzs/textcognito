"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/client";
import { useRouter } from 'next/navigation';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const pathname = usePathname();
  const [profile, setProfile] = useState(null);
  const supabase = createClient();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      if (data.session?.user) {
        const { data: userProfile } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', data.session.user.id)
          .single();
        
        if (userProfile) setProfile(userProfile);
      }
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    setOpen(false);
  };

  const hideNavbar = pathname.startsWith("/register") || pathname.startsWith("/login");

  return (
    <>
      <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${hideNavbar ? "hidden" : ""} ${scrolled ? "bg-[#1a191b]/80 backdrop-blur-xl border-b border-white/5 py-3" : "py-5 bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#D1C0EC] to-[#8D77A8] flex items-center justify-center text-[#1b0e20] font-bold text-lg shadow-lg shadow-[#8D77A8]/20 group-hover:shadow-[#8D77A8]/40 transition-all">
              T
            </div>
            <span className="text-xl font-bold text-white tracking-tight">TextCognito</span> */}
            <img src="/txtlogo.png" alt="" width={150}/>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-[#44334A]/30 p-1 rounded-full border border-white/5 backdrop-blur-md">
            {[
              { name: 'Home', path: '/' },
              ...(session ? [
                { name: 'Profile', path: '/profile' },
                { name: 'Messages', path: '/messages' }
              ] : [
                { name: 'About', path: '/about' },
                // { name: 'Pricing', path: '/pricing' } // Assuming a pricing page exists or will exist
              ])
            ].map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  pathname === link.path
                    ? "bg-[#D1C0EC] text-[#1b0e20] shadow-md shadow-[#D1C0EC]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {session ? (
              <div className="flex items-center gap-4">
                 <div className="flex items-center gap-3 pl-1 pr-3 py-1 bg-[#44334A]/50 rounded-full border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8D77A8] to-[#C4ADDD] flex items-center justify-center text-xs font-bold text-[#1b0e20]">
                      {profile?.username?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <span className="text-sm font-medium text-white">{profile?.username}</span>
                 </div>
                 <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Logout
                 </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors px-4 py-2">
                  Log in
                </Link>
                <Link href="/register" className="px-5 py-2.5 rounded-xl bg-[#D1C0EC] text-[#1b0e20] text-sm font-bold hover:bg-[#C4ADDD] transition-all   hover:-translate-y-0.5">
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#1b0e20]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
         <div className="flex flex-col items-center gap-6 w-full px-8">
            <Link href="/" onClick={() => setOpen(false)} className="text-2xl font-bold text-white">Home</Link>
            {session ? (
              <>
                <Link href="/profile" onClick={() => setOpen(false)} className="text-2xl font-bold text-white">Profile</Link>
                <Link href="/messages" onClick={() => setOpen(false)} className="text-2xl font-bold text-white">Messages</Link>
                <button onClick={handleLogout} className="text-xl text-red-400 mt-4">Logout</button>
              </>
            ) : (
              <>
                <Link href="/about" onClick={() => setOpen(false)} className="text-2xl font-bold text-white">About</Link>
                <Link href="/login" onClick={() => setOpen(false)} className="text-2xl font-bold text-white">Log in</Link>
                <Link href="/register" onClick={() => setOpen(false)} className="w-full max-w-xs py-4 rounded-2xl bg-[#D1C0EC] text-[#1b0e20] text-center font-bold text-xl">Get Started</Link>
              </>
            )}
         </div>
      </div>
    </>
  );
}
