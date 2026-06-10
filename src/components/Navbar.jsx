import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background and blur effect on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Active section tracking
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#0f172a]/95 backdrop-blur shadow-card py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-3xl font-bold text-text-main font-cairo">
            Eng-A<span className="text-primary">li</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-semibold font-cairo transition-colors duration-300 relative ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-main hover:text-primary'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                    activeSection === link.href.substring(1) ? 'scale-x-100' : 'scale-x-0'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-text-main focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Slide */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-bg-dark z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pt-20 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute top-5 right-6 text-2xl text-text-muted hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-xl font-semibold font-cairo transition-colors duration-300 ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-text-main hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
