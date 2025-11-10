import React from 'react'
import Spline from '@splinetool/react-spline'
import { Calendar, MapPin, Clock, ArrowRight, Ticket, Sparkles, ExternalLink } from 'lucide-react'

const EVENTS = [
  {
    id: 'trapthat-15-11-2025',
    name: 'TRAPTHAT — Headliner Night',
    date: 'Sat, 15 Nov 2025',
    time: '23:30 - 05:00',
    location: 'Nolita Living Club, Treviso',
    genre: ['Trap', 'Hip-Hop', 'Future Bass'],
    description:
      'A high-energy, next‑gen sound experience with laser mapping, immersive visuals and a world‑class lineup. Dress futuristic.',
    highlight: true,
    link: 'https://web.fourvenues.com/en/nolita-living-club/events/trapthat-15-11-2025-UMNV',
  },
  {
    id: 'neon-pulse',
    name: 'NEON PULSE — Holo Rave',
    date: 'Sat, 22 Nov 2025',
    time: '23:30 - 04:30',
    location: 'Nolita Living Club, Treviso',
    genre: ['Techno', 'Electro'],
    description:
      'Monolithic kicks, shimmering pads and spectral strobes. A fully synchronized lighting show inside a holographic stage.',
    link: 'https://web.fourvenues.com/en/nolita-living-club/events/trapthat-15-11-2025-UMNV',
  },
  {
    id: 'stellar-vibes',
    name: 'STELLAR VIBES — Cosmic House',
    date: 'Fri, 29 Nov 2025',
    time: '23:00 - 04:00',
    location: 'Nolita Living Club, Treviso',
    genre: ['House', 'Melodic'],
    description:
      'Uplifting, melodic motion with celestial visuals and kinetic lasers. A refined night for the city’s tastemakers.',
    link: 'https://web.fourvenues.com/en/nolita-living-club/events/trapthat-15-11-2025-UMNV',
  },
]

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-[0_0_30px_rgba(168,85,247,0.6)]" />
          <span className="text-white tracking-wider font-semibold uppercase">Nolita Living Club</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
          <a href="#events" className="hover:text-white transition-colors">Events</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a
          href={EVENTS[0].link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:opacity-95"
        >
          Book now <ArrowRight size={16} />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black overflow-hidden">
      {/* 3D Ticket */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zks9uYILDPSX-UX6/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and grid overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(217,70,239,0.25),transparent_50%),_radial-gradient(ellipse_at_bottom,_rgba(34,211,238,0.25),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-40 pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-cyan-300" />
            Treviso’s Futuristic Nightlife Landmark
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Where Holograms Meet House Beats
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80">
            Step into an immersive audio‑visual playground. World‑class DJs, holographic stages, and a crowd that never stops.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white/15"
            >
              <Ticket size={18} />
              Explore events
            </a>
            <a
              href={EVENTS[0].link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-3 font-semibold text-white shadow-[0_0_40px_rgba(217,70,239,0.35)] hover:opacity-95"
            >
              Book TRAPTHAT <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event }) {
  return (
    <div className={`relative rounded-2xl p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur hover:border-white/20 transition ${event.highlight ? 'shadow-[0_0_80px_rgba(217,70,239,0.25)]' : ''}`}>
      {/* Accent gradient */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br from-fuchsia-600/30 via-transparent to-cyan-500/30" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 text-white/80 text-sm">
          <div className="inline-flex items-center gap-2"><Calendar size={16} /> {event.date}</div>
          <span className="opacity-40">•</span>
          <div className="inline-flex items-center gap-2"><Clock size={16} /> {event.time}</div>
          <span className="opacity-40">•</span>
          <div className="inline-flex items-center gap-2"><MapPin size={16} /> {event.location}</div>
        </div>
        <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">{event.name}</h3>
        <p className="mt-2 text-white/80 max-w-2xl">{event.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {event.genre.map((g) => (
            <span key={g} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">{g}</span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:opacity-95"
          >
            Book & Pay <ExternalLink size={16} />
          </a>
          <a
            href={event.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm text-white hover:bg-white/10"
          >
            Event details <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

function EventsSection() {
  return (
    <section id="events" className="relative w-full bg-gradient-to-b from-black via-black to-[#05060A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-fuchsia-300" /> Upcoming Events
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">Main Nights</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Hand‑picked headliners and signature experiences. Secure your spot — booking redirects to our official partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {EVENTS.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative bg-[#05060A] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-2xl md:text-4xl font-bold text-white">A flagship of Treviso nightlife</h3>
          <p className="mt-3 text-white/70">
            Designed as a living canvas, the club fuses kinetic architecture with holographic visuals and precision sound. Expect premium hospitality, flawless production, and a crowd that knows the assignment.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Laser‑mapped stage with holographic set pieces</li>
            <li>• Touring headliners + resident selectors</li>
            <li>• Private tables and fast‑lane access</li>
          </ul>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-600/10 to-cyan-500/10 p-6">
            <div className="h-60 w-full rounded-xl bg-[conic-gradient(at_top_left,_#22d3ee_0%,_#a855f7_50%,_#22d3ee_100%)] opacity-80" />
            <p className="mt-4 text-sm text-white/70">
              Visual identity built around holographic textures, neon gradients, and spatial sound.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-14 text-white/70">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Nolita Living Club — Treviso</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#events" className="hover:text-white">Events</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="https://web.fourvenues.com/en/nolita-living-club/events/trapthat-15-11-2025-UMNV" target="_blank" rel="noreferrer" className="hover:text-white">Book</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <EventsSection />
      <AboutSection />
      <Footer />
    </div>
  )
}
