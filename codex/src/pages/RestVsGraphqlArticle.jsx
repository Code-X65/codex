import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortfolioChatbot from '../components/replica/PortfolioChatbot'

const GRAPHQL_CODE = `// GraphQL Query: Client dictates the exact shape
query GetUserFeed {
  user(id: "123") {
    name
    posts {
      title
      author {
        name
      }
    }
  }
}

// Result: Only the requested fields are returned.
// No over-fetching of unrelated user metadata.`

const REST_OVERFETCH_CODE = `// The REST Over-fetching Problem:
// Client only needs the post title, but receives the entire document.

fetch('/api/posts/123')
  .then(res => res.json())
  .then(data => {
    console.log(data.title);
    // data.body, data.comments, data.metadata
    // were also downloaded and parsed unnecessarily.
  });`

export default function RestVsGraphqlArticle() {
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

  const handleDownload = (codeText, filename, mimeType = 'text/plain') => {
    const blob = new Blob([codeText], { type: mimeType })
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
      title: 'REST vs. GraphQL: A Practical Engineering Breakdown — Boluwatife Omoloye. A',
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
        {/* Article Meta Header */}
        <div className="mb-10">
          <span className="text-[10px] font-mono text-[#bbf451] uppercase tracking-widest block mb-4 font-semibold">
            /WRITING · SOFTWARE ARCHITECTURE
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6 font-sans">
            REST vs. GraphQL: A Practical Engineering Breakdown
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 font-sans leading-relaxed mb-6 font-normal">
            Stop choosing APIs based on hype. A practical guide to choosing between REST and GraphQL based on data shape, caching constraints, and team velocity.
          </p>

          <div className="text-xs font-mono text-neutral-500 tracking-wider uppercase">
            October 12, 2026 · 6 MIN READ
          </div>
        </div>

        {/* Lead Prose Block */}
        <div className="space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed font-sans mb-12">
          <p>
            I see a recurring pattern in architecture discussions and code reviews: teams defaulting to GraphQL for every new project because it is the current trend, while treating REST like a legacy afterthought.
          </p>
          <p>
            The result is often unnecessary complexity, caching headaches, and strained backend resources. Each API architecture was designed for a specific set of constraints. Choosing the right one isn't about following a trend; it's about matching the tool to the product's core data requirements.
          </p>
        </div>

        {/* Section 1: REST */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            REST: The Document-Oriented Workhorse
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            REST follows a resource-based, request-response model. The client asks for a specific document (e.g., <code className="text-[#bbf451] bg-[#10141a] px-1.5 py-0.5 rounded font-mono text-sm">/users/123</code>), the server answers, and the connection closes. This is optimal for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-neutral-300 text-sm sm:text-base font-sans mb-6 pl-2">
            <li>Simple CRUD operations</li>
            <li>Heavy HTTP/CDN caching requirements</li>
            <li>File uploads (multipart/form-data)</li>
            <li>Predictable, flat data shapes</li>
          </ul>
          <p className="text-neutral-400 text-sm leading-relaxed mb-8">
            It is simple, stateless, and highly cacheable. However, it is fundamentally rigid when data requirements change rapidly.
          </p>

          {/* Diagram 1: REST Architecture */}
          <div className="border border-[#1e232d] bg-[#08090b] overflow-hidden mb-12 shadow-2xl">
            <img
              alt="REST Linear Architecture Diagram: Standard web transaction, stateless and closed after each exchange"
              className="w-full h-auto object-cover"
              src="/writing/rest-architecture.jpg"
            />
          </div>
        </div>

        {/* Section 2: GraphQL */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            GraphQL: The Graph-Oriented Orchestrator
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            GraphQL treats your data as a connected graph. The client sends a single query specifying the exact shape of the data it needs. A resolver engine orchestrates the fetch, aggregates the results, and returns a unified payload. This is ideal for:
          </p>
          <ul className="list-disc list-inside space-y-1.5 text-neutral-300 text-sm sm:text-base font-sans mb-6 pl-2">
            <li>Complex, deeply nested data relationships</li>
            <li>Avoiding over-fetching and under-fetching</li>
            <li>Rapid frontend iteration (no backend deploys for new UI fields)</li>
            <li>Aggregating multiple microservices behind a single gateway</li>
          </ul>

          {/* Diagram 2: GraphQL Architecture */}
          <div className="border border-[#1e232d] bg-[#08090b] overflow-hidden mb-8 shadow-2xl">
            <img
              alt="GraphQL Architecture Diagram: Resolver engine fans out to specific data sources and aggregates the exact shape requested"
              className="w-full h-auto object-cover"
              src="/writing/graphql-architecture.jpg"
            />
          </div>

          {/* GraphQL Query Code Card */}
          <div className="border border-[#263222] bg-[#090b0e] font-mono text-xs overflow-hidden shadow-xl mb-6">
            <div className="px-4 py-2.5 bg-[#0e1216] border-b border-[#1b222d] flex items-center justify-between text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#bbf451]/20 border border-[#bbf451] inline-block" />
                <span className="text-[10px] tracking-wider text-[#bbf451] uppercase font-semibold">
                  BOLUWATIFE OMOLOYE / CODE NOTE
                </span>
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <span className="px-1.5 py-0.5 bg-[#141922] text-neutral-400 border border-[#232a38]">GRAPHQL</span>
                <button
                  type="button"
                  onClick={() => handleCopy(GRAPHQL_CODE, 'gql')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  {copiedCode === 'gql' ? 'COPIED ✓' : 'COPY'}
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(GRAPHQL_CODE, 'query.graphql')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
            <pre className="p-5 overflow-x-auto text-neutral-200 leading-relaxed text-xs sm:text-[13px] font-mono">
              <code>{GRAPHQL_CODE}</code>
            </pre>
          </div>

          {/* Engineering Principle Callout Box */}
          <div className="border border-[#bbf451]/40 bg-[#0d120d] p-5 sm:p-6 mb-8 relative">
            <span className="text-[11px] font-mono text-[#bbf451] uppercase tracking-wider block mb-2 font-bold">
              Engineering Principle
            </span>
            <p className="text-neutral-300 font-sans text-xs sm:text-sm leading-relaxed">
              For every meaningful data flow, define the initial state, the update frequency, and the recovery path. GraphQL trades backend simplicity for frontend flexibility. If you choose it, you must account for HTTP caching complexity and N+1 query risks (mitigated by tools like DataLoader).
            </p>
          </div>
        </div>

        {/* Section 3: Real-World Example: The Blog Platform */}
        <div className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
            Real-World Example: The Blog Platform
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed mb-4">
            Imagine you are building a blogging platform.
          </p>
          <div className="space-y-4 text-neutral-300 text-sm sm:text-base font-sans mb-8">
            <div className="border-l-2 border-[#bbf451] pl-4 py-1">
              <strong className="text-white">Use REST</strong> to fetch a single blog post (<code className="text-[#bbf451] font-mono text-xs">GET /posts/123</code>). It is cacheable at the CDN level, simple to implement, and the data shape is predictable.
            </div>
            <div className="border-l-2 border-[#bbf451] pl-4 py-1">
              <strong className="text-white">Use GraphQL</strong> to fetch a user's home feed. You need the post title, the author's name, the comment count, and the like status. With REST, this might require 4 separate endpoints or one massively over-fetching endpoint. With GraphQL, the resolver engine orchestrates this in a single, optimized request.
            </div>
          </div>
        </div>

        {/* Section 4: The Takeaway */}
        <div className="mb-14 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
            The Takeaway
          </h2>
          <p className="text-neutral-300 text-base leading-relaxed">
            Production systems don't guess. They match the tool to the job.
          </p>
          <ul className="space-y-2 text-neutral-300 text-sm sm:text-base font-sans pl-2">
            <li>• Need real-time, bidirectional, or highly nested data? <strong className="text-[#bbf451]">GraphQL</strong>.</li>
            <li>• Building simple, stateless, heavily cached CRUD APIs? <strong className="text-white">REST</strong>.</li>
          </ul>
          <p className="text-neutral-400 text-sm leading-relaxed pt-2">
            Stop choosing your API architecture based on hype. Choose based on your data shape, caching constraints, and team velocity.
          </p>

          {/* REST Over-fetching Code Card */}
          <div className="border border-[#263222] bg-[#090b0e] font-mono text-xs overflow-hidden shadow-xl mt-6">
            <div className="px-4 py-2.5 bg-[#0e1216] border-b border-[#1b222d] flex items-center justify-between text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-sm bg-[#bbf451]/20 border border-[#bbf451] inline-block" />
                <span className="text-[10px] tracking-wider text-[#bbf451] uppercase font-semibold">
                  BOLUWATIFE OMOLOYE / CODE NOTE
                </span>
              </div>
              <div className="flex items-center gap-4 text-[10px]">
                <span className="px-1.5 py-0.5 bg-[#141922] text-neutral-400 border border-[#232a38]">JAVASCRIPT</span>
                <button
                  type="button"
                  onClick={() => handleCopy(REST_OVERFETCH_CODE, 'rest')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  {copiedCode === 'rest' ? 'COPIED ✓' : 'COPY'}
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(REST_OVERFETCH_CODE, 'rest-overfetching.js')}
                  className="hover:text-[#bbf451] transition-colors cursor-pointer"
                >
                  DOWNLOAD
                </button>
              </div>
            </div>
            <pre className="p-5 overflow-x-auto text-neutral-200 leading-relaxed text-xs sm:text-[13px] font-mono">
              <code>{REST_OVERFETCH_CODE}</code>
            </pre>
          </div>
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
                id="article-rest-consent"
                defaultChecked
                type="checkbox"
                className="rounded-none bg-[#111318] border border-[#27272a] text-[#bbf451] focus:ring-0 w-3.5 h-3.5"
              />
              <label htmlFor="article-rest-consent">
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
