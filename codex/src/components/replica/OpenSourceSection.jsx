export default function OpenSourceSection() {
  return (
    <section className="py-20 border-b border-[#181c24]" id="open-source">
  {/* Header */}
  <div className="pb-8 border-b border-[#181d27] mb-12">
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">/OPEN_SOURCE</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-sans">Built in the open, with intent.</h2>
      </div>
      <a className="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1 transition-colors self-start sm:self-end pb-1" href="https://github.com" rel="noopener noreferrer" target="_blank">
        View activity ↗
      </a>
    </div>
  </div>

  {/* 3 Metric / Philosophy Columns (01, 02, 03) */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
    {/* Col 1 */}
    <div className="flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-6 h-6 border border-[#2e432a] bg-[#111612] flex items-center justify-center text-[#bbf451] text-xs font-mono rounded-none">
            ✓
          </div>
          <span className="text-[11px] font-mono text-neutral-600">01</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-tight">API ergonomics</h3>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-3">
          Typed, documented, and predictable
        </p>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
          Interfaces for teams that need to move with confidence.
        </p>
      </div>
      <div className="pt-6 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
        1 MERGED CONTRIBUTIONS
      </div>
    </div>

    {/* Col 2 */}
    <div className="flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-6 h-6 border border-[#2e432a] bg-[#111612] flex items-center justify-center text-[#bbf451] text-xs font-mono rounded-none">
            ✓
          </div>
          <span className="text-[11px] font-mono text-neutral-600">02</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-tight">Tooling that stays out of the way</h3>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-3">
          Small developer utilities that remove friction
        </p>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
          from daily work without adding ceremony.
        </p>
      </div>
      <div className="pt-6 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
        3 MAINTAINED PACKAGES
      </div>
    </div>

    {/* Col 3 with vertical divider border on left */}
    <div className="flex flex-col justify-between min-h-[220px] md:border-l md:border-[#181d27] md:pl-8 lg:pl-12">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-6 h-6 border border-[#2e432a] bg-[#111612] flex items-center justify-center text-[#bbf451] text-xs font-mono rounded-none">
            ✓
          </div>
          <span className="text-[11px] font-mono text-neutral-600">03</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-3 font-sans tracking-tight">Useful technical notes</h3>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans mb-3">
          Writing about the practical edges of
        </p>
        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
          interfaces, APIs, release workflows, and systems thinking.
        </p>
      </div>
      <div className="pt-6 font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
        10+ PUBLISHED NOTES
      </div>
    </div>
  </div>

  {/* LIVE_GITHUB_SIGNAL Container matching IMAGE_1 */}
  <div className="bg-[#090a0d] border border-[#1b2029] border-l-2 border-l-[#bbf451] rounded-none overflow-hidden font-mono shadow-2xl">
    {/* Top Header Row */}
    <div className="px-6 py-5 border-b border-[#181d27] flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="w-2.5 h-2.5 rounded-full bg-[#bbf451] shadow-[0_0_8px_#bbf451]"></span>
        <div>
          <span className="text-xs text-neutral-300 font-mono tracking-wider block">/LIVE_GITHUB_SIGNAL</span>
          <span className="text-[9px] text-neutral-500 uppercase tracking-widest block font-mono mt-0.5">PUBLIC ACTIVITY · CREATOR0009</span>
        </div>
      </div>
      <a className="text-neutral-400 hover:text-white text-xs font-mono flex items-center gap-1 transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">
        Open profile ↗
      </a>
    </div>

    {/* Stats and Avatar Row */}
    <div className="px-6 py-6 border-b border-[#181d27] flex items-center gap-12 sm:gap-20">
      {/* Avatar Thumbnail */}
      <div className="w-12 h-12 bg-[#12161e] border border-[#212733] rounded overflow-hidden shrink-0">
        <img alt="avatar" className="w-full h-full object-cover grayscale contrast-125" src="/avatar.png" />
      </div>
      <div className="flex items-center gap-12 sm:gap-24">
        <div>
          <div className="text-xl font-bold text-white font-sans">32</div>
          <div className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5 font-mono">PUBLIC REPOS</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white font-sans">2</div>
          <div className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5 font-mono">FOLLOWERS</div>
        </div>
        <div>
          <div className="text-xl font-bold text-white font-sans">3</div>
          <div className="text-[9px] text-neutral-500 uppercase tracking-wider mt-0.5 font-mono">RECENT NODES</div>
        </div>
      </div>
    </div>

    {/* Activity Stream List */}
    <div className="divide-y divide-[#181d27]">
      {/* Activity Item 1 */}
      <div className="px-6 py-4 flex items-center justify-between hover:bg-[#0c0e12] transition-colors group">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-none border border-[#212733] bg-[#0f1115] flex items-center justify-center shrink-0 mt-0.5 text-neutral-400">
            <svg className="w-3.5 h-3.5 text-[#bbf451]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <circle cx="18" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
              <line x1="6" x2="6" y1="9" y2="21"></line>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#bbf451] tracking-wider">FILETOIPFS</span>
              <span className="text-[11px] text-neutral-500">·</span>
              <span className="text-xs text-[#bbf451] font-mono">0e57910</span>
            </div>
            <p className="text-xs text-neutral-300 font-sans mt-0.5">changed backend url in production</p>
            <div className="text-[10px] text-neutral-500 mt-1 uppercase font-mono">
              Sep 23, 2025 · JAVASCRIPT
            </div>
          </div>
        </div>
        <span className="text-neutral-500 group-hover:text-white transition-colors text-xs font-mono">↗</span>
      </div>

      {/* Activity Item 2 */}
      <div className="px-6 py-4 flex items-center justify-between hover:bg-[#0c0e12] transition-colors group">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-none border border-[#212733] bg-[#0f1115] flex items-center justify-center shrink-0 mt-0.5 text-neutral-400">
            <svg className="w-3.5 h-3.5 text-[#bbf451]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <circle cx="18" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
              <line x1="6" x2="6" y1="9" y2="21"></line>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#bbf451] tracking-wider">ZGZC</span>
              <span className="text-[11px] text-neutral-500">·</span>
              <span className="text-xs text-[#bbf451] font-mono">e6f5329</span>
            </div>
            <p className="text-xs text-neutral-300 font-sans mt-0.5">version one</p>
            <div className="text-[10px] text-neutral-500 mt-1 uppercase font-mono">
              Jul 17, 2025 · TYPESCRIPT
            </div>
          </div>
        </div>
        <span className="text-neutral-500 group-hover:text-white transition-colors text-xs font-mono">↗</span>
      </div>

      {/* Activity Item 3 */}
      <div className="px-6 py-4 flex items-center justify-between hover:bg-[#0c0e12] transition-colors group">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-none border border-[#212733] bg-[#0f1115] flex items-center justify-center shrink-0 mt-0.5 text-neutral-400">
            <svg className="w-3.5 h-3.5 text-[#bbf451]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
              <circle cx="18" cy="18" r="3"></circle>
              <circle cx="6" cy="6" r="3"></circle>
              <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
              <line x1="6" x2="6" y1="9" y2="21"></line>
            </svg>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#bbf451] tracking-wider">PORTFOLIO</span>
              <span className="text-[11px] text-neutral-500">·</span>
              <span className="text-xs text-[#bbf451] font-mono">ac73bc1</span>
            </div>
            <p className="text-xs text-neutral-300 font-sans mt-0.5">Initial commit</p>
            <div className="text-[10px] text-neutral-500 mt-1 uppercase font-mono">
              Jul 20, 2023
            </div>
          </div>
        </div>
        <span className="text-neutral-500 group-hover:text-white transition-colors text-xs font-mono">↗</span>
      </div>
    </div>
  </div>
</section>
  )
}
