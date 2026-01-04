"use client"

import Pagination from "@/components/shared/ui/pagination";
import ProductTable from "@/components/admin/products/ProductTable";
import UsersNotice from "@/components/admin/users/UsersNotice";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import StatisticUserCards from "@/components/admin/users/StatisticUserCards";
import UserActions from "@/components/admin/users/UserActions";

function Users() {
    const titlePage = "danh sách người dùng";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* Statistic Cards */}
                <StatisticUserCards />

                {/* Notice */}
                <UsersNotice />

                {/* User Actions */}
                <UserActions />

                {/* Users */}
                <div className="bg-white rounded-2xl border border-gray-200">
                    {/* Title Page */}
                    <div className="px-6 py-4 flex items-center justify-between min-w-0 w-full border-b border-gray-200">
                        <div className="flex flex-col items-start min-w-0">
                            <span className="text-lg font-medium text-slate-800">
                                Danh sách người dùng
                            </span>
                        </div>
                    </div>

                    {/* Table */}
                    <ProductTable />

                    {/* Bottom Table */}
                    <div className="flex items-center justify-between py-4 px-6 border-t border-gray-200">
                        <div className="flex items-center gap-1 text-xs font-medium">
                            <span className="text-gray-500">Showing</span>
                            <span className="text-slate-800">1</span>
                            <span className="text-gray-500">to</span>
                            <span className="text-slate-800">7</span>
                            <span className="text-gray-500">of</span>
                            <span className="text-slate-800">20</span>
                        </div>

                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users;