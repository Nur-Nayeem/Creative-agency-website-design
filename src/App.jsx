import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Works from './pages/Works.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div>
      <BrowserRouter basename="/Creative-agency-website-design">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App