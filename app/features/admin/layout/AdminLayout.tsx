import { useSidebar } from '~/context/SidebarContext';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import Backdrop from './Backdrop';

interface AdminLayoutProps {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { isExpanded, isHovered, isMobileOpen } = useSidebar();

    const mainContentMargin = isMobileOpen
        ? "ml-0"
        : isExpanded || isHovered
        ? "lg:ml-[290px]"
        : "lg:ml-[90px]";

    return (
        <div className="min-h-screen xl:flex">
            {/* Sidebar */}
            <AdminSidebar />
            <Backdrop />

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}>
                {/* Header */}
                <AdminHeader />

                {/* Page Content */}
                <div className='p-4 mx-auto maw-w-[1536px] md:p-6'>
                    {children}
                </div>
            </div>
        </div>
    )
}
