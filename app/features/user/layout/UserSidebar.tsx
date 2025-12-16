import { 
    Calendar,
    GridIcon,
    ListIcon,
    PiIcon,
    TableIcon,
    UserCircle
} from "lucide-react";
import { Link } from "react-router";

type NavItemType = {
    name: string,
    icon: React.ReactNode,
    path?: string,
    subItems?: {
        name: string,
        path: string,
        new?: boolean
    }[]
};

const navItems: NavItemType[] = [
    {
        icon: <GridIcon />,
        name: "Tạo đơn ",
        path: "/dashboard"
    },
    {
        icon: <Calendar />,
        name: "Nạp tiền",
        path: "/calendar",
    },
    {
        icon: <UserCircle />,
        name: "Đơn hàng đã mua",
        path: "/profile",
    },
    {
        icon: <Calendar />,
        name: "Bảng giá dịch vụ",
        path: "/calendar",
    },
    {
        icon: <UserCircle />,
        name: "Tiếp thị liên kết",
        path: "/profile",
    },
    {
        name: "Forms",
        icon: <ListIcon />,
        subItems: [
            { 
                name: "Form Elements",
                path: "/form-elements",
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
            },
            { 
                name: "404 Error",
                path: "/error-404",
            },
        ],
    },
]

function UserSidebar() {
    const renderMenuItems = (
        navItems: NavItemType[],
        menuType: "main" | "others"
    ) => {
        return (
            <ul className="flex flex-col gap-4">
                {navItems.map((nav, index) => (
                    <li key={nav.name}>
                        {nav.subItems ? (
                            <button>

                            </button>
                        ) : (
                            nav.path && (
                                <Link
                                    className={"bg-slate-800 flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-[14px] group text-slate-200"}
                                    to={nav.path}
                                >
                                    <span>
                                        {nav.icon}
                                    </span>
                                    <span>
                                        {nav.name}
                                    </span>
                                </Link>
                            )
                        )}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <aside className="sticky mt-1 lg:mt-0 flex flex-col top-0 px-5 left-0 w-72 bg-[#0f172a] text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-slate-200">
            {/* Logo */}
            <div className="h-18 py-3 px-6 mb-4">
                <img 
                    src="./images/logo.png" 
                    alt="" 
                    className="w-auto h-auto"
                />
            </div>

            {/* Nav Item */}
            <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
                <nav className="mb-6">
                    <div className="flex flex-col gap-4">
                        {/* Menu Item */}
                            <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-slate-400 font-medium`}>
                                MENU
                            </h2>
                            {/* render menu items */}
                            {renderMenuItems(navItems, "main")}

                        {/* Service Item */}
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default UserSidebar