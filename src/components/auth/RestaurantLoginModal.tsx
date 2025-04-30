import React from 'react';
import { X, Store } from 'lucide-react';
import { ApiAuthAdapter } from '../../infrastructure/adapters/ApiAuthAdapter';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

interface RestaurantLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RestaurantLoginModal: React.FC<RestaurantLoginModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const adapters = new ApiAuthAdapter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // In a real app, this would verify the restaurant code
      // await new Promise(resolve => setTimeout(resolve, 1000));
      const response = await adapters.restaurantLogin(code);

      if(response.error || response.type === `error`) {
        if(typeof response.message === `string`) return toast.error(response.message);
        response.message.forEach((element:string) => {
          toast.error(element);
        });
        return;
      }

      // SAVE TOKEN
      toast.success(response.message);
      window.localStorage.setItem(`comesaludable_token`, response.token);
      window.localStorage.setItem(`comesaludable_data`, JSON.stringify(response.data));
      navigate(`/restaurant`, { viewTransition:true });
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
        
        <div className="text-center mb-6">
          <Store className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="font-bold text-lg">Restaurant Login</h3>
          <p className="text-sm text-gray-600">Enter your 7-digit restaurant code</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <input
              type="text"
              placeholder="1234567"
              className="input input-bordered text-center text-2xl tracking-wider"
              value={code}
              onChange={(e) => setCode(e.target.value.slice(0, 7))}
              pattern="[0-9]{7}"
              maxLength={7}
              required
            />
            <label className="label">
              <span className="label-text-alt">
                Don't have a code? Contact our support team
              </span>
            </label>
          </div>
          
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
              disabled={isLoading || code.length !== 7}
            >
              {isLoading ? 'Verifying...' : 'Access Dashboard'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RestaurantLoginModal;