import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../utils/constants';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import styles from './../../NewHome.module.css';
import { FaCartShopping } from 'react-icons/fa6'
import CartIcon from '../sections/cart/CartIcon';
import CartDrawer from '../sections/cart/CartDrawer';
import SearchOverlay from '../../context/SearchOverlay';
import { FiMenu, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { CircleUserRound, Search } from 'lucide-react';
import { MdOutlineSearch } from "react-icons/md";
import TopBar from './TopBar';
import MobileMenuDrawer from './MobileDrawer';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.id));

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (link) => {
    setIsMenuOpen(false);

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
    <>
    <nav 
      className={`${styles.navbar} ${isScrolled ? "bg-white/70 backdrop-blur-lg shadow-md border-b border-border" : 'bg-background-card'} 
      w-full border-b border-border bg-background-card text-text-primary sticky top-0 z-[999]
      transition-all duration-300`}>   
          <TopBar />
  
        <div style={{   padding: "1rem 1.25rem" }} className="max-w-7xl mx-auto  h-16 flex items-center justify-between">
        {/* Logo */}

        {/* LEFT (Logo + Mobile Menu) */}
        <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lgx:hidden p-2 text-xl rounded-lg hover:bg-gray-100 transition" 
              aria-label='menu'
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
            </button>

            {/* Logo */}
            <div
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-text-primary"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Link to='/'><span className='text-primary'>Nex</span>Cart</Link>
            </div>
          </div>

        {/* Desktop Nav */}
        <div className="hidden lgx:flex items-center gap-6 text-text-secondary text-sm font-medium">
          {NAV_LINKS.map(link => {
            const isActive =
              link.type === "route"
                ? location.pathname === link.path
                : activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className={`
                  rounded-lg font-medium transition
                  hover:text-primary
                  ${isActive ? "text-primary" : "hover:text-primary"}
                `}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right-side CTA / User */}
        <div className="flex items-center gap-2 sm:gap-3 text-xl text-text-primary">
          {/* right side */}
          
          <button onClick={() => setSearchOpen(true)}>
          <Search className='w-6 h-6' />
          </button>
          <CartIcon onClick={() => setIsCartOpen(true)} />
          <button>
            <CircleUserRound />          
          </button>

          <Link to='/shop' className='hidden lgx:block'>
            <button className="bg-primary font-medium text-white shadow-lg px-5 py-3 rounded-xl hover:scale-105 hover:bg-primary-hover duration-300 flex items-center gap-2 transition">
              Shop Now
            </button>
          </Link>
          
          {/* Mobile menu toggle */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lgx:hidden p-2 rounded-lg hover:bg-gray-100 transition" 
            aria-label='menu'
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button> */}
        </div>
      </div>

     {/* Mobile menu */}
     <MobileMenuDrawer
      isOpen={isMenuOpen}
      onClose={() => setIsMenuOpen(false)}
      NAV_LINKS={NAV_LINKS}
      handleNavClick={handleNavClick}
      activeSection={activeSection}
      location={location}
    />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <SearchOverlay
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />
    </nav>
    </>
  );
};

export default Navbar;
