import React, { useEffect, useState, useMemo } from 'react'
import Testimonials from '../components/sections/Testimonials'
import AboutPremium from '../components/sections/AboutPremium'
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../components/hooks/useScrollSpy";
import { Helmet } from 'react-helmet';
import Categories from '../components/sections/Categories'
import Hero from '../components/sections/Hero'
import ShopByCollection from '../components/sections/Collections'
import FeaturedProducts from '../components/sections/Featured'
import products from '../data/products'
import PromoBanner from '../components/sections/PromoBanner'

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    }
  }, [location]);

  const [selectedCategory, setSelectedCategory] = useState("all");


  return (
    <div>

        <Helmet>
          <title>NexCart – Premium React eCommerce Template</title>

          <meta
            name="description"
            content="NexCart is a modern, high-performance React and Tailwind CSS eCommerce template built for online stores, fashion brands, and digital products. Fully responsive, scalable, and designed for premium user experience."
          />

          {/* Open Graph (for sharing) */}
          <meta property="og:title" content="NexCart – Premium React eCommerce Template" />
          <meta
            property="og:description"
            content="A modern and premium eCommerce UI template built with React & Tailwind CSS. Perfect for online stores and startups."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/preview.png" />

          {/* SEO Extras */}
          <meta name="keywords" content="React ecommerce template, Tailwind CSS shop, online store UI, ecommerce frontend, NexCart" />
          <meta name="author" content="GraceTech" />
        </Helmet>
      <main>
        <Hero />
        <Categories />      
        <ShopByCollection />
        <PromoBanner />
        <FeaturedProducts products={products} />        
        <AboutPremium />
        <Testimonials />
      </main>
    </div>
  )
}

export default Home
