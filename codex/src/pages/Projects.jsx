import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Projects({ onModuleClick }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filterButtons = [
    { id: 'all', label: 'All Work' },
    { id: 'apps', label: 'Applications' },
    { id: 'backend', label: 'Backend Engineering' },
    { id: 'websites', label: 'Websites' },
    { id: 'progress', label: 'In Progress' },
  ]

  const shouldShow = (category) => activeFilter === 'all' || activeFilter === category

  return (
    <div className="w-full flex flex-col text-on-surface bg-surface min-h-screen">
      {/* 01. SECTION INTRO / EDITORIAL HEADER */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg bg-surface">
        {/* Top Telemetry Microbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-space-md border-b border-outline-variant gap-space-xs">
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase font-semibold">
              03 // SELECTED WORK // ENGINEERING PORTFOLIO
            </span>
            <span className="text-outline-variant font-label-code">/</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant tracking-wider uppercase">
              SYS.DISPATCH // DEPLOYED REPOSITORIES
            </span>
          </div>
          <div className="flex items-center gap-space-md">
            <span className="font-label-code text-label-code text-on-surface-variant">[ LATENCY // 14MS ]</span>
            <div className="px-space-sm py-0.5 bg-surface-container-high border border-outline-variant rounded text-secondary font-label-caps text-label-caps">
              SYS.INDEX: VERIFIED ARCHITECTURE
            </div>
          </div>
        </div>

        {/* Main Editorial Headline Grid */}
        <div className="pt-space-lg pb-space-md grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface tracking-tighter uppercase font-semibold leading-none">
              BUILT TO SOLVE <br className="hidden sm:inline" />
              <span className="text-secondary underline decoration-secondary decoration-2 underline-offset-8">
                REAL PROBLEMS.
              </span>
            </h1>
          </motion.div>
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="p-space-md bg-surface-container-low border border-outline-variant relative rounded">
              <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                I build digital experiences, full-stack applications, and backend systems that help turn ideas into useful products.
              </p>
              <div className="mt-space-sm pt-space-xs border-t border-outline-variant flex items-center justify-between text-outline font-label-caps text-label-caps">
                <span>LEAD ARCHITECT: CODEX</span>
                <span>EXP: 4+ YRS FULL-STACK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typographic Filter Matrix */}
        <div className="mt-space-md pt-space-md border-t border-outline-variant flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex flex-wrap items-center gap-space-xs" id="filter-matrix">
            {filterButtons.map((btn) => {
              const active = activeFilter === btn.id
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveFilter(btn.id)}
                  className={`px-space-md py-space-xs font-label-caps text-label-caps uppercase tracking-wider transition-colors rounded cursor-pointer ${
                    active
                      ? 'bg-secondary text-on-secondary font-semibold shadow'
                      : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-secondary'
                  }`}
                  type="button"
                >
                  {btn.label}
                </button>
              )
            })}
          </div>
          <div className="hidden sm:flex items-center gap-space-xs font-label-code text-label-code text-outline">
            <span className="material-symbols-outlined text-body-sm text-secondary select-none">tune</span>
            <span>FILTER_STATE: {activeFilter.toUpperCase()}_ACTIVE</span>
          </div>
        </div>
      </section>

      {/* 02. PRIMARY FEATURED SHOWCASE: CORE CONNECT ACADEMY */}
      {(shouldShow('apps') || shouldShow('backend')) && (
        <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg bg-surface">
          <div className="bg-surface-container-low border border-outline-variant relative group transition-all duration-300 hover:border-secondary rounded">
            <span className="absolute -top-2 -left-2 text-secondary font-label-code text-body-md select-none leading-none">+</span>
            <span className="absolute -top-2 -right-2 text-secondary font-label-code text-body-md select-none leading-none">+</span>
            <span className="absolute -bottom-2 -left-2 text-secondary font-label-code text-body-md select-none leading-none">+</span>
            <span className="absolute -bottom-2 -right-2 text-secondary font-label-code text-body-md select-none leading-none">+</span>

            {/* Card Sub-header */}
            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container border-b border-outline-variant">
              <div className="flex items-center gap-space-sm">
                <span className="font-label-code text-label-code text-secondary font-semibold">PRJ-01 // PRIMARY FLAGSHIP</span>
                <span className="text-outline-variant">|</span>
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">FULL-STACK DEVELOPMENT</span>
              </div>
              <div className="flex items-center gap-space-xs font-label-caps text-label-caps text-on-surface">
                <span className="inline-block w-1.5 h-1.5 bg-secondary rounded-full animate-pulse" />
                <span className="text-secondary font-medium">MVP 1 &amp; MVP 2 DEPLOYED · MVP 3 IN PROGRESS</span>
              </div>
            </div>

            {/* Main Showcase Grid */}
            <div className="p-space-md md:p-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              {/* Text & System Highlights Column */}
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase tracking-tight font-semibold">
                    Core Connect Academy
                  </h2>
                  <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">
                    ENTERPRISE LMS PLATFORM &amp; GOVERNANCE
                  </span>
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  Designed and developed an in-house learning platform supporting student and tutor workflows, course management, progress tracking, and administration.
                </p>

                {/* Verified Highlights Checklist */}
                <div className="border border-outline-variant bg-surface-container p-space-md flex flex-col gap-space-xs rounded">
                  <div className="font-label-caps text-label-caps text-secondary uppercase pb-space-xs border-b border-outline-variant flex items-center justify-between">
                    <span>VERIFIED PLATFORM HIGHLIGHTS</span>
                    <span className="text-outline font-label-code">[PROD]</span>
                  </div>
                  <ul className="text-body-sm text-on-surface-variant space-y-1.5 pt-space-xs font-mono">
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Student &amp; Tutor Workflows &amp; Portals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Course &amp; Lesson Management with Real-Time Synchronization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Progress Tracking &amp; Live Telemetry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Authentication &amp; Granular User Roles (RBAC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Payment Integrations with Paystack &amp; Stripe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-secondary font-label-code text-label-caps">▹</span>
                      <span>Administrative Governance &amp; Operational Dashboard</span>
                    </li>
                  </ul>
                </div>

                {/* Verified Tech Tags */}
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  {['REACT', 'NODE.JS', 'REST APIS', 'WEBSOCKETS', 'SWR', 'SQL'].map((t) => (
                    <span key={t} className="px-space-xs py-0.5 bg-surface-container-highest border border-outline-variant font-label-caps text-label-caps text-secondary uppercase rounded">
                      [ {t} ]
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
                  <button
                    onClick={() => onModuleClick('Core Connect Academy Case Study')}
                    className="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:bg-secondary-fixed transition-colors rounded cursor-pointer"
                    type="button"
                  >
                    <span>VIEW CASE STUDY</span>
                    <span className="material-symbols-outlined text-body-sm select-none">arrow_forward</span>
                  </button>
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-surface-container border border-outline-variant text-on-surface hover:border-secondary hover:text-secondary font-label-caps text-label-caps uppercase tracking-wider transition-colors rounded"
                  >
                    <span>ARCHITECTURE SPEC &lt;&gt;</span>
                  </Link>
                </div>
              </div>

              {/* Visual Showcase Frame Column */}
              <div className="lg:col-span-7">
                <div className="relative bg-surface-container border border-outline-variant overflow-hidden rounded group/img">
                  {/* Frame Header */}
                  <div className="flex items-center justify-between px-space-sm py-space-xs bg-surface-container-highest border-b border-outline-variant font-label-code text-label-code text-outline">
                    <div className="flex items-center gap-space-xs">
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                      <span className="w-2.5 h-2.5 rounded-full bg-outline-variant" />
                      <span className="ml-2 text-on-surface">coreconnect.academy/sys/app</span>
                    </div>
                    <span className="text-secondary font-label-caps text-label-caps">[ LIVE LEARNING HUB ]</span>
                  </div>

                  {/* Mockup UI Frame */}
                  <div className="p-4 md:p-6 bg-surface-container-lowest font-body-sm flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-outline-variant pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-secondary/20 border border-secondary text-secondary flex items-center justify-center font-bold text-xs">
                          CC
                        </div>
                        <div>
                          <div className="font-medium text-on-surface text-sm">Core Connect Academy OS</div>
                          <div className="text-[11px] text-outline">ROLE: SYSTEM_SUPERVISOR // MULTI-TENANT</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 font-label-code text-xs">
                        <span className="px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-secondary">Paystack: SYNCED</span>
                        <span className="px-2 py-0.5 rounded bg-surface-container border border-outline-variant text-on-surface-variant">Stripe: ACTIVE</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col justify-between rounded">
                        <span className="text-outline text-xs uppercase font-label-caps">Active Enrollments</span>
                        <span className="text-xl font-bold text-on-surface font-label-code mt-1">1,842</span>
                        <span className="text-[11px] text-secondary mt-1 font-label-code">&uarr; 18.4% WoW Retention</span>
                      </div>
                      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col justify-between rounded">
                        <span className="text-outline text-xs uppercase font-label-caps">WebSocket Real-Time Sync</span>
                        <span className="text-xl font-bold text-secondary font-label-code mt-1">12ms Latency</span>
                        <span className="text-[11px] text-on-surface-variant mt-1 font-label-code">Socket Heartbeat: 99.99%</span>
                      </div>
                      <div className="bg-surface-container border border-outline-variant p-3 flex flex-col justify-between rounded">
                        <span className="text-outline text-xs uppercase font-label-caps">Course Completion</span>
                        <span className="text-xl font-bold text-on-surface font-label-code mt-1">94.8%</span>
                        <span className="text-[11px] text-secondary mt-1 font-label-code">Continuous SWR Cache</span>
                      </div>
                    </div>

                    <div className="bg-surface-container-low border border-outline-variant p-3.5 flex flex-col gap-2.5 rounded">
                      <div className="flex items-center justify-between text-xs font-label-caps">
                        <span className="text-on-surface font-medium uppercase tracking-wide">Course &amp; Lesson Management Matrix</span>
                        <span className="text-outline font-label-code">MODULE_STATUS: VERIFIED</span>
                      </div>
                      <div className="space-y-1.5 font-label-code text-xs">
                        <div className="flex items-center justify-between p-2 bg-surface-container border border-outline-variant rounded">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-on-surface">SYS-104: Distributed Backend Foundations</span>
                          </div>
                          <span className="text-outline text-[11px]">84/84 Modules Synced · 3 Tutors</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-surface-container border border-outline-variant rounded">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-secondary" />
                            <span className="text-on-surface">SYS-202: Advanced React State &amp; SWR Hydration</span>
                          </div>
                          <span className="text-outline text-[11px]">62/62 Modules Synced · 2 Tutors</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-label-code text-outline pt-1">
                      <span>ARCHITECTURE: CLIENT-FACING PORTAL + SECURE ADMIN ENGINE</span>
                      <span className="text-secondary font-medium">RBAC ROLE-BASED ACCESS CONTROL</span>
                    </div>
                  </div>

                  <div className="px-space-sm py-space-xs bg-surface-container-lowest border-t border-outline-variant flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                    <span>SYS.VER // CORE CONNECT ACADEMY (v2.8)</span>
                    <span className="text-secondary font-medium">PAYMENTS ENGINE INTEGRATED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 03. SECONDARY FEATURED SYSTEMS */}
      {(shouldShow('apps') || shouldShow('backend')) && (
        <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg bg-surface">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-outline-variant gap-space-xs mb-space-lg">
            <div>
              <div className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">// SYSTEM PLATFORMS</div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                SECONDARY FEATURED SYSTEMS
              </h3>
            </div>
            <div className="font-label-code text-label-code text-outline">
              REPOSITORIES // 04 PRODUCTION &amp; BACKEND CARDS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Card A: PropertyPro */}
            <div className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between relative group hover:border-secondary transition-all rounded">
              <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary">PRJ-SYS-02</span>
                  <span className="font-label-caps text-label-caps uppercase">INTERNAL TEAM</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-1">
                  PRODUCT DEVELOPMENT · INTERNAL ENGINEERING TEAM
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold group-hover:text-secondary transition-colors mb-space-xs">
                  PropertyPro
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md">
                  Contributed to the development of a property-focused digital platform as part of an internal engineering team.
                </p>
                <div className="p-3 bg-surface-container border border-outline-variant font-label-code text-xs text-outline space-y-1 mb-space-md rounded">
                  <div className="flex justify-between text-on-surface">
                    <span>COMPONENT_SCOPE:</span>
                    <span className="text-secondary">PROPERTY LISTINGS &amp; CRM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>COLLABORATION:</span>
                    <span>CROSS-FUNCTIONAL AGILE SQUAD</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATA_PIPELINE:</span>
                    <span>OPTIMIZED QUERY PATTERNS</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-outline-variant pt-space-sm">
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Full-Stack Platform</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Agile Architecture</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">API Integration</span>
              </div>
            </div>

            {/* Card B: Hutbay */}
            <div className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between relative group hover:border-secondary transition-all rounded">
              <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary">PRJ-SYS-03</span>
                  <span className="font-label-caps text-label-caps uppercase">PROPERTY MARKETPLACE</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-1">
                  BACKEND DEVELOPMENT · PROPERTY MARKETPLACE
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold group-hover:text-secondary transition-colors mb-space-xs">
                  Hutbay
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md">
                  Contributed to backend development for a property marketplace, supporting the server-side functionality behind its digital experience.
                </p>
                <div className="p-3 bg-surface-container border border-outline-variant font-label-code text-xs text-outline space-y-1 mb-space-md rounded">
                  <div className="flex justify-between text-on-surface">
                    <span>SERVER_RESPONSIBILITY:</span>
                    <span className="text-secondary">API ROUTING &amp; DISPATCH</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DATA_LAYER:</span>
                    <span>DATABASE QUERY TUNING</span>
                  </div>
                  <div className="flex justify-between">
                    <span>METRIC_FOCUS:</span>
                    <span>ENDPOINT RELIABILITY &amp; SLA</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-outline-variant pt-space-sm">
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Server-Side Routing</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">REST APIs</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Database Queries</span>
              </div>
            </div>

            {/* Card C: E-commerce Platform */}
            <div className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between relative group hover:border-secondary transition-all rounded">
              <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary">PRJ-SYS-04</span>
                  <span className="font-label-caps text-label-caps text-outline uppercase">PERSONAL PROJECT · NOT DEPLOYED</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-1">
                  BACKEND ENGINEERING
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold group-hover:text-secondary transition-colors mb-space-xs">
                  E-commerce Platform
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md">
                  An independent e-commerce project built to explore full-stack commerce functionality and backend development.
                </p>
                <div className="p-3 bg-surface-container-lowest border border-outline-variant font-label-code text-[11px] text-on-surface-variant space-y-1 mb-space-md rounded">
                  <div className="text-outline">// Architecture / Checkout Transaction Pipeline</div>
                  <div className="text-secondary">POST /api/v1/checkout/idempotent-charge</div>
                  <div className="text-outline">State: CartSnapshot -&gt; LockInventory -&gt; PaymentGateway</div>
                  <div className="text-outline">Status: Architecture Spec &amp; Local Test Harness Validated</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-outline-variant pt-space-sm">
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Cart Pipelines</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Idempotent Orders</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Backend Spec</span>
              </div>
            </div>

            {/* Card D: Fredo Delicatessens */}
            <div className="bg-surface-container-low border border-outline-variant p-space-lg flex flex-col justify-between relative group hover:border-secondary transition-all rounded">
              <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary">PRJ-SYS-05</span>
                  <span className="font-label-caps text-label-caps uppercase">COMMERCIAL DELI PLATFORM</span>
                </div>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider block mb-1">
                  FULL-STACK DEVELOPMENT
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold group-hover:text-secondary transition-colors mb-space-xs">
                  Fredo Delicatessens
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md">
                  Developed a business website and backend application for a delicatessen business.
                </p>
                <div className="p-3 bg-surface-container border border-outline-variant font-label-code text-xs text-outline space-y-1 mb-space-md rounded">
                  <div className="flex justify-between text-on-surface">
                    <span>BUSINESS_TYPE:</span>
                    <span className="text-secondary">ARTISANAL FOOD &amp; DELICATESSEN</span>
                  </div>
                  <div className="flex justify-between">
                    <span>DELIVERABLES:</span>
                    <span>BRANDED WEB APP + CATALOG ENGINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>BACKEND_FLOW:</span>
                    <span>ORDERS &amp; INQUIRY DISPATCH</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-outline-variant pt-space-sm">
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Web Experience</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Catalog Engine</span>
                <span className="px-2 py-0.5 bg-surface-container border border-outline-variant font-label-code text-xs text-on-surface rounded">Order Workflow</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 04. SELECTED BUSINESS WEBSITES */}
      {shouldShow('websites') && (
        <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl bg-surface">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-outline-variant gap-space-xs mb-space-lg">
            <div>
              <div className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">// WEB EXPERIENCES</div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                SELECTED CLIENT &amp; BUSINESS WEBSITES
              </h3>
            </div>
            <div className="font-label-code text-label-code text-outline">
              CURATED INDEX // 05 LIVE SITES
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {[
              {
                num: '01',
                badge: 'INSURANCE & RISK ADVISORY',
                icon: 'verified_user',
                domain: 'rewardsinsurancebrokers.com',
                title: 'Rewards Insurance Brokers',
                desc: 'Insurance & Risk Advisory Web Platform crafted for clear policy communication and customer inquiries.',
                href: '#',
              },
              {
                num: '02',
                badge: 'CORPORATE INNOVATION',
                icon: 'lightbulb',
                domain: 'delacruzinnovation.com',
                title: 'Delacruz Innovation',
                desc: 'Corporate Innovation & Digital Technology web platform highlighting breakthrough digital ventures.',
                href: '#',
              },
              {
                num: '03',
                badge: 'STRATEGIC ADVISORY',
                icon: 'analytics',
                domain: 'innosphereconsulting.com',
                title: 'Innosphere Consulting',
                desc: 'Strategic Consulting & Business Advisory corporate platform engineered for executive audience engagement.',
                href: '#',
              },
              {
                num: '04',
                badge: 'CREATIVE AGENCY',
                icon: 'palette',
                domain: 'echohivecreatives.com',
                title: 'EchoHive Creatives',
                desc: 'Creative Agency & Digital Brand Platform showcasing visual narratives, art direction, and digital experiences.',
                href: '#',
              },
              {
                num: '05',
                badge: 'PERSONAL PORTFOLIO',
                icon: 'public',
                domain: 'precious-k.vercel.app',
                title: 'Precious Kehinde’s Portfolio',
                desc: 'Personal Portfolio Web Platform engineered for clean personal storytelling and project display.',
                href: 'https://precious-k.vercel.app/',
              },
            ].map((site) => (
              <div
                key={site.num}
                className="bg-surface-container-low border border-outline-variant p-space-md flex flex-col justify-between group hover:border-secondary transition-all rounded"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-outline-variant font-label-caps text-label-caps text-outline mb-3">
                    <span className="text-secondary">SITE // {site.num}</span>
                    <span>{site.badge}</span>
                  </div>
                  <div className="aspect-[16/9] bg-surface-container border border-outline-variant mb-3 flex items-center justify-center p-3 relative overflow-hidden rounded">
                    <div className="text-center font-label-code text-xs text-outline group-hover:text-secondary transition-colors">
                      <span className="material-symbols-outlined text-body-lg block mb-1 select-none">{site.icon}</span>
                      <span>{site.domain}</span>
                    </div>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold group-hover:text-secondary transition-colors mb-1">
                    {site.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 leading-relaxed">
                    {site.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-outline-variant flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline">WEB PLATFORM</span>
                  <a
                    className="inline-flex items-center gap-1 font-label-caps text-label-caps text-secondary hover:underline"
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>VISIT</span>
                    <span className="material-symbols-outlined text-xs select-none">north_east</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 05. PRODUCTS IN PROGRESS */}
      {shouldShow('progress') && (
        <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg bg-surface">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-md border-b border-outline-variant gap-space-xs mb-space-lg">
            <div>
              <div className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">// IP PROTECTED</div>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                PRODUCTS IN PROGRESS // IP PROTECTED
              </h3>
            </div>
            <div className="font-label-code text-label-code text-outline">
              CONFIDENTIAL STATUS // ACCELERATED LABS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {/* Orvio */}
            <div className="bg-surface-container border border-outline-variant p-space-lg relative flex flex-col justify-between rounded">
              <span className="absolute -top-1.5 -left-1.5 text-outline font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-outline font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary font-medium">STATUS: IN PROGRESS</span>
                  <span className="font-label-caps text-label-caps text-outline">LABS R&amp;D</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold mb-space-xs">
                  Orvio
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  An evolving software product focused on practical business operations. Currently in active stealth development.
                </p>
                <div className="h-16 bg-surface-container-low border border-outline-variant p-3 flex items-center justify-center relative overflow-hidden rounded">
                  <div className="w-full flex items-center justify-between text-outline font-label-code text-xs">
                    <span>[ REPOSITORY LOCKED ]</span>
                    <span className="h-1 w-24 bg-surface-container-highest rounded overflow-hidden relative">
                      <span className="block h-full w-12 bg-secondary animate-pulse" />
                    </span>
                    <span>CONFIDENTIAL</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant flex items-center justify-between text-outline font-label-caps text-label-caps">
                <span>ENTERPRISE OPS PRODUCT</span>
                <span className="text-secondary">IN DEVELOPMENT</span>
              </div>
            </div>

            {/* CampusNova */}
            <div className="bg-surface-container border border-outline-variant p-space-lg relative flex flex-col justify-between rounded">
              <span className="absolute -top-1.5 -left-1.5 text-outline font-label-code text-body-sm leading-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 text-outline font-label-code text-body-sm leading-none">+</span>
              <div>
                <div className="flex items-center justify-between pb-space-xs border-b border-outline-variant text-label-code font-label-code text-outline mb-space-sm">
                  <span className="text-secondary font-medium">STATUS: UPCOMING PROJECT</span>
                  <span className="font-label-caps text-label-caps text-outline">INITIATIVE</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold mb-space-xs">
                  CampusNova
                </h4>
                <p className="text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                  An upcoming education technology initiative exploring ways to support school operations and digital learning.
                </p>
                <div className="h-16 bg-surface-container-low border border-outline-variant p-3 flex items-center justify-center relative overflow-hidden rounded">
                  <div className="w-full flex items-center justify-between text-outline font-label-code text-xs">
                    <span>[ SPEC FORMULATION ]</span>
                    <span className="h-1 w-24 bg-surface-container-highest rounded overflow-hidden relative">
                      <span className="block h-full w-8 bg-secondary animate-pulse" />
                    </span>
                    <span>EDTECH LAB</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-md mt-space-md border-t border-outline-variant flex items-center justify-between text-outline font-label-caps text-label-caps">
                <span>SCHOOL OPERATIONS &amp; LEARNING</span>
                <span className="text-secondary">CONCEPT &amp; DESIGN</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 06. MANIFESTO CALLOUT & STAGE TRANSITION */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pb-space-xl bg-surface">
        <div className="p-space-lg md:p-space-xl bg-surface-container-low border border-outline-variant relative flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg rounded">
          <span className="absolute -top-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
          <span className="absolute -top-1.5 -right-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
          <span className="absolute -bottom-1.5 -left-1.5 text-secondary font-label-code text-body-sm leading-none">+</span>
          <span className="absolute -bottom-1.5 -right-2 text-secondary font-label-code text-body-sm leading-none">+</span>
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              // ARCHITECTURAL NOTE
            </span>
            <h4 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold tracking-tight">
              &quot;EVERY ARCHITECTURE TELLS A STORY OF CONSTRAINTS AND CRAFT.&quot;
            </h4>
            <p className="font-body-md text-body-md text-outline">
              From microsecond telemetry buffers to user-centric responsive interfaces, the goal is always durability under load.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full md:w-auto">
            <Link
              to="/experience"
              className="inline-flex items-center justify-center gap-space-sm px-space-lg py-space-md bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:bg-secondary-fixed transition-colors rounded"
            >
              <span>NEXT CHAPTER: CAREER EXPERIENCE</span>
              <span className="material-symbols-outlined text-body-sm select-none">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
