'use client';

import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const inter = Inter();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <div
            className={`${inter.className} antialiased`}
        >
            <Sidebar onToggle={() => setToggleSidebar((prev) => !prev)} />
            <main className={`${toggleSidebar ? 'ml-[64px]' : 'ml-[256px]'} transition-all duration-200 ease-in`}>
                {children}
            </main>
        </div>
    );
}
