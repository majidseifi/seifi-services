const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/majidseifi",
      icon: "fab fa-github"
    },
    {
      name: "LinkedIn", 
      url: "https://linkedin.com/in/majidseifi",
      icon: "fab fa-linkedin"
    },
    {
      name: "Twitter",
      url: "https://x.com/Maj_Seifi", 
      icon: "fab fa-twitter"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/maj_seifi/",
      icon: "fab fa-instagram"
    },
    {
      name: "Email",
      url: "mailto:majid@seifi.dev",
      icon: "fas fa-envelope"
    }
  ]

  return (
    <footer className="py-12 bg-primary-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-4">
              Web Development Services
            </h3>
            <p className="text-text-gray leading-relaxed">
              Professional web development services in Toronto. Specializing in React, Next.js, 
              and modern web technologies to help your business succeed online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-text-gray hover:text-accent-yellow transition-colors">Services</a></li>
              <li><a href="#about" className="text-text-gray hover:text-accent-yellow transition-colors">About</a></li>
              <li><a href="#process" className="text-text-gray hover:text-accent-yellow transition-colors">Process</a></li>
              <li><a href="#portfolio" className="text-text-gray hover:text-accent-yellow transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-text-gray hover:text-accent-yellow transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-text-gray">Custom Web Development</span></li>
              <li><span className="text-text-gray">E-commerce Solutions</span></li>
              <li><span className="text-text-gray">Mobile-First Design</span></li>
              <li><span className="text-text-gray">SEO Optimization</span></li>
              <li><span className="text-text-gray">UI/UX Design</span></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 py-8 border-t border-b border-white/10">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith('http') ? '_blank' : '_self'}
              rel={social.url.startsWith('http') ? 'noopener noreferrer' : ''}
              className="social-link"
              aria-label={social.name}
            >
              <i className={social.icon}></i>
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-text-gray">
            &copy; {currentYear} Majid Seifi Kashani. All rights reserved. | 
            <span className="text-accent-yellow ml-1">Built with Next.js & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer