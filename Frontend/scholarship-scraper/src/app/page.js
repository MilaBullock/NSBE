import Link from 'next/link';
import Footer from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-gradient-to-r from-blue-900 to-green-600 py-4 shadow-md">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/nsbe-logo.png"
              alt="NSBE Logo"
              width={60}
              height={60}
              className="drop-shadow-md"
            />

            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Penn State University <br className="hidden md:block" />
                <span className="text-yellow-300">National Society of Black Engineers</span>
              </h1>
              <p className="text-gray-200 text-sm md:text-base mt-1">
                Excellence, Innovation, and Impact in Engineering.
              </p>
            </div>
          </div>
        </header>

        <main
          className="flex flex-col flex-grow items-center justify-center px-6 min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/chicago-night.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        </main>

        <Footer />
      </div>
    </>
  );
}