import React, { useState, useRef, useEffect } from 'react';
import { Shield, Lock, Eye, EyeOff, User } from 'lucide-react';
import InputField from './InputField';

interface LoginFormProps {
  onLogin: (username: string, password: string, secretKey: string, rememberMe: boolean) => Promise<void>;
  isLoading: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, isLoading }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [formErrors, setFormErrors] = useState<{
    username?: string;
    password?: string;
    secretKey?: string;
  }>({});
  
  const usernameRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Focus username input on component mount
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);
  
  const validateForm = (): boolean => {
    const errors: {
      username?: string;
      password?: string;
      secretKey?: string;
    } = {};
    
    if (!username.trim()) {
      errors.username = 'Username is required';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    }
    
    if (!secretKey) {
      errors.secretKey = 'Secret key is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      await onLogin(username, password, secretKey, rememberMe);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <InputField
        ref={usernameRef}
        id="username"
        label="Username"
        type="text"
        placeholder="admin"
        icon={<User size={20} />}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={formErrors.username}
      />
      
      <InputField
        id="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        icon={<Lock size={20} />}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={formErrors.password}
        rightElement={
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
      />
      
      <InputField
        id="secretKey"
        label="Secret Key"
        type={showSecretKey ? 'text' : 'password'}
        placeholder="Enter admin secret key"
        icon={<Shield size={20} />}
        value={secretKey}
        onChange={(e) => setSecretKey(e.target.value)}
        error={formErrors.secretKey}
        rightElement={
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            onClick={() => setShowSecretKey(!showSecretKey)}
          >
            {showSecretKey ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        }
      />
      
      <div className="form-control mt-2">
        <label className="label cursor-pointer justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-sm checkbox-primary"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <span className="label-text">Remember me</span>
        </label>
      </div>
      
      <div className="mt-6">
        <button
          type="submit"
          className={`btn btn-primary w-full ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading loading-spinner loading-sm"></span>
              Authenticating...
            </>
          ) : (
            'Sign In'
          )}
        </button>
      </div>
      
      <div className="divider text-xs text-secondary-500 my-6">DEMO CREDENTIALS</div>
      
      <div className="bg-base-200 p-3 rounded-lg text-sm">
        <p className="flex justify-between">
          <span className="font-medium">Username:</span>
          <code>admin</code>
        </p>
        <p className="flex justify-between mt-1">
          <span className="font-medium">Password:</span>
          <code>admin123</code>
        </p>
        <p className="flex justify-between mt-1">
          <span className="font-medium">Secret Key:</span>
          <code>secret123</code>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;