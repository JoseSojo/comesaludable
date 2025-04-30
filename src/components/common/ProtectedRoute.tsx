import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../domain/entities/User';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, role }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/" replace />;
  }

  if (role === UserRole.ADMIN) {
    if (!user.email) {
      return <Navigate to="/restaurant" replace />;
    }

    if (user.email !== `comesaludable2025`) {
      return <Navigate to="/profile" replace />;
    }
  }

  if (role === UserRole.RESTAURANT) {
    if (user.email) {
      return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;