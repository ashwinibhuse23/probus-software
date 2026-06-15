import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CommonButton from './CommonButton';
import logo from '../assets/Images/Probussoftware.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  return (
    <header className={`fixed w-full z-50 top-0 transition-all duration-700 ease-out ${scrolled ? 'py-4 bg-[#0a0f1c]/70 backdrop-blur-2xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <a href="#" className="flex-shrink-0 cursor-pointer group flex items-center gap-3 mr-4 hover:scale-105 active:scale-95 transition-all duration-300 opacity-0 animate-slide-in-left">
          <img 
            src={logo} 
            alt="Probus Software Logo" 
            className="h-10 sm:h-11 md:h-[50px] w-auto group-hover:opacity-90 filter brightness-0 invert drop-shadow-md" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md px-2 py-1.5 transition-all duration-300 hover:bg-white/10 hover:border-white/20 shadow-sm opacity-0 animate-fade-in-down delay-300">
          {['Home', 'About Us', 'Solutions', 'Industries', 'Clients', 'Resources', 'Career'].map((item) => (
            <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="px-4 py-1.5 text-[15px] font-medium text-slate-200 hover:text-white transition-all duration-300 rounded-full hover:bg-gradient-to-r hover:from-[#0070c2] hover:to-blue-400 hover:-translate-y-0.5 active:scale-95">
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4 opacity-0 animate-slide-in-right delay-600">
          <CommonButton
            label="Contact Us"
            onClick={() => navigate('/contact-us')}
            endIcon={
              <span className="flex items-center justify-center w-[22px] h-[22px] bg-white rounded-full transition-transform duration-300 group-hover:scale-110 z-10 relative">
                <svg className="w-2.5 h-2.5 text-slate-900 transition-transform duration-300 group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </span>
            }
            className="bubbles group hidden md:inline-flex bg-transparent border border-white/40 text-white rounded-full transition-all duration-300 tracking-widest uppercase text-xs px-5 py-2"
          />

          {/* Menu Button (Mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="group relative lg:hidden z-50 flex flex-col justify-center items-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-transparent border border-white/20 hover:bg-white/10 active:scale-95 transition-all duration-300 focus:outline-none gap-1.5"
          >
            <span className={`block w-4 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
            <span className={`block w-4 h-[2px] bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-[#0a0f1c]/95 backdrop-blur-3xl transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-28 px-6 pb-8">
          <div className="flex flex-col space-y-6 text-center mt-10">
            {['Home', 'About Us', 'Solutions', 'Industries', 'Clients', 'Resources', 'Career'].map((item) => (
              <Link key={item} to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} onClick={() => setIsOpen(false)} className="text-2xl font-light text-slate-300 hover:text-white transition-colors inline-block">
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-auto flex flex-col gap-4 w-full max-w-sm mx-auto">
            
            <CommonButton
              label="Contact Us"
              onClick={() => { navigate('/contact-us'); setIsOpen(false); }}
              fullWidth={true}
              className="py-4 text-base bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg border-none"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
