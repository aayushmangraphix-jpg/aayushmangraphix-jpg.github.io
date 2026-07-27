import { roles } from './data'
import { SiteShell } from './SiteShell'
import { useReveal } from './useReveal'

/** Simple stroke icons (24×24), keyed by org so order changes don’t scramble them. */
const ICONS: Record<string, string[]> = {
  'Stealth Startup — AI Security': [
    // sparkles
    'M12 3v4',
    'M12 17v4',
    'M3 12h4',
    'M17 12h4',
    'M5.6 5.6l2.8 2.8',
    'M15.6 15.6l2.8 2.8',
    'M18.4 5.6l-2.8 2.8',
    'M8.4 15.6l-2.8 2.8',
  ],
  'Cequence Security': [
    // shield
    'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  ],
  'Onehouse.ai': [
    // layers
    'M12 2 2 7l10 5 10-5-10-5z',
    'M2 17l10 5 10-5',
    'M2 12l10 5 10-5',
  ],
  'Traceable.ai': [
    // activity
    'M22 12h-4l-3 9L9 3l-3 9H2',
  ],
  'Prophecy.io': [
    // code
    'M16 18l6-6-6-6',
    'M8 6l-6 6 6 6',
  ],
  'Domino Data Lab': [
    // users
    'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2',
    'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
    'M23 21v-2a4 4 0 0 0-3-3.87',
    'M16 3.13a4 4 0 0 1 0 7.75',
  ],
  Cohesity: [
    // building
    'M3 21h18',
    'M5 21V7l7-4 7 4v14',
    'M9 9h1',
    'M14 9h1',
    'M9 13h1',
    'M14 13h1',
    'M9 17h1',
    'M14 17h1',
  ],
  RIVIGO: [
    // truck
    'M1 3h15v13H1z',
    'M16 8h4l3 3v5h-7V8z',
    'M5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
    'M18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  ],
  Nutanix: [
    // server / infra
    'M2 6h20v4H2z',
    'M2 14h20v4H2z',
    'M6 8h.01',
    'M6 16h.01',
  ],
}

const FALLBACK_ICON = ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M12 8v4', 'M12 16h.01']

function TimelineIcon({ org }: { org: string }) {
  const paths = ICONS[org] ?? FALLBACK_ICON
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}

export function ExperiencePage() {
  const pageRef = useReveal<HTMLDivElement>()

  return (
    <SiteShell>
      <div ref={pageRef}>
        <section className="pf-section pf-page-hero pf-timeline-page">
          <div className="pf-rail">
            <header className="pf-timeline-header pf-reveal">
              <h1 className="pf-timeline-title">Experience</h1>
              <p className="pf-lede pf-timeline-intro">
                Designing products, learning from people, evolving through every challenge.
              </p>
            </header>

            <ol className="pf-timeline pf-reveal">
              {roles.map((role) => (
                <li key={`${role.org}-${role.dates}`} className="pf-timeline-item">
                  <div className="pf-timeline-date">
                    <span>{role.dates}</span>
                    {role.location ? (
                      <span className="pf-timeline-loc">{role.location}</span>
                    ) : null}
                  </div>

                  <div className="pf-timeline-axis" aria-hidden="true">
                    <span className="pf-timeline-node">
                      <TimelineIcon org={role.org} />
                    </span>
                  </div>

                  <article className="pf-timeline-card">
                    <h2 className="pf-timeline-org">{role.org}</h2>
                    <p className="pf-timeline-role">{role.title}</p>
                    <p className="pf-timeline-summary">{role.summary}</p>
                    {role.highlights?.length ? (
                      <ul className="pf-timeline-highlights">
                        {role.highlights.map((h) => (
                          <li key={h}>{h}</li>
                        ))}
                      </ul>
                    ) : null}
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </SiteShell>
  )
}
