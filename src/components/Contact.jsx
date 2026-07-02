import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useInView } from '../hooks/useInView';

const socialLinks = [
  { href: 'https://www.facebook.com/ali.khaled.6.6.06/?locale=ar_AR', icon: 'fa-brands fa-facebook-f',  cls: 'social-facebook'  },
  { href: 'https://www.linkedin.com/in/ali-khaled-014b21344/',         icon: 'fa-brands fa-linkedin',     cls: 'social-linkedin'  },
  { href: 'https://www.instagram.com/a17a6_6/',                         icon: 'fa-brands fa-instagram',   cls: 'social-instagram' },
];

export default function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus]   = useState({ type: '', message: '' });

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    emailjs
      .sendForm('service_vpew8b6', 'template_wc88al8', form.current, 'tnxt5D3YOAAPOPjCv')
      .then(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        e.target.reset();
      })
      .catch(err => {
        setLoading(false);
        setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again later.' });
        console.error(err.text);
      });
  };

  return (
    <section id="contact" className="py-[100px]">
      <div
        ref={ref}
        className={`w-[90%] max-w-[1200px] mx-auto px-[15px] fade-in${isVisible ? ' visible' : ''}`}
      >
        {/* Section Header */}
        <div className="mb-[60px] text-center">
          <p className="text-primary font-semibold uppercase tracking-[2px]">Get In Touch</p>
          <h2 className="text-[40px] font-bold mb-[15px] text-white">Contact Me</h2>
        </div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">

          {/* Info */}
          <div>
            <h3 className="text-[28px] font-bold mb-5">Let's Talk</h3>
            <p className="text-text-muted mb-[30px]">
              Have a project in mind or want to collaborate? I'm open to opportunities
              and would love to hear from you.
            </p>

            {/* Info Items */}
            {[
              { icon: 'fa-solid fa-location-dot', label: 'Address', value: 'Sharqiya, Abu Kabir, Egypt' },
              { icon: 'fa-solid fa-envelope',     label: 'Email',   value: 'ali.khaled.akm.2006.19@gmail.com' },
            ].map(item => (
              <div
                key={item.label}
                className="flex items-center gap-5 mb-[30px] group"
              >
                <div
                  className="w-[55px] h-[55px] text-primary rounded-full flex justify-center items-center text-[20px] flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                  style={{ background: 'rgba(255,51,95,0.1)' }}
                >
                  <i className={item.icon} />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">{item.label}</h4>
                  <p className="text-text-muted text-[15px]">{item.value}</p>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="mt-[30px]">
              <ul className="flex items-center gap-[15px]">
                {socialLinks.map(s => (
                  <li key={s.cls} className={`w-[50px] h-[50px] bg-bg-card flex items-center justify-center cursor-pointer rounded transition-all duration-300 ${s.cls}`}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer">
                      <i className={s.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div
            className="bg-bg-card p-[40px] rounded-[12px]"
            style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)' }}
          >
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              {[
                { name: 'name',    type: 'text',  placeholder: 'Your Name' },
                { name: 'email',   type: 'email', placeholder: 'Your Email' },
                { name: 'subject', type: 'text',  placeholder: 'Subject' },
              ].map(field => (
                <div key={field.name} className="mb-5">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    required
                    className="w-full py-[15px] px-[15px] bg-bg-dark border border-[#2d3b55] rounded-lg text-white font-[inherit] text-[15px] transition-all duration-300 focus:outline-none focus:border-primary"
                  />
                </div>
              ))}

              <div className="mb-5">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  className="w-full py-[15px] px-[15px] bg-bg-dark border border-[#2d3b55] rounded-lg text-white font-[inherit] text-[15px] transition-all duration-300 focus:outline-none focus:border-primary resize-none"
                  style={{ height: '150px' }}
                />
              </div>

              {status.message && (
                <div
                  className={`mt-[15px] py-3 px-4 rounded-lg font-semibold text-center ${
                    status.type === 'success'
                      ? 'text-green-400'
                      : 'text-red-400'
                  }`}
                  style={{
                    background: status.type === 'success'
                      ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)',
                    border: status.type === 'success'
                      ? '1px solid rgba(34,197,94,0.3)' : '1px solid rgba(239,68,68,0.3)',
                  }}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-[10px] py-3 rounded-full font-semibold border-2 border-transparent bg-primary text-white hover:bg-transparent hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer"
                style={{ opacity: loading ? 0.7 : 1 }}
              >
                {loading
                  ? <><i className="fa-solid fa-spinner fa-spin mr-2" />Sending...</>
                  : 'Send Message'
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
