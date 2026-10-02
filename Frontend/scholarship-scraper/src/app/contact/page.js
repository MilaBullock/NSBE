import Hero from '../components/Hero';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="Contact" image="/brochure/6.png" subtitle="Get in touch with chapter officers." heightClass="min-h-[45vh]" contentClass="relative z-10 flex items-center justify-center h-full pt-32 pb-0" />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <div className="flex justify-center gap-4 mb-6">
            <a id="contact-linkedin" href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md font-semibold">LinkedIn</a>
            <a id="contact-tiktok" href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md font-semibold">TikTok</a>
            <a id="contact-instagram" href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-pink-500 text-white rounded-md font-semibold">Instagram</a>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700">Contact the chapter officers here. Add email addresses or a contact form.</p>
        </div>
      </main>
    </div>
  );
}
