'use client'
import { useState, useRef, useEffect } from 'react'

// ==========================================================================
// 🧠 MULTILINGUAL KNOWLEDGE BASE ENGINE (Data Matrix)
// ==========================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: 'Kartik Raj',
    role: 'Full Stack Web Developer & Software Engineer',
    college: 'Government Engineering College (GEC), Vaishali',
    currentStatus: '8th Semester, B.Tech in Computer Science Engineering (CSE)'
  },
  skills: ['Next.js', 'React.js', 'JavaScript', 'Java', 'Android', 'DSA', 'MySQL']
}

const LANG_RESOURCES = {
  en: {
    welcome: "Hi! I am Kartik's AI Assistant. Ask me anything about my projects, skills, or experience!",
    placeholder: "Type in any language...",
    send: "Send",
    suggestions: ["Who is Kartik?", "What are his technical skills?", "Tell me about his internships.", "Where did he study?"]
  },
  hi: {
    welcome: "नमस्ते! मैं कार्तिक का एआई असिस्टेंट हूँ। मेरे से उनके प्रोजेक्ट्स या स्किल्स के बारे में कुछ भी पूछें!",
    placeholder: "अपनी भाषा में टाइप करें...",
    send: "भेजें",
    suggestions: ["कार्तिक कौन है?", "कार्तिक को क्या-क्या आता है?", "उनकी इंटर्नशिप के बारे में बताएं।", "उन्होंने कहाँ से पढ़ाई की है?"]
  },
  fr: {
    welcome: "Bonjour! Je suis l'assistant IA de Kartik.",
    placeholder: "Tapez dans n'importe quelle langue...",
    send: "Envoyer",
    suggestions: ["Qui est Kartik ?", "Quelles sont ses compétences ?", "Parlez-moi de ses stages.", "Où a-t-il étudié ?"]
  },
  ja: {
    welcome: "こんにちは！カルティクのAIアシスタントです。",
    placeholder: "何でも聞いてください...",
    send: "送信",
    suggestions: ["カルティクとは誰ですか？", "彼のコアスキルは何ですか？", "インターンシップの経験は？", "彼はどこの大学ですか？"]
  },
  te: {
    welcome: "నమస్కారం! నేను కార్తీక్ యొక్క AI అసిస్టెంట్‌ని.",
    placeholder: "ఏదైనా భాషలో టైప్ చేయండి...",
    send: "పంపండి",
    suggestions: ["కార్తీక్ ఎవరు?", "అతని నైపుణ్యాలు ఏమిటి?", "అతని ఇంటర్న్‌షిప్‌ల గురించి చెప్పండి.", "అతను ఎక్కడ చదువుకున్నాడు?"]
  }
}

type LangKey = 'en' | 'hi' | 'fr' | 'ja' | 'te';
interface Message {
  id: number;
  sender: 'ai' | 'user';
  text: string;
}

export default function PortfolioChatbot() {
  const [mounted, setMounted] = useState(false) // Hydration Error Fixer
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<LangKey>('en')
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Component mount hone ke baad hi render hoga (Prevents Hydration Error)
  useEffect(() => {
    setMounted(true)
    setMessages([{ id: 1, sender: 'ai', text: LANG_RESOURCES['en'].welcome }])
  }, [])

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  if (!mounted) return null // Client par aane tak kuch render nahi karega

  const detectLanguageAndRespond = (userQuery: string, forcedLang?: LangKey): string => {
    const q = userQuery.toLowerCase()
    let lang: LangKey = forcedLang || 'en'

    if (!forcedLang) {
      if (q.includes('naam') || q.includes('kaun') || q.includes('kya') || q.includes('padhai') || /[\u0900-\u097F]/.test(q)) lang = 'hi'
      else if (q.includes('qui') || q.includes('nom') || q.includes('étud') || q.includes('stage')) lang = 'fr'
      else if (q.includes('名前') || q.includes('大学') || q.includes('スキル') || /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(q)) lang = 'ja'
      else if (q.includes('పేరు') || q.includes('ఎవరు') || /[\u0C00-\u0C7F]/.test(q)) lang = 'te'
    }

    setCurrentLang(lang)

    if (lang === 'hi') {
      if (q.includes('naam') || q.includes('kaun') || q.includes('कौन')) return `यह पोर्टफोलियो ${PORTFOLIO_DATA.profile.name} का है। वह एक ${PORTFOLIO_DATA.profile.role} हैं।`
      if (q.includes('college') || q.includes('education') || q.includes('पढ़ाई') || q.includes('कहां')) return `कार्तिक ${PORTFOLIO_DATA.profile.college} से CSE में B.Tech कर रहे हैं और अभी 8th सेमेस्टर में हैं।`
      if (q.includes('intern') || q.includes('experience') || q.includes('काम') || q.includes('job')) return `कार्तिक ने Zorvyn FinTech में SDE Intern के रूप में और CodSoft में टेक्निकल इंटर्नशिप की है।`
      return `कार्तिक की स्किल्स ये हैं: ${PORTFOLIO_DATA.skills.join(', ')}।`
    }
    
    if (lang === 'fr') {
      if (q.includes('nom') || q.includes('qui')) return `Ce portfolio appartient à ${PORTFOLIO_DATA.profile.name}.`
      return `Kartik étudie au ${PORTFOLIO_DATA.profile.college}. Compétences: ${PORTFOLIO_DATA.skills.join(', ')}.`
    }

    if (lang === 'ja') {
      if (q.includes('名前') || q.includes('だれ')) return `これは${PORTFOLIO_DATA.profile.name}のポートフォリオです。`
      return `カルティクは${PORTFOLIO_DATA.profile.college}の学生です。コアスキル：${PORTFOLIO_DATA.skills.join(', ')}。`
    }

    if (lang === 'te') {
      if (q.includes('పేరు') || q.includes('ఎవరు')) return `ఈ పోర్ట్‌ఫోలియో ${PORTFOLIO_DATA.profile.name} ది.`
      return `కార్తీక్ ${PORTFOLIO_DATA.profile.college} లో చదువుతున్నాడు. నైపుణ్యాలు: ${PORTFOLIO_DATA.skills.join(', ')}.`
    }

    if (q.includes('name') || q.includes('who')) return `This portfolio belongs to ${PORTFOLIO_DATA.profile.name}. He is a ${PORTFOLIO_DATA.profile.role}.`
    if (q.includes('college') || q.includes('education')) return `Kartik is pursuing B.Tech in CSE from ${PORTFOLIO_DATA.profile.college}.`
    return `Kartik's core expertise includes: ${PORTFOLIO_DATA.skills.join(', ')}.`
  }

  const handleSuggestionClick = (suggestionText: string) => {
    const userMessage: Message = { id: Date.now(), sender: 'user', text: suggestionText }
    setMessages((prev) => [...prev, userMessage])
    setTimeout(() => {
      const aiText = detectLanguageAndRespond(suggestionText, currentLang)
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiText }])
    }, 400)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMessage: Message = { id: Date.now(), sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setTimeout(() => {
      const aiText = detectLanguageAndRespond(userMessage.text)
      setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiText }])
    }, 400)
  }

  return (
    <>
      {/* 💬 FLOATING CHAT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed', bottom: '30px', right: '30px', width: '65px', height: '65px', borderRadius: '50%',
          background: 'linear-gradient(135deg, #00d2ff 0%, #0066ff 100%)', border: '1px solid rgba(255,255,255,0.2)',
          color: '#fff', fontSize: '28px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0, 210, 255, 0.5)', zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease'
        }}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* 🖼️ DYNAMIC MULTILINGUAL CHAT WINDOW */}
      {isOpen && (
        <div
          style={{
            position: 'fixed', bottom: '110px', right: '30px', width: 'calc(100% - 60px)', maxWidth: '390px',
            height: '550px', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.08)',
            background: 'rgba(7, 9, 22, 0.95)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)',
            boxShadow: '0 40px 80px -15px rgba(0, 0, 0, 0.8)', display: 'flex', flexDirection: 'column',
            overflow: 'hidden', zIndex: 99999
          }}
        >
          {/* HEADER */}
          <div style={{ padding: '20px', background: 'linear-gradient(90deg, rgba(5,10,25,0.6) 0%, rgba(0,102,255,0.15) 100%)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h4 style={{ margin: 0, color: '#fff', fontSize: '15px', fontWeight: 600 }}>Kartik's Multi-AI</h4>
              <span style={{ fontSize: '11px', color: '#00d2ff', fontFamily: 'monospace' }}>🌐 Multi-Language Active</span>
            </div>
            <div style={{ display: 'flex', gap: '4px' }}>
              {(['en', 'hi', 'fr', 'ja', 'te'] as LangKey[]).map((l) => (
                <button key={l} onClick={() => { setCurrentLang(l); setMessages([{ id: Date.now(), sender: 'ai', text: LANG_RESOURCES[l].welcome }]) }} style={{ background: currentLang === l ? '#0066ff' : 'rgba(255,255,255,0.05)', border: 'none', color: '#fff', fontSize: '10px', padding: '4px 6px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>{l}</button>
              ))}
            </div>
          </div>

          {/* MESSAGES HUB */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%', padding: '12px 16px', borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.sender === 'user' ? '#0066ff' : 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '13.5px', lineHeight: '1.5'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* SUGGESTIONS */}
          <div style={{ padding: '0 20px 12px 20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {LANG_RESOURCES[currentLang].suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  style={{
                    background: 'rgba(0, 210, 255, 0.05)', border: '1px solid rgba(0, 210, 255, 0.15)',
                    borderRadius: '20px', padding: '6px 12px', color: '#00d2ff', fontSize: '11px',
                    cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s'
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* INPUT FORM */}
          <form onSubmit={handleSendMessage} style={{ padding: '16px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '10px', background: 'rgba(3, 5, 12, 0.4)' }}>
            <input
              type="text" value={input} onChange={(e) => setInput(e.target.value)}
              placeholder={LANG_RESOURCES[currentLang].placeholder}
              style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
            />
            <button type="submit" style={{ background: '#0066ff', color: '#fff', border: 'none', borderRadius: '12px', padding: '0 16px', fontWeight: 'bold', cursor: 'pointer' }}>
              {LANG_RESOURCES[currentLang].send}
            </button>
          </form>
        </div>
      )}
    </>
  )
}
