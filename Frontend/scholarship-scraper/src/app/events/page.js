import Hero from '../components/Hero';
import InstagramFeed from '../components/InstagramFeed';

export const dynamic = 'force-dynamic';

export default async function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="Events" image="/brochure/7.png" subtitle="Upcoming chapter events, activities and conference announcements." heightClass="min-h-[45vh]" contentClass="relative z-10 flex items-start justify-center h-full pt-32 pb-8">
        <a id="calendar-link" href="#" target="_blank" rel="noopener noreferrer" className="mt-6 mb-6 inline-block bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700">View Calendar</a>
      </Hero>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center mx-auto max-w-3xl">
        
            
          </div>

          <InstagramFeed />
        </div>
      </main>
    </div>
  );
}
