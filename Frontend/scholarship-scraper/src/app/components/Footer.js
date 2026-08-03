"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-green-600 text-white py-4 text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Penn State NSBE. All rights reserved.</p>
      </div>
    </footer>
  );
}
