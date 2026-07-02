import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';
import { aliKhaledHero } from '../assets/index.js';

const fullText = 'Front-End Developer';

export default function Hero() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;
    const type = () => {
      setTypedText(fullText.substring(0, index));
      let speed = isDeleting ? 70 : 150;
      if (!isDeleting && index === fullText.length) { speed = 1500; isDeleting = true; }
      else if (isDeleting && index === 0)           { isDeleting = false; speed = 500; }
      index = isDeleting ? index - 1 : index + 1;
      timer = setTimeout(type, speed);
    };
    timer = setTimeout(type, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15,23,42,0.8), rgba(15,23,42,0.9)), url('${aliKhaledHero}')`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        <div className="max-w-[700px]">
          <p className="text-2xl text-primary mb-[10px] font-semibold">Hello, I'm</p>

          <h1 className="text-[60px] leading-[1.1] mb-5 font-extrabold">Ali Khaled</h1>

          {/* Typed text — .typed-cursor uses @keyframes blink from config */}
          <div className="text-[32px] text-accent font-semibold mb-5 flex items-center gap-1 min-h-[44px]">
            {typedText}
            <span className="typed-cursor" />
          </div>

          <p className="text-lg text-text-muted mb-[30px] max-w-[600px]">
            Dedicated Front-End Developer specializing in crafting modern,
            responsive, and intuitive web interfaces. Ready to tackle your
            project's challenges and build a digital experience your users will love.
          </p>

          <div className="flex flex-wrap gap-[15px]">
            <a
              href="#contact"
              className="inline-block px-[30px] py-3 rounded-full font-semibold border-2 border-transparent bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="inline-block px-[30px] py-3 rounded-full font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
