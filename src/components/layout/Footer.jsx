import React, { useState, useEffect } from 'react';
import { Scissors, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';

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
    <footer className="relative bg-[#0A0A0A] text-white pt-40 pb-10 px-6">

      {/* 🔥 Floating Newsletter */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-20 w-full max-w-6xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-10 rounded-3xl 
        bg-gradient-to-r from-white/10 to-primary backdrop-blur-xl border border-white/10 shadow-2xl">

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Stay up to date about <br /> our latest offers
            </h2>
            <p className="text-gray-400 mt-3">
              Get exclusive deals, updates & new meals.
            </p>
          </div>

          {/* Input */}
          <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10">
              <Mail size={18} className="text-gray-300" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
              />
            </div>

            <button className="px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">
              Subscribe
            </button>
          </div>

        </div>
      </div>

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
            Premium hairstyling studio offering luxury braids,
            wigs, silk press and modern beauty experiences.
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
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>

            <ul className="space-y-3 text-gray-400">
            <li>Box Braids</li>
            <li>Silk Press</li>
            <li>Luxury Wigs</li>
            <li>Boho Braids</li>
            <li>Cornrows</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-start">
                <Phone size={18} className="text-primary mt-1" />
                <p>(123) 456-7890</p>
              </div>

              <div className="flex gap-3 items-start">
                <Mail size={18} className="text-primary mt-1" />
                <p>hello@nexcart.com</p>
              </div>

              <div className="flex gap-3 items-start">
                <MapPin size={18} className="text-primary mt-1" />
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
          © {new Date().getFullYear()} LustraHair. All rights reserved. Built with ❤️ by GraceTech.
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
  );
};

export default Footer;