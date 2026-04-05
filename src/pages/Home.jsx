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
        <title>QuickBite | Fast Food Ordering React Template by GraceTech</title>
        <meta
          name="description"
          content="QuickBite is a modern React and Tailwind CSS food ordering UI template designed for restaurants, cloud kitchens, and delivery startups."
        />
        <meta property="og:title" content="QuickBite Food Ordering Template" />
        <meta property="og:description" content="Modern React + Tailwind food ordering UI template." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/preview.png" />
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
