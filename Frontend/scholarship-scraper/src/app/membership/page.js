import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Membership</h1>
        <p className="text-gray-700">Information about joining the chapter, dues, and benefits.</p>
      </main>

      <Footer />
    </div>
  );
}
