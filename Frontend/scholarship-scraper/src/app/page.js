import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />

        <main className="flex-grow">
          <Hero title="Penn State Chapter of the National Society of Black Engineers" image="/chicago-night.jpg">
            <div className="mt-12">
              <Link href="/gallery" className="inline-block bg-yellow-300 text-black font-semibold uppercase tracking-wider px-6 py-3 rounded shadow hover:opacity-90">View Gallery</Link>
            </div>
          </Hero>
        </main>

        <Footer />
      </div>
    </>
  );
}