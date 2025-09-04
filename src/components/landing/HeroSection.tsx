import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div className="bg-primary-blue text-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        Document Your Trading Journey
                    </h1>
                    <p className="mt-6 text-xl max-w-2xl mx-auto">
                        Understand why you enter trades, track your decision-making
                        process, and improve your trading strategy.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/dashboard"
                            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-blue bg-white hover:bg-gray-50 md:text-lg"
                        >
                            Start Journaling
                        </Link>
                        <Link
                            href="#features"
                            className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-blue-accent hover:bg-blue-700 md:text-lg"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
