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
      {/* <nav className="navbar bg-base-100 fixed top-0 z-50 shadow-lg">
        <div className="container mx-auto grid place-items-center lg:block">
          <div className="flex-1">
            <a className="text-xl font-bold text-primary">HealthyEats</a>
          </div>
          <div className="flex-none gap-2">
            <button className="btn btn-ghost" onClick={() => navigate(`/restaurant`)}>
              <Search className='w-5 h-5' />
              <span className='hidden lg:block'>Buscar</span>
            </button>
            {
              isAuthenticated
                ? user.access
                  ? <>
                    <button className="btn btn-ghost" onClick={() => navigate(`/restaurant`)}>
                      <BarChart className='w-5 h-5' />
                      <span className='hidden lg:block'>Panel</span>
                    </button>
                    <button className="btn btn-ghost" onClick={logout}>
                      <LogOut className='w-5 h-5' />
                      <span className='hidden lg:block'>Salir</span>
                    </button>
                  </>
                  : user.email === `comesaludable25`
                    ? <>
                      <button className="btn btn-ghost" onClick={() => navigate(`/admin`)}>
                        <BarChart className='w-5 h-5' />
                        <span className='hidden lg:block'>Administración</span>
                      </button>
                      <button className="btn btn-ghost" onClick={logout}>
                        <LogOut className='w-5 h-5' />
                        <span className='hidden lg:block'>Salir</span>
                      </button>
                    </>
                    : <>
                      <button className="btn btn-ghost" onClick={() => navigate(`/profile`)}>
                        <User2 className='w-5 h-5' />
                        <span className='hidden lg:block'>Perfil</span>
                      </button>
                      <button className="btn btn-ghost" onClick={logout}>
                        <LogOut className='w-5 h-5' />
                        <span className='hidden lg:block'>Salir</span>
                      </button>
                    </>
                : <>
                  <button className="btn btn-ghost" onClick={onLoginClick}>
                    <LogIn className='w-5 h-5' />
                    <span className='hidden lg:block'>Login</span>
                  </button>
                  <button className="btn btn-primary" onClick={onRestaurantLoginClick}>
                    <Apple className='w-5 h-5' />
                    <span className='hidden lg:block'>Restaurant Login</span>
                  </button>
                  <button className="btn btn-ghost" onClick={onRegisterClick}>
                    <UserPlus className='w-5 h-5' />
                    <span className='hidden lg:block'>Sign Up</span>
                  </button>
                </>
            }

          </div>
        </div>
      </nav> */}

      <main className="">
        <Hero />
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