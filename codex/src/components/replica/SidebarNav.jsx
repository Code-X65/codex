import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { smoothScrollTo } from '../../utils/scrollHelper'

const NAV_ITEMS = [
  { id: '#home', num: '01', label: 'Home' },
  { id: '#work', num: '02', label: 'Work' },
  { id: '#skills', num: '03', label: 'Skills' },
  { id: '#experience', num: '04', label: 'Experience' },
  { id: '#writing', num: '05', label: 'Writing' },
  { id: '#services', num: '06', label: 'Services' },
  { id: '#contact', num: '07', label: 'Contact' },
]

export default function SidebarNav() {
  const [activeId, setActiveId] = useState('#home')
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const mobileMenuRef = useRef(null)
  const menuLinksRef = useRef([])
  const menuFooterRef = useRef(null)

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120
      const sections = NAV_ITEMS.map((item) => document.querySelector(item.id)).filter(Boolean)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.offsetTop <= scrollPos) {
          setActiveId(`#${section.id}`)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  // Open mobile menu with stagger animation
  const openMenu = () => {
    if (isAnimating) return
    setIsMobileOpen(true)
    setIsAnimating(true)

    // Run GSAP entrance after DOM element mounts
    requestAnimationFrame(() => {
      if (!mobileMenuRef.current) return

      const tl = gsap.timeline({
        onComplete: () => setIsAnimating(false),
      })

      tl.fromTo(
        mobileMenuRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      )
      tl.fromTo(
        menuLinksRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' },
        '-=0.2'
      )
      if (menuFooterRef.current) {
        tl.fromTo(
          menuFooterRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
          '-=0.2'
        )
      }
    })
  }

  // Close mobile menu with stagger exit animation
  const closeMenu = (callback) => {
    if (isAnimating || !mobileMenuRef.current) {
      setIsMobileOpen(false)
      if (callback) callback()
      return
    }

    setIsAnimating(true)
    const tl = gsap.timeline({
      onComplete: () => {
        setIsMobileOpen(false)
        setIsAnimating(false)
        if (callback) callback()
      },
    })

    if (menuFooterRef.current) {
      tl.to(menuFooterRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
      })
    }

    tl.to(
      menuLinksRef.current,
      {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.04,
        ease: 'power2.in',
      },
      '-=0.1'
    )

    tl.to(
      mobileMenuRef.current,
      {
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      },
      '-=0.15'
    )
  }

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    if (isMobileOpen) {
      closeMenu(() => {
        smoothScrollTo(targetId, 70, 1)
      })
    } else {
      smoothScrollTo(targetId, 70, 1)
    }
  }

  return (
    <>
      {/* Desktop Vertical Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-16 bg-[#090a0d] border-r border-[#1a1e26] z-50 flex flex-col justify-between items-center py-5 select-none font-mono text-[10px] hidden md:flex">
        {/* Brand Logo */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="w-10 h-10 rounded bg-[#100f1c] border border-[#2c2742] flex items-center justify-center p-1.5 shadow-md shadow-purple-950/40">
            <svg
              className="w-full h-full text-[#bbf451]"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 40 40"
            >
              <path d="M8 8 L32 8 M20 8 L20 32" stroke="#bbf451" />
              <path d="M24 16 L32 16 M24 24 L30 24 M24 32 L32 32" stroke="#bbf451" />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-1.5 w-full">
            <span className="text-[9px] tracking-widest text-[#717885] font-semibold">BO / INDEX</span>
            <div className="w-5 h-[1.5px] bg-[#bbf451]" />
          </div>
        </div>

        {/* Vertical Anchor Links */}
        <div className="flex flex-col items-center justify-center relative my-auto py-2 w-full">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#1a1e26]" />
          <div className="flex flex-col items-center gap-7 relative z-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`flex flex-col items-center gap-1 group transition-colors ${
                    isActive ? 'text-[#bbf451] font-semibold' : 'text-neutral-500 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <div className="w-1 h-3 bg-[#bbf451] rounded-full shadow-[0_0_8px_#bbf451]" />
                  )}
                  <span
                    className={`text-[8px] transition-colors ${
                      isActive ? 'text-[#bbf451]' : 'text-neutral-600 group-hover:text-neutral-400'
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="text-[10px] [writing-mode:vertical-rl] tracking-widest">
                    {item.label}
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        {/* Sidebar Footer Link */}
        <div className="flex flex-col items-center gap-3 w-full">
          <a
            className="text-neutral-500 hover:text-white transition-colors p-1"
            href="https://github.com/Code-X65"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <span className="text-[8px] text-neutral-600 tracking-wider font-mono">© BO.25</span>
        </div>
      </aside>

      {/* Top Sticky Header */}
      <header className="w-full border-b border-brand-cardBorder/60 bg-[#07080a]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Status Indicator */}
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-neutral-400">
            <span className="inline-block w-2 h-2 rounded-full bg-[#bbf451] shadow-[0_0_8px_#bbf451]" />
            <span className="uppercase text-[11px] font-medium tracking-widest text-[#a1a7b4]">
              AVAILABLE FOR SELECT PROJECTS
            </span>
          </div>

          {/* Right Action & Navigation */}
          <div className="flex items-center space-x-4 md:space-x-8 text-xs font-mono text-[#8b949e]">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-7">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id
                return (
                  <a
                    key={item.id}
                    href={item.id}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`relative pb-1 transition-colors ${
                      isActive ? 'text-white font-medium' : 'text-[#8b949e] hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#bbf451]" />
                    )}
                  </a>
                )
              })}
            </nav>

            {/* Resume button & Theme icon */}
            <div className="flex items-center space-x-3">
              <a
                className="px-3 py-1.5 rounded-none bg-transparent border border-[#bbf451] text-[#bbf451] font-mono font-bold text-xs hover:bg-[#bbf451] hover:text-black transition-all flex items-center gap-1.5"
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
              >
                RESUME{' '}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </a>

              {/* Mobile Hamburger Toggle Button */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileOpen}
                onClick={isMobileOpen ? () => closeMenu() : openMenu}
                className="md:hidden w-9 h-9 rounded-none border border-[#212631] bg-[#0c0e12] flex flex-col items-center justify-center gap-1.5 text-neutral-300 hover:text-[#bbf451] hover:border-[#bbf451]/50 transition-colors p-2"
              >
                <span
                  className={`w-5 h-[2px] bg-current transition-all duration-300 origin-center ${
                    isMobileOpen ? 'rotate-45 translate-y-[5px] bg-[#bbf451]' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-current transition-all duration-200 ${
                    isMobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`w-5 h-[2px] bg-current transition-all duration-300 origin-center ${
                    isMobileOpen ? '-rotate-45 -translate-y-[5px] bg-[#bbf451]' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 z-50 bg-[#07080a] tech-grid flex flex-col justify-between p-6 sm:p-10 md:hidden overflow-y-auto"
        >
          {/* Top Bar of Mobile Menu */}
          <div className="flex items-center justify-between border-b border-[#1a1e26] pb-5">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded bg-[#100f1c] border border-[#2c2742] flex items-center justify-center p-1 shadow-md shadow-purple-950/40">
                <svg
                  className="w-full h-full text-[#bbf451]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 40 40"
                >
                  <path d="M8 8 L32 8 M20 8 L20 32" stroke="#bbf451" />
                  <path d="M24 16 L32 16 M24 24 L30 24 M24 32 L32 32" stroke="#bbf451" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 font-semibold">
                  BO / INDEX
                </span>
                <span className="text-[8px] font-mono text-[#bbf451]">ONLINE // VER. 2025</span>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close mobile navigation"
              onClick={() => closeMenu()}
              className="w-10 h-10 border border-[#212631] bg-[#0c0e12] flex items-center justify-center text-neutral-300 hover:text-[#bbf451] hover:border-[#bbf451] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Staggered Navigation Items */}
          <nav className="flex flex-col py-8 space-y-3 font-mono">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  ref={(el) => (menuLinksRef.current[idx] = el)}
                  href={item.id}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`group flex items-center justify-between py-3 border-b border-[#14171d] transition-all ${
                    isActive ? 'text-[#bbf451]' : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-neutral-600 font-mono group-hover:text-[#bbf451] transition-colors">
                      {item.num}
                    </span>
                    <span className="text-2xl sm:text-3xl font-bold uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </div>
                  <span
                    className={`text-sm transition-transform ${
                      isActive ? 'text-[#bbf451] translate-x-0' : 'text-neutral-600 group-hover:text-[#bbf451] group-hover:translate-x-1'
                    }`}
                  >
                    ↘
                  </span>
                </a>
              )
            })}
          </nav>

          {/* Bottom Meta & CTAs */}
          <div ref={menuFooterRef} className="pt-4 border-t border-[#1a1e26] flex flex-col gap-4 font-mono">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#bbf451] shadow-[0_0_8px_#bbf451]" />
                <span className="text-[10px] tracking-wider uppercase text-neutral-400">
                  AVAILABLE FOR HIRE
                </span>
              </div>
              <a
                href="mailto:Omoloyeamoss65@gmail.com"
                className="text-[11px] text-[#bbf451] hover:underline"
              >
                Omoloyeamoss65@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="flex-1 py-3 bg-[#bbf451] text-black text-center font-bold text-xs uppercase tracking-wider hover:bg-[#a3e635] transition-colors"
                >
                  Start a Project
                </a>
                <a
                  href="https://github.com/Code-X65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border border-[#212631] bg-[#0c0e12] text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  GitHub
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="grid grid-cols-4 gap-2 pt-2 border-t border-[#181d26]">
                <a
                  href="https://t.me/Code_X65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-[10px] font-mono uppercase tracking-wider border border-[#1e232d] bg-[#090b0e] text-neutral-400 hover:text-[#bbf451] hover:border-[#bbf451]/40 transition-colors"
                >
                  Telegram
                </a>
                <a
                  href="https://x.com/AmossOmolo71501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-[10px] font-mono uppercase tracking-wider border border-[#1e232d] bg-[#090b0e] text-neutral-400 hover:text-[#bbf451] hover:border-[#bbf451]/40 transition-colors"
                >
                  X
                </a>
                <a
                  href="https://www.linkedin.com/in/codex65"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-[10px] font-mono uppercase tracking-wider border border-[#1e232d] bg-[#090b0e] text-neutral-400 hover:text-[#bbf451] hover:border-[#bbf451]/40 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://wa.me/qr/6SFSY7CULLDEP1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 text-center text-[10px] font-mono uppercase tracking-wider border border-[#1e232d] bg-[#090b0e] text-neutral-400 hover:text-[#bbf451] hover:border-[#bbf451]/40 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
