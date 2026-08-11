import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaFacebookF, label: 'Facebook' },
    { icon: FaInstagram,   label: 'Instagram' },
    { icon: FaXTwitter,  label: 'Twitter' },
    { icon: FaLinkedinIn,  label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* brand */}
          <div className="space-y-3">
            <h2 className="text-2xl font-bold">SportNest</h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Discover, book, and enjoy the best sports facilities near you —
              all in just a few clicks.
            </p>
          </div>

          {/* contact info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <MdLocationOn size={18} className="text-[#22C55E] shrink-0" />
                <span>Lahti, Finland</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone size={18} className="text-[#22C55E] shrink-0" />
                <a href="tel:+358000000000" className="hover:text-white transition-colors">
                  +358 00 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail size={18} className="text-[#22C55E] shrink-0" />
                <a href="mailto:support@sportnest.com" className="hover:text-white transition-colors">
                  support@sportnest.com
                </a>
              </li>
            </ul>
          </div>

          {/* social links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={'/not-found'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#22C55E] flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
          © {currentYear} SportNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;