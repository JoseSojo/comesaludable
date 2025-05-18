import React from 'react';
import Hero from '../components/landing/Hero';
import FeaturedRestaurants from '../components/landing/FeaturedRestaurants';
import FeaturedMenus from '../components/landing/FeaturedMenus';
import Nutritionists from '../components/landing/Nutritionists';
import Testimonials from '../components/landing/Testimonials';
import RestaurantTestimonials from '../components/landing/RestaurantTestimonials';
import Footer from '../components/landing/Footer';
import Navbar from '../components/common/navbar/Navbar';
import MobileNav from '../components/common/navbar/MobileNavbar';
import TestMap from '../components/map/TestMap';

interface LandingPageProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
  onRestaurantLoginClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  onLoginClick,
  onRegisterClick,
  onRestaurantLoginClick
}) => {

  return (
    <div className="min-h-screen">
      <Navbar
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        onRestaurantLoginClick={onRestaurantLoginClick}
      />
      <main className="">
        <Hero />
        <TestMap />
        <FeaturedRestaurants />
        <FeaturedMenus />
        <Nutritionists />
        <RestaurantTestimonials />
        <Testimonials />
      </main>

      <Footer />
      <MobileNav
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        onRestaurantLoginClick={onRestaurantLoginClick}
      />
    </div>
  );
};

export default LandingPage;