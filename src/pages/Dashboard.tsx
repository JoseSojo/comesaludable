import React from 'react';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-base-100">
      <div className="navbar bg-primary text-white shadow-lg">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Admin Dashboard</a>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost gap-2">
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-8">
                  <span>{user?.username.charAt(0).toUpperCase()}</span>
                </div>
              </div>
              <span>{user?.username}</span>
            </div>
            <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-neutral">
              <li>
                <button onClick={logout} className="text-error">
                  <LogOut size={16} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="card bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl">Welcome, {user?.username}!</h2>
            <p>You have successfully logged in to the admin dashboard.</p>
            <p className="text-secondary-600 mt-2">This is a placeholder dashboard. In a real application, you would see analytics, management tools, and other admin controls here.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Total Users</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↗︎ 14% (30 days)</div>
              </div>
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Page Views</div>
                <div className="stat-value">32.5K</div>
                <div className="stat-desc">↗︎ 22% (30 days)</div>
              </div>
              <div className="stat bg-base-200 rounded-box">
                <div className="stat-title">Conversion Rate</div>
                <div className="stat-value">3.42%</div>
                <div className="stat-desc">↘︎ 0.2% (30 days)</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;