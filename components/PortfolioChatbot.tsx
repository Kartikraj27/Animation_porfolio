'use client'
import { useState, useRef, useEffect, FormEvent } from 'react'

// ==========================================================================
// 🧠 KARTIK RAJ'S ACTUAL PORTFOLIO DATA HUB
// ==========================================================================
const PORTFOLIO_DATA = {
  profile: {
    name: 'Kartik Raj',
    role: 'Full Stack Web Developer & Software Engineer',
    college: 'Government Engineering College (GEC), Vaishali',
    currentStatus: '8th Semester, B.Tech in Computer Science Engineering (CSE)'
  },
  skills: [
    'Next.js', 'React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 
    'Java', 'Android Development', 'Data Structures & Algorithms (DSA)', 
    'MySQL', 'Cloud Computing'
  ],
  experience: [
    'Software Development Engineer (SDE) Intern at Zorvyn FinTech (6 Months)',
    'Technical Intern at CodSoft (Android & Java Pipeline)',
    'Labmentix Engineering Orientation Program'
  ],
  certifications: [
    'NPTEL / Swayam (IIT) - Data Structures & Algorithms (Elite Rank)',
    'Naukri Campus National Level Aptitude Test (AINCAT 2026)',
    'Cisco Networking Academy (CCNA Modules, Automation & Security)',
    'Full Stack Web Development & Database Architecture Milestone'
  ]
}

// ==========================================================================
// 🌐 MULTILINGUAL DICTIONARY & SUGGESTIONS INTERFACE
// ==========================================================================
const LANG_RESOURCES = {
  en: {
    welcome: "Hi! I am Kartik's AI Assistant. Ask me anything about my projects, skills, or experience!",
    placeholder: "Type in any language...",
    send: "Send",
    suggestions: ["Who is Kartik?", "What are his technical skills?", "Tell me about his internships.", "Show his certifications."]
  },
  hi: {
    welcome: "नमस्ते! मैं कार्तिक का एआई असिस्टेंट हूँ। मेरे से उनके प्रोजेक्ट्स, स्किल्स या इंटर्नशिप के बारे में कुछ भी पूछें!",
    placeholder: "अपनी भाषा में टाइप करें...",
    send: "भेजें",
    suggestions: ["कार्तिक कौन है?", "कार्तिक को क्या-क्या आता है?", "उनकी इंटर्नशिप के बारे में बताएं।", "उनके सर्टिफिकेट्स दिखाएं।"]
  },
  fr: {
    welcome: "Bonjour! Je suis l'assistant IA de Kartik. Posez-moi des questions sur ses compétences ou ses stages.",
    placeholder: "Tapez dans n'importe quelle langue...",
    send: "Envoyer",
    suggestions: ["Qui est Kartik ?", "Quelles sont ses compétences ?", "Parlez-moi de ses stages.", "Ses certifications ?"]
  },
  ja: {
    welcome: "こんにちは！カルティクのAIアシスタントです。彼のスキルやインターンシップについて質問してください。",
    placeholder: "何でも聞いてください...",
    send: "送信",
    suggestions: ["カルティクとは誰ですか？", "彼のコアスキルは何ですか？", "インターンシップの経験は？", "資格は何を持っていますか？"]
  },
  te: {
    welcome: "నమస్కారం! నేను కార్తీక్ యొక్క AI అసిస్టెంట్‌ని. అతని స్కిల్స్ మరియు ఇంటర్న్‌షిప్స్ గురించి నన్ను ఏదైనా అడగవచ్చు.",
    placeholder: "ఏదైనా భాషలో టైప్ చేయండి...",
    send: "పంపండి",
    suggestions: ["కార్తీక్ ఎవరు?", "అతని నైపుణ్యాలు ఏమిటి?", "అతని ఇంటర్న్‌షిప్‌ల గురించి చెప్పండి.", "అతని సర్టిఫికేట్లు ఏమిటి?"]
  }
}

type LangKey = 'en' | 'hi' | 'fr' | 'ja' | 'te';

interface MessageStructure {
  id: number;
  sender: 'ai' | 'user';
  text: string;
}

export default function PortfolioChatbot() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentLang, setCurrentLang] = useState<LangKey>('en')
  const [messages, setMessages] = useState<MessageStructure[]>([])
  const [input, setInput] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Prevents Server-Side Hydration Conflicts
  useEffect(() => {
    setMounted(true)
    setMessages([{ id: 1, sender: 'ai', text: LANG_RESOURCES['en'].welcome }])
  }, [])

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  if (!mounted) return null

  // ==========================================================================
  // 🎯 CORE NLP INTELLIGENCE ROUTER ENGINE
  // ==========================================================================
  const handleAIResponseRouting = (userQuery: string, forcedLang?: LangKey): string => {
    const q = userQuery.toLowerCase()
    let lang: LangKey = forcedLang || 'en'

    // Auto Language Tracking Mechanism
    if (!forcedLang) {
      if (q.includes('naam') || q.includes('kaun') || q.includes('kya') || q.includes('padhai') || /[\u0900-\u097F]/.test(q)) lang = 'hi'
      else if (q.includes('qui') || q.includes('nom') || q.includes('étud') || q.includes('stage')) lang = 'fr'
      else if (q.includes('名前') || q.includes('大学') || q.includes('スキル') || /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(q)) lang = 'ja'
      else if (q.includes('పేరు') || q.includes('ఎవరు') || /[\u0C00-\u0C7F]/.test(q)) lang = 'te'
    }

    setCurrentLang(lang)

    // --- HINDI / HINGLISH SYSTEM OUTPUT ---
    if (lang === 'hi') {
      if (q.includes('naam') || q.includes('kaun') || q.includes('कौन')) {
        return `यह पोर्टफोलियो ${PORTFOLIO_DATA.profile.name} का है। वह एक ${PORTFOLIO_DATA.profile.role} हैं।`
      }
      if (q.includes('college') || q.includes('education') || q.includes('पढ़ाई') || q.includes('कहां') || q.includes('study')) {
        return `कार्तिक ${PORTFOLIO_DATA.profile.college} से Computer Science Engineering में B.Tech कर रहे हैं और अभी अपने अंतिम (8th) सेमेस्टर में हैं।`
      }
      if (q.includes('intern') || q.includes('experience') || q.includes('काम') || q.includes('job')) {
        return `कार्तिक के पास बेहतरीन इंटर्नशिप अनुभव है:\n- Zorvyn FinTech में SDE Intern (6 Months)\n- CodSoft में Technical Intern (Android & Java)\n- Labmentix Orientation`
      }
      if (q.includes('certificat') || q.includes('sertifiket') || q.includes('nptel') || q.includes('ccna')) {
        return `कार्तिक के मुख्य सर्टिफिकेशन्स:\n${PORTFOLIO_DATA.certifications.map(c => `• ${c}`).join('\n')}`
      }
      return `कार्तिक के पास ये सब टेक्निकल कोर स्किल्स हैं: ${PORTFOLIO_DATA.skills.join(', ')}।`
    }

    // --- FRENCH SYSTEM OUTPUT ---
    if (lang === 'fr') {
      if (q.includes('nom') || q.includes('qui')) return `Ce portfolio appartient à ${PORTFOLIO_DATA.profile.name}. Il est un ${PORTFOLIO_DATA.profile.role}.`
      if (q.includes('étud') || q.includes('ecole')) return `Kartik étudie au ${PORTFOLIO_DATA.profile.college} (8ème semestre).`
      if (q.includes('stage') || q.includes('expérienc')) return `Il a travaillé chez Zorvyn FinTech en tant que stagiaire SDE.`
      return `Compétences de Kartik: ${PORTFOLIO_DATA.skills.join(', ')}.`
    }

    // --- JAPANESE SYSTEM OUTPUT ---
    if (lang === 'ja') {
      if (q.includes('名前') || q.includes('だれ')) return `これは${PORTFOLIO_DATA.profile.name}のポートフォリオです。`
      if (q.includes('大学') || q.includes('学校')) return `${PORTFOLIO_DATA.profile.college}の第8セメスター（最終学年）に在籍しています。`
      if (q.includes('インターン')) return `Zorvyn FinTechのSDEインターンやCodSoftの技術インターンを経験しています。`
      return `カルティクのスキル：${PORTFOLIO_DATA.skills.join(', ')}。`
    }

    // --- TELUGU SYSTEM OUTPUT ---
    if (lang === 'te') {
      if (q.includes('పేరు') || q.includes('ఎవరు')) return `ఈ పోర్ట్‌ఫోలియో ${PORTFOLIO_DATA.profile.name} ది.`
      if (q.includes('చదువు') || q.includes('కాలేజ్')) return `కార్తీక్ ${PORTFOLIO_DATA.profile.college} లో బి.టెక్ (CSE) 8వ సెమిస్టర్ చదువుతున్నాడు.`
      if (q.includes('ఇంటర్న్') || q.includes('పని')) return `అతను Zorvyn FinTech లో SDE ఇంటర్న్‌గా పనిచేశాడు.`
      return `కార్తీక్ నైపుణ్యాలు: ${PORTFOLIO_DATA.skills.join(', ')}.`
    }

    // --- DEFAULT ENGLISH PIPELINE ---
    if (q.includes('name') || q.includes('who')) return `This portfolio belongs to ${PORTFOLIO_DATA.profile.name}. He is a ${PORTFOLIO_DATA.profile.role}.`
    if (q.includes('college') || q.includes('education') || q.includes('where')) return `Kartik is pursuing his B.Tech in CSE from ${PORTFOLIO_DATA.profile.college} and is currently in his 8th semester.`
    if (q.includes('intern') || q.includes('experience') || q.includes('work')) {
      return `Kartik's professional experiences include:\n${PORTFOLIO_DATA.experience.map(e => `• ${e}`).join('\n')}`
    }
    if (q.includes('certificat') || q.includes('credential')) {
      return `Kartik's verified credentials:\n${PORTFOLIO_DATA.certifications.map(c => `• ${c}`).join('\n')}`
    }
    return `Kartik's core software engineering skillset features: ${PORTFOLIO_DATA.skills.join(', ')}.`
  }

  const triggerChatResponse = (textInput: string, forcedLang?: LangKey) => {
    const aiResponseText = handleAIResponseRouting(textInput, forcedLang)
    setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponseText }])
  }

  const handleSuggestionClick = (suggestionText: string) => {
    const userMsg: MessageStructure = { id: Date.now(), sender: 'user', text: suggestionText }
    setMessages((prev) => [...prev, userMsg])
    setTimeout(() => triggerChatResponse(suggestionText, currentLang), 350)
  }

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg: MessageStructure = { id: Date.now(), sender: 'user', text: input }
    setMessages((prev) => [...prev, userMsg])
    const cachedInput = input
    setInput('')
    setTimeout(() => triggerChatResponse(cachedInput), 350)
  }

  return (
    <>
      {/* 💬 FLOATING CHAT SPHERE ACTUATOR */}
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

      {/* 🖼️ HIGH-LEVEL INTERACTIVE PORTFOLIO CONSOLE WINDOW */}
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
          {/* HEADER NODE BAR */}
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

          {/* CHAT MESSAGES LOG DISPLAY */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%', padding: '12px 16px', borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.sender === 'user' ? '#0066ff' : 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '13.5px', lineHeight: '1.5', whiteSpace: 'pre-line'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* DYNAMIC SUGGESTION PILLS AREA */}
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

          {/* INPUT FORM PIPELINE TERMINAL */}
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
