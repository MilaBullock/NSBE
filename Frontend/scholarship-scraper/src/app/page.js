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

        </main>

        <Footer />
      </div>
    </>
  );
}