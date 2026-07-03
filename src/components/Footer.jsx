import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] py-[40px] text-center border-t border-[#1e293b]">
      <div className="w-[90%] max-w-[1200px] mx-auto px-[15px]">

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-4 mb-[20px]">
          <a
            href="https://www.linkedin.com/in/ali-khaled-014b21344/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-linkedin text-lg" />
          </a>
          <a
            href="https://www.facebook.com/ali.khaled.6.6.06/?locale=ar_AR"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-facebook-f text-base" />
          </a>
          <a
            href="https://www.instagram.com/a17a6_6/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-instagram text-lg" />
          </a>
          <a
            href="https://github.com/engAli983"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 hover:scale-110 transition-all duration-300"
          >
            <i className="fa-brands fa-github text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-text-muted text-[14px]">
          Created By{' '}
          <a href="#home" className="text-primary font-bold hover:underline">Ali Khaled</a>
          {' '}| &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
