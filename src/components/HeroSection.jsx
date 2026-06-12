import React from 'react';
import CommonButton from './CommonButton';
import heroVideo from '../assets/Images/hero1.mp4';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[115vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c]/80 via-[#0a0f1c]/50 to-transparent z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col justify-center h-full pt-20">
        <div className="max-w-3xl">
         
         

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-white tracking-tight leading-[1.2] mb-6 opacity-0 animate-fade-in-up anim-delay-500 text-left">
            Empowering Organizations  <br className="hidden sm:block" />
             <span className="text-white"> With Enterprise Software and Digital Innovation.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed opacity-0 animate-fade-in-up anim-delay-700 text-left font-light">
            Trusted enterprise solutions that connect people, processes, and technology for sustainable growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 opacity-0 animate-fade-in-up anim-delay-900">
            <CommonButton
              label="Explore More"
              searchIcon={true}
              onClick={() => navigate('/services')}
              className="btn-neon bg-transparent border border-white/40 text-white rounded-full tracking-widest uppercase text-xs px-5 py-2.5"
            />

            <CommonButton
              label="Lets Talk"
              onClick={() => navigate('/contact')}
              icon={
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.973-6.869-6.869l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              }
              className="btn-neon bg-transparent border border-white/40 text-white rounded-full tracking-widest uppercase text-xs px-5 py-2.5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
