import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <section className="section">
      <h1 className="section-title">Join the PosiLove beta</h1>
      <p className="section-subtitle">
        Tell us where to send your invite. We&apos;re rolling out PosiLove carefully so we can keep the community
        safe, kind, and well-moderated.
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
        <label style={{ fontSize: '0.9rem' }}>
          City / region
          <input
            type="text"
            placeholder="Seattle area, Bay Area, etc."
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
        <label style={{ fontSize: '0.9rem' }}>
          What are you mainly looking for?
          <select
            style={{
              marginTop: '0.25rem',
              width: '100%',
              padding: '0.5rem 0.7rem',
              borderRadius: '0.6rem',
              border: '1px solid #d8cde6',
              fontSize: '0.9rem'
            }}
          >
            <option>Dating</option>
            <option>Long-term relationship</option>
            <option>Friendship / support</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
          Request an invite
        </button>
        <p className="muted" style={{ fontSize: '0.8rem' }}>
          By requesting an invite, you agree to our future Terms &amp; Privacy Policy. You can opt out at any time.
        </p>
        <p className="muted" style={{ fontSize: '0.8rem' }}>
          Already have an account? <Link to="/login">Log in</Link>.
        </p>
      </form>
    </section>
  )
}

export default Signup
