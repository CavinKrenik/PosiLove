import React from 'react'

function Education() {
  return (
    <section className="section">
      <h1 className="section-title">Education &amp; Support</h1>
      <p className="section-subtitle">
        Knowledge is a huge antidote to stigma. PosiLove will include an education hub with plain-language guides,
        links to credible resources, and tools for navigating disclosure and dating.
      </p>
      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-heading">Condition basics</div>
          <p className="muted">
            Clear, accessible overviews of HSV, HIV, HPV, hepatitis and other common conditions — with links to
            sources like the CDC and WHO.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">Dating with a diagnosis</div>
          <p className="muted">
            Scripts and strategies for disclosure, setting boundaries, and staying grounded when conversations feel
            scary or vulnerable.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">Safer sex &amp; consent</div>
          <p className="muted">
            Practical reminders about barriers, PrEP/PEP, viral load, and what &quot;U=U&quot; means — framed in a
            way that centers consent and mutual care.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-heading">Emotional support</div>
          <p className="muted">
            Resources for dealing with shame, anxiety, or grief after a diagnosis, and for finding community beyond
            the app.
          </p>
        </div>
      </div>
      <p className="muted" style={{ marginTop: '1.5rem' }}>
        Nothing in the Education Hub is a substitute for medical advice. Always check anything health-related with a
        qualified professional.
      </p>
    </section>
  )
}

export default Education
