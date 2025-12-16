import { 
    Calendar,
    GridIcon,
    ListIcon,
    PiIcon,
    TableIcon,
    UserCircle
} from "lucide-react";

type NavItem = {
    name: string,
    icon: React.ReactNode,
    path?: string,
    subItems?: {
        name: string,
        path: string,
        new?: boolean
    }[]
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
    return (
        <div>
            UserSidebar
        </div>
    )
}

export default UserSidebar