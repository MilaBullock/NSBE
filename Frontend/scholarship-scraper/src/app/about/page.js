import Hero from '../components/Hero';
import { Montserrat } from 'next/font/google';
import ExecCard from '../components/ExecCard';

const mont = Montserrat({ subsets: ['latin'], weight: ['400', '600', '700'] });

const execBoard = [
  // Officers first: President, Vice President, Secretary, Treasurer
  { name: 'Claire Rawlins', position: 'President', major: 'Civil Engineering', year: '', linkedin: 'https://www.linkedin.com/in/claire-rawlins/', photo: '/nsbe-logo.png' },
  { name: 'Matthew Thomas', position: 'Vice President', major: 'Computer Engineering', year: '', linkedin: 'https://www.linkedin.com/in/matthewothomas/', photo: '/nsbe-logo.png' },
  { name: 'Amani Lett', position: 'Secretary', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/amani-lett-9080a0318/', photo: '/nsbe-logo.png' },
  { name: 'Sara Jones', position: 'Treasurer', major: 'Material Science and Engineering', year: '', linkedin: 'https://www.linkedin.com/in/sarajones15/', photo: '/nsbe-logo.png' },

  // Co-leads next
  { name: 'Jenniah Phillips', position: 'Co-Communications', major: 'Architecture', year: '', linkedin: '', photo: '/nsbe-logo.png' },
    { name: 'Mila Bullock', position: 'Co-Communications Chair', major: 'Computer Science', year: '', linkedin: 'https://www.linkedin.com/in/mila-bullock/', photo: '/E-Board Pics/Mila Headshot.jpg' },
  { name: "Ja'Quinn Morrison", position: 'CO-TORCH Chair', major: 'Electrical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/jam9762/', photo: '/nsbe-logo.png' },
  { name: 'Jaden Brown', position: 'CO-TORCH Chair', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/jaden-brown-6167a1341/', photo: '/nsbe-logo.png' },

  // Remaining chairs and officers
  { name: 'Amadou Lemons', position: 'Programs Chair', major: 'Aerospace Engineering', year: '', linkedin: 'https://www.linkedin.com/in/amadou-lemons-83664829a/', photo: '/nsbe-logo.png' },
  { name: 'Djenabou Diallo', position: 'Conference Planning Chair', major: 'Computer Science', year: '', linkedin: 'https://www.linkedin.com/in/djenabou-diallo-335491213/', photo: '/nsbe-logo.png' },
  { name: 'Marissa Shummette', position: 'Social Chair', major: 'Environmental Systems Engineering', year: '', linkedin: 'https://www.linkedin.com/in/marissa-shummette/', photo: '/nsbe-logo.png' },
  { name: 'Arianna Roland', position: 'Parliamentarian', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/arianna-roland-98010b322/', photo: '/nsbe-logo.png' },
  { name: 'Aaron Parks', position: 'Pre-Collegiate Initiative Chair', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/aaron-j-parks-a6623b289/', photo: '/nsbe-logo.png' },
  { name: 'Moriye Korode', position: 'Membership Chair', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/moriyekorode/', photo: '/nsbe-logo.png' },
  { name: 'Vanessa Mensah', position: 'Senator', major: 'Biomedical engineering', year: '', linkedin: 'https://www.linkedin.com/in/vanessa-mensah-754985324/', photo: '/nsbe-logo.png' },
  { name: 'Naeema Salau', position: 'Senator', major: 'Mechanical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/naeema-salau-764082283/', photo: '/nsbe-logo.png' },
  { name: 'Jayden Cook', position: 'Academic Excellence Chair', major: 'Biomedical Engineering', year: '', linkedin: 'https://www.linkedin.com/in/jayden-cook-1a509b318/', photo: '/nsbe-logo.png' },
  { name: 'Chadwick (CJ) Giles', position: 'Finance Chair', major: 'Engineering Science', year: '', linkedin: 'https://www.linkedin.com/in/chadwick-giles-54000a325/', photo: '/nsbe-logo.png' }
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Hero title="About" image="/brochure/2.png" subtitle="Learn more about our chapter." heightClass="min-h-[45vh]" contentClass="relative z-10 flex items-center justify-center h-full pt-32 pb-0" fontClass={mont.className} />

      <main className="flex-grow">
        <div className="w-full max-w-6xl mx-auto py-8 px-2 text-center">
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-black ${mont.className}`}>Who We Are</h2>
          <p className="text-black text-lg md:text-xl leading-relaxed w-full px-2">
            The Penn State Chapter of the National Society of Black Engineers (NSBE) is a student-led organization dedicated to supporting 
            students pursuing careers in engineering, technology, and related STEM fields. Our chapter provides opportunities for professional 
            growth, academic success, leadership development, and meaningful community engagement. Through workshops, networking events, mentorship,
            conferences, and service initiatives, we strive to build a supportive community where members can excel both inside and outside the classroom.
            Whether you are just beginning your engineering journey or preparing for your career, NSBE is a place to connect, grow, and lead.</p>
          
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 mt-8 text-black ${mont.className}`}>Mission Statement</h2>
          <p className="text-black text-lg md:text-xl leading-relaxed w-full px-2 mt-2">To increase the number of culturally responsible Black engineers who excel academically, succeed professionally, and positively impact the community</p>

          <section className="mt-10 text-center">
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 text-black ${mont.className}`}>Executive Board</h3>
            <div className="flex flex-col gap-6">
              {Array.from({ length: Math.ceil(execBoard.length / 5) }, (_, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
                  {execBoard.slice(rowIndex * 5, rowIndex * 5 + 5).map((m, idx) => (
                    <ExecCard key={`${rowIndex}-${idx}`} photo={m.photo} name={m.name} position={m.position} major={m.major} year={m.year} linkedin={m.linkedin} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
