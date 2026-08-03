import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow">
        <Hero title="About" image="/brochure/2.png" subtitle="Learn more about our chapter." />

        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700">This is the About page for the Penn State Chapter of NSBE. Add chapter info here.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
