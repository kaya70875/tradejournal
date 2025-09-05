import { BookOpenIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white mt-auto py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Branding Column */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center">
                            <BookOpenIcon className="h-8 w-8 text-blue-400" />
                            <span className="ml-2 text-xl font-bold">TradeJournal</span>
                        </div>
                        <p className="mt-4 text-sm text-gray-400">
                            Document your trading decisions and improve your strategy with our
                            comprehensive trading journal.
                        </p>
                        <div className="mt-6 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Twitter</span>
                                <TwitterIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Instagram</span>
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <span className="sr-only">Facebook</span>
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                            Company
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    Careers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
                            Resources
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-base text-gray-400 hover:text-white transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-base text-gray-500 text-center">
                        &copy; {new Date().getFullYear()} TradeJournal. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}