import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LuFactory, LuWrench, LuCar, LuHeartPulse,
  LuTruck, LuBriefcase, LuChefHat, LuArrowRight,
  LuCheck,
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
    accent: 'Industry',
    icon: LuFactory,
    image: imgManufacturing,
    description:
      'Robust ERP and production management systems that streamline factory operations, reduce downtime and enable real-time visibility across your entire manufacturing value chain.',
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
    accent: 'Projects',
    icon: LuWrench,
    image: imgEngineering,
    description:
      'Purpose-built software for engineering firms — project lifecycle management, CAD integration, procurement and compliance tracking across complex multi-site projects.',
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
    accent: 'Mobility',
    icon: LuCar,
    image: imgAutomotive,
    description:
      'Drive efficiency across your automotive supply chain with integrated dealer management, warranty tracking, parts inventory and production control solutions.',
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
    accent: 'Life Sciences',
    icon: LuHeartPulse,
    image: imgHealthcare,
    description:
      'Empower healthcare providers with digital solutions that improve patient outcomes — from hospital information systems and clinical workflows to billing and telehealth platforms.',
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
    accent: 'Supply Chain',
    icon: LuTruck,
    image: imgLogistics,
    description:
      'End-to-end logistics technology connecting warehouses, fleets and delivery networks in real time — reducing cost and improving SLAs across your supply chain.',
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
    accent: 'Services',
    icon: LuBriefcase,
    image: imgServices,
    description:
      'Tailored CRM, project management and workforce automation enabling better client relationships, efficient delivery and measurable business performance.',
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
    accent: 'Beverage',
    icon: LuChefHat,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80',
    description:
      'From farm to fork — recipe management, batch production, traceability, regulatory compliance and distribution management for food manufacturers and processors.',
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

/* ─── Industry Card ─────────────────────────────────────── */
const IndustryCard = ({ ind, idx }) => {
  const Icon = ind.icon;
  return (
    <div className="ind-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-xl hover:shadow-blue-500/8 hover:-translate-y-1 transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={ind.image}
          alt={ind.badge}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1526]/70 via-[#0a1526]/20 to-transparent" />

        {/* Badge on image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0070c2] text-white text-xs font-bold tracking-wide shadow-lg">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            {ind.badge}
          </span>
        </div>

        {/* Number badge bottom-right */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
          <span className="text-white font-bold text-xs">0{idx + 1}</span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Icon + title row */}
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
            <Icon className="text-[#0070c2] text-base" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 leading-snug tracking-tight">
            {ind.title}&nbsp;
            <span className="text-[#0070c2]">{ind.accent}</span>
          </h3>
        </div>

        {/* Divider */}
        <div className="w-10 h-0.5 bg-gradient-to-r from-[#0070c2] to-blue-400 rounded-full mb-3" />

        {/* Description */}
        <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
          {ind.description}
        </p>

        {/* Feature points */}
        <ul className="space-y-2 mb-5">
          {ind.points.map((pt) => (
            <li key={pt} className="flex items-center gap-2.5">
              <div className="w-4 h-4 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <LuCheck className="text-[#0070c2]" size={9} />
              </div>
              <span className="text-xs font-medium text-slate-600">{pt}</span>
            </li>
          ))}
        </ul>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-5">
          {ind.stats.map((s, si) => (
            <div key={si} className="text-center">
              <div className="text-xl font-extrabold text-[#0070c2] tracking-tight">{s.value}</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full inline-flex items-center justify-center gap-2 bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-5 rounded-xl transition-all hover:scale-105 shadow-md shadow-[#0070c2]/20 text-sm">
          Learn More <LuArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────── */
const Industries = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      /* Hero */
      gsap.from('.hero-reveal', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.15, ease: 'power4.out',
      });

      /* Stats */
      gsap.from('.stat-item', {
        y: 20, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.stat-bar', start: 'top 85%' },
      });

      /* Section heading */
      gsap.from('.sec-heading', {
        y: 30, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.sec-heading', start: 'top 85%' },
      });

      /* Cards */
      gsap.from('.ind-card', {
        y: 50, opacity: 0, duration: 0.9, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: '.ind-grid', start: 'top 80%' },
      });

      /* Why section */
      gsap.from('.why-item', {
        y: 24, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: '.why-section', start: 'top 80%' },
      });

      /* CTA */
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
      className="bg-slate-50 min-h-screen overflow-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Subtle blueprint background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(0,112,194,0.06),transparent)] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-36 px-6 lg:px-8 overflow-hidden min-h-[70vh] flex flex-col justify-center">
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img src={industriesBg} alt="Industries Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1526]/94 via-[#0a1526]/78 to-[#0a1526]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0070c2]/18 via-transparent to-transparent" />
        </div>

        {/* Glow orb */}
        <div className="absolute right-[8%] top-[18%] w-80 h-80 rounded-full pointer-events-none z-[1]"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)', filter: 'blur(40px)' }} />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span className="text-sm font-semibold tracking-wide text-white uppercase">Industries We Serve</span>
          </div>

          <h1 className="hero-reveal text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Tailored Solutions for&nbsp;
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
              onClick={() => document.getElementById('industries-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-3 px-8 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/40 text-sm"
            >
              Explore Industries &rarr;
            </button>
            <button
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 hover:border-white/60 text-white font-semibold py-3 px-8 rounded-xl transition-all text-sm backdrop-blur-sm hover:bg-white/10"
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

          <p className="sec-heading text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From manufacturing floors to healthcare corridors — we deliver purpose-built
            software solutions across 7 key sectors.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          INDUSTRY CARDS GRID
      ══════════════════════════════════════════ */}
      <section id="industries-grid" className="ind-grid py-10 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <IndustryCard key={ind.id} ind={ind} idx={idx} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY PROBUS
      ══════════════════════════════════════════ */}
      <section className="why-section py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-14 relative overflow-hidden">
            {/* Subtle radial accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(0,112,194,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <div className="why-item inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070c2]" />
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-slate-700 uppercase pr-1">Why Probus</span>
                </div>

                <h3 className="why-item text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4 tracking-tight">
                  Built for your industry,&nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
                    not just adapted.
                  </span>
                </h3>

                <p className="why-item text-slate-600 leading-relaxed mb-6">
                  Unlike generic ERP vendors, Probus Software develops purpose-built solutions for each vertical —
                  embedding 15+ years of domain knowledge directly into the product, so you get faster ROI and
                  less customisation overhead.
                </p>

                <button className="why-item inline-flex items-center gap-2 bg-[#0070c2] hover:bg-[#005bb5] text-white font-semibold py-2.5 px-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#0070c2]/30 text-sm">
                  Get a Free Consultation <LuArrowRight size={13} />
                </button>
              </div>

              {/* Right */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: LuCheck, title: 'Domain-Specific Modules',   desc: 'Pre-configured for your industry workflows out of the box.' },
                  { icon: LuCheck, title: 'Rapid Implementation',       desc: '60% faster go-live with our industry accelerator packs.' },
                  { icon: LuCheck, title: 'Ongoing Compliance Updates', desc: 'Regulatory changes built in — HIPAA, FSSAI, GST and more.' },
                  { icon: LuCheck, title: 'Dedicated Industry Teams',   desc: 'Consultants who have worked inside your industry, not just with it.' },
                ].map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={i} className="why-item flex gap-4 items-start p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-[#0070c2]/30 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-200">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                        <ItemIcon size={14} className="text-[#0070c2]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</div>
                        <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
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
