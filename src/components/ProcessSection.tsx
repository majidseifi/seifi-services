const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start with a detailed consultation to understand your business goals, target audience, and project requirements. I analyze your needs and create a comprehensive project roadmap.",
      duration: "1-2 weeks",
      deliverables: ["Project proposal", "Timeline & budget", "Technical specifications", "Wireframes"]
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Creating beautiful, user-centered designs that align with your brand. I develop interactive prototypes to visualize the final product before development begins.",
      duration: "2-3 weeks",
      deliverables: ["UI/UX designs", "Interactive prototypes", "Design system", "Client feedback integration"]
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your website with clean, scalable code using modern technologies. Rigorous testing ensures everything works perfectly across all devices and browsers.",
      duration: "3-6 weeks",
      deliverables: ["Responsive website", "Quality assurance", "Performance optimization", "Cross-browser testing"]
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploying your website and setting up analytics, SEO, and monitoring tools. I provide training and ongoing support to ensure your continued success.",
      duration: "1 week",
      deliverables: ["Live website", "SEO setup", "Analytics integration", "Training & documentation"]
    }
  ]

  return (
    <section id="process" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">My Development Process</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            A proven methodology that ensures your project is delivered on time, within budget, 
            and exceeds your expectations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-yellow to-accent-blue transform md:-translate-x-0.5"></div>

          <div className="space-y-16">
            {processSteps.map((process, index) => (
              <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Timeline marker */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-accent-yellow rounded-full border-4 border-primary-black transform md:-translate-x-4 flex items-center justify-center">
                  <span className="text-primary-black font-bold text-sm">{process.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0">
                  <div className={`bg-gradient-to-br from-primary-gray to-primary-dark p-8 rounded-2xl border border-white/10 ${
                    index % 2 === 1 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-text-gray mb-6 leading-relaxed">{process.description}</p>
                    
                    <div>
                      <h4 className="text-accent-yellow font-semibold mb-3">Key Deliverables:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {process.deliverables.map((deliverable, deliverableIndex) => (
                          <li key={deliverableIndex} className="flex items-center text-sm text-text-gray">
                            <span className="text-accent-yellow mr-2">✓</span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-text-gray mb-8">
            Ready to start your project? Let's discuss your requirements and create something amazing together.
          </p>
          <a href="#contact" className="btn-accent">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection