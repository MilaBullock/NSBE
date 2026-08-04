import Hero from '../components/Hero';
import InstagramFeed from '../components/InstagramFeed';

export const dynamic = 'force-dynamic';

export default async function Events() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="Events" image="/brochure/7.png" subtitle="Upcoming chapter events, activities and conference announcements." heightClass="min-h-[40vh] md:min-h-[48vh]" />

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
