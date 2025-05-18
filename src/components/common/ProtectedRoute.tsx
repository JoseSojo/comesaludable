import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../domain/entities/User';
import { useLocation } from 'wouter';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: UserRole;
}

const ProtectedRoute = ({ children, role }: ProtectedRouteProps) => {
  const { isAuthenticated, user } = useAuth();

  const location = useLocation();

  if (!isAuthenticated || !user) {
    return location[1]("/") as any
  }

  if (role === UserRole.ADMIN) {
    if (!user.email) {
      return location[1]("/restaurant") as any
    }

    if (user.email !== `comesaludable2025`) {
      return location[1]("/profile") as any
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