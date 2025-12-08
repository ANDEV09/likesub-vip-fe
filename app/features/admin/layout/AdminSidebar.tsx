import { Link, useLocation } from "react-router-dom";

import { 
    Calendar,
    CatIcon,
    ChevronDownIcon,
    GridIcon,
    ListIcon,
    PiIcon,
    Settings,
    TableIcon,
    UserCircle,
    Zap
} from "lucide-react";
import { useSidebar } from "~/context/SidebarContext";
import { useCallback, useEffect, useRef, useState } from "react";

type NavItem = {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: { 
        name: string;
        path: string;
        pro?: boolean;
        new?: boolean 
    }[];
};

const navItems: NavItem[] = [
    {
        icon: <GridIcon />,
        name: "Dashboard",
        path: "/dashboard"
    },
    {
        icon: <Calendar />,
        name: "Calendar",
        path: "/calendar",
    },
    {
        icon: <UserCircle />,
        name: "User Profile",
        path: "/profile",
    },

    {
        name: "Forms",
        icon: <ListIcon />,
        subItems: [
            { 
                name: "Form Elements",
                path: "/form-elements",
                pro: false 
            }
        ],
    },
    {
        name: "Tables",
        icon: <TableIcon />,
        subItems: [
            {
                name: "Basic Tables",
                path: "/basic-tables",
                pro: false 
            }
        ],
    },
    {
        name: "Other Pages",
        icon: <PiIcon />,
        subItems: [
            { 
                name: "Blank Page",
                path: "/blank",
                pro: false 
            },
            { 
                name: "404 Error",
                path: "/error-404",
                pro: false 
            },
        ],
    },
]

const othersItems: NavItem[] = [
    {
        icon: <CatIcon />,
        name: "Reports",
        path: "/reports"
    },
    {
        icon: <Settings />,
        name: "Settings",
        path: "/setting",
    },
]

const AdminSidebar: React.FC = () => {
    const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
    const { pathname } = useLocation();

    const renderMenuItems = (
        navItems: NavItem[],
        menuType: "main" | "others"
    ) => {
        return (
            <ul className="flex flex-col gap-4">
                {navItems.map((nav, index) => (
                    <li key={nav.name}>
                        {nav.subItems ? (
                            <button 
                                onClick={() => handleSubmenuToggle(index, menuType)}
                                className={`relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-[14px] group ${
                                    openSubMenu?.type === menuType && 
                                    openSubMenu?.index === index
                                        ? "bg-[#ecf3ff] text-blue-500"
                                        : "text-gray-700 hover:bg-gray-100 group-hover:text-gray-700"
                                } cursor-pointer 
                                ${
                                    !isExpanded && !isHovered
                                    ? "lg:justify-center"
                                    : "lg:justify-start"
                                }`}
                            >
                                <span 
                                    className={`${
                                        openSubMenu?.type === menuType &&
                                        openSubMenu?.index === index 
                                        ? "text-blue-500"
                                        : "text-gray-500 group-hover:text-gray-700"
                                    }`}
                                >
                                    {nav.icon}
                                </span>
                                
                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <span className="">
                                    {nav.name}
                                    </span>
                                )}

                                {(isExpanded || isHovered || isMobileOpen) && (
                                    <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform duration-200
                                    ${
                                        openSubMenu?.type === menuType &&
                                        openSubMenu?.index === index
                                            ? "rotate-180 text-blue-500"
                                            : ""
                                    }`} />
                                )}
                            </button>
                        ) : (
                            nav.path && (
                                <Link 
                                    to={nav.path}
                                    className={`relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-[14px] group
                                    ${
                                        isActive(nav.path) 
                                        ? "bg-blue-50 text-blue-500" 
                                        : "text-gray-700 hover:bg-gray-100 group-hover:text-gray-700"   
                                    }
                                    `}
                                >   
                                    <span>{nav.icon}</span>
                                    {(isExpanded || isHovered || isMobileOpen) && (
                                        <span>{nav.name}</span>
                                    )}
                                </Link>
                            )
                        )}

                        {/* Nav Sub Item */}
                        {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
                            <div
                                ref={(el) => {
                                    subMenuRefs.current[`${menuType}-${index}`] = el;
                                }}
                                className="overflow-hidden transition-all duration-300"
                                style={{
                                    height:
                                        openSubMenu?.type === menuType && 
                                        openSubMenu?.index === index
                                        ? `${subMenuRefs.current[`${menuType}-${index}`]?.scrollHeight}px`
                                        : `0px`
                                }}
                            >
                                <ul className="mt-2 space-y-1 ml-9">
                                    {nav.subItems.map((subItem) => (
                                        <li key={subItem.name}>
                                            <Link 
                                                to={subItem.path}
                                                className={`relative flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[14px]
                                                ${isActive(subItem.path)
                                                ? "bg-[#ecf3ff] text-[#465fff]"
                                                : "text-gray-700 hover:bg-gray-100"}
                                                `}
                                            >
                                                {subItem.name}

                                                {/* New & Pro */}
                                            </Link>
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

    const [openSubMenu, setOpenSubMenu] = useState<{
        type: "main" | "others";
        index: number
    } | null>(null);

    const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>({});
    const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const isActive = useCallback((path: string) => path === pathname, [pathname]);

    useEffect(() => {
        let subMenuMatched = false;

        ["main", "others"].forEach((menuType) => {
            const items = menuType === "main" ? navItems : othersItems

            items.forEach((nav, index) => {
                if (nav.subItems) {
                    nav.subItems.forEach((subItem) => {
                        if (isActive(subItem.path)) {
                            setOpenSubMenu({
                                type: menuType as "main" | "others",
                                index
                            });

                            subMenuMatched = true;
                        }
                    })
                }
            })
        })

        if (!subMenuMatched) setOpenSubMenu(null)
    }, [pathname, isActive]);

    useEffect(() => {
        if (openSubMenu !== null) {
            const key = `${openSubMenu.type}-${openSubMenu.index}`;

            if (subMenuRefs.current[key]) {
                setSubMenuHeight((prevHeights) => ({
                    ...prevHeights,
                    [key]: subMenuRefs.current[key]?.scrollHeight || 0,
                }));
            }
        }
    }, [openSubMenu]);

    const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
        setOpenSubMenu((prev) => {
            if (prev &&
                prev.type === menuType &&
                prev.index === index
            ) {
                return null;
            }

            return { type: menuType, index };
        });
    };

    return (
        <aside className="fixed mt-16 lg:mt-0 bg-white flex flex-col top-0 px-5 left-0 w-72 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200"> 
            {/* Logo */}
            <div className="py-4.5 pr-4.5 bg-white">
                <div className="flex items-center space-x-3">
                    <Link 
                        to="/dashboard"
                        className="min-w-11 min-h-11 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                    >
                        <Zap className="w-6 h-6 text-white"/>
                    </Link>

                    <div>
                        <h1 className="text-xl font-bold text-slate-800">
                            LinkSub VIP
                        </h1>
                        <p className="text-sm text-slate-500">
                            Admin Panel
                        </p>
                    </div>
                </div>
            </div>

            {/* Nav Item */}
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        {/* Main Item */}
                        <div>
                            <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                                !isExpanded && !isHovered 
                                    ? "lg:justify-center"
                                    : "lg:justify-start"
                            }`}>
                                Menu
                            </h2>

                            {renderMenuItems(navItems, "main")}
                        </div>

                        {/* Others Item */}
                        <div>
                            <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                                !isExpanded && !isHovered 
                                    ? "lg:justify-center"
                                    : "lg:justify-start"
                            }`}>
                                Others
                            </h2>

                            {renderMenuItems(othersItems, "others")}
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default AdminSidebar;
