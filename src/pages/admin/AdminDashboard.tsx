import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Store, Utensils, Star, LogOut, Bell } from 'lucide-react';

const AdminDashboard: React.FC = () => {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen bg-base-100">
            <div className="navbar bg-primary text-white shadow-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Admin Dashboard</a>
                </div>
                <div className="flex-none gap-4">
                    <button className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <Bell className="h-5 w-5" />
                            <span className="badge badge-xs badge-error indicator-item"></span>
                        </div>
                    </button>
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="stat bg-white shadow-lg rounded-lg">
                        <div className="stat-figure text-primary">
                            <Users className="w-8 h-8" />
                        </div>
                        <div className="stat-title">Total Users</div>
                        <div className="stat-value text-primary">1,200</div>
                        <div className="stat-desc">↗︎ 14% (30 days)</div>
                    </div>

                    <div className="stat bg-white shadow-lg rounded-lg">
                        <div className="stat-figure text-secondary">
                            <Store className="w-8 h-8" />
                        </div>
                        <div className="stat-title">Restaurants</div>
                        <div className="stat-value text-secondary">150</div>
                        <div className="stat-desc">↗︎ 8% (30 days)</div>
                    </div>

                    <div className="stat bg-white shadow-lg rounded-lg">
                        <div className="stat-figure text-accent">
                            <Utensils className="w-8 h-8" />
                        </div>
                        <div className="stat-title">Active Menus</div>
                        <div className="stat-value text-accent">450</div>
                        <div className="stat-desc">↗︎ 12% (30 days)</div>
                    </div>

                    <div className="stat bg-white shadow-lg rounded-lg">
                        <div className="stat-figure text-success">
                            <Star className="w-8 h-8" />
                        </div>
                        <div className="stat-title">Avg. Rating</div>
                        <div className="stat-value text-success">4.8</div>
                        <div className="stat-desc">↗︎ 0.2 (30 days)</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <div className="card bg-white shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Recent Registrations</h2>
                            <div className="overflow-x-auto">
                                <table className="table table-zebra">
                                    <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>Type</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>John Doe</td>
                                            <td>Customer</td>
                                            <td>2024-03-15</td>
                                            <td><span className="badge badge-success">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td>Green Garden</td>
                                            <td>Restaurant</td>
                                            <td>2024-03-14</td>
                                            <td><span className="badge badge-warning">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td>Dr. Smith</td>
                                            <td>Nutritionist</td>
                                            <td>2024-03-13</td>
                                            <td><span className="badge badge-success">Active</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-white shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Recent Reviews</h2>
                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-base-100 rounded-lg">
                                        <div className="avatar placeholder">
                                            <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                <span>JD</span>
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="font-medium">John Doe</h3>
                                                <div className="flex items-center">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span className="ml-1">4.5</span>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                Great healthy options and excellent service!
                                            </p>
                                            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                                                <span>Green Garden Restaurant</span>
                                                <span>•</span>
                                                <span>2 days ago</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;