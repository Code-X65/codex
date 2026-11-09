export default function NewsletterSection() {
  return (
    <section className="py-20 border-b border-brand-cardBorder/60"><div className="bg-[#090a0d] border border-[#bbf451] rounded-none p-6 sm:p-10 relative">
  <div className="mb-8">
    <span className="text-[11px] font-mono text-[#bbf451] uppercase tracking-wider block mb-3">/OCCASIONAL_NOTES</span>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-3 font-sans">
      Useful notes, when there’s something worth sharing.
    </h2>
    <p className="text-xs text-neutral-400 font-sans leading-relaxed max-w-2xl">A low-volume digest on product systems, interfaces, and technical work. Your email stays in Boluwatife’s private portfolio list—no third-party tracking.</p>
  </div>
  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
    <div className="flex flex-col sm:flex-row items-stretch sm:items-end gap-4 sm:gap-6">
      <div className="flex-1 border-b border-[#27272a] pb-2">
        <input className="w-full bg-transparent border-none p-0 text-sm font-mono text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:ring-0" placeholder="you@example.com" type="email" />
      </div>
      <button className="px-6 py-3 bg-[#bbf451] text-black font-mono font-medium text-xs sm:text-sm tracking-tight rounded-none hover:bg-[#a3e635] transition-all whitespace-nowrap shrink-0" type="submit">
        Join the notes
      </button>
    </div>
    <div className="flex items-center space-x-2 text-[10px] text-neutral-500 font-mono pt-1">
      <input defaultChecked className="rounded-none bg-[#111318] border border-[#27272a] text-[#bbf451] focus:ring-0 w-3.5 h-3.5" id="consent-notes" type="checkbox" />
      <label htmlFor="consent-notes" className="">I agree to receive occasional portfolio and writing updates at this address.</label>
    </div>
  </form>
</div></section>
  )
}
