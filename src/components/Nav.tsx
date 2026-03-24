'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const policies = [
  { label: '🔐 Privacy Policy', href: '/privacy-policy' },
  { label: '📜 Terms & Conditions', href: '/terms-and-conditions' },
  { label: '✅ Data Consent Policy', href: '/data-consent-policy' },
  { label: '💳 Refund Policy', href: '/refund-policy' },
  { label: '🍪 Cookie Policy', href: '/cookie-policy' },
  { label: '🤝 Community Guidelines', href: '/community-guidelines' },
  { label: '🛡️ Instructor Verification', href: '/instructor-verification' },
  { label: '🦺 Safety Policy', href: '/safety-policy' },
  { label: '🗑️ Account Deletion', href: '/account-deletion' },
]

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [dark, setDark] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    setDark(isDark)
    try { localStorage.setItem('dt-theme', isDark ? 'dark' : 'light') } catch {}
  }

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <div className="accent-bar" />
      <nav>
        <Link href="/" className="nav-logo" onClick={closeMobile}>
          <img src="/logo.jpeg" alt="DriveTutor" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
<span style={{ fontWeight: 800, fontSize: 17, color: '#ffffff', letterSpacing: -0.5, fontFamily: 'Inter, sans-serif' }}>DriveTutor</span>
        </Link>

        <div className="nav-links">
          {isHome ? (
            <>
              <button className="nav-link" onClick={() => scrollTo('#hero')}>Home</button>
              <button className="nav-link" onClick={() => scrollTo('#about')}>About</button>
              <button className="nav-link" onClick={() => scrollTo('#screenshots')}>App</button>
              <button className="nav-link" onClick={() => scrollTo('#features')}>Features</button>
              <button className="nav-link" onClick={() => scrollTo('#download')}>Download</button>
              <button className="nav-link" onClick={() => scrollTo('#legal')}>Legal</button>
            </>
          ) : (
            <Link href="/" className="nav-link">← Home</Link>
          )}

          <div className="nav-dropdown">
            <button className="nav-link">Policies ▾</button>
            <div className="nav-dropdown-menu">
              {policies.map(p => (
                <Link key={p.href} href={p.href} className="nav-dropdown-item">{p.label}</Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={`nav-link${pathname === '/contact' ? ' active' : ''}`}>Contact</Link>
        </div>

        <div className="nav-spacer" />

        <a href="https://forms.gle/KfJgBKYz3DDKvSNE9" target="_blank" rel="noopener noreferrer" className="nav-store-btn nav-btn-primary">
          Join Waitlist
        </a>

        <button className="theme-toggle" onClick={toggleTheme} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
          {dark ? '☀️' : '🌙'}
        </button>

        <button className="hamburger" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {isHome ? (
          <>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#hero'); closeMobile() }}>🏠 Home</button>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#about'); closeMobile() }}>ℹ️ About</button>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#screenshots'); closeMobile() }}>📱 App</button>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#features'); closeMobile() }}>⭐ Features</button>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#download'); closeMobile() }}>⬇️ Download</button>
            <button className="mobile-nav-link" onClick={() => { scrollTo('#legal'); closeMobile() }}>⚖️ Legal</button>
          </>
        ) : (
          <Link href="/" className="mobile-nav-link" onClick={closeMobile}>🏠 Home</Link>
        )}
        <div className="mobile-divider" />
        {policies.map(p => (
          <Link key={p.href} href={p.href} className="mobile-nav-link" onClick={closeMobile}>{p.label}</Link>
        ))}
        <div className="mobile-divider" />
        <Link href="/contact" className="mobile-nav-link" onClick={closeMobile}>💬 Contact</Link>
        <div className="mobile-divider" />
        <a href="https://forms.gle/KfJgBKYz3DDKvSNE9" target="_blank" rel="noopener noreferrer" className="mobile-nav-link"
          style={{ color: 'var(--primary)', fontWeight: 700 }}>
          Join Waitlist
        </a>
      </div>
    </>
  )
}