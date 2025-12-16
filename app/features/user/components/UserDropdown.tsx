import { useState } from "react";

function UserDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* User Info Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-gray-700 dropdown-toggle cursor-pointer"
            >
                <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
                <img
                    width={44}
                    height={44}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="User"
                />
                </span>

                <span className="block mr-1 font-medium text-theme-sm text-sm">
                    maaitlunghau
                </span>

                <svg
                className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                }`}
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </svg>
            </button>

            {/* Dropdown */}
        </div>
    )
}

export default UserDropdown