import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Clean category formatting helper
const cleanCategoryName = (rawCategory) => {
  return rawCategory.replace(/[\u200B-\u200D\uFEFF]/g, '').trim();
};

const categorySortOrder = [
  'Technology and Electronics',
  'Manufacturing Industry',
  'Healthcare and Pharmaceutical',
  'Service Industry',
  'IFM and Security Services',
  'Logistics and Trading',
  'Food Industry & Agro',
  'Clients Through Partners'
];

// LogoCard component
const LogoCard = ({ logo }) => (
  <div
    className="group relative bg-white border border-slate-100 hover:border-blue-200 rounded-xl h-16 w-36 flex-shrink-0 flex items-center justify-center p-3 shadow-sm hover:shadow-[0_8px_20px_rgba(0,112,194,0.1)] hover:-translate-y-0.5 transition-all duration-400 ease-out mx-2"
    title={logo.name}
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 to-blue-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />
    <img
      src={logo.url}
      alt={logo.name}
      className="max-h-12 max-w-[90%] object-contain opacity-100 group-hover:scale-105 transition-transform duration-400 ease-out z-10"
      loading="lazy"
    />
  </div>
);

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('');
  const [groupedLogos, setGroupedLogos] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const logoModules = import.meta.glob('../assets/logo/**/*.png', { eager: true });
    const groups = {};

    Object.entries(logoModules).forEach(([path, module]) => {
      const parts = path.split('/');
      if (parts.length >= 5) {
        const rawCategory = parts[3];
        const cleanCategory = cleanCategoryName(rawCategory);
        const filename = parts[parts.length - 1];
        const name = filename.replace(/\.png$/i, '').replace(/[-_]/g, ' ');
        const url = module.default || module;

        if (!groups[cleanCategory]) groups[cleanCategory] = [];
        groups[cleanCategory].push({ name, url, path });
      }
    });

    setGroupedLogos(groups);

    const sortedKeys = Object.keys(groups).sort((a, b) => {
      const idxA = categorySortOrder.indexOf(a);
      const idxB = categorySortOrder.indexOf(b);
      return (idxA > -1 ? idxA : 99) - (idxB > -1 ? idxB : 99);
    });

    if (sortedKeys.length > 0) setActiveTab(sortedKeys[0]);
  }, []);

  // GSAP entrance
  useEffect(() => {
    if (Object.keys(groupedLogos).length === 0) return;
    const ctx = gsap.context(() => {
      gsap.from('.clients-header > *', {
        y: 40, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });
      gsap.from('.clients-tabs', {
        y: 30, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.clients-tabs', start: 'top 85%' }
      });
      gsap.from('.clients-slider', {
        y: 40, opacity: 0, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: '.clients-slider', start: 'top 82%' }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [groupedLogos]);

  const handleTabChange = (tab) => {
    if (tab === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    gsap.to('.clients-slider', {
      opacity: 0, y: 10, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        setActiveTab(tab);
        setTimeout(() => {
          gsap.to('.clients-slider', { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' });
          setIsTransitioning(false);
        }, 50);
      }
    });
  };

  const activeLogos = groupedLogos[activeTab] || [];

  // Split logos into two rows
  const mid = Math.ceil(activeLogos.length / 2);
  const row1 = activeLogos.slice(0, mid);
  const row2 = activeLogos.slice(mid);

  // Duplicate for infinite seamless loop
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  const sortedCategories = Object.keys(groupedLogos).sort((a, b) => {
    const idxA = categorySortOrder.indexOf(a);
    const idxB = categorySortOrder.indexOf(b);
    return (idxA > -1 ? idxA : 99) - (idxB > -1 ? idxB : 99);
  });

  return (
    <section ref={sectionRef} className="py-20 bg-[#f8faff] relative overflow-hidden border-t border-slate-200/50">

      {/* Background blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="clients-header max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50">
              <span className="w-2 h-2 rounded-full bg-[#0070c2] animate-pulse" />
            </span>
            <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase pr-2">Our Network</span>
          </div>

          <h2 className="text-3xl sm:text-[32px] font-outfit font-bold text-slate-900 leading-[1.2] mb-4 tracking-tight">
            What Our Clients Say <br />
            <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
              Delivering Solutions, Creating Value
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We take pride in helping organizations achieve their business goals through technology. Here's what our clients have to say about partnering with Probus Software.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="clients-tabs mb-10 flex justify-center">
          <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-2.5 overflow-x-auto pb-4 md:pb-0 max-w-full no-scrollbar px-4">
            {sortedCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-5 py-2.5 rounded-full font-outfit font-semibold text-sm transition-all duration-300 shrink-0 select-none shadow-sm ${activeTab === category
                  ? 'bg-[#0070c2] text-white shadow-[#0070c2]/25 shadow-lg scale-105'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:text-[#0070c2] hover:border-[#0070c2]/40 hover:-translate-y-0.5'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Infinite Slider */}
        <div className="clients-slider relative -mx-6 lg:-mx-8 overflow-hidden">

          {/* Left fade edge */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8faff] to-transparent z-10 pointer-events-none" />
          {/* Right fade edge */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8faff] to-transparent z-10 pointer-events-none" />

          <div className="py-4 space-y-3">

            {/* Row 1 — scrolls left */}
            {row1.length > 0 && (
              <div className="flex overflow-hidden group/row">
                <div
                  className="flex"
                  style={{
                    animation: 'marquee 30s linear infinite',
                    width: 'max-content',
                  }}
                  onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {row1Doubled.map((logo, idx) => (
                    <LogoCard key={`r1-${idx}`} logo={logo} />
                  ))}
                </div>
              </div>
            )}

            {/* Row 2 — scrolls right (reverse) */}
            {row2.length > 0 && (
              <div className="flex overflow-hidden">
                <div
                  className="flex"
                  style={{
                    animation: 'marquee 35s linear infinite reverse',
                    width: 'max-content',
                  }}
                  onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
                  onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
                >
                  {row2Doubled.map((logo, idx) => (
                    <LogoCard key={`r2-${idx}`} logo={logo} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>



      </div>
    </section>
  );
};

export default ClientsSection;
