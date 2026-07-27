import { SiteShell } from './SiteShell'

export function TalksPage() {
  return (
    <SiteShell>
      <div className="pf-page-center">
        <div className="pf-rail">
          <div className="pf-empty-panel">
            <h1 className="pf-page-title">Talks</h1>
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
              Talks and speaking engagements are being collected here. Check back soon for
              recordings, slides, and upcoming sessions.
            </p>
          </div>
        </div>
      </div>
    </SiteShell>
  )
}
