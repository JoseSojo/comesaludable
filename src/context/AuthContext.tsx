import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  logout: () => void;
}

const defaultContext:AuthContextType = {
  isAuthenticated: false,
  logout: () => {},
  user: null
} 

const AuthContext = createContext<AuthContextType>(defaultContext);
  
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const currentUser = window.localStorage.getItem(`comesaludable_data`);
  const currentToken = window.localStorage.getItem(`comesaludable_token`);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(currentToken ? true : false);
  const [user, setUser] = useState<any | null>(currentUser ? JSON.parse(currentUser) : null);

  const logout = () => {
    window.localStorage.removeItem(`comesaludable_data`);
    window.localStorage.removeItem(`comesaludable_token`);
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
