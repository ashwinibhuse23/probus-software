import React from 'react';
import { LuMapPin, LuPhone, LuMail, LuSend } from 'react-icons/lu';
import contactVideo from '../assets/Images/Contactback.mp4';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-outfit">
      
      {/* Header Section */}
      <div className="min-h-screen bg-[#0a1526] relative overflow-hidden flex items-center justify-center pt-24">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src={contactVideo} type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0070c2]/50 to-[#0a1526]/80 z-0"></div>
      </div>

      {/* Main Content: Contact Form & Location */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 w-full">
        
        {/* Section Tag */}
        <div className="flex justify-center mb-12 fade-up-anim">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-sm">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0070c2]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wide text-slate-700 uppercase pr-2">Get In Touch</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Location & Contact Info */}
          <div className="fade-up-anim">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Location</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-[#0070c2]">
                  <LuMapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Headquarters</h3>
                  <p className="text-slate-600 leading-relaxed">
                    123 Innovation Drive,<br />
                    Tech District, City 45678<br />
                    Country
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-[#0070c2]">
                  <LuPhone className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Phone</h3>
                  <p className="text-slate-600 leading-relaxed">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9am - 6pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-[#0070c2]">
                  <LuMail className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">Email</h3>
                  <p className="text-slate-600 leading-relaxed">
                    hello@probussoftware.com<br />
                    support@probussoftware.com
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-10 h-64 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300">
              <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                [ Map Embed Goes Here ]
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden fade-up-anim">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0070c2] focus:ring-2 focus:ring-[#0070c2]/20 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0070c2] focus:ring-2 focus:ring-[#0070c2]/20 outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0070c2] focus:ring-2 focus:ring-[#0070c2]/20 outline-none transition-all" placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0070c2] focus:ring-2 focus:ring-[#0070c2]/20 outline-none transition-all" placeholder="How can we help?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Message</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#0070c2] focus:ring-2 focus:ring-[#0070c2]/20 outline-none transition-all resize-none" placeholder="Tell us more about your project..."></textarea>
                </div>

                <button type="button" className="w-full py-4 bg-[#0070c2] hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-500/30">
                  <span>Send Message</span>
                  <LuSend />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-[#0a1526] to-[#112240] mt-auto">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Ready to transform your business?</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10">Join leading organizations who trust Probus Software to deliver innovative digital solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#0070c2] hover:bg-blue-600 text-white font-bold rounded-full transition-all shadow-lg shadow-blue-500/30">
              Start a Project
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20">
              View Our Services
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
