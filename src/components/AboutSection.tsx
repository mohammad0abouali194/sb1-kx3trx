import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Team working together"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              At TechSolutions, we're passionate about creating innovative digital solutions that help businesses thrive in the modern world. Our team of experts combines creativity with technical expertise to deliver outstanding results.
            </p>
            <p className="text-gray-600">
              With years of experience and a commitment to excellence, we're dedicated to helping our clients achieve their goals and stay ahead in a rapidly evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection