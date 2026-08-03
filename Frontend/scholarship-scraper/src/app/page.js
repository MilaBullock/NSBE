import Link from 'next/link';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <Hero title="Penn State Chapter of the National Society of Black Engineers" image="/chicago-night.jpg">
        <div className="mt-12">
          <Link href="/gallery" className="inline-block bg-yellow-300 text-black font-semibold uppercase tracking-wider px-6 py-3 rounded shadow hover:opacity-90">View Gallery</Link>
        </div>
      </Hero>

      {/* Optional homepage content area */}
      <section className="max-w-6xl mx-auto py-8 px-4">
        <p className="text-gray-700">Welcome to the Penn State Chapter of NSBE. Use this area to add a short intro or featured links.</p>
      </section>
    </>
  );
}