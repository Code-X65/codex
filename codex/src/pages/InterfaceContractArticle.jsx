import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioChatbot from '../components/replica/PortfolioChatbot'

const CODE_SNIPPET = `type ResourceState<T> = 
  | { state: 'idle' }
  | { state: 'loading' }
  | { state: 'ready'; data: T }
  | { state: 'error'; message: string };

// Make every visible interface state intentional.`

export default function InterfaceContractArticle() {
  const [copied, setCopied] = useState(false)
  const [shareToast, setShareToast] = useState(false)

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const handleDownloadCode = () => {
    const blob = new Blob([CODE_SNIPPET], { type: 'text/typescript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'interface-contract.ts'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    const shareData = {
      title: 'The interface is a contract, not a coat of paint. — Boluwatife Omoloye. A',
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // proceed to clipboard fallback
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href)
      setShareToast(true)
      setTimeout(() => setShareToast(false), 2500)
    } catch {
      // ignore
    }
  }

  return (
    <div className="tech-grid min-h-screen bg-[#07080a] text-[#e2e8f0] font-sans selection:bg-[#bbf451] selection:text-black">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-40 w-full border-b border-[#181d26] bg-[#07080a]/90 backdrop-blur-md">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between font-mono text-xs">
          <Link
            to="/#writing"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <span>←</span>
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="flex items-center gap-2 text-neutral-400 hover:text-[#bbf451] transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>🔗</span>
              <span>SHARE ARTICLE</span>
            </button>
            {shareToast && (
              <span className="text-[#bbf451] text-[10px] tracking-wider animate-pulse">
                [LINK COPIED]
              </span>
            )}
          </div>
        </div>
      </header>

      {/* Article Body Container */}
      <main className="max-w-[860px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-20">
        {/* Article Meta Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono text-[#bbf451] uppercase tracking-widest block mb-4 font-semibold">
            /WRITING · DESIGN SYSTEMS
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-sans">
            The interface is a contract, not a coat of paint.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-sans leading-relaxed mb-6 font-normal">
            Reliable interfaces make intent, state, and recovery visible before a user has to guess what the system will do next.
          </p>

          <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
            September 11, 2025 · 7 MIN READ
          </div>
        </div>

        {/* Hero Architectural Diagram Image */}
        <div className="border border-[#1e232d] bg-[#090b0e] overflow-hidden mb-12 shadow-2xl">
          <img
            alt="3D geometric isometric architecture depicting state contracts"
            className="w-full h-auto object-cover"
            src="/writing/interface-hero.jpg"
          />
        </div>

        {/* Editorial Text Block */}
        <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-sans mb-12">
          <p>
            An interface is a promise about what can happen next. Labels, disabled actions, loading states, and recovery paths are not surface decoration; together they tell a person what the system understands, what it is doing, and what they can safely expect.
          </p>
          <p>
            When this contract is clear, product complexity becomes navigable. When it is hidden, users compensate with repeated clicks, workarounds, and uncertainty.
          </p>
        </div>

        {/* Code Snippet Card */}
        <div className="border border-[#263222] bg-[#090b0e] mb-12 font-mono text-xs overflow-hidden shadow-xl">
          {/* Code Card Header */}
          <div className="px-4 py-2.5 bg-[#0e1216] border-b border-[#1b222d] flex items-center justify-between text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#bbf451]/20 border border-[#bbf451] inline-block" />
              <span className="text-[10px] tracking-wider text-[#bbf451] uppercase font-semibold">
                BOLUWATIFE OMOLOYE / CODE NOTE
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10px]">
              <span className="px-1.5 py-0.5 bg-[#141922] text-neutral-400 border border-[#232a38]">
                TS
              </span>
              <button
                type="button"
                onClick={handleCopyCode}
                className="hover:text-[#bbf451] transition-colors cursor-pointer"
              >
                {copied ? 'COPIED ✓' : 'COPY'}
              </button>
              <button
                type="button"
                onClick={handleDownloadCode}
                className="hover:text-[#bbf451] transition-colors cursor-pointer"
              >
                DOWNLOAD
              </button>
            </div>
          </div>

          {/* Code Card Content */}
          <pre className="p-5 overflow-x-auto text-neutral-200 leading-relaxed text-xs sm:text-[13px] font-mono">
            <code>{CODE_SNIPPET}</code>
          </pre>
        </div>

        {/* Diagram / Infographic Card */}
        <div className="border border-[#1e232d] bg-[#08090b] overflow-hidden mb-12 shadow-2xl">
          <img
            alt="State machine diagram showing happy path vs recovery path across Idle, Loading, Ready, and Error states"
            className="w-full h-auto object-cover"
            src="/writing/interface-state-machine.png"
          />
        </div>

        {/* Practical Check Callout Box */}
        <div className="border border-[#bbf451]/40 bg-[#0d120d] p-5 sm:p-6 mb-12 relative">
          <span className="text-[11px] font-mono text-[#bbf451] uppercase tracking-wider block mb-2 font-bold">
            Practical check
          </span>
          <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
            For every meaningful action, define the initial state, in-progress state, success confirmation, failure path, and the next useful decision.
          </p>
        </div>

        {/* Author Footer */}
        <div className="flex items-center justify-between border-t border-b border-[#1b2029] py-5 mb-14 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <div className="w-5 h-5 rounded bg-[#100f1c] border border-[#2c2742] flex items-center justify-center p-0.5">
              <svg className="w-full h-full text-[#bbf451]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 40 40">
                <path d="M8 8 L32 8 M20 8 L20 32" stroke="#bbf451" />
                <path d="M24 16 L32 16 M24 24 L30 24 M24 32 L32 32" stroke="#bbf451" />
              </svg>
            </div>
            <span className="text-neutral-400">
              Built in the open by <strong className="text-white font-semibold">Boluwatife Omoloye. A.</strong>
            </span>
          </div>

          <a
            href="mailto:Omoloyeamoss65@gmail.com"
            className="text-neutral-400 hover:text-[#bbf451] transition-colors uppercase tracking-wider hidden sm:inline-block"
          >
            START A CONVERSATION ↗
          </a>
        </div>

        {/* Related Articles */}
        <div className="border border-[#1f2633] bg-[#090b0e] p-6 mb-12">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-4">
            /MORE_READING
          </span>
          <div className="space-y-4">
            <Link
              to="/writing/web-protocols-explained"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181d27] pb-4"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-500 block">SOFTWARE ARCHITECTURE · 6 MIN READ</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#bbf451] transition-colors">
                  Web Protocols Explained: When to Use HTTP, WebSockets, or FTP
                </span>
              </div>
              <span className="text-xs font-mono text-[#bbf451] group-hover:translate-x-1 transition-transform">
                Read note ↗
              </span>
            </Link>

            <Link
              to="/writing/rest-vs-graphql"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-500 block">SOFTWARE ARCHITECTURE · 6 MIN READ</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#bbf451] transition-colors">
                  REST vs. GraphQL: A Practical Engineering Breakdown
                </span>
              </div>
              <span className="text-xs font-mono text-[#bbf451] group-hover:translate-x-1 transition-transform">
                Read note ↗
              </span>
            </Link>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#090a0d] border border-[#bbf451] p-6 sm:p-10 mb-12">
          <div className="mb-6">
            <span className="text-[11px] font-mono text-[#bbf451] uppercase tracking-wider block mb-2">
              /OCCASIONAL_NOTES
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3 font-sans">
              Useful notes, when there’s something worth sharing.
            </h2>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-xl">
              A low-volume digest on product systems, interfaces, and technical work. Your email stays in Boluwatife’s private portfolio list—no third-party tracking.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-mono">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4">
              <div className="flex-1 border-b border-[#27272a] pb-2">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-transparent border-none p-0 text-sm text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0 font-mono"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-[#bbf451] text-black font-mono font-medium text-xs sm:text-sm tracking-tight hover:bg-[#a3e635] transition-all whitespace-nowrap shrink-0 cursor-pointer"
              >
                Join the notes
              </button>
            </div>
            <div className="flex items-center space-x-2 text-[10px] text-neutral-500 pt-1">
              <input
                id="article-consent-notes"
                defaultChecked
                type="checkbox"
                className="rounded-none bg-[#111318] border border-[#27272a] text-[#bbf451] focus:ring-0 w-3.5 h-3.5"
              />
              <label htmlFor="article-consent-notes">
                I agree to receive occasional portfolio and writing updates at this address.
              </label>
            </div>
          </form>
        </div>

        {/* Bottom Back Link */}
        <div className="text-center font-mono text-xs">
          <Link
            to="/#writing"
            className="text-neutral-500 hover:text-[#bbf451] transition-colors"
          >
            ← Back to all essays and notes
          </Link>
        </div>
      </main>

      {/* Floating Chatbot Companion */}
      <PortfolioChatbot />
    </div>
  )
}
