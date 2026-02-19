"use client";
import { useState ,useEffect} from "react";
import { Menu } from "lucide-react";
import { Cancel, Close } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/client";
import { useRouter } from 'next/navigation'

export default  function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);
  const pathname = usePathname();
  const [profile, setProfile] = useState(null);
  const supabase = createClient();
  const router = useRouter()
    useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);

      if (data.session?.user) {
        const { data: userProfile, error } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', data.session.user.id) // Use data.session.user.id
          .single();
        
        if (userProfile) {
          setProfile(userProfile);
        }
      }
    };

    getSession();

    // Listen for auth changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      // if (session?.user) {
      //   const { data: userProfile } = await supabase
      //     .from('profiles')
      //     .select('username')
      //     .eq('id', session.user.id)
      //     .single();
      //   setProfile(userProfile);
      // } else {
      //   setProfile(null); // Clear profile on logout
      // }
    });

    return () => subscription.unsubscribe();
  }, [supabase]);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login')
    setOpen(false);
  };
  // const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/register");

  return (
    <>
      {/* Navbar */}
      <header className={`fixed top-0 left-0 z-50 w-full  p-4 text-white ${hideNavbar ? "hidden":""}`}>  
        {/* <div className="mx-auto flex  max-w-7xl items-center bg-[#1a1a1a]/80 backdrop-blur-md rounded justify-between px-6 py-4"> */}
        <div className={`mx-auto flex  max-w-7xl items-center  rounded justify-between px-6 py-4 ${open ? "" : "bg-[#1a1a1a]/80 backdrop-blur-md"}`}>
          {/* <div className="text-xl text-[#8f48ec] font-bold">Textcognito</div> */}

          {/* Desktop Links */}
          <nav className="hidden w-full justify-between gap-8 md:flex items-center">
            <div className="text-xl text-[#8f48ec]  font-bold" style={{width:"215px"}}>Textcognito</div>
            <div className="hidden  md:flex items-center gap-1 bg-[#1a1a1a]/50 p-1 rounded-full border border-white/5 transition-all">
            <Link href="/" className={`px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-transparent transition-all   ${
            pathname === "/"
              ? "bg-[#8f48ec]/10 border-[#8f48ec]/20 "
              : "hover:bg-white/5 hover:text-white"
            }`}>
              Home
            </Link>
            {session ? (
              <>
              <Link href="/profile" className={`px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-transparent transition-all   ${
                  pathname === "/profile"
                    ? "bg-[#8f48ec]/10 border-[#8f48ec]/20 "
                    : "hover:bg-white/5 hover:text-white"
                  }`}>
                    Profile
                </Link>
                <Link href="/messages" className={`px-4 py-2 rounded-full text-sm font-medium text-gray-400  border border-transparent transition-all   ${
                  pathname === "/messages"
                    ? "bg-[#8f48ec]/10 border-[#8f48ec]/20 "
                    : "hover:bg-white/5 hover:text-white"
                  }`}>
                    Messages
                </Link>
              </>
            ) : (
              <>
                <Link href="/about" className={`px-4 py-2 rounded-full text-sm font-medium text-gray-400 border border-transparent transition-all   ${
                  pathname === "/about"
                    ? "bg-[#8f48ec]/10 border-[#8f48ec]/20 "
                    : "hover:bg-white/5 hover:text-white"
                  }`}>
                    About
                </Link>
                <Link href="/auth/login" className={`px-4 py-2 rounded-full text-sm font-medium text-gray-400  border border-transparent transition-all   ${
                  pathname === "/auth/login"
                    ? "bg-[#8f48ec]/10 border-[#8f48ec]/20 "
                    : "hover:bg-white/5 hover:text-white"
                  }`}>
                    Login
                </Link>
                 
              </>
            )}
            </div>
            <div>
              {session ? ( 
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 pl-4 pr-2 py-1.5 bg-[#1a1a1a] rounded-full border border-white/5 hover:border-[#8f48ec]/30 transition-colors cursor-pointer group">
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                      {profile?.username  }
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:bg-[#8f48ec] group-hover:text-white transition-colors">
                      {profile?.username?.[0].toUpperCase() || 'U'}
                    </div>
                  </div>
                  <button
                  onClick={handleLogout}
                  className="rounded bg-[#8f48ec] px-4 py-2 text-sm hover:opacity-90"
                >
                  Logout
                </button>
              </div> 
            ) : (
              <>
                {/* <Link href="/auth/login" className="hover:text-gray-300">
                  Login
                </Link> */}
                <Link
                  href="/auth/sign-up"
                  className="rounded bg-[#8f48ec] px-4 py-2 text-sm hover:opacity-90"
                >
                  Get Started
                </Link>
              </>
            )}
            </div>
          </nav>

          {/* Hamburger */}
          <div className="text-xl text-[#8f48ec] font-bold md:hidden">Textcognito</div>
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open?<Close/>: <Menu/> }
            {/* <span className="h-[3px] w-6 bg-white"></span>
            <span className="h-[3px] w-6 bg-white"></span>
            <span className="h-[3px] w-6 bg-white"></span> */}
          </button>
        </div>
      </header> 

      {/* Fullscreen Mobile Menu */}
      <div
         className={`
          fixed inset-0 z-40 bg-[#1a1a1a]/80 backdrop-blur-md text-white
          flex flex-col items-center justify-center gap-10 m-4 rounded 
          origin-top-right transform transition-transform duration-500 ease-in-out
          ${open ? "scale-100" : "scale-0"}
          md:hidden
        `}
      >
        <Link href="/" onClick={() => setOpen(false)} className="text-2xl">Home</Link>
      {session ? (
          <>
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              Profile
            </Link>
            <Link
              href="/messages"
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              Messages
            </Link>
            <button
              onClick={handleLogout}
              className="text-2xl text-red-400"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="text-2xl"
            >
              Login
            </Link>
            <Link
              href="/auth/sign-up"
              onClick={() => setOpen(false)}
              className="text-2xl text-[#8f48ec] "
            >
              Get Started
            </Link>
          </>
        )}
         
      </div>
    </>
  );
}
