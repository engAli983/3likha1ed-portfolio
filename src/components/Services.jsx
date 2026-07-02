import React from 'react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: 'fa-solid fa-laptop-code',
    title: 'Front-End Development',
    description: 'Transforming UI/UX designs into pixel-perfect, interactive, and semantic code using modern HTML, CSS, and JavaScript.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Dynamic Web Applications',
    description: 'Building fast, interactive SPAs featuring complex DOM manipulation, state management, and seamless REST API integrations.',
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Responsive UI & Optimization',
    description: 'Crafting mobile-first, fully responsive layouts with smooth animations and an accessible experience across all devices.',
  },
  {
    icon: 'fa-solid fa-wand-magic-sparkles',
    title: 'Interactive UI & Animations',
    description: 'Bringing websites to life with engaging CSS animations, scroll effects, and smooth JavaScript interactions.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'API Integration & Data Handling',
    description: 'Connecting front-end interfaces with external REST APIs to fetch, process, and display real-time data seamlessly.',
  },
  {
    icon: 'fa-solid fa-screwdriver-wrench',
    title: 'Maintenance & UI Upgrades',
    description: 'Refactoring legacy code, fixing UI bugs, and adding modern features to existing websites.',
  },
];

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="services" className="py-[100px] bg-[#151f32]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        {/* Section Header */}
        <div className="mb-[60px] text-center">
          <p className="text-primary font-semibold uppercase tracking-[2px]">What I Offer</p>
          <h2 className="text-[40px] font-bold mb-[15px] text-white">My Services</h2>
        </div>

        {/* Services Grid */}
        <div
          className="grid gap-[30px]"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-bg-card py-[40px] px-[30px] rounded-[12px] text-center transition-all duration-300 border-b-4 border-transparent hover:-translate-y-[10px] hover:border-primary"
            >
              <div className="text-[40px] text-primary mb-5">
                <i className={service.icon} />
              </div>
              <h3 className="text-[22px] font-semibold mb-[15px]">{service.title}</h3>
              <p className="text-text-muted leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
