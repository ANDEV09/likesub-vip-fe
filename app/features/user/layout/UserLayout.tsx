import { Outlet } from "react-router"

import UserSidebar from "./UserSidebar"
import UserHeader from "./UserHeader"
import UserFooter from "./UserFooter"

function ClientLayout() {
    return (
        <div className="min-h-screen lg:flex">
            <UserSidebar />

            <main className="flex-1 flex flex-col transition-all duration-300 ease-in-out overflow-y-auto">
                <UserHeader />

                <div className="flex-1 py-4 px-6 bg-slate-50">
                    <Outlet />
                </div>

                <UserFooter />
            </main>
        </div>
    )
}

export default ClientLayout