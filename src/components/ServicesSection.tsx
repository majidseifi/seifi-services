const ServicesSection = () => {
  const services = [
    {
      icon: "💻",
      title: "Custom Web Development",
      description: "Responsive websites built with modern technologies like React, Next.js, and TypeScript for optimal performance and user experience.",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"]
    },
    {
      icon: "🛒",
      title: "E-commerce Solutions", 
      description: "Complete online stores with secure payment processing, inventory management, and seamless customer experiences.",
      features: ["Shopify Development", "Payment Integration", "Inventory Management", "Mobile Optimization"]
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Mobile-optimized websites that look and perform perfectly on all devices, from smartphones to desktops.",
      features: ["Mobile-First Approach", "Cross-Browser Testing", "Touch-Friendly UI", "Fast Loading"]
    },
    {
      icon: "🚀",
      title: "SEO & Performance",
      description: "Search engine optimization and performance tuning to help your website rank higher and load faster.",
      features: ["SEO Optimization", "Core Web Vitals", "Site Speed", "Analytics Setup"]
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that convert visitors into customers with modern aesthetics and user-centered approach.",
      features: ["User Experience Design", "Modern Aesthetics", "Conversion Optimization", "Brand Consistency"]
    },
    {
      icon: "⚙️",
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management", "Technical Support"]
    }
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Services I Offer</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Comprehensive web development services to help your business succeed online with modern, 
            scalable, and user-friendly solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-gray to-primary-dark p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-accent-yellow hover:shadow-lg hover:shadow-accent-yellow/20">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-text-gray mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-text-gray">
                    <span className="text-accent-yellow mr-3">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#contact" className="btn-accent">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection