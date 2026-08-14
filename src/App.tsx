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
import { SpotlightPage } from './SpotlightPage'
import { TalksPage } from './TalksPage'
import { scrollToTarget, useSmoothScroll } from './smoothScroll'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const frame = window.requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) scrollToTarget(el)
        else scrollToTarget(0, true)
      })
      return () => window.cancelAnimationFrame(frame)
    }
    scrollToTarget(0, true)
  }, [pathname, hash])

  return null
}

function SmoothScroll() {
  useSmoothScroll()
  return null
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '') || '/'}>
      <SmoothScroll />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/spotlight" element={<SpotlightPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
