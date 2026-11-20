import { Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/app/layouts/SiteLayout"
import { NotFoundPage } from "@/app/pages/NotFoundPage"
import {
  AboutPage,
  ContactPage,
  LandingDesign2,
  LandingDesign3,
  LandingPage,
  PrivacyPage,
  TermsPage,
} from "@/features/marketing"

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="design-2" element={<LandingDesign2 />} />
        <Route path="design-3" element={<LandingDesign3 />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
