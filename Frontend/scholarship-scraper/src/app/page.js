import Link from 'next/link';
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  GraduationCap,
  HeartHandshake,
  UsersRound,
} from 'lucide-react';
import Hero from './components/Hero';

const pathways = [
  {
    icon: UsersRound,
    label: 'Find your community',
    description:
      'Meet fellow students, build meaningful connections, and find your place in the chapter.',
    href: '/membership',
    linkLabel: 'Explore membership',
  },
  {
    icon: CalendarDays,
    label: 'Get involved',
    description:
      'See what is happening and discover ways to learn, connect, and take part.',
    href: '/events',
    linkLabel: 'Explore events',
  },
  {
    icon: GraduationCap,
    label: 'Explore opportunities',
    description:
      'Find scholarship resources and take the next step in your academic journey.',
    href: '/scholarships',
    linkLabel: 'Find scholarships',
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Penn State NSBE"
        image="/chicago-night.jpg"
        subtitle="The Penn State Chapter of the National Society of Black Engineers"
        heightClass="min-h-[calc(100svh-4rem)]"
        contentClass="relative z-10 flex min-h-[calc(100svh-4rem)] items-center justify-center px-4 pb-10 pt-28 sm:pt-32"
      >
        <p className="mx-auto max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
          A community for Black engineers to connect, grow, and make an impact.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/membership"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-slate-950 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200 sm:w-auto"
          >
            Become a member
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
          <Link
            href="/events"
            className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/70 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
          >
            Explore events
          </Link>
        </div>
        <a
          href="#discover"
          aria-label="Scroll to discover more"
          className="mt-12 inline-flex items-center justify-center rounded-full border border-white/30 p-3 text-white/80 transition hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </Hero>

      <section id="discover" className="bg-white px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-700">
              Welcome to Penn State NSBE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Your next step starts here.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Whether you are looking to meet your people, take part in chapter
              events, or find resources for your studies, there is a place for
              you here.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pathways.map(({ icon: Icon, label, description, href, linkLabel }) => (
              <article
                key={label}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50 p-6 transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-amber-300">
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{label}</h3>
                <p className="mt-2 flex-1 leading-7 text-slate-600">
                  {description}
                </p>
                <Link
                  href={href}
                  className="mt-5 inline-flex w-fit items-center gap-2 font-semibold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4 transition group-hover:text-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700"
                >
                  {linkLabel}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-14 text-white sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-300">
              <HeartHandshake size={20} aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-[0.18em]">
                Be part of what comes next
              </p>
            </div>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Connect with the chapter.
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Learn how to join, find an event, or reach out to the Penn State
              NSBE team.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md bg-amber-300 px-6 py-3 font-bold text-slate-950 transition hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-200"
          >
            Get in touch
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
