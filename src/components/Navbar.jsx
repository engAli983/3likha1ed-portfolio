import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home',     href: '#home'     },
  { name: 'About',    href: '#about'    },
  { name: 'Services', href: '#services' },
  { name: 'Skills',   href: '#skills'   },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact',  href: '#contact'  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll progress computation
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);

      // Active section highlight logic
      let current = 'home';
      for (const link of navLinks) {
        const el = document.getElementById(link.href.substring(1));
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = link.href.substring(1);
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar with custom glow effect */}
      <div 
        className="scroll-progress-bar" 
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 10px rgba(255, 51, 95, 0.8), 0 0 5px rgba(56, 189, 248, 0.5)'
        }} 
      />

      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-bg-dark/85 backdrop-blur-md border-b border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.2)]' 
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-[90%] max-w-[1200px] mx-auto px-4 flex justify-between items-center">
          
          {/* Logo with Gradient Text */}
          <a 
            href="#home" 
            className="text-[28px] font-extrabold tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent transition-all duration-300 hover:scale-105"
          >
            3<span className="bg-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#ff6b8b]">likha1ed</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-[14px] lg:text-[15px] font-semibold transition-all duration-300 ${
                    isActive 
                      ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_2px_15px_rgba(255,51,95,0.15)]' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Interactive Mobile Menu Toggle (Chic Custom Burger Icon) */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-5 bg-transparent border-none cursor-pointer z-[9999] focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span 
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-left ${
                isMobileMenuOpen ? 'rotate-45 translate-x-[2px] -translate-y-[1px] bg-primary' : ''
              }`} 
            />
            <span 
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`} 
            />
            <span 
              className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 origin-left ${
                isMobileMenuOpen ? '-rotate-45 translate-x-[2px] translate-y-[1px] bg-primary' : ''
              }`} 
            />
          </button>
        </div>
      </header>

      {/* Modern Overlay Mobile Menu (Glassmorphism & Staggered animation wrapper) */}
      <div
        className={`fixed inset-0 w-full h-screen z-[999] bg-bg-dark/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Glow effect in background */}
        <div className="absolute w-[200px] h-[200px] bg-primary/15 rounded-full blur-[80px] top-[10%] left-[10%]" />
        <div className="absolute w-[200px] h-[200px] bg-[#38bdf8]/10 rounded-full blur-[80px] bottom-[15%] right-[10%]" />

        {/* Navigation Links inside Mobile Menu */}
        <nav className="flex flex-col items-center gap-6 relative z-10 w-full px-8">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                }}
                className={`w-full max-w-[280px] text-center py-3 rounded-2xl text-[20px] font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_4px_20px_rgba(255,51,95,0.15)] scale-105'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Social Icons at the bottom of Mobile Menu */}
        <div 
          className="absolute bottom-12 flex gap-6 z-10 transition-all duration-500 delay-[350ms]"
          style={{
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        >
          <a
            href="https://www.linkedin.com/in/ali-khaled-014b21344/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="fa-brands fa-linkedin text-xl" />
          </a>
          <a
            href="https://www.facebook.com/ali.khaled.6.6.06/?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="fa-brands fa-facebook-f text-lg" />
          </a>
          <a
            href="https://www.instagram.com/a17a6_6/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
          >
            <i className="fa-brands fa-instagram text-xl" />
          </a>
        </div>
      </div>
    </>
  );
}
