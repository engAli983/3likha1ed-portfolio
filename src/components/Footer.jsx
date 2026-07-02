import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] py-[30px] text-center border-t border-[#1e293b]">
      <div className="w-[90%] max-w-[1200px] mx-auto px-[15px]">
        <p className="text-text-muted">
          Created By{' '}
          <a href="#home" className="text-primary font-bold hover:underline">Ali Khaled</a>
          {' '}| &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
