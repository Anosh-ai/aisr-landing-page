import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SiteLayout } from "@/app/layouts/SiteLayout"
import { NotFoundPage } from "@/app/pages/NotFoundPage"
import {
  AboutPage,
  ContactPage,
  LandingPage,
  PrivacyPage,
  TermsPage,
} from "@/features/marketing"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
