import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

type SiteShellProps = {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pf-shell">
      <header className={`pf-nav ${navScrolled ? 'is-scrolled' : ''}`}>
        <div className="pf-nav-inner">
          <Link to="/" className="pf-nav-brand">
            Aayushman Gupta
          </Link>
          <nav className="pf-nav-links">
            <a href="/#about">About</a>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/case-studies">Case Studies</NavLink>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pf-shell-main">{children}</main>

      <footer className="pf-footer">
        <div className="pf-rail flex flex-col sm:flex-row sm:justify-between gap-1">
          <span>© {new Date().getFullYear()} Aayushman Gupta</span>
          <span>Bengaluru</span>
        </div>
      </footer>
    </div>
  )
}
