import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LuFactory, LuWrench, LuCar, LuHeartPulse,
  LuTruck, LuBriefcase, LuChefHat, LuArrowRight,
  LuCheck
} from 'react-icons/lu';

import industriesBg     from '../assets/Images/industriesback.png';
import imgManufacturing  from '../assets/Images/ind_manufacturing.png';
import imgEngineering    from '../assets/Images/ind_engineering.png';
import imgAutomotive     from '../assets/Images/ind_automotive.png';
import imgHealthcare     from '../assets/Images/ind_healthcare.png';
import imgLogistics      from '../assets/Images/ind_logistics.png';
import imgServices       from '../assets/Images/ind_services.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Data ──────────────────────────────────────────────── */
const industries = [
  {
    id: 'manufacturing',
    badge: 'Manufacturing',
    title: 'Manufacturing',
    accent: 'Industry ERP',
    icon: LuFactory,
    image: imgManufacturing,
    description:
      'Robust ERP and production management systems designed to streamline factory operations, eliminate operational bottlenecks, and provide real-time visibility across your entire manufacturing supply chain.',
    points: [
      'Production Planning & Scheduling',
      'Shop Floor Control & Monitoring',
      'Quality Management System (QMS)',
      'Bill of Materials & Costing',
    ],
    stats: [
      { label: 'OEE Improvement', value: '+24%' },
      { label: 'Downtime Reduction', value: '-30%' },
    ],
  },
  {
    id: 'engineering',
    badge: 'Engineering',
    title: 'Engineering &',
    accent: 'Project Control',
    icon: LuWrench,
    image: imgEngineering,
    description:
      'Purpose-built solutions for engineering and project firms. Track project life cycles, manage resources across multi-site operations, and automate multi-vendor procurement processes with ease.',
    points: [
      'Project Lifecycle Management',
      'Resource & Asset Tracking',
      'Procurement & Vendor Management',
      'Engineering Compliance & Docs',
    ],
    stats: [
      { label: 'Project Accuracy', value: '99.8%' },
      { label: 'Resource Efficiency', value: '+18%' },
    ],
  },
  {
    id: 'automotive',
    badge: 'Automotive',
    title: 'Automotive &',
    accent: 'Dealer Operations',
    icon: LuCar,
    image: imgAutomotive,
    description:
      'Drive operations across your automotive value chain. Optimize parts inventory, manage dealer networks, track warranties, and integrate supplier activities under one unified platform.',
    points: [
      'Dealer Management System (DMS)',
      'Parts & Inventory Control',
      'Warranty & Service Management',
      'Supply Chain Integration',
    ],
    stats: [
      { label: 'Supply Velocity', value: '1.5x' },
      { label: 'Inventory Turn', value: '+35%' },
    ],
  },
  {
    id: 'healthcare',
    badge: 'Healthcare',
    title: 'Healthcare &',
    accent: 'Clinical Care',
    icon: LuHeartPulse,
    image: imgHealthcare,
    description:
      'Empower clinical providers with digital medical record systems, streamlined patient scheduling, robust hospital info grids, and fully compliant insurance billing structures.',
    points: [
      'Hospital Information System (HIS)',
      'Patient Management & EMR',
      'Billing & Insurance Processing',
      'HIPAA / HL7 Compliance',
    ],
    stats: [
      { label: 'Patient Flow', value: '+40%' },
      { label: 'Compliance Rate', value: '100%' },
    ],
  },
  {
    id: 'logistics',
    badge: 'Logistics',
    title: 'Logistics &',
    accent: 'Fleet Automation',
    icon: LuTruck,
    image: imgLogistics,
    description:
      'End-to-end logistics solutions connecting warehouses, fleets, and dispatch routes in real time. Minimize operational overhead, boost delivery SLAs, and track shipments instantly.',
    points: [
      'Warehouse Management (WMS)',
      'Fleet & Transport Tracking',
      'Order & Last-Mile Delivery',
      'Freight & Customs Management',
    ],
    stats: [
      { label: 'On-Time Delivery', value: '99.5%' },
      { label: 'Route Efficiency', value: '+22%' },
    ],
  },
  {
    id: 'services',
    badge: 'Prof. Services',
    title: 'Professional',
    accent: 'Business Services',
    icon: LuBriefcase,
    image: imgServices,
    description:
      'Client relationship dashboards and workforce automation that simplify scheduling, project tracking, billing processes, and resource utilization across your organization.',
    points: [
      'CRM & Client Management',
      'Project & Task Management',
      'HR & Workforce Automation',
      'Invoicing & Revenue Tracking',
    ],
    stats: [
      { label: 'Utilization Rate', value: '92%' },
      { label: 'Billing Speed', value: '3x' },
    ],
  },
  {
    id: 'food',
    badge: 'Food & Beverage',
    title: 'Food &',
    accent: 'Traceable Processing',
    icon: LuChefHat,
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c7e99ae?w=900&q=80',
    description:
      'Complete batch formulation, recipe coordination, cold storage mapping, and FSSAI safety compliance modules tailored for food manufacturing and distribution organizations.',
    points: [
      'Recipe & Batch Management',
      'Traceability & Food Safety (FSSAI)',
      'Cold Chain & Inventory Tracking',
      'Distribution & Order Management',
    ],
    stats: [
      { label: 'Traceability Time', value: '< 1 Min' },
      { label: 'Batch Quality', value: '99.9%' },
    ],
  },
];

const Industries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      /* Hero Reveal */
      gsap.from('.hero-reveal', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out',
      });

      /* Stats Bar */
      gsap.from('.stat-item', {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.stat-bar', start: 'top 85%' },
      });

      /* Section Heading */
      gsap.from('.sec-heading', {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.sec-heading', start: 'top 85%' },
      });

      /* Alternating Rows Slide-in */
      const rows = gsap.utils.toArray('.ind-row');
      rows.forEach((row) => {
        const image = row.querySelector('.ind-image-wrapper');
        const text = row.querySelector('.ind-text-wrapper');
        const isEven = row.classList.contains('lg:flex-row');

        gsap.from(image, {
          x: isEven ? -60 : 60,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });

        gsap.from(text, {
          x: isEven ? 60 : -60,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        });
      });

      /* CTA section */
      gsap.from('.cta-reveal', {
        y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '#cta-section', start: 'top 85%' },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-slate-50 min-h-screen overflow-hidden animate-fade-in"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Subtle blueprint grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(0,112,194,0.06),transparent)] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* BG Image */}
        <div className="absolute inset-0 z-0">
          <img src={industriesBg} alt="Industries Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526]/96 via-[#0a1526]/80 to-[#0a1526]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0070c2]/20 via-transparent to-transparent" />
        </div>

        {/* Floating backdrop glow orb */}
        <div className="absolute right-[8%] top-[18%] w-80 h-80 rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Industries We Serve</span>
          </div>

          <h1 className="hero-reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Tailored Solutions for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-400">
              Every Sector
            </span>
          </h1>

          <p className="hero-reveal text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Deep domain expertise meets modern technology to deliver digital transformation
            across <span className="text-white font-semibold">7 key industries</span>, driving
            efficiency, growth and competitive advantage.
          </p>

          <div className="hero-reveal flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => document.getElementById('industries-showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-3.5 px-8 rounded-2xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/40 text-sm"
            >
              Explore Industries &rarr;
            </button>
            <button
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 hover:border-white/60 text-white font-semibold py-3.5 px-8 rounded-2xl transition-all text-sm backdrop-blur-sm hover:bg-white/10"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <div className="stat-bar bg-white border-y border-slate-200 shadow-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-7 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {[
            { val: '7+',    label: 'Industries Served' },
            { val: '200+',  label: 'Enterprise Clients' },
            { val: '99.5%', label: 'Client Satisfaction' },
            { val: '15+',   label: 'Years of Expertise' },
          ].map((s, i) => (
            <div key={i} className="stat-item text-center py-2 px-4">
              <div className="text-3xl font-extrabold text-[#0070c2] tracking-tight mb-1">{s.val}</div>
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SECTION HEADING
      ══════════════════════════════════════════ */}
      <section className="pt-20 pb-4 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="sec-heading inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]" />
            </span>
            <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-1">Domain Expertise</span>
          </div>

          <h2 className="sec-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Industries We&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
              Transform
            </span>
          </h2>

          <p className="sec-heading text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From manufacturing floors to healthcare corridors — we deliver purpose-built
            software solutions across 7 key sectors, presented one by one below.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRIES LIST (ONE-BY-ONE ALTERNATING LAYOUT)
      ══════════════════════════════════════════ */}
      <section id="industries-showcase" className="py-10 px-6 lg:px-8 relative z-10 space-y-16 max-w-6xl mx-auto">
        {industries.map((ind, idx) => {
          const Icon = ind.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={ind.id}
              className={`ind-row flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200/60 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-blue-500/20 transition-all duration-500`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 shrink-0 relative group ind-image-wrapper">
                {/* Backdrop Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#0070c2] to-blue-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" />

                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-slate-100">
                  <img
                    src={ind.image}
                    alt={ind.badge}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

                  {/* Left Tag Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0070c2] text-white text-xs font-bold tracking-wide shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                      {ind.badge}
                    </span>
                  </div>

                  {/* Index badge bottom right */}
                  <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-slate-950/40 backdrop-blur-md border border-white/20 text-white font-bold text-sm">
                    0{idx + 1}
                  </div>
                </div>
              </div>

              {/* Text Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-between ind-text-wrapper">
                <div>
                  {/* Icon & Sub-header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="text-[#0070c2] text-lg" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#0070c2] bg-blue-50/50 px-3 py-1 rounded-md">
                      Sector Focus
                    </span>
                  </div>

                  {/* Industry Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight tracking-tight mb-3 font-outfit">
                    {ind.title}&nbsp;
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
                      {ind.accent}
                    </span>
                  </h3>

                  {/* Accent Line */}
                  <div className="w-14 h-1 bg-gradient-to-r from-[#0070c2] to-blue-400 rounded-full mb-5" />

                  {/* Paragraph */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 font-light">
                    {ind.description}
                  </p>

                  {/* Modules grid */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {ind.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5">
                        <div className="w-4.5 h-4.5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                          <LuCheck className="text-[#0070c2]" size={10} />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Statistics panel & CTA */}
                <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center pt-5 border-t border-slate-100">
                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-3 flex-grow">
                    {ind.stats.map((s, si) => (
                      <div
                        key={si}
                        className="bg-slate-50 border border-slate-100/80 rounded-2xl p-2.5 text-center hover:bg-blue-50/20 hover:border-blue-100 transition-colors duration-300"
                      >
                        <div className="text-lg sm:text-xl font-extrabold text-[#0070c2] tracking-tight">
                          {s.value}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <button 
                    onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex items-center justify-center gap-2 bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-5 rounded-2xl transition-all hover:scale-[1.03] shadow-md shadow-[#0070c2]/20 hover:shadow-lg text-xs sm:text-sm whitespace-nowrap"
                  >
                    Consult Expert <LuArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ══════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════ */}
      <section id="cta-section" className="py-24 px-6 lg:px-8 bg-[#0a1526] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,112,194,0.35) 0%, transparent 70%)', filter: 'blur(48px)' }} />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="cta-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Let's Build Together</span>
          </div>

          <h2 className="cta-reveal text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to digitally transform<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-400">
              your industry?
            </span>
          </h2>

          <p className="cta-reveal text-slate-400 text-lg mb-10 leading-relaxed">
            Talk to our industry experts and discover a solution built precisely for your sector.
          </p>

          <div className="cta-reveal flex flex-wrap gap-4 justify-center">
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

export default Industries;
