'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'

const features = [
  { ico: '📅', title: 'Easy Booking', desc: 'Browse instructor availability and book lessons in minutes. No calls, no waiting.' },
  { ico: '🛡️', title: 'Verified Instructors', desc: 'Every instructor is verified before they can accept bookings. Safety first, always.' },
  { ico: '📱', title: 'App-Based Access', desc: 'Manage everything from your phone. Lessons, payments, messages — all in one place.' },
  { ico: '🗓️', title: 'Lesson Management', desc: 'Upcoming lessons, history, and rescheduling — all tracked automatically.' },
  { ico: '💬', title: 'Direct Messaging', desc: 'Stay in touch with your instructor through in-app messaging.' },
  { ico: '🔒', title: 'Secure & Private', desc: 'Your data is protected. Payments and personal info are handled securely.' },
]
const screenshots = [
  { bg: 'linear-gradient(145deg,#EFF6FF,#DBEAFE)', ico: '🔍', lbl: 'Instructor Search' },
  { bg: 'linear-gradient(145deg,#F0FDF4,#DCFCE7)', ico: '📅', lbl: 'Booking Flow' },
  { bg: 'linear-gradient(145deg,#FFF7ED,#FED7AA)', ico: '👤', lbl: 'Instructor Profile' },
  { bg: 'linear-gradient(145deg,#F5F3FF,#EDE9FE)', ico: '📋', lbl: 'Upcoming Lessons' },
  { bg: 'linear-gradient(145deg,#ECFDF5,#A7F3D0)', ico: '📊', lbl: 'Dashboard' },
  { bg: 'linear-gradient(145deg,#FFF1F2,#FFE4E6)', ico: '📤', lbl: 'Doc Upload' },
]
const legalCards = [
  { ico: '🔐', title: 'Privacy Policy', desc: 'How we collect, use, and protect your personal data.', href: '/privacy-policy' },
  { ico: '📜', title: 'Terms & Conditions', desc: 'The rules and guidelines for using Drive Tutor.', href: '/terms-and-conditions' },
  { ico: '✅', title: 'Data Consent Policy', desc: 'Your rights around data consent and processing.', href: '/data-consent-policy' },
  { ico: '💳', title: 'Refund Policy', desc: 'Our cancellation and refund guidelines.', href: '/refund-policy' },
  { ico: '🍪', title: 'Cookie Policy', desc: 'How we use cookies and tracking technologies.', href: '/cookie-policy' },
  { ico: '🗑️', title: 'Account Deletion', desc: 'How to request deletion of your account and data.', href: '/account-deletion' },
  { ico: '🤝', title: 'Community Guidelines', desc: 'Standards for respectful use of the platform.', href: '/community-guidelines' },
  { ico: '🛡️', title: 'Instructor Verification', desc: 'How we vet and verify all instructors.', href: '/instructor-verification' },
  { ico: '🦺', title: 'Safety Policy', desc: 'Our commitment to the safety of all users.', href: '/safety-policy' },
  { ico: '💬', title: 'Contact & Support', desc: 'Get in touch with the Drive Tutor team.', href: '/contact' },
]

export default function Home() {
  const sectionsRef = useRef<string[]>(['#hero','#about','#screenshots','#features','#download','#legal'])

  useEffect(() => {
    const btns = document.querySelectorAll('.pn-btn')
    const handler = () => {
      let cur = 0
      sectionsRef.current.forEach((id, i) => {
        const el = document.querySelector(id)
        if (el && window.scrollY >= (el as HTMLElement).offsetTop - 180) cur = i
      })
      btns.forEach((b, i) => b.classList.toggle('active', i === cur))
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id: string, btn: HTMLButtonElement) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    document.querySelectorAll('.pn-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: 'clamp(88px,10vw,120px) clamp(16px,4vw,32px) 80px', position: 'relative', overflow: 'hidden', background: 'var(--bg)' }}>
        <div className="hero-bg">
          <div className="hero-blob hero-blob1" />
          <div className="hero-blob hero-blob2" />
          <div className="hero-grid" />
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-pill">
              <div className="hero-pill-dot" />
              <span>Verified Ontario Driving Instructor Platform</span>
            </div>
            <h1 className="hero-h1">Spend less time scheduling.<br /><span style={{ color: 'var(--primary)' }}>More time teaching.</span></h1>
            <p className="hero-sub">The all-in-one platform for Ontario driving instructors to manage lessons, schedules, and learners without the back-and-forth calls and manual tracking.</p>
            <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 600, marginBottom: '32px', letterSpacing: '0.01em' }}>Built for verified Ontario instructors. Launching soon.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              <a
                href="https://forms.gle/KfJgBKYz3DDKvSNE9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', background: '#054ADA', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '1.5px solid #054ADA', transition: 'all 0.25s', whiteSpace: 'nowrap' }}
              >
                Join Instructor Waitlist
              </a>
              <a
                href="https://forms.gle/KfJgBKYz3DDKvSNE9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 20px', background: 'transparent', color: '#054ADA', borderRadius: '10px', fontWeight: 600, fontSize: '14px', textDecoration: 'none', border: '1.5px solid #E5E7EB', transition: 'all 0.25s', whiteSpace: 'nowrap' }}
              >
                Are you a learner? Get early access →
              </a>
            </div>
            <div className="trust-list">
              {['Save hours on scheduling every week','Manage all learners in one place','Stay organized without paperwork'].map(t => (
                <div key={t} className="trust-item"><div className="trust-check">✓</div>{t}</div>
              ))}
            </div>
          </div>
          <div className="phone-wrap">
            <div className="phone-glow" />
            <div className="phone-accent-dot" />
            <div className="phone-accent-dot2" />
            <div className="phone">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="ps-topbar"><span className="ps-brand">DriveTutor</span><div className="ps-avatar">J</div></div>
                <div className="ps-greeting">Good morning, James 👋</div>
                <div className="ps-title">Today&apos;s Schedule</div>
                {[
                  { bg: 'linear-gradient(135deg,#054ADA,#0340B8)', name: 'Emma R.', meta: '9:00 AM · G2 Prep', badge: 'Confirmed', bc: 'badge-blue' },
                  { bg: 'linear-gradient(135deg,#7C3AED,#5B21B6)', name: 'Liam T.', meta: '11:30 AM · G1 Beginner', badge: 'Confirmed', bc: 'badge-blue' },
                  { bg: 'linear-gradient(135deg,#16A34A,#15803D)', name: 'Aisha K.', meta: '2:00 PM · Highway', badge: 'Confirmed', bc: 'badge-blue' },
                ].map(i => (
                  <div key={i.name} className="instr-card">
                    <div className="instr-av" style={{ background: i.bg }} />
                    <div style={{ flex: 1 }}><div className="instr-name">{i.name}</div><div className="instr-meta">{i.meta}</div></div>
                    <div className={`badge ${i.bc}`}>{i.badge}</div>
                  </div>
                ))}
                <div className="ps-cta">View Lesson Notes →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--secondary)' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><span>How It Works</span></div>
            <h2>How Drive Tutor Works</h2>
            <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 10, maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>Simple steps to manage your lessons without the hassle</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 48 }}>
            {[
              { step: '1', ico: '🎯', title: 'Get matched with learners', desc: 'Learners request lessons based on your location and availability.' },
              { step: '2', ico: '📅', title: 'Accept and schedule', desc: 'Approve learners and schedule lessons using your built-in planner.' },
              { step: '3', ico: '📋', title: 'Manage everything in one place', desc: 'Track lesson notes, progress, and schedules without manual work.' },
              { step: '4', ico: '📊', title: 'Stay organized and in control', desc: 'View your daily, weekly, and monthly schedule at a glance.' },
            ].map(s => (
              <div key={s.step} className="feat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#054ADA', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{s.step}</div>
                  <div className="feat-icon" style={{ margin: 0 }}>{s.ico}</div>
                </div>
                <div className="feat-title">{s.title}</div>
                <div className="feat-desc">{s.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a
              href="https://forms.gle/KfJgBKYz3DDKvSNE9"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 32px', background: '#054ADA', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', border: '1.5px solid #054ADA', transition: 'all 0.25s' }}
            >
              Join Instructor Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--bg)' }}>
        <div className="about-inner">
          <div>
            <div className="section-tag"><span>About Drive Tutor</span></div>
            <h2>Ontario&apos;s driving lesson platform</h2>
            <div className="about-text">
              <p>Drive Tutor is a mobile-first platform that makes it effortless for driving learners to find, book, and learn from professional instructors across Ontario.</p>
              <p>Whether you&apos;re a new driver working toward your G1, or a seasoned instructor looking to manage your bookings more efficiently — Drive Tutor brings both sides together in one trusted app.</p>
              <p>We are proudly based in Ontario and designed specifically for the Ontario driving licence process — from G1 to G2 to G.</p>
            </div>
          </div>
          <div className="about-cards">
            {[
              { ico: '🎯', title: 'For Learners', desc: 'Browse verified instructors, check availability, book in minutes. Track your journey from G1 to G all in one place.' },
              { ico: '🏫', title: 'For Instructors', desc: 'Manage your schedule, student roster, and incoming bookings — without the overhead of admin work.' },
              { ico: '✅', title: 'Verified & Trusted', desc: 'All instructors undergo background checks and credential verification before they can accept bookings.' },
            ].map(c => (
              <div key={c.title} className="about-card">
                <div className="about-icon">{c.ico}</div>
                <div><div className="about-card-title">{c.title}</div><div className="about-card-desc">{c.desc}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section id="screenshots" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--secondary)' }}>
        <div className="screenshots-inner">
          <div className="screenshots-head">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><span>App Screenshots</span></div>
            <h2>See the app in action</h2>
            <p>Clean, intuitive screens built for learners and instructors alike.</p>
          </div>
          <div className="screens-row">
            {screenshots.map(s => (
              <div key={s.lbl} className="screen-item">
                <div className="screen-frame" style={{ background: s.bg }}>
                  <div className="screen-notch" />
                  <div className="screen-emoji">{s.ico}</div>
                  <div className="screen-label-top">{s.lbl}</div>
                </div>
                <div className="screen-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: 'var(--border)', fontSize: 12, marginTop: 20, fontStyle: 'italic' }}>Placeholder frames — replace with real app screenshots</p>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--bg)' }}>
        <div className="features-inner">
          <div className="features-head">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><span>Features</span></div>
            <h2>Everything you need, nothing you don&apos;t</h2>
            <p>Built for learners and instructors alike — simple, fast, always available.</p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="feat-card">
                <div className="feat-icon">{f.ico}</div>
                <div className="feat-title">{f.title}</div>
                <div className="feat-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--secondary)' }}>
        <div className="download-inner">
          <div className="dl-card">
            <div className="dl-card-glow" />
            <div className="dl-card-accent" />
            <div className="dl-tag"><span>Get the App</span></div>
            <h2>Start your driving journey today</h2>
            <p>Download Drive Tutor on iOS or Android and book your first lesson in minutes.</p>
            <div className="dl-btns">
              <a href="#" className="dl-btn dl-btn-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div><div className="store-label-sm">Coming Soon</div><div>App Store</div></div>
              </a>
              <a href="#" className="dl-btn dl-btn-border">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.26.14.57.15.85.03L14.88 12 3.03.21C2.75.09 2.44.1 2.18.24 1.67.52 1.33 1.06 1.33 1.67v20.66c0 .61.34 1.15.85 1.43z"/><path d="M18.82 9.67L16.08 8.1 12.97 12l3.11 3.9 2.74-1.57c.8-.46 1.27-1.29 1.27-2.23s-.47-1.97-1.27-2.43z"/></svg>
                <div><div className="store-label-sm">Coming Soon</div><div>Google Play</div></div>
              </a>
            </div>
            <p className="dl-note">Free to download · iOS &amp; Android · Ontario, Canada</p>
          </div>
        </div>
      </section>

      {/* LEGAL */}
      <section id="legal" style={{ padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,32px)', background: 'var(--bg)' }}>
        <div className="legal-inner">
          <div className="legal-head">
            <div className="section-tag" style={{ margin: '0 auto 16px' }}><span>Legal & Compliance</span></div>
            <h2>Transparency &amp; Trust</h2>
            <p>All our policies are public, accessible, and written in plain language.</p>
          </div>
          <div className="legal-grid">
            {legalCards.map(c => (
              <Link key={c.href} href={c.href} className="legal-card">
                <div className="legal-icon-box">{c.ico}</div>
                <div style={{ flex: 1 }}>
                  <div className="legal-card-title">{c.title}</div>
                  <div className="legal-card-desc">{c.desc}</div>
                </div>
                <span className="legal-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
