import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import LivePage from './pages/LivePage'
import PodcastPage from './pages/PodcastPage'
import ArticlesPage from './pages/ArticlesPage'
import BusinessPage from './pages/BusinessPage'
import CustomSection from './pages/CustomSection'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Test from './Test'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/live" element={<LivePage />} />
        <Route path="/podcast" element={<PodcastPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/custom-section" element={<CustomSection />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
