import { Outlet } from "react-router-dom"

import UserSidebar from "./UserSidebar"
import UserHeader from "./UserHeader"
import UserFooter from "./UserFooter"

function ClientLayout() {
    return (
        <div className="min-h-screen lg:flex">
            <UserSidebar />

            <main className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
                <UserHeader />

                <div className="flex-1 bg-slate-50 overflow-y-auto">
                    <Outlet />
                </div>

                <UserFooter />
            </main>
        </div>
    )
}

export default ClientLayout