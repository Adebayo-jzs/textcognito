"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Cancel, Close } from "@mui/icons-material";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full p-4 text-white">
        <div className="mx-auto flex max-w-7xl items-center bg-[#1a1a1a]/80 backdrop-blur-md rounded justify-between px-6 py-4">
          <div className="text-xl text-[#8f48ec] font-bold">Textcognito</div>

          {/* Desktop Links */}
          <nav className="hidden gap-8 md:flex">
            <Link href="#" className="hover:text-gray-300">Home</Link>
            <Link href="/auth/login" className="hover:text-gray-300">About</Link>
            <Link href="/auth/login" className="hover:text-gray-300">Projects</Link>
            <Link href="#" className="hover:text-gray-300">Contact</Link>
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
        <Link href="#" onClick={() => setOpen(false)} className="text-2xl">Home</Link>
        <Link href="#" onClick={() => setOpen(false)} className="text-2xl">About</Link>
        <Link href="#" onClick={() => setOpen(false)} className="text-2xl">Projects</Link>
        <Link href="#" onClick={() => setOpen(false)} className="text-2xl">Contact</Link>
      </div>
    </>
  );
}
