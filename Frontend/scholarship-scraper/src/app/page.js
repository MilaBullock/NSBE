import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />

        <Hero title="Penn State Chapter of the National Society of Black Engineers" image="/chicago-night.jpg">
          <div className="mt-12">
            <Link href="/gallery" className="inline-block bg-yellow-300 text-black font-semibold uppercase tracking-wider px-6 py-3 rounded shadow hover:opacity-90">View Gallery</Link>
          </div>
        </Hero>

        {/* spacer so page content starts below fixed navbar */}
        <div className="h-16 md:h-20" />

        <Footer />
      </div>
    </>
  );
}