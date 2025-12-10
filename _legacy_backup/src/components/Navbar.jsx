import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/posilove-logo.png'

const NavItem = ({ to, children }) => {
  const location = useLocation()
  const isActive = location.pathname === to
  return (
    <NavLink
      to={to}
      className="nav-link"
      style={isActive ? { background: 'rgba(0,0,0,0.04)', fontWeight: 600 } : {}}
    >
      {children}
    </NavLink>
  )
}

function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="PosiLove logo" />
          </Link>
          <Link to="/" style={{ fontWeight: 700, fontSize: '1rem' }}>
            PosiLove
          </Link>
        </div>
        <nav className="nav-links">
          <NavItem to="/about">About</NavItem>
          <NavItem to="/safety">Safety</NavItem>
          <NavItem to="/education">Education</NavItem>
        </nav>
        <div className="nav-cta">
          <Link to="/login">
            <button className="btn btn-outline">Log in</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary">Join now</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
