"use client"

import React, { useState } from 'react';
import { Menu, Edit2, Trash2, Search, X, GripVertical, Folder, ArrowUp10, CircleQuestionMark, Trash, TrashIcon } from 'lucide-react';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import Pagination from '@/components/shared/ui/pagination';

interface ChildService {
    id: number;
    name: string;
    parent: string;
    api: string;
    packages: number;
    status: boolean;
    date: string;
}

interface Filters {
    name: string;
    status: string;
    parent: string;
    api: string;
    time: string;
}

const ChildServices: React.FC = () => {
    const titlePage = "Quản lý chuyên mục con";

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [filters, setFilters] = useState<Filters>({
        name: '',
        status: '',
        parent: '',
        api: '',
        time: ''
    });

    const childServices: ChildService[] = [
        { id: 1, name: 'Youtube | Likes - Country Targeted - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 39, status: true, date: '2025-10-21 08:25:54' },
        { id: 2, name: 'Youtube | Comments', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 15, status: true, date: '2025-10-21 08:25:54' },
        { id: 3, name: 'Youtube | Comment - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 22, status: true, date: '2025-10-21 08:25:54' },
        { id: 4, name: 'Youtube | Comments - Created by AI 🤖', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 17, status: true, date: '2025-10-21 08:25:54' },
        { id: 5, name: 'Youtube | LiveStream - Pre-Premiere', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 2, status: true, date: '2025-10-21 08:25:54' },
        { id: 6, name: 'Youtube | LiveStream - Cheap', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' },
        { id: 7, name: 'Youtube | LiveStream - Best For Ranking Live', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 9, status: true, date: '2025-10-21 08:25:54' },
        { id: 8, name: 'Youtube | LiveStream - SV1', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' },
        { id: 9, name: 'Youtube | LiveStream - SV2', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 9, status: true, date: '2025-10-21 08:25:54' },
        { id: 10, name: 'Youtube | LiveStream - SV3', parent: 'Dịch vụ Youtube', api: 'https://x999.vn/', packages: 8, status: true, date: '2025-10-21 08:25:54' }
    ];

    const totalItems = 168;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const toggleSelectAll = () => {
        if (selectedItems.length === childServices.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(childServices.map(s => s.id));
        }
    };

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
    };

    const handleClearFilters = () => {
        setFilters({
            name: '',
            status: '',
            parent: '',
            api: '',
            time: ''
        });
    };

    const renderPagination = () => {
        const pages = [];

        pages.push(
            <button
                key={1}
                onClick={() => setCurrentPage(1)}
                className={`w-10 h-10 rounded flex items-center justify-center text-sm font-medium transition-colors ${currentPage === 1
                    ? 'bg-[#846adf] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
            >
                1
            </button>
        );

        if (currentPage > 3) {
            pages.push(
                <button
                    key={2}
                    onClick={() => setCurrentPage(2)}
                    className="w-10 h-10 rounded flex items-center justify-center text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 transition-colors"
                >
                    2
                </button>
            );
        }

        if (currentPage > 4) {
            pages.push(
                <button
                    key={3}
                    onClick={() => setCurrentPage(3)}
                    className="w-10 h-10 rounded flex items-center justify-center text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 transition-colors"
                >
                    3
                </button>
            );
        }

        if (currentPage > 5) {
            pages.push(
                <span key="dots1" className="w-10 h-10 flex items-center justify-center text-gray-500">
                    ...
                </span>
            );
        }

        if (totalPages > 1) {
            pages.push(
                <button
                    key={17}
                    onClick={() => setCurrentPage(17)}
                    className="w-10 h-10 rounded flex items-center justify-center text-sm font-medium bg-white text-gray-700 hover:bg-gray-100 border border-gray-300 transition-colors"
                >
                    17
                </button>
            );
        }

        return pages;
    };

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            <div className="p-6">
                {/* Main Content */}
                <div className="bg-white p-6 rounded-md">
                    {/* Filters & Search */}
                    <div className="grid grid-cols-5 gap-4 mb-4 text-[13px]">
                        <input
                            type="text"
                            placeholder="Tên chuyên mục"
                            value={filters.name}
                            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                        />

                        <select
                            value={filters.status}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                        >
                            <option value="">-- Trạng thái --</option>
                            <option value="active">Đang hoạt động</option>
                            <option value="inactive">Không hoạt động</option>
                        </select>

                        <select
                            value={filters.parent}
                            onChange={(e) => setFilters({ ...filters, parent: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                        >
                            <option value="">-- Chuyên mục cha --</option>
                            <option value="facebook">Dịch vụ Facebook</option>
                            <option value="youtube">Dịch vụ Youtube</option>
                            <option value="tiktok">Dịch vụ TikTok</option>
                        </select>

                        <select
                            value={filters.api}
                            onChange={(e) => setFilters({ ...filters, api: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                        >
                            <option value="">-- API Supplier --</option>
                            <option value="x999">https://x999.vn/</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Chọn thời gian"
                            value={filters.time}
                            onChange={(e) => setFilters({ ...filters, time: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                        />
                    </div>
                    <div className="flex gap-2 pb-6">
                        <button
                            onClick={handleSearch}
                            className="flex items-center gap-1 px-2 py-1 bg-[#846adf] hover:bg-[#7356d1] text-white rounded-sm text-xs! font-bold transition-colors duration-600 cursor-pointer"
                        >
                            <Search className="w-3.5 h-3.5" />
                            Tìm kiếm
                        </button>
                        <button
                            onClick={handleClearFilters}
                            className="flex items-center gap-1 px-2 py-1 bg-white text-red-600 border border-red-600 rounded-sm text-xs! font-bold transition-colors duration-600 cursor-pointer hover:bg-red-600 hover:text-white"
                        >
                            <TrashIcon className="w-3.5 h-3.5" />
                            Xóa bộ lọc
                        </button>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-sm shadow-sm overflow-hidden mt-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">Tên chuyên mục</th>
                                        <th className="pr-20 py-3 text-left! text-[13px] font-bold text-black whitespace-nowrap">Chuyên mục cha</th>
                                        <th className="px-4 py-3 text-left text-[13px] font-bold text-black whitespace-nowrap">API</th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Số gói dịch vụ</th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Trạng thái</th>
                                        <th className="px-4 py-3 text-center text-[13px] font-bold text-black whitespace-nowrap">Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {childServices.map((service, idx) => (
                                        <tr
                                            key={service.id}
                                            className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                                        >
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <GripVertical className="w-4 h-4 text-gray-400 cursor-move shrink-0" />
                                                    <span className="text-[13px] text-gray-800 font-bold">
                                                        {service.name}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="">
                                                <span className="inline-block px-2 py-1 text-[#846adf] text-[10px] font-bold rounded-sm border border-[#846adf]">
                                                    {service.parent}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-block px-3 py-1 bg-white text-gray-700 text-xs font-bold rounded border border-gray-300">
                                                    {service.api}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3 text-center">
                                                <span className="text-xs! font-bold text-gray-800">
                                                    {service.packages}
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex justify-center">
                                                    <button
                                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${service.status ? 'bg-[#846adf]' : 'bg-gray-300'
                                                            }`}
                                                    >
                                                        <span
                                                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-200 ease-in-out ${service.status ? 'translate-x-5' : 'translate-x-0.5'
                                                                }`}
                                                        />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        className="p-2 bg-[#846adf] hover:bg-[#7356d1] text-white rounded transition-colors cursor-pointer"
                                                        title="Chi tiết"
                                                    >
                                                        <Menu className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className="p-2 bg-[#49b6f5] hover:bg-[#3aa5e3] text-white rounded transition-colors cursor-pointer"
                                                        title="Sửa"
                                                    >
                                                        <Edit2 className="w-4 h-4" />
                                                    </button>
                                                    <button
                                                        className="p-2 bg-red-600 hover:bg-red-700 text-white rounded transition-colors cursor-pointer"
                                                        title="Xóa"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
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
                        <div className="flex items-center gap-2 text-[13px] text-gray-800 font-medium">
                            <span className="font-medium">
                                Số lượng hiển thị:
                            </span>
                            <select
                                className="px-3 py-1 border border-gray-300 rounded-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                                defaultValue="10"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span className="font-medium">trên tổng số {totalItems} Chuyên mục con</span>
                        </div>

                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChildServices;