import React from 'react';
import { useInView } from '../hooks/useInView';
import { aliKhaled, cvPdf } from '../assets/index.js';

export default function About() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="py-[100px]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        {/* Section Header */}
        <div className="mb-[60px] text-center">
          <p className="text-primary font-semibold uppercase tracking-[2px]">Who I Am</p>
          <h2 className="text-[40px] font-bold mb-[15px] text-white">About Me</h2>
        </div>

        {/* Content — 2 cols on large, 1 col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">

          {/* Image */}
          <div>
            <img
              src={aliKhaled}
              alt="Ali Khaled"
              className="rounded-[12px]"
              style={{ boxShadow: '-20px 20px 0 #ff335f' }}
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-[30px] mb-5">
              I'm Ali Khaled, A <span className="text-primary">Front-End Developer</span>
            </h3>
            <p className="text-text-muted mb-5">
              I am a dedicated Front-End Developer with a strong academic foundation in
              Computer Science. My passion lies in web development and transforming
              complex ideas into elegant, user-friendly web interfaces.
            </p>
            <p className="text-text-muted mb-5">
              I am highly proficient in HTML, CSS, and modern JavaScript, and I am
              continually expanding my expertise by building hands-on projects with
              advanced frontend frameworks. I believe in writing clean, maintainable
              code that delivers real-world value.
            </p>

            <ul className="mb-[30px] space-y-[10px]">
              {[
                'Web Development (Frontend Focus)',
                'Responsive UI/UX Design',
                'Clean & Modern Code',
              ].map(item => (
                <li key={item} className="flex items-center gap-[10px]">
                  <i className="fa-solid fa-check-circle text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={cvPdf}
              target="_blank"
              rel="noopener noreferrer"
              download="Ali_Khaled_FrontEnd_CV.pdf"
              className="inline-block px-[30px] py-3 rounded-full font-semibold border-2 border-transparent bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
