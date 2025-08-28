import { Inter } from "next/font/google";
import "../globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter();

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className={`${inter.className} antialiased`}
        >
            <Sidebar />
            {children}
        </div>
    );
}
