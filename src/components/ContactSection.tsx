'use client'

import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Here you would typically send the form data to your backend
    // For now, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your message! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary-black"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Get In Touch</h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Ready to bring your web project to life? Let's discuss your requirements and 
            create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <a href="mailto:majid@seifi.dev" className="hover:text-accent-yellow transition-colors">
                    majid@seifi.dev
                  </a>
                  <p className="text-sm text-text-gray">Drop me an email anytime</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <a href="tel:+14162004008" className="hover:text-accent-yellow transition-colors">
                    +1 (416) 200-4008
                  </a>
                  <p className="text-sm text-text-gray">Call for urgent inquiries</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span>Toronto, Ontario, Canada</span>
                  <p className="text-sm text-text-gray">Available for local meetings</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <a 
                    href="https://linkedin.com/in/majidseifi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-accent-yellow transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                  <p className="text-sm text-text-gray">Connect professionally</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-yellow/10 to-accent-blue/10 p-6 rounded-2xl border border-accent-yellow/20">
              <h4 className="text-lg font-semibold text-accent-yellow mb-3">Quick Response Guarantee</h4>
              <p className="text-text-gray">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to call directly for immediate assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    required
                    className="form-control w-full"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    required
                    className="form-control w-full"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Subject *"
                  required
                  className="form-control w-full"
                />
              </div>
              
              <div>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project... *"
                  required
                  rows={6}
                  className="form-control w-full resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-accent w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-6 p-4 bg-primary-gray/50 rounded-xl">
              <h5 className="text-accent-blue font-semibold mb-2">What happens next?</h5>
              <ul className="text-sm text-text-gray space-y-1">
                <li>• I'll review your project requirements</li>
                <li>• We'll schedule a free consultation call</li>
                <li>• I'll provide a detailed proposal and timeline</li>
                <li>• We'll start building your amazing website!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection