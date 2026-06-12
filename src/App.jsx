import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Industries from './pages/Industries'
import Insights from './pages/Insights'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Clients from './pages/Clients'

import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="font-sans bg-slate-50 min-h-screen flex flex-col">
        {/* Navbar overlaying the background */}
        <Navbar />

        {/* Page Routing */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/solutions" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/resources" element={<Insights />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
