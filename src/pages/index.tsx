import React, { useState } from 'react';
import { Phone, Droplets, Clock, Shield, ArrowRight, AlertTriangle, BadgeCheck, Activity, Home, Fan, CheckCircle2, Gauge } from 'lucide-react';
import Link from 'next/link';

interface FormData {
  name: string;
  phone: string;
  address: string;
  emergency: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const BramptonFlood = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    emergency: ''
  });

  const handleEmergencyCall = () => {
    window.location.href = 'tel:647-555-0123';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => (
    <div className="relative bg-gradient-to-br from-red-900 to-red-950 rounded-2xl p-8 overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-16 -translate-y-16">
        <div className="absolute inset-0 bg-red-800 opacity-20 rotate-45"></div>
      </div>
      <div className="relative z-10">
        <div className="text-red-300 mb-6 transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-red-100 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-red-200">
              <CheckCircle2 className="w-5 h-5 text-red-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const services = [
    {
      icon: <Droplets className="w-12 h-12" />,
      title: "Water Extraction",
      description: "Professional water removal services",
      features: [
        "High-powered extraction units",
        "Rapid response teams",
        "Complete water removal"
      ]
    },
    {
      icon: <Fan className="w-12 h-12" />,
      title: "Structural Drying",
      description: "Advanced dehumidification services",
      features: [
        "Industrial dehumidifiers",
        "Air movement systems",
        "Moisture monitoring"
      ]
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "Property Restoration",
      description: "Complete restoration services",
      features: [
        "Structural repairs",
        "Material restoration",
        "Build-back services"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-800">
          <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="rgba(255,255,255,0.1)" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-red-800 bg-opacity-50 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-medium mb-8">
              <Shield className="w-4 h-4" />
              Professional Flood Damage Restoration
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Brampton Flood Restoration
              <span className="block text-red-200 mt-4">& Emergency Repairs</span>
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto mb-12">
              Professional flood damage restoration services across the Greater Toronto Area. 
              Our expert team delivers quality restoration solutions.
            </p>

            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-white text-red-900 px-8 py-6 rounded-full text-2xl font-bold hover:bg-red-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-8 h-8" />
              <span>647-555-0123</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Service Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['Brampton', 'Toronto', 'North York', 'Etobicoke', 'Scarborough', 'Mississauga'].map((area) => (
                <div key={area} className="px-6 py-3 bg-red-50 text-red-900 rounded-full font-medium">
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-red-900 mb-4">Our Professional Services</h2>
            <p className="text-lg text-red-700 max-w-3xl mx-auto">
              Comprehensive flood restoration services delivered by certified professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-900 to-red-950 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Request Service</h2>
              <p className="text-red-200">
                Email: <span className="font-semibold">office@bramptonflood.com</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-red-800 border border-red-700 text-white placeholder-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-red-800 border border-red-700 text-white placeholder-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <input
                type="text"
                name="address"
                placeholder="Property Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-red-800 border border-red-700 text-white placeholder-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              />
              <textarea
                name="emergency"
                placeholder="Describe Your Service Needs"
                value={formData.emergency}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-red-800 border border-red-700 text-white placeholder-red-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-red-900 py-4 rounded-lg text-lg font-semibold hover:bg-red-50 transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BramptonFlood;