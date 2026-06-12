import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const stats = [
    {
      value: 11,
      suffix: '+',
      label: 'Years of Experience',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    },
    {
      value: 25000,
      suffix: '+',
      label: 'Experience in Hours',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    },
    {
      value: 350,
      suffix: '+',
      label: 'Projects Delivered',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.5 10.5L21 3m-6.5 1.5l1.5-1.5L21 3M3 21l3.5-3.5L5 16l-2 5zm3-5L3 21m12-4.5a6.5 6.5 0 10-9.19-9.19L3.5 9.62c-.75.75-1.07 1.84-.87 2.9l.48 2.45a2.5 2.5 0 001.76 1.76l2.45.48c1.06.2 2.15-.12 2.9-.87l2.3-2.3a6.5 6.5 0 001.48.46" /> // Rocket approximation
    },
    {
      value: 300,
      suffix: '+',
      label: 'Happy Clients',
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    }
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content (staggered fade up)
      gsap.from('.animate-left', {
        y: 40,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Animate right image with timeline
      const imageTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      imageTl.from('.animate-right', {
        duration: 2.5,
        opacity: 0,
        scale: 0.5,
        rotation: -180,
        ease: "back.out(1.2)"
      });

      // Animate button entrance (slightly up)
      gsap.from('.animate-btn', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });

      // Animate the floating badge pop in, then float continuously
      gsap.fromTo('.animate-badge',
        { scale: 0.5, opacity: 0, y: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          delay: 1.2,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          onComplete: () => {
            gsap.to('.animate-badge', {
              y: -10,
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut'
            });
          }
        }
      );

      // Animate the background blob (fade in, then rotate endlessly)
      gsap.fromTo('.animate-blob',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
          onComplete: () => {
            gsap.to('.animate-blob', {
              rotation: 360,
              duration: 25,
              repeat: -1,
              ease: 'linear'
            });
          }
        }
      );

      // Animate Stats Card Entrance
      gsap.from('.animate-stats', {
        y: 60,
        opacity: 0,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.animate-stats',
          start: 'top 85%',
        }
      });

      // Animate individual stats blocks staggering
      gsap.from('.stat-item', {
        y: 40,
        opacity: 0,
        duration: 2,
        stagger: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.animate-stats',
          start: 'top 80%',
        }
      });

      // Counter Animation (slower)
      const numbers = gsap.utils.toArray('.stat-number');
      numbers.forEach((num) => {
        const target = parseInt(num.getAttribute('data-target'));
        gsap.to(num, {
          innerHTML: target,
          duration: 5,
          snap: { innerHTML: 1 },
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.animate-stats',
            start: 'top 80%',
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="pt-20 pb-10 relative overflow-hidden bg-slate-50 -mt-10 z-20 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
      {/* Modern SaaS background styling */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="animate-left inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-8">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50">
                <span className="w-2 h-2 rounded-full bg-[#0070c2]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase pr-2">About Probus</span>
            </div>

            <h2 className="animate-left text-3xl sm:text-[32px] font-outfit font-bold text-slate-900 leading-[1.2] mb-6 tracking-tight">
              <span className="whitespace-nowrap">Building Intelligent Solutions for </span> <br />
              <span className="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">Modern Enterprises</span>
            </h2>

            <p className="animate-left text-base text-slate-600 mb-8 leading-relaxed">
              Probus Software is a technology-driven organization committed to helping businesses achieve operational excellence through enterprise software and digital innovation. We empower organizations to streamline operations, enhance productivity, improve agility, and drive sustainable growth in an increasingly digital world.
            </p>

            <div className="animate-left mb-10 w-full">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-outfit">Our expertise includes:</h3>

              <ul className="space-y-6 mb-8">
                {[
                  { title: "HRMS & Payroll Solution", desc: "that simplify workforce administration and ensure compliance." },
                  { title: "ERP Platform", desc: "that integrate and optimize core business processes." },
                  { title: "Workforce Management Solution", desc: "that improve productivity, visibility, and operational efficiency." },
                  { title: "Custom Software Development", desc: "tailored to unique business requirements and digital transformation goals." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 group">
                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#0070c2] transition-colors duration-300 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-[#0070c2] group-hover:bg-white transition-colors duration-300"></div>
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">
                      <strong className="text-slate-900 font-semibold">{item.title}</strong> {item.desc}
                    </p>
                  </li>
                ))}
              </ul>

            </div>

            <Link to="/about" className="slice animate-btn -mt-8 group">
              <span className="text flex items-center gap-2">
                Learn More About Us
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Right Image Container */}
          <div className="animate-right lg:col-span-7 lg:pl-12 mt-12 lg:mt-0 flex items-center justify-center relative h-full">
            {/* Background Decorative Blob */}
            <div className="animate-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100/50 to-indigo-50/50 rounded-full blur-3xl -z-10"></div>

            <div className="relative w-full max-w-lg lg:max-w-xl rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,112,194,0.15)] border-[8px] border-white group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0070c2]/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10 pointer-events-none"></div>

              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Corporate Team Meeting"
                className="w-full h-[380px] sm:h-[460px] lg:h-[520px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Floating Badge - Modern Glassmorphism */}
              <div className="animate-badge absolute -bottom-3 left-2 sm:bottom-4 sm:left-4 z-20 bg-white/80 backdrop-blur-xl p-2 pr-4 rounded-[1.5rem] shadow-[0_12px_32px_rgba(0,112,194,0.15)] border-2 border-white flex items-center gap-3 transform group-hover:-translate-y-1.5 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(0,112,194,0.25)] transition-all duration-500">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#0070c2] to-blue-400 text-white shadow-inner">
                  <span className="absolute inset-0 rounded-full border border-white/40"></span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-xl font-black font-outfit text-slate-900">15<span className="text-[#0070c2]">+</span></span>
                  </div>
                  <div className="text-[9px] font-bold text-slate-500 tracking-wider uppercase">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Dark Blue Stats Card */}
        <div className="animate-stats mt-16 relative bg-gradient-to-br from-[#111827] to-[#1e293b] rounded-2xl p-5 lg:p-6 shadow-xl overflow-hidden border border-slate-700/50">
          {/* Subtle bottom glow/texture */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 md:divide-x md:divide-slate-700/60 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item flex flex-col items-center justify-center text-center group px-3">
                {/* Glowing Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.15)] flex items-center justify-center mb-3 transform group-hover:-translate-y-1 transition-all duration-500">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {stat.icon}
                  </svg>
                </div>

                {/* Number */}
                <h3 className="text-2xl lg:text-3xl font-bold font-outfit text-white mb-1 tracking-tight group-hover:text-blue-100 transition-colors duration-300">
                  <span className="stat-number" data-target={stat.value}>0</span>{stat.suffix}
                </h3>

                {/* Label */}
                <p className="text-[11px] lg:text-xs font-medium text-slate-400 tracking-wide mb-2 uppercase group-hover:text-slate-300 transition-colors duration-300">
                  {stat.label}
                </p>

                {/* Small blue dash */}
                <div className="w-5 h-[2px] rounded-full bg-[#0070c2] group-hover:w-8 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
