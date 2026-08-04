import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white px-6 py-12 text-center">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-slate-900/90 p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">Page not found</p>
        <h1 className="mt-4 text-4xl font-bold">404</h1>
        <p className="mt-4 text-base leading-8 text-slate-300">The page you were looking for does not exist. Use the navigation above to return to a valid page.</p>
        <Link href="/" className="mt-8 inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-400">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
