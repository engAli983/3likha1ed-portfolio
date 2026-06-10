import React from 'react';
import { useInView } from '../hooks/useInView';

const servicesData = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Front-End Development',
    description: 'Transforming UI/UX designs (Figma, Adobe XD) into pixel-perfect, interactive, and semantic code using modern HTML, CSS, and JavaScript.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Dynamic Web Applications',
    description: 'Building fast, interactive single-page applications (SPAs) featuring complex DOM manipulation, state management, and seamless REST API integrations.',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Responsive UI & Optimization',
    description: 'Crafting mobile-first, fully responsive layouts with smooth animations, ensuring a flawless and accessible user experience across all devices and screen sizes.',
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Interactive UI & Animations',
    description: 'Bringing websites to life with engaging CSS animations, scroll effects, and smooth JavaScript interactions that captivate users.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'API Integration & Data Handling',
    description: 'Connecting front-end interfaces with external REST APIs to fetch, process, and display real-time data seamlessly.',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Maintenance & UI Upgrades',
    description: 'Refactoring legacy code, fixing UI bugs, and adding modern features to existing websites to keep them fast, secure, and up-to-date.',
  },
];

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-20 bg-[#151f32]">
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main inline-block relative font-cairo">
            My <span className="text-primary">Services</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={index}
              className="bg-bg-card p-8 rounded-xl shadow-card transition-all duration-300 transform hover:-translate-y-2.5 border-b-4 border-transparent hover:border-primary text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-[#0f172a] rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <i className={`${service.icon} text-2xl text-primary group-hover:text-white transition-colors duration-300`}></i>
              </div>
              <h3 className="text-2xl font-semibold text-text-main mb-4 font-cairo">
                {service.title}
              </h3>
              <p className="text-text-muted font-cairo leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
