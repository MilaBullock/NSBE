import Link from 'next/link';
import Hero from '../components/Hero';

export default function Gallery() {
  const images = [
    '/brochure/1.png',
    '/brochure/2.png',
    '/brochure/3.png',
    '/brochure/4.png',
    '/brochure/5.png',
    '/brochure/6.png',
    '/brochure/7.png',
    '/brochure/8.png',
    '/brochure/9.png',
    '/brochure/10.png',
    '/brochure/11.png',
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Hero title="Gallery" image="/brochure/1.png" subtitle="Photos and highlights from our chapter." />

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-4xl font-bold">Gallery</h2>
            <Link href="/" className="text-sm text-blue-600 hover:underline">Back to Home</Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((src) => (
              <div key={src} className="bg-white rounded shadow overflow-hidden">
                <img src={src} alt="gallery" className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
