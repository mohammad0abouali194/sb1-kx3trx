import React from 'react'
import { Menu, X, ChevronRight, Code, Globe, LayoutGrid } from 'lucide-react'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">TechSolutions</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#features" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Features</a>
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        </div>
      )}

      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 TechSolutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App