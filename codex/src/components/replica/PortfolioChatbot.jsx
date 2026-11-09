import { useState, useRef, useEffect } from 'react'
import { PRESET_QUESTIONS, getChatbotResponse } from '../../utils/chatbotKnowledge'
import { smoothScrollTo } from '../../utils/scrollHelper'

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messages.length > 0 || isTyping) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSendQuestion = (questionText) => {
    const query = questionText.trim()
    if (!query || isTyping) return

    // Add user message
    const userMsg = { sender: 'user', text: query, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages((prev) => [...prev, userMsg])
    setInputValue('')
    setIsTyping(true)

    // Simulate natural AI thinking/typing delay
    setTimeout(() => {
      const reply = getChatbotResponse(query)
      const botMsg = {
        sender: 'bot',
        text: reply.text,
        cta: reply.cta,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages((prev) => [...prev, botMsg])
      setIsTyping(false)
    }, 550)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    handleSendQuestion(inputValue)
  }

  const handleSectionScroll = (targetId) => {
    setIsOpen(false)
    smoothScrollTo(targetId, 70, 1)
  }

  const handleReset = () => {
    setMessages([])
    setInputValue('')
    setIsTyping(false)
  }

  return (
    <>
      {/* Floating Trigger Pill (When Chatbot is Closed) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="px-4 py-2.5 rounded-none border border-[#bbf451] bg-[#07080a]/95 backdrop-blur text-[#bbf451] font-mono text-xs font-semibold hover:bg-[#bbf451] hover:text-black transition-all flex items-center gap-2 shadow-2xl cursor-pointer group"
          >
            <span className="w-2 h-2 rounded-full bg-[#bbf451] shadow-[0_0_6px_#bbf451] group-hover:scale-125 transition-transform" />
            <span>ASK ABOUT BOLUWATIFE</span>
          </button>
        </div>
      )}

      {/* Floating Chatbot Drawer / Popup */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[430px] max-h-[85vh] flex flex-col bg-[#07080a] border border-[#bbf451] shadow-[0_0_35px_rgba(187,244,81,0.15)] font-mono animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-[#1b2029] bg-[#090b0e] flex items-start justify-between relative">
            <div>
              <span className="text-[10px] text-[#bbf451] tracking-widest uppercase block mb-1 font-semibold">
                /ASK_ABOUT_BOLUWATIFE
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans">
                Questions about Boluwatife’s work?
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-none border border-[#212631] bg-[#0c0e12] flex items-center justify-center text-neutral-400 hover:text-[#bbf451] hover:border-[#bbf451] transition-colors ml-3 cursor-pointer shrink-0"
              aria-label="Close chatbot"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Body Area */}
          <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 max-h-[50vh]">
            {/* Initial Welcome & Preset Questions when no chat history */}
            {messages.length === 0 ? (
              <div className="space-y-4">
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Ask about Boluwatife's projects, skills, experience or availability, or a quick tech question. Answers about Boluwatife come directly from what’s published on this site.
                </p>

                {/* Preset Question Cards Matching User Image */}
                <div className="space-y-2 pt-1">
                  {PRESET_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleSendQuestion(question)}
                      className="w-full text-left p-3 border border-[#1b2029] bg-[#0c0f14] hover:bg-[#12161f] hover:border-[#bbf451]/60 text-xs text-neutral-200 font-sans transition-all flex items-center justify-between group cursor-pointer"
                    >
                      <span>{question}</span>
                      <span className="text-[#bbf451] opacity-0 group-hover:opacity-100 transition-opacity font-mono text-sm ml-2">
                        →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Conversation Messages History */
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px] text-neutral-500 pb-2 border-b border-[#141820]">
                  <span>CONVERSATION STREAM</span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[#bbf451] hover:underline cursor-pointer"
                  >
                    Reset chat ↺
                  </button>
                </div>

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    {msg.sender === 'user' ? (
                      <div className="max-w-[85%] bg-[#1c2330] border border-[#2b3547] text-white p-3 text-xs font-sans rounded-none">
                        <p>{msg.text}</p>
                      </div>
                    ) : (
                      <div className="max-w-[92%] bg-[#0d1017] border border-[#202938] text-neutral-300 p-3.5 text-xs font-sans space-y-2.5 rounded-none">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#bbf451]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451]" />
                          <span>BOLUWATIFE AI COMPANION</span>
                        </div>
                        <div className="whitespace-pre-line leading-relaxed text-neutral-200">
                          {msg.text}
                        </div>
                        {msg.cta && (
                          <div className="pt-2">
                            {msg.cta.link.startsWith('#') ? (
                              <button
                                type="button"
                                onClick={() => handleSectionScroll(msg.cta.link)}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a14] border border-[#bbf451] text-[#bbf451] text-[11px] font-mono hover:bg-[#bbf451] hover:text-black transition-colors cursor-pointer"
                              >
                                <span>{msg.cta.text}</span>
                                <span>↘</span>
                              </button>
                            ) : (
                              <a
                                href={msg.cta.link}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#141a14] border border-[#bbf451] text-[#bbf451] text-[11px] font-mono hover:bg-[#bbf451] hover:text-black transition-colors"
                              >
                                <span>{msg.cta.text}</span>
                                <span>↗</span>
                              </a>
                            )}
                          </div>
                        )}

                        {msg.socialLinks && msg.socialLinks.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {msg.socialLinks.map((s, idx) => (
                              <a
                                key={idx}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#141a14] border border-[#273523] hover:border-[#bbf451] text-[#bbf451] text-[10px] font-mono transition-colors"
                              >
                                <span>{s.label}</span>
                                <span className="text-[9px]">↗</span>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {/* Animated Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 p-3 bg-[#0d1017] border border-[#202938] text-[11px] text-[#bbf451] w-28">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451] animate-bounce [animation-delay:0.3s]" />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Input Form at Bottom */}
          <div className="p-4 sm:p-5 border-t border-[#1b2029] bg-[#090b0e] space-y-3">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-[#050608] border border-[#273223] focus:border-[#bbf451] text-neutral-200 text-xs px-3.5 py-2.5 outline-none font-sans placeholder:text-neutral-600 transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-5 py-2.5 bg-[#bbf451] text-black font-mono font-bold text-xs uppercase hover:bg-[#a3e635] disabled:opacity-40 disabled:hover:bg-[#bbf451] transition-all cursor-pointer shrink-0"
              >
                ASK
              </button>
            </form>

            {/* Disclaimer & Bottom Close Button */}
            <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1">
              <span className="font-sans leading-tight pr-2">
                AI answers can be wrong. For anything important, email Boluwatife.
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#263321] text-[#bbf451] hover:bg-[#121911] hover:border-[#bbf451] transition-colors uppercase font-mono text-[10px] font-semibold cursor-pointer shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bbf451] shadow-[0_0_6px_#bbf451]" />
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
