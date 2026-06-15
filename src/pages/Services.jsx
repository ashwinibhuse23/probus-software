import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LuUsers, LuWallet, LuClipboardList, LuShieldCheck,
  LuTrendingUp, LuPackage, LuLink, LuDatabase,
  LuCode, LuSmartphone, LuCloud, LuZap,
  LuArrowRight,
} from 'react-icons/lu';

import solutionBg    from '../assets/Images/solutionback.png';
import hrmsImg       from '../assets/Images/HRMS solution.jpg';
import workforceImg  from '../assets/Images/kompass.png';
import erpImg        from '../assets/Images/ERP.jpg';
import customImg     from '../assets/Images/custom software.jpg';

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ─────────────────────────────────────────────── */
const solutions = [
  {
    id: 'hrms',
    badge: 'HRMS & Payroll',
    title: 'HRMS &',
    titleAccent: 'Payroll',
    image: hrmsImg,
    description:
      'A comprehensive Human Resource Management System that automates your complete HR lifecycle  from recruitment and onboarding to payroll processing, tax compliance and employee self-service  giving HR teams time to focus on what matters most.',
    features: [
      { icon: LuUsers,         label: 'Employee Lifecycle Management' },
      { icon: LuWallet,        label: 'Automated Payroll & Tax Compliance' },
      { icon: LuClipboardList, label: 'Attendance & Leave Management' },
      { icon: LuShieldCheck,   label: 'Statutory & Regulatory Compliance' },
    ],
    imageRight: false,
  },
  {
    id: 'workforce',
    badge: 'Workforce Management',
    title: 'Workforce',
    titleAccent: 'Management',
    image: workforceImg,
    description:
      'Gain complete visibility and control over your workforce with intelligent scheduling, shift management, productivity tracking and real-time analytics  empowering managers to build high-performing teams.',
    features: [
      { icon: LuUsers,         label: 'Smart Shift & Scheduling' },
      { icon: LuTrendingUp,    label: 'Performance & Productivity Analytics' },
      { icon: LuClipboardList, label: 'Real-Time Workforce Visibility' },
      { icon: LuShieldCheck,   label: 'Policy & Compliance Management' },
    ],
    imageRight: true,
  },
  {
    id: 'erp',
    badge: 'Enterprise ERP',
    title: 'Enterprise Resource',
    titleAccent: 'Planning (ERP)',
    image: erpImg,
    description:
      'Integrate and automate every business function  finance, procurement, inventory, sales and operations with a powerful, real-time ERP platform built for modern enterprises seeking complete operational control.',
    features: [
      { icon: LuTrendingUp, label: 'Real-Time Financial Management' },
      { icon: LuPackage,    label: 'Inventory & Supply Chain' },
      { icon: LuLink,       label: 'Seamless Module Integration' },
      { icon: LuDatabase,   label: 'Enterprise-Grade Reporting' },
    ],
    imageRight: false,
  },
  {
    id: 'custom',
    badge: 'Custom Development',
    title: 'Custom Software',
    titleAccent: 'Development',
    image: customImg,
    description:
      'From mobile apps and web platforms to cloud-native microservices  we design, architect and build bespoke software solutions precisely tailored to your unique business requirements and long-term growth goals.',
    features: [
      { icon: LuCode,       label: 'Full-Stack Web & API Development' },
      { icon: LuSmartphone, label: 'Cross-Platform Mobile Apps' },
      { icon: LuCloud,      label: 'Cloud-Native Architecture' },
      { icon: LuZap,        label: 'Agile & Rapid Delivery' },
    ],
    imageRight: true,
  },
];

/* ─── Component ────────────────────────────────────────── */
const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      /* Hero */
      gsap.from('.hero-reveal', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out',
      });

      /* Solution sections */
      const cards = gsap.utils.toArray('.solution-block');
      cards.forEach((block) => {
        gsap.from(block.querySelectorAll('.sol-reveal'), {
          y: 48, opacity: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: block, start: 'top 78%' },
        });
        gsap.from(block.querySelector('.sol-img'), {
          scale: 1.06, opacity: 0, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: block, start: 'top 80%' },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-slate-50 min-h-screen overflow-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center">

        {/* BG image + overlays */}
        <div className="absolute inset-0 z-0">
          <img src={solutionBg} alt="Solutions Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526]/92 via-[#0a1526]/75 to-[#0a1526]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0070c2]/20 via-transparent to-transparent" />
        </div>

        {/* Glowing orb */}
        <div className="absolute right-[10%] top-[20%] w-72 h-72 rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)', filter: 'blur(32px)' }} />

        {/* Content */}
        <div className="max-w-5xl mx-auto relative z-10 text-center">

          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">What We Offer</span>
          </div>

          <h1 className="hero-reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Comprehensive&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-400">
              Software Solutions
            </span>
          </h1>

          <p className="hero-reveal text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            From enterprise ERP to cloud-native applications we build scalable, secure
            and intelligent software that accelerates your business growth.
          </p>

          <div className="hero-reveal flex flex-wrap gap-4 justify-center">
            <button className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/40 text-sm">
              Explore Solutions &rarr;
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-xl transition-all text-sm backdrop-blur-sm hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOLUTIONS — one by one
      ══════════════════════════════════════════ */}
      <section className="py-6 px-4 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-0">
          {solutions.map((sol, idx) => (
            <div
              key={sol.id}
              className={`solution-block flex flex-col ${sol.imageRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 py-20 ${idx < solutions.length - 1 ? 'border-b border-slate-200' : ''}`}
            >
              {/* ── Image ── */}
              <div className="sol-img w-full lg:w-[48%] shrink-0">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ boxShadow: '0 24px 60px rgba(0,112,194,0.14), 0 4px 20px rgba(0,0,0,0.08)' }}>

                  <img
                    src={sol.image}
                    alt={sol.badge}
                    className="w-full h-[340px] lg:h-[420px] object-cover object-center transition-transform duration-700 hover:scale-105"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526]/60 via-transparent to-transparent pointer-events-none" />

                  {/* Badge on image */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0070c2] text-white text-xs font-bold tracking-wide shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      {sol.badge}
                    </span>
                  </div>

                  {/* Number label bottom-right */}
                  <div className="absolute bottom-5 right-5 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">0{idx + 1}</span>
                  </div>
                </div>
              </div>

              {/* ── Text ── */}
              <div className="w-full lg:w-[52%]">

                {/* Badge */}
                <div className="sol-reveal inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-1">{sol.badge}</span>
                </div>

                {/* Heading */}
                <h2 className="sol-reveal text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-3 tracking-tight">
                  {sol.title}&nbsp;<span className="text-[#0070c2]">{sol.titleAccent}</span>
                </h2>

                {/* Blue rule */}
                <div className="sol-reveal mb-5" style={{ width: '40px', height: '3px', background: 'linear-gradient(90deg, #0070c2, #38bdf8)', borderRadius: '2px' }} />

                {/* Description */}
                <p className="sol-reveal text-base text-slate-600 leading-relaxed mb-7 max-w-lg">
                  {sol.description}
                </p>

                {/* Feature list */}
                <ul className="sol-reveal grid sm:grid-cols-2 gap-3 mb-8">
                  {sol.features.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-slate-100 shadow-sm hover:border-[#0070c2]/30 hover:shadow-md transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="text-[#0070c2] text-base" />
                      </div>
                      <span className="text-sm font-medium text-slate-700 leading-snug">{label}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="sol-reveal">
                  <button className="inline-flex items-center gap-2 bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/30 text-sm">
                    Learn More <LuArrowRight />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-8 bg-[#0a1526] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,112,194,0.35) 0%, transparent 70%)', filter: 'blur(48px)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Let's Build Together</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-400">
              your business digitally?
            </span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed">
            Talk to our experts and discover the right solution for your organisation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/40 text-sm">
              Book a Free Demo &rarr;
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-xl transition-all text-sm backdrop-blur-sm hover:bg-white/10">
              Contact Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
