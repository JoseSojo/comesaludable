import React from 'react';
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
import { Route, useLocation } from 'wouter';
import AdminLogin from './pages/admin/AdminLogin';
import MenuPage from './pages/admin/internal/MenuPage';
import RestaurantPage from './pages/admin/internal/RestaurantPage';
import CategoryPage from './pages/admin/internal/CategoryPage';
import TypePage from './pages/admin/internal/TypePage';
import EnvironmentPage from './pages/admin/internal/EnvieronmentPage';
import RestaurantFicha from './pages/admin/RestaurantFicha';
import CreateRestaurantPage from './pages/admin/internal/create/CreateRestaurantPage';
import CreateMenuPage from './pages/admin/internal/create/CreateMenuPage';
import MenuFichaPage from './pages/admin/internal/MenuUpdatePage';
import UpdateRestaurantPage from './pages/admin/internal/UpdateRestaurantPage';

function App() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = React.useState(false);
  const [isRestaurantLoginOpen, setIsRestaurantLoginOpen] = React.useState(false);

  const location = useLocation();

  const Redirect = (param: string) => {
    location[1](param, { replace: true });
  }

  return (
    <>
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onRegisterClick={() => {
          setIsLoginOpen(false);
          setIsRegisterOpen(true);
        }}
        redirect={Redirect}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onLoginClick={() => {
          setIsRegisterOpen(false);
          setIsLoginOpen(true);
        }}
        redirect={Redirect}
      />

      <RestaurantLoginModal
        isOpen={isRestaurantLoginOpen}
        onClose={() => setIsRestaurantLoginOpen(false)}
        redirect={Redirect}
      />

      <Route
        path={`/`}
      >
        <LandingPage
          onLoginClick={() => setIsLoginOpen(true)}
          onRegisterClick={() => setIsRegisterOpen(true)}
          onRestaurantLoginClick={() => setIsRestaurantLoginOpen(true)}
        />
      </Route>

      <Route
        path={`/admin/login`}
      >
        <AdminLogin />
      </Route>
      {/* <Route
        path={`/admin/`}
      >
        <AdminDashboard />
      </Route> */}

      <Route path={`/search`}>
        <SearchPage />
      </Route>
      <Route path={`/admin`}>
        <ProtectedRoute role={UserRole.ADMIN}><AdminDashboard /></ProtectedRoute>
      </Route>
      <Route path={`/admin/menus`}>
        <ProtectedRoute role={UserRole.ADMIN}><MenuPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/menus/:id`}>
        <ProtectedRoute role={UserRole.ADMIN}><MenuFichaPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/environment`}>
        <ProtectedRoute role={UserRole.ADMIN}><EnvironmentPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/restaurants`}>
        <ProtectedRoute role={UserRole.ADMIN}><RestaurantPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/restaurant/create`}>
        <ProtectedRoute role={UserRole.ADMIN}><CreateRestaurantPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/restaurant/update/:id`}>
        <ProtectedRoute role={UserRole.ADMIN}><UpdateRestaurantPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/restaurants/:id`}>
        <RestaurantFicha />
      </Route>
      <Route path={`/admin/category`}>
        <ProtectedRoute role={UserRole.ADMIN}><CategoryPage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/type`}>
        <ProtectedRoute role={UserRole.ADMIN}><TypePage /></ProtectedRoute>
      </Route>
      <Route path={`/admin/restaurant/:id/menu/create`}>
        <ProtectedRoute role={UserRole.ADMIN}><CreateMenuPage /></ProtectedRoute>
      </Route>
      <Route path={`/restaurant`}>
        <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantDashboard /></ProtectedRoute>
      </Route>
      <Route path={`/restaurant/profile`}>
        <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantProfile /></ProtectedRoute>
      </Route>
      <Route path={`/restaurant/menus`}>
        <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantMenu /></ProtectedRoute>
      </Route>
      <Route path={`/restaurant/report`}>
        <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantReport /></ProtectedRoute>
      </Route>
      <Route path={`/restaurant/analytic`}>
        <ProtectedRoute role={UserRole.RESTAURANT}><RestaurantAnalytic /></ProtectedRoute>
      </Route>
      <Route path={`/profile`}>
        <ProtectedRoute role={UserRole.CUSTOMER}><UserProfile /></ProtectedRoute>
      </Route>
    </>
  );
}

export default App;