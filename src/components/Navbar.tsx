import { Book } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

    const navLinks = [
        {
            name: "Home",
            route: "/",
            classname: 'hidden md:block'
        },
        {
            name: "Features",
            route: "#features",
            classname: 'hidden md:block'
        },
        {
            name: "Login",
            route: "/login",
            classname: ''
        }
    ]

    return (
        <nav className='flex items-center justify-between p-6 container mx-auto bg-white w-full'>
            <div className="logo flex items-center gap-2">
                <Book className='h-8 w-8 text-primary-blue' />
                <h3 className='font-bold text-gray-900 hidden sm:block'>TradeJourney</h3>
            </div>

            <div className="links flex items-center gap-12">
                {navLinks.map((link, idx) => (
                    <Link className={`text-gray-700 font-medium hover:text-primary-blue ${link.classname}`} key={idx} href={link.route}>{link.name}</Link>
                ))}

                <Link href={"/signup"}>
                    <button className='bg-primary-blue text-white px-4 py-2 font-medium cursor-pointer hover:bg-primary-blue-accent rounded-lg'>
                        Sign Up
                    </button>
                </Link>
            </div>
        </nav>
    )
}
