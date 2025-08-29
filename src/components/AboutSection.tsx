const AboutSection = () => {
  const technologies = [
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Next.js", icon: "https://img.icons8.com/?size=100&id=r2OarXWQc7B6&format=png&color=FFFFFF" },
    { name: "TypeScript", icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },
    { name: "JavaScript", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "HTML5", icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Git", icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" },
  ]

  const skills = [
    "Full-Stack Development",
    "Responsive Web Design", 
    "E-commerce Development",
    "SEO Optimization",
    "Performance Optimization",
    "API Integration",
    "Database Design",
    "Version Control (Git)",
    "Project Management",
    "UI/UX Design",
    "Testing & Debugging",
    "Cloud Deployment"
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-black to-primary-dark"></div>
      
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-48 h-48 bg-accent-yellow/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-title mb-8">About Me</h2>
            <div className="space-y-6 text-text-gray text-lg leading-relaxed">
              <p>
                I'm a versatile software developer with <strong className="text-accent-yellow">6+ years of experience</strong> 
                creating exceptional web solutions. My journey spans from freelance web development to co-founding 
                successful businesses, combining technical expertise with business acumen.
              </p>
              <p>
                With a strong foundation in modern web technologies and a passion for clean, efficient code, 
                I help businesses establish powerful online presences that drive growth and engagement.
              </p>
              <p>
                Having <strong className="text-accent-blue">co-founded multiple successful ventures</strong>, 
                I understand the entrepreneurial mindset and business challenges firsthand. This experience 
                allows me to create solutions that not only look great but also drive real business growth 
                and deliver measurable results for my clients.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-accent-yellow/10 rounded-xl border border-accent-yellow/20">
                <div className="text-3xl font-bold text-accent-yellow">6+</div>
                <div className="text-sm text-text-gray">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
                <div className="text-3xl font-bold text-accent-blue">50+</div>
                <div className="text-sm text-text-gray">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-accent-yellow/10 rounded-xl border border-accent-yellow/20">
                <div className="text-3xl font-bold text-accent-yellow">3</div>
                <div className="text-sm text-text-gray">Businesses Co-Founded</div>
              </div>
              <div className="text-center p-4 bg-accent-blue/10 rounded-xl border border-accent-blue/20">
                <div className="text-3xl font-bold text-accent-blue">100%</div>
                <div className="text-sm text-text-gray">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-accent-yellow mb-8">Technologies & Skills</h3>
            
            {/* Technologies Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mb-8">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-icon-item">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="w-12 h-12 mb-2 transition-all duration-300 hover:scale-110 filter brightness-90 hover:brightness-110 object-contain"
                  />
                  <span className="text-xs font-semibold text-white">{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item text-xs">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection