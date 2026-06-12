import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import erpImage from '../assets/Images/ERP.jpg';
// import HRMSImage from '../assets/images/HRMS solution.jpg';
import customSoftwareImage from '../assets/Images/custom software.jpg';
import OceanImage from '../assets/Images/OceanFms.png';
import KompassImage from '../assets/Images/kompass.png';
import {
  LuUsers,
  LuWallet,
  LuCalendarCheck,
  LuTarget,
  LuLayoutDashboard,
  LuChartPie,
  LuPackage,
  LuTrendingUp,
  LuNetwork,
  LuBuilding2,
  LuMonitorSmartphone,
  LuDatabase,
  LuCloud,
  LuLightbulb
} from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      id: "01",
      title: "HRMS & Payroll",
      description: "Simplify HR operations and payroll management with a unified platform that enhances employee experience, ensures compliance, and improves efficiency.",
      features: [
        { text: "Employee Lifecycle Management", icon: <LuUsers className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Payroll Processing & Compliance", icon: <LuWallet className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Attendance & Leave Management", icon: <LuCalendarCheck className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Performance & Talent Management", icon: <LuTarget className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Employee Self-Service Portals", icon: <LuLayoutDashboard className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> }
      ],
      image: KompassImage,
    },
    {
      id: "02",
      title: "Workforce Management",
      description: "Maximize workforce productivity through intelligent scheduling, attendance tracking, and real-time workforce insights.",
      features: [
        { text: "Workforce Planning & Scheduling", icon: <LuLayoutDashboard className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Time & Attendance Management", icon: <LuCalendarCheck className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Productivity Monitoring", icon: <LuTarget className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Workforce Analytics", icon: <LuUsers className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Mobile Workforce Enablement", icon: <LuWallet className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> }
      ],
      image: OceanImage,
    },
    {
      id: "03",
      title: "ERP Solution",
      description: "Integrate and optimize core business processes with a scalable ERP solution that delivers real-time visibility and operational control.",
      features: [
        { text: "Integrated Business Operations", icon: <LuNetwork className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Financial Management", icon: <LuWallet className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Procurement & Inventory Management", icon: <LuPackage className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Reporting & Analytics", icon: <LuChartPie className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Improved Process Efficiency", icon: <LuTrendingUp className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> }
      ],
      image: erpImage,
    },
    {
      id: "04",
      title: "Custom Software Development",
      description: "Build tailored digital solutions designed around your unique business requirements, processes, and growth objectives.",
      features: [
        { text: "Enterprise Application Development", icon: <LuBuilding2 className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Web & Mobile Solutions", icon: <LuMonitorSmartphone className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "System Integration", icon: <LuDatabase className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Cloud-Based Applications", icon: <LuCloud className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> },
        { text: "Digital Transformation Initiatives", icon: <LuLightbulb className="text-[#0070c2] text-base shrink-0 mt-[1px]" /> }
      ],
      image: customSoftwareImage,
    }
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {

      // Entrance animation for the header text
      gsap.from('.services-header > *', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Entrance animation for the dark card
      const enterTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-pin-wrapper',
          start: 'top 85%',
        }
      });

      enterTl.fromTo('.services-card',
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      );

      // Pin the main container and scrub through panels
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-pin-wrapper',
          start: 'top 20%',
          end: '+=3000', // 3000px of scrolling for the whole timeline
          pin: true,
          scrub: 1,
        }
      });

      // Animate the transitions between services
      for (let i = 0; i < services.length - 1; i++) {
        tl.to(`.service-content-${i}`, { autoAlpha: 0, y: -30, duration: 1 })
          .to(`.service-image-${i}`, { autoAlpha: 0, scale: 1.05, duration: 1 }, "<")

          .to(`.service-content-${i + 1}`, { autoAlpha: 1, y: 0, duration: 1 })
          .to(`.service-image-${i + 1}`, { autoAlpha: 1, scale: 1, duration: 1 }, "<")

          // Pause between transitions so the user has time to read
          .to({}, { duration: 0.5 });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .explore-hover-btn {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          display: inline-block;
          font-size: 14px;
          padding: 10px 24px;
          border-radius: 9999px;
          text-decoration: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.05);
          user-select: none;
          -webkit-user-select: none;
          touch-action: manipulation;
        }

        .explore-hover-btn span:first-child {
          position: relative;
          transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .explore-hover-btn span:last-child {
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: absolute;
          bottom: 0;
          transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
          z-index: 100;
          opacity: 0;
          top: 50%;
          left: 50%;
          transform: translateY(225%) translateX(-50%);
          white-space: nowrap;
        }

        .explore-hover-btn:after {
          content: "";
          position: absolute;
          bottom: -50%;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #0070c2;
          transform-origin: bottom center;
          transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
          transform: skewY(9.3deg) scaleY(0);
          z-index: 50;
        }

        .explore-hover-btn:hover:after {
          transform-origin: bottom center;
          transform: skewY(9.3deg) scaleY(2.5);
        }

        .explore-hover-btn:hover span:last-child {
          transform: translateX(-50%) translateY(-50%);
          opacity: 1;
          transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
        }
      `}</style>
      <section ref={sectionRef} className="pt-16 pb-12 bg-[#f8faff] relative overflow-hidden">

        {/* Header Area */}
        <div className="max-w-[90rem] mx-auto px-6 lg:px-8 mb-12 relative z-10">
          <div className="services-header max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-sm mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-50">
                <span className="w-2 h-2 rounded-full bg-[#0070c2]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-700 uppercase pr-2">Our Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-[32px] font-outfit font-bold text-slate-900 leading-[1.2] mb-4 tracking-tight">
              Comprehensive software solutions designed to <br />
              <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
                transform the way your business operates
              </span>
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              At Probus Software, we help organizations streamline processes, empower their workforce, and accelerate growth through intelligent enterprise software and custom digital solutions.
            </p>
          </div>
        </div>

        {/* Pinned Scroll Area */}
        <div className="services-pin-wrapper w-full px-6 lg:px-8 h-[75vh] flex items-center justify-center max-w-[90rem] mx-auto">
          <div className="services-card w-full h-full bg-[#0a1526] rounded-[2rem] p-8 lg:p-12 flex relative overflow-hidden shadow-2xl border border-slate-800">

            {/* Subtle Background Elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

            {/* Left Content (Text) */}
            <div className="w-full lg:w-[50%] relative h-full flex flex-col justify-center z-10">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`service-content-${i} absolute inset-0 flex flex-col justify-center pr-8 lg:pr-10`}
                  style={{
                    visibility: i === 0 ? 'inherit' : 'hidden',
                    opacity: i === 0 ? 1 : 0,
                    transform: i === 0 ? 'translateY(0)' : 'translateY(30px)',
                  }}
                >
                  <div className="text-3xl lg:text-4xl font-outfit font-light text-[#0070c2] mb-3 tracking-tighter">{s.id}</div>
                  <h3 className="text-[22px] lg:text-[26px] font-bold font-outfit text-white mb-3 leading-tight">{s.title}</h3>
                  <p className={`text-slate-400 leading-relaxed text-[15px] lg:text-base ${s.features ? 'mb-4' : 'mb-8'}`}>{s.description}</p>

                  {s.features && (
                    <div className="mb-6">
                      <h4 className="text-white text-[13px] lg:text-[14px] font-semibold mb-3">Key Benefits:</h4>
                      <ul className="grid grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-3">
                        {s.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-slate-300 text-[12px] lg:text-[14px]">
                            {feature.icon || <span className="text-[#0070c2] font-bold mt-[1px]">✓</span>}
                            <span className="leading-snug whitespace-nowrap tracking-tight">{feature.text || feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div>
                    <button
                      onClick={() => navigate('/services')}
                      className="explore-hover-btn group"
                    >
                      <span>
                        Request A Demo                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <span>
                        Request A Demo
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Visuals (Images/Mockups) */}
            <div className="hidden lg:flex w-[50%] relative h-full items-center justify-end z-10 pl-8">
              {services.map((s, i) => (
                <div
                  key={i}
                  className={`service-image-${i} absolute inset-0 flex items-center justify-end`}
                  style={{ visibility: i === 0 ? 'inherit' : 'hidden', opacity: i === 0 ? 1 : 0 }}
                >
                  <div className="w-[95%] h-[90%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-800 relative group flex items-center justify-center">
                    {/* Modern inner shadow/overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay z-10 pointer-events-none"></div>
                    <img
                      src={s.image}
                      alt={s.title}
                      className={`w-full h-full opacity-90 transform group-hover:scale-105 transition-transform duration-700 ease-out ${s.imageStyle || 'object-cover'}`}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
