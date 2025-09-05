import { BarChart2Icon, BookOpenIcon, CheckCircleIcon, ClockIcon, TagIcon } from 'lucide-react'
import React from 'react'
import SectionHeader from './SectionHeader'
import FeatureCard from './cards/FeatureCard'

const featureCards = [
    {
        title: "Document Trade Reasoning",
        desc: "Keep a detailed record of why you entered each trade, helping you identify patterns in your decision-making.",
        icon: <BookOpenIcon className="h-6 w-6 text-blue-600" area-hidden="true" />
    },

    {
        title: "Categorize with Tags",
        desc: "Organize your trades with custom tags like 'long, 'short,' 'daytrade,' or 'swing' for better analysis.",
        icon: <TagIcon className="h-6 w-6 text-blue-600" area-hidden="true" />
    },

    {
        title: "Trade Relevance Reminders",
        desc: "Receive email reminders to review if your trade thesis is still relevant based on current market conditions.",
        icon: <ClockIcon className="h-6 w-6 text-blue-600" area-hidden="true" />
    },

    {
        title: "Performance Analytics",
        desc: "Track your trading performance over time and identify which strategies work best for you.",
        icon: <BarChart2Icon className="h-6 w-6 text-blue-600" area-hidden="true" />

    },

    {
        title: "Trade Validation",
        desc: "Review your past decisions to validate your trading strategy and improve future outcomes.",
        icon: <CheckCircleIcon className="h-6 w-6 text-blue-600" area-hidden="true" />

    }
] as const;

export default function FeaturesSection() {
    return (
        <div id="features" className="py-16 sm:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader title='Unlock Your Trading Potential' desc='Our powerful features help you make informed decisions and achieve consistent growth.' />
                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featureCards.map((card, idx) => (
                            <FeatureCard key={idx} title={card.title} desc={card.desc} icon={card.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}