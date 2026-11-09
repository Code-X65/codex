import { useState } from 'react'
import { smoothScrollTo } from '../../utils/scrollHelper'

const PROJECTS = [
  {
    "num": "01 - SCRAPPER - AUTOMATION - DATA API [FREELANCE CLIENT DELIV]",
    "badge": "FEATURED CASE STUDY",
    "title": "WHreek-Fuelbot-API",
    "desc": "A production fuel-price API covering roughly 83,000 stations across 27 European countries, delivered to a freelance client who needed reliable programmatic access to fuel prices that only exist behind a Cloudflare-protected source with no public API. The service combines a persistent scraping cluster, caching strategies, and resilient error recovery.",
    "tags": [
      "Node.js",
      "Express",
      "API",
      "Prisma",
      "PostgreSQL",
      "Web scraping",
      "Caching",
      "Freelance"
    ],
    "img": "/projects/fuelbot-dashboard.jpg",
    "alt": "WHreek-Fuelbot-API dashboard",
    "featured": true
  },
  {
    "num": "02 - LEGACY WEB2 PROJECT",
    "badge": null,
    "title": "Pulse Code Voting",
    "desc": "A full-stack voting platform that replaces paper ballots at a university awards ceremony. Voters receive a printed QR ticket, cast one vote from their phone, and watch a live leaderboard; organizers manage events, print and revoke tickets, void ballots, and review insights from an administrative control center.",
    "tags": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Voting",
      "Full-stack"
    ],
    "img": "/projects/pulse-voting.jpg",
    "alt": "Pulse Code Voting preview",
    "featured": false
  },
  {
    "num": "03 - LEGACY WEB2 PROJECT",
    "badge": null,
    "title": "flexchange website",
    "desc": "Flexchange is a high-conversion marketing website for a Nigerian gift card exchange platform. Built with Next.js 14 and Tailwind CSS, it showcases seamless onboarding flows, persuasive copy, and a modal-based trade initiation system. The site highlights benefits like unbeatable rates, customer testimonials, and a simple three-step process to guide users from interest to trade execution.",
    "tags": [
      "Next.js 14",
      "Tailwind CSS",
      "React",
      "Marketing",
      "Fintech",
      "Gift Cards"
    ],
    "img": "/projects/flexchange.jpg",
    "alt": "Flexchange website preview",
    "featured": false
  },
  {
    "num": "04 - LEGACY WEB2 PROJECT",
    "badge": null,
    "title": "denurx landing page",
    "desc": "This React project is a landing page for a telemedicine mobile app that connects patients with healthcare providers. The primary objective of the landing page is to provide information about the app, its features, benefits, and services. It also includes a form for onboarding two user types: patients and healthcare providers using mailchimp.",
    "tags": [
      "React",
      "Tailwind CSS",
      "Telemedicine",
      "Healthcare",
      "Mailchimp"
    ],
    "img": "/projects/denurx.png",
    "alt": "Denurx telemedicine landing page preview",
    "featured": false
  },
  {
    "num": "05 - LEGACY WEB2 PROJECT",
    "badge": null,
    "title": "trading website with webflow",
    "desc": "This is a website made using webflow, the website showcases the various features of the trading company with well structured contents and sections.",
    "tags": [
      "Webflow",
      "Fintech",
      "Trading",
      "Responsive Design"
    ],
    "img": "/projects/360-trading.jpg",
    "alt": "360 Trading website preview",
    "featured": false
  },
  {
    "num": "06 - WEB3 / BLOCKCHAIN PROJECT",
    "badge": null,
    "title": "Basewof Marketing Website",
    "desc": "A modern and engaging marketing site for BaseWOF \u2014 the first fully decentralized peer-to-peer Wheel of Fortune casino built on the Base blockchain. The website showcases the product, outlines gameplay mechanics, the boost system, DAO governance, and a compelling roadmap, all while reflecting the trustless nature of blockchain gaming.",
    "tags": [
      "Web3",
      "Base Blockchain",
      "React",
      "Tailwind CSS",
      "DeFi / Casino"
    ],
    "img": "/projects/basewof.jpg",
    "alt": "BaseWOF crypto casino marketing site preview",
    "featured": false
  },
  {
    "num": "07 - AGENCY CONSULTING // KNAPSACK",
    "badge": null,
    "title": "Knapsack",
    "desc": "Professional web consulting and digital architecture platform engineered for service-driven firms and business consultants. Knapsack delivers bespoke web systems focused on high-intent lead generation, technical SEO optimization, and brand authority. Built with a modular React frontend, Tailwind styling, and smooth GSAP micro-interactions, the site incorporates structured schema markup, high-conversion appointment booking funnels, and performance-tuned asset delivery to turn organic search traffic into qualified client engagements.",
    "tags": [
      "React",
      "Tailwind CSS",
      "GSAP",
      "SEO Systems",
      "Digital Strategy",
      "Squarespace Circle"
    ],
    "img": "/projects/knapsack.jpg",
    "alt": "Knapsack web consulting platform preview",
    "featured": false
  },
  {
    "num": "08 - ENTERPRISE CLIENT // ENYATA",
    "badge": null,
    "title": "Enyata Software Engineering",
    "desc": "Enterprise product engineering platform built during tenure as frontend engineer at Enyata, one of Nigeria's premier bespoke software development organizations. The platform showcases enterprise-scale client engineering spanning artificial intelligence, decentralized blockchain applications, and cloud-native infrastructure. Engineered with Next.js, React, Tailwind CSS, and Framer Motion micro-interactions, the solution delivers interactive capability breakdowns, talent showcase portals, and case study journeys optimized to accelerate high-ticket enterprise client acquisitions.",
    "tags": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Enterprise AI",
      "Cloud Systems"
    ],
    "img": "/projects/enyata.jpg",
    "alt": "Enyata custom software engineering platform preview",
    "featured": false
  },
  {
    "num": "09 - PROPTECH PLATFORM // HUTBAY",
    "badge": null,
    "title": "HutBay Real Estate Marketplace",
    "desc": "A full-scale real estate search marketplace connecting prospective home buyers, tenants, and institutional investors with verified properties across major Nigerian commercial centers including Lagos, Abuja, Port Harcourt, and Ibadan. The application features multi-criteria geolocation filtering (for sale, lease, shortlet, land), verified realtor credentialing badge tiers, and real-time inquiry management backed by Firebase and reactive React state architecture, accompanied by fluid GSAP animation feedback for mobile property browsing.",
    "tags": [
      "React",
      "Firebase",
      "Tailwind CSS",
      "GSAP",
      "Proptech",
      "Real-Time Search"
    ],
    "img": "/projects/hutbay.jpg",
    "alt": "HutBay real estate property search marketplace preview",
    "featured": false
  }
]

export default function SelectedWorkSection() {
  const [visibleCount, setVisibleCount] = useState(3)

  const getNextStep = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return 4 // Mobile: maximum of 4 on subsequent shows
    }
    return 6 // Desktop: maximum of 6 on subsequent shows
  }

  const handleLoadMore = () => {
    const step = getNextStep()
    setVisibleCount((prev) => Math.min(prev + step, PROJECTS.length))
  }

  const handleExpandToggle = () => {
    if (visibleCount >= PROJECTS.length) {
      setVisibleCount(3)
      smoothScrollTo('#work', 70, 0.8)
    } else {
      setVisibleCount(PROJECTS.length)
    }
  }

  const visibleProjects = PROJECTS.slice(0, visibleCount)

  return (
    <section className="py-16 md:py-20 border-b border-[#181c24] dot-matrix-grid -mx-4 sm:-mx-6 px-4 sm:px-6 relative" id="work">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
        <div className="lg:col-span-4">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-3">/SELECTED_WORK</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.1] font-sans">
            A few systems<br />I’ve made<br />useful.
          </h2>
        </div>
        <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-5 font-mono">
          <div>
            <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mb-1">/FILTER_BY_STACK</span>
            <span className="text-[11px] text-neutral-400">
              Showing {visibleProjects.length} of {PROJECTS.length} systems
            </span>
          </div>
          <div className="flex items-end gap-3">
            <button
              onClick={handleExpandToggle}
              className="px-3.5 py-1.5 rounded-none bg-[#090b0e] border border-[#2b3a24] text-[#bbf451] text-[10px] font-mono tracking-wider font-semibold uppercase hover:bg-[#121811] hover:border-[#bbf451] transition-all cursor-pointer"
            >
              {visibleCount >= PROJECTS.length ? 'COLLAPSE TO 3' : 'EXPAND ALL'}
            </button>
            <div>
              <span className="text-[9px] text-neutral-500 uppercase tracking-wider block mb-1 font-mono">TECHNOLOGY</span>
              <div className="relative">
                <button className="px-3 py-1.5 rounded-none bg-[#0b0c10] border border-[#1e232d] text-neutral-300 text-[11px] font-mono flex items-center justify-between gap-5 min-w-[170px] hover:border-neutral-500 transition-colors">
                  <span>All technologies</span>
                  <span className="text-[8px] text-neutral-400">▼</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10">
        {visibleProjects.map((c) => {
          const borderClass = c.featured
            ? 'border-[#bbf451] shadow-[0_0_25px_rgba(187,244,81,0.06)]'
            : 'border-white/10 hover:border-white/20 transition-all'

          return (
            <article
              key={c.title}
              className={`bg-[#090a0d] border ${borderClass} rounded-none p-5 sm:p-7 relative`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-[#121316] border border-[#27272a] rounded-none overflow-hidden relative group">
                  <img
                    alt={c.alt}
                    className="w-full h-full object-cover object-top min-h-[360px] lg:min-h-[400px] group-hover:scale-105 transition-transform duration-500"
                    src={c.img}
                  />
                </div>
                <div className="lg:col-span-5 flex flex-col justify-between h-full pt-1">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-3 font-mono text-[9px]">
                      <span className="text-[#bbf451] tracking-wider uppercase font-medium">
                        {c.num}
                      </span>
                      {c.badge && (
                        <span className="border border-[#bbf451] text-[#bbf451] px-2 py-0.5 rounded-none text-[8px] uppercase tracking-widest font-semibold">
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans leading-none">
                      {c.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed mb-3 font-sans">
                      {c.desc}
                    </p>
                    <a
                      className="text-[#bbf451] font-mono text-xs font-semibold hover:underline inline-flex items-center gap-1 mb-6 tracking-wide"
                      href="#"
                    >
                      READ MORE ↘
                    </a>
                    <div className="flex flex-wrap gap-1.5 mb-7 text-[10px] font-mono">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-none bg-[#111318] text-neutral-300 border border-[#202530]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 pt-3 border-t border-[#181d27] font-mono text-xs">
                    <div className="flex items-center space-x-5 text-neutral-300">
                      <a className="hover:text-[#bbf451] flex items-center gap-1 transition-colors" href="#">
                        Open project ↗
                      </a>
                      <a className="hover:text-white flex items-center gap-1 text-neutral-400 transition-colors" href="#">
                        Case study ↗
                      </a>
                      <a className="hover:text-white flex items-center gap-1 text-neutral-400 transition-colors" href="#">
                        Source code ⎘
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}

        {/* Pagination & Load More Controls */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-5 border-t border-[#181d27] font-mono">
          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                visibleCount < PROJECTS.length ? 'bg-[#bbf451] animate-pulse' : 'bg-[#bbf451]'
              } shadow-[0_0_8px_#bbf451]`}
            />
            <span className="tracking-wider text-[11px]">
              {visibleCount < PROJECTS.length
                ? `SHOWING ${visibleProjects.length} OF ${PROJECTS.length} SYSTEMS`
                : `ALL ${PROJECTS.length} SYSTEMS DISPLAYED`}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {visibleCount < PROJECTS.length ? (
              <>
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="flex-1 sm:flex-none px-6 py-3 bg-[#bbf451] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#a3e635] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#bbf451]/10"
                >
                  <span>LOAD MORE WORK</span>
                  <span className="text-sm font-sans">↓</span>
                </button>
                <button
                  type="button"
                  onClick={handleExpandToggle}
                  className="px-5 py-3 border border-[#212733] bg-[#0c0e12] text-neutral-300 hover:text-white hover:border-[#bbf451]/50 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                >
                  SHOW ALL ({PROJECTS.length})
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={handleExpandToggle}
                className="px-6 py-3 border border-[#212733] bg-[#0c0e12] text-[#bbf451] hover:bg-[#bbf451] hover:text-black text-xs font-mono font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2"
              >
                <span>COLLAPSE TO 3</span>
                <span className="text-sm font-sans">↑</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
