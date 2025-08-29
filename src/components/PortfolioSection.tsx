'use client'

import { useState } from 'react'

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "AgriSphere – Smart Agri-Tourism Platform",
      description: "Comprehensive agri-tourism platform with AI-enhanced search, developed for Seneca Hackathon 2025.",
      image: "/agrisphere.avif",
      technologies: ["Full-Stack", "MongoDB", "Flask", "OpenAI"],
      features: [
        "AI-powered farm discovery and matching system",
        "Comprehensive booking and payment processing", 
        "Real-time availability and pricing management",
        "Interactive farm profiles with photos and reviews",
        "Mobile-responsive design for all devices",
        "Advanced search filters and recommendations"
      ],
      link: "https://agrisphere.vercel.app/",
      category: "Full-Stack Application"
    },
    {
      title: "Galerie Maya E-commerce Platform",
      description: "Robust Shopify e-commerce platform with modern design and comprehensive SEO optimization.",
      image: "/galerie-maya.avif",
      technologies: ["Shopify", "E-commerce", "SEO"],
      features: [
        "Custom Shopify theme development",
        "Advanced product catalog with filtering",
        "Secure payment processing integration",
        "Search engine optimization (SEO)",
        "Mobile-optimized shopping experience",
        "Inventory management system"
      ],
      link: "https://galeriemaya.com/",
      category: "E-commerce"
    },
    {
      title: "La Caviare – Luxury Brand Website",
      description: "Luxurious one-page website showcasing premium Persian Beluga caviars with minimalist design.",
      image: "/la-caviare.avif", 
      technologies: ["Squarespace", "E-commerce", "SEO"],
      features: [
        "Elegant, minimalist design approach",
        "Premium product showcase",
        "Integrated contact and ordering system",
        "Search engine optimization",
        "Mobile-responsive luxury experience",
        "Brand storytelling and heritage"
      ],
      link: "https://lacaviare.ca/",
      category: "Brand Website"
    }
  ]

  const ProjectModal = ({ project, isOpen, onClose }: { 
    project: typeof projects[0], 
    isOpen: boolean, 
    onClose: () => void 
  }) => {
    if (!isOpen) return null

    return (
      <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 animate-modal-fade">
        <div className="bg-gradient-to-br from-primary-gray to-primary-dark max-w-4xl w-full max-h-[90vh] rounded-2xl border border-white/10 overflow-y-auto animate-modal-slide">
          <div className="sticky top-0 bg-primary-gray/95 backdrop-blur-lg p-6 border-b border-white/10 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors duration-300"
            >
              ✕
            </button>
          </div>
          
          <div className="p-8">
            <div className="mb-6">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            
            <p className="text-text-gray text-lg leading-relaxed mb-6">{project.description}</p>
            
            <div className="mb-6">
              <h4 className="text-accent-yellow text-xl font-semibold mb-4">Key Features</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-text-gray">
                    <span className="text-accent-yellow mr-3 mt-1">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-accent-yellow text-xl font-semibold mb-4">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-accent-yellow/20 text-accent-yellow px-3 py-1 rounded-full text-sm border border-accent-yellow/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-accent inline-block"
            >
              View Live Demo →
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black to-primary-dark"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Featured Projects</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            A showcase of recent projects demonstrating expertise in modern web development, 
            e-commerce solutions, and user-centered design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <span className="text-xs text-accent-blue bg-accent-blue/20 px-2 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-3">{project.title}</h3>
                <p className="text-text-gray mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-accent-yellow/20 text-accent-yellow px-2 py-1 rounded-full border border-accent-yellow/30">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setSelectedProject(index)}
                    className="btn-accent flex-1 text-sm py-2 px-4"
                  >
                    View Details
                  </button>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline-light flex-1 text-sm py-2 px-4 text-center"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-text-gray mb-6">
            Interested in working together? Let's create something amazing for your business.
          </p>
          <a href="#contact" className="btn-accent">
            Start Your Project
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <ProjectModal 
          project={projects[selectedProject]} 
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}

export default PortfolioSection