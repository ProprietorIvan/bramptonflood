import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a 
    href={href}
    className="p-2 bg-red-800 hover:bg-white hover:text-red-900 transition-all duration-300 rounded-lg"
    aria-label={label}
  >
    {icon}
  </a>
);

const Footer: React.FC = () => {
  const serviceAreas = [
    'Brampton',
    'Toronto',
    'North York',
    'Etobicoke',
    'Scarborough',
    'Mississauga',
    'Greater Toronto Area'
  ];

  const services = [
    'Water Damage Restoration',
    'Flood Cleanup',
    'Water Extraction',
    'Structural Drying',
    'Property Restoration'
  ];

  const socialLinks: SocialLinkProps[] = [
    { href: '#', icon: <Facebook size={20} />, label: 'Facebook' },
    { href: '#', icon: <Twitter size={20} />, label: 'Twitter' },
    { href: '#', icon: <Instagram size={20} />, label: 'Instagram' },
    { href: '#', icon: <Linkedin size={20} />, label: 'LinkedIn' }
  ];

  return (
    <footer className="relative mt-16">
      <div className="bg-gradient-to-b from-red-900 to-red-950 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">
                Brampton Flood Restoration
              </h2>
              <p className="text-red-200 mb-6 leading-relaxed max-w-md">
                Professional flood damage restoration services across the Greater Toronto Area. 
                Our expert team delivers quality solutions for all water damage situations.
              </p>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-red-200">
                  <MapPin size={16} className="text-red-400" />
                  <span>Downtown Brampton, ON</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href="tel:647-555-0123"
                    className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors"
                  >
                    <Phone size={16} className="text-red-400" />
                    647-555-0123
                  </a>
                  <a 
                    href="mailto:office@bramptonflood.com"
                    className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors"
                  >
                    <Mail size={16} className="text-red-400" />
                    office@bramptonflood.com
                  </a>
                  <a 
                    href="https://bramptonflood.com"
                    className="inline-flex items-center gap-2 text-red-200 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} className="text-red-400" />
                    bramptonflood.com
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Service Areas</h3>
              <ul className="space-y-3">
                {serviceAreas.map((area) => (
                  <li key={area}>
                    <Link 
                      href={`/service-areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-red-200 hover:text-white transition-colors"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link 
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-red-200 hover:text-white transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links & Bottom Bar */}
          <div className="border-t border-red-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-red-200 text-sm">
                © {new Date().getFullYear()} Brampton Flood Restoration. All rights reserved.
              </div>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} {...social} />
                ))}
              </div>

              <div className="flex gap-6 text-sm">
                <Link href="/privacy-policy" className="text-red-200 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-red-200 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
          
          {/* Company Info Banner */}
          <div className="mt-8 text-center">
            <p className="text-red-200">
              Professional Service • Licensed & Insured • Free Estimates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;