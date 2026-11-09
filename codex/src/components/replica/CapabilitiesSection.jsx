export default function CapabilitiesSection() {
  return (
    <section className="py-20 border-b border-brand-cardBorder/60" id="skills"><div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
  {/* Left Column: Heading, Description, Tech Icons */}
  <div className="lg:col-span-5 flex flex-col justify-between">
    <div>
      <span className="text-[11px] font-mono text-[#a1a7b4] uppercase tracking-widest block mb-4">/CAPABILITIES</span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight font-sans">
        The stack is just the starting point.
      </h2>
      <p className="text-neutral-400 text-sm md:text-base leading-relaxed mb-8 max-w-md font-sans">
        I use tools to make hard product problems easier to understand, ship, and sustain. The durable work happens in the decisions between them.
      </p>
      {/* Tech Icons Row with border top */}
      <div className="border-t border-[#27272a] pt-6 flex items-center gap-8">
        {/* React */}
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-neutral-400 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"></ellipse>
            <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"></ellipse>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
          </svg>
          <span className="text-xs font-mono text-neutral-400">React</span>
        </div>
        {/* Node */}
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-neutral-400 fill-none stroke-current" strokeWidth="1.75" viewBox="0 0 24 24">
            <path d="M8 7h8a3 3 0 0 1 0 6H8a3 3 0 0 1 0-6z"></path>
            <path d="M8 11h8a3 3 0 0 1 0 6H8a3 3 0 0 1 0-6z"></path>
          </svg>
          <span className="text-xs font-mono text-neutral-400">Node</span>
        </div>
        {/* Postgres */}
        <div className="flex flex-col items-center gap-2">
          <svg className="w-6 h-6 text-neutral-400 fill-none stroke-current" strokeWidth="1.5" viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
            <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"></path>
            <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"></path>
          </svg>
          <span className="text-xs font-mono text-neutral-400">Postgres</span>
        </div>
        {/* APIs */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-6 flex items-center justify-center font-mono text-base font-semibold text-neutral-400">{ }</div>
          <span className="text-xs font-mono text-neutral-400">APIs</span>
        </div>
      </div>
    </div>
  </div>

  {/* Right Column: Skills Progress Bars & Working Method Box */}
  <div className="lg:col-span-7 flex flex-col justify-between">
    {/* 6 Capability Bars in 2 Columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
      {/* Item 1: TypeScript / JavaScript */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">TypeScript / JavaScript</h4>
          <span className="text-xs font-mono text-[#bbf451]">94</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">PRIMARY LANGUAGE</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[94%]"></div>
        </div>
      </div>

      {/* Item 2: PostgreSQL / MySQL / MongoDB */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">PostgreSQL / MySQL / MongoDB</h4>
          <span className="text-xs font-mono text-[#bbf451]">84</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">DURABLE STATE</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[84%]"></div>
        </div>
      </div>

      {/* Item 3: React / Next.js */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">React / Next.js</h4>
          <span className="text-xs font-mono text-[#bbf451]">92</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">INTERFACE SYSTEMS</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[92%]"></div>
        </div>
      </div>

      {/* Item 4: CMS / No code */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">CMS / No code</h4>
          <span className="text-xs font-mono text-[#bbf451]">95</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">WORDPRESS, WEBFLOW, FRAMER, WIX, GOHIGHLEVEL</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[95%]"></div>
        </div>
      </div>

      {/* Item 5: Node.js / API design */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">Node.js / API design</h4>
          <span className="text-xs font-mono text-[#bbf451]">89</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">SERVICE LAYERS</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[89%]"></div>
        </div>
      </div>

      {/* Item 6: Design systems */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">Design systems</h4>
          <span className="text-xs font-mono text-[#bbf451]">86</span>
        </div>
        <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">PRODUCT COHERENCE</span>
        <div className="w-full bg-[#1b2029] h-[2px]">
          <div className="bg-[#bbf451] h-full w-[86%]"></div>
        </div>
      </div>
    </div>

    {/* Working Method Box matching reference */}
    <div className="border border-[#27272a] bg-[#0c0e12] p-5 font-mono">
      <span className="text-neutral-400 text-xs block uppercase tracking-wider mb-2 font-mono">/WORKING_METHOD</span>
      <p className="text-neutral-300 font-mono text-xs leading-relaxed">
        Build the thinnest version that tests the real assumption. Instrument it. Learn what needs to become durable.
      </p>
    </div>
  </div>
</div></section>
  )
}
