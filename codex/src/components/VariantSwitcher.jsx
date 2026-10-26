import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useVariant } from '../context/VariantContext'

export default function VariantSwitcher() {
  const { activeVariant, setActiveVariant, VARIANTS } = useVariant()
  const [expanded, setExpanded] = useState(false)

  const activeInfo = VARIANTS.find(v => v.id === activeVariant)

  return (
    <div
      className="fixed bottom-6 left-6 z-50 select-none"
      style={{ fontFamily: '"JetBrains Mono", monospace' }}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="mb-3 overflow-hidden rounded-lg border"
            style={{
              background: '#0d0e0f',
              borderColor: '#444748',
              boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
              minWidth: '220px',
            }}
          >
            {/* Panel Header */}
            <div
              className="px-4 py-2.5 border-b flex items-center gap-2"
              style={{ borderColor: '#444748' }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: activeInfo.color }}
              />
              <span
                style={{
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: '#8e9192',
                  textTransform: 'uppercase',
                }}
              >
                DESIGN_VARIANT.SWITCH
              </span>
            </div>

            {/* Variant Options */}
            <div className="p-2 flex flex-col gap-1">
              {VARIANTS.map(variant => {
                const isActive = variant.id === activeVariant
                const isLocked = variant.id !== 1
                return (
                  <button
                    key={variant.id}
                    onClick={() => {
                      if (!isLocked) {
                        setActiveVariant(variant.id)
                        setExpanded(false)
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: isActive
                        ? `1px solid ${variant.color}40`
                        : '1px solid transparent',
                      background: isActive ? `${variant.color}0f` : 'transparent',
                      cursor: isLocked ? 'default' : 'pointer',
                      transition: 'all 0.15s ease',
                      width: '100%',
                      textAlign: 'left',
                    }}
                    onMouseEnter={e => {
                      if (!isActive && !isLocked) {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive && !isLocked) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.borderColor = 'transparent'
                      }
                    }}
                  >
                    {/* Color dot */}
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: isLocked ? '#3a3a3a' : variant.color,
                        flexShrink: 0,
                        boxShadow: isActive ? `0 0 8px ${variant.color}80` : 'none',
                        transition: 'box-shadow 0.15s',
                      }}
                    />

                    {/* Label block */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: isLocked
                            ? '#555'
                            : isActive
                            ? variant.color
                            : '#c4c7c7',
                          fontWeight: isActive ? 600 : 400,
                          lineHeight: 1.2,
                        }}
                      >
                        {variant.label} — {variant.name}
                      </div>
                      <div
                        style={{
                          fontSize: '0.625rem',
                          letterSpacing: '0.08em',
                          color: '#555',
                          marginTop: '2px',
                          lineHeight: 1,
                        }}
                      >
                        {isLocked ? '// PENDING UPLOAD' : variant.description}
                      </div>
                    </div>

                    {/* Active indicator / lock */}
                    {isActive && (
                      <span
                        style={{
                          fontSize: '0.55rem',
                          color: variant.color,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          flexShrink: 0,
                        }}
                      >
                        LIVE
                      </span>
                    )}
                    {isLocked && (
                      <span
                        style={{
                          fontSize: '0.6rem',
                          color: '#444',
                        }}
                      >
                        ⚷
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Panel Footer */}
            <div
              className="px-4 py-2 border-t"
              style={{ borderColor: '#222' }}
            >
              <span
                style={{
                  fontSize: '0.55rem',
                  letterSpacing: '0.1em',
                  color: '#444',
                  textTransform: 'uppercase',
                }}
              >
                Upload V2/V3 screens to unlock
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <motion.button
        onClick={() => setExpanded(prev => !prev)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          borderRadius: '8px',
          border: `1px solid ${activeInfo.color}50`,
          background: '#0d0e0f',
          boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)`,
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Pulsing dot */}
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: activeInfo.color,
            flexShrink: 0,
            boxShadow: `0 0 6px ${activeInfo.color}`,
            animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
          }}
        />

        {/* Label */}
        <span
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: activeInfo.color,
            fontWeight: 600,
          }}
        >
          {activeInfo.label}
        </span>

        {/* Separator */}
        <span style={{ color: '#444', fontSize: '0.65rem' }}>│</span>

        {/* Variant name */}
        <span
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#8e9192',
          }}
        >
          DESIGN
        </span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            fontSize: '0.6rem',
            color: '#555',
            lineHeight: 1,
          }}
        >
          ▲
        </motion.span>
      </motion.button>
    </div>
  )
}
