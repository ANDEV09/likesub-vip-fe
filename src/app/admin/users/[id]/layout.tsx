import NavContainerUserDetail from "@/components/admin/users/NavContainerUserDetail";
import StatisticUserDetailCards from "@/components/admin/users/StatisticUserDetailCards";
import AdminSubHeader from "@/layouts/admin/AdminSubHeader";

import {
    Calendar,
    Headset,
    Minus,
    MoveLeft,
    Plus,
    ShieldUser
} from "lucide-react";
import Link from "next/link";

interface LayoutProps {
    children: React.ReactNode;
    params: {
        id: string;
    };
}

export default async function UserDetailLayout({
    children,
    params,
}: LayoutProps) {
    const { id } = await params;
    const titlePage = "thông tin thành viên";

    return (
        <div>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            {/* Main Content */}
            <div className="p-6 w-full flex flex-col gap-6">
                {/* User Review */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 flex justify-between">
                    {/* User Info */}
                    <div className="flex items-center gap-6 justify-center">
                        {/* Left Side - Avatar */}
                        <div className="bg-blue-500 flex items-center justify-center rounded-full w-20 h-20">
                            <span className="text-white text-4xl font-bold">TC</span>
                        </div>

                        {/* Right Side - Info */}
                        <div className="flex flex-col items-start justify-between gap-4">
                            <div className="flex items-center gap-8">
                                {/* Username */}
                                <span className="text-2xl text-slate-800 font-bold">
                                    maaitlunghau
                                </span>

                                {/* Badge */}
                                <div className="bg-green-600 rounded-xl py-1 px-3">
                                    <span className="text-white font-bold text-xs">
                                        Hoạt động
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                {/* ID */}
                                <div className="flex items-center gap-2">
                                    <ShieldUser className="w-3.5 h-3.5 text-gray-500" />

                                    <div className="text-gray-500">
                                        <span className="font-medium text-[13px]">
                                            ID:
                                        </span>
                                        <span className="font-bold text-[13px] ml-1">
                                            #48
                                        </span>
                                    </div>
                                </div>

                                {/* Created At */}
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-3.5 h-3.5 text-gray-500" />

                                    <div className="text-gray-500">
                                        <span className="font-medium text-[13px]">
                                            Tham gia:
                                        </span>
                                        <span className="font-bold text-[13px] ml-1">
                                            16/12/2025
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex flex-col items-end justify-center gap-4">
                        {/* Back to Users Button */}
                        <Link
                            href={"/admin/users"}
                            className="flex items-center gap-2 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg hover:bg-slate-100! transition-colors duration-300"
                        >
                            <MoveLeft className="w-4 h-4" />
                            <span className="text-sm">
                                Quay lại
                            </span>
                        </Link>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Add Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-green-700 hover:opacity-80 transition-opacity duration-300 rounded-lg"
                            >
                                <Plus className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Cộng tiền
                                </span>
                            </button>

                            {/* Minus Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-orange-600 hover:opacity-80 transition-opacity duration-300 rounded-lg"
                            >
                                <Minus className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Trừ tiền
                                </span>
                            </button>

                            {/* Create Ticket Button */}
                            <button
                                className="flex items-center gap-2 cursor-pointer text-white px-4 py-2 bg-blue-400 hover:opacity-80 transition-opacity duration-300 rounded-lg"
                            >
                                <Headset className="w-4 h-4 text-white" />
                                <span className="text-sm text-white font-medium">
                                    Tạo ticket
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Statistic Container */}
                <StatisticUserDetailCards />

                {/* Main Information */}
                <div className="bg-white flex flex-col gap-6 px-6 py-6 rounded-2xl border border-gray-200">
                    {/* Nav Container */}
                    <NavContainerUserDetail id={id} />

                    {/* Container */}
                    {children}
                </div>

                {/* User History & Activity */}
                <div></div>
            </div>
        </div>
    );
}
