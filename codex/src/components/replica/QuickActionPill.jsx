import { smoothScrollTo } from '../../utils/scrollHelper'

export default function QuickActionPill() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        className="px-4 py-2 rounded-none border border-[#bbf451] bg-[#07080a]/95 backdrop-blur text-[#bbf451] font-mono text-xs font-semibold hover:bg-[#bbf451] hover:text-black transition-all flex items-center gap-2 shadow-2xl"
        href="#contact"
        onClick={(e) => {
          e.preventDefault()
          smoothScrollTo('#contact', 70, 1)
        }}
      >
        <span className="w-2 h-2 rounded-full bg-[#bbf451] shadow-[0_0_6px_#bbf451]" />
        ASK ABOUT BOLUWATIFE
      </a>
    </div>
  )
}
