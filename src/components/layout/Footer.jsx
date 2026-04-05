import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import { MailQuestion } from 'lucide-react';
import PremiumNewsletter from './NewsLetter';

const Footer = () => {
    const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {

    if (link.type === "route") {
      navigate(link.path);
      return;
    }

    const scrollAction = () => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: link.id } });
      } else {
        scrollToSection(link.id);
      }
    };

    setTimeout(scrollAction, 320);
  };

  return (
    <div className='mt-20'>

    <PremiumNewsletter />
    <footer className="bg-[#0A0A0A] text-white pt-20 sm:pt-24 pb-10 px-6 mt-20 sm:mt-20">

      {/* 🔥 Main Footer Content */}
      <div className="max-w-7xl mx-auto">

        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link to='/'><div className="text-2xl font-serif text-white tracking-wide">
                NexCart
              </div></Link>
            </div>

            <p className="text-gray-400 leading-relaxed">
            Premium online store offering high-quality products, fast shipping, and a seamless shopping experience.
            </p>

            {/* Social */}
            <div className="flex gap-4 mt-6">
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Instagram size={18} />
              </a>
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Facebook size={18} />
              </a>
              <a className="bg-white/5 p-3 rounded-xl hover:bg-primary hover:text-black transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">

            {NAV_LINKS.map(link => {
              const isActive =
                link.type === "route"
                  ? location.pathname === link.path
                  : activeSection === link.id;

              return (
                <li
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className={`
                  hover:text-primary cursor-pointer transition
                    
                    ${isActive ? "" : ""}
                  `}
                >
                  {link.label}
                </li>
              );
            })}
          
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Products</h4>

            <ul className="space-y-3 text-gray-400">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Featured Products</li>
            <li>Trending Items</li>
            <li>Exclusive Deals</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-white mt-1" />
                <p>(123) 456-7890</p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-white mt-1" />
                <p>hello@nexcart.com</p>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-white mt-1" />
                <p>
                  123 Beauty Street
                  <br />
                  Lagos, Nigeria
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        {/* Bottom Footer */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">

        <p className='text-center'>
          © {new Date().getFullYear()} NexCart. All rights reserved. Built with ❤️ by GraceTech.
        </p>

        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="/privacy-policy" className="hover:text-primary transition">
            Privacy Policy
          </a>

          <a href="/terms" className="hover:text-primary transition">
            Terms & Conditions
          </a>
        </div>

        </div>

      </div>
    </footer>

    </div>
  );
};

export default Footer;