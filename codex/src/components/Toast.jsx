
export default function Toast({ message, onClose }) {
  if (!message) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md bg-surface-container-highest border border-secondary/50 text-on-surface shadow-2xl p-4 rounded backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-300">
      <div className="flex items-start gap-3">
        <span className="material-symbols-outlined text-secondary text-xl select-none">
          info
        </span>
        <div className="flex-1">
          <div className="flex items-center justify-between pb-1">
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
              [SYS.NOTICE] SYSTEM TELEMETRY
            </span>
            <span className="font-label-code text-[10px] text-outline">STATUS // 200</span>
          </div>
          <p className="font-body-md text-sm text-on-surface leading-snug">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-outline hover:text-on-surface transition-colors p-1"
          aria-label="Dismiss notice"
        >
          <span className="material-symbols-outlined text-sm">close</span>
        </button>
      </div>
    </div>
  )
}
