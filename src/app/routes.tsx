import { Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/app/layouts/SiteLayout"
import { NotFoundPage } from "@/app/pages/NotFoundPage"
import {
  AboutPage,
  ContactPage,
  LandingPage,
  LandingV2Page,
  PrivacyPage,
  TermsPage,
} from "@/features/marketing"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="2" element={<LandingV2Page />} />
      <Route element={<SiteLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
