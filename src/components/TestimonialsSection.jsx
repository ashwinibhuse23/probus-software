import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    designation: "CTO, TechNova Solutions",
    title: "Seamless service & robust application.",
    text: "Probus Software transformed our operations with their custom ERP solution. The level of detail, scalability, and seamless integration exceeded all our expectations. It digitized our entire workflow, giving us real-time visibility.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: 2,
    name: "Michael Chen",
    designation: "Operations Director, GlobalLogistics",
    title: "Exceptional platform & outstanding support.",
    text: "Their Ocean FMS platform has been a game-changer for our facility management. It digitized our entire workflow, giving us real-time visibility and significantly reducing costs across all our global operations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    id: 3,
    name: "Priya Desai",
    designation: "Head of HR, Zenith Corp",
    title: "Incredible automation & ease of use.",
    text: "Implementing their HRMS solution was incredibly smooth. Our payroll and attendance processes are now fully automated, saving us countless hours every month. The team's dedication to our success was evident from day one.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Slower Aesthetic Header Animation
      gsap.from('.testimonial-header > *', {
        y: 70,
        x: -30,
        opacity: 0,
        scale: 0.9,
        duration: 2.5,
        stagger: 0.35,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
      
      // Complex Slider Entrance Timeline
      const sliderTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
        }
      });

      sliderTl.from('.testimonial-slider-container', {
        x: 150,
        opacity: 0,
        duration: 2.8,
        ease: 'power3.out',
      })
      .from('.testimonial-image', {
        scale: 1.25,
        x: -20,
        opacity: 0,
        duration: 2.5,
        ease: 'power3.out',
      }, "-=2.2")
      .from('.testimonial-content > *', {
        y: 20,
        x: 10,
        opacity: 0,
        stagger: 0.15,
        duration: 1.5,
        ease: 'power3.out',
      }, "-=2.0")
      .from('.testimonial-controls', {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, "-=1.5");

      // Very Slow Continuous Floating Animation for Quote Icons
      gsap.to('.quote-icon', {
        y: 20,
        rotation: 190,
        duration: 6,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

      // Continuous Background Ambient Animation
      gsap.to('.bg-glow-1', {
        x: 80,
        y: 40,
        scale: 1.15,
        duration: 9,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });

      gsap.to('.bg-glow-2', {
        x: -60,
        y: -50,
        scale: 1.2,
        duration: 11,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide optional
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={sectionRef} className="py-6 md:py-10 bg-[#050B14] relative overflow-hidden">
      {/* Optional: Add some subtle background glows or gradients to match the dark premium look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-cyan-900/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-[85rem] mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Header & Features */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="testimonial-header mb-8 text-left">
              {/* Tag - smaller size */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/50 shadow-sm mb-6">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-900/30">
                  <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase pr-1.5">
                  Client Success
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-[32px] md:text-4xl font-outfit font-bold text-white leading-[1.2] mb-4 tracking-tight">
                What Our Clients Say <br />
                <span className="inline-block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-blue-500">
                  Delivering Solutions, Creating Value
                </span> 
              </h2>
              
              <p className="text-slate-400 text-sm leading-relaxed font-light mt-4 md:mt-6 mb-8 max-w-sm">
                We take pride in helping organizations achieve their business goals through technology. Here's what our clients have to say about partnering with Probus Software.
              </p>
              

            </div>
          </div>

          {/* Right Column: Slider Container */}
          <div className="lg:col-span-7 testimonial-slider-container relative mt-6 lg:mt-10">
            <div className="overflow-hidden relative bg-transparent py-6 -mx-2 sm:-mx-4 px-2 sm:px-4">
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    {/* The Leaf-Shaped Card */}
                    <div className="bg-[#080d19] rounded-tr-2xl rounded-bl-2xl rounded-tl-[3rem] rounded-br-[3rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-slate-800/80 flex flex-col md:flex-row relative overflow-hidden h-full">
                      
                      {/* Big background quote icon */}
                      <svg className="quote-icon absolute top-2 right-4 w-24 h-24 text-slate-800/40 rotate-180 -z-0 pointer-events-none" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>

                      {/* Left Side: Image (Merged seamlessly but with leaf shape on right edge) */}
                      <div className="w-full md:w-[35%] h-[250px] md:h-auto md:min-h-[300px] relative shrink-0 z-10">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="testimonial-image absolute inset-0 w-full h-full object-cover rounded-br-[4rem] rounded-tr-xl shadow-[5px_0_15px_-3px_rgba(0,0,0,0.4)]"
                        />
                      </div>

                      {/* Right Side: Content */}
                      <div className="testimonial-content w-full md:w-[65%] flex flex-col justify-center relative z-10 p-6 lg:p-8">
                        <h3 className="text-lg md:text-xl font-outfit font-bold text-slate-300 mb-3">
                          Seamless service & robust application.
                        </h3>
                        
                        <p className="text-slate-400 text-sm leading-relaxed font-light mb-6">
                          "{testimonial.text}"
                        </p>
                        
                        <div className="flex items-end justify-between mt-auto">
                          <div>
                            <h4 className="text-white font-semibold font-outfit text-sm mb-0.5">{testimonial.name}</h4>
                            <p className="text-slate-500 text-xs">{testimonial.designation}</p>
                          </div>
                          
                          {/* Stars */}
                          <div className="flex gap-1 text-[#8b5cf6]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-3.5 h-3.5 ${i === 4 ? 'text-slate-700' : 'fill-current'}`} viewBox="0 0 20 20" fill={i === 4 ? 'none' : 'currentColor'} stroke={i === 4 ? 'currentColor' : 'none'}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={i === 4 ? 1.5 : 0} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="testimonial-controls flex justify-end gap-2.5 mt-5">
              <button 
                onClick={prevSlide}
                className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#38bdf8] hover:text-[#080d19] hover:border-[#38bdf8] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-1 mx-1">
                {testimonials.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-[#38bdf8] w-4' : 'bg-slate-700 hover:bg-slate-600'}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#38bdf8] hover:text-[#080d19] hover:border-[#38bdf8] transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
