"use client";
import { useState ,useEffect} from "react";
import { Menu } from "lucide-react";
import { Cancel, Close } from "@mui/icons-material";
import Link from "next/link";
import { createClient } from "@/lib/client";

export default  function Header() {
  const [open, setOpen] = useState(false);
  const [session, setSession] = useState(null);

  const supabase = createClient();
    useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    getSession();

    // Listen for auth changes (login/logout)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full p-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center bg-[#1a1a1a]/80 backdrop-blur-md rounded justify-between px-6 py-4">
          <div className="text-xl text-[#8f48ec] font-bold">Textcognito</div>

          {/* Desktop Links */}
          <nav className="hidden gap-8 md:flex items-center">
            <Link href="#" className="hover:text-gray-300">Home</Link>
            {session ? (
              <>
                <Link href="/profile" className="hover:text-gray-300">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded bg-[#8f48ec] px-4 py-2 text-sm hover:opacity-90"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="hover:text-gray-300">
                  Login
                </Link>
                <Link
                  href="/auth/sign-up"
                  className="rounded bg-[#8f48ec] px-4 py-2 text-sm hover:opacity-90"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>

          {/* Hamburger */}
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
              className="text-2xl text-[#8f48ec]"
            >
              Get Started
            </Link>
          </>
        )}
         
      </div>
    </>
  );
}
