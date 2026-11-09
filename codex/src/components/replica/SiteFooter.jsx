import { smoothScrollTo } from '../../utils/scrollHelper'

export default function SiteFooter() {
  const handleScroll = (e, id) => {
    e.preventDefault()
    smoothScrollTo(id, 70, 1)
  }

  return (
    <footer className="max-w-[1300px] mx-auto px-4 sm:px-6 py-12 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-neutral-500 gap-4">
<div className="flex items-center space-x-2">
<span className="w-2 h-2 rounded bg-[#bbf451] inline-block"></span>
<span className="">© 2024 BOLUWATIFE OMOLOYE. A. BUILT WITH INTENT.</span>
</div>
<nav className="flex flex-wrap items-center gap-6 text-neutral-400">
<a className="hover:text-white transition-colors" href="#services" onClick={(e) => handleScroll(e, '#services')}>SERVICES</a>
<a className="hover:text-white transition-colors" href="#">USER</a>
<a className="hover:text-white transition-colors" href="#">RSS</a>
<a className="hover:text-white transition-colors" href="#">FEED</a>
<a className="hover:text-white transition-colors" href="#">SYSTEM</a>
<a className="hover:text-white transition-colors" href="mailto:Omoloyeamoss65@gmail.com">EMAIL</a>
<a className="text-[#bbf451] hover:underline transition-colors" href="#home" onClick={(e) => handleScroll(e, '#home')}>TOP ↑</a>
</nav>
</footer>
  )
}
