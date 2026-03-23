'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function InstructorLogin() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [forgotMode, setForgotMode] = useState(false)
  const [forgotSent, setForgotSent] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/instructor-dashboard')
  }

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault()
    setForgotSent(true)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar */}
      <div style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/logo.png" alt="DriveTutor" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
<span style={{ fontWeight: 800, fontSize: 17, color: 'var(--primary)', letterSpacing: -0.5, fontFamily: 'Inter, sans-serif' }}>DriveTutor</span>
        </Link>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none', fontWeight: 500 }}>← Back to Home</Link>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 24, padding: 'clamp(28px, 5vw, 48px)', boxShadow: '0 4px 40px rgba(0,0,0,0.08)' }}>

            {!forgotMode ? (
              <>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 16px' }}>🎓</div>
                  <h1 style={{ fontSize: 24, fontWeight: 900, color: 'var(--fg)', letterSpacing: -0.5, marginBottom: 8 }}>Instructor Portal</h1>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>Sign in to manage your schedule, students, and bookings</p>
                </div>

                {/* Google Button */}
                <button
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '13px 20px', border: '1.5px solid var(--border)', borderRadius: 12, background: 'var(--bg)', cursor: 'pointer', fontWeight: 600, fontSize: 14, color: 'var(--fg)', fontFamily: 'inherit', marginBottom: 20, transition: 'all 0.2s' }}
                  onMouseOver={e => (e.currentTarget.style.borderColor = 'var(--primary)')}
                  onMouseOut={e => (e.currentTarget.style.borderColor = 'var(--border)')}>
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>

                {/* Divider */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                  <span style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 500 }}>or sign in with email</span>
                  <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                    />
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg)' }}>Password</label>
                      <button
                        type="button"
                        onClick={() => setForgotMode(true)}
                        style={{ background: 'none', border: 'none', color: 'var(--primary)', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                        Forgot password?
                      </button>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                        style={{ width: '100%', padding: '12px 44px 12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(s => !s)}
                        style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: 'var(--muted)', padding: 4 }}>
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    style={{ width: '100%', padding: '14px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4, transition: 'all 0.2s' }}
                    onMouseOver={e => (e.currentTarget.style.background = '#0340B8')}
                    onMouseOut={e => (e.currentTarget.style.background = 'var(--primary)')}>
                    Sign In to Portal
                  </button>
                </form>

                <p style={{ fontSize: 12, color: 'var(--muted)', textAlign: 'center', marginTop: 20, lineHeight: 1.6 }}>
                  Are you a learner?{' '}
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Download the app instead →</a>
                </p>
              </>
            ) : (
              <>
                {/* Forgot Password */}
                <div style={{ textAlign: 'center', marginBottom: 28 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, margin: '0 auto 16px' }}>🔐</div>
                  <h1 style={{ fontSize: 22, fontWeight: 900, color: 'var(--fg)', letterSpacing: -0.5, marginBottom: 6 }}>Reset Password</h1>
                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>Enter your email and we&apos;ll send you a reset link</p>
                </div>

                {!forgotSent ? (
                  <form onSubmit={handleForgot} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--fg)', marginBottom: 6 }}>Email Address</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        style={{ width: '100%', padding: '12px 14px', border: '1.5px solid var(--border)', borderRadius: 10, fontSize: 14, background: 'var(--bg)', color: 'var(--fg)', fontFamily: 'inherit', outline: 'none' }}
                        onFocus={e => (e.target.style.borderColor = 'var(--primary)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                      />
                    </div>
                    <button
                      type="submit"
                      style={{ width: '100%', padding: '14px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>
                      Send Reset Link
                    </button>
                    <button
                      type="button"
                      onClick={() => setForgotMode(false)}
                      style={{ width: '100%', padding: '12px', background: 'transparent', color: 'var(--muted)', border: '1.5px solid var(--border)', borderRadius: 12, fontWeight: 600, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                      ← Back to Sign In
                    </button>
                  </form>
                ) : (
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>📬</div>
                    <h3 style={{ fontWeight: 800, color: 'var(--fg)', marginBottom: 8 }}>Check your email</h3>
                    <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24 }}>
                      We&apos;ve sent a password reset link to your email. It may take a few minutes to arrive.
                    </p>
                    <button
                      onClick={() => { setForgotMode(false); setForgotSent(false) }}
                      style={{ padding: '12px 28px', background: 'var(--primary)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>
                      Back to Sign In
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}