import React from 'react';
import { useInView } from '../hooks/useInView';

const skillsData = [
  { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34f26' },
  { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#1572b6' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f7df1e' },
  { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
  { name: 'Tailwind CSS', icon: 'fa-solid fa-wind', color: '#38bdf8' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github', color: '#f8fafc' },
];

export default function Skills() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-20 bg-bg-dark">
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main inline-block relative font-cairo">
            My <span className="text-primary">Skills</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="bg-bg-card flex flex-col items-center justify-center p-6 rounded-xl shadow-card transition-transform duration-300 hover:scale-105 border border-transparent hover:border-primary"
            >
              <i 
                className={`${skill.icon} text-5xl mb-4`} 
                style={{ color: skill.color }}
              ></i>
              <span className="text-lg font-semibold text-text-main font-cairo">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
