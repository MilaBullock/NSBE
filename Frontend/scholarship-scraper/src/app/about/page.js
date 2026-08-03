import Hero from '../components/Hero';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="About" image="/brochure/2.png" subtitle="Learn more about our chapter." />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mission Statement</h2>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community</p>
        </div>
      </main>
    </div>
  );
}
