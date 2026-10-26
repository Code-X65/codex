import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import aboutPortrait from '../assets/about-portrait.png'

export default function AboutMe() {
  return (
    <div className="w-full flex flex-col text-on-surface bg-surface min-h-screen">
      {/* SECTION 1: EDITORIAL HEADER & METADATA BANNER */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-surface-container-low p-space-lg md:p-space-xl relative overflow-hidden rounded border border-outline-variant/30"
        >
          <div className="flex flex-col gap-space-md">
            {/* Eyebrow Tag */}
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                02 // ABOUT THE ENGINEER
              </span>
              <span className="text-outline-variant font-label-code text-label-code hidden sm:inline">
                SYS.ARCH: SPEC-84 // AI-CTX-RUN
              </span>
            </div>

            {/* Massive Editorial Display Headline */}
            <h1 className="font-headline-xl text-headline-xl tracking-tight text-on-surface uppercase max-w-5xl">
              MORE THAN JUST CODE.{' '}
              <span className="text-secondary">ENGINEERED INTELLIGENCE.</span>
            </h1>

            {/* Sub-statement */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              I build digital products by connecting thoughtful interfaces, reliable
              systems, advanced AI context pipelines, and practical engineering decisions.
            </p>

            {/* Technical Telemetry / System Metadata */}
            <div className="mt-space-md pt-space-md bg-surface-container-lowest p-space-md flex flex-wrap items-center justify-between gap-space-sm rounded border border-outline-variant/30">
              <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs">
                <span className="font-label-caps text-label-caps text-on-surface uppercase">
                  OMOLOYE BOLUWATIFE
                </span>
                <span className="text-outline font-label-code text-label-code">//</span>
                <span className="font-label-caps text-label-caps text-secondary font-semibold">
                  CALLSIGN: CODEX
                </span>
                <span className="text-outline font-label-code text-label-code">//</span>
                <span className="font-label-code text-label-code text-on-surface-variant">
                  04+ YRS FULL-STACK &amp; AI SYSTEMS
                </span>
              </div>
              <a
                className="inline-flex items-center gap-space-xs font-label-code text-label-code text-secondary hover:text-on-surface transition-colors"
                href="mailto:omoloyeamoss65@gmail.com"
              >
                <span className="material-symbols-outlined text-body-sm select-none">alternate_email</span>
                <span>omoloyeamoss65@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: TWO-COLUMN MAIN ABOUT LAYOUT */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          {/* LEFT COLUMN: Editorial Photography & Profile Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col bg-surface-container-low p-space-md md:p-space-lg relative rounded border border-outline-variant/30"
          >
            <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant/30">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                IDENTIFIER // DOSSIER-409
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span className="font-label-caps text-label-caps text-secondary font-semibold">VERIFIED</span>
              </div>
            </div>

            {/* Chiaroscuro Portrait Frame */}
            <div className="relative w-full aspect-[3/4] bg-surface-container-lowest overflow-hidden my-space-sm group rounded border border-outline-variant/40">
              <img
                src={aboutPortrait}
                alt="Omoloye Boluwatife (Codex) portrait"
                className="w-full h-full object-cover grayscale contrast-125 object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Live Overlay Telemetry Pill */}
              <div className="absolute top-space-sm left-space-sm bg-surface-container-lowest/90 backdrop-blur-md p-space-xs px-space-sm flex flex-col gap-0.5 rounded border border-outline-variant/40">
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                  <span className="font-label-caps text-[0.625rem] text-secondary tracking-widest uppercase">
                    SYS.ONLINE
                  </span>
                </div>
                <span className="font-label-code text-[0.6875rem] text-on-surface font-semibold">
                  99.98% RELIABILITY
                </span>
              </div>

              <div className="absolute bottom-space-sm right-space-sm bg-surface-container-lowest/90 backdrop-blur-md p-space-xs px-space-sm text-right rounded border border-outline-variant/40">
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider uppercase block">
                  ROLE
                </span>
                <span className="font-label-code text-[0.6875rem] text-on-surface">
                  FULL-STACK + AI/CONTEXT SPECIALIST
                </span>
              </div>

              <div className="absolute bottom-space-sm left-space-sm bg-surface-container-lowest/90 backdrop-blur-md p-space-xs px-space-sm text-left rounded border border-outline-variant/40">
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider uppercase block">
                  CALLSIGN
                </span>
                <span className="font-label-code text-[0.6875rem] text-secondary font-semibold">
                  CODEX
                </span>
              </div>
            </div>

            {/* Bio Narrative & Contact Link */}
            <div className="flex flex-col gap-space-sm pt-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="font-label-caps text-label-caps text-secondary font-semibold">[ SPEC ]</span>
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                  FULL-STACK &amp; AI SYSTEMS SPECIALIST
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                I am a full-stack software engineer and AI systems specialist. Beyond traditional development, I specialize in Prompt Engineering, Context Engineering, and AI-augmented application delivery across web, mobile, and battle-tested backends. Over years of working directly alongside system designers, business analysts, and cross-functional teams, I bridge the gap between high-level business logic, architectural blueprints, and high-performance, secure software.
              </p>
              <a
                className="mt-space-xs inline-flex items-center justify-between p-space-md bg-surface-container hover:bg-surface-container-high transition-colors group rounded border border-outline-variant/30"
                href="mailto:omoloyeamoss65@gmail.com"
              >
                <span className="font-label-code text-label-code text-on-surface">omoloyeamoss65@gmail.com</span>
                <span className="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform text-body-md select-none">
                  arrow_forward
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Engineering Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 flex flex-col bg-surface-container-low p-space-lg md:p-space-xl rounded border border-outline-variant/30"
          >
            <div className="flex items-center justify-between pb-space-lg border-b border-outline-variant/30">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-headline-sm select-none">
                  view_in_ar
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight">
                  HOW I APPROACH ENGINEERING
                </h2>
              </div>
              <span className="font-label-code text-label-code text-outline hidden sm:inline">
                PHILOSOPHY // 03 CORE
              </span>
            </div>

            {/* Principles List */}
            <div className="flex flex-col divide-y divide-outline-variant/30">
              {/* Principle 01 */}
              <div className="py-space-lg group transition-colors duration-300 hover:bg-surface-container/50 p-space-sm -mx-space-sm rounded">
                <div className="flex items-start gap-space-md">
                  <span className="font-label-code text-headline-md text-secondary select-none font-semibold leading-none">
                    01
                  </span>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase group-hover:text-secondary transition-colors">
                      CONTEXT &amp; PROMPT ENGINEERING
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Prompt &amp; context architecture are foundational engineering disciplines. I design structured context injection pipelines, deterministic system prompts, and AI-assisted workflows to accelerate development without sacrificing code hygiene or reliability.
                    </p>
                    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                      <span className="font-label-caps text-label-caps text-outline uppercase">PRIORITY:</span>
                      <span className="font-label-code text-label-code text-tertiary-fixed-dim">
                        Structured Ingestion, Deterministic Tokens, Precision Augmentation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 02 */}
              <div className="py-space-lg group transition-colors duration-300 hover:bg-surface-container/50 p-space-sm -mx-space-sm rounded">
                <div className="flex items-start gap-space-md">
                  <span className="font-label-code text-headline-md text-secondary select-none font-semibold leading-none">
                    02
                  </span>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase group-hover:text-secondary transition-colors">
                      SECURE &amp; RESILIENT FULL-STACK
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Building robust web, mobile, and backend systems. Emphasizing zero-trust authentication, hardened API boundaries, SQL/relational data integrity, and sub-second performance across distributed layers.
                    </p>
                    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                      <span className="font-label-caps text-label-caps text-outline uppercase">METRIC:</span>
                      <span className="font-label-code text-label-code text-tertiary-fixed-dim">
                        Zero-Trust Boundaries, Fault Tolerance, Sub-Second Latency
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Principle 03 */}
              <div className="py-space-lg group transition-colors duration-300 hover:bg-surface-container/50 p-space-sm -mx-space-sm rounded">
                <div className="flex items-start gap-space-md">
                  <span className="font-label-code text-headline-md text-secondary select-none font-semibold leading-none">
                    03
                  </span>
                  <div className="flex flex-col gap-space-xs">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase group-hover:text-secondary transition-colors">
                      CROSS-FUNCTIONAL ALIGNMENT
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      Strong track record collaborating with system designers, business analysts, and product managers. Translating complex user stories and technical diagrams into production systems with zero ambiguity.
                    </p>
                    <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                      <span className="font-label-caps text-label-caps text-outline uppercase">HORIZON:</span>
                      <span className="font-label-code text-label-code text-tertiary-fixed-dim">
                        BA Requirements Translation &amp; Architectural RFCs
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Telemetry Sparkline Component */}
            <div className="mt-space-md bg-surface-container p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md rounded border border-outline-variant/30">
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
                  RUNTIME EFFICIENCY INDEX
                </span>
                <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  O(1) ARCHITECTURAL DISCIPLINE
                </span>
              </div>
              <svg className="w-36 h-8 text-secondary" fill="none" viewBox="0 0 144 32">
                <path
                  d="M0 24L24 24L36 8L52 28L68 12L84 20L100 4L116 18L132 18L144 6"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: TECHNICAL BREADTH (ARCHITECTURAL STRIP) */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg">
        <div className="w-full bg-surface-container-low p-space-lg md:p-space-xl flex flex-col gap-space-lg rounded border border-outline-variant/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-outline-variant/30">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-body-md select-none">
                memory
              </span>
              <h2 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                MY ENGINEERING TOOLKIT // RUNTIME MATRIX
              </h2>
            </div>
            <span className="font-label-code text-label-code text-outline">
              ACTIVE PROFICIENCY: 4+ YEARS
            </span>
          </div>

          {/* 4-Column Grid Strip */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* 01 AI & CONTEXT ENGINEERING */}
            <div className="bg-surface-container p-space-md flex flex-col gap-space-md group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  [ 01 // AI &amp; CONTEXT ]
                </span>
                <span className="material-symbols-outlined text-outline text-body-sm select-none">
                  neurology
                </span>
              </div>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Advanced Prompt Engineering</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Context Window Management</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">AI-Augmented Development</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">LLM Integration &amp; Orchestration</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Synthetic Test Scaffolding</span>
                </li>
              </ul>
            </div>

            {/* 02 WEB & MOBILE PLATFORMS */}
            <div className="bg-surface-container p-space-md flex flex-col gap-space-md group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  [ 02 // WEB &amp; MOBILE ]
                </span>
                <span className="material-symbols-outlined text-outline text-body-sm select-none">
                  devices
                </span>
              </div>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">React.js &amp; Next.js</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">React Native (Mobile)</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">JavaScript / TypeScript</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Responsive &amp; Accessible UI</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">State Hydration &amp; Fluid CSS</span>
                </li>
              </ul>
            </div>

            {/* 03 SECURE BACKEND RUNTIME */}
            <div className="bg-surface-container p-space-md flex flex-col gap-space-md group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  [ 03 // SECURE BACKEND ]
                </span>
                <span className="material-symbols-outlined text-outline text-body-sm select-none">
                  dns
                </span>
              </div>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Node.js &amp; Fastify</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">RESTful APIs &amp; Microservices</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">SQL / PostgreSQL / Prisma</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Redis Caching &amp; Ingress</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">AuthN/AuthZ &amp; Zero-Trust</span>
                </li>
              </ul>
            </div>

            {/* 04 ARCHITECTURE & COLLABORATION */}
            <div className="bg-surface-container p-space-md flex flex-col gap-space-md group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-2 border-b border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
                  [ 04 // ARCH &amp; COLLAB ]
                </span>
                <span className="material-symbols-outlined text-outline text-body-sm select-none">
                  hub
                </span>
              </div>
              <ul className="flex flex-col gap-space-xs">
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">System Designers Alignment</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">BA Requirements Translation</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Technical Specifications / RFCs</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">CI/CD &amp; Automated Testing</span>
                </li>
                <li className="flex items-center gap-space-xs">
                  <span className="font-label-code text-secondary text-label-code font-bold">&gt;</span>
                  <span className="font-body-md text-body-md text-on-surface">Code Review &amp; Perf Profiling</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PERSONAL WORKING STYLE (ENGINEERING LIFECYCLE) */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg">
        <div className="w-full bg-surface-container-low p-space-lg md:p-space-xl flex flex-col gap-space-lg rounded border border-outline-variant/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs pb-space-sm border-b border-outline-variant/30">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-body-md select-none">
                reorder
              </span>
              <h2 className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
                FROM IDEA TO PRODUCTION // ENGINEERING LIFECYCLE
              </h2>
            </div>
            <span className="font-label-code text-label-code text-outline">
              EXECUTION STAGES: 04
            </span>
          </div>

          {/* Chronological Connected Lifecycle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">
            {/* Stage 01 */}
            <div className="bg-surface-container p-space-lg flex flex-col gap-space-sm relative group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-headline-sm text-secondary font-semibold">01</span>
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider">PHASE_ALPHA</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                UNDERSTAND &amp; SYNTHESIZE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Collaborate with business analysts and system designers to define problem constraints and domain boundaries. Clarify edge cases before touching the keyboard.
              </p>
              <div className="mt-auto pt-space-sm">
                <span className="font-label-code text-[0.6875rem] text-secondary tracking-tight">
                  [ DOMAIN BOUNDARIES &amp; SCOPE ]
                </span>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="bg-surface-container p-space-lg flex flex-col gap-space-sm relative group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-headline-sm text-secondary font-semibold">02</span>
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider">PHASE_BETA</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                ARCHITECT &amp; CONTEXTUALIZE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Structure system contracts, API endpoints, schema relations, and AI context prompts. Plan architectural trade-offs with deterministic rigor.
              </p>
              <div className="mt-auto pt-space-sm">
                <span className="font-label-code text-[0.6875rem] text-secondary tracking-tight">
                  [ CONTRACTS &amp; CONTEXT PROMPTS ]
                </span>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="bg-surface-container p-space-lg flex flex-col gap-space-sm relative group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-headline-sm text-secondary font-semibold">03</span>
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider">PHASE_GAMMA</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                BUILD &amp; AUGMENT
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Implement web, mobile, and backend services with AI-assisted velocity and rigorous type safety. Clean, idiomatic code with continuous validation.
              </p>
              <div className="mt-auto pt-space-sm">
                <span className="font-label-code text-[0.6875rem] text-secondary tracking-tight">
                  [ MULTI-PLATFORM RUNTIME ]
                </span>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="bg-surface-container p-space-lg flex flex-col gap-space-sm relative group hover:bg-surface-container-high transition-colors rounded border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-code text-headline-sm text-secondary font-semibold">04</span>
                <span className="font-label-caps text-[0.625rem] text-outline tracking-wider">PHASE_DELTA</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface tracking-tight uppercase">
                HARDEN &amp; VALIDATE
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Penetration tests, edge-case validation, automated linting, security audits, and deployment observability with production monitoring.
              </p>
              <div className="mt-auto pt-space-sm">
                <span className="font-label-code text-[0.6875rem] text-secondary tracking-tight">
                  [ ZERO-TRUST &amp; OBSERVABILITY ]
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CLOSING TRANSITION & DIRECTIONAL ROUTE */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        <div className="w-full bg-surface-container-low p-space-lg md:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg rounded border border-outline-variant/30">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              MANIFESTO
            </span>
            <blockquote className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase">
              &quot;GOOD SOFTWARE IS BUILT WITH INTENTION AND TEAMWORK.&quot;
            </blockquote>
            <span className="font-body-sm text-body-sm text-outline">
              Next Vector: Curated case studies and production architecture breakdowns across web, mobile &amp; AI systems.
            </span>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-space-md px-space-xl py-space-md bg-secondary text-on-secondary-fixed hover:bg-secondary-fixed transition-colors font-label-caps text-label-caps uppercase tracking-wider group shrink-0 font-medium rounded"
          >
            <span>EXPLORE SELECTED PROJECTS</span>
            <span className="material-symbols-outlined text-body-md group-hover:translate-x-1 transition-transform select-none">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
