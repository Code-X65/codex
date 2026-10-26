import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ onModuleClick }) {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('sys_theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    if (nextTheme === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    try {
      localStorage.setItem('sys_theme', nextTheme)
    } catch {
      // ignore
    }
  }

  const isCurrent = (path) => location.pathname === path

  const navLinks = [
    { label: 'Home', path: '/', isRoute: true },
    { label: 'About', path: '/about', isRoute: true },
    { label: 'Projects', path: '/projects', isRoute: true },
    { label: 'Experience', path: '/experience', isRoute: true },
    { label: 'Expertise', path: '/expertise', isRoute: true },
    { label: 'Contact', path: '/contact', isRoute: true },
    { label: 'Blog', path: '#blog', isRoute: false, moduleName: 'Technical Writing & Architecture Notes' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-container/95 backdrop-blur-md border-b border-outline-variant transition-colors">
      <div className="h-16 w-full px-margin-mobile md:px-margin flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-body-lg select-none">
            token
          </span>
          <Link
            to="/"
            className="font-label-caps text-label-caps text-on-surface tracking-wider uppercase hover:text-secondary transition-colors"
          >
            OMOLOYE BOLUWATIFE (CODEX) <span className="text-outline">//</span> FULL-STACK &amp; AI
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            if (link.isRoute) {
              const active = isCurrent(link.path)
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`font-label-caps text-label-caps py-space-sm transition-colors border-b-2 ${
                    active
                      ? 'text-on-surface border-secondary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              )
            }
            return (
              <button
                key={link.label}
                onClick={() => onModuleClick(link.moduleName)}
                className="font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface py-space-sm transition-colors border-b-2 border-transparent hover:border-outline-variant cursor-pointer"
                type="button"
              >
                {link.label}
              </button>
            )
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-space-md">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle System Theme"
            className="w-8 h-8 rounded border border-outline-variant bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-outline transition-colors cursor-pointer"
            type="button"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            <span className="material-symbols-outlined text-body-md select-none">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center h-9 px-space-md bg-secondary text-on-secondary-fixed font-label-caps text-label-caps uppercase tracking-wider hover:bg-secondary-fixed transition-colors font-semibold rounded"
          >
            Contact
          </Link>

          {/* Callsign Badge */}
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-caps text-on-primary font-semibold text-[0.6875rem] select-none">
            CX
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className="lg:hidden w-8 h-8 rounded border border-outline-variant bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-body-md select-none">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-primary-container border-b border-outline-variant px-margin-mobile py-4 flex flex-col gap-3 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            if (link.isRoute) {
              const active = isCurrent(link.path)
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-label-caps text-sm py-2 px-3 rounded flex items-center justify-between ${
                    active
                      ? 'bg-surface-container text-secondary font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  <span>{link.label}</span>
                  {active && <span className="material-symbols-outlined text-xs">arrow_forward</span>}
                </Link>
              )
            }
            return (
              <button
                key={link.label}
                onClick={() => {
                  setMobileMenuOpen(false)
                  onModuleClick(link.moduleName)
                }}
                className="font-label-caps text-sm py-2 px-3 text-left text-on-surface-variant hover:text-on-surface flex items-center justify-between"
                type="button"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-outline">[SOON]</span>
              </button>
            )
          })}
          <div className="pt-2 border-t border-outline-variant flex items-center justify-between">
            <span className="font-label-code text-xs text-outline">omoloyeamoss65@gmail.com</span>
            <a
              href="mailto:omoloyeamoss65@gmail.com"
              className="px-3 py-1 bg-secondary text-on-secondary font-label-caps text-xs uppercase"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
