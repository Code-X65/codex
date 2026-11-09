import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioChatbot from '../components/replica/PortfolioChatbot'

const POLLING_CODE = `// The Polling Problem: Wasting resources
setInterval(async () => {
  const response = await fetch('/api/notifications');
  const data = await response.json();
  // 99% of these requests return "no new data"
}, 2000);`

const WEBSOCKET_CODE = `const ws = new WebSocket('wss://api.example.com/live');

ws.onopen = () => {
  console.log('Connection established');
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  updateUI(data); // Instant update, no polling
};`

export default function WebProtocolsArticle() {
  const [copiedCode, setCopiedCode] = useState(null)
  const [shareToast, setShareToast] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleCopy = async (codeText, id) => {
    try {
      await navigator.clipboard.writeText(codeText)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch {
      // fallback
    }
  }

  const handleDownload = (codeText, filename) => {
    const blob = new Blob([codeText], { type: 'text/javascript' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    const shareData = {
      title: 'Web Protocols Explained: When to Use HTTP, WebSockets, or FTP — Boluwatife Omoloye. A',
      url: window.location.href,
    }

    if (navigator.share) {
      try {
        await navigator.share(shareData)
        return
      } catch {
        // fallback
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

      {/* Main Article Container */}
      <main className="max-w-[860px] mx-auto px-4 sm:px-6 pt-12 md:pt-16 pb-20">
        {/* Article Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono text-[#bbf451] uppercase tracking-widest block mb-4 font-semibold">
            /WRITING · SOFTWARE ARCHITECTURE
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-sans">
            Web Protocols Explained: When to Use HTTP, WebSockets, or FTP
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-sans leading-relaxed mb-6 font-normal">
            Stop using HTTP for everything. A practical guide to choosing the right protocol for your product's core requirements, with real-world examples and code.
          </p>

          <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
            September 30, 2026 · 6 MIN READ
          </div>
        </div>

        {/* Hero Image: Web Protocols Architecture Breakdown */}
        <div className="border border-[#1e232d] bg-[#090b0e] overflow-hidden mb-12 shadow-2xl">
          <img
            alt="Web Protocols Overview: HTTP, WebSockets and SFTP picking the right tool for the job"
            className="w-full h-auto object-cover"
            src="/writing/web-protocols-overview.jpg"
          />
        </div>

        {/* Introduction */}
        <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-sans mb-12">
          <p>
            I see a recurring pattern in code reviews and architecture discussions: developers defaulting to HTTP for everything. Need real-time updates? Poll every 2 seconds. Need notifications? Poll every 3 seconds.
          </p>
          <p>
            The result is wasted server resources, poor user experience, and unnecessary complexity. Each web protocol was designed for a specific purpose. Choosing the right one isn't about following a trend; it's about matching the tool to the product's core requirement.
          </p>
        </div>

        {/* Section 1: HTTP / HTTPS */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            HTTP / HTTPS: The Request-Response Workhorse
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            HTTP follows a strict request-response model. The client asks, the server answers, and the connection closes. This is perfect for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-neutral-300 text-sm sm:text-base font-sans mb-6 pl-2">
            <li>RESTful APIs</li>
            <li>Static content delivery</li>
            <li>Form submissions</li>
          </ul>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            It is simple, stateless, and highly cacheable. However, it is fundamentally inefficient for frequent, real-time updates.
          </p>

          {/* Polling Anti-Pattern Code Card */}
          <div className="border border-[#263222] bg-[#090b0e] font-mono text-xs overflow-hidden shadow-xl">
            <div className="px-4 py-2.5 bg-[#0e1216] border-b border-[#1b222d] flex items-center justify-between text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#bbf451]/20 border border-[#bbf451] inline-block" />
                <span className="text-[10px] tracking-wider text-[#bbf451] uppercase font-semibold">
                  BOLUWATIFE OMOLOYE / CODE NOTE
                </span>
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <span className="px-1.5 py-0.5 bg-[#141922] text-neutral-400 border border-[#232a38]">JS</span>
                <button
                  type="button"
                  onClick={() => handleCopy(POLLING_CODE, 'poll')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  {copiedCode === 'poll' ? 'COPIED ✓' : 'COPY'}
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(POLLING_CODE, 'polling-anti-pattern.js')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
            <pre className="p-5 overflow-x-auto text-neutral-200 leading-relaxed text-xs sm:text-[13px] font-mono">
              <code>{POLLING_CODE}</code>
            </pre>
          </div>
        </div>

        {/* Section 2: WebSockets */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            WebSockets: The Persistent Connection
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            WebSockets create a persistent, bidirectional channel. After an initial HTTP upgrade handshake, the connection stays open. Either side can send data at any time. This is ideal for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-neutral-300 text-sm sm:text-base font-sans mb-6 pl-2">
            <li>Chat applications</li>
            <li>Live dashboards (stock prices, sports scores)</li>
            <li>Collaborative editing</li>
            <li>Multiplayer gaming</li>
          </ul>

          {/* WebSockets Architecture Diagram */}
          <div className="border border-[#1e232d] bg-[#08090b] overflow-hidden mb-8 shadow-2xl">
            <img
              alt="WebSockets: The Persistent Connection Model Architecture"
              className="w-full h-auto object-cover"
              src="/writing/websockets-architecture.jpg"
            />
          </div>

          {/* WebSocket Code Card */}
          <div className="border border-[#263222] bg-[#090b0e] font-mono text-xs overflow-hidden shadow-xl mb-6">
            <div className="px-4 py-2.5 bg-[#0e1216] border-b border-[#1b222d] flex items-center justify-between text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#bbf451]/20 border border-[#bbf451] inline-block" />
                <span className="text-[10px] tracking-wider text-[#bbf451] uppercase font-semibold">
                  BOLUWATIFE OMOLOYE / CODE NOTE
                </span>
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <span className="px-1.5 py-0.5 bg-[#141922] text-neutral-400 border border-[#232a38]">JS</span>
                <button
                  type="button"
                  onClick={() => handleCopy(WEBSOCKET_CODE, 'ws')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  {copiedCode === 'ws' ? 'COPIED ✓' : 'COPY'}
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(WEBSOCKET_CODE, 'websocket-client.js')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
            <pre className="p-5 overflow-x-auto text-neutral-200 leading-relaxed text-xs sm:text-[13px] font-mono">
              <code>{WEBSOCKET_CODE}</code>
            </pre>
          </div>

          {/* Engineering Principle Callout Box */}
          <div className="border border-[#bbf451]/40 bg-[#0d120d] p-5 sm:p-6 mb-8 relative">
            <span className="text-[11px] font-mono text-[#bbf451] uppercase tracking-wider block mb-2 font-bold">
              Engineering Principle
            </span>
            <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
              For every meaningful data flow, define the initial state, the update frequency, and the recovery path. If updates are event-driven and sub-second, reach for WebSockets. If they are user-initiated and stateless, stick to HTTP.
            </p>
          </div>
        </div>

        {/* Section 3: SFTP */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            SFTP: Encrypted File Transfer
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-3">
            When moving large files, automated backups, or integrating with legacy systems, HTTP is often the wrong tool. SFTP (SSH File Transfer Protocol) provides encrypted, resumable file transfers.
          </p>
          <p className="text-xs sm:text-sm text-neutral-400 italic bg-[#0a0c10] border border-[#1b2029] p-4">
            *Note: For modern web applications, consider using presigned S3 URLs or chunked HTTP uploads with progress tracking instead of routing files directly through your application server.*
          </p>
        </div>

        {/* Section 4: THE MATRIX Comparison Component */}
        <div className="mb-14">
          <div className="border border-[#1f2633] bg-[#090b0e] p-6 sm:p-8">
            <div className="border-b border-[#1b2029] pb-4 mb-6">
              <span className="text-[10px] font-mono text-[#bbf451] uppercase tracking-widest block mb-1">
                04 // PROTOCOL MATRIX
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                THE MATRIX
              </h3>
              <p className="text-xs text-neutral-400 font-mono">
                Three protocols. Three jobs. One decision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              {/* HTTP Card */}
              <div className="border border-[#202632] bg-[#0c0e12] p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#1a1f28] pb-2">
                  <span className="font-bold text-white text-sm">HTTP</span>
                  <span className="text-[10px] text-neutral-500">PORT 80/443</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-neutral-300">
                  <div><span className="text-neutral-500">Model:</span> Request-Response</div>
                  <div><span className="text-neutral-500">State:</span> Stateless</div>
                  <div><span className="text-neutral-500">Overhead:</span> Low per request</div>
                  <div><span className="text-neutral-500">Best for:</span> REST APIs, HTML/JSON</div>
                </div>
              </div>

              {/* WebSockets Card (Highlighted with Lime Border) */}
              <div className="border border-[#bbf451] bg-[#0f140e] p-4 space-y-3 shadow-[0_0_15px_rgba(187,244,81,0.08)]">
                <div className="flex items-center justify-between border-b border-[#253620] pb-2">
                  <span className="font-bold text-[#bbf451] text-sm">WEBSOCKETS</span>
                  <span className="text-[10px] text-[#bbf451]">FULL-DUPLEX</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-neutral-200">
                  <div><span className="text-neutral-500">Model:</span> Persistent Channel</div>
                  <div><span className="text-neutral-500">State:</span> Stateful connection</div>
                  <div><span className="text-neutral-500">Overhead:</span> Minimal after handshake</div>
                  <div><span className="text-neutral-500">Best for:</span> Real-time, Chat, Tickers</div>
                </div>
              </div>

              {/* SFTP Card */}
              <div className="border border-[#202632] bg-[#0c0e12] p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#1a1f28] pb-2">
                  <span className="font-bold text-white text-sm">SFTP</span>
                  <span className="text-[10px] text-neutral-500">PORT 22 (SSH)</span>
                </div>
                <div className="space-y-1.5 text-[11px] text-neutral-300">
                  <div><span className="text-neutral-500">Model:</span> Session File Stream</div>
                  <div><span className="text-neutral-500">State:</span> Authenticated session</div>
                  <div><span className="text-neutral-500">Overhead:</span> SSH encryption handshakes</div>
                  <div><span className="text-neutral-500">Best for:</span> Large backups, bulk files</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: The Takeaway */}
        <div className="mb-14 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
            The Takeaway
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Production systems don't guess. They match the tool to the job.
          </p>
          <ul className="space-y-2 text-neutral-300 text-sm sm:text-base font-sans pl-2">
            <li>• Need real-time, bidirectional updates? <strong className="text-[#bbf451]">WebSockets</strong>.</li>
            <li>• Transferring large files securely? <strong className="text-white">SFTP</strong>.</li>
            <li>• Standard web requests? <strong className="text-white">HTTPS</strong> (always).</li>
          </ul>
          <p className="text-neutral-400 text-sm leading-relaxed pt-2">
            Stop using HTTP for everything. Choose the right wire for your system.
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

        {/* Related Articles Card */}
        <div className="border border-[#1f2633] bg-[#090b0e] p-6 mb-12">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-4">
            /MORE_READING
          </span>
          <div className="space-y-4">
            <Link
              to="/writing/rest-vs-graphql"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#181d27] pb-4"
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

            <Link
              to="/writing/interface-is-a-contract"
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div>
                <span className="text-[10px] font-mono text-neutral-500 block">DESIGN SYSTEMS · 7 MIN READ</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#bbf451] transition-colors">
                  The interface is a contract, not a coat of paint.
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
                id="article-proto-consent"
                defaultChecked
                type="checkbox"
                className="rounded-none bg-[#111318] border border-[#27272a] text-[#bbf451] focus:ring-0 w-3.5 h-3.5"
              />
              <label htmlFor="article-proto-consent">
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
