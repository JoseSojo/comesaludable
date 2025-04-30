import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginModal from './components/auth/LoginModal';
import RegisterModal from './components/auth/RegisterModal';
import RestaurantLoginModal from './components/auth/RestaurantLoginModal';
import AdminDashboard from './pages/admin/AdminDashboard';
import RestaurantDashboard from './pages/restaurant/RestaurantDashboard';
import UserProfile from './pages/user/UserProfile';
import SearchPage from './pages/search/SearchPage';
import ProtectedRoute from './components/common/ProtectedRoute';
import { UserRole } from './domain/entities/User';
import RestaurantProfile from './pages/restaurant/profile/RestaurantProfile';
import RestaurantAnalytic from './pages/restaurant/RestaurantAnalytic';
import RestaurantReport from './pages/restaurant/RestaurantReport';
import RestaurantMenu from './pages/restaurant/RestaurantMenu';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isRestaurantLoginOpen, setIsRestaurantLoginOpen] = React.useState(false);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <LandingPage
        onLoginClick={() => setIsLoginOpen(true)}
        onRegisterClick={() => setIsRegisterOpen(true)}
        onRestaurantLoginClick={() => setIsRestaurantLoginOpen(true)}
      />
    },
    { path: `/search`, element: <SearchPage /> },
    { path: `/admin`, element: <ProtectedRoute role={UserRole.ADMIN}><AdminDashboard /></ProtectedRoute> },
    { path: `/restaurant`, element: <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantDashboard /></ProtectedRoute> },
    { path: `/restaurant/profile`, element: <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantProfile /></ProtectedRoute> },
    { path: `/restaurant/menus`, element: <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantMenu /></ProtectedRoute> },
    { path: `/restaurant/report`, element: <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantReport /></ProtectedRoute> },
    { path: `/restaurant/analytic`, element: <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantAnalytic /></ProtectedRoute> },
    { path: `/profile`, element: <ProtectedRoute role={UserRole.CUSTOMER}><UserProfile /></ProtectedRoute> },
  ]);

  return (
    <>

      <RouterProvider router={router} />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onRegisterClick={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLoginClick={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <RestaurantLoginModal
        isOpen={isRestaurantLoginOpen}
        onClose={() => setIsRestaurantLoginOpen(false)}
      />
    </>
  );
}

export default App;