import Link from 'next/link'
import React from 'react'

export default function CTASection() {
    return (
        <div className="bg-primary-blue py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                    Ready to Transform Your Trading?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
                    Join thousands of traders improving their discipline and profitability with TradeJournal.
                </p>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/signup"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue bg-white hover:bg-gray-50 transition-colors md:text-lg"
                    >
                        Get Started Now
                    </Link>
                </div>
            </div>
        </div>
    )
}