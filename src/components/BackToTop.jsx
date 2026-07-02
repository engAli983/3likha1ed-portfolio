import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggle = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return isVisible ? (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-[30px] right-[30px] w-12 h-12 bg-primary text-white border-none rounded-full flex items-center justify-center text-lg cursor-pointer transition-all duration-300 z-[999] hover:bg-primary-hover hover:-translate-y-1"
      style={{ boxShadow: '0 0 15px rgba(255,51,95,0.5)' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(255,51,95,0.7)'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 15px rgba(255,51,95,0.5)'}
    >
      <i className="fa-solid fa-arrow-up" />
    </button>
  ) : null;
}
