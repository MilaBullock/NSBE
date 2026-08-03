"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-green-600 text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/nsbe-logo.png" alt="NSBE Logo" width={48} height={48} className="drop-shadow-md" />
          <span className="font-bold text-lg">Penn State NSBE</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/membership" className="hover:underline">Membership</Link>
          <Link href="/donate" className="hover:underline">Donate</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/events" className="hover:underline">Events</Link>
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
        <div className="md:hidden bg-blue-800/80 px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <Link href="/" className="block py-2">Home</Link>
            <Link href="/about" className="block py-2">About</Link>
            <Link href="/membership" className="block py-2">Membership</Link>
            <Link href="/donate" className="block py-2">Donate</Link>
            <Link href="/contact" className="block py-2">Contact</Link>
            <Link href="/events" className="block py-2">Events</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
