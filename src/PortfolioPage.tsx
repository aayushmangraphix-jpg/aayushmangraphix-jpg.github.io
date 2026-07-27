import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { competencies, contact, founding } from './data'
import { CountUp } from './CountUp'
import { HeroMesh } from './HeroMesh'
import { SiteShell } from './SiteShell'
import { useReveal } from './useReveal'

const HERO_PHOTOS = [
  { src: '/hero/speaking.png', alt: 'Aayushman Gupta speaking at an event' },
  { src: '/hero/focus.png', alt: 'Aayushman Gupta focused at work' },
  {
    src: '/hero/stage.png',
    alt: 'Aayushman Gupta presenting Designing for Agentic AI at UX India',
  },
]

export function PortfolioPage() {
  const pageRef = useReveal<HTMLDivElement>()
  const [photosIn, setPhotosIn] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setPhotosIn(true), 120)
    return () => window.clearTimeout(id)
  }, [])

  return (
    <SiteShell>
      <div ref={pageRef}>
        <section id="top" className="pf-hp-hero">
          <HeroMesh />
          <div className="pf-rail pf-hp-section">
            <div className="pf-hp-left">
              <h1 className="pf-hp-title">
                I design products where <em>AI</em> meets enterprise trust.
              </h1>
              <p className="pf-hp-bio">
                Founding team member at a stealth AI security company, where I shape human–AI
                collaboration, governance, and agentic experiences for the enterprise. Previously
                the founding or first designer at Nutanix, Cohesity, Domino Data Lab, Prophecy,
                Traceable, and Onehouse.
              </p>
              <div className="pf-hp-actions">
                <a className="pf-text-link" href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="pf-text-link" href={`mailto:${contact.email}`}>
                  Email
                </a>
              </div>
            </div>

            <div className="pf-photo-grid" aria-label="Selected moments">
              {HERO_PHOTOS.map((photo) => (
                <div
                  key={photo.src}
                  className={`pf-photo-grid-item${photosIn ? ' is-in' : ''}`}
                >
                  <img src={photo.src} alt={photo.alt} draggable={false} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pf-logo-strip" aria-label="Companies">
          <div className="pf-rail">
            <h2 className="pf-logo-heading pf-reveal">
              <span>Where I was the first designer in the room</span>
            </h2>
            <div className="pf-logo-row pf-reveal">
              {founding.map((f) => {
                const sizeClass =
                  f.logoSize === 'xs'
                    ? ' pf-logo-img--xs'
                    : f.logoSize === 'sm'
                      ? ' pf-logo-img--sm'
                      : f.logoSize === 'lg'
                        ? ' pf-logo-img--lg'
                        : ''
                return (
                  <div key={f.company} className="pf-logo-card" title={f.claim}>
                    {f.logo && f.logoHover && 'logoX' in f && f.logoX ? (
                      <span
                        className={`pf-logo-split${sizeClass}`}
                        role="img"
                        aria-label={f.company}
                        style={
                          {
                            '--logo': `url(${f.logo})`,
                            '--logo-x': `url(${f.logoX})`,
                            '--logo-hover': f.logoHover,
                          } as React.CSSProperties
                        }
                      >
                        <span className="pf-logo-mask pf-logo-split-base" />
                        <span className="pf-logo-mask pf-logo-split-x" />
                      </span>
                    ) : f.logo && f.logoHover ? (
                      <span
                        className={`pf-logo-mask${sizeClass}`}
                        style={
                          {
                            '--logo': `url(${f.logo})`,
                            '--logo-hover': f.logoHover,
                          } as React.CSSProperties
                        }
                        role="img"
                        aria-label={f.company}
                      />
                    ) : f.logo ? (
                      <img
                        className={`pf-logo-img${sizeClass}`}
                        src={f.logo}
                        alt={f.company}
                      />
                    ) : (
                      <span className="pf-logo-word">{f.company}</span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="pf-section">
          <div className="pf-rail">
            <div className="pf-about-grid pf-reveal">
              <div className="pf-about-copy">
                <h2 className="pf-h2">About</h2>
                <p className="pf-lede">
                  Over a decade in enterprise and B2B product design — repeatedly brought in as the
                  founding or first designer at high-growth startups. Equally comfortable leading
                  cross-functional teams, defining product vision, and advising early-stage founders on
                  product-market fit and design strategy.
                </p>
                <p className="pf-lede" style={{ marginTop: '1rem' }}>
                  Currently on the founding team of a stealth AI security company, shaping responsible
                  human–AI collaboration for security, governance and agentic workflows.
                </p>
              </div>
              <aside className="pf-about-stats" aria-label="Highlights">
                <div className="pf-stat">
                  <div className="pf-stat-value">
                    <CountUp to={10} suffix="+" />
                  </div>
                  <div className="pf-stat-label">Years</div>
                  <p className="pf-stat-body">
                    Enterprise and B2B product design across AI security, data platforms,
                    hyper-converged infrastructure, and logistics.
                  </p>
                </div>
                <div className="pf-stat">
                  <div className="pf-stat-value">
                    <CountUp to={12} suffix="+" durationMs={1400} />
                  </div>
                  <div className="pf-stat-label">Products</div>
                  <p className="pf-stat-body">
                    From first sketch to shipped product — AI security, data platforms, and
                    enterprise tools used by teams worldwide.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="pf-section">
          <div className="pf-rail">
            <div className="pf-reveal max-w-xl mb-8">
              <h2 className="pf-h2">How I work</h2>
            </div>
            <div className="pf-reveal pf-comp-list">
              {competencies.map((c) => (
                <div key={c.title}>
                  <h3 className="text-[15px] font-semibold m-0 mb-1.5">{c.title}</h3>
                  <p
                    className="m-0 text-[15px] leading-relaxed"
                    style={{ color: 'var(--pf-ink-soft)' }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pf-section">
          <div className="pf-rail">
            <div className="pf-reveal">
              <h2 className="pf-h2">Get in touch</h2>
              <p className="pf-lede pf-contact-lede">
                Open to bold ideas and meaningful collaboration. Based in Bengaluru, Karnataka, India.
              </p>
              <div className="pf-hp-actions" style={{ marginTop: '1.25rem' }}>
                <a className="pf-text-link" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
                <a className="pf-text-link" href={contact.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <Link className="pf-text-link" to="/case-studies">
                  Case studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteShell>
  )
}
