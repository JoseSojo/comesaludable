import React from 'react';
import { X } from 'lucide-react';
import { ApiUserAdapter } from '../../infrastructure/adapters/ApiUserAdapter';
import toast from 'react-hot-toast';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginClick: () => void;
  redirect: (param: string) => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onLoginClick }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    lastname: '',
    acceptEmail: 'si',
    age: 0
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const adapter = new ApiUserAdapter();      
      const response = await adapter.create({ data:formData });

      if(response.error) {
        return toast.error(`Error al crear la cuenta`);
      }
      console.log(response);
      onLoginClick(); // Switch to login after successful registration
      return toast.success(`Cuenta ${response.body.email} creada`);
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
              <span className="label-text">Nomber</span>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Apellido</span>
            </label>
            <input
              type="text"
              name="lastname"
              placeholder="John Doe"
              className="input input-bordered"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Correo</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="tucorreo@dominio.com"
              className="input input-bordered"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mt-4">
            <label className="label">
              <span className="label-text">Edad</span>
            </label>
            <input
              type="number"
              name="age"
              placeholder="tucorreo@dominio.com"
              className="input input-bordered"
              value={formData.age}
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