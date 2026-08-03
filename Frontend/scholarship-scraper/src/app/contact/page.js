import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <Hero title="Contact" image="/brochure/6.png" subtitle="Get in touch with chapter officers." />

        <main className="max-w-4xl mx-auto py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">Contact the chapter officers here. Add email addresses or a contact form.</p>
        </main>
      </main>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700">Contact the chapter officers here. Add email addresses or a contact form.</p>
      </main>

      <Footer />
    </div>
  );
}
