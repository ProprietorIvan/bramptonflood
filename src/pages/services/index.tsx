import React, { useState, useEffect } from 'react';
import { Check, Phone, Mail, ArrowRight, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import Navigation from '../../components/Navigation';
import Head from 'next/head';

const TorontoServices = () => {
  const [mounted, setMounted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const seoTitle = "Emergency Flood & Water Damage Services Toronto | 24/7 Response";
  const seoDescription = "Toronto's trusted flood response team. 24/7 emergency water damage restoration, mold removal & repair services in GTA. Professional IICRC certified experts. Call (647) 361-0663.";

  const services = [
    {
      title: "Emergency Water Extraction",
      description: "Rapid water removal services across the GTA with state-of-the-art equipment for immediate flood response.",
      details: ["24/7 GTA emergency response", "Flood water removal", "Canadian-certified equipment", "Complete water extraction"],
      image: "/photos/homepage/2.jpg",
      url: "/flood-repair"
    },
    {
      title: "Structural Drying & Dehumidification",
      description: "Professional-grade drying solutions optimized for Toronto's climate.",
      details: ["Industrial air movers", "Canadian-grade dehumidifiers", "Advanced moisture tracking", "Climate-specific drying"],
      image: "/photos/homepage/3.jpg",
      url: "/services/structural-drying"
    },
    {
      title: "Floor & Carpet Restoration",
      description: "Comprehensive flooring restoration services for Toronto homes and businesses.",
      details: ["Canadian hardwood restoration", "GTA-certified carpet care", "Complete subfloor repair", "Local material sourcing"],
      image: "/photos/homepage/4.jpg",
      url: "/services/flooring"
    },
    {
      title: "Drywall & Paint Services",
      description: "Expert wall restoration and painting services throughout the Greater Toronto Area.",
      details: ["Ontario code compliance", "Professional installation", "Perfect texture matching", "Premium materials"],
      image: "/photos/homepage/7.jpg",
      url: "/services/drywall"
    },
    {
      title: "Mold Remediation",
      description: "Professional mold removal and prevention services for Toronto's unique climate.",
      details: ["Ontario certified removal", "Health Canada compliance", "Toronto lab testing", "Year-round protection"],
      image: "/photos/homepage/5.jpg",
      url: "/services/mold"
    },
    {
      title: "Kitchen & Bath Restoration",
      description: "Specialized restoration services for Toronto homes and properties.",
      details: ["Local material sourcing", "Toronto code compliance", "GTA-certified experts", "Complete restoration"],
      image: "/photos/homepage/6.jpg",
      url: "/services/kitchen-bath"
    }
  ];

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    if (!mounted) return;
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 1500);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#1C1917]">
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://flood.ltd/services" />
        
        {/* OpenGraph / Social Media */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:url" content="https://flood.ltd/services" />
        <meta property="og:site_name" content="Flood Ltd." />
        <meta property="og:image" content="https://flood.ltd/og-image-services.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Emergency Flood Services Toronto" />

        {/* Keywords */}
        <meta name="keywords" content="water damage toronto, flood repair toronto, emergency water damage GTA, toronto flood services, water extraction toronto, mold removal toronto, flood cleanup GTA, emergency flood response" />
        
        {/* Geo Tags */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        
        {/* Language */}
        <link rel="alternate" hrefLang="en-CA" href="https://flood.ltd/services" />
      </Head>

      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1C1917] py-16">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Toronto&apos;s 24/7 Emergency<br />Flood Response Team
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
              <button
                onClick={() => copyToClipboard("(647) 361-0663", true)}
                className={`${
                  copiedPhone ? 'bg-[#27AE60] scale-95' : 'bg-[#8B2635] hover:bg-[#7A2230]'
                } px-8 py-3 rounded-lg transition-all duration-300 group min-w-[240px]`}
              >
                {copiedPhone ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-white font-bold">
                    (647) 361-0663
                  </div>
                )}
              </button>
              <button
                onClick={() => copyToClipboard("office@flood.ltd", false)}
                className={`${
                  copiedEmail ? 'bg-[#27AE60] scale-95' : 'bg-white hover:bg-stone-100'
                } px-8 py-3 rounded-lg transition-all duration-300 min-w-[240px]`}
              >
                {copiedEmail ? (
                  <div className="flex items-center justify-center gap-2 text-white">
                    <span>Copied!</span>
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="text-[#1C1917] font-bold">
                    Email Us
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
            >
              <div className="aspect-video relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#1C1917] group-hover:text-[#8B2635] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#44403C] mb-4">{service.description}</p>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    expandedService === index ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <ul className="space-y-2 mb-4">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#8B2635] flex-shrink-0 mt-1" />
                        <span className="text-[#44403C]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={() => setExpandedService(expandedService === index ? null : index)}
                    className="text-[#8B2635] hover:text-[#7A2230] transition-colors flex items-center gap-1"
                  >
                    {expandedService === index ? (
                      <>
                        <Minus className="w-4 h-4" />
                        <span>Less Info</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>More Info</span>
                      </>
                    )}
                  </button>
                  
                  <a
                    href={service.url}
                    className="inline-flex items-center gap-1 text-[#8B2635] hover:text-[#7A2230] transition-colors"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TorontoServices;