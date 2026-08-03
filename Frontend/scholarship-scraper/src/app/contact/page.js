import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-gray-700">Contact the chapter officers here. Add email addresses or a contact form.</p>
      </main>

      <Footer />
    </div>
  );
}
