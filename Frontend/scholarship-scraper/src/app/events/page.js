import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <Hero title="Events" image="/brochure/7.png" subtitle="Upcoming chapter events and activities." />

        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Events</h2>
          <p className="text-gray-700">List upcoming chapter events here.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
