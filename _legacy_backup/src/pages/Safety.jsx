import React from 'react'

function Safety() {
  return (
    <section className="section">
      <h1 className="section-title">Safety &amp; Privacy</h1>
      <p className="section-subtitle">
        PosiLove is designed as a safety-first platform. We minimize what we collect, encrypt what we store, and
        give you control over what you share.
      </p>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-heading">Data minimization</div>
          <p className="muted">
            No real names required. No exact addresses. We use city-level location, age ranges, and pseudonyms so a
            profile can feel human without exposing your identity.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">Encrypted by default</div>
          <p className="muted">
            Your health category and preferences are stored in a separate, encrypted part of our system. Messaging
            is designed to be end-to-end encrypted so conversations stay between you and your match.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">Block &amp; report tools</div>
          <p className="muted">
            You can block or report any user in a couple of taps. Our team prioritizes safety and removes users who
            harass, coerce, or violate community guidelines.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">You&apos;re in control</div>
          <p className="muted">
            You decide when and how to disclose details, who can see your profile, and when to delete your account
            and data completely.
          </p>
        </div>
      </div>
      <p className="muted" style={{ marginTop: '1.5rem' }}>
        PosiLove is not a medical service and does not provide medical advice. Always talk with a licensed
        healthcare professional about your health, treatment options, and risk reduction.
      </p>
    </section>
  )
}

export default Safety
