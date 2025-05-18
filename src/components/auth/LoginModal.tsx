import React, { useState } from 'react';
import { X } from 'lucide-react';
import toast from 'react-hot-toast';
import { ApiAuthAdapter } from '../../infrastructure/adapters/ApiAuthAdapter';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRegisterClick: () => void;
  redirect: (param: string) => void;
}


const LoginModal: React.FC<LoginModalProps> = ({ redirect,isOpen, onClose, onRegisterClick }) => {
  const [data, setData] = useState<{ email: string, password: string }>({ email: ``, password: `` });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = redirect;

  const adapters = new ApiAuthAdapter();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setErrors
      // In a real app, this would verify the restaurant code
      // await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await adapters.login(data.email, data.password);

      if (response.error || response.type === `error`) {
        if (typeof response.message === `string`) return toast.error(response.message);
        response.message.forEach((element: string) => {
          toast.error(element);
        });
        return;
      }

      // SAVE TOKEN
      toast.success(response.message);
      window.localStorage.setItem(`comesaludable_token`, response.token);
      window.localStorage.setItem(`comesaludable_data`, JSON.stringify(response.data));
      navigate(`/profile`);
      window.location.reload();

      onClose();
    } finally {
      setIsLoading(false);
    }
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

        <h3 className="font-bold text-lg mb-4">Welcome Back!</h3>

        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              placeholder="your@email.com"
              className={`input input-bordered ${errors.email ? 'input-error' : ''}`}

            />
            {errors.email && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.email.message}</span>
              </label>
            )}
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              placeholder="Enter your password"
              className={`input input-bordered ${errors.password ? 'input-error' : ''}`}

            />
            {errors.password && (
              <label className="label">
                <span className="label-text-alt text-error">{errors.password.message}</span>
              </label>
            )}
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || data.email.length < 5 || data.password.length < 5}
            >
              {isLoading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </div>
        </form>

        <div className="divider">OR</div>

        <p className="text-center">
          Don't have an account?{' '}
          <button
            onClick={onRegisterClick}
            className="link link-primary"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;