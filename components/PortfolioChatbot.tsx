'use client'
import { useState, useRef, useEffect, FormEvent } from 'react'

const PORTFOLIO_DATA = {
  profile: {
    name: 'Kartik Raj',
    role: 'Full Stack Web Developer & Software Engineer',
    college: 'Government Engineering College (GEC), Vaishali',
    currentStatus: '8th Semester, B.Tech in Computer Science Engineering (CSE)'
  },
  skills: ['Next.js', 'React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Java', 'Android Development', 'Data Structures & Algorithms (DSA)', 'MySQL', 'Cloud Computing'],
  experience: [
    'Software Development Engineer (SDE) Intern at Zorvyn FinTech (6 Months)',
    'Technical Intern at CodSoft (Android & Java Pipeline)',
    'Labmentix Engineering Orientation Program'
  ],
  certifications: [
    'NPTEL / Swayam (IIT) - Data Structures & Algorithms',
    'Cisco Networking Academy (CCNA Modules, Automation & Security)',
    'Full Stack Web Development & Database Architecture Milestone'
  ]
}

const LANG_RESOURCES = {
  en: {
    welcome: "Hi! I am Kartik's AI Assistant. Ask me anything about my projects, skills, or experience!",
    placeholder: "Type in your language...", send: "Send",
    suggestions: ["Who is Kartik?", "What are his technical skills?", "Tell me about his internships.", "Show his certifications."]
  },
  hi: {
    welcome: "नमस्ते! मैं कार्तिक का एआई असिस्टेंट हूँ। मेरे से उनके प्रोजेक्ट्स, स्किल्स या इंटर्नशिप के बारे में कुछ भी पूछें!",
    placeholder: "अपनी bhasha में टाइप करें...", send: "भेजें",
    suggestions: ["कार्तिक कौन है?", "कार्तिक को क्या-क्या आता है?", "उनकी इंटर्नशिप के बारे में बताएं।", "उनके सर्टिफिकेट्स दिखाएं।"]
  },
  fr: {
    welcome: "Bonjour! Je suis l'assistant IA de Kartik.", placeholder: "Tapez dans votre langue...", send: "Envoyer",
    suggestions: ["Qui est Kartik ?", "Quelles sont ses compétences ?", "Parlez-moi de ses stages.", "Ses certifications ?"]
  },
  ja: {
    welcome: "こんにちは！カルティクのAIアシスタントです。", placeholder: "メッセージを入力してください...", send: "送信",
    suggestions: ["カルティクとは誰ですか？", "彼のコアスキルは何ですか？", "インターンシップの経験は？", "資格は何を持っていますか？"]
  },
  te: {
    welcome: "నమస్కారం! నేను కార్తీక్ యొక్క AI అసిస్టెంట్‌ని.", placeholder: "మీ భాషలో టైప్ చేయండి...", send: "పంపండి",
    suggestions: ["కార్తీక్ ఎవరు?", "అతని నైపుణ్యాలు ఏమిటి?", "అతని ఇంటర్న్‌షిప్‌ల గురించి చెప్పండి.", "అతని సర్టిఫికేట్లు ఏమిటి?"]
  }
}

type LangKey = 'en' | 'hi' | 'fr' | 'ja' | 'te';
interface MessageStructure { id: number; sender: 'ai' | 'user'; text: string; }

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [currentLang, setCurrentLang] = useState<LangKey>('en')
  const [messages, setMessages] = useState<MessageStructure[]>([{ id: 1, sender: 'ai', text: LANG_RESOURCES['en'].welcome }])
  const [input, setInput] = useState<string>('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => { if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, isOpen])

  const handleAIResponseRouting = (userQuery: string, forcedLang?: LangKey): string => {
    const q = userQuery.toLowerCase()
    let lang: LangKey = forcedLang || 'en'
    if (!forcedLang) {
      if (q.includes('naam') || q.includes('kaun') || q.includes('kya') || q.includes('padhai') || /[\u0900-\u097F]/.test(q)) lang = 'hi'
      else if (q.includes('qui') || q.includes('nom') || q.includes('étud')) lang = 'fr'
      else if (q.includes('名前') || q.includes('大学') || /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(q)) lang = 'ja'
      else if (q.includes('పేరు') || /[\u0C00-\u0C7F]/.test(q)) lang = 'te'
    }
    setCurrentLang(lang)

    if (lang === 'hi') {
      if (q.includes('naam') || q.includes('kaun') || q.includes('कौन')) return `यह पोर्टफोलियो ${PORTFOLIO_DATA.profile.name} का है। वह एक ${PORTFOLIO_DATA.profile.role} हैं।`
      if (q.includes('college') || q.includes('education') || q.includes('पढ़ाई')) return `कार्तिक ${PORTFOLIO_DATA.profile.college} से CSE में B.Tech कर रहे हैं और अभी 8th सेमेस्टर में हैं।`
      if (q.includes('intern') || q.includes('experience') || q.includes('काम')) return `कार्तिक ने Zorvyn FinTech में SDE Intern और CodSoft में टेक्निकल इंटर्नशिप की है।`
      return `कार्तिक की मुख्य स्किल्स: ${PORTFOLIO_DATA.skills.join(', ')}।`
    }
    if (q.includes('name') || q.includes('who')) return `This portfolio belongs to ${PORTFOLIO_DATA.profile.name}. He is a ${PORTFOLIO_DATA.profile.role}.`
    if (q.includes('college') || q.includes('education')) return `Kartik is pursuing B.Tech in CSE from ${PORTFOLIO_DATA.profile.college} (8th semester).`
    if (q.includes('intern') || q.includes('experience')) return `Experiences:\n${PORTFOLIO_DATA.experience.map(e => `• ${e}`).join('\n')}`
    return `Kartik's core software engineering skillset features: ${PORTFOLIO_DATA.skills.join(', ')}.`
  }

  const triggerChatResponse = (textInput: string, forcedLang?: LangKey) => {
    const aiResponseText = handleAIResponseRouting(textInput, forcedLang)
    setMessages((prev) => [...prev, { id: Date.now() + 1, sender: 'ai', text: aiResponseText }])
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #00d2ff 0%, #0066ff 100%)', color: '#fff', fontSize: '24px', cursor: 'pointer', border: 'none', boxShadow: '0 10px 25px rgba(0,102,255,0.4)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isOpen ? '✕' : '💬'}
      </button>
      {isOpen && (
        <div style={{ position: 'fixed', bottom: '100px', right: '30px', width: 'calc(100% - 60px)', maxWidth: '380px', height: '500px', borderRadius: '20px', background: 'rgba(10, 15, 30, 0.97)', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', overflow: 'hidden', zIndex: 99999, backdropFilter: 'blur(20px)' }}>
          <div style={{ padding: '15px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>Kartik's Assistant</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              {(['en', 'hi', 'fr', 'ja', 'te'] as LangKey[]).map((l) => (
                <button key={l} onClick={() => { setCurrentLang(l); setMessages([{ id: Date.now(), sender: 'ai', text: LANG_RESOURCES[l].welcome }]) }} style={{ background: currentLang === l ? '#0066ff' : 'transparent', border: 'none', color: '#fff', fontSize: '10px', padding: '2px 5px', cursor: 'pointer', borderRadius: '3px' }}>{l}</button>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {messages.map((msg) => (
              <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '85%', padding: '10px 14px', borderRadius: '12px', background: msg.sender === 'user' ? '#0066ff' : 'rgba(255,255,255,0.05)', color: '#fff', fontSize: '13px', whiteSpace: 'pre-line' }}>{msg.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div style={{ padding: '10px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {LANG_RESOURCES[currentLang].suggestions.map((s, idx) => (
              <button key={idx} onClick={() => { setMessages(p => [...p, { id: Date.now(), sender: 'user', text: s }]); setTimeout(() => triggerChatResponse(s, currentLang), 300) }} style={{ background: 'rgba(0,210,255,0.08)', border: '1px solid rgba(0,210,255,0.2)', borderRadius: '15px', padding: '4px 10px', color: '#00d2ff', fontSize: '11px', cursor: 'pointer' }}>{s}</button>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if(!input.trim())return; setMessages(p => [...p, { id: Date.now(), sender: 'user', text: input }]); const i = input; setInput(''); setTimeout(() => triggerChatResponse(i), 300) }} style={{ padding: '10px', display: 'flex', gap: '5px', background: 'rgba(0,0,0,0.2)' }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder={LANG_RESOURCES[currentLang].placeholder} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px', color: '#fff', fontSize: '13px', outline: 'none' }} />
            <button type="submit" style={{ background: '#0066ff', color: '#fff', border: 'none', borderRadius: '8px', padding: '0 12px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>{LANG_RESOURCES[currentLang].send}</button>
          </form>
        </div>
      )}
    </>
  )
}
