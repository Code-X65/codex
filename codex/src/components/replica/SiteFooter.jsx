import { smoothScrollTo } from '../../utils/scrollHelper'

export default function SiteFooter() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    smoothScrollTo(id, 70, 1)
  }

  return (
    <footer className="max-w-[1300px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-6">
      <div className="flex items-center space-x-2">
        <span className="w-2 h-2 rounded bg-[#bbf451] inline-block"></span>
        <span>© 2024 BOLUWATIFE OMOLOYE. A. BUILT WITH INTENT.</span>
      </div>
      <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 text-neutral-400">
        <a className="hover:text-white transition-colors" href="https://github.com/Code-X65" target="_blank" rel="noopener noreferrer">GITHUB</a>
        <a className="hover:text-white transition-colors" href="https://t.me/Code_X65" target="_blank" rel="noopener noreferrer">TELEGRAM</a>
        <a className="hover:text-white transition-colors" href="https://x.com/AmossOmolo71501" target="_blank" rel="noopener noreferrer">X / TWITTER</a>
        <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/codex65" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a className="hover:text-white transition-colors" href="https://wa.me/qr/6SFSY7CULLDEP1" target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        <a className="hover:text-white transition-colors" href="mailto:Omoloyeamoss65@gmail.com">EMAIL</a>
        <a className="text-[#bbf451] hover:underline transition-colors" href="#home" onClick={(e) => handleScroll(e, '#home')}>TOP ↑</a>
      </nav>
    </footer>
  )
}
