import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0b1120] py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://www.facebook.com/ali.khaled.6.6.06/?locale=ar_AR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/in/ali-khaled-014b21344/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/a17a6_6/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/engAli983" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-bg-card flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors duration-300">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <p className="text-text-muted font-cairo">
          Created By <span className="text-primary font-semibold">Ali Khaled</span> | © {currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
