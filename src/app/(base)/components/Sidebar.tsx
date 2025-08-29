"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
    BookOpenIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HomeIcon,
    LayoutDashboardIcon,
    UserIcon,
    BarChart2Icon,
    SettingsIcon,
    LogOutIcon,
} from "lucide-react";
import { supabase } from "@/utils/supabase/client";
import UserInfo from "./UserInfo";

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const navItems = [
        { label: "Home", href: "/", icon: <HomeIcon className="h-5 w-5" /> },
        { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboardIcon className="h-5 w-5" /> },
        { label: "Account", href: "/account", icon: <UserIcon className="h-5 w-5" /> },
        { label: "Analytics", href: "/analytics", icon: <BarChart2Icon className="h-5 w-5" /> },
        { label: "Settings", href: "/settings", icon: <SettingsIcon className="h-5 w-5" /> },
    ];

    const handleLogout = async () => {
        await supabase.auth.signOut();
        router.push('/login');
    }
    return (
        <div
            className={`${isCollapsed ? "w-16" : "w-64"} h-screen bg-gray-900 text-white flex flex-col transition-all duration-300 fixed left-0 top-0`}
        >
            {/* Logo */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/" className="flex items-center">
                    <BookOpenIcon className="h-8 w-8 text-blue-400" />
                    {!isCollapsed && <span className="ml-2 text-xl font-bold">TradeJournal</span>}
                </Link>
                <button
                    onClick={() => setIsCollapsed((prev) => !prev)}
                    className="hidden lg:block text-gray-400 hover:text-white"
                >
                    {isCollapsed ? <ChevronRightIcon className="h-5 w-5" /> : <ChevronLeftIcon className="h-5 w-5" />}
                </button>
            </div>

            {/* User */}
            <div className={`flex items-center ${isCollapsed ? "justify-center" : "px-4"} py-4 border-b border-gray-800`}>
                {!isCollapsed && (
                    <UserInfo />
                )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-4">
                <ul className="space-y-1">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={`flex items-center ${isCollapsed ? "justify-center px-3" : "px-4"
                                    } py-3 rounded-md transition ${pathname === item.href
                                        ? "bg-blue-600 text-white"
                                        : "text-gray-300 hover:bg-gray-800"
                                    }`}
                            >
                                {item.icon}
                                {!isCollapsed && <span className="ml-3">{item.label}</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Logout */}
            <div className="border-t border-gray-800 p-4">
                <button
                    onClick={handleLogout}
                    className={`flex items-center cursor-pointer ${isCollapsed ? "justify-center" : ""
                        } text-gray-300 hover:text-white w-full`}
                >
                    <LogOutIcon className="h-5 w-5" />
                    {!isCollapsed && <span className="ml-3">Logout</span>}
                </button>
            </div>
        </div>
    );
}
