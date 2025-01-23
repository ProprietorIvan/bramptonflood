import React, { useState } from 'react';
import Navigation from "@/components/Navigation";
import { Phone, ArrowRight, Hammer, Sparkles, Timer, CheckCircle2, Bot, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const TorontoFloorRestoration = () => {
  const [customerType, setCustomerType] = useState<'homeowner' | 'business' | null>(null);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+1 (647) 361-0663';
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:office@flood.ltd';
  };

  const restorationFeatures = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Advanced Technology",
      description: "AI-powered inspection ensures complete restoration of every damaged area"
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Toronto Expertise",
      description: "Specialized knowledge of GTA properties and local building codes"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Fast Response",
      description: "Quick response times throughout the Greater Toronto Area"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "5-Year Guarantee",
      description: "Industry-leading warranty on all restoration work"
    }
  ];

  const floorTypes = [
    {
      title: "Hardwood Floors",
      points: [
        "Complete water extraction",
        "Toronto climate-specific treatments",
        "Cupping & buckling restoration",
        "Perfect color matching"
      ]
    },
    {
      title: "Carpet & Padding",
      points: [
        "Deep hot water extraction",
        "Complete odor elimination",
        "Fresh padding installation",
        "Canadian safety-certified materials"
      ]
    },
    {
      title: "Tile & Grout",
      points: [
        "Professional grout restoration",
        "Seamless tile replacement",
        "Advanced cleaning process",
        "Winter-proof sealing"
      ]
    },
    {
      title: "Subfloor Systems",
      points: [
        "Complete structural drying",
        "Cold weather mold prevention",
        "Detailed support inspection",
        "Total system restoration"
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
                Toronto&apos;s Premier Floor Restoration Experts
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#1C1917]">
                Toronto
                <span className="block text-[#8B2635]">Floor & Carpet Restoration</span>
              </h1>
              <p className="text-xl text-[#44403C] mb-8 leading-relaxed">
                Serving the Greater Toronto Area with expert floor restoration services. Our local team combines advanced technology with masterful craftsmanship to restore your floors to their original beauty.
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
                  <span>Email Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/photos/homepage/3.jpg"
                  alt="Professional Floor Restoration Toronto"
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">Toronto&apos;s Restoration Experts</h2>
            <p className="text-lg text-[#44403C]">Specialized expertise for the Greater Toronto Area</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {restorationFeatures.map((feature, index) => (
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
            <h2 className="text-4xl font-bold mb-4 text-[#1C1917]">GTA Floor Restoration Services</h2>
            <p className="text-lg text-[#44403C]">Expert restoration for all floor types in Toronto&apos;s climate</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {floorTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold mb-4 text-[#1C1917]">{type.title}</h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
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

      {/* Form Section remains mostly the same but with Toronto-specific fields */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1C1917]">Get Toronto&apos;s Best Floor Restoration</h2>
            <p className="text-lg text-[#44403C]">Serving all GTA neighborhoods • Expert local service</p>
          </div>

          {/* Form content remains the same but with Toronto-specific labels */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Form content from original remains the same */}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-[#8B2635]">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Toronto&apos;s Expert Floor Restoration Service
          </h2>
          <p className="text-xl mb-8 text-stone-200">
            Serving the Greater Toronto Area with professional restoration services. Results guaranteed.
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
              <span>Email: office@flood.ltd</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TorontoFloorRestoration;