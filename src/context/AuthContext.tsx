import React, { createContext, useContext, useState, ReactNode } from 'react';
import toast from 'react-hot-toast';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  login: (username: string, password: string, secretKey: string, rememberMe: boolean, path: string) => Promise<boolean>;
  logout: () => void;
}

const defaultContext:AuthContextType = {
  isAuthenticated: false,
  login: async () => {return true},
  logout: () => {},
  user: null
} 

const AuthContext = createContext<AuthContextType>(defaultContext);
  
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currentUser = window.localStorage.getItem(`comesaludable_data`);
  const currentToken = window.localStorage.getItem(`comesaludable_token`);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(currentToken ? true : false);
  const [user, setUser] = useState<any | null>(currentUser ? JSON.parse(currentUser) : null);

  // Mock authentication - in a real app, this would connect to a backend API
  const login = async (username: string, password: string, secretKey: string, rememberMe: boolean): Promise<boolean> => {
    return true;
  };

  const logout = () => {
    window.localStorage.removeItem(`comesaludable_data`);
    window.localStorage.removeItem(`comesaludable_token`);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
