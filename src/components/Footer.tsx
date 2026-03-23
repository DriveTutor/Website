'use client'
import Link from 'next/link'

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Data Consent Policy', href: '/data-consent' },
  { label: 'Refund Policy', href: '/refund-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
  { label: 'Account Deletion', href: '/account-deletion' },
]
const moreLinks = [
  { label: 'Community Guidelines', href: '/community-guidelines' },
  { label: 'Instructor Verification', href: '/instructor-verification' },
  { label: 'Safety Policy', href: '/safety-policy' },
]
const supportLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Delete My Account', href: '/account-deletion' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div className="logo-icon">DT</div>
              <span className="footer-logo-text">Drive<span>Tutor</span></span>
            </div>
            <p className="footer-desc">Connecting learner drivers with verified driving instructors across Ontario, Canada. Trusted by 1000+ learners.</p>
            <div className="footer-emails">
              <a href="mailto:hello@drivetutor.ca">hello@drivetutor.ca</a>
              <a href="mailto:support@drivetutor.ca">support@drivetutor.ca</a>
            </div>
            <div className="socials">
              {['ig','𝕏','fb','in'].map(s => <span key={s} className="social-btn">{s}</span>)}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Legal</div>
            <ul className="footer-links">
              {legalLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Policies</div>
            <ul className="footer-links">
              {moreLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
            <div className="footer-col-title" style={{marginTop:24}}>Support</div>
            <ul className="footer-links">
              {supportLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Get the App</div>
            <a href="#" className="footer-store-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div><div style={{fontSize:9,opacity:.5,lineHeight:1,marginBottom:2}}>Coming Soon</div><div>App Store</div></div>
            </a>
            <a href="#" className="footer-store-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.26.14.57.15.85.03L14.88 12 3.03.21C2.75.09 2.44.1 2.18.24 1.67.52 1.33 1.06 1.33 1.67v20.66c0 .61.34 1.15.85 1.43z"/><path d="M18.82 9.67L16.08 8.1 12.97 12l3.11 3.9 2.74-1.57c.8-.46 1.27-1.29 1.27-2.23s-.47-1.97-1.27-2.43z"/></svg>
              <div><div style={{fontSize:9,opacity:.5,lineHeight:1,marginBottom:2}}>Coming Soon</div><div>Google Play</div></div>
            </a>
            <div className="footer-col-title" style={{marginTop:24}}>Ontario, Canada 🍁</div>
            <p style={{color:'var(--surface-dark-dim)',fontSize:12,lineHeight:1.6}}>Serving learner drivers and instructors across Ontario.</p>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2025 Drive Tutor Inc. All rights reserved. · Ontario, Canada</p>
          <p>Built with ❤️ for Ontario drivers</p>
        </div>
      </div>
    </footer>
  )
}
