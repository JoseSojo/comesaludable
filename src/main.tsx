import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { ServiceProvider } from './application/context/ServiceContext';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ServiceProvider>
      <App />
      <Toaster position="top-right" />
    </ServiceProvider>
  </AuthProvider>
);