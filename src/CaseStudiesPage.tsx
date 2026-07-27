import { contact } from './data'
import { SiteShell } from './SiteShell'

export function CaseStudiesPage() {
  return (
    <SiteShell>
      <div className="pf-page-center">
        <div className="pf-rail">
          <div className="pf-empty-panel">
            <h1 className="pf-page-title">Case Studies</h1>
            <div className="pf-wip" aria-hidden="true">
              <div className="pf-wip-frame">
                <span className="pf-wip-line pf-wip-line--title" />
                <span className="pf-wip-line pf-wip-line--a" />
                <span className="pf-wip-line pf-wip-line--b" />
                <span className="pf-wip-line pf-wip-line--c" />
                <span className="pf-wip-cursor" />
              </div>
            </div>
            <p className="pf-empty-title">Work in progress</p>
            <p className="pf-lede pf-empty-copy">
              New case studies for this site are on the way. In the meantime, you can browse the
              existing portfolio.
            </p>
            <div className="pf-hp-actions pf-empty-actions">
              <a
                className="pf-text-link"
                href={contact.portfolio}
                target="_blank"
                rel="noreferrer"
              >
                View case studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
