import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <Hero title="Donate" image="/brochure/5.png" subtitle="Support our chapter" />

      <div className="h-16 md:h-20" />

      <main className="flex-grow max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Donate</h2>
        <p className="text-gray-700">Support the chapter by donating. Add payment details or links here.</p>
      </main>

      <Footer />
    </div>
  );
}
