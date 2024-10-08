import React from 'react'
import { Code, Globe, LayoutGrid } from 'lucide-react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-blue-600" />,
      title: 'Custom Development',
      description: 'Tailored solutions to meet your specific needs',
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: 'Global Reach',
      description: 'Connect with customers worldwide',
    },
    {
      icon: <LayoutGrid className="h-12 w-12 text-blue-600" />,
      title: 'Responsive Design',
      description: 'Beautiful websites that work on any device',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection