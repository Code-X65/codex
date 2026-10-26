import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Toast from './components/Toast'
import VariantSwitcher from './components/VariantSwitcher'
import { VariantProvider, useVariant } from './context/VariantContext'

// V1 Pages
import HeroHome from './pages/HeroHome'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Expertise from './pages/Expertise'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

// Placeholder screen shown for V2/V3 that haven't been uploaded yet
function VariantPlaceholder({ variantId }) {
  const { VARIANTS } = useVariant()
  const info = VARIANTS.find(v => v.id === variantId)
  return (
    <div
      className="w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center"
      style={{ background: '#0d0e0f' }}
    >
      <div
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          textAlign: 'center',
          maxWidth: '480px',
          padding: '2rem',
        }}
      >
        {/* Pulsing ring */}
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: `1px solid ${info.color}40`,
            boxShadow: `0 0 32px ${info.color}20`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
          }}
        >
          <span style={{ fontSize: '1.5rem', color: info.color, opacity: 0.6 }}>⚷</span>
        </div>

        <div
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: info.color,
            marginBottom: '1rem',
          }}
        >
          {info.label} // PENDING
        </div>

        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: '#e3e2e2',
            marginBottom: '0.75rem',
            letterSpacing: '-0.02em',
            fontFamily: '"Geist", sans-serif',
          }}
        >
          {info.name}
        </div>

        <p
          style={{
            fontSize: '0.8125rem',
            color: '#8e9192',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          This design variation is awaiting screen upload.
          <br />
          Provide Stitch screens to unlock this variant.
        </p>

        <div
          style={{
            padding: '10px 16px',
            borderRadius: '6px',
            border: '1px solid #222',
            background: '#121414',
            display: 'inline-block',
          }}
        >
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#444748',
            }}
          >
            {'// AWAITING_SCREEN_UPLOAD'}
          </span>
        </div>
      </div>
    </div>
  )
}

function PortfolioLayout() {
  const [toastMessage, setToastMessage] = useState(null)
  const { activeVariant } = useVariant()

  const handleModuleClick = (moduleName) => {
    setToastMessage(
      `[SYS.NOTICE] Module '${moduleName}' is currently being compiled & hardened. Production release vector scheduled shortly.`
    )
    setTimeout(() => {
      setToastMessage(null)
    }, 4500)
  }

  return (
    <div className="flex flex-col min-h-screen bg-surface text-on-surface">
      <ScrollToTop />
      <Navbar onModuleClick={handleModuleClick} />
      <main className="flex-1 w-full pt-16">
        {activeVariant === 1 ? (
          <Routes>
            <Route path="/" element={<HeroHome />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects onModuleClick={handleModuleClick} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact onModuleClick={handleModuleClick} />} />
            <Route path="*" element={<HeroHome />} />
          </Routes>
        ) : (
          <VariantPlaceholder variantId={activeVariant} />
        )}
      </main>
      <Footer />
      <VariantSwitcher />
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <VariantProvider>
        <PortfolioLayout />
      </VariantProvider>
    </BrowserRouter>
  )
}
