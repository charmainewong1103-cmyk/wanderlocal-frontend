import { useState } from 'react'

type Screen = 'home' | 'itinerary' | 'assistant' | 'community' | 'impact'

// ─── Icons ───────────────────────────────────────────────────────────────────

const IcoHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)
const IcoMap = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="6" x2="15" y2="21" />
  </svg>
)
const IcoSparkle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
  </svg>
)
const IcoPeople = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
)
const IcoLeaf = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 014.8 7.77l7.4-2.82L19 7a7 7 0 01-8 13z" /><path d="M12 19c.09-1.65.68-6.36-3-9" />
  </svg>
)
const IcoBell = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
)
const IcoSearch = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
  </svg>
)
const IcoSend = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)
const IcoHeart = ({ filled }: { filled?: boolean }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill={filled ? '#E8552D' : 'none'} stroke={filled ? '#E8552D' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
)
const IcoBubble = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
)
const IcoCheck = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IcoClock = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
)
const IcoPin = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const IcoStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#F4A827">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)
const IcoArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const IcoTrend = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────

const stories = [
  { name: 'Mei Lin', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format', active: true },
  { name: "Tomás", avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format', active: true },
  { name: 'Aisha', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format', active: false },
  { name: 'Soren', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format', active: false },
  { name: 'Priya', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&h=80&fit=crop&auto=format', active: true },
  { name: 'Kai', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format', active: false },
]

const trending = [
  { name: 'Victoria Peak', tag: 'Iconic Viewpoint', crowd: 'high' as const, img: '/victoriapeak.jpg', rating: 4.9, dist: '4.2 km' },
  { name: 'Temple Street', tag: 'Night Market', crowd: 'medium' as const, img: 'https://images.unsplash.com/photo-1552912470-ee2e96439539?w=400&h=260&fit=crop&auto=format', rating: 4.7, dist: '1.8 km' },
  { name: 'Star Ferry', tag: 'Harbour Crossing', crowd: 'low' as const, img: 'https://images.unsplash.com/photo-1577871598838-a543ee47cd79?w=400&h=260&fit=crop&auto=format', rating: 4.8, dist: '0.6 km' },
]

type ItineraryStop = {
  time: string; name: string; type: string; crowd: 'low' | 'medium' | 'high'
  verified: boolean; cost: string; duration: string; note?: string
}
type ItineraryDay = { day: number; label: string; stops: ItineraryStop[] }

const itineraryDays: ItineraryDay[] = [
  {
    day: 1, label: 'Kowloon Pulse',
    stops: [
      { time: '09:00', name: 'Wong Tai Sin Temple', type: 'Temple', crowd: 'medium', verified: true, cost: 'Free', duration: '1.5h', note: 'Mornings are quietest — locals confirmed weekday visits best' },
      { time: '11:00', name: 'Dim Sum at Lin Heung', type: 'Dining', crowd: 'high', verified: true, cost: 'HK$120', duration: '1h', note: 'AI suggested — oldest dim sum house in HK, arrive by 10:30' },
      { time: '13:30', name: 'Mong Kok Street Walk', type: 'Outdoor', crowd: 'high', verified: true, cost: 'Free', duration: '2h' },
      { time: '17:00', name: 'Ladies Market', type: 'Shopping', crowd: 'medium', verified: true, cost: 'HK$300', duration: '1.5h' },
      { time: '20:00', name: 'Temple Street Night Market', type: 'Night Market', crowd: 'medium', verified: true, cost: 'HK$200', duration: '2h' },
    ],
  },
  {
    day: 2, label: 'Hong Kong Island',
    stops: [
      { time: '08:00', name: 'Victoria Peak (Early)', type: 'Viewpoint', crowd: 'low', verified: true, cost: 'HK$88', duration: '2h', note: 'Peak Tram at 8am — 70% fewer crowds than noon' },
      { time: '11:00', name: 'Sheung Wan PMQ', type: 'Art & Culture', crowd: 'low', verified: true, cost: 'Free', duration: '1.5h' },
      { time: '13:00', name: 'Yung Kee Roast Goose', type: 'Dining', crowd: 'medium', verified: true, cost: 'HK$250', duration: '1h' },
      { time: '15:30', name: 'SoHo & Hollywood Rd', type: 'Outdoor', crowd: 'low', verified: true, cost: 'Free', duration: '2h', note: 'AI suggested — antique shops not on tourist maps' },
      { time: '18:30', name: 'Star Ferry Sunset', type: 'Harbour', crowd: 'medium', verified: true, cost: 'HK$2.50', duration: '30m' },
    ],
  },
  {
    day: 3, label: 'Lantau & Outlying',
    stops: [
      { time: '07:30', name: 'Tian Tan Big Buddha', type: 'Landmark', crowd: 'medium', verified: true, cost: 'HK$185', duration: '3h' },
      { time: '11:30', name: 'Ngong Ping Village', type: 'Culture', crowd: 'low', verified: true, cost: 'Free', duration: '1h' },
      { time: '14:00', name: 'Cheung Chau Ferry', type: 'Transport', crowd: 'low', verified: true, cost: 'HK$36', duration: '1h', note: 'Island fisherman village — almost zero tourists on weekdays' },
      { time: '16:00', name: 'Cheung Chau Seafood', type: 'Dining', crowd: 'low', verified: true, cost: 'HK$180', duration: '1.5h' },
    ],
  },
]

type ChatMessage = { role: 'user' | 'ai'; text: string; verified?: boolean; sources?: string[]; ts: string }

const initialChat: ChatMessage[] = [
  { role: 'user', text: 'When is the best time to visit Temple Street Night Market?', ts: '09:14 AM' },
  {
    role: 'ai',
    text: "Temple Street is best from 8–10pm on weeknights. Stalls are fully set up, fortune tellers are active, and it's lively without being dangerously packed. Avoid Friday and Saturday after 9pm — crowd density nearly doubles.",
    verified: true,
    sources: ['Hong Kong Tourism Board', 'Temple Street Vendor Association · 5 verified merchants', 'Local Guide: Uncle Fong'],
    ts: '09:14 AM',
  },
  { role: 'user', text: 'Where do locals actually eat dim sum — not tourist traps?', ts: '09:18 AM' },
  {
    role: 'ai',
    text: "Skip the hotel buffets. Lin Heung Tea House on Wellington St is the real deal — three generations old, push carts, no English menu needed. Go before 11am on a weekday. Also try One Dim Sum in Prince Edward, confirmed by 4 local chefs as the best value in Kowloon.",
    verified: true,
    sources: ['HK Culinary Heritage Society', 'One Dim Sum · Verified Local Merchant', 'Local Chef Network · 4 contributors'],
    ts: '09:19 AM',
  },
]

type CommunityPost = {
  id: number; author: string; avatar: string; type: 'tourist' | 'merchant'
  badge?: string; location: string; content: string; image?: string
  likes: number; comments: number; time: string; liked: boolean
  deal?: { discount: string; code: string; valid: string }
}

const initialPosts: CommunityPost[] = [
  {
    id: 1, author: 'Tomás Vega', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format',
    type: 'tourist', location: 'Victoria Peak, HK Island',
    content: "Took the Peak Tram at 7:45am before the tourist rush. Had the whole viewing terrace to myself for 20 minutes. The skyline stretching across Victoria Harbour with morning haze — genuinely one of the best views I've ever seen. Go early, no excuses.",
    image: 'https://images.unsplash.com/photo-1678110721308-a08ed05a7938?w=600&h=320&fit=crop&auto=format',
    likes: 287, comments: 51, time: '3h ago', liked: false,
  },
  {
    id: 2, author: "Uncle Fong's Dai Pai Dong", avatar: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=80&h=80&fit=crop&auto=format',
    type: 'merchant', badge: 'Verified Merchant', location: 'Sham Shui Po, Kowloon',
    content: "My family has been cooking wonton noodles on this corner for 47 years. Come Mon–Wed before 8am for our old-school breakfast set — wonton soup, toast with butter, and milk tea. Just HK$45. No tourists, only neighbours.",
    likes: 134, comments: 41, time: '6h ago', liked: false,
    deal: { discount: 'Breakfast Set HK$45', code: 'FONG45', valid: 'Mon–Wed, before 8am' },
  },
  {
    id: 3, author: 'Aisha Mensah', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format',
    type: 'tourist', location: 'Sham Shui Po, Kowloon',
    content: "The AI flagged a fake 'authentic dai pai dong' near Nathan Road charging 3× the price. It redirected me to Uncle Fong's two streets away. HK$45 for the most soulful wonton noodles. The app literally paid for itself in one meal.",
    likes: 198, comments: 34, time: '1d ago', liked: true,
  },
  {
    id: 4, author: 'Horizon Harbour Cruises', avatar: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=80&h=80&fit=crop&auto=format',
    type: 'merchant', badge: 'Verified Merchant', location: 'Tsim Sha Tsui Pier',
    content: "Skip the crowded Symphony of Lights tour. Our Tuesday & Thursday morning harbour cruise departs at 9am — calm waters, no crowds, and a certified local guide who grew up on the harbour.",
    likes: 82, comments: 19, time: '2d ago', liked: false,
    deal: { discount: '25% Morning Cruise', code: 'HARBOUR25', valid: 'Tues & Thurs, 9am' },
  },
]

const impactCategories = [
  { name: 'Dining & Food', local: 91, total: 4800 },
  { name: 'Transport', local: 55, total: 1200 },
  { name: 'Shopping', local: 74, total: 3500 },
  { name: 'Activities', local: 97, total: 1800 },
  { name: 'Accommodation', local: 100, total: 6400 },
]
const totalSpend = impactCategories.reduce((s, c) => s + c.total, 0)
const localSpend = impactCategories.reduce((s, c) => s + Math.round(c.total * c.local / 100), 0)
const localPct = Math.round((localSpend / totalSpend) * 100)

const rewards = [
  { title: 'Conscious Traveler', desc: '70%+ local spending', icon: '🌿', earned: true },
  { title: 'Market Champion', desc: 'Visited 5 local markets', icon: '🏮', earned: true },
  { title: 'Community Builder', desc: 'Share 3 posts to unlock', icon: '🤝', earned: false },
]

// ─── Small shared components ──────────────────────────────────────────────────

function CrowdPill({ level }: { level: 'low' | 'medium' | 'high' }) {
  const cls = { low: 'bg-emerald-100 text-emerald-700', medium: 'bg-amber-100 text-amber-700', high: 'bg-red-100 text-red-700' }[level]
  return <span className={`text-[9px] font-mono font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider ${cls}`}>{level} crowd</span>
}

function DonutChart({ pct }: { pct: number }) {
  const r = 58, circ = 2 * Math.PI * r
  const localArc = (pct / 100) * circ
  const chainArc = circ - localArc
  return (
    <svg viewBox="0 0 160 160" width="160" height="160">
      <circle cx="80" cy="80" r={r} fill="none" stroke="#E2DAD0" strokeWidth="22" />
      <circle cx="80" cy="80" r={r} fill="none" stroke="#1A6659" strokeWidth="22"
        strokeDasharray={`${localArc} ${circ}`} strokeLinecap="round" transform="rotate(-90 80 80)" />
      {chainArc > 6 && (
        <circle cx="80" cy="80" r={r} fill="none" stroke="#F4A827" strokeWidth="22"
          strokeDasharray={`${chainArc - 6} ${circ}`} strokeLinecap="round"
          transform={`rotate(${(pct / 100) * 360 - 90 + 3} 80 80)`} />
      )}
      <text x="80" y="73" textAnchor="middle" fill="#1C1C1C" fontSize="28" fontWeight="700" fontFamily="Fraunces, serif">{pct}%</text>
      <text x="80" y="93" textAnchor="middle" fill="#8A8A8A" fontSize="10" fontFamily="JetBrains Mono, monospace">LOCAL</text>
    </svg>
  )
}

// ─── Home Screen ─────────────────────────────────────────────────────────────

function HomeScreen({ setScreen, userName }: { setScreen: (s: Screen) => void; userName: string }) {
  return (
    <div className="min-h-full flex flex-col">
      {/* Top bar */}
      <header className="city-header sticky top-0 z-10 bg-cream/90 backdrop-blur-md px-5 sm:px-8 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex h-11 w-11 bg-coral text-white items-center justify-center font-mono text-[11px] font-bold leading-tight text-center">
            HK<br />08
          </div>
          <div>
            <p className="text-xs font-mono text-coral uppercase tracking-[0.2em]">Tuesday, Oct 8 · Hong Kong</p>
            <h1 className="font-display text-2xl font-bold text-ink leading-tight">Good morning, {userName}</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative p-2.5 rounded-xl bg-card border border-border text-ink-soft hover:border-forest transition-colors">
            <IcoBell />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-coral rounded-full" />
          </button>
          <button className="p-2.5 rounded-xl bg-card border border-border text-ink-soft hover:border-forest transition-colors">
            <IcoSearch />
          </button>
        </div>
      </header>

      <div className="flex-1 px-5 sm:px-8 py-6 space-y-7">
        {/* Hero — active trip */}
        <div className="hero-panel relative h-72 rounded-3xl overflow-hidden group cursor-pointer" onClick={() => setScreen('itinerary')}>
          <img src="https://images.unsplash.com/photo-1513622790541-eaa84d356909?w=900&h=500&fit=crop&auto=format"
            alt="Hong Kong skyline at night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-ink/5" />
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-coral" />
          <div className="absolute top-5 left-5 flex items-center gap-2 text-white/80 text-[10px] font-mono uppercase tracking-[0.18em]">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            Live journey · HKG
          </div>
          <div className="absolute top-5 right-5">
            <span className="bg-coral text-white text-xs font-mono font-semibold px-3 py-1.5 rounded-md shadow">04 DAYS LEFT</span>
          </div>
          <div className="absolute bottom-0 left-0 p-6">
            <span className="text-xs font-mono text-gold uppercase tracking-[0.22em]">Active Trip / 001</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-1">Hong Kong, SAR</h2>
            <p className="text-white/70 text-sm mt-1">Oct 8–14 · Day 3 of 7 · HK$8,240 remaining</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-sm rounded-xl p-2 text-white hover:bg-white/30 transition-colors">
            <IcoArrow />
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: 'Plan Route', Icon: IcoMap, code: 'MTR 01', bg: 'bg-forest-dark', text: 'text-white', screen: 'itinerary' as Screen },
            { label: 'Ask Local AI', Icon: IcoSparkle, code: 'AI 02', bg: 'bg-coral', text: 'text-white', screen: 'assistant' as Screen },
            { label: 'Find Deals', Icon: IcoPeople, code: 'LOC 03', bg: 'bg-gold', text: 'text-ink', screen: 'community' as Screen },
          ].map(a => (
            <button key={a.label} onClick={() => setScreen(a.screen)}
              className={`${a.bg} ${a.text} rounded-2xl px-5 py-4 flex items-center gap-3 text-left hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all`}>
              <span className="w-9 h-9 border border-current/20 rounded-lg flex items-center justify-center"><a.Icon /></span>
              <span>
                <span className="block text-[9px] font-mono opacity-60 tracking-widest">{a.code}</span>
                <span className="block text-sm font-semibold">{a.label}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Fellow travelers */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-ink">Fellow Travelers Nearby</h3>
            <button className="text-xs font-mono text-forest hover:underline">See all</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-1">
            {stories.map(s => (
              <button key={s.name} className="flex flex-col items-center gap-1.5 shrink-0 group">
                <div className={`w-14 h-14 rounded-full border-2 overflow-hidden ${s.active ? 'border-coral' : 'border-border'} group-hover:border-forest transition-colors`}>
                  <img src={s.avatar} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <span className="text-xs text-muted w-14 text-center truncate">{s.name}</span>
                {s.active && <span className="w-1.5 h-1.5 rounded-full bg-coral -mt-1" />}
              </button>
            ))}
          </div>
        </div>

        {/* Trending nearby */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-ink flex items-center gap-1.5">
              <span className="text-coral"><IcoTrend /></span> Trending Nearby
            </h3>
            <button className="text-xs font-mono text-forest hover:underline">Explore map</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {trending.map(d => (
              <div key={d.name} className="bg-card rounded-2xl overflow-hidden border border-border hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
                <div className="h-36 bg-cream-dark overflow-hidden relative">
                  <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400" />
                  <div className="absolute top-2 left-2"><CrowdPill level={d.crowd} /></div>
                </div>
                <div className="p-3">
                  <p className="font-semibold text-sm text-ink">{d.name}</p>
                  <p className="text-xs text-muted mt-0.5">{d.tag}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="flex items-center gap-1 text-xs text-ink-soft"><IcoStar />{d.rating}</span>
                    <span className="flex items-center gap-1 text-xs text-muted font-mono"><IcoPin />{d.dist}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Itinerary Screen ─────────────────────────────────────────────────────────

function ItineraryScreen() {
  const [activeDay, setActiveDay] = useState(0)
  const day = itineraryDays[activeDay]
  const dayTotal = day.stops.reduce((s, stop) => {
    const n = parseInt(stop.cost.replace(/[^0-9]/g, '')) || 0
    return s + n
  }, 0)

  return (
    <div className="flex h-full">
      {/* Main timeline */}
      <div className="content-column flex-1 flex flex-col overflow-hidden">
        <header className="px-5 sm:px-8 pt-6 pb-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-mono text-muted uppercase tracking-widest">Smart Itinerary</p>
              <h2 className="font-display text-2xl font-bold text-ink">Hong Kong · 3-Day Plan</h2>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted font-mono">Budget</p>
              <p className="text-lg font-display font-bold text-forest">HK$18,000</p>
              <p className="text-xs text-muted">HK$9,760 spent</p>
            </div>
          </div>
          {/* Budget bar */}
          <div className="h-2 bg-cream-dark rounded-full overflow-hidden">
            <div className="h-full bg-forest rounded-full transition-all" style={{ width: '54%' }} />
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs font-mono text-forest">54% used</span>
            <span className="text-xs font-mono text-muted">HK$8,240 left</span>
          </div>
          {/* Day tabs */}
          <div className="flex gap-2 mt-4">
            {itineraryDays.map((d, i) => (
              <button key={d.day} onClick={() => setActiveDay(i)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeDay === i ? 'bg-forest text-white' : 'bg-cream-dark text-muted hover:text-ink'}`}>
                Day {d.day}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-display font-semibold text-lg text-ink">{day.label}</h3>
            <span className="text-xs font-mono text-muted bg-cream-dark px-3 py-1 rounded-full">Est. ¥{dayTotal.toLocaleString()}</span>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border" />

            <div className="space-y-5">
              {day.stops.map((stop, i) => (
                <div key={i} className="flex gap-4 group">
                  {/* Time dot */}
                  <div className="flex flex-col items-center shrink-0 w-14">
                    <div className={`w-4 h-4 rounded-full border-2 z-10 mt-1 ${stop.crowd === 'low' ? 'border-emerald-500 bg-emerald-50' : stop.crowd === 'medium' ? 'border-amber-500 bg-amber-50' : 'border-red-400 bg-red-50'}`} />
                    <span className="text-[10px] font-mono text-muted mt-1">{stop.time}</span>
                  </div>
                  {/* Card */}
                  <div className="flex-1 bg-card rounded-2xl border border-border p-4 hover:border-forest/40 hover:shadow-sm transition-all">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-semibold text-sm text-ink">{stop.name}</p>
                          {stop.verified && (
                            <span className="flex items-center gap-1 bg-forest/10 text-forest text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-full uppercase">
                              <IcoCheck /> Verified
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted mt-0.5">{stop.type}</p>
                      </div>
                      <CrowdPill level={stop.crowd} />
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-xs text-ink-soft font-mono"><IcoClock />{stop.duration}</span>
                      <span className="text-xs font-mono font-semibold text-forest">{stop.cost}</span>
                    </div>
                    {stop.note && (
                      <div className="mt-2.5 bg-gold/10 border border-gold/30 rounded-xl px-3 py-2">
                        <p className="text-xs text-ink-soft">✨ {stop.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI suggestions sidebar */}
      <aside className="context-panel border-l border-border bg-cream-dark/40 flex flex-col overflow-hidden shrink-0">
        <div className="px-5 pt-6 pb-4 border-b border-border">
          <p className="text-xs font-mono text-forest uppercase tracking-widest">AI Suggestions</p>
          <h3 className="font-display font-semibold text-ink mt-0.5">Alternatives for Day {activeDay + 1}</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {[
            { name: 'Sham Shui Po Market', why: 'Electronics & fabric district — authentic Kowloon, 80% fewer tourists than Mong Kok', crowd: 'low' as const, time: '12 min MTR' },
            { name: 'Lei Cheng Uk Han Tomb', why: 'Overlooked 2,000-year-old Han dynasty tomb — free entry, almost no queue', crowd: 'low' as const, time: '8 min walk' },
            { name: 'Yau Ma Tei Wholesale Fruit Market', why: 'Off-peak deal: local dai pai dong nearby open at 6am only', crowd: 'low' as const, time: '5 min taxi' },
          ].map(alt => (
            <div key={alt.name} className="bg-card rounded-2xl border border-border p-4 hover:border-forest/40 transition-colors cursor-pointer">
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <p className="font-semibold text-sm text-ink">{alt.name}</p>
                <CrowdPill level={alt.crowd} />
              </div>
              <p className="text-xs text-muted leading-relaxed">{alt.why}</p>
              <p className="text-xs font-mono text-forest mt-2">{alt.time}</p>
            </div>
          ))}

          <div className="bg-forest rounded-2xl p-4 text-white">
            <p className="text-xs font-mono text-forest-light uppercase tracking-widest mb-1">Offline Package</p>
            <p className="font-semibold text-sm mb-2">Download Ready</p>
            <p className="text-xs text-white/70 mb-3">Maps, emergency contacts & translated etiquette phrases loaded for offline use.</p>
            <button className="w-full bg-white/20 hover:bg-white/30 transition-colors rounded-xl py-1.5 text-xs font-semibold">
              Manage Downloads
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

// ─── Assistant Screen ─────────────────────────────────────────────────────────

function AssistantScreen() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialChat)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const quickQ = ["Best dim sum in Kowloon?", "Skip tourist traps near TST?", "Cheap MTR day pass tips?"]

  function send(text: string) {
    if (!text.trim()) return
    const userMsg: ChatMessage = { role: 'user', text: text.trim(), ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    setMessages(m => [...m, userMsg])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      const reply: ChatMessage = {
        role: 'ai',
        text: "Great question! Based on verified local data from our merchant network and community guides, I can confirm this is accurate. Let me pull the latest recommendations for you.",
        verified: true,
        sources: ['Kyoto Local Guide Network', 'Community Verified Data'],
        ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      }
      setMessages(m => [...m, reply])
      setIsTyping(false)
    }, 1400)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="px-5 sm:px-8 pt-6 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center text-white">
            <IcoSparkle />
          </div>
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-widest">Verified Local AI</p>
            <h2 className="font-display text-xl font-bold text-ink">Your Hong Kong Guide</h2>
          </div>
          <div className="ml-auto flex items-center gap-2 bg-forest/10 text-forest text-xs font-mono font-semibold px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-forest rounded-full animate-pulse" />
            Cross-checking local data
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-5">
        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'ai' && (
              <div className="w-8 h-8 bg-forest rounded-xl flex items-center justify-center text-white shrink-0 mt-0.5">
                <IcoSparkle />
              </div>
            )}
            <div className={`max-w-[85%] sm:max-w-[72%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-1`}>
              <div className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-forest text-white rounded-tr-sm' : 'bg-card border border-border text-ink rounded-tl-sm'}`}>
                {msg.text}
              </div>
              {msg.verified && msg.sources && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 w-full">
                  <p className="text-[10px] font-mono font-semibold text-emerald-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <IcoCheck /> Verified Sources
                  </p>
                  {msg.sources.map((s, si) => (
                    <p key={si} className="text-[11px] text-emerald-800 leading-relaxed">· {s}</p>
                  ))}
                </div>
              )}
              <span className="text-[10px] text-muted font-mono">{msg.ts}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
            <div className="w-8 h-8 bg-forest rounded-xl flex items-center justify-center text-white shrink-0">
              <IcoSparkle />
            </div>
            <div className="bg-card border border-border rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                {[0, 1, 2].map(i => <span key={i} className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Quick questions */}
      <div className="px-5 sm:px-8 pb-3 flex gap-2 overflow-x-auto">
        {quickQ.map(q => (
          <button key={q} onClick={() => send(q)}
            className="shrink-0 bg-cream-dark border border-border hover:border-forest text-ink-soft hover:text-forest text-xs font-medium px-3.5 py-2 rounded-full transition-colors">
            {q}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="px-5 sm:px-8 pb-6">
        <div className="flex gap-3 bg-card border border-border rounded-2xl p-2 focus-within:border-forest transition-colors">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && send(input)}
            placeholder="Ask anything about Hong Kong..."
            className="flex-1 bg-transparent text-sm text-ink placeholder-muted outline-none px-2 font-sans"
          />
          <button onClick={() => send(input)}
            className="w-9 h-9 bg-coral hover:bg-coral-light text-white rounded-xl flex items-center justify-center transition-colors shrink-0">
            <IcoSend />
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Community Screen ─────────────────────────────────────────────────────────

function CommunityScreen() {
  const [filter, setFilter] = useState<'all' | 'tourist' | 'merchant'>('all')
  const [posts, setPosts] = useState<CommunityPost[]>(initialPosts)

  const filtered = posts.filter(p => filter === 'all' || p.type === filter)

  function toggleLike(id: number) {
    setPosts(ps => ps.map(p => p.id === id ? { ...p, liked: !p.liked, likes: p.liked ? p.likes - 1 : p.likes + 1 } : p))
  }

  return (
    <div className="flex h-full">
      {/* Feed */}
      <div className="content-column flex-1 flex flex-col overflow-hidden">
        <header className="px-5 sm:px-8 pt-6 pb-4 border-b border-border">
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-0.5">Community & Business</p>
          <h2 className="font-display text-2xl font-bold text-ink">Hong Kong Network</h2>
          <div className="flex gap-2 mt-4">
            {(['all', 'tourist', 'merchant'] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all ${filter === f ? 'bg-forest text-white' : 'bg-cream-dark text-muted hover:text-ink'}`}>
                {f === 'all' ? 'All Posts' : f === 'tourist' ? 'Travelers' : 'Local Merchants'}
              </button>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-6 space-y-5">
          {filtered.map(post => (
            <article key={post.id} className={`bg-card rounded-3xl border overflow-hidden hover:shadow-sm transition-shadow ${post.type === 'merchant' ? 'border-gold/50' : 'border-border'}`}>
              {/* Merchant deal banner */}
              {post.type === 'merchant' && (
                <div className="bg-gold/15 border-b border-gold/30 px-5 py-2.5 flex items-center gap-2">
                  <span className="text-sm">🏷️</span>
                  <span className="text-xs font-mono font-semibold text-amber-700 uppercase tracking-wider">Verified Merchant · Off-Peak Deal</span>
                </div>
              )}

              <div className="p-5">
                {/* Author */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${post.type === 'merchant' ? 'border-gold' : 'border-border'}`}>
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-ink">{post.author}</p>
                      {post.badge && (
                        <span className="text-[9px] font-mono font-semibold bg-gold/20 text-amber-700 px-2 py-0.5 rounded-full uppercase tracking-wide">{post.badge}</span>
                      )}
                    </div>
                    <p className="text-xs text-muted flex items-center gap-1"><IcoPin />{post.location} · {post.time}</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-sm text-ink-soft leading-relaxed mb-3">{post.content}</p>

                {/* Image */}
                {post.image && (
                  <div className="h-52 rounded-2xl overflow-hidden bg-cream-dark mb-3">
                    <img src={post.image} alt="Post" className="w-full h-full object-cover" />
                  </div>
                )}

                {/* Deal card */}
                {post.deal && (
                  <div className="bg-gold/10 border border-gold/40 rounded-2xl p-4 mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold text-sm text-ink">{post.deal.discount}</p>
                      <p className="text-xs text-muted">{post.deal.valid}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs text-muted font-mono mb-0.5">Code</p>
                      <span className="font-mono font-bold text-sm text-forest bg-forest/10 px-2.5 py-1 rounded-lg">{post.deal.code}</span>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center gap-5 pt-1 border-t border-border/60">
                  <button onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 text-sm transition-colors ${post.liked ? 'text-coral' : 'text-muted hover:text-coral'}`}>
                    <IcoHeart filled={post.liked} />
                    <span className="font-mono text-xs">{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-muted hover:text-forest transition-colors">
                    <IcoBubble />
                    <span className="font-mono text-xs">{post.comments}</span>
                  </button>
                  <button className="ml-auto text-xs font-medium text-forest hover:underline">
                    {post.type === 'tourist' ? 'Reply' : 'Claim Deal'}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Right panel */}
      <aside className="context-panel border-l border-border bg-cream-dark/40 flex flex-col overflow-hidden shrink-0">
        <div className="px-5 pt-6 pb-4 border-b border-border">
          <p className="text-xs font-mono text-muted uppercase tracking-widest">Active Deals</p>
          <h3 className="font-display font-semibold text-ink mt-0.5">Off-Peak Incentives</h3>
        </div>
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {[
            { merchant: "Uncle Fong's Dai Pai Dong", deal: 'Wonton breakfast set — HK$45 before 8am', icon: '🍜', until: 'Mon–Wed, 6–8am' },
            { merchant: 'Horizon Harbour Cruises', deal: '25% off morning harbour cruise — calm water, no crowds', icon: '⛴️', until: 'Tues & Thurs, 9am' },
            { merchant: 'PMQ Heritage Workshops', deal: 'Free jade carving intro session on Wednesdays', icon: '🪨', until: 'Every Wed 3pm' },
          ].map(d => (
            <div key={d.merchant} className="bg-card rounded-2xl border border-border p-4 hover:border-gold/50 transition-colors cursor-pointer">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xl">{d.icon}</span>
                <p className="font-semibold text-sm text-ink">{d.merchant}</p>
              </div>
              <p className="text-xs text-muted leading-relaxed">{d.deal}</p>
              <p className="text-[10px] font-mono text-gold mt-2">{d.until}</p>
            </div>
          ))}

          <div className="bg-forest-dark rounded-2xl p-4 text-white">
            <p className="text-xs font-mono text-forest-light uppercase tracking-widest mb-1">Post a Deal</p>
            <p className="text-sm font-semibold mb-2">Are you a local merchant?</p>
            <p className="text-xs text-white/70 mb-3">Join 58 verified businesses reaching conscious travelers in Hong Kong.</p>
            <button className="w-full bg-coral hover:bg-coral-light transition-colors rounded-xl py-2 text-xs font-bold">
              Apply for Verification
            </button>
          </div>
        </div>
      </aside>
    </div>
  )
}

// ─── Impact Screen ────────────────────────────────────────────────────────────

function ImpactScreen() {
  const formatYen = (n: number) => `HK$${n.toLocaleString()}`

  return (
    <div className="min-h-full px-5 sm:px-8 py-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <p className="text-xs font-mono text-muted uppercase tracking-widest">Post-Trip Analysis</p>
          <h2 className="font-display text-3xl font-bold text-ink mt-0.5">Economic Impact Tracker</h2>
          <p className="text-sm text-muted mt-1">Hong Kong, SAR · Oct 8–14, 2024</p>
        </header>

        {/* Big stat row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Spent', value: formatYen(totalSpend), sub: 'across all categories', color: 'text-ink' },
            { label: 'Local Businesses', value: formatYen(localSpend), sub: `${localPct}% of total spend`, color: 'text-forest' },
            { label: 'Impact Score', value: '87 / 100', sub: 'Conscious Traveler', color: 'text-coral' },
          ].map(stat => (
            <div key={stat.label} className="bg-card border border-border rounded-2xl p-5">
              <p className="text-xs font-mono text-muted uppercase tracking-widest mb-2">{stat.label}</p>
              <p className={`font-display text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-muted mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Donut + breakdown */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <h3 className="font-display font-semibold text-lg text-ink">Spending Breakdown</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            {/* Donut */}
            <div className="shrink-0">
              <DonutChart pct={localPct} />
              <div className="flex gap-4 mt-3 justify-center">
                <span className="flex items-center gap-1.5 text-xs text-muted"><span className="w-2.5 h-2.5 rounded-full bg-forest inline-block" />Local</span>
                <span className="flex items-center gap-1.5 text-xs text-muted"><span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />Chain</span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex-1 space-y-4">
              {impactCategories.map(cat => {
                const localAmt = Math.round(cat.total * cat.local / 100)
                return (
                  <div key={cat.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-ink">{cat.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-muted">{formatYen(localAmt)} local</span>
                        <span className={`text-xs font-mono font-semibold ${cat.local >= 80 ? 'text-forest' : cat.local >= 50 ? 'text-amber-600' : 'text-red-500'}`}>{cat.local}%</span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-cream-dark rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all ${cat.local >= 80 ? 'bg-forest' : cat.local >= 50 ? 'bg-gold' : 'bg-red-400'}`}
                        style={{ width: `${cat.local}%` }} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="bg-card border border-border rounded-3xl p-6 mb-6">
          <h3 className="font-display font-semibold text-lg text-ink mb-4">Earned Badges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {rewards.map(r => (
              <div key={r.title} className={`rounded-2xl border p-4 text-center transition-all ${r.earned ? 'border-forest/40 bg-forest/5' : 'border-border bg-cream-dark/50 opacity-50'}`}>
                <div className={`text-3xl mb-2 ${!r.earned ? 'grayscale' : ''}`}>{r.icon}</div>
                <p className="font-semibold text-sm text-ink">{r.title}</p>
                <p className="text-xs text-muted mt-0.5">{r.desc}</p>
                {r.earned && (
                  <span className="inline-flex items-center gap-1 mt-2 text-[9px] font-mono font-semibold text-forest bg-forest/10 px-2 py-0.5 rounded-full uppercase">
                    <IcoCheck /> Earned
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Discount rewards */}
        <div className="bg-forest-dark rounded-3xl p-6 text-white">
          <p className="text-xs font-mono text-forest-light uppercase tracking-widest mb-1">Conscious Spending Rewards</p>
          <h3 className="font-display text-xl font-bold mb-4">Your Earned Discounts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { title: '15% off next booking', provider: 'Participating Ryokans', code: 'IMPACT15', expires: 'Valid 90 days' },
              { title: '¥500 market credit', provider: 'Nishiki Merchant Network', code: 'MKT500', expires: 'Valid 60 days' },
            ].map(d => (
              <div key={d.code} className="bg-white/10 hover:bg-white/15 transition-colors rounded-2xl p-4 cursor-pointer">
                <p className="font-semibold text-sm mb-0.5">{d.title}</p>
                <p className="text-xs text-white/60 mb-3">{d.provider}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-gold bg-gold/20 px-2.5 py-1 rounded-lg text-xs">{d.code}</span>
                  <span className="text-[10px] font-mono text-white/50">{d.expires}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/50 mt-4 text-center">Spend more locally on your next trip to unlock higher-tier rewards.</p>
        </div>
      </div>
    </div>
  )
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const navItems = [
  { id: 'home' as Screen, label: 'Discover', Icon: IcoHome },
  { id: 'itinerary' as Screen, label: 'Itinerary', Icon: IcoMap },
  { id: 'assistant' as Screen, label: 'AI Guide', Icon: IcoSparkle },
  { id: 'community' as Screen, label: 'Community', Icon: IcoPeople },
  { id: 'impact' as Screen, label: 'Impact', Icon: IcoLeaf },
]

function AuthScreen({ onAuthenticated }: { onAuthenticated: (name: string) => void }) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [accountType, setAccountType] = useState<'traveler' | 'business'>('traveler')
  const [name, setName] = useState('')

  return (
    <main className="min-h-full bg-cream relative overflow-hidden flex items-center justify-center px-5 py-10">
      <div className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(17, 23, 34, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 23, 34, 0.04) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="brand-stamp inline-flex w-16 h-16 bg-coral rounded-xl items-center justify-center mb-5">
            <span className="font-display font-black text-white text-3xl leading-none">W</span>
          </div>
          <h1 className="font-display text-4xl font-bold text-ink">Wanderlocal</h1>
        </div>

        <div className="bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-xl shadow-ink/5">
          <div className="flex bg-cream-dark rounded-xl p-1 mb-6">
            {(['signin', 'signup'] as const).map(currentMode => (
              <button key={currentMode} type="button" onClick={() => setMode(currentMode)}
                className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${mode === currentMode ? 'bg-white text-ink shadow-sm' : 'text-muted hover:text-ink'}`}>
                {currentMode === 'signin' ? 'Sign in' : 'Sign up'}
              </button>
            ))}
          </div>

          <div className="mb-6">
            <p className="block text-xs font-mono text-muted uppercase tracking-wider mb-2">I am joining as</p>
            <div className="grid grid-cols-2 gap-2">
              {(['traveler', 'business'] as const).map(currentAccountType => (
                <button key={currentAccountType} type="button" onClick={() => setAccountType(currentAccountType)}
                  className={`rounded-xl border px-3 py-3 text-sm font-semibold transition-colors ${accountType === currentAccountType ? 'border-forest bg-forest/10 text-forest' : 'border-border bg-cream text-muted hover:border-forest/50 hover:text-ink'}`}>
                  {currentAccountType === 'traveler' ? 'Traveler' : 'Business'}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={event => { event.preventDefault(); onAuthenticated(name.trim()) }} className="space-y-4">
            <label className="block">
              <span className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Name</span>
              <input required type="text" value={name} onChange={event => setName(event.target.value)} placeholder="Your name"
                className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-forest transition-colors" />
            </label>
            <label className="block">
              <span className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Email</span>
              <input required type="email" placeholder="you@example.com"
                className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-forest transition-colors" />
            </label>
            <label className="block">
              <span className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Password</span>
              <input required type="password" minLength={6} placeholder="At least 6 characters"
                className="w-full rounded-xl border border-border bg-cream px-4 py-3 text-sm text-ink outline-none focus:border-forest transition-colors" />
            </label>
            <button type="submit" className="w-full bg-forest-dark hover:bg-forest text-white rounded-xl py-3.5 text-sm font-semibold transition-colors">
              {mode === 'signin' ? 'Sign in to Wanderlocal' : 'Create your account'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState('')

  if (!isAuthenticated) {
    return <AuthScreen onAuthenticated={name => { setUserName(name); setIsAuthenticated(true) }} />
  }

  return (
    <div className="urban-shell flex h-full bg-cream overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-[88px] bg-forest-dark flex flex-col items-center py-5 shrink-0 border-r border-white/10">
        {/* Logo */}
        <div className="brand-stamp w-11 h-11 bg-coral rounded-lg flex items-center justify-center mb-9">
          <span className="font-display font-black text-white text-xl leading-none">W</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 flex flex-col items-center gap-1">
          {navItems.map(({ id, label, Icon }) => (
            <button key={id} onClick={() => setScreen(id)}
              title={label}
              className={`relative w-14 h-13 rounded-xl flex flex-col items-center justify-center gap-1 transition-all group
                ${screen === id ? 'bg-white/10 text-white shadow-md' : 'text-white/40 hover:text-white/80 hover:bg-white/5'}`}>
              <Icon />
              <span className="text-[8px] font-mono font-medium leading-none">{label}</span>
              {screen === id && <span className="nav-active route-line absolute -right-[17px] top-1/2 -translate-y-1/2 w-1.5 h-7 bg-coral text-coral" />}
            </button>
          ))}
        </nav>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold/60 cursor-pointer hover:border-gold transition-colors">
          <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format" alt="Maya" className="w-full h-full object-cover" />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        {screen === 'home' && <HomeScreen setScreen={setScreen} userName={userName} />}
        {screen === 'itinerary' && <ItineraryScreen />}
        {screen === 'assistant' && <AssistantScreen />}
        {screen === 'community' && <CommunityScreen />}
        {screen === 'impact' && <ImpactScreen />}
      </main>
    </div>
  )
}
