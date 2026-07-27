import { useLayoutEffect } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { ExperiencePage } from './ExperiencePage'
import { CaseStudiesPage } from './CaseStudiesPage'
import { PortfolioPage } from './PortfolioPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      })
      return () => window.cancelAnimationFrame(frame)
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
