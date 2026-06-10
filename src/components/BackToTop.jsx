import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,51,95,0.5)] hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300 z-50 group"
          aria-label="Back to top"
        >
          <i className="fa-solid fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
        </button>
      )}
    </>
  );
}
