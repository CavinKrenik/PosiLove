import React from 'react'

function Login() {
  return (
    <section className="section">
      <h1 className="section-title">Log in</h1>
      <p className="section-subtitle">
        Use a simple, privacy-friendly login. No usernames to remember, no public profiles tied to your real name.
      </p>
      <form
        style={{
          maxWidth: '420px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '1rem',
          padding: '1.25rem',
          border: '1px solid #e5ddea',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}
      >
        <label style={{ fontSize: '0.9rem' }}>
          Email address
          <input
            type="email"
            placeholder="you@example.com"
            required
            style={{
              marginTop: '0.25rem',
              width: '100%',
              padding: '0.5rem 0.7rem',
              borderRadius: '0.6rem',
              border: '1px solid #d8cde6',
              fontSize: '0.9rem'
            }}
          />
        </label>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
          Send magic link
        </button>
        <p className="muted" style={{ fontSize: '0.8rem' }}>
          We&apos;ll email you a secure login link. No password, no problem.
        </p>
      </form>
    </section>
  )
}

export default Login
