import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant transition-colors" id="dossier">
      <div className="w-full max-w-[1480px] mx-auto px-margin-mobile md:px-margin py-space-xl flex flex-col gap-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-lg">
          {/* Left: Wordmark & Architecture Specs */}
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-body-lg select-none">memory</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-wider font-semibold">
                OMOLOYE BOLUWATIFE (CODEX) // FULL-STACK
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-outline max-w-sm leading-relaxed">
              Full-stack systems engineer based in Lagos, Nigeria. Specializing in high-throughput backend services, resilient architectural patterns, and bespoke high-precision web clients.
            </p>
            <div className="flex items-center gap-space-sm font-label-code text-label-code text-outline">
              <span className="text-secondary">[COORD]</span>
              <span>6.5244° N, 3.3792° E // UTC+1 WAT</span>
            </div>
          </div>

          {/* Center: Navigation Index */}
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">
              [REGISTRY INDEX // ARCHITECTURE]
            </span>
            <div className="grid grid-cols-2 gap-y-space-xs gap-x-space-md">
              <Link to="/about" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary uppercase transition-colors">
                01 // About
              </Link>
              <Link to="/projects" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary uppercase transition-colors">
                02 // Projects
              </Link>
              <Link to="/experience" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary uppercase transition-colors">
                03 // Experience
              </Link>
              <Link to="/expertise" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary uppercase transition-colors">
                04 // Capabilities
              </Link>
              <Link to="/" className="font-label-caps text-label-caps text-on-surface-variant hover:text-secondary uppercase transition-colors">
                05 // Diagnostics
              </Link>
              <Link to="/contact" className="font-label-caps text-label-caps text-secondary uppercase hover:underline font-semibold">
                06 // Ingress Contact
              </Link>
            </div>
          </div>

          {/* Right: Social Relays & Status */}
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider font-semibold">
              [EXTERNAL RELAYS]
            </span>
            <div className="flex flex-col gap-space-xs font-label-code text-label-code">
              <a
                className="text-on-surface-variant hover:text-secondary inline-flex items-center gap-space-xs transition-colors"
                href="https://github.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>GITHUB: codex-omoloye</span>
                <span className="material-symbols-outlined text-body-sm select-none">north_east</span>
              </a>
              <a
                className="text-on-surface-variant hover:text-secondary inline-flex items-center gap-space-xs transition-colors"
                href="https://linkedin.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>LINKEDIN: omoloye-boluwatife</span>
                <span className="material-symbols-outlined text-body-sm select-none">north_east</span>
              </a>
              <a
                className="text-on-surface-variant hover:text-secondary inline-flex items-center gap-space-xs transition-colors"
                href="mailto:omoloyeamoss65@gmail.com"
              >
                <span>INBOX: omoloyeamoss65@gmail.com</span>
                <span className="material-symbols-outlined text-body-sm select-none">send</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hairline Alignment Bar */}
        <div className="pt-space-md border-t border-outline-variant flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md flex-wrap text-outline font-label-code text-label-code">
            <span>&copy; {new Date().getFullYear()} OMOLOYE BOLUWATIFE (CODEX)</span>
            <span className="hidden sm:inline">/</span>
            <span>ALL RIGHTS RESERVED</span>
            <span className="hidden sm:inline">/</span>
            <span className="text-secondary font-semibold">ARCHITECTURAL RUNTIME // SYS.VER 4.20</span>
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-wider">
              STATUS: ALL CIRCUITS NOMINAL
            </span>
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  )
}
