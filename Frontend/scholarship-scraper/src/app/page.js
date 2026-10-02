import Link from 'next/link';
import Hero from './components/Hero';

export default function Home() {
  return (
    <Hero title="Penn State Chapter of the National Society of Black Engineers" image="/chicago-night.jpg" heightClass="min-h-[calc(100vh-4rem)]" contentClass="relative z-10 flex items-center justify-center h-full pt-32 pb-0">
      <div>
        <p className="text-gray-200">Add short welcome message here.</p>
      </div>
      <div className="mt-12">
        <Link href="/gallery" className="inline-block bg-yellow-300 text-black font-semibold uppercase tracking-wider px-6 py-3 rounded shadow hover:opacity-90">View Gallery</Link>
      </div>
    </Hero>
  );
}