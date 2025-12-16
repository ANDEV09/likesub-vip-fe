import { Outlet } from "react-router"

import UserSidebar from "./UserSidebar"
import UserHeader from "./UserHeader"

function ClientLayout() {
    return (
        <div className="min-h-screen lg:flex">
            <UserSidebar />

            <main className="flex-1">
                <UserHeader />

                <Outlet />
            </main>
        </div>
    )
}

export default ClientLayout