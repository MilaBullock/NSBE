import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <main className="flex-grow max-w-4xl mx-auto py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">About</h1>
        <p className="text-gray-700">This is the About page for the Penn State Chapter of NSBE. Add chapter info here.</p>
      </main>

      <Footer />
    </div>
  );
}
