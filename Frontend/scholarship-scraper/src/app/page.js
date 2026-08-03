import Link from 'next/link';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />

        <main
          className="flex flex-col flex-grow items-center justify-center px-6 min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/chicago-night.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

          <div className="z-10 w-full max-w-3xl text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Penn State Chapter of the National Society of Black Engineers
            </h1>

            <div className="mt-6">
              <Link href="/gallery" className="inline-block bg-yellow-300 text-black font-semibold uppercase tracking-wider px-6 py-3 rounded shadow hover:opacity-90">View Gallery</Link>
            </div>
          </div>

        </main>

        <Footer />
      </div>
    </>
  );
}