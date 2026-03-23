'use client'
import { useState } from 'react'
import Link from 'next/link'

// ── MOCK DATA ──
const instructor = {
  name: 'James Kowalski',
  email: 'james.k@drivetutor.ca',
  phone: '+1 (647) 555-0192',
  licenceNo: 'MTO-482910',
  licenceExpiry: 'Dec 31, 2026',
  experience: '8 years',
  rating: 4.8,
  totalLessons: 190,
  avatar: 'JK',
  bio: 'Experienced driving instructor specialising in nervous beginners and G2/G test prep across the Greater Toronto Area.',
  car: {
    make: 'Toyota',
    model: 'Corolla',
    year: '2022',
    color: 'Silver',
    plate: 'ABCD 123',
    transmission: 'Automatic',
    dualControl: true,
  },
  address: '142 Maple Ave, Toronto, ON M4B 1B3',
  availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  plan: 'Pro',
  memberSince: 'March 2023',
}

const payments = [
  { id: 'INV-2025-031', date: 'Mar 1, 2025', amount: 49.99, status: 'paid', plan: 'Pro Monthly' },
  { id: 'INV-2025-029', date: 'Feb 1, 2025', amount: 49.99, status: 'paid', plan: 'Pro Monthly' },
  { id: 'INV-2025-028', date: 'Jan 1, 2025', amount: 49.99, status: 'paid', plan: 'Pro Monthly' },
  { id: 'INV-2025-027', date: 'Dec 1, 2024', amount: 49.99, status: 'paid', plan: 'Pro Monthly' },
]

const duePayment = { id: 'INV-2025-032', date: 'Apr 1, 2025', amount: 49.99, plan: 'Pro Monthly' }

const plans = [
  { name: 'Basic', price: 19.99, features: ['Up to 10 active bookings', 'Basic profile listing', 'Email support'], current: false },
  { name: 'Pro', price: 49.99, features: ['Unlimited bookings', 'Featured profile listing', 'Priority support', 'Analytics dashboard', 'Student messaging'], current: true },
  { name: 'Premium', price: 89.99, features: ['Everything in Pro', 'Top search placement', 'Dedicated account manager', 'Custom profile badge', 'Advanced analytics'], current: false },
]

type Tab = 'profile' | 'payments' | 'reports'

export default function InstructorDashboard() {
  const [tab, setTab] = useState<Tab>('profile')
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false)
  const [editing, setEditing] = useState(false)
  const [reportType, setReportType] = useState<'complaint' | 'review' | 'report'>('complaint')
  const [reportSubmitted, setReportSubmitted] = useState(false)
  const [reportText, setReportText] = useState('')
  const [reportSubject, setReportSubject] = useState('')
  const [showUpgrade, setShowUpgrade] = useState(false)
  const [activePlan, setActivePlan] = useState('Pro')

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: 'profile', label: 'Profile', icon: '👤' },
    { key: 'payments', label: 'Payments', icon: '💳' },
    { key: 'reports', label: 'Reports & Reviews', icon: '📋' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', fontFamily: 'Inter, sans-serif' }}>

      {/* ── TOP NAV ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'var(--nav-bg)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)', height: 64, display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
        <img src="/logo.jpeg" alt="DriveTutor" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
        <span style={{ fontWeight: 800, fontSize: 17, color: '#ffffff', letterSpacing: -0.5, fontFamily: 'Inter, sans-serif' }}>DriveTutor</span>
        </Link>

        {/* Portal label */}
        <div style={{ padding: '4px 12px', background: 'var(--primary-light)', border: '1px solid rgba(5,74,218,0.2)', borderRadius: 999, fontSize: 11, fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Instructor Portal
        </div>

        <div style={{ flex: 1 }} />

        {/* Avatar + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 13, color: '#fff' }}>
            {instructor.avatar}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--nav-text)', lineHeight: 1.2 }}>{instructor.name}</span>
            <span style={{ fontSize: 11, color: 'var(--nav-text-muted)' }}>{instructor.plan} Plan</span>
          </div>
        </div>

        {/* Logout */}
        <button onClick={() => setShowLogoutConfirm(true)}
          style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '8px 14px', border: '1.5px solid rgba(255,255,255,0.3))', borderRadius: 10, background: 'transparent', color: '#ffffff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
          onMouseOver={e => { e.currentTarget.style.borderColor = '#DC2626'; e.currentTarget.style.color = '#DC2626' }}
          onMouseOut={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)' }}>
          🚪 Logout
        </button>
      </div>

      {/* ── LOGOUT CONFIRM MODAL ── */}
      {showLogoutConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ background: 'var(--card)', borderRadius: 20, padding: 36, maxWidth: 360, width: '100%', textAlign: 'center', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>👋</div>
            <h3 style={{ fontSize: 18, fontWeight: 800, color: 'var(--fg)', marginBottom: 8 }}>Log out?</h3>
            <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>You'll be returned to the home page. Your session will be ended.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setShowLogoutConfirm(false)}
                style={{ flex: 1, padding: '12px', border: '1.5px solid var(--border)', borderRadius: 10, background: 'transparent', color: 'var(--fg)', fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                Cancel
              </button>
              <Link href="/" style={{ flex: 1, padding: '12px', background: '#DC2626', border: 'none', borderRadius: 10, color: '#fff', fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Yes, Log Out
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── UPGRADE MODAL ── */}
      {showUpgrade && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, overflowY: 'auto' }}>
          <div style={{ background: 'var(--card)', borderRadius: 24, padding: 36, maxWidth: 720, width: '100%', border: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--fg)' }}>Choose Your Plan</h3>
              <button onClick={() => setShowUpgrade(false)} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer', color: 'var(--muted)', padding: 4 }}>✕</button>
            </div>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24 }}>Click any plan to select it, then confirm your choice.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginBottom: 24 }}>
              {plans.map(p => {
                const isActive = activePlan === p.name
                return (
                  <div key={p.name}
                    onClick={() => setActivePlan(p.name)}
                    style={{ border: `2px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 16, padding: 24, background: isActive ? 'var(--primary-light)' : 'var(--bg)', position: 'relative', cursor: 'pointer', transition: 'all 0.2s' }}>
                    {isActive && (
                      <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--primary)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 12px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                        SELECTED
                      </div>
                    )}
                    <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)', marginBottom: 16 }}>
                      ${p.price}<span style={{ fontSize: 13, fontWeight: 500, color: 'var(--muted)' }}>/mo</span>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 0 }}>
                      {p.features.map(f => (
                        <li key={f} style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', gap: 8 }}>
                          <span style={{ color: 'var(--success)', flexShrink: 0 }}>✓</span>{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            {/* Confirm button */}
            <button
              onClick={() => setShowUpgrade(false)}
              style={{ width: '100%', padding: '14px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
              onMouseOver={e => (e.currentTarget.style.background = '#0340B8')}
              onMouseOut={e => (e.currentTarget.style.background = 'var(--primary)')}>
              Confirm — Switch to {activePlan} Plan (${plans.find(p => p.name === activePlan)?.price}/mo)
            </button>
          </div>
        </div>
      )}

      {/* ── MAIN CONTENT ── */}
      <div style={{ paddingTop: 64 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(24px, 4vw, 40px) clamp(16px, 4vw, 24px)' }}>

          {/* Welcome banner */}
          <div style={{ background: 'var(--surface-dark)', borderRadius: 20, padding: 'clamp(20px, 4vw, 32px)', marginBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 13, color: 'var(--surface-dark-muted)', marginBottom: 4 }}>Welcome back 👋</div>
              <div style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 900, color: 'var(--surface-dark-text)', letterSpacing: -0.5 }}>{instructor.name}</div>
              <div style={{ fontSize: 13, color: 'var(--surface-dark-muted)', marginTop: 4 }}>⭐ {instructor.rating} · {instructor.totalLessons} lessons · Member since {instructor.memberSince}</div>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[['190', 'Total Lessons'],['Pro', 'Current Plan']].map(([v, l]) => (
                <div key={l} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 20px' }}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: 'var(--accent)' }}>{v}</div>
                  <div style={{ fontSize: 11, color: 'var(--surface-dark-muted)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, background: 'var(--secondary)', borderRadius: 14, padding: 4, marginBottom: 28 }}>
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 'clamp(10px, 2vw, 13px)', borderRadius: 10, border: 'none', fontWeight: 700, fontSize: 'clamp(12px, 2vw, 14px)', cursor: 'pointer', fontFamily: 'inherit', background: tab === t.key ? 'var(--card)' : 'transparent', color: tab === t.key ? 'var(--primary)' : 'var(--muted)', boxShadow: tab === t.key ? '0 1px 4px rgba(0,0,0,0.1)' : 'none', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* ══ PROFILE TAB ══ */}
          {tab === 'profile' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Personal Info */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 28px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 20, color: '#fff' }}>{instructor.avatar}</div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 16, color: 'var(--fg)' }}>{instructor.name}</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)' }}>Verified Instructor · {instructor.experience} experience</div>
                    </div>
                  </div>
                  <button onClick={() => setEditing(!editing)}
                    style={{ padding: '9px 18px', border: '1.5px solid var(--border)', borderRadius: 10, background: 'transparent', color: editing ? 'var(--primary)' : 'var(--muted)', fontWeight: 600, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    {editing ? '💾 Save Changes' : '✏️ Edit Profile'}
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
                  {[
                    { label: 'Full Name', value: instructor.name, icon: '👤' },
                    { label: 'Email Address', value: instructor.email, icon: '📧' },
                    { label: 'Phone Number', value: instructor.phone, icon: '📱' },
                    { label: 'Licence Number', value: instructor.licenceNo, icon: '🪪' },
                    { label: 'Licence Expiry', value: instructor.licenceExpiry, icon: '📅' },
                    { label: 'Experience', value: instructor.experience, icon: '🏆' },
                    { label: 'Address', value: instructor.address, icon: '📍' },
                    { label: 'Member Since', value: instructor.memberSince, icon: '🗓️' },
                  ].map(f => (
                    <div key={f.label} style={{ background: 'var(--secondary)', borderRadius: 12, padding: '14px 16px' }}>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{f.icon} {f.label}</div>
                      {editing ? (
                        <input defaultValue={f.value} style={{ width: '100%', background: 'var(--card)', border: '1.5px solid var(--primary)', borderRadius: 8, padding: '7px 10px', fontSize: 13, color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }} />
                      ) : (
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{f.value}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div style={{ marginTop: 16, background: 'var(--secondary)', borderRadius: 12, padding: '14px 16px' }}>
                  <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>📝 Bio</div>
                  {editing ? (
                    <textarea defaultValue={instructor.bio} rows={3} style={{ width: '100%', background: 'var(--card)', border: '1.5px solid var(--primary)', borderRadius: 8, padding: '8px 10px', fontSize: 13, color: 'var(--fg)', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }} />
                  ) : (
                    <div style={{ fontSize: 14, color: 'var(--fg)', lineHeight: 1.65 }}>{instructor.bio}</div>
                  )}
                </div>
              </div>

              {/* Car Details */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 28px)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>🚗 Vehicle Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
                  {[
                    { label: 'Make', value: instructor.car.make },
                    { label: 'Model', value: instructor.car.model },
                    { label: 'Year', value: instructor.car.year },
                    { label: 'Colour', value: instructor.car.color },
                    { label: 'Plate Number', value: instructor.car.plate },
                    { label: 'Transmission', value: instructor.car.transmission },
                  ].map(f => (
                    <div key={f.label} style={{ background: 'var(--secondary)', borderRadius: 12, padding: '14px 16px' }}>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{f.label}</div>
                      {editing ? (
                        <input defaultValue={f.value} style={{ width: '100%', background: 'var(--card)', border: '1.5px solid var(--primary)', borderRadius: 8, padding: '7px 10px', fontSize: 13, color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }} />
                      ) : (
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{f.value}</div>
                      )}
                    </div>
                  ))}
                  <div style={{ background: 'var(--secondary)', borderRadius: 12, padding: '14px 16px' }}>
                    <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Dual Controls</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 6, background: instructor.car.dualControl ? 'var(--success)' : 'var(--danger)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700 }}>{instructor.car.dualControl ? '✓' : '✗'}</div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--fg)' }}>{instructor.car.dualControl ? 'Yes' : 'No'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 28px)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>🗓️ Availability</h3>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
                    const active = instructor.availability.includes(day)
                    return (
                      <div key={day} style={{ padding: '10px 18px', borderRadius: 10, border: `2px solid ${active ? 'var(--primary)' : 'var(--border)'}`, background: active ? 'var(--primary-light)' : 'transparent', color: active ? 'var(--primary)' : 'var(--muted)', fontWeight: 700, fontSize: 13, cursor: editing ? 'pointer' : 'default' }}>
                        {day}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ══ PAYMENTS TAB ══ */}
          {tab === 'payments' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

              {/* Due Payment Alert */}
              <div style={{ background: 'rgba(249,115,22,0.1)', border: '1.5px solid rgba(249,115,22,0.3)', borderRadius: 16, padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 14 }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ fontSize: 24 }}>⚠️</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--fg)', marginBottom: 2 }}>Payment Due — {duePayment.date}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)' }}>{duePayment.plan} · {duePayment.id}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--fg)' }}>${duePayment.amount}</div>
                  <button style={{ padding: '10px 22px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Pay Now
                  </button>
                </div>
              </div>

              {/* Current Plan */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 28px)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 12 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: 8 }}>💎 Current Subscription</h3>
                  <button onClick={() => setShowUpgrade(true)}
                    style={{ padding: '9px 18px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 10, fontWeight: 700, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit' }}>
                    ⬆️ Upgrade Plan
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: 14 }}>
                  {[
                    { label: 'Plan', value: `${instructor.plan} Monthly`, icon: '💎' },
                    { label: 'Monthly Cost', value: '$49.99 / mo', icon: '💰' },
                    { label: 'Next Billing', value: duePayment.date, icon: '📅' },
                    { label: 'Status', value: 'Active ✓', icon: '✅' },
                  ].map(f => (
                    <div key={f.label} style={{ background: 'var(--secondary)', borderRadius: 12, padding: '16px' }}>
                      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>{f.icon} {f.label}</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--fg)' }}>{f.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment History */}
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 28px)' }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>🧾 Payment History</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {payments.map(p => (
                    <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', background: 'var(--secondary)', borderRadius: 12, flexWrap: 'wrap', gap: 10 }}>
                      <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(22,163,74,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>✅</div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--fg)' }}>{p.plan}</div>
                          <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{p.id} · {p.date}</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                        <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)' }}>${p.amount}</div>
                        <div style={{ padding: '4px 12px', background: 'rgba(22,163,74,0.1)', color: 'var(--success)', borderRadius: 999, fontSize: 11, fontWeight: 700, textTransform: 'uppercase' }}>Paid</div>
                        <button style={{ padding: '6px 14px', border: '1.5px solid var(--border)', borderRadius: 8, background: 'transparent', color: 'var(--muted)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                          Receipt
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ══ REPORTS TAB ══ */}
          {tab === 'reports' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 20, padding: 'clamp(20px, 4vw, 32px)' }}>

                {!reportSubmitted ? (
                  <>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: 'var(--fg)', marginBottom: 6 }}>📋 Submit a Report</h3>
                    <p style={{ fontSize: 14, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>Raise a complaint, write a review, or submit a report. Our team reviews all submissions within 48 hours.</p>

                    {/* Type selector */}
                    <div style={{ display: 'flex', gap: 10, marginBottom: 24, flexWrap: 'wrap' }}>
                      {([
                        { key: 'complaint', label: '⚠️ Complaint', desc: 'Report an issue or problem' },
                        { key: 'review', label: '⭐ Review', desc: 'Share your experience' },
                        { key: 'report', label: '🚩 Report', desc: 'Report a user or safety concern' },
                      ] as const).map(t => (
                        <button key={t.key} onClick={() => setReportType(t.key)}
                          style={{ flex: 1, minWidth: 140, padding: '14px 16px', border: `2px solid ${reportType === t.key ? 'var(--primary)' : 'var(--border)'}`, borderRadius: 14, background: reportType === t.key ? 'var(--primary-light)' : 'transparent', cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left', transition: 'all 0.2s' }}>
                          <div style={{ fontWeight: 700, fontSize: 14, color: reportType === t.key ? 'var(--primary)' : 'var(--fg)', marginBottom: 4 }}>{t.label}</div>
                          <div style={{ fontSize: 12, color: 'var(--muted)' }}>{t.desc}</div>
                        </button>
                      ))}
                    </div>

                    {/* Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>Subject</label>
                        <input value={reportSubject} onChange={e => setReportSubject(e.target.value)}
                          placeholder={reportType === 'complaint' ? 'e.g. Booking cancellation issue' : reportType === 'review' ? 'e.g. Great experience with Drive Tutor' : 'e.g. Inappropriate behaviour by a user'}
                          style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }}
                          onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                      </div>
                      <div>
  <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>Select User</label>
  <select style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none', cursor: 'pointer' }}
    onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
    onBlur={e => (e.target.style.borderColor = 'var(--border)')}>
    <option value="">-- Select a user --</option>
    <option value="sarah-m">Sarah M. (Learner)</option>
    <option value="james-k">James K. (Learner)</option>
    <option value="priya-s">Priya S. (Learner)</option>
    <option value="alex-t">Alex T. (Learner)</option>
    <option value="other">Other</option>
  </select>
</div>

                      <div>
                        <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>
                          {reportType === 'complaint' ? 'Describe the issue' : reportType === 'review' ? 'Your review' : 'Describe what happened'}
                        </label>
                        <textarea value={reportText} onChange={e => setReportText(e.target.value)} rows={6}
                          placeholder={reportType === 'complaint' ? 'Please describe the issue in detail...' : reportType === 'review' ? 'Share your experience with Drive Tutor...' : 'Please describe the incident with as much detail as possible...'}
                          style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none', resize: 'vertical' }}
                          onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                          onBlur={e => (e.target.style.borderColor = 'var(--border)')} />
                      </div>

                      {reportType === 'review' && (
                        <div>
                          <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 10 }}>Your Rating</label>
                          <div style={{ display: 'flex', gap: 8 }}>
                            {[1, 2, 3, 4, 5].map(s => (
                              <button key={s} style={{ width: 44, height: 44, borderRadius: 10, border: '1.5px solid var(--border)', background: 'var(--secondary)', fontSize: 20, cursor: 'pointer' }}>
                                ⭐
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <button onClick={() => { if (reportSubject && reportText) setReportSubmitted(true) }}
                        style={{ padding: '14px', background: reportSubject && reportText ? 'var(--primary)' : 'var(--secondary)', color: reportSubject && reportText ? '#fff' : 'var(--muted)', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: reportSubject && reportText ? 'pointer' : 'default', fontFamily: 'inherit', transition: 'all 0.2s' }}>
                        Submit {reportType === 'complaint' ? 'Complaint' : reportType === 'review' ? 'Review' : 'Report'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                    <div style={{ fontSize: 56, marginBottom: 20 }}>
                      {reportType === 'complaint' ? '📬' : reportType === 'review' ? '⭐' : '🚩'}
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 900, color: 'var(--fg)', marginBottom: 10 }}>
                      {reportType === 'complaint' ? 'Complaint Submitted' : reportType === 'review' ? 'Review Submitted' : 'Report Submitted'}
                    </h3>
                    <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 380, margin: '0 auto 28px' }}>
                      Thank you for your submission. Our team will review it within 48 hours and follow up at <strong>{instructor.email}</strong>.
                    </p>
                    <button onClick={() => { setReportSubmitted(false); setReportText(''); setReportSubject('') }}
                      style={{ padding: '12px 28px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                      Submit Another
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}