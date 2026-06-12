import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    role: '',
    phone: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formErrors[e.target.name]) {
      setFormErrors({ ...formErrors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.companyName) errors.companyName = "Company Name is required.";
    if (!formData.role) errors.role = "Role is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.email) errors.email = "Email is required.";
    
    if (formData.email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setFormErrors({});
    setSubmitStatus('success');
    setFormData({
      companyName: '',
      name: '',
      role: '',
      phone: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitStatus(null);
    }, 5000);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header staggered animation
      gsap.from('.contact-header > *', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // Left card entrance
      gsap.from('.contact-card-left', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
      
      // Stagger form elements inside the left card
      gsap.from('.contact-card-left form > div', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-card-left',
          start: 'top 85%',
        }
      });

      // Right card entrance
      gsap.from('.contact-card-right', {
        x: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      });
      
      // Stagger info boxes in the right card
      gsap.from('.contact-info-box', {
        x: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-card-right',
          start: 'top 85%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col items-center justify-center py-10 lg:py-12 bg-white relative">
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        
        {/* Main Section Heading */}
        <div className="contact-header text-center mb-8 flex flex-col items-center">
          {/* Theme Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm mb-4">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0070c2]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase pr-2">Get in Touch</span>
          </div>
          
          <h2 className="text-3xl sm:text-[32px] md:text-4xl font-outfit font-bold text-slate-900 leading-[1.2] mb-4 tracking-tight">
            Have a Project?{' '}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#0070c2] to-blue-500">
              Let's Talk!
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side: Form Card */}
          <div className="contact-card-left w-full lg:w-3/5 bg-white rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.06)] border border-slate-100 p-6 lg:p-8 font-outfit">
            
            <h3 className="text-2xl lg:text-3xl font-light text-slate-800 mb-3">
              Send us a Message
            </h3>
            
            <p className="text-slate-500 text-sm mb-8 leading-relaxed max-w-lg">
              Discover how we've collaborated with leading startups, scaleups, and enterprises to build next-gen digital solutions, from concept to launch.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              
              {submitStatus === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 text-green-700 border border-green-200 text-sm font-medium animate-fade-in-up">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Row 1: Company & Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name *"
                    className={`w-full px-5 py-3.5 text-sm bg-transparent border rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${formErrors.companyName ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-slate-400 focus:ring-slate-400'}`}
                  />
                  {formErrors.companyName && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{formErrors.companyName}</p>}
                </div>
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    className={`w-full px-5 py-3.5 text-sm bg-transparent border rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${formErrors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-slate-400 focus:ring-slate-400'}`}
                  />
                  {formErrors.name && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{formErrors.name}</p>}
                </div>
              </div>

              {/* Row 2: Role */}
              <div>
                <input 
                  type="text" 
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  placeholder="Role *"
                  className={`w-full px-5 py-3.5 text-sm bg-transparent border rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${formErrors.role ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-slate-400 focus:ring-slate-400'}`}
                />
                {formErrors.role && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{formErrors.role}</p>}
              </div>

              {/* Row 3: Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone *"
                    className={`w-full px-5 py-3.5 text-sm bg-transparent border rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${formErrors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-slate-400 focus:ring-slate-400'}`}
                  />
                  {formErrors.phone && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{formErrors.phone}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    className={`w-full px-5 py-3.5 text-sm bg-transparent border rounded-full text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${formErrors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-slate-400 focus:ring-slate-400'}`}
                  />
                  {formErrors.email && <p className="text-red-500 text-xs mt-1 ml-4 font-medium">{formErrors.email}</p>}
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <div>
                <textarea 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or goals..."
                  className="w-full px-5 py-4 text-sm bg-transparent border border-slate-200 rounded-[1.5rem] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all resize-none min-h-[120px]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-transparent border border-[#0070c2] text-[#0070c2] font-semibold text-sm hover:bg-[#0070c2] hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-blue-500/30 group"
                >
                  <span>SEND MESSAGE</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </form>
          </div>

          {/* Right Side: Image Info Card */}
          <div className="contact-card-right w-full lg:w-2/5 relative rounded-[2rem] overflow-hidden shadow-xl min-h-[320px] lg:min-h-auto flex flex-col">
            
            {/* Background Image (Space/Earth) */}
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=1200" 
              alt="Space Earth Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/80 via-[#050B14]/60 to-[#0066cc]/40"></div>
            
            {/* Content Container */}
            <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
              
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-6 leading-tight font-outfit">
                Hii, We are always here to help you!
              </h3>
              
              {/* Contact Info Box 1 */}
              <div className="contact-info-box bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 mb-4 flex items-center gap-5 hover:bg-[#0f172a]/60 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.792c-.008-.016-.014-.029-.022-.045l-4.225 1.488a10.871 10.871 0 0 1-5.836-5.836l1.488-4.225c-.015-.008-.029-.014-.045-.022L1.049 3.668c-.146-.358-.094-.77.135-1.077L3.488.463c.277-.37.755-.521 1.2-.387 1.83.548 3.513 1.545 4.908 2.941 2.378 2.379 4.095 5.433 4.965 8.832.186.726-.145 1.483-.811 1.848l-2.613 1.433a12.894 12.894 0 0 0 4.887 4.887l1.433-2.613c.365-.666 1.122-.997 1.848-.811 3.399.87 6.453 2.587 8.832 4.965 1.396 1.395 2.393 3.078 2.941 4.908.134.445-.017.923-.387 1.2l-2.128 2.304c-.307.229-.719.281-1.077.135z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg font-medium mb-0.5">Contact Number</p>
                  <p className="text-slate-300 text-sm">022-66221640</p>
                </div>
              </div>

              {/* Contact Info Box 2 */}
              <div className="contact-info-box bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center gap-5 hover:bg-[#0f172a]/60 transition-colors cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-lg font-medium mb-0.5">Email</p>
                  <p className="text-slate-300 text-sm">sales@aeonx.digital</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
