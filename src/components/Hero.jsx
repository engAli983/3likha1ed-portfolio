import React, { useState, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

export default function Hero() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  
  const [typedText, setTypedText] = useState('');
  const fullText = "Front-End Developer";
  
  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      setTypedText(fullText.substring(0, index));
      
      let typeSpeed = isDeleting ? 70 : 150; // faster when deleting

      if (!isDeleting && index === fullText.length) {
        typeSpeed = 1500; // pause at the end of typing
        isDeleting = true;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        typeSpeed = 500; // pause before typing again
      }

      index = isDeleting ? index - 1 : index + 1;
      timer = setTimeout(type, typeSpeed);
    };

    timer = setTimeout(type, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url('/image/ali-khaled.jpg')` 
      }}
    >
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 z-10 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-2 font-cairo">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold text-text-main mb-4 font-cairo drop-shadow-lg">
            Ali Khaled
          </h1>
          <h3 className="text-3xl md:text-4xl text-accent font-semibold mb-6 h-10 flex items-center">
            {typedText}
            <span className="w-1 h-8 bg-accent ml-1 animate-pulse"></span>
          </h3>
          <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-2xl font-cairo">
            I build interactive, responsive, and modern web applications with a strong focus on design and user experience. Let's turn your ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-hover transition-colors shadow-[0_0_15px_rgba(255,51,95,0.4)] hover:shadow-[0_0_25px_rgba(255,51,95,0.6)] duration-300"
            >
              Hire Me
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
