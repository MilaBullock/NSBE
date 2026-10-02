import Hero from '../components/Hero';

export default function Membership() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="Membership" image="/brochure/3.png" subtitle="Join our chapter and get involved." heightClass="min-h-[45vh]" contentClass="relative z-10 flex items-center justify-center h-full pt-32 pb-0" />

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto py-6 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-black">How to Join</h2>
           <p className="text-gray-700 text-center"> To become a member of the Penn State Chapter of NSBE you have to pay dues.</p>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
            <div className="lg:w-1/2">
              <div className="flex justify-center gap-8 text-black">
                <div><span className="font-bold">Semester Dues:</span> $30 per year</div>
                <div><span className="font-bold">Yearly Dues:</span> $30 per year</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white rounded-lg shadow-sm p-3 text-center flex-1">
                  <img src="/extra/cashapp.jpg" alt="Cash App payment" className="w-full h-52 object-contain rounded-md mb-3" />
                  <p className="text-sm font-medium text-black">Cash App payment details</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-3 text-center flex-1">
                  <img src="/extra/zelle.jpg" alt="Zelle payment" className="w-full h-52 object-contain rounded-md mb-3" />
                  <p className="text-sm font-medium text-black">Zelle payment details</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a id="national-membership-link" href="#" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700">Become a National Member</a>
          </div>
        </div>
      </main>
    </div>
  );
}
