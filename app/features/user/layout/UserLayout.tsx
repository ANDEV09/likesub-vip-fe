import { Outlet } from "react-router-dom";
import { useState } from "react";

import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
import UserFooter from "./UserFooter";
import SystemAlertModal from "../components/SystemAlertModal";
import ScrollToTopButton from "../components/ScrollToTopButton";

function ClientLayout() {
    const [isShowFirstAlert, setIsShowFirstAlert] = useState(true);

    return (
        <div className="min-h-screen lg:flex relative">
            {/* Overlay Alert */}
            {isShowFirstAlert && 
                <SystemAlertModal setIsShowFirstAlert = {setIsShowFirstAlert} />}

            <UserSidebar />

            <main className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
                <UserHeader />

                <div className="flex-1 bg-slate-100 overflow-y-auto">
                    <Outlet />
                </div>

                <UserFooter />
            </main>

            <ScrollToTopButton />
        </div>
    )
}

export default ClientLayout