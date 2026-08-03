"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Penn State NSBE. All rights reserved.</p>
      </div>
    </footer>
  );
}
