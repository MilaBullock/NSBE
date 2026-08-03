import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <Hero title="Membership" image="/brochure/3.png" subtitle="Join our chapter and get involved." />

      <div className="h-16 md:h-20" />

      <main className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Membership</h2>
        <p className="text-gray-700">Information about joining the chapter, dues, and benefits.</p>
      </main>

      <Footer />
    </div>
  );
}
