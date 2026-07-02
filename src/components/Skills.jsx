import React from 'react';
import { useInView } from '../hooks/useInView';

const TailwindIcon = () => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="text-accent w-[50px] h-[50px] mb-[15px]">
    <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
  </svg>
);

const skills = [
  { name: 'HTML5',     icon: 'fa-brands fa-html5',      color: '#e34f26' },
  { name: 'CSS3',      icon: 'fa-brands fa-css3-alt',   color: '#1572b6' },
  { name: 'JavaScript',icon: 'fa-brands fa-js',          color: '#f7df1e' },
  { name: 'React',     icon: 'fa-brands fa-react',      color: '#61dafb' },
  { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap',  color: '#7952b3' },
  { name: 'Git & GitHub', icon: 'fa-brands fa-github',  color: '#f8fafc' },
];

export default function Skills() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section id="skills" className="py-[100px]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        {/* Section Header */}
        <div className="mb-[60px] text-center">
          <p className="text-primary font-semibold uppercase tracking-[2px]">My Stack</p>
          <h2 className="text-[40px] font-bold mb-[15px] text-white">Skills &amp; Technologies</h2>
        </div>

        {/* Skills Grid */}
        <div
          className="grid gap-[30px] text-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))' }}
        >
          {skills.map(skill => (
            <div
              key={skill.name}
              className="bg-bg-card py-[30px] px-5 rounded-[12px] transition-all duration-300 border-2 border-transparent hover:scale-105 hover:border-primary hover:bg-[#2d3b55]"
            >
              <i className={`${skill.icon} text-[50px] mb-[15px] block`} style={{ color: skill.color }} />
              <h4 className="text-base font-semibold">{skill.name}</h4>
            </div>
          ))}

          {/* Tailwind CSS — SVG icon */}
          <div className="bg-bg-card py-[30px] px-5 rounded-[12px] transition-all duration-300 border-2 border-transparent hover:scale-105 hover:border-primary hover:bg-[#2d3b55] flex flex-col items-center">
            <TailwindIcon />
            <h4 className="text-base font-semibold">Tailwind</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
