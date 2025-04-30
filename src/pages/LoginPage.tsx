import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import LoginForm from '../components/login/LoginForm';
import Logo from '../components/common/Logo';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = async (username: string, password: string, secretKey: string, rememberMe: boolean) => {
    setIsLoading(true);
    try {
      await login(username, password, secretKey, rememberMe, `user`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Logo />
          <h1 className="mt-4 text-3xl font-bold text-primary-800">Admin Dashboard</h1>
          <p className="mt-2 text-secondary-600">Sign in to access the admin panel</p>
        </div>
        
        <div className="card bg-white shadow-xl rounded-xl animate-fade-in">
          <div className="card-body p-6 sm:p-8">
            <LoginForm onLogin={handleLogin} isLoading={isLoading} />
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-secondary-500">
          <p>Protected dashboard. Authorized personnel only.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;