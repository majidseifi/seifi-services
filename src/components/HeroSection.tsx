'use client'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-center"
        style={{
          backgroundImage: 'url(/majidbackground.png)',
          backgroundPosition: 'center center'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-black/90 via-primary-black/60 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center min-h-screen">
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
              <span className="text-white">Transform Your</span>
              <br />
              <span className="text-accent-yellow">Business</span>
              <br />
              <span className="text-white">Online</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-accent-blue font-semibold mb-6 animate-fade-up animation-delay-300">
              Professional Web Development Services
            </h2>

            <div className="bg-black/60 backdrop-blur-lg p-8 rounded-2xl border border-white/10 mb-8 animate-fade-up animation-delay-600">
              <div className="space-y-4">
                <div className="contact-item">
                  <i className="fas fa-user"></i>
                  <span>Majid Seifi Kashani</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:majid@seifi.dev">majid@seifi.dev</a>
                </div>
                <div className="contact-item">
                  <i className="fab fa-linkedin"></i>
                  <a href="https://linkedin.com/in/majidseifi" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/majidseifi
                  </a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+14162004008">+1 (416) 200-4008</a>
                </div>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Toronto, Ontario - Canada</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-900">
              <a href="#portfolio" className="btn-accent text-center">
                View My Work
              </a>
              <a href="#contact" className="btn-outline-light text-center">
                Get Started Today
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection