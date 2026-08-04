"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 py-12 text-center">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-bold">Oops</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">An unexpected error occurred while loading this page. Please try refreshing or return to the homepage.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-400"
          >
            Refresh page
          </button>
          <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
