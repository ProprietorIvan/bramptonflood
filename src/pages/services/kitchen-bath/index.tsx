import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Hammer, Paintbrush, Clock, CheckCircle2, Compass, Home, Mail } from 'lucide-react';
import Image from 'next/image';

const TorontoKitchenBathRestoration = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (647) 361-0663';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:office@flood.ltd';
  };

  const serviceFeatures = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Toronto Design Experts",
      description: "Local design specialists familiar with GTA architectural styles"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Quality Craftsmanship",
      description: "Master craftsmen with decades of Toronto restoration experience"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Completion",
      description: "Efficient project management throughout the Greater Toronto Area"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Complete Service",
      description: "Full-service GTA restoration from design to final touches"
    }
  ];

  const restorationServices = [
    {
      title: "Kitchen Restoration",
      points: [
        "Canadian-sourced cabinet refinishing",
        "Local granite & quartz restoration",
        "Custom Toronto-style backsplash",
        "Modern appliance integration"
      ]
    },
    {
      title: "Bathroom Revival",
      points: [
        "All-season waterproofing",
        "Toronto code-compliant fixtures",
        "Custom vanity solutions",
        "Premium Canadian materials"
      ]
    },
    {
      title: "Surface Treatments",
      points: [
        "Canadian stone restoration",
        "Cold-climate tile solutions",
        "Locally sourced materials",
        "Weather-resistant finishes"
      ]
    },
    {
      title: "Structural Updates",
      points: [
        "Toronto building code updates",
        "Energy-efficient solutions",
        "Canadian safety standards",
        "Modern storage designs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F4F0]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-stone-100 to-[#F5F4F0]">
        <div className="absolute inset-0 bg-grid-stone-200 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-[#8B2635] text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Toronto&apos;s Expert Kitchen & Bath Restoration
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Transform Your
                <span className="block text-[#8B2635]">Toronto Home</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Greater Toronto&apos;s premier kitchen and bath restoration experts. Our local craftsmen bring new life to your space with precision and care.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleEmergencyCall}
                  className="group inline-flex items-center justify-center gap-3 bg-[#8B2635] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#7A2230] transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  <span>Call (647) 361-0663</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleEmailContact}
                  className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-lg font-medium hover:bg-stone-100 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                  <span>Email Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/photos/homepage/7.jpg"
                  alt="Professional Kitchen and Bath Restoration Toronto"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">The Toronto Restoration Difference</h2>
            <p className="text-lg text-[#44403C]">Local expertise meets modern design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="bg-stone-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#8B2635] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-[#44403C]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">GTA Restoration Services</h2>
            <p className="text-lg text-[#44403C]">Complete restoration solutions for the Greater Toronto Area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {restorationServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                      <span className="text-[#44403C]">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#1C1917]">Toronto&apos;s Choice</h2>
              <p className="text-lg text-[#44403C] mb-6 leading-relaxed">
                Our expert restoration team has transformed hundreds of Toronto kitchens and bathrooms, creating stunning spaces that blend functionality with style.
              </p>
              <ul className="space-y-4">
                {[
                  "Toronto-inspired designs",
                  "Premium Canadian materials",
                  "Local expert installation",
                  "Climate-conscious solutions"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8B2635]" />
                    <span className="text-[#44403C] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/photos/homepage/2.jpg"
                alt="Toronto Kitchen and Bath Restoration Results"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Transform Your Toronto Home</h2>
            <p className="text-lg text-[#44403C]">Local expertise • Premium restoration</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Form content remains the same but with Toronto-specific labels */}
            <div className="space-y-6">
              {/* Rest of the form implementation */}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Toronto&apos;s Kitchen & Bath Experts
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Professional restoration services with guaranteed craftsmanship throughout the GTA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEmergencyCall}
              className="group inline-flex items-center justify-center gap-3 bg-white text-[#8B2635] px-8 py-4 rounded-full text-xl font-bold hover:bg-stone-100 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              <span>Call (647) 361-0663</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleEmailContact}
              className="group inline-flex items-center justify-center gap-3 bg-transparent text-white border-2 border-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              <span>Email Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TorontoKitchenBathRestoration;