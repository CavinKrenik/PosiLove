import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="section">
      <h1 className="section-title">Page not found</h1>
      <p className="section-subtitle">
        The link you followed doesn&apos;t exist. It&apos;s okay — we&apos;ll guide you back somewhere safe.
      </p>
      <Link to="/">
        <button className="btn btn-primary">Back to home</button>
      </Link>
    </section>
  )
}

export default NotFound
