import React from 'react';
import { useInView } from '../hooks/useInView';

export default function About() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 bg-bg-dark">
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main inline-block relative font-cairo">
            About <span className="text-primary">Me</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-end pr-0 md:pr-10">
            <div className="relative">
              <img 
                src="/image/Ali-Khaled1.jpg" 
                alt="Ali Khaled" 
                className="w-72 md:w-80 h-auto rounded-xl object-cover relative z-10"
                style={{ boxShadow: '-20px 20px 0 #ff335f' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-text-main mb-4 font-cairo">
              I'm Ali Khaled, A <span className="text-primary">Front-End Developer</span>
            </h3>
            <p className="text-text-muted mb-4 leading-relaxed text-lg font-cairo">
              I am a dedicated Front-End Developer with a strong academic foundation in Computer Science. My passion lies in web development and transforming complex ideas into elegant, user-friendly web interfaces.
            </p>
            <p className="text-text-muted mb-6 leading-relaxed text-lg font-cairo">
              I am highly proficient in HTML, CSS, and modern JavaScript, and I am continually expanding my expertise by building hands-on projects with advanced frontend frameworks. I believe in writing clean, maintainable code that delivers real-world value.
            </p>
            
            <ul className="mb-8 space-y-3 text-left">
              <li className="text-text-muted font-cairo text-lg flex items-center">
                <i className="fa-solid fa-check-circle text-primary mr-3 text-xl"></i> Web Development (Frontend Focus)
              </li>
              <li className="text-text-muted font-cairo text-lg flex items-center">
                <i className="fa-solid fa-check-circle text-primary mr-3 text-xl"></i> Responsive UI/UX Design
              </li>
              <li className="text-text-muted font-cairo text-lg flex items-center">
                <i className="fa-solid fa-check-circle text-primary mr-3 text-xl"></i> Clean & Modern Code
              </li>
            </ul>

            <a 
              href="/docs/Ali_Khaled_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Ali_Khaled_FrontEnd_CV.pdf"
              className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors shadow-card duration-300 group"
            >
              <span>Download CV</span>
              <i className="fa-solid fa-download ml-3 group-hover:translate-y-1 transition-transform"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
