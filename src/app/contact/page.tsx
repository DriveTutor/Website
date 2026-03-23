import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Contact & Support — Drive Tutor' }

const contacts = [
  { ico: '📧', title: 'General Enquiries', desc: 'For general questions about Drive Tutor, partnerships, or media enquiries.', email: 'hello@drivetutor.ca' },
  { ico: '🛠️', title: 'Technical Support', desc: 'Having issues with the app? Our support team is ready to help learners and instructors.', email: 'support@drivetutor.ca' },
  { ico: '🔐', title: 'Privacy & Data Requests', desc: 'For data access requests, account deletion, or privacy-related concerns under PIPEDA.', email: 'privacy@drivetutor.ca' },
  { ico: '🦺', title: 'Safety & Incidents', desc: 'To report a safety incident, concern, or community guideline violation.', email: 'safety@drivetutor.ca' },
]

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="policy-page">
        <div className="policy-inner" style={{ maxWidth: 900 }}>
          <div className="policy-breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span style={{ color: 'var(--fg)', fontWeight: 600 }}>Contact & Support</span>
          </div>
          <div className="policy-header">
            <div className="policy-badge">💬 Support</div>
            <h1 className="policy-title">Contact & Support</h1>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.7, marginTop: 12 }}>We&apos;re here to help. Reach out and we&apos;ll respond as quickly as possible.</p>
          </div>
          <div className="contact-grid">
            {contacts.map(c => (
              <div key={c.email} className="contact-card">
                <div className="contact-card-icon">{c.ico}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <a href={`mailto:${c.email}`}>{c.email}</a>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, background: 'var(--secondary)', borderRadius: 'var(--r-xl)', padding: 'clamp(28px,5vw,40px)', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🎓</div>
            <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Instructor Applications</h3>
            <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7, maxWidth: 400, margin: '0 auto 20px' }}>Interested in joining Drive Tutor as a verified instructor? Download the app and begin your application.</p>
            <Link href="/instructor-verification" className="policy-nav-btn primary">View Verification Requirements</Link>
          </div>
          <div className="policy-nav-row">
            <span />
            <Link href="/" className="policy-nav-btn primary">Back to Home →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
