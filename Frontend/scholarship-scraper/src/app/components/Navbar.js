"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-montserrat" });

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className={`flex items-center gap-3 ${mont.className}`} aria-label="Home">
          <Image src="/nsbe-logo.png" alt="NSBE Logo" width={48} height={48} className="drop-shadow-md" />
        </Link>

        <nav className={`hidden md:flex items-center gap-6 ${mont.className}`}>
          <Link href="/" className="font-bold uppercase tracking-widest hover:underline">Home</Link>
          <Link href="/about" className="font-bold uppercase tracking-widest hover:underline">About</Link>
          <Link href="/membership" className="font-bold uppercase tracking-widest hover:underline">Membership</Link>
          <Link href="/donate" className="font-bold uppercase tracking-widest hover:underline">Donate</Link>
          <Link href="/contact" className="font-bold uppercase tracking-widest hover:underline">Contact</Link>
          <Link href="/events" className="font-bold uppercase tracking-widest hover:underline">Events</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen((s) => !s)} aria-label="Toggle menu" className="p-2">
            {/* simple hamburger icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className={`md:hidden bg-black/95 px-4 pb-4 ${mont.className}`}>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="block py-2 font-bold uppercase tracking-widest">Home</Link>
            <Link href="/about" className="block py-2 font-bold uppercase tracking-widest">About</Link>
            <Link href="/membership" className="block py-2 font-bold uppercase tracking-widest">Membership</Link>
            <Link href="/donate" className="block py-2 font-bold uppercase tracking-widest">Donate</Link>
            <Link href="/contact" className="block py-2 font-bold uppercase tracking-widest">Contact</Link>
            <Link href="/events" className="block py-2 font-bold uppercase tracking-widest">Events</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
