import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact({ onModuleClick }) {
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'contract',
    message: '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText('omoloyeamoss65@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="w-full flex flex-col text-on-surface bg-surface min-h-screen">
      {/* SECTION HEADER & INGRESS TELEMETRY */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl bg-surface-container-lowest relative">
        <div className="flex flex-col gap-space-lg">
          {/* Eyebrow & Status Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md pb-space-lg bg-surface-container-low p-space-md rounded border border-outline-variant/30">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                [SPEC.06 // FINAL PROTOCOL]
              </span>
              <span className="text-outline-variant font-label-code text-label-code">/</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                06 // GET IN TOUCH // INGRESS DISPATCH
              </span>
            </div>
            <div className="flex items-center gap-space-md flex-wrap">
              <div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-space-xs rounded">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">
                  OPEN TO SELECT OPPORTUNITIES // Q2–Q3 2025
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-space-xs text-outline font-label-code text-label-code">
                <span className="material-symbols-outlined text-secondary text-body-sm select-none">dns</span>
                <span>SYS.STATUS: 200 OK INGRESS READY</span>
              </div>
            </div>
          </div>

          {/* Dominant Editorial Headline */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-md">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 flex flex-col gap-space-md"
            >
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest font-semibold">
                [ DISPATCH INVITATION // CODEX RUNTIME ]
              </span>
              <h1 className="font-headline-xl text-headline-xl text-on-surface uppercase tracking-tight font-semibold leading-none">
                LET'S BUILD SOMETHING{' '}
                <span className="text-secondary underline decoration-secondary-container decoration-2 underline-offset-8">
                  MEANINGFUL.
                </span>
              </h1>
            </motion.div>
            <div className="lg:col-span-4 flex flex-col gap-space-md pb-space-xs">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Have a product to build, a technical bottleneck to dismantle, or a strategic engineering opportunity? I architect distributed backends, resilient data pipelines, and ultra-crisp interface runtimes.
              </p>
              <div className="flex items-center gap-space-xs text-outline font-label-code text-label-code">
                <span className="text-secondary">[+]</span>
                <span>LATENCY ESTIMATE: &lt; 24H // TLS ENCRYPTED DIRECT ROUTE</span>
              </div>
            </div>
          </div>

          {/* Primary Action Quick Bar */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-md bg-surface-container-low p-space-md rounded border border-outline-variant/30">
            <a
              className="inline-flex items-center justify-center gap-space-sm h-12 px-space-lg bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider font-semibold hover:bg-secondary-fixed transition-colors rounded"
              href="mailto:omoloyeamoss65@gmail.com"
            >
              <span>START A CONVERSATION</span>
              <span className="material-symbols-outlined text-body-md select-none">north_east</span>
            </a>
            <button
              onClick={() => onModuleClick('Comprehensive CV & Engineering Dossier')}
              className="inline-flex items-center justify-center gap-space-sm h-12 px-space-lg bg-surface-container text-on-surface font-label-caps text-label-caps uppercase tracking-wider hover:bg-surface-bright transition-colors rounded cursor-pointer"
              type="button"
            >
              <span>VIEW SPEC DOSSIER / CV</span>
              <span className="material-symbols-outlined text-body-md select-none">download</span>
            </button>
            <div className="hidden md:flex items-center gap-space-xs ml-auto text-outline font-label-code text-label-code">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
              <span>DIRECT DISPATCH NODE // PRIMARY: omoloyeamoss65@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* ASYMMETRICAL ARCHITECTURAL TWO-COLUMN GRID */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* LEFT COLUMN: Technical Dossier & Telemetry Console */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="flex items-center justify-between pb-space-sm bg-surface-container-low p-space-sm rounded border border-outline-variant/30">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-label-caps text-label-caps font-semibold">[+]</span>
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                  CHANNEL NODES // DIRECT INGRESS
                </span>
              </div>
              <span className="font-label-code text-label-code text-outline">LOC: UTC+1</span>
            </div>

            {/* Contact Dossier Cards */}
            <div className="flex flex-col gap-space-md">
              {/* EMAIL CARD */}
              <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm hover:bg-surface-container transition-colors relative group rounded border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline uppercase">[COMM // 01] EMAIL PRIMARY</span>
                  <span className="font-label-code text-label-code text-secondary font-semibold">ACTIVE ROUTE</span>
                </div>
                <div className="flex items-center justify-between gap-space-sm flex-wrap">
                  <a
                    className="font-headline-sm text-headline-sm text-on-surface hover:text-secondary transition-colors break-all font-semibold"
                    href="mailto:omoloyeamoss65@gmail.com"
                  >
                    omoloyeamoss65@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    className="h-8 px-space-sm bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-bright font-label-code text-label-code inline-flex items-center gap-space-xs transition-colors rounded cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-body-sm select-none">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>
              </div>

              {/* GITHUB CARD */}
              <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm hover:bg-surface-container transition-colors rounded border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline uppercase">[SOURCE // 02] CODE REPOSITORY</span>
                  <span className="font-label-code text-label-code text-outline-variant">GIT PROTOCOL</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">github.com/omoloye-codex</span>
                    <span className="font-body-sm text-body-sm text-outline">Production backends, system specs, open tools</span>
                  </div>
                  <a
                    className="w-10 h-10 bg-surface-container flex items-center justify-center text-on-surface hover:text-secondary hover:bg-surface-bright transition-colors rounded"
                    href="https://github.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-body-md select-none">north_east</span>
                  </a>
                </div>
              </div>

              {/* LINKEDIN CARD */}
              <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm hover:bg-surface-container transition-colors rounded border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline uppercase">[NETWORK // 03] PROFESSIONAL PROFILE</span>
                  <span className="font-label-code text-label-code text-outline-variant">NET PROTOCOL</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">linkedin.com/in/omoloye-boluwatife</span>
                    <span className="font-body-sm text-body-sm text-outline">Endorsements, tenure records, advisory reach</span>
                  </div>
                  <a
                    className="w-10 h-10 bg-surface-container flex items-center justify-center text-on-surface hover:text-secondary hover:bg-surface-bright transition-colors rounded"
                    href="https://linkedin.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-body-md select-none">north_east</span>
                  </a>
                </div>
              </div>

              {/* LOCATION & AVAILABILITY */}
              <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm rounded border border-outline-variant/30">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-label-caps text-outline uppercase">[TELEMETRY // 04] BASE STATION</span>
                  <span className="font-label-code text-label-code text-secondary font-semibold">GLOBAL READY</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">Lagos, Nigeria // Remote Worldwide</span>
                    <span className="font-body-sm text-body-sm text-outline">Timezone: West Africa Time (UTC+1) / EST &amp; CET Synchronized</span>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-headline-sm select-none">public</span>
                </div>
              </div>
            </div>

            {/* Terminal Diagnostic Console */}
            <div className="bg-surface-container-lowest p-space-md flex flex-col gap-space-xs font-label-code text-label-code rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-space-xs bg-surface-container px-space-xs py-space-xs rounded">
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-on-surface font-label-caps text-label-caps uppercase font-semibold">
                    GATEWAY TERMINAL // INGRESS TRACE
                  </span>
                </div>
                <span className="text-outline">SYS.DISPATCH.V4</span>
              </div>
              <div className="pt-space-xs text-outline space-y-1 font-mono text-xs">
                <p><span className="text-secondary">&gt;</span> target.host: <span className="text-on-surface">codex-runtime.systems</span></p>
                <p><span className="text-secondary">&gt;</span> secure.channel: <span className="text-on-surface">TLSv1.3 // AES-256-GCM</span></p>
                <p><span className="text-secondary">&gt;</span> dispatch.port: <span className="text-on-surface">443 [ESTABLISHED]</span></p>
                <p><span className="text-secondary">&gt;</span> operator: <span className="text-on-surface">OMOLOYE BOLUWATIFE (CODEX)</span></p>
                <p><span className="text-secondary">&gt;</span> status: <span className="text-secondary font-semibold">200_OK_ACCEPTING_INQUIRIES</span></p>
              </div>
            </div>

            <div className="bg-surface-container-low p-space-md flex flex-col gap-space-xs rounded border border-outline-variant/30">
              <span className="font-label-caps text-label-caps text-secondary uppercase font-semibold">
                [ENG PRINCIPLES // ZERO COMPROMISE]
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Deterministic delivery over ambiguous promises. Explicit architectural contracts over ad-hoc solutions. High signal-to-noise ratio in technical synchronization.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Dispatch Form & Inquiry Protocol */}
          <div className="lg:col-span-7 flex flex-col gap-space-lg">
            <div className="flex items-center justify-between pb-space-sm bg-surface-container-low p-space-sm rounded border border-outline-variant/30">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-label-caps text-label-caps font-semibold">[+]</span>
                <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider">
                  TRANSMISSION CONSOLE // DISPATCH FORM
                </span>
              </div>
              <span className="font-label-code text-label-code text-secondary font-semibold">ENCRYPTED INPUT</span>
            </div>

            {submitted ? (
              <div className="bg-surface-container-low p-space-xl flex flex-col items-center justify-center text-center gap-space-md rounded border border-secondary/50 py-16">
                <span className="material-symbols-outlined text-secondary text-5xl select-none animate-bounce">
                  check_circle
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                  TRANSMISSION DISPATCHED
                </h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Your inquiry protocol has been logged and transmitted to Codex. Expected response latency: &lt; 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-space-lg py-space-sm bg-secondary text-on-secondary font-label-caps text-label-caps uppercase tracking-wider font-semibold rounded mt-2 cursor-pointer"
                  type="button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-surface-container-low p-space-lg flex flex-col gap-space-lg rounded border border-outline-variant/30">
                {/* Field 1: Name */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-caps text-label-caps text-outline uppercase flex items-center justify-between">
                    <span>01 // YOUR NAME OR ENTITY</span>
                    <span className="text-secondary">[REQUIRED]</span>
                  </label>
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-surface-container px-space-md py-space-sm text-on-surface placeholder:text-outline font-label-code text-label-code focus:outline-none focus:ring-1 focus:ring-secondary transition-colors rounded"
                    placeholder="e.g. Elena Vance / Core Infrastructure Labs"
                    required
                    type="text"
                  />
                </div>

                {/* Field 2: Email */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-caps text-label-caps text-outline uppercase flex items-center justify-between">
                    <span>02 // DIRECT WORK EMAIL</span>
                    <span className="text-secondary">[TLS ROUTABLE]</span>
                  </label>
                  <input
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-container px-space-md py-space-sm text-on-surface placeholder:text-outline font-label-code text-label-code focus:outline-none focus:ring-1 focus:ring-secondary transition-colors rounded"
                    placeholder="e.g. elena@corelabs.engineering"
                    required
                    type="email"
                  />
                </div>

                {/* Field 3: Inquiry Classification */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-caps text-label-caps text-outline uppercase">
                    <span>03 // ENGAGEMENT PROFILE &amp; SCOPE</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs pt-space-xs">
                    {[
                      { id: 'fulltime', label: 'Full-Time', sub: 'Core Senior' },
                      { id: 'contract', label: 'Contract', sub: 'Sprint / Project' },
                      { id: 'audit', label: 'Advisory', sub: 'Arch Review' },
                      { id: 'other', label: 'General', sub: 'Direct Talk' },
                    ].map((opt) => {
                      const selected = formData.inquiryType === opt.id
                      return (
                        <label
                          key={opt.id}
                          className={`cursor-pointer p-space-sm text-center flex flex-col items-center gap-space-xs transition-colors rounded border border-outline-variant/40 ${
                            selected ? 'bg-secondary text-on-secondary font-semibold' : 'bg-surface-container hover:bg-surface-bright text-on-surface'
                          }`}
                        >
                          <input
                            type="radio"
                            name="inquiry_type"
                            value={opt.id}
                            checked={selected}
                            onChange={() => setFormData({ ...formData, inquiryType: opt.id })}
                            className="sr-only"
                          />
                          <span className="font-label-caps text-label-caps uppercase">{opt.label}</span>
                          <span className="font-label-code text-label-code opacity-75">{opt.sub}</span>
                        </label>
                      )
                    })}
                  </div>
                </div>

                {/* Field 4: Message */}
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-caps text-label-caps text-outline uppercase flex items-center justify-between">
                    <span>04 // ARCHITECTURAL SCOPE &amp; DETAILS</span>
                    <span className="text-outline-variant font-label-code text-label-code">PLAIN TEXT</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-surface-container p-space-md text-on-surface placeholder:text-outline font-label-code text-label-code focus:outline-none focus:ring-1 focus:ring-secondary transition-colors resize-y rounded"
                    placeholder="Outline your systems problem, stack requirements (Go, TypeScript, Rust, Node, Postgres), product timeline, or role objectives..."
                    required
                    rows={5}
                  />
                </div>

                <div className="flex flex-col gap-space-sm pt-space-xs">
                  <button
                    className="w-full h-14 bg-secondary hover:bg-secondary-fixed text-on-secondary font-label-caps text-label-caps uppercase tracking-widest flex items-center justify-center gap-space-sm transition-colors cursor-pointer group rounded font-semibold"
                    type="submit"
                  >
                    <span>SEND DISPATCH PROTOCOL</span>
                    <span className="material-symbols-outlined text-body-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform select-none">
                      north_east
                    </span>
                  </button>
                  <div className="flex items-center justify-between text-outline font-label-code text-label-code px-space-xs">
                    <span className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-secondary text-body-sm select-none">lock</span>
                      <span>SECURE INGRESS // NO MARKETING SCRIPTS</span>
                    </span>
                    <span>BUFFER STATUS: NOMINAL</span>
                  </div>
                </div>
              </form>
            )}

            {/* Active Metrics */}
            <div className="bg-surface-container-low p-space-md flex flex-col gap-space-sm rounded border border-outline-variant/30">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/30">
                <span className="font-label-caps text-label-caps text-outline uppercase font-semibold">
                  [INSPECTION // ACTIVE METRICS]
                </span>
                <span className="font-label-code text-label-code text-secondary font-semibold">NETWORK: LIVE</span>
              </div>
              <div className="grid grid-cols-3 gap-space-sm">
                <div className="bg-surface-container p-space-sm flex flex-col rounded">
                  <span className="font-headline-sm text-headline-sm text-secondary font-semibold">4+ YRS</span>
                  <span className="font-label-caps text-label-caps text-outline">ENGINEERING TENURE</span>
                </div>
                <div className="bg-surface-container p-space-sm flex flex-col rounded">
                  <span className="font-headline-sm text-headline-sm text-secondary font-semibold">99.98%</span>
                  <span className="font-label-caps text-label-caps text-outline">SYSTEM AVAILABILITY</span>
                </div>
                <div className="bg-surface-container p-space-sm flex flex-col rounded">
                  <span className="font-headline-sm text-headline-sm text-secondary font-semibold">&lt; 200MS</span>
                  <span className="font-label-caps text-label-caps text-outline">MEDIAN BACKEND P95</span>
                </div>
              </div>

              {/* Sparkline Telemetry Diagram */}
              <div className="bg-surface-container p-space-sm flex flex-col gap-space-xs rounded">
                <div className="flex items-center justify-between text-outline font-label-code text-label-code">
                  <span>DISPATCH_LATENCY_30D_TRACE</span>
                  <span className="text-secondary font-semibold">P99: 142MS</span>
                </div>
                <svg className="w-full h-8 text-secondary" fill="none" viewBox="0 0 300 32">
                  <path
                    d="M0 28 L30 24 L60 26 L90 14 L120 18 L150 10 L180 15 L210 8 L240 12 L270 4 L300 8"
                    stroke="currentColor"
                    strokeLinecap="square"
                    strokeWidth="2"
                  />
                  <path
                    d="M0 28 L30 24 L60 26 L90 14 L120 18 L150 10 L180 15 L210 8 L240 12 L270 4 L300 8 V32 H0 Z"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING SIGNATURE & MANIFESTO BANNER */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl bg-surface-container-low border-t border-outline-variant/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
          <div className="lg:col-span-8 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-xs text-secondary font-label-caps text-label-caps font-semibold">
              <span>[+]</span>
              <span>CODEX MANIFESTO // ENGINEERING COMMITMENT</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight font-semibold">
              OMOLOYE BOLUWATIFE (CODEX) &mdash; FULL-STACK SOFTWARE ENGINEER
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              Thoughtful software. Reliable systems. Meaningful impact. Code is written once but read, operated, and audited thousands of times. I architect solutions with obsessive rigor toward observability, zero unnecessary abstraction, and absolute operational clarity.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-space-md justify-start lg:items-end">
            <div className="bg-surface-container p-space-md flex flex-col gap-space-xs w-full lg:max-w-xs rounded border border-outline-variant/40">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-label-caps text-outline">PRIMARY RUNTIME</span>
                <span className="font-label-code text-label-code text-secondary font-semibold">ACTIVE</span>
              </div>
              <span className="font-label-code text-label-code text-on-surface font-semibold">GO / TS / NODE / POSTGRES</span>
              <span className="font-label-code text-label-code text-outline-variant">SYS_ID: BOLUWATIFE.CODEX</span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="h-10 px-space-md bg-surface-container text-on-surface font-label-caps text-label-caps uppercase hover:bg-surface-bright transition-colors inline-flex items-center gap-space-xs rounded cursor-pointer border border-outline-variant/40"
              type="button"
            >
              <span className="material-symbols-outlined text-body-sm select-none">arrow_upward</span>
              <span>RETURN TO APEX</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
