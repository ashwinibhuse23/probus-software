import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LuTarget,
  LuEye,
  LuShield,
  LuZap,
  LuAward,
  LuGlobe,
  LuUsers,
  LuTrendingUp,
  LuLightbulb,
  LuStar,
  LuRocket,
  LuCode,
  LuBriefcase,
  LuShieldCheck,
  LuLock
} from 'react-icons/lu';
import aboutBg from '../assets/Images/aboutback.jpg';
import about1 from '../assets/Images/about1.jpg';
import about2 from '../assets/Images/about2.jpg';
import whyProbusImg from '../assets/Images/why_probus_workspace.png';
import leaderBalajiSir from '../assets/Leaders/Balajisir.jpeg';
import leaderBhushanSir from '../assets/Leaders/BhushanSir.png';
import leaderDheerendraSir from '../assets/Leaders/Dheerendrasir.jpeg';
import leaderGiriish from '../assets/Leaders/GiriishBodhale.jpeg';
import leaderSamruddhi from '../assets/Leaders/samruddhimam.png';
import leaderSwarajDas from '../assets/Leaders/SwarajDas.jpeg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.hero-reveal', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
      });

      // General Section Reveal
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll('.reveal-element'), {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        });
      });

      // Image Parallax Reveal
      gsap.from('.img-reveal', {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.img-reveal',
          start: 'top 85%',
        }
      });

      // Vision & Mission — dedicated modern animation
      const vmSection = document.querySelector('.vision-mission-section');
      if (vmSection) {
        // Header elements — slow fade up with blur
        gsap.from(vmSection.querySelectorAll('.vm-header'), {
          y: 50,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 1.4,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: vmSection,
            start: 'top 82%',
          }
        });

        // Cards — scale up + fade with slight delay
        gsap.from(vmSection.querySelectorAll('.vm-card'), {
          y: 60,
          opacity: 0,
          scale: 0.92,
          filter: 'blur(6px)',
          duration: 1.6,
          stagger: 0.25,
          ease: 'power2.out',
          delay: 0.3,
          scrollTrigger: {
            trigger: vmSection,
            start: 'top 78%',
          }
        });

        // Card inner content — cascading stagger
        vmSection.querySelectorAll('.vm-card').forEach((card, cardIdx) => {
          gsap.from(card.querySelectorAll('.vm-content'), {
            y: 30,
            opacity: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: 'power2.out',
            delay: 0.6 + (cardIdx * 0.3),
            scrollTrigger: {
              trigger: vmSection,
              start: 'top 78%',
            }
          });
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const coreValues = [
    {
      icon: LuZap,
      title: 'Innovation First',
      desc: 'We continuously adopt emerging technologies to keep our clients ahead of the curve.'
    },
    {
      icon: LuShield,
      title: 'Uncompromised Quality',
      desc: 'Our rigorous QA processes ensure enterprise-grade security and flawless performance.'
    },
    {
      icon: LuUsers,
      title: 'Client-Centricity',
      desc: 'Your goals are our goals. We build partnerships, not just software.'
    },
    {
      icon: LuAward,
      title: 'Excellence Delivered',
      desc: 'Over 20 years of proven track record delivering mission-critical applications.'
    }
  ];

  const leadership = [
    {
      name: 'Mr. Bhushan Puranik',
      role: 'CEO',
      image: leaderBhushanSir,
      objectPosition: 'center top',
    },
    {
      name: 'Mrs. Samruddhi Puranik',
      role: 'Sales and Marketing Director',
      image: leaderSamruddhi,
      objectPosition: 'center top',
    },
    {
      name: 'Mr. Giriish Bodhale',
      role: 'COO for Operations',
      image: leaderGiriish,
      objectPosition: 'center top',
    },
    {
      name: 'Mr. Dheerendra Joshi',
      role: 'COO for KompassHR',
      image: leaderDheerendraSir,
      objectPosition: 'center center',
    },
    {
      name: 'Mr. Balaji Chippa',
      role: 'Head of IT and Support',
      image: leaderBalajiSir,
      objectPosition: 'center center',
    },
    {
      name: 'Mr. Swaraj Dash',
      role: 'COO for ERP',
      image: leaderSwarajDas,
      objectPosition: 'center center',
    },
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen overflow-hidden font-outfit">

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img src={aboutBg} alt="About Us Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526]/90 to-[#0a1526]/70"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Who We Are</span>
          </div>

          <h1 className="hero-reveal text-5xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            Pioneering the future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-400">
              Digital Transformation
            </span>
          </h1>

          <p className="hero-reveal text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            For over two decades, Probus Software has been the trusted technology partner for global enterprises,
            turning complex business challenges into elegant, scalable software solutions.
          </p>
        </div>
      </section>

      {/* 2. Company Overview Section */}
      <section className="reveal-section py-16 lg:py-20 px-4 lg:px-8 relative overflow-hidden bg-slate-50 rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-20">
        {/* Modern SaaS background styling */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')] opacity-60"></div>
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16">

            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <div className="mb-6">
                <div className="reveal-element inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]"></span>
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-2">Company Overview</span>
                </div>

                <h2 className="reveal-element text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 leading-[1.1] mb-4 tracking-tight">
                  Technology Solutions <br />
                  <span className="text-[#0070c2]">Built Around You</span>
                </h2>
                <p className="reveal-element text-base text-slate-600 mb-4 max-w-lg leading-relaxed">
                  We partner with organizations to design, build and implement software solutions that solve real business problems and create long-term impact.
                </p>
              </div>

              {/* Grid of 4 list items */}
              <div className="mb-8 -mt-2">
                <h4 className="reveal-element font-bold text-slate-900 mb-4 text-base">Why organizations trust Probus:</h4>
                <div className="grid sm:grid-cols-2 gap-x-4 gap-y-4">
                  <div className="reveal-element flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-50 text-[#0070c2] flex items-center justify-center mt-0.5">
                      <LuCode className="text-lg" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug">Custom solutions aligned with business goals</p>
                  </div>
                  <div className="reveal-element flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-50 text-[#0070c2] flex items-center justify-center mt-0.5">
                      <LuUsers className="text-lg" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug">Dedicated teams and transparent communication</p>
                  </div>
                  <div className="reveal-element flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-50 text-[#0070c2] flex items-center justify-center mt-0.5">
                      <LuRocket className="text-lg" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug">Agile delivery with faster time-to-market</p>
                  </div>
                  <div className="reveal-element flex items-start gap-3">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-blue-50 text-[#0070c2] flex items-center justify-center mt-0.5">
                      <LuShield className="text-lg" />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug">Scalable solutions built for future growth</p>
                  </div>
                </div>
              </div>



              <div className="flex flex-wrap gap-3">
                <button className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-6 rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#0070c2]/30 text-sm">
                  Discover More &rarr;
                </button>
                <button className="border border-slate-300 hover:border-[#0070c2] text-slate-700 hover:text-[#0070c2] font-semibold py-2.5 px-6 rounded-xl transition-all text-sm bg-white hover:bg-blue-50">
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 mt-8 lg:mt-0 justify-center">
              {/* Large Main Image */}
              <div className="reveal-element relative rounded-[2rem] overflow-hidden shadow-xl w-full h-[300px] lg:h-[400px]">
                <img src={about1} alt="Projects Delivered" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent"></div>

                {/* Top Right Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[#0070c2] flex items-center justify-center text-white shadow-lg backdrop-blur-md">
                  <LuRocket className="text-xl" />
                </div>

                {/* Bottom Left Text */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h4 className="text-3xl font-bold mb-1 tracking-tight">500+</h4>
                  <p className="text-sm font-medium text-slate-200">Projects Delivered</p>
                </div>
              </div>

              {/* Bottom Feature Bar */}
              <div className="reveal-element bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">

                  <div className="flex items-center gap-2 flex-1 pt-3 sm:pt-0 pl-0">
                    <LuShieldCheck className="text-2xl text-[#0070c2] shrink-0" />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">Enterprise<br />Solutions</span>
                  </div>

                  <div className="flex items-center gap-2 flex-1 pt-3 sm:pt-0 sm:pl-4">
                    <LuZap className="text-2xl text-[#0070c2] shrink-0" />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">Fast<br />Delivery</span>
                  </div>

                  <div className="flex items-center gap-2 flex-1 pt-3 sm:pt-0 sm:pl-4">
                    <LuLock className="text-2xl text-[#0070c2] shrink-0" />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">Secure<br />Platforms</span>
                  </div>

                  <div className="flex items-center gap-2 flex-1 pt-3 sm:pt-0 sm:pl-4">
                    <LuGlobe className="text-2xl text-[#0070c2] shrink-0" />
                    <span className="text-[11px] font-bold text-slate-800 leading-tight">Global<br />Clients</span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section */}
      <section className="vision-mission-section py-8 px-4 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #eef1ff 0%, #e8eeff 40%, #edf0ff 100%)' }}>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <div className="vm-header inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-2">Our Purpose</span>
            </div>
            <h2 className="vm-header text-3xl md:text-4xl font-outfit font-bold text-slate-900 mb-2 tracking-tight leading-tight">
              Vision &amp; <span className="text-[#0070c2]">Mission</span>
            </h2>
            <p className="vm-header text-sm text-slate-500">We strive to empower businesses through innovative technology solutions that drive growth, efficiency, and long-term success. Our mission is to deliver excellence, create lasting value, and build trusted partnerships through continuous innovation and customer-focused services.</p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-6">

            {/* ── Vision Card ── */}
            <div className="vm-card relative rounded-2xl overflow-hidden flex flex-col min-h-[360px] group"
              style={{ background: 'linear-gradient(150deg, rgba(240,244,255,0.7) 0%, rgba(246,248,255,0.75) 45%, rgba(255,255,255,0.8) 100%)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', boxShadow: '0 6px 30px rgba(99,102,241,0.1)', border: '1px solid rgba(165,180,252,0.35)' }}>

              {/* Blue orb — top-left */}
              <div className="absolute top-0 left-0 w-36 h-36 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 25% 25%, #c7d2fe 0%, #dde6ff 40%, transparent 70%)', filter: 'blur(16px)', opacity: 0.9 }}></div>

              {/* Dot grid — top-right */}
              <div className="absolute top-5 right-5 pointer-events-none"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(9,1fr)', gap: '5px', opacity: 0.25 }}>
                {Array.from({ length: 54 }).map((_, i) => (
                  <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#6366f1' }}></div>
                ))}
              </div>

              {/* Full-width wave lines — bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-36 pointer-events-none" style={{ filter: 'blur(1px)' }}>
                <svg viewBox="0 0 480 176" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                  {/* Filled wave base */}
                  <path d="M0 176 Q80 130 180 155 Q300 178 400 138 Q445 122 480 138 L480 176 Z" fill="#c7d2fe" opacity="0.22" />
                  {/* Wave stroke lines — stacked */}
                  <path d="M0 168 Q90 122 190 148 Q308 172 406 130 Q447 114 480 130" stroke="#a5b4fc" strokeWidth="1.4" fill="none" opacity="0.6" />
                  <path d="M0 156 Q88 108 188 135 Q306 160 404 117 Q446 100 480 117" stroke="#a5b4fc" strokeWidth="1.3" fill="none" opacity="0.52" />
                  <path d="M0 143 Q86 94 186 122 Q304 147 402 103 Q445 86 480 103" stroke="#a5b4fc" strokeWidth="1.2" fill="none" opacity="0.44" />
                  <path d="M0 130 Q84 80 184 108 Q302 134 400 89 Q444 72 480 89" stroke="#a5b4fc" strokeWidth="1.1" fill="none" opacity="0.36" />
                  <path d="M0 117 Q82 66 182 94 Q300 120 398 74 Q443 57 480 74" stroke="#a5b4fc" strokeWidth="1" fill="none" opacity="0.28" />
                  <path d="M0 104 Q80 52 180 80 Q298 106 396 60 Q442 43 480 60" stroke="#a5b4fc" strokeWidth="0.9" fill="none" opacity="0.20" />
                  {/* Corner blue accent */}
                  <path d="M340 176 Q410 148 480 176 Z" fill="#818cf8" opacity="0.28" />
                  <path d="M290 176 Q385 136 480 162 L480 176 Z" fill="#a5b4fc" opacity="0.16" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: '360px' }}>
                {/* Icon — white circle with blue eye */}
                <div className="vm-content w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ boxShadow: '0 2px 16px rgba(99,102,241,0.18)' }}>
                  <LuEye className="text-xl text-[#0070c2]" />
                </div>

                {/* Label */}
                <p className="vm-content text-[10px] font-extrabold tracking-widest text-[#0070c2] uppercase mb-1.5">Our Vision</p>
                <div className="w-7 h-[2.5px] bg-[#0070c2] rounded-full mb-4"></div>

                {/* Headline */}
                <h3 className="vm-content text-[1.35rem] font-outfit font-bold text-slate-900 leading-snug mb-3">
                  To shape a better<br />digital tomorrow
                </h3>

                {/* Description */}
                <p className="vm-content text-[0.8rem] text-slate-500 leading-relaxed mb-6">
                  To be the world's most trusted software engineering partner, continuously redefining the boundaries of technology to create a more connected, efficient, and intelligent digital world.
                </p>

              </div>
            </div>

            {/* ── Mission Card ── */}
            <div className="vm-card relative rounded-2xl overflow-hidden flex flex-col min-h-[360px] group"
              style={{ background: 'linear-gradient(150deg, rgba(216,228,255,0.72) 0%, rgba(226,235,255,0.76) 30%, rgba(234,240,255,0.8) 60%, rgba(238,242,255,0.82) 100%)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', boxShadow: '0 6px 30px rgba(99,102,241,0.12)', border: '1px solid rgba(165,180,252,0.3)' }}>

              {/* Dot grid — top-right */}
              <div className="absolute top-5 right-5 pointer-events-none"
                style={{ display: 'grid', gridTemplateColumns: 'repeat(9,1fr)', gap: '5px', opacity: 0.25 }}>
                {Array.from({ length: 54 }).map((_, i) => (
                  <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#6366f1' }}></div>
                ))}
              </div>




              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col" style={{ minHeight: '360px' }}>
                {/* Icon — solid blue circle with white rocket */}
                <div className="vm-content w-14 h-14 rounded-full flex items-center justify-center mb-6 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1a8fd4 0%, #0070c2 100%)', boxShadow: '0 4px 16px rgba(0,112,194,0.38)' }}>
                  <LuRocket className="text-xl text-white" />
                </div>

                {/* Label */}
                <p className="vm-content text-[10px] font-extrabold tracking-widest text-[#0070c2] uppercase mb-1.5">Our Mission</p>
                <div className="w-7 h-[2.5px] bg-[#0070c2] rounded-full mb-4"></div>

                {/* Headline */}
                <h3 className="vm-content text-[1.35rem] font-outfit font-bold text-slate-900 leading-snug mb-3">
                  To empower organizations<br />to achieve more
                </h3>

                {/* Description */}
                <p className="vm-content text-[0.8rem] text-slate-600 leading-relaxed mb-6">
                  To empower organizations by delivering bespoke, robust, and scalable software solutions that drive operational excellence, accelerate digital transformation, and unlock unprecedented business value.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 4. Why Probus Section */}
      <section className="reveal-section py-14 px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Left — Text */}
            <div>
              {/* Badge */}
              <div className="reveal-element inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]"></span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-2">Why Probus</span>
              </div>

              {/* Heading */}
              <h2 className="reveal-element text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-slate-900 leading-[1.1] mb-3 tracking-tight">
                Why <span className="text-[#0070c2]">Probus?</span>
              </h2>

              {/* Blue rule */}
              <div className="reveal-element mb-5" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0070c2, #38bdf8)', borderRadius: '2px' }}></div>

              {/* Sub-heading */}
              <p className="reveal-element text-base font-semibold text-slate-900 mb-4 leading-snug">
                More than solutions.<br />A partnership for lasting growth.
              </p>

              {/* Body */}
              <p className="reveal-element text-base text-slate-600 mb-3 leading-relaxed">
                At Probus, we combine deep industry expertise with modern technology and a human-centric approach to help businesses solve complex challenges and unlock new opportunities.
              </p>
              <p className="reveal-element text-base text-slate-600 mb-8 leading-relaxed">
                We don't believe in one-size-fits-all. Every solution we deliver is thoughtfully crafted to align with your goals, drive measurable results, and create long-term value.
              </p>

              {/* CTA Buttons */}
              <div className="reveal-element flex flex-wrap gap-3">
                <button className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-6 rounded-xl transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-[#0070c2]/30 text-sm">
                  Book a Demo &rarr;
                </button>
              </div>

            </div>

            {/* Right — Image */}
            <div className="reveal-element">
              {/* Image */}
              <div style={{
                position: 'relative', zIndex: 1,
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,112,194,0.12), 0 4px 20px rgba(0,0,0,0.08)',
                aspectRatio: '4/3',
              }}>
                <img
                  src={about2}
                  alt="Probus team collaboration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
                {/* Subtle overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,21,38,0.15) 0%, transparent 50%)', pointerEvents: 'none' }} />
              </div>
            </div>

          </div>
        </div>
      </section>




      {/* 5. Leadership Team Section */}
      <section className="reveal-section py-10 px-6 lg:px-8 bg-white relative overflow-hidden">
        {/* Background subtle dot */}
        <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0070c2] via-blue-400 to-[#0070c2] opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="reveal-element inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
              <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]"></span>
              </span>
              <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-2">Our People</span>
            </div>
            <h2 className="reveal-element text-2xl md:text-3xl font-outfit font-bold text-slate-900 mb-2 tracking-tight">
              Meet Our <span className="text-[#0070c2]">Leadership</span>
            </h2>
            <p className="reveal-element text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
              Guiding our vision with decades of industry expertise and a passion for technological excellence.
            </p>
          </div>

          {/* 6-col small cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {leadership.map((leader, idx) => (
              <div key={idx} className="group relative bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-[#0070c2]/10 transition-all duration-300 hover:-translate-y-1">

                {/* Portrait Photo */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/4' }}>
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: leader.objectPosition || 'center top' }}
                  />
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  {/* Blue top accent */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0070c2] to-blue-400 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </div>

                {/* Info */}
                <div className="p-2.5">
                  <h4 className="font-outfit font-bold text-slate-900 text-xs mb-0.5">{leader.name}</h4>
                  <p className="text-[#0070c2] text-[9px] font-medium leading-tight">{leader.role}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-[#0070c2] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to build the future together?</h2>
          <button className="px-8 py-4 bg-white text-[#0070c2] rounded-full font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10">
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
