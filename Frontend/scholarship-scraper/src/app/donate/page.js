import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Donate() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Donate</h1>
        <p className="text-gray-700">Support the chapter by donating. Add payment details or links here.</p>
      </main>

      <Footer />
    </div>
  );
}
