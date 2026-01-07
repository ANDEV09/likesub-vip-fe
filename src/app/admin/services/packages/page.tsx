"use client"

import React, { useState } from 'react';
import { Menu, Edit2, Trash2, Search, X, GripVertical, TrashIcon } from 'lucide-react';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import Pagination from '@/components/shared/ui/pagination';

interface PackageService {
    id: number;
    serviceId: string;
    name: string;
    childService: string;
    type: 'Default';
    details: {
        dripfeed: boolean;
        maintenance: boolean;
        cancel: boolean;
    };
}

interface Filters {
    id: string; // Đổi sang string để input text dễ xử lý
    name: string;
    idAtHome: string; // Thêm theo hình ảnh
    type: string;
    status: string;
    category: string;
    apiSupplier: string;
    time: string;
    sort: string;
}

const ServicePackages: React.FC = () => {
    const titlePage = "Quản lý gói dịch vụ";

    const [filters, setFilters] = useState<Filters>({
        id: '',
        name: '',
        idAtHome: '',
        type: '',
        status: '',
        category: '',
        apiSupplier: '',
        time: '',
        sort: ''
    });

    const packages: PackageService[] = [
        {
            id: 1,
            serviceId: '11264',
            name: 'Facebook Reaction Love ❤️ | 2k-5k/day | 🚫 No Refill',
            childService: 'Facebook | Post Likes | Global',
            type: 'Default',
            details: { dripfeed: true, maintenance: false, cancel: false }
        },
        // ... (giữ nguyên data cũ của bạn)
    ];

    const handleSearch = () => {
        console.log('Searching packages with:', filters);
    };

    const handleClearFilters = () => {
        setFilters({
            id: '', name: '', idAtHome: '', type: '', status: '',
            category: '', apiSupplier: '', time: '', sort: ''
        });
    };

    return (
        <>
            <AdminSubHeader titlePage={titlePage} />

            <div className="p-6">
                <div className="bg-white px-6 py-4 rounded-md">
                    {/* Filter Section - Khớp theo hình b396cc.png */}
                    <div className="flex flex-wrap gap-3 mb-4">
                        <input
                            type="text"
                            placeholder="ID dịch vụ"
                            value={filters.id}
                            onChange={(e) => setFilters({ ...filters, id: e.target.value })}
                            className="w-[120px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-[#846adf]"
                        />
                        <input
                            type="text"
                            placeholder="Tên dịch vụ"
                            value={filters.name}
                            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                            className="w-[180px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-[#846adf]"
                        />
                        <input
                            type="text"
                            placeholder="ID dịch vụ tại nhà"
                            value={filters.idAtHome}
                            onChange={(e) => setFilters({ ...filters, idAtHome: e.target.value })}
                            className="w-[150px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-[#846adf]"
                        />
                        <select
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                            className="w-[130px] px-3 py-2 border border-gray-200 rounded text-[13px] text-gray-500 focus:outline-none"
                        >
                            <option value="">-- Type --</option>
                            <option value="default">Default</option>
                        </select>
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                            className="w-[140px] px-3 py-2 border border-gray-200 rounded text-[13px] text-gray-500 focus:outline-none"
                        >
                            <option value="">-- Trạng thái --</option>
                            <option value="active">Đang hoạt động</option>
                        </select>
                        <select
                            value={filters.category}
                            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                            className="w-[160px] px-3 py-2 border border-gray-200 rounded text-[13px] text-gray-500 focus:outline-none"
                        >
                            <option value="">-- Chuyên mục --</option>
                        </select>
                        <select
                            value={filters.apiSupplier}
                            onChange={(e) => setFilters({ ...filters, apiSupplier: e.target.value })}
                            className="w-[160px] px-3 py-2 border border-gray-200 rounded text-[13px] text-gray-500 focus:outline-none"
                        >
                            <option value="">-- API Supplier --</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Chọn thời gian"
                            value={filters.time}
                            onChange={(e) => setFilters({ ...filters, time: e.target.value })}
                            className="w-[150px] px-3 py-2 border border-gray-200 rounded text-[13px] focus:outline-none"
                        />
                        <select
                            value={filters.sort}
                            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
                            className="w-[130px] px-3 py-2 border border-gray-200 rounded text-[13px] text-gray-500 focus:outline-none"
                        >
                            <option value="">Sắp xếp giá</option>
                            <option value="asc">Giá thấp đến cao</option>
                            <option value="desc">Giá cao đến thấp</option>
                        </select>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2 pb-6 border-b border-gray-100 mb-6">
                        <button
                            onClick={handleSearch}
                            className="flex items-center gap-1 px-4 py-1.5 bg-[#846adf] hover:bg-[#7356d1] text-white rounded text-xs font-bold transition-colors cursor-pointer"
                        >
                            <Search className="w-3.5 h-3.5" />
                            Tìm kiếm
                        </button>
                        <button
                            onClick={handleClearFilters}
                            className="flex items-center gap-1 px-4 py-1.5 bg-white text-red-600 border border-red-600 rounded text-xs font-bold hover:bg-red-600 hover:text-white transition-all cursor-pointer"
                        >
                            <TrashIcon className="w-3.5 h-3.5" />
                            Xóa bộ lọc
                        </button>
                    </div>

                    {/* Table - Giữ nguyên logic border-b và màu đan xen của bạn */}
                    <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-[#f8f9fa] border-b border-gray-200">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-gray-700 whitespace-nowrap">Gói dịch vụ</th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-gray-700 whitespace-nowrap">Loại</th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-gray-700 whitespace-nowrap">Chi tiết</th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-gray-700 whitespace-nowrap">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {packages.map((pkg, idx) => (
                                        <tr
                                            key={pkg.id}
                                            className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-[#fdfdfd]'}`}
                                        >
                                            <td className="px-4 py-4">
                                                <div className="flex items-start gap-2">
                                                    <GripVertical className="w-4 h-4 text-gray-400 cursor-move shrink-0 mt-1" />
                                                    <div className="flex flex-col gap-1.5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="px-1.5 py-0.5 bg-cyan-50 text-cyan-600 text-[10px] font-bold rounded border border-cyan-200">
                                                                ID: {pkg.serviceId}
                                                            </span>
                                                            <span className="text-[13px] text-gray-800 font-bold leading-tight">
                                                                {pkg.name}
                                                            </span>
                                                        </div>
                                                        <span className="px-2 py-0.5 bg-[#846adf]/10 text-[#846adf] text-[10px] font-bold rounded border border-[#846adf]/30 w-fit">
                                                            {pkg.childService}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-[#846adf] text-white rounded text-[11px] font-bold">
                                                    <span className="w-2 h-2 bg-white/20 rounded-full"></span>
                                                    {pkg.type}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-1.5">
                                                    {/* Badge chi tiết */}
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${pkg.details.dripfeed ? 'bg-orange-50 text-orange-600 border-orange-200' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                                                        Dripfeed
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[10px] font-bold rounded border border-orange-200">
                                                        Bảo hành
                                                    </span>
                                                    <span className="px-2 py-0.5 bg-gray-50 text-gray-400 text-[10px] font-bold rounded border border-gray-100">
                                                        Hủy
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <button className="p-1.5 bg-[#846adf] text-white rounded hover:bg-[#7356d1]"><Menu className="w-4 h-4" /></button>
                                                    <button className="p-1.5 bg-[#49b6f5] text-white rounded hover:bg-[#3aa5e3]"><Edit2 className="w-4 h-4" /></button>
                                                    <button className="p-1.5 bg-red-600 text-white rounded hover:bg-red-700"><Trash2 className="w-4 h-4" /></button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="text-[13px] text-gray-600 font-medium">
                            Số lượng hiển thị:
                            <select className="mx-2 px-2 py-1 border border-gray-200 rounded outline-none focus:border-[#846adf]">
                                <option>10</option>
                                <option>25</option>
                            </select>
                            trên tổng số 1,062 gói dịch vụ
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePackages;