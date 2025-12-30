import { Outlet } from 'react-router';

import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Backdrop from './Backdrop';
import ScrollToTopButton from '~/features/user/components/ScrollToTopButton';

export default function AdminLayout() {
    return (
        <div className="min-h-screen lg:flex relative">
            {/* Sidebar */}
            <AdminSidebar />
            <Backdrop />

            {/* Main Content */}
            <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
                {/* Header */}
                <AdminHeader />

                {/* Page Content */}
                <div className='flex-1 bg-slate-100 overflow-y-auto'>
                    <Outlet />
                </div>
            </div>

            <ScrollToTopButton />
        </div>
    )
}
