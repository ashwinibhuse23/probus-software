import React from 'react';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen pt-24 bg-[#f8faff]">
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive software solutions to accelerate your business growth.</p>
      </div>
      <ServicesSection />
    </div>
  );
};

export default Services;
