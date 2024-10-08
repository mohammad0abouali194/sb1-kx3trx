import React from 'react'
import { ChevronRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to TechSolutions</h1>
        <p className="text-xl mb-8">Innovative solutions for your digital needs</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold inline-flex items-center hover:bg-blue-100 transition duration-300"
        >
          Get Started
          <ChevronRight className="ml-2" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection