import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Experience() {
  const timelineEntries = [
    {
      period: 'SEPTEMBER 2025 – SEPTEMBER 2026',
      tenure: 'TENURE // SCHEDULED ENGAGEMENT',
      badges: ['CONTRACT / FREELANCE', 'LEAD & ENGINEERING CAPACITY'],
      role: 'SENIOR DEVELOPER',
      company: 'CORE CONNECT ACADEMY',
      ref: 'REF // 01-CCA-LMS',
      desc: 'Contributed to the development of an in-house learning platform, collaborating with team members to deliver functionality for students, tutors, and administrators. Also served in a lead developer and engineering capacity.',
      highlights: [
        'Student and tutor administrative dashboards, structured course hierarchies, and modular lesson management.',
        'Learning-progress tracking with WebSockets and SWR real-time client synchronization.',
        'Robust multi-tier authentication, granular role-based access control, and platform administrative governance.',
        'Bespoke dual-gateway financial billing integrations using Paystack and Stripe.',
      ],
      note: 'MVP 1 and MVP 2 deployed and production-ready; MVP 3 currently in progress. High-throughput video-streaming architecture utilizing Apache Kafka is actively in engineering planning phases.',
      tech: ['React', 'Node.js', 'WebSockets', 'SWR', 'Paystack', 'Stripe', 'SQL'],
      primary: true,
    },
    {
      period: 'MARCH 2025 – PRESENT',
      tenure: 'TENURE // ACTIVE OVERLAPPING',
      badges: ['CONTRACT / FREELANCE', 'LEAD RESPONSIBILITIES'],
      role: 'JUNIOR DEVELOPER',
      company: 'DELACRUZ INNOVATION',
      ref: 'REF // 02-DLI-SYS',
      desc: 'Contributed to web and software development projects, using modern development workflows and AI-assisted techniques to support implementation and problem-solving. Also took on lead developer and engineering responsibilities where appropriate.',
      focus: 'Applying advanced prompt engineering, automated testing harnesses, and rapid interface scaffolding to accelerate delivery velocity while safeguarding code quality.',
      tech: ['Modern Web Workflows', 'AI-Assisted Development', 'Prompt Engineering', 'Full-Stack Delivery'],
      primary: true,
    },
    {
      period: 'JANUARY 2025 – PRESENT',
      tenure: 'TENURE // ACTIVE OVERLAPPING',
      badges: ['UNSPECIFIED / ONGOING'],
      role: 'JUNIOR DEVELOPER',
      company: 'ECHOHIVE CREATIVES',
      ref: 'REF // 03-EHC-DIG',
      desc: 'Contributed to web and software development, applying development skills and AI-assisted workflows to support digital projects.',
      tech: ['Web Development', 'AI-Assisted Workflows', 'Prompt Engineering'],
      primary: false,
    },
    {
      period: 'OCTOBER 2024 – JANUARY 2026',
      tenure: 'TENURE // SCHEDULED ENGAGEMENT',
      badges: ['FULL-TIME EMPLOYEE'],
      role: 'FULL-STACK DEVELOPER',
      company: 'INNOSPHERE CONSULTING',
      ref: 'REF // 04-IPC-CON',
      desc: 'Worked as a full-stack software developer, contributing to software development across application layers.',
      tech: ['Full-Stack Architecture', 'REST APIs', 'Application Layers'],
      primary: false,
    },
  ]

  return (
    <div className="w-full flex flex-col text-on-surface bg-surface min-h-screen">
      {/* 01. SECTION HEADER: INTRODUCTION */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg">
        <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-space-lg pb-space-lg border-b border-outline-variant relative">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-space-sm max-w-3xl"
          >
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-surface-container border border-outline-variant font-label-caps text-label-caps text-secondary tracking-widest uppercase rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                04 // PROFESSIONAL EXPERIENCE // CAREER PROGRESSION // VERIFIED TIMELINE
              </span>
            </div>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tighter leading-none mt-space-xs text-on-surface font-semibold uppercase">
              ENGINEERING. COLLABORATION.{' '}
              <span className="text-secondary selection:bg-secondary selection:text-white">IMPACT.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs leading-relaxed">
              My journey spans full-stack development, backend engineering, and collaborative product development. I work across application layers, contribute to technical decisions, and use modern development workflows to turn requirements into practical software solutions.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-space-sm self-start md:self-end md:text-right shrink-0">
            <div className="p-space-sm bg-surface-container-low border border-outline-variant flex flex-col gap-0.5 rounded">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">DOMAIN RUNTIME</span>
              <span className="font-label-code text-label-code text-on-surface font-semibold text-secondary">
                CAREER / COLLABORATION / LEADERSHIP
              </span>
            </div>
            <div className="p-space-sm bg-surface-container-low border border-outline-variant flex flex-col gap-0.5 rounded">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">STATUS NOTE</span>
              <span className="font-label-code text-label-code text-on-surface font-semibold">
                VERIFIED TIMELINE ARCHITECTURE
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 02. ARCHITECTURAL CAREER TIMELINE */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div className="flex flex-col gap-space-xl relative">
          {timelineEntries.map((entry) => (
            <article key={entry.ref} className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl relative">
              <div className="lg:col-span-4 flex flex-col gap-space-sm relative">
                <div className="flex items-center gap-space-sm">
                  <span className={`w-2.5 h-2.5 ${entry.primary ? 'bg-secondary' : 'bg-outline-variant border border-outline'} flex items-center justify-center`}>
                    <span className="w-1 h-1 bg-surface" />
                  </span>
                  <span className={`font-label-code text-label-code font-semibold tracking-widest ${entry.primary ? 'text-secondary' : 'text-on-surface'}`}>
                    {entry.period}
                  </span>
                </div>
                <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest pl-5">
                  {entry.tenure}
                </span>
                <div className="pl-5 mt-space-xs flex flex-wrap gap-2">
                  {entry.badges.map((b) => (
                    <span
                      key={b}
                      className="px-2 py-0.5 border border-outline-variant bg-surface-container font-label-caps text-label-caps text-secondary uppercase rounded"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`lg:col-span-8 bg-surface-container-low border border-outline-variant p-space-md md:p-space-xl relative group transition-colors duration-200 rounded ${entry.primary ? 'hover:border-secondary' : 'hover:border-outline'}`}>
                <span className={`absolute -top-1 -left-1 font-label-code text-xs leading-none select-none ${entry.primary ? 'text-secondary' : 'text-outline'}`}>+</span>
                <span className={`absolute -top-1 -right-1 font-label-code text-xs leading-none select-none ${entry.primary ? 'text-secondary' : 'text-outline'}`}>+</span>
                <span className={`absolute -bottom-1 -left-1 font-label-code text-xs leading-none select-none ${entry.primary ? 'text-secondary' : 'text-outline'}`}>+</span>
                <span className={`absolute -bottom-1 -right-1 font-label-code text-xs leading-none select-none ${entry.primary ? 'text-secondary' : 'text-outline'}`}>+</span>

                <div className="flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-xs border-b border-outline-variant pb-space-sm">
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase font-semibold">
                        {entry.role}
                      </h2>
                      <span className={`font-label-code text-label-code tracking-wide uppercase font-semibold ${entry.primary ? 'text-secondary' : 'text-on-surface-variant'}`}>
                        {entry.company}
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest shrink-0">
                      {entry.ref}
                    </span>
                  </div>

                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {entry.desc}
                  </p>

                  {entry.highlights && (
                    <div className="flex flex-col gap-space-sm pt-space-xs">
                      <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">
                        IMPLEMENTED CAPABILITIES &amp; HIGHLIGHTS
                      </span>
                      <ul className="flex flex-col gap-space-xs text-body-sm text-on-surface">
                        {entry.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-space-sm">
                            <span className="font-label-code text-secondary text-xs mt-1 shrink-0">::</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.note && (
                    <div className="p-space-sm bg-surface-container border border-outline-variant flex flex-col gap-1 rounded">
                      <div className="flex items-center gap-1.5 text-secondary">
                        <span className="material-symbols-outlined text-sm select-none">inventory_2</span>
                        <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
                          DEPLOYMENT TELEMETRY &amp; ROADMAP
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {entry.note}
                      </p>
                    </div>
                  )}

                  {entry.focus && (
                    <div className="p-space-sm bg-surface-container border border-outline-variant flex flex-col gap-1 rounded">
                      <div className="flex items-center gap-1.5 text-secondary">
                        <span className="material-symbols-outlined text-sm select-none">psychology</span>
                        <span className="font-label-caps text-label-caps uppercase tracking-wider font-semibold">
                          WORKFLOW &amp; EXECUTION FOCUS
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {entry.focus}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-1.5 pt-space-sm border-t border-outline-variant">
                    <span className="font-label-caps text-label-caps text-outline uppercase mr-2">TECH RUNTIME:</span>
                    {entry.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 font-label-code text-xs bg-surface text-on-surface border border-outline-variant rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03. "BEYOND WRITING CODE." EDITORIAL PILLARS */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl border-t border-outline-variant bg-surface-container-lowest">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs border-b border-outline-variant pb-space-sm">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              02 // LEADERSHIP &amp; COLLABORATIVE METHODOLOGY
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight uppercase font-semibold">
              BEYOND WRITING CODE.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1 leading-relaxed">
              Building software takes more than implementation. I collaborate with people across different disciplines, help translate requirements into technical solutions, and contribute to engineering decisions throughout the development process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-outline-variant rounded overflow-hidden">
            {[
              {
                code: '01 // CROSS-FUNCTIONAL',
                title: 'Cross-Functional Collaboration',
                desc: 'Working with developers, designers, business analysts, and other stakeholders to understand requirements and support product delivery.',
              },
              {
                code: '02 // ARCHITECTURE',
                title: 'Full-Stack Engineering',
                desc: 'Working across frontend interfaces, backend services, APIs, authentication, and data-driven application functionality.',
              },
              {
                code: '03 // INITIATIVE',
                title: 'Technical Leadership',
                desc: 'Contributing to technical planning, implementation decisions, and coordination of engineering work when serving in a lead capacity.',
              },
              {
                code: '04 // AUGMENTATION',
                title: 'AI-Assisted Development',
                desc: 'Using AI coding tools and prompt engineering to support problem-solving, code generation, implementation, and development workflows, with appropriate review and testing.',
              },
            ].map((p, idx) => (
              <div
                key={p.code}
                className={`p-space-lg border-outline-variant flex flex-col gap-space-sm relative group hover:bg-surface-container-low transition-colors ${
                  idx < 3 ? 'border-b md:border-b-0 md:border-r' : ''
                }`}
              >
                <span className="font-label-code text-secondary text-sm font-semibold">{p.code}</span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold">{p.title}</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. CORE TECHNICAL STRENGTHS SUMMARY */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl border-t border-outline-variant">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-xs border-b border-outline-variant pb-space-sm">
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                // CORE TECHNICAL STRENGTHS SUMMARY
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1 uppercase font-semibold">
                Disciplines, Runtimes &amp; Applied Workflows
              </h2>
            </div>
            <span className="font-label-code text-label-code text-outline uppercase tracking-wider">
              COMPACT OVERVIEW // RUNTIME EVALUATED
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="bg-surface-container-low border border-outline-variant p-space-md flex flex-col gap-space-xs rounded">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">DOMAIN // 01</span>
                <span className="material-symbols-outlined text-secondary text-base select-none">dns</span>
              </div>
              <span className="font-label-code text-label-code text-on-surface font-semibold pt-1 uppercase">BACKEND ENGINEERING</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Node.js, Fastify, Express.js, REST APIs, Redis, Prisma ORM, SQL, and relational databases.
              </p>
              <div className="mt-auto pt-2 border-t border-outline-variant/60">
                <span className="font-label-caps text-[10px] text-outline uppercase">Note: Python utilized at working knowledge level.</span>
              </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant p-space-md flex flex-col gap-space-xs rounded">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">DOMAIN // 02</span>
                <span className="material-symbols-outlined text-secondary text-base select-none">devices</span>
              </div>
              <span className="font-label-code text-label-code text-on-surface font-semibold pt-1 uppercase">FRONTEND &amp; APP DEV</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                React.js, Next.js, React Native, responsive UI design, accessible markup, and modern CSS architecture.
              </p>
              <div className="mt-auto pt-2 border-t border-outline-variant/60">
                <span className="font-label-caps text-[10px] text-outline uppercase">Design systems &amp; fluid hydration.</span>
              </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant p-space-md flex flex-col gap-space-xs rounded">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">DOMAIN // 03</span>
                <span className="material-symbols-outlined text-secondary text-base select-none">account_tree</span>
              </div>
              <span className="font-label-code text-label-code text-on-surface font-semibold pt-1 uppercase">PRACTICES &amp; WORKFLOWS</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                API integration, authentication, debugging, application architecture, collaboration, and AI-assisted development.
              </p>
              <div className="mt-auto pt-2 border-t border-outline-variant/60">
                <span className="font-label-caps text-[10px] text-outline uppercase">Clean code &amp; reliable delivery.</span>
              </div>
            </div>

            <div className="bg-surface-container-low border border-secondary/50 p-space-md flex flex-col gap-space-xs rounded">
              <div className="flex items-center justify-between border-b border-outline-variant pb-2">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">CORE PILLAR // 04</span>
                <span className="material-symbols-outlined text-secondary text-base select-none">psychology</span>
              </div>
              <span className="font-label-code text-label-code text-on-surface font-semibold pt-1 uppercase">PROMPT ENGINEERING</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Explicit core strength supporting AI-assisted development workflows: contextual prompting, automated scaffolding, and review validation.
              </p>
              <div className="mt-auto pt-2 border-t border-outline-variant/60">
                <span className="font-label-caps text-[10px] text-secondary uppercase font-semibold">Specialized applied capability.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05. INDEPENDENT PROJECTS & CLIENT WORK */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl border-t border-outline-variant bg-surface-container-lowest">
        <div className="flex flex-col gap-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-outline-variant pb-space-md">
            <div className="flex flex-col gap-space-xs max-w-2xl">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
                // PRACTICAL APPLICATION
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase font-semibold">
                INDEPENDENT PROJECTS &amp; CLIENT WORK
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Alongside organizational roles, I have worked on business websites, personal portfolios, and software projects for different needs.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-space-md py-2.5 bg-surface-container border border-secondary text-secondary hover:bg-secondary hover:text-white font-label-caps text-label-caps uppercase tracking-wider transition-colors shrink-0 rounded font-semibold"
            >
              <span>EXPLORE ALL SELECTED PROJECTS &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {[
              { label: 'COMMERCIAL CLIENT', name: 'Rewards Insurance Brokers', desc: 'Corporate web presence, lead capture, and insurance product cataloging interface.' },
              { label: 'BUSINESS PLATFORMS', name: 'Business & Consulting Websites', desc: 'High-performance responsive marketing sites with optimized conversion pathways.' },
              { label: 'CREATIVE PLATFORMS', name: 'Personal Portfolio Websites', desc: 'Bespoke portfolio architectures tailored for professionals and creative consultants.' },
              { label: 'COMMERCE SOLUTIONS', name: 'E-Commerce Development', desc: 'Online store setups, inventory integrations, checkout flows, and payment gateways.' },
            ].map((p) => (
              <div key={p.name} className="p-space-md bg-surface-container-low border border-outline-variant flex flex-col gap-2 rounded">
                <span className="font-label-caps text-secondary text-xs uppercase tracking-wider font-semibold">{p.label}</span>
                <h4 className="font-headline-sm text-base text-on-surface font-semibold">{p.name}</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. CLOSING CALLOUT */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl border-t border-outline-variant bg-surface-container">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-xl">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-semibold">
              // COLLABORATION ETHOS
            </span>
            <blockquote className="font-headline-md text-headline-md text-on-surface tracking-tight uppercase font-semibold">
              &ldquo;GOOD SOFTWARE IS BUILT TOGETHER.&rdquo;
            </blockquote>
            <p className="font-body-md text-body-md text-on-surface-variant">
              I enjoy working with teams that value thoughtful engineering, clear communication, and continuous improvement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm w-full md:w-auto">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 bg-secondary text-white font-label-caps text-label-caps uppercase tracking-widest font-semibold hover:bg-secondary-fixed transition-colors rounded"
            >
              <span>LET'S WORK TOGETHER &rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
