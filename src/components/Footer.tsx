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
            <p className="footer-desc">Drive Tutor is a mobile-first platform that connects people learning to drive with licensed instructors across Ontario. Built specifically for Ontario, Drive Tutor is designed around the G1 → G2 → G licensing journey — helping learners stay organized and instructors stay in control.</p>
            <div className="footer-emails">
              <a href="mailto:info@drivetutor.ca">info@drivetutor.ca</a>
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
            {[
              { src: '/store-badges/appstore.png', alt: 'App Store' },
              { src: '/store-badges/playstore.png', alt: 'Google Play' },
            ].map(badge => (
              <div key={badge.alt} className="footer-store-btn" style={{cursor:'default', marginBottom: 8}}>
                <div style={{width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                  <img src={badge.src} alt={badge.alt} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain',display:'block'}} />
                </div>
                <div>
                  <div style={{fontSize:9,opacity:.5,lineHeight:1,marginBottom:2}}>Coming Soon</div>
                  <div>{badge.alt}</div>
                </div>
              </div>
            ))}
            <div className="footer-col-title" style={{marginTop:24}}>Ontario, Canada</div>
            <p style={{color:'var(--surface-dark-dim)',fontSize:12,lineHeight:1.6}}>Built for learners and instructors across Ontario.</p>
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
