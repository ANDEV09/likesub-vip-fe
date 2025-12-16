import { createContext, useState } from "react";

type SidebarContextType = {
    isExpanded: boolean;
    isHovered: boolean;
    activeItem: string | null;
    openSubmenu: string | null;

    toggleSidebar: () => void;
    toggleSubmenu: (item: string | null) => void;
    setIsHovered: (isHovered: boolean) => void;
    setActiveItem: (item: string | null) => void;
};

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const toggleSidebar = () => {
        setIsExpanded(prev => !prev);
    };

    const toggleSubmenu = (item: string | null) => {
        setOpenSubmenu(prev => (prev === item ? null : item));
    };

    return (
        <SidebarContext.Provider
            value={{
                isExpanded,
                isHovered,
                activeItem,
                openSubmenu,
                toggleSidebar,
                toggleSubmenu,
                setIsHovered,
                setActiveItem,
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
