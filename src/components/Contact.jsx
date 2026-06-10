import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const form = useRef();
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm('service_vpew8b6', 'template_wc88al8', form.current, 'tnxt5D3YOAAPOPjCv')
      .then((result) => {
          setLoading(false);
          setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
          e.target.reset();
      }, (error) => {
          setLoading(false);
          setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
          console.error(error.text);
      });
  };

  return (
    <section id="contact" className="py-20 bg-bg-dark">
      <div 
        ref={ref}
        className={`container mx-auto px-6 lg:px-24 fade-in ${isVisible ? 'visible' : ''}`}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-main inline-block relative font-cairo">
            Contact <span className="text-primary">Me</span>
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-semibold text-text-main mb-6 font-cairo">Let's Talk</h3>
            <p className="text-text-muted mb-8 font-cairo leading-relaxed text-lg">
              Feel free to reach out for collaborations, freelance projects, or just to say hi!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-bg-card rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-card">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-text-main">Email</h4>
                  <p className="text-text-muted">aa01033458033aa@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-bg-card rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-card">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-text-main">WhatsApp</h4>
                  <p className="text-text-muted">01033458033</p>
                </div>
              </div>
              <div className="flex items-center group">
                <div className="w-14 h-14 bg-bg-card rounded-full flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-card">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-semibold text-text-main">Location</h4>
                  <p className="text-text-muted">Egypt</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bg-card p-8 rounded-xl shadow-card">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input 
                    type="text" 
                    name="user_name" 
                    placeholder="Your Name" 
                    required 
                    className="w-full bg-[#0f172a] text-text-main border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-cairo"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="user_email" 
                    placeholder="Your Email" 
                    required 
                    className="w-full bg-[#0f172a] text-text-main border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-cairo"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                  className="w-full bg-[#0f172a] text-text-main border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors font-cairo"
                />
              </div>
              <div>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  rows="5"
                  className="w-full bg-[#0f172a] text-text-main border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors resize-none font-cairo"
                ></textarea>
              </div>
              
              {status.message && (
                <div className={`p-4 rounded-lg font-cairo ${status.type === 'success' ? 'bg-green-900/50 text-green-400 border border-green-800' : 'bg-red-900/50 text-red-400 border border-red-800'}`}>
                  {status.message}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary-hover transition-colors duration-300 flex items-center justify-center font-cairo disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <><i className="fa-solid fa-spinner fa-spin mr-2"></i> Sending...</>
                ) : (
                  <>Send Message <i className="fa-regular fa-paper-plane ml-2"></i></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
