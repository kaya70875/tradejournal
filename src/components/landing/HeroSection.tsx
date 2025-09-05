import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div className="bg-white text-gray-900 py-20 sm:py-28 lg:py-36">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                    Master Your Trades. <span className="text-primary-blue">Journal Your Success.</span>
                </h1>
                <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
                    Document every decision, analyze your performance, and refine your strategy with TradeJournal.
                    Intelligent trading starts here.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/dashboard"
                        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-blue hover:bg-primary-blue-accent transition-colors md:text-lg"
                    >
                        Start Journaling for Free
                    </Link>
                    <Link
                        href="#features"
                        className="px-8 py-3 border border-primary-blue text-base font-medium rounded-md text-primary-blue bg-white hover:bg-blue-50 transition-colors md:text-lg"
                    >
                        Learn More
                    </Link>
                </div>
                {/* Placeholder for a visual element (e.g., dashboard mockup or illustration) */}
                <div className="mt-16">
                    {/* You can add an image or illustration here, e.g.: */}
                    {/* <img src="/path/to/dashboard-mockup.png" alt="TradeJournal Dashboard" className="mx-auto rounded-lg shadow-xl" /> */}
                </div>
            </div>
        </div>
    )
}