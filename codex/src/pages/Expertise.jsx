import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Expertise() {
  return (
    <div className="w-full flex flex-col text-on-surface bg-surface min-h-screen">
      {/* SECTION 01: BLUEPRINT HEADER & SCOPE INSTRUMENTATION */}
      <section className="relative w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-lg bg-surface">
        <div className="flex flex-col gap-space-md">
          {/* Eyebrow & Live Telemetry Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-outline-variant">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase font-semibold">
                05 // TECHNICAL EXPERTISE // SYSTEM ARCHITECTURE &amp; RUNTIME DOMAINS
              </span>
            </div>
            <div className="flex items-center gap-space-md font-label-code text-label-code text-on-surface-variant">
              <span className="text-outline">[STATUS: COMPILED_OK]</span>
              <span className="text-outline">//</span>
              <span className="text-secondary font-medium">SPEC.05 FULL-STACK MATRIX</span>
              <span className="hidden sm:inline text-outline">//</span>
              <span className="hidden sm:inline text-on-surface">SYS.LATENCY: 14ms</span>
            </div>
          </div>

          {/* Main Headline + Supporting Thesis Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pt-space-sm">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8 flex flex-col gap-space-sm"
            >
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight uppercase font-semibold leading-none">
                BUILT ACROSS <span className="text-secondary">THE STACK.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                From low-latency state synchronizations to resilient backend fabrics, data topology, and continuous deployment orchestration — I engineer software products that operate with predictable certainty.
              </p>
            </motion.div>
            <div className="lg:col-span-4 flex flex-col gap-space-xs font-label-code text-label-code p-space-md bg-surface-container-low border border-outline-variant relative rounded">
              <div className="absolute -top-1.5 -left-1.5 text-secondary text-xs select-none">+</div>
              <div className="absolute -bottom-1.5 -right-1.5 text-secondary text-xs select-none">+</div>
              <div className="flex justify-between items-center text-outline pb-1 border-b border-outline-variant/40">
                <span>DOMAIN LAYERING</span>
                <span className="text-secondary font-semibold">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center text-on-surface pt-1">
                <span>INTERFACE RENDERING</span>
                <span className="text-secondary font-semibold">REACT / TS</span>
              </div>
              <div className="flex justify-between items-center text-on-surface">
                <span>CONCURRENCY ENGINE</span>
                <span className="text-secondary font-semibold">NODE / FASTIFY</span>
              </div>
              <div className="flex justify-between items-center text-on-surface">
                <span>DATA NORMALIZATION</span>
                <span className="text-secondary font-semibold">POSTGRES / REDIS</span>
              </div>
              <div className="flex justify-between items-center text-on-surface">
                <span>INFRASTRUCTURE FABRIC</span>
                <span className="text-secondary font-semibold">DOCKER / CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: CAPABILITY MATRIX (4-PANEL BLUEPRINT WITH LIVE CODE & TELEMETRY SCHEMATICS) */}
      <section className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-lg bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* 01 // FRONTEND ENGINEERING */}
          <div className="group relative flex flex-col bg-surface-container-low border border-outline-variant hover:border-secondary transition-colors duration-200 rounded">
            <span className="absolute -top-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-secondary text-xs select-none">+</span>

            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container border-b border-outline-variant font-label-code text-label-code">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-semibold">01</span>
                <span className="text-on-surface uppercase font-medium">INTERFACE // UI KERNEL</span>
              </div>
              <span className="text-secondary tracking-widest text-xs uppercase font-semibold">[HYDRATION: 120ms]</span>
            </div>

            <div className="p-space-lg flex flex-col gap-space-md flex-grow">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold">Frontend Engineering</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  Building responsive, accessible interfaces with an emphasis on performance, reusable components, and deterministic UI state machines.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'XSTATE', 'RADIX UI'].map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-surface-container text-secondary border border-outline-variant font-label-caps text-label-caps rounded">
                    [ TECH // {t} ]
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-code text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Sub-second render budget enforcement</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Zero-layout-shift client hydration</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>WCAG 2.1 AA a11y keyboard tree</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Reactive sync via custom webhooks</span>
                </div>
              </div>

              {/* Technical Schematic: Component Tree */}
              <div className="p-space-sm bg-surface-container-lowest border border-outline-variant font-label-code text-label-code rounded">
                <div className="flex items-center justify-between text-outline pb-1 border-b border-outline-variant text-[10px]">
                  <span>VIRTUAL_DOM // FRAME_BUDGET</span>
                  <span className="text-secondary font-semibold">TARGET: 60FPS</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-[11px] text-on-surface-variant font-mono">
                  <div className="flex items-center justify-between">
                    <span>&lt;WorkspaceRoot status=&quot;MOUNTED&quot;&gt;</span>
                    <span className="text-outline">0.4ms</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>├── &lt;TelemetryStream rx=&#123;p2p&#125; buffer=&#123;4096&#125; /&gt;</span>
                    <span className="text-outline">1.2ms</span>
                  </div>
                  <div className="flex items-center justify-between pl-6 text-on-surface">
                    <span>│   └── &lt;SparkCanvas points=&#123;vector128&#125; /&gt;</span>
                    <span className="text-secondary font-semibold">0.8ms [JIT]</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>└── &lt;KernelControlTray rbac=&quot;SUPERUSER&quot; /&gt;</span>
                    <span className="text-outline">0.2ms</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-xs mt-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary hover:text-secondary-fixed tracking-wider uppercase transition-colors"
                >
                  <span>VERIFIED IN PROD: ORVIO &amp; CAMPUSNOVA INTERFACES</span>
                  <span className="material-symbols-outlined text-sm select-none">north_east</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 02 // BACKEND ENGINEERING */}
          <div className="group relative flex flex-col bg-surface-container-low border border-outline-variant hover:border-secondary transition-colors duration-200 rounded">
            <span className="absolute -top-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-secondary text-xs select-none">+</span>

            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container border-b border-outline-variant font-label-code text-label-code">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-semibold">02</span>
                <span className="text-on-surface uppercase font-medium">DISPATCH // SERVICE LOGIC</span>
              </div>
              <span className="text-secondary tracking-widest text-xs uppercase font-semibold">[THROUGHPUT: 18.4K RPS]</span>
            </div>

            <div className="p-space-lg flex flex-col gap-space-md flex-grow">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold">Backend Engineering</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  Designing modular microservices, asynchronous task pipelines, and resilient HTTP/gRPC interfaces built for high availability.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['NODE.JS', 'FASTIFY', 'FASTAPI', 'PYTHON', 'REST / GRAPHQL', 'JWT / RBAC'].map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-surface-container text-secondary border border-outline-variant font-label-caps text-label-caps rounded">
                    [ TECH // {t} ]
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-code text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Asynchronous request queues (BullMQ)</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Idempotent webhook delivery guarantees</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Token-bucket rate limiting</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Cryptographic signature verification</span>
                </div>
              </div>

              {/* Technical Schematic: REST Dispatch */}
              <div className="p-space-sm bg-surface-container-lowest border border-outline-variant font-label-code text-label-code rounded">
                <div className="flex items-center justify-between text-outline pb-1 border-b border-outline-variant text-[10px]">
                  <span>RPC // INGRESS DISPATCH</span>
                  <span className="text-secondary font-semibold">PROTOCOL: HTTP/2</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-[11px] font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface">POST /api/v1/event/dispatch</span>
                    <span className="text-secondary font-semibold">202 ACCEPTED</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-outline">
                    <span>&rarr;</span>
                    <span className="text-secondary">Payload Verified via Ed25519</span>
                    <span className="text-[10px] text-outline">t+0.6ms</span>
                  </div>
                  <div className="flex items-center gap-2 pl-3 text-outline">
                    <span>&rarr;</span>
                    <span className="text-secondary">Enqueue -&gt; queue:telemetry:p1</span>
                    <span className="text-[10px] text-outline">t+1.1ms</span>
                  </div>
                  <div className="flex items-center justify-between pl-6 text-on-surface">
                    <span>Worker Process [PID: 4092]</span>
                    <span className="text-secondary font-semibold">ACK_COMMITTED</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-xs mt-auto">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary hover:text-secondary-fixed tracking-wider uppercase transition-colors"
                >
                  <span>VERIFIED IN PROD: TELEMETRY DISPATCH &amp; QUEUES</span>
                  <span className="material-symbols-outlined text-sm select-none">north_east</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 03 // DATA & SYSTEM ARCHITECTURE */}
          <div className="group relative flex flex-col bg-surface-container-low border border-outline-variant hover:border-secondary transition-colors duration-200 rounded">
            <span className="absolute -top-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-secondary text-xs select-none">+</span>

            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container border-b border-outline-variant font-label-code text-label-code">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-semibold">03</span>
                <span className="text-on-surface uppercase font-medium">PERSISTENCE // RELATIONAL TOPO</span>
              </div>
              <span className="text-secondary tracking-widest text-xs uppercase font-semibold">[ACID // ISOLATED]</span>
            </div>

            <div className="p-space-lg flex flex-col gap-space-md flex-grow">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold">Data &amp; System Architecture</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  Structuring application data, building strict normalization schemas, and designing caching layers that scale transparently under load.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['POSTGRESQL', 'MYSQL', 'REDIS KEY-STORE', 'PRISMA / DRIZZLE', 'MIGRATION RUNNERS'].map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-surface-container text-secondary border border-outline-variant font-label-caps text-label-caps rounded">
                    [ TECH // {t} ]
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-code text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>ACID compliance &amp; serializable isolation</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Tenant-based schema partitioning</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Predictive Redis cache warming</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>B-Tree &amp; GiST indexing heuristics</span>
                </div>
              </div>

              {/* Technical Schematic: Schema Graph */}
              <div className="p-space-sm bg-surface-container-lowest border border-outline-variant font-label-code text-label-code rounded">
                <div className="flex items-center justify-between text-outline pb-1 border-b border-outline-variant text-[10px]">
                  <span>SCHEMA // ENTITY GRAPH (v3.4)</span>
                  <span className="text-secondary font-semibold">POOL: 32 CONN</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-[11px] font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-semibold">[TABLE: org_nodes]</span>
                    <span className="text-outline">PK: node_uuid (UUIDv4)</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>├── [1:N] telemetry_records</span>
                    <span className="text-outline">FK: node_uuid</span>
                  </div>
                  <div className="flex items-center justify-between pl-6 text-on-surface-variant">
                    <span>│   └── idx_timestamp_btree</span>
                    <span className="text-secondary font-semibold">HIT: 98.4%</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>└── [1:1] ingress_credentials</span>
                    <span className="text-outline">VAULT_HASHED</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-xs mt-auto">
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary hover:text-secondary-fixed tracking-wider uppercase transition-colors"
                >
                  <span>SEE PERSISTENCE IMPLEMENTATIONS &rarr;</span>
                </Link>
              </div>
            </div>
          </div>

          {/* 04 // INFRASTRUCTURE & FABRIC */}
          <div className="group relative flex flex-col bg-surface-container-low border border-outline-variant hover:border-secondary transition-colors duration-200 rounded">
            <span className="absolute -top-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 text-secondary text-xs select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 text-secondary text-xs select-none">+</span>

            <div className="flex items-center justify-between px-space-md py-space-xs bg-surface-container border-b border-outline-variant font-label-code text-label-code">
              <div className="flex items-center gap-space-xs">
                <span className="text-secondary font-semibold">04</span>
                <span className="text-on-surface uppercase font-medium">FABRIC // RUNTIME INFRA</span>
              </div>
              <span className="text-secondary tracking-widest text-xs uppercase font-semibold">[OBSERVABILITY: NOMINAL]</span>
            </div>

            <div className="p-space-lg flex flex-col gap-space-md flex-grow">
              <div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface uppercase font-semibold">Infrastructure &amp; CI/CD</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs leading-relaxed">
                  Automating deployments, structuring container networks, ensuring zero-downtime rollouts, and maintaining robust system observability.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {['DOCKER', 'GITHUB ACTIONS', 'LINUX / NGINX', 'KAFKA (PLANNING)', 'PROMETHEUS', 'GRAFANA'].map((t) => (
                  <span key={t} className="px-2 py-0.5 bg-surface-container text-secondary border border-outline-variant font-label-caps text-label-caps rounded">
                    [ TECH // {t} ]
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-space-sm pt-space-xs font-label-code text-body-sm text-on-surface-variant">
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Automated test suites &amp; lint gates</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Multi-stage Docker build minimization</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Zero-downtime rolling deploys</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-secondary">&rtrif;</span>
                  <span>Structured JSON application logging</span>
                </div>
              </div>

              {/* Technical Schematic: Deployment Pipeline */}
              <div className="p-space-sm bg-surface-container-lowest border border-outline-variant font-label-code text-label-code rounded">
                <div className="flex items-center justify-between text-outline pb-1 border-b border-outline-variant text-[10px]">
                  <span>PIPELINE // RUNNER_TRACE</span>
                  <span className="text-secondary font-semibold">TIME: 2m 14s</span>
                </div>
                <div className="pt-2 flex flex-col gap-1 text-[11px] font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface">git.push(main) &rarr; CI Workflow</span>
                    <span className="text-secondary font-semibold">PASSED</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>├── Linter + Typecheck + Unit Tests</span>
                    <span className="text-outline">48s</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-secondary">
                    <span>├── Container Multi-Arch Build</span>
                    <span className="text-outline">62s</span>
                  </div>
                  <div className="flex items-center justify-between pl-3 text-on-surface">
                    <span>└── Healthcheck &amp; Traffic Switch</span>
                    <span className="text-secondary font-semibold">LIVE // 200</span>
                  </div>
                </div>
              </div>

              <div className="pt-space-xs mt-auto">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary hover:text-secondary-fixed tracking-wider uppercase transition-colors"
                >
                  <span>DISCUSS YOUR SYSTEM INFRASTRUCTURE &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
