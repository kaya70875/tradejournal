"use client";

import { Book, MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        {
            name: "Features",
            route: "#features",
        },
        {
            name: "Login",
            route: "/login",
        }
    ]

    return (
        <nav className='sticky top-0 z-50 bg-white shadow-sm w-full'>
            <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
                <div className="logo flex items-center gap-2">
                    <Book className='h-8 w-8 text-primary-blue' />
                    <h3 className='font-bold text-gray-900 text-xl'>TradeJournal</h3>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link className={`text-gray-700 font-medium hover:text-primary-blue transition-colors`} key={idx} href={link.route}>{link.name}</Link>
                    ))}
                    <Link href={"/signup"}>
                        <button className='bg-primary-blue text-white px-5 py-2 font-medium cursor-pointer hover:bg-primary-blue-accent rounded-lg transition-colors'>
                            Sign Up
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-700 focus:outline-none">
                        {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 z-40">
                    <div className="flex flex-col items-center gap-4">
                        {navLinks.map((link, idx) => (
                            <Link
                                className="text-gray-700 font-medium hover:text-primary-blue py-2"
                                key={idx}
                                href={link.route}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href={"/signup"}>
                            <button
                                className='bg-primary-blue text-white px-5 py-2 font-medium cursor-pointer hover:bg-primary-blue-accent rounded-lg w-full max-w-[150px] transition-colors'
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}