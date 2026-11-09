export default function ContactSection() {
  return (
    <section className="py-20 border-b border-brand-cardBorder/60" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Contact info & socials */}
        <div className="lg:col-span-5 flex flex-col">
          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-widest block mb-6">
            /CONTACT
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-8 font-sans">
            Have a tricky<br />system to<br />make more<br />legible?
          </h2>
          <p className="text-neutral-400 text-sm leading-relaxed mb-10 font-sans max-w-md">
            I'm available for selected product collaborations, technical consulting, and conversations about the work itself.
          </p>

          <div className="divide-y divide-[#1e232d] border-y border-[#1e232d] font-mono text-xs">
            {/* Primary Email */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="mailto:Omoloyeamoss65@gmail.com"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <rect height="14" rx="2" width="18" x="3" y="5"></rect>
                  <polyline points="3 7 12 13 21 7"></polyline>
                </svg>
                <span>Omoloyeamoss65@gmail.com</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* GitHub */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="https://github.com/Code-X65"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub · Code-X65</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* Telegram */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="https://t.me/Code_X65"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span>Telegram · @Code_X65</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* X / Twitter */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="https://x.com/AmossOmolo71501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>X / Twitter · @AmossOmolo71501</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* LinkedIn */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="https://www.linkedin.com/in/codex65"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn · in/codex65</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* WhatsApp */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="https://wa.me/qr/6SFSY7CULLDEP1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp · Direct Chat</span>
              </span>
              <span className="text-[#bbf451] text-sm">↗</span>
            </a>

            {/* Download Résumé */}
            <a
              className="flex items-center justify-between py-4 text-neutral-300 hover:text-white transition-colors group"
              href="#"
            >
              <span className="flex items-center gap-3">
                <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                <span>Download résumé</span>
              </span>
              <span className="text-[#bbf451] text-sm">↘</span>
            </a>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#090b0e] border border-[#1b2029] rounded-none p-8 sm:p-10 font-mono shadow-2xl">
            <div className="flex items-center justify-between pb-6 border-b border-[#181d26] mb-8">
              <span className="text-xs text-neutral-300 tracking-wider font-mono">/SEND_A_NOTE</span>
              <span className="text-[10px] text-[#bbf451] font-mono tracking-widest uppercase font-medium">LIVE VALIDATION ENABLED</span>
            </div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="border-b border-[#1e232d] pb-3 focus-within:border-[#bbf451] transition-colors">
                <label className="block text-[11px] text-neutral-400 uppercase tracking-widest font-mono mb-2" htmlFor="contact-name">Name</label>
                <input className="w-full bg-transparent border-none p-0 text-sm text-neutral-200 focus:outline-none focus:ring-0 placeholder:text-neutral-600 font-sans" id="contact-name" placeholder="Your name" type="text" />
              </div>
              <div className="border-b border-[#1e232d] pb-3 focus-within:border-[#bbf451] transition-colors">
                <label className="block text-[11px] text-neutral-400 uppercase tracking-widest font-mono mb-2" htmlFor="contact-email">Email</label>
                <input className="w-full bg-transparent border-none p-0 text-sm text-neutral-200 focus:outline-none focus:ring-0 placeholder:text-neutral-600 font-sans" id="contact-email" placeholder="you@company.com" type="email" />
              </div>
              <div className="border-b border-[#1e232d] pb-3 focus-within:border-[#bbf451] transition-colors">
                <label className="block text-[11px] text-neutral-400 uppercase tracking-widest font-mono mb-2" htmlFor="contact-project">What are you working on?</label>
                <textarea className="w-full bg-transparent border-none p-0 text-sm text-neutral-200 focus:outline-none focus:ring-0 placeholder:text-neutral-600 font-sans min-h-[90px]" id="contact-project" placeholder="A little context goes a long way." rows="3"></textarea>
              </div>
              <div className="pt-4">
                <button className="w-full py-4 bg-[#bbf451] text-black font-semibold rounded-none text-xs font-mono tracking-wider uppercase hover:bg-[#a3e635] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#bbf451]/10" type="submit">
                  <span>Transmit message</span>
                  <span className="text-sm">↗</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
