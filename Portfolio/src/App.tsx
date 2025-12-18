import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import PrivacyPolicy from './components/PrivacyPolicy'
import OrgMinderPrivacy from './components/OrgMinderPrivacy'
import Footer from './components/Footer'

function AppContent() {
  const location = useLocation()
  const hideFooter = location.pathname === '/orgminder/privacy'

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/orgminder/privacy" element={<OrgMinderPrivacy />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
