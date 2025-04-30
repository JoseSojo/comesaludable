import React from 'react';
import { X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLoginClick }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // In a real app, this would call a registration API
      await new Promise(resolve => setTimeout(resolve, 1000));
      onLoginClick(); // Switch to login after successful registration
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          <X className="w-4 h-4" />
        </button>
        
        <h3 className="font-bold text-lg mb-4">Create an Account</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="input input-bordered"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="input input-bordered"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="input input-bordered"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </button>
          </div>
        </form>
        
        <div className="divider">OR</div>
        
        <p className="text-center">
          Already have an account?{' '}
          <button
            onClick={onLoginClick}
            className="link link-primary"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;