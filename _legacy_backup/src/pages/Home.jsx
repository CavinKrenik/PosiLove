import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <h1 className="hero-title">
            <span className="hero-gradient">Positive hearts.</span> Real connections.
          </h1>
          <p className="hero-subtitle">
            PosiLove is a private, stigma-free dating community for people living with chronic STIs —
            designed for honesty, safety, and real human connection.
          </p>
          <div className="hero-pills">
            <div className="hero-pill">💜 Privacy-first, no real names required</div>
            <div className="hero-pill">🔐 Encrypted messaging</div>
            <div className="hero-pill">🫶 Status-compatible matching</div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <Link to="/signup">
              <button className="btn btn-primary">Join the beta</button>
            </Link>
            <Link to="/safety">
              <button className="btn btn-outline">How we keep you safe</button>
            </Link>
          </div>
          <p className="muted">
            You deserve a space where you don&apos;t have to hide or apologize. Breathe out. You&apos;re
            welcome here.
          </p>
        </div>
        <aside className="hero-card" aria-label="At a glance">
          <div className="hero-card-title">Built for safety, not stigma</div>
          <div className="hero-card-item">
            <span>💬</span>
            <div>
              <strong>Encrypted messaging</strong>
              <div className="muted">Your chats stay between you and the person you&apos;re talking to.</div>
            </div>
          </div>
          <div className="hero-card-item">
            <span>🛡️</span>
            <div>
              <strong>Private health categories</strong>
              <div className="muted">
                Your status is stored privately &amp; encrypted — never shown on your public profile.
              </div>
            </div>
          </div>
          <div className="hero-card-item">
            <span>🤝</span>
            <div>
              <strong>Status-compatible matches</strong>
              <div className="muted">
                Match with people who already understand, so you can skip the stigma and get to the good stuff.
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2 className="section-title">How PosiLove works</h2>
        <p className="section-subtitle">
          We keep things simple: you stay in control of what you share, who you match with, and when you open up.
        </p>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-label">Step 1</div>
            <div className="feature-heading">Create a private profile</div>
            <p className="muted">
              Choose a display name, add a photo, and share a little about who you are and what you&apos;re
              looking for. No real names required.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-label">Step 2</div>
            <div className="feature-heading">Set your comfort levels</div>
            <p className="muted">
              Privately select your health category and who you&apos;re open to dating — same-status only, mixed,
              or flexible. We use this for matching, not for labels.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-label">Step 3</div>
            <div className="feature-heading">Match &amp; chat safely</div>
            <p className="muted">
              When there&apos;s a mutual match, you can chat using encrypted messaging — with built-in safety tools
              and gentle reminders for consent and boundaries.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-label">Step 4</div>
            <div className="feature-heading">Upgrade when you&apos;re ready</div>
            <p className="muted">
              Keep it free, or unlock extra filters and connection tools with PosiLove Plus. Either way, you&apos;re
              part of the same compassionate community.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
