import React from 'react';
import { useAuth } from '../../context/AuthContext';
import NavbarAdmin from '../../components/admin/NavbarAdmin';
import CardSection from '../../components/admin/dashboard/sections/CardSection';
import TableSection from '../../components/admin/dashboard/sections/TablesSection';

const AdminDashboard: React.FC = () => {
    const { user } = useAuth();

    console.log(user);

    return (
        <div className="min-h-screen bg-base-100">
            
            <NavbarAdmin />

            <main className="container mx-auto px-4 py-8">
                <CardSection />

                <TableSection />
            </main>
        </div>
    );
};

export default AdminDashboard;