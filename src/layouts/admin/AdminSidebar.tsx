"use client"

import { useCallback, useEffect, useRef, useState } from "react";

import {
    ShoppingCart,
    LifeBuoy,
    ChevronDownIcon,
    LayoutDashboard,
    Users,
    Package,
    Server,
    Wallet,
    Link2,
    BarChart3,
    Package2
} from "lucide-react";
import { useSidebar } from "@/contexts/shared/SidebarContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavItemType {
    name: string,
    icon: React.ReactNode,
    path?: string,
    subItems?: {
        name: string,
        path: string,
        new?: boolean
    }[]
};

const adminMenuItems: NavItemType[] = [
    {
        name: "Dashboard",
        icon: <LayoutDashboard size={16} />,
        path: "/admin/dashboard",
    },
    {
        name: "Quản lý người dùng",
        icon: <Users size={16} />,
        subItems: [
            { name: "Danh sách người dùng", path: "/admin/users" },
            { name: "Vai trò & phân quyền", path: "/admin/roles" },
            { name: "Tài khoản bị khóa", path: "/admin/users/banned" },
        ],
    },
    {
        name: "Quản lý sản phẩm",
        icon: <Package size={16} />,
        subItems: [
            { name: "Danh sách sản phẩm", path: "/admin/products" },
            { name: "Thêm mới sản phẩm", path: "/admin/add-product" },
            { name: "Sản phẩm hết hạn", path: "/admin/products/expired" },
        ],
    },
    {
        name: "Quản lý đơn hàng",
        icon: <ShoppingCart size={16} />,
        subItems: [
            { name: "Tất cả đơn hàng", path: "/admin/invoices" },
            { name: "Thông tin đơn hàng", path: "/admin/invoice-detail" },
            { name: "Thêm đơn hàng", path: "/admin/create-invoice" },
        ],
    },
];

const adminServiceItems: NavItemType[] = [
    {
        name: "Quản lý dịch vụ",
        icon: <Package2 size={16} />,
        subItems: [
            { name: "Danh sách dịch vụ", path: "/admin/services" },
            { name: "Tạo dịch vụ mới", path: "/admin/services/create" },
            { name: "Cấu hình giá", path: "/admin/services/pricing" },
            { name: "Bật / Tắt dịch vụ", path: "/admin/services/status" },
        ],
    },
    {
        name: "Nhà cung cấp API",
        icon: <Server size={16} />,
        subItems: [
            { name: "Danh sách API", path: "/admin/providers" },
            { name: "Thêm API mới", path: "/admin/providers/create" },
            { name: "Log gọi API", path: "/admin/providers/logs" },
        ],
    },
    {
        name: "Giao dịch & ví",
        icon: <Wallet size={16} />,
        subItems: [
            { name: "Lịch sử nạp tiền", path: "/admin/transactions/deposit" },
            { name: "Lịch sử chi tiêu", path: "/admin/transactions/spending" },
            { name: "Hoàn tiền", path: "/admin/transactions/refund" },
        ],
    },
    {
        name: "Affiliate",
        icon: <Link2 size={16} />,
        subItems: [
            { name: "Danh sách affiliate", path: "/admin/affiliate" },
            { name: "Hoa hồng", path: "/admin/affiliate/commission" },
            { name: "Thanh toán affiliate", path: "/admin/affiliate/payout" },
        ],
    },
];

const adminSupportItems: NavItemType[] = [
    {
        name: "Hỗ trợ khách hàng",
        icon: <LifeBuoy size={16} />,
        subItems: [
            { name: "Ticket hỗ trợ", path: "/admin/support/tickets" },
            { name: "Ticket đang mở", path: "/admin/support/open" },
            { name: "Ticket đã đóng", path: "/admin/support/closed" },
        ],
    },
    {
        name: "Báo cáo & thống kê",
        icon: <BarChart3 size={16} />,
        subItems: [
            { name: "Doanh thu", path: "/admin/reports/revenue" },
            { name: "Người dùng", path: "/admin/reports/users" },
            { name: "Dịch vụ bán chạy", path: "/admin/reports/services" },
        ],
    },
];

function AdminSidebar() {
    const pathname = usePathname();

    const { isExpanded, isHovered, setIsHovered } = useSidebar();

    const [openSubmenu, setOpenSubmenu] = useState<{
        type: "menu" | "services" | "support";
        index: number;
    } | null>(null);

    const isActive = useCallback((path: string) => {
        if (!path) return false;
        return pathname === path;
    }, [pathname]);

    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({}); // to get real height
    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({}); // to get current height

    const handleSubmenuToggle = (index: number, menuType: "menu" | "services" | "support") => {
        setOpenSubmenu((prev) => {
            if (prev &&
                prev.type === menuType &&
                prev.index === index
            ) {
                return null
            }

            return {
                type: menuType,
                index
            }
        })
    }

    // check if current path matches any submenu item
    useEffect(() => {
        let subMenuMatched = false;        

        ["menu", "services", "support"].map(type => {
            const items = type === "menu" 
                ? adminMenuItems 
                : type === "services" ? adminServiceItems 
                : adminSupportItems;

            items.map((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                    if (isActive(subItem.path)) {
                        setOpenSubmenu({
                            type: type as "menu" | "services" | "support",
                            index
                        });
                        subMenuMatched = true;
                }
            })};
        });

        if (!subMenuMatched) setOpenSubmenu(null);

    })}, [pathname, isActive]);

    // Set the height of the submenu items when the submenu is opened
    useEffect(() => {
        if (openSubmenu !== null) {
            const key = `${openSubmenu.type}-${openSubmenu.index}`;

            if (subMenuRefs.current[key]) {
                setSubMenuHeight(prev => ({
                    ...prev,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubmenu]);

    const renderMenuItems = (
        navItems: NavItemType[],
        menuType: "menu" | "services" | "support"
    ) => {
        return (
            <ul className="flex flex-col gap-2">
                {navItems.map((nav, index) => (
                    <li key={nav.name}>
                        {nav.subItems ? (
                            <button
                                onClick={() => handleSubmenuToggle(index, menuType)}
                                className={`relative hover:bg-slate-800 flex items-center w-full gap-3 px-3 py-3 font-normal rounded-lg text-[14px] group text-slate-300 ${
                                    openSubmenu?.type === menuType && openSubmenu?.index === index
                                        ? "bg-slate-800 text-blue-400"
                                        : "text-slate-300 group-hover:text-slate-400"
                                    } cursor-pointer ${
                                        !isExpanded && !isHovered
                                            ? "justify-center"
                                            : "justify-start"
                                    }`}
                            >
                                <span 
                                    className={`${openSubmenu?.type === menuType && openSubmenu?.index === index 
                                        ? "text-blue-400"
                                        : "text-slate-300 group-hover:text-slate-400" 
                                    }`}
                                >
                                    {nav.icon}
                                </span>
                                {(isExpanded || isHovered) && (
                                    <span
                                        className={`${openSubmenu?.type === menuType && openSubmenu?.index === index 
                                        ? "text-blue-400"
                                        : "text-slate-300 group-hover:text-slate-400" 
                                    }`}    
                                    >
                                        {nav.name}
                                    </span>
                                )}
                                {(isExpanded || isHovered) && (
                                    <ChevronDownIcon
                                        className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                                            openSubmenu?.type === menuType &&
                                            openSubmenu?.index === index
                                            ? "rotate-180 text-blue-400"
                                            : ""
                                        }`}
                                    />
                                )}
                            </button>
                        ) : (
                            nav.path && (
                                <Link
                                    className={`hover:bg-slate-800 flex items-center w-full gap-3 px-3 py-3 font-normal rounded-lg text-[14px] group text-slate-300 
                                        ${isActive(nav.path)
                                            ? "bg-slate-800"
                                            : ""
                                        }
                                    `}
                                    href={nav.path}
                                >
                                    <span className={`${isActive(nav.path) 
                                        ? "text-blue-400"
                                        : "text-slate-300 group-hover:text-slate-400" 
                                    }`}>
                                        {nav.icon}
                                    </span>
                                    <span className={`${isActive(nav.path) 
                                        ? "text-blue-400"
                                        : "text-slate-300 group-hover:text-slate-400" 
                                    }`}>
                                        {nav.name}
                                    </span>
                                </Link>
                            )
                        )}

                        {/* Nav Sub Item */}
                        {nav.subItems && (isExpanded || isHovered) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[`${menuType}-${index}`] = el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height:
                                        openSubmenu?.type === menuType && openSubmenu?.index === index
                                            ? `${subMenuHeight[`${menuType}-${index}`]}px`
                                            : "0px",
                                }}
                            >
                                <ul className="mt-2 space-y-1 text-left ml-11">
                                    {nav.subItems.map(subItem => (
                                        <li key={subItem.name}>
                                            <Link
                                                className={`hover:bg-slate-800 flex items-center w-full gap-3 px-3 py-2 font-normal rounded-lg text-[14px] group text-slate-300 
                                                    ${isActive(subItem.path) 
                                                        ? "bg-slate-800 text-blue-400!"
                                                        : "text-slate-300 group-hover:text-slate-400" 
                                                    }`}
                                                href={subItem.path}
                                            >
                                                {subItem.name}
                                            </Link>

                                            {/* new */}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <aside className="sticky mt-1 lg:mt-0 flex flex-col top-0 px-5 left-0 w-72 bg-[#0f172a] text-gray-900 border-r border-gray-200 h-screen transition-all duration-300 ease-in-out z-50">
            {/* Logo */}
            <Link href={"/"} className="h-18 py-3 px-6 mb-4">
                <img 
                    src="/images/logo.png" 
                    alt="" 
                    className="w-auto h-auto"
                />
            </Link>

            {/* Nav Item */}
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        {/* Menu Item */}
                        <h2 className={`text-xs uppercase flex leading-5 text-slate-400 font-medium`}>
                            MENU
                        </h2>
                        {/* render menu items */}
                        {renderMenuItems(adminMenuItems, "menu")}

                        {/* Service Item */}
                        <h2 className={`text-xs uppercase flex leading-5 text-slate-400 font-medium`}>
                            Dịch vụ
                        </h2>
                        {/* render menu items */}
                        {renderMenuItems(adminServiceItems, "services")}

                        {/* Support Item */}
                        <h2 className={`text-xs uppercase flex leading-5 text-slate-400 font-medium`}>
                            Hỗ trợ
                        </h2>
                        {/* render menu items */}
                        {renderMenuItems(adminSupportItems, "support")}
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default AdminSidebar;