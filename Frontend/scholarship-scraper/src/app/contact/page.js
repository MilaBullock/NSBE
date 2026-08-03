import Hero from '../components/Hero';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="Contact" image="/brochure/6.png" subtitle="Get in touch with chapter officers." />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">Contact the chapter officers here. Add email addresses or a contact form.</p>
        </div>
      </main>
    </div>
  );
}
