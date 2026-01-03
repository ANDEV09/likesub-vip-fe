"use client"

import { 
    ChartNoAxesCombined,
    CloudDownload,
    KeyRound,
    RotateCcw,
    UserX
} from "lucide-react";
import { useState } from "react";

import ProductTable from "@/components/admin/products/ProductTable";
import UsersNotice from "@/components/admin/users/UsersNotice";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";
import Pagination from "@/components/shared/ui/pagination";
import StatisticUserCards from "@/components/admin/users/StatisticUserCards";
import StatisticUserModal from "@/components/admin/users/StatisticUserModal";

import { confirmAction } from "@/lib/alert";

function Users() {
    const titlePage = "danh sách người dùng";
    const [isShowStatisticUserModal, setIsShowStatisticUserModal] = useState(false);

    const showResetAllDepositAlert = async () => {
        const result = await confirmAction({
            title: "Xác nhận reset tổng nạp",
            html: `
                <p style="margin-bottom: 12px;">Hệ thống sẽ reset tổng tiền đã nạp của <strong>toàn bộ thành viên</strong>.</p>
                <p style="color: #ef4444; font-weight: 500;">⚠️ Hành động này không thể hoàn tác!</p>
            `,
        });
    
        if (result.isConfirmed) {
            console.log("Clicked");
        }
    };

    const showLogoutAllAlert = async () => {
        const result = await confirmAction({
            title: "Đăng xuất toàn bộ thành viên",
            html: `
                <p style="margin-bottom: 12px;">Hệ thống sẽ <strong>đăng xuất tất cả người dùng</strong> đang hoạt động.</p>
                <p style="color: #f59e0b; font-weight: 500;">⚠️ Tất cả phiên đăng nhập sẽ bị hủy ngay lập tức!</p>
            `,
        });

        if (result.isConfirmed) {
            console.log("Clicked");
        }
    };

    const showChangeAllApiKeys = async () => {
        const result = await confirmAction({
            title: "Cập nhật API Keys hàng loạt",
            html: `
                <p style="margin-bottom: 12px;">Toàn bộ API Keys hiện tại sẽ bị <strong>vô hiệu hóa và thay thế</strong>.</p>
                <p style="color: #ef4444; font-weight: 500;">🔒 Các tích hợp đang dùng API cũ sẽ bị gián đoạn!</p>
            `,
        });

        if (result.isConfirmed) {
            console.log("Clicked");
        }
    };

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
                <div className="flex items-center justify-end gap-2">
                    {/* Statistic Button */}
                    <button
                        onClick={() => setIsShowStatisticUserModal(true)} 
                        className="inline-flex items-center gap-1 text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                    >
                        <ChartNoAxesCombined className="w-4 h-4" />
                        <span className="text-xs font-bold">
                            THỐNG KÊ
                        </span>
                    </button>

                    {/* Email Download Button */}
                    <button 
                        className="inline-flex items-center gap-1 text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                    >
                        <CloudDownload className="w-4 h-4" />
                        <span className="text-xs font-bold">
                            TẢI EMAIL USERS
                        </span>
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={showResetAllDepositAlert}
                        className="inline-flex items-center gap-1 text-white bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                    >
                        <RotateCcw className="w-4 h-4" />
                        <span className="text-xs font-bold">
                            RESET TỔNG NẠP
                        </span>
                    </button>

                    {/* Logout All Button */}
                    <button
                        onClick={showLogoutAllAlert}
                        className="inline-flex items-center gap-1 text-white bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                    >
                        <UserX className="w-4 h-4" />
                        <span className="text-xs font-bold">
                            ĐĂNG XUẤT TẤT CẢ
                        </span>
                    </button>

                    {/* Change All API-KEYS Button */}
                    <button 
                        onClick={showChangeAllApiKeys}
                        className="inline-flex items-center gap-1 text-white bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-sm transition-colors duration-300 cursor-pointer"
                    >
                        <KeyRound className="w-4 h-4" />
                        <span className="text-xs font-bold">
                            THAY ĐỔI API KEY TOÀN BỘ THÀNH VIÊN
                        </span>
                    </button>
                </div>

                {/* Modal & Alert */}
                {isShowStatisticUserModal && 
                    <StatisticUserModal setIsShowStatisticUserModal = {setIsShowStatisticUserModal} />}

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