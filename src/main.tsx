import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { CurrentProvider } from './context/CurrentContext';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <CurrentProvider>
      <App />
      <Toaster position="top-right" />
    </CurrentProvider>
  </AuthProvider>
);