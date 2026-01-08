"use client"

import React, { useState } from 'react';
import { Menu, Edit2, Trash2, Search, GripVertical, Trash, TrashIcon, Plus } from 'lucide-react';
import AdminSubHeader from '@/layouts/admin/AdminSubHeader';
import Link from 'next/link';

interface ServicePackage {
    id: number;
    name: string;
    category: string;
    type: string;
    api: string;
    apiId: string;
    priceOriginal: string;
    priceRetail: string;
    priceCollab: string;
    priceAgent: string;
    priceDistributor: string;
    status: boolean;
    createdAt: string;
}

interface Filters {
    id: string;
    name: string;
    type: string;
    status: string;
    parent: string;
    api: string;
    time: string;
}

const ServicePackages: React.FC = () => {
    const titlePage = "Quản lý gói dịch vụ";

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [filters, setFilters] = useState<Filters>({
        id: '',
        name: '',
        type: '',
        status: '',
        parent: '',
        api: '',
        time: ''
    });

    const servicePackages: ServicePackage[] = [
        {
            id: 1,
            name: 'Facebook Reaction Love ❤️ | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11264',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 2,
            name: 'Views US | Retention 6-7 Minutes | Speed 5-10k/days | Source Youtube Search/Browse Fe...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11520',
            priceOriginal: '116.424 VND',
            priceRetail: '128.066 VND',
            priceCollab: '116.424 VND',
            priceAgent: '116.424 VND',
            priceDistributor: '116.424 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 3,
            name: 'YouTube Likes | Speed 100K/Day | Japan 🇯🇵 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11776',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        },
        {
            id: 4,
            name: 'Facebook Reaction Care 🥰 | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11265',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 5,
            name: 'Views US | Retention 8-10 Minutes | Speed 5-10k/days | Source Youtube Search/Browse F...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11521',
            priceOriginal: '174.636 VND',
            priceRetail: '192.1 VND',
            priceCollab: '174.636 VND',
            priceAgent: '174.636 VND',
            priceDistributor: '174.636 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 6,
            name: 'YouTube Likes | Speed 100K/Day | Turkey 🇹🇷 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11777',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        },
        {
            id: 7,
            name: 'LÊN CỰC NHANH - Tụt 100% -YouTube Subscribers | Không bảo hành | Không hỗ trợ khi lỗi',
            category: 'Youtube Sub',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11010',
            priceOriginal: '3.144 VND',
            priceRetail: '3.4584 VND',
            priceCollab: '3.144 VND',
            priceAgent: '3.144 VND',
            priceDistributor: '3.144 VND',
            status: true,
            createdAt: '2025-09-18 00:56:53'
        },
        {
            id: 8,
            name: 'Facebook Reaction WoW 😮 | 2k-5k/day | 🚫 No Refill',
            category: 'Facebook | Post Likes | Global',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11266',
            priceOriginal: '16.632 VND',
            priceRetail: '18.2952 VND',
            priceCollab: '16.632 VND',
            priceAgent: '16.632 VND',
            priceDistributor: '16.632 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 9,
            name: 'Views US | Retention 3-5 Minutes | Speed 5-10k/days | Source Youtube Suggest(Trending/...',
            category: 'Youtube | Views - By keyword - Best for SEO - US 🇺🇸',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11522',
            priceOriginal: '83.16 VND',
            priceRetail: '91.476 VND',
            priceCollab: '83.16 VND',
            priceAgent: '83.16 VND',
            priceDistributor: '83.16 VND',
            status: true,
            createdAt: '2025-10-21 08:04:18'
        },
        {
            id: 10,
            name: 'YouTube Likes | Speed 100K/Day | Ukraine 🇺🇦 | Lifetime Refill ♻️',
            category: 'Youtube | Likes - Country Targeted - SV1',
            type: 'Default',
            api: 'https://x999.vn/',
            apiId: 'API ID: 11778',
            priceOriginal: '22.9824 VND',
            priceRetail: '25.2806 VND',
            priceCollab: '22.9824 VND',
            priceAgent: '22.9824 VND',
            priceDistributor: '22.9824 VND',
            status: true,
            createdAt: '2025-10-21 08:04:19'
        }
    ];

    const totalItems = 168;
    const itemsPerPage = 10;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handleSearch = () => {
        console.log('Searching with filters:', filters);
    };

    const handleClearFilters = () => {
        setFilters({
            id: '',
            name: '',
            type: '',
            status: '',
            parent: '',
            api: '',
            time: ''
        });
    };

    return (
        <>
            {/* Page Breadcrumb */}
            <AdminSubHeader titlePage={titlePage} />

            <div className="p-6">
                {/* Main Content */}
                <div className="bg-white p-6 rounded-sm">
                    {/* Filters & Search */}
                    <div className="grid grid-cols-5 gap-4 mb-4 text-[13px]">
                        {/* ID Package */}
                        <input
                            type="text"
                            placeholder="ID dịch vụ"
                            value={filters.id}
                            onChange={(e) => setFilters({ ...filters, id: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                        />

                        {/* Name Package */}
                        <input
                            type="text"
                            placeholder="Tên dịch vụ"
                            value={filters.name}
                            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent"
                        />

                        {/* Type */}
                        <select
                            value={filters.type}
                            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                        >
                            <option value="">-- Trạng thái --</option>
                            <option value="active">Default</option>
                            <option value="inactive">Package</option>
                            <option value="inactive">Custome Comments</option>
                            <option value="inactive">Custome Comments Package</option>
                            <option value="inactive">Mentions Hashtag</option>
                            <option value="inactive">Subscriptions</option>
                            <option value="inactive">SEO</option>
                        </select>

                        {/* Status */}
                        <select
                            value={filters.status}
                            onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                            className="px-4 py-2 border border-gray-300 rounded-sm text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#846adf] focus:border-transparent font-medium"
                        >
                            <option value="">-- Trạng thái --</option>
                            <option value="active">Hiển thị</option>
                            <option value="inactive">Ẩn</option>
                        </select>

                        {/* Parent Service */}
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
                    </div>

                    {/* Package Button */}
                    <div className="flex items-center justify-between pb-6">
                        <div className='flex items-center gap-2'>
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

                        {/* Create Button */}
                        <Link
                            href="/admin/services/packages/add"
                            className="flex items-center gap-2 px-2 py-1.5 rounded-sm border text-sm font-medium transition-opacity duration-300 cursor-pointer bg-[#846adf]! text-white! hover:opacity-90"
                        >
                            <Plus className='w-3 h-3' />
                            <span className="mr-1 text-xs font-bold">
                                Thêm dịch vụ mới
                            </span>
                        </Link>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-sm shadow-sm overflow-hidden mt-6">
                        <div className="overflow-x-auto relative">
                            <div className="inline-block min-w-full align-middle">
                                <table className="min-w-full table-fixed" style={{ width: 'max-content' }}>
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-85">
                                                Gói dịch vụ
                                            </th>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-26">
                                                Giá vốn
                                            </th>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-28">
                                                Giá bán lẻ
                                            </th>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-37">
                                                Giá Cộng tác viên
                                            </th>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black  w-28">
                                                Giá Đại lý
                                            </th>
                                            <th className="px-3 py-4 text-left text-[13px] font-bold text-black w-36">
                                                Giá Nhà phân phối
                                            </th>
                                            <th className="px-3 py-4 text-center text-[13px] font-bold text-black w-16">
                                                Trạng thái
                                            </th>
                                            <th className="px-3 py-4 text-center text-[13px] font-bold text-black w-18">
                                                Thao tác
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {servicePackages.map((service) => (
                                            <tr
                                                key={service.id}
                                                className="hover:bg-gray-50 transition-colors odd:bg-gray-100"
                                            >
                                                <td className="px-3 py-4">
                                                    <div className="flex items-center gap-2">
                                                        <GripVertical className="w-4 h-4 text-gray-400 cursor-move shrink-0" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link
                                                                href={`/admin/services/package/edit/${service.id}`}

                                                                className="text-[10px] text-blue-600 font-semibold"
                                                            >
                                                                #{service.apiId.split(': ')[1]}
                                                            </Link>
                                                            <Link
                                                                href={`/admin/services/packages/edit/${service.id}`}
                                                                className="text-[13px] text-gray-800 font-bold">
                                                                {service.name}
                                                            </Link>
                                                            <Link
                                                                href={`/admin/services/package/edit/${service.id}`}
                                                                className="inline-block px-2 py-0.5 text-[#846adf] text-[10px] font-bold rounded-[4px] border border-[#846adf] w-fit">
                                                                {service.category}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-2 py-4 text-left">
                                                    <span className="text-[13px] font-bold text-[#846adf]">
                                                        {service.priceOriginal}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-4 text-center">
                                                    <span className="text-[13px] font-bold text-red-600 ">
                                                        {service.priceRetail}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-4 text-left">
                                                    <span className="text-[13px] font-bold text-blue-600 ">
                                                        {service.priceCollab}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-4 text-left">
                                                    <span className="text-[13px] font-bold text-green-600 ">
                                                        {service.priceAgent}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-4 text-left">
                                                    <span className="text-[13px] font-bold text-yellow-600 ">
                                                        {service.priceDistributor}
                                                    </span>
                                                </td>
                                                <td className="px-3 py-4">
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
                                                <td className="px-3 py-4">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <Link
                                                            href={`/admin/services/packages/edit/${service.id}`}
                                                            className="p-2 bg-[#49b6f5]! hover:bg-[#3aa5e3] text-white! rounded transition-colors cursor-pointer"
                                                            title="Sửa"
                                                        >
                                                            <Edit2 className="w-4 h-4" />
                                                        </Link>
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
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-[13px] text-gray-800 font-medium">
                            <span className="font-medium">
                                Số lượng hiển thị:
                            </span>
                            <select
                                className="px-3 py-1 border border-gray-300 rounded-sm text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#846adf]"
                                defaultValue="10"
                            >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            <span className="font-medium">trên tổng số {totalItems} Gói dịch vụ</span>
                        </div>

                        <div className="flex gap-1">
                            <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                                Trước
                            </button>
                            <button className="px-3 py-1 bg-[#846adf] text-white rounded text-[13px]">
                                1
                            </button>
                            <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                                2
                            </button>
                            <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                                3
                            </button>
                            <button className="px-3 py-1 border border-gray-300 rounded text-[13px] hover:bg-gray-100">
                                Sau
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicePackages;