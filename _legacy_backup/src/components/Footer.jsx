import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div style={{ marginBottom: '0.4rem' }}>
        © {new Date().getFullYear()} PosiLove. All rights reserved.
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Link to="/about">About</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/education">Education</Link>
      </div>
    </footer>
  )
}

export default Footer
