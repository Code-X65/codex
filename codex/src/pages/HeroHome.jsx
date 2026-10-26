import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroPortrait from '../assets/hero-portrait.png'

export default function HeroHome() {
  return (
    <div className="w-full relative overflow-hidden bg-primary-container min-h-[calc(100vh-4rem)]">
      {/* Architectural Micro-Grid Background Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-variant/20 via-surface-container-lowest/80 to-primary-container" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#343535_1px,transparent_1px),linear-gradient(to_bottom,#343535_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Main Architectural Grid Container */}
      <div className="relative w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        {/* Top Precision Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full flex flex-wrap items-center justify-between gap-space-sm pb-space-md mb-space-lg border-b border-outline-variant/30"
        >
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs bg-surface-container-high px-space-sm py-1 rounded">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps uppercase text-on-surface tracking-widest">
                SYS.ONLINE // 12MS
              </span>
            </div>
            <span className="hidden sm:inline font-label-caps text-label-caps text-outline uppercase tracking-wider">
              omoloye@codex-core:~$ ./verify_system_integrity.sh
            </span>
          </div>

          <div className="flex items-center gap-space-lg">
            <span className="font-label-caps text-label-caps text-outline tracking-wider hidden md:inline">
              FREQ: 60Hz • BUFFER: OPTIMAL
            </span>
            <div className="flex items-center gap-1 font-label-code text-label-code text-on-surface-variant">
              <span className="text-secondary">[+]</span>
              <span>BUILD: 2025.04.19</span>
            </div>
          </div>
        </motion.div>

        {/* Hero Core Layer: Split Architectural Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch relative min-h-[580px]">
          {/* 1. Left Metadata Rail (Col 1 on desktop) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between items-center py-space-md bg-surface-container-lowest relative border border-outline-variant/40 rounded">
            {/* Corner brackets */}
            <span className="absolute top-1 left-1 text-secondary font-label-code text-[11px] leading-none select-none">+</span>
            <span className="absolute top-1 right-1 text-outline font-label-code text-[11px] leading-none select-none">+</span>
            <span className="absolute bottom-1 left-1 text-outline font-label-code text-[11px] leading-none select-none">+</span>
            <span className="absolute bottom-1 right-1 text-secondary font-label-code text-[11px] leading-none select-none">+</span>

            {/* Top Abstract Glyph */}
            <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center text-secondary rounded">
              <span className="material-symbols-outlined text-[20px] select-none">architecture</span>
            </div>

            {/* Vertical Micro Metadata Typography */}
            <div className="py-space-xl flex items-center justify-center [writing-mode:vertical-rl] rotate-180">
              <span className="font-label-caps text-label-caps text-on-surface tracking-[0.2em] uppercase font-semibold">
                SOFTWARE ARCHITECTURE // 04 YRS EXP
              </span>
            </div>

            {/* Vertical Metric Counter */}
            <div className="flex flex-col items-center gap-space-xs text-center">
              <span className="font-label-code text-[10px] text-outline">LOC</span>
              <span className="font-label-code text-[11px] text-secondary font-semibold">840K+</span>
              <div className="w-4 h-[2px] bg-secondary-container mt-1" />
            </div>
          </div>

          {/* 2. Main Typographic Engine & Core Statement (Col 2-7 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col justify-between py-space-sm z-10"
          >
            <div className="flex flex-col">
              {/* Architectural Overline Identifier */}
              <div className="flex items-center gap-space-xs mb-space-sm">
                <span className="text-secondary font-label-code text-body-sm font-semibold">[01]</span>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
                  PRINCIPAL FULL-STACK SYSTEM • DESIGN
                </span>
              </div>

              {/* Dominant Headline */}
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase select-none leading-none">
                ENGINEERING
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-on-surface via-primary to-outline">
                  DIGITAL
                </span>
                <span className="block text-secondary">EXPERIENCES</span>
              </h1>

              {/* Supporting Rigorous Value Statement */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mt-space-lg leading-relaxed">
                I design and build reliable digital products, from intuitive editorial interfaces to fault-tolerant, high-throughput distributed backend architectures.
              </p>

              {/* Technical Spec Badges */}
              <div className="flex flex-wrap gap-space-xs mt-space-md">
                <span className="font-label-caps text-label-caps bg-surface-container-high px-space-sm py-1 text-on-surface uppercase rounded">
                  RUST • GO • TYPESCRIPT
                </span>
                <span className="font-label-caps text-label-caps bg-surface-container-high px-space-sm py-1 text-on-surface uppercase rounded">
                  DISTRIBUTED KERNEL ARCH
                </span>
                <span className="font-label-caps text-label-caps bg-surface-container-high px-space-sm py-1 text-secondary uppercase rounded">
                  ZERO-DOWNTIME OBS
                </span>
              </div>
            </div>

            {/* Action Cluster */}
            <div className="flex flex-wrap items-center gap-space-md pt-space-xl">
              {/* Primary Technical Button */}
              <Link
                to="/projects"
                className="group inline-flex items-center justify-between gap-space-md bg-secondary text-on-secondary-fixed px-space-lg py-space-md font-label-caps text-label-caps uppercase tracking-wider font-semibold shadow-lg transition-all duration-200 hover:bg-secondary-fixed rounded"
              >
                <span>EXPLORE MY WORK</span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>

              {/* Secondary High-Contrast Outline Link */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-space-xs bg-surface-container-high px-space-lg py-space-md font-label-caps text-label-caps text-on-surface uppercase tracking-wider transition-colors duration-200 hover:text-secondary hover:bg-surface-variant rounded border border-outline-variant/40 font-semibold"
              >
                <span>LET'S TALK</span>
                <span className="material-symbols-outlined text-[16px] text-secondary">north_east</span>
              </Link>

              <div className="hidden sm:flex items-center gap-2 font-label-code text-body-sm text-outline ml-auto">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary" />
                <span>AVAILABILITY // IMMEDIATE</span>
              </div>
            </div>
          </motion.div>

          {/* 3. Striking Monochromatic Portrait & Live HUD Overlay (Col 8-11) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative flex flex-col justify-end min-h-[460px] lg:min-h-full"
          >
            {/* Ambient Portrait Frame with Crosshair Intersections */}
            <div className="relative w-full h-full min-h-[420px] bg-surface-container-lowest overflow-hidden shadow-2xl rounded border border-outline-variant/40 group">
              {/* Subtle Vignette Frame */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-container/40 via-transparent to-primary-container/40 z-10 pointer-events-none" />

              {/* Hero Portrait */}
              <img
                src={heroPortrait}
                alt="Omoloye Boluwatife (Codex) portrait"
                className="w-full h-full object-cover object-center grayscale contrast-125 filter transition-transform duration-700 group-hover:scale-105"
              />

              {/* Architectural Hairline Corner Markers */}
              <span className="absolute top-2 left-2 text-secondary font-label-code text-xs z-20 select-none">+</span>
              <span className="absolute top-2 right-2 text-secondary font-label-code text-xs z-20 select-none">+</span>
              <span className="absolute bottom-2 left-2 text-secondary font-label-code text-xs z-20 select-none">+</span>
              <span className="absolute bottom-2 right-2 text-secondary font-label-code text-xs z-20 select-none">+</span>

              {/* Top HUD Badge */}
              <div className="absolute top-4 left-4 z-20 bg-surface-container-lowest/90 backdrop-blur-md px-space-sm py-1 flex items-center gap-space-xs rounded border border-outline-variant/40">
                <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                <span className="font-label-code text-[11px] text-on-surface uppercase tracking-wide">
                  ID // CODEX.BOLUWATIFE
                </span>
              </div>

              {/* Embedded Live Micro Telemetry Panel on Image */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-surface-container-lowest/95 backdrop-blur-md p-space-sm rounded border border-outline-variant/40">
                <div className="flex items-center justify-between pb-1">
                  <span className="font-label-caps text-[10px] text-outline uppercase tracking-wider">
                    THROUGHPUT OBSERVER
                  </span>
                  <span className="font-label-code text-[10px] text-secondary font-medium">
                    980 MBPS • 99.98%
                  </span>
                </div>
                {/* Step SVG Telemetry Graphic */}
                <svg className="w-full h-8 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 200 40">
                  <path
                    d="M 0 35 L 20 28 L 35 32 L 55 12 L 70 24 L 90 6 L 110 28 L 130 18 L 150 25 L 175 4 L 190 20 L 200 10"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    d="M 0 35 L 20 28 L 35 32 L 55 12 L 70 24 L 90 6 L 110 28 L 130 18 L 150 25 L 175 4 L 190 20 L 200 10 L 200 40 L 0 40 Z"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* 4. Section Index Rail (Far Right, Col 12) */}
          <div className="hidden lg:flex lg:col-span-1 flex-col justify-between py-space-md bg-surface-container-lowest items-center relative border border-outline-variant/40 rounded">
            {/* Crosshairs */}
            <span className="absolute top-1 left-1 text-outline font-label-code text-[11px] leading-none">+</span>
            <span className="absolute top-1 right-1 text-secondary font-label-code text-[11px] leading-none">+</span>
            <span className="absolute bottom-1 left-1 text-secondary font-label-code text-[11px] leading-none">+</span>
            <span className="absolute bottom-1 right-1 text-outline font-label-code text-[11px] leading-none">+</span>

            {/* Vertical Index Directory Navigation */}
            <div className="flex flex-col gap-space-lg items-center">
              <Link to="/about" className="group flex flex-col items-center gap-1 transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps text-on-surface font-semibold tracking-widest [writing-mode:vertical-rl] group-hover:text-secondary">
                  01 SERVICES
                </span>
              </Link>
              <Link to="/expertise" className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest [writing-mode:vertical-rl] group-hover:text-secondary">
                  02 TECH STACK
                </span>
              </Link>
              <Link to="/projects" className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest [writing-mode:vertical-rl] group-hover:text-secondary">
                  03 WORK PREVIEW
                </span>
              </Link>
              <Link to="/experience" className="group flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
                <span className="w-1.5 h-1.5 rounded-full bg-outline" />
                <span className="font-label-caps text-label-caps text-on-surface-variant tracking-widest [writing-mode:vertical-rl] group-hover:text-secondary">
                  04 CASE STUDIES
                </span>
              </Link>
            </div>
            <div className="font-label-code text-[10px] text-outline">SEC.01</div>
          </div>
        </div>

        {/* Floating Architectural Panels Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mt-space-lg pt-space-md">
          {/* Panel A: Capability Module */}
          <div className="md:col-span-4 bg-surface-container-low p-space-lg flex flex-col justify-between relative group hover:bg-surface-container transition-colors duration-300 rounded border border-outline-variant/30">
            {/* Precision Corner Indicators */}
            <span className="absolute top-2 left-2 text-secondary font-label-code text-[11px]">+</span>
            <span className="absolute top-2 right-2 text-outline font-label-code text-[11px] group-hover:text-secondary transition-colors">+</span>
            <span className="absolute bottom-2 left-2 text-outline font-label-code text-[11px]">+</span>
            <span className="absolute bottom-2 right-2 text-secondary font-label-code text-[11px]">+</span>
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                  CAPABILITY // CORE
                </span>
                <span className="font-label-code text-[10px] text-outline">MTR.04</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase font-semibold">
                ENGINEERED TO SCALE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                Maintainable architecture. Thoughtful interfaces. Highly reliable backend micro-kernels that handle heavy concurrent traffic without performance degradation.
              </p>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <span className="font-label-code text-label-code text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[16px]">chevron_forward</span>
                ZERO REDUNDANCY
              </span>
              <span className="material-symbols-outlined text-outline text-[18px] group-hover:text-on-surface group-hover:translate-x-1 transition-all">
                north_east
              </span>
            </div>
          </div>

          {/* Panel B: Primary Specialty Engine */}
          <div className="md:col-span-4 bg-surface-container-lowest p-space-lg flex flex-col justify-between relative group hover:bg-surface-container-low transition-colors duration-300 rounded border border-outline-variant/30">
            <span className="absolute top-2 left-2 text-secondary font-label-code text-[11px]">+</span>
            <span className="absolute top-2 right-2 text-secondary font-label-code text-[11px]">+</span>
            <span className="absolute bottom-2 left-2 text-outline font-label-code text-[11px]">+</span>
            <span className="absolute bottom-2 right-2 text-secondary font-label-code text-[11px]">+</span>
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <span className="font-label-caps text-label-caps text-outline uppercase">
                  SPECIALTY // PRIMARY
                </span>
                <span className="inline-block w-2 h-2 bg-secondary rounded-full" />
              </div>
              <h2 className="font-headline-sm text-headline-sm text-secondary tracking-tight uppercase font-semibold">
                FULL-STACK ENGINEERING
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                From frontend experiences to APIs, data pipelining, and deployment automation — I build cohesive, production-hardened end-to-end software solutions.
              </p>
            </div>
            <div className="pt-space-md">
              <div className="flex items-center justify-between text-on-surface font-label-caps text-label-caps mb-1">
                <span>LATENCY OPTIMIZATION</span>
                <span className="text-secondary font-label-code">4.2ms P99</span>
              </div>
              <div className="w-full bg-surface-container-high h-1 overflow-hidden rounded">
                <div className="bg-secondary h-full w-[88%] transition-all duration-1000" />
              </div>
            </div>
          </div>

          {/* Panel C: Featured Work Telemetry Card */}
          <div className="md:col-span-4 bg-surface-container-low p-space-lg flex flex-col justify-between relative group hover:bg-surface-container transition-colors duration-300 rounded border border-outline-variant/30">
            <span className="absolute top-2 left-2 text-outline font-label-code text-[11px]">+</span>
            <span className="absolute top-2 right-2 text-secondary font-label-code text-[11px]">+</span>
            <span className="absolute bottom-2 left-2 text-secondary font-label-code text-[11px]">+</span>
            <span className="absolute bottom-2 right-2 text-outline font-label-code text-[11px]">+</span>
            <div>
              <div className="flex items-center justify-between pb-space-sm mb-space-sm">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">
                  SELECTED WORK // 01
                </span>
                <span className="font-label-code text-[10px] text-secondary">ACTIVE DEPLOY</span>
              </div>
              {/* Mini Interactive Visual Preview Component */}
              <div className="w-full bg-primary-container p-space-sm mb-space-sm relative overflow-hidden rounded border border-outline-variant/30">
                <div className="flex items-center justify-between pb-2 text-[11px] font-label-code text-outline border-b border-outline-variant/30">
                  <span className="text-secondary">core/kernel.rs</span>
                  <span>RUNNING // 200</span>
                </div>
                <div className="font-label-code text-[11px] text-on-surface-variant leading-tight space-y-0.5 pt-2">
                  <div className="text-outline">// System telemetry dispatcher</div>
                  <div>
                    <span className="text-secondary">pub struct</span> TelemetryNode &#123;
                  </div>
                  <div className="pl-3">
                    ingress_rate: <span className="text-secondary">1.2Gbps</span>,
                  </div>
                  <div className="pl-3">
                    uptime_pct: <span className="text-secondary">99.98</span>
                  </div>
                  <div>&#125;</div>
                </div>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase font-medium">
                CORE TELEMETRY &amp; DISTRIBUTED SYSTEMS
              </h3>
            </div>
            <div className="pt-space-md flex items-center justify-between">
              <Link
                to="/projects"
                className="font-label-caps text-label-caps text-on-surface hover:text-secondary uppercase tracking-wider flex items-center gap-1 transition-colors font-semibold"
              >
                <span>VIEW PROJECTS</span>
                <span className="material-symbols-outlined text-[16px] text-secondary">arrow_forward</span>
              </Link>
              <span className="font-label-code text-[11px] text-outline">SYS.V4.19</span>
            </div>
          </div>
        </div>

        {/* Architectural Terminal / Diagnostic Footer Strip */}
        <div className="w-full mt-space-lg pt-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md font-label-code text-body-sm text-outline border-t border-outline-variant/30">
          <div className="flex items-center gap-space-md">
            <span>omoloye@codex-core:~$ ./verify_system_integrity.sh</span>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="text-on-surface-variant">MEM: 14.2GB / 32GB</span>
            <span className="text-secondary">CPU: 48% OK</span>
            <span className="hidden sm:inline">STABLE PROTOCOL</span>
          </div>
        </div>
      </div>
    </div>
  )
}
