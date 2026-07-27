import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type SiteShellProps = {
  children: React.ReactNode
}

export function SiteShell({ children }: SiteShellProps) {
  const [navScrolled, setNavScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="pf-shell">
      <header className={`pf-nav ${navScrolled ? 'is-scrolled' : ''} ${menuOpen ? 'is-open' : ''}`}>
        <div className="pf-nav-inner">
          <Link to="/" className="pf-nav-brand" onClick={closeMenu}>
            Aayushman Gupta
          </Link>

          <button
            type="button"
            className={`pf-nav-toggle${menuOpen ? ' is-open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="pf-nav-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="pf-nav-menu"
            className={`pf-nav-links${menuOpen ? ' is-open' : ''}`}
          >
            <Link to="/#about" onClick={closeMenu}>
              About
            </Link>
            <NavLink to="/experience" onClick={closeMenu}>
              Experience
            </NavLink>
            <NavLink to="/case-studies" onClick={closeMenu}>
              Case Studies
            </NavLink>
            <NavLink to="/talks" onClick={closeMenu}>
              Talks
            </NavLink>
            <Link to="/#contact" onClick={closeMenu}>
              Contact
            </Link>
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
