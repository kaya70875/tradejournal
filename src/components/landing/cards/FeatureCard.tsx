import React from 'react'

interface FeatureCardProps {
    title: string;
    desc: string;
    icon: React.ReactNode;
}

export default function FeatureCard({ title, desc, icon }: FeatureCardProps) {
    return (
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="bg-blue-100 rounded-full h-12 flex items-center justify-center mb-4 w-1/4">
                {icon}
            </div>
            <h3 className="text-lg font-medium text-gray-900">
                {title}
            </h3>
            <p className="mt-2 text-gray-600">
                {desc}
            </p>
        </div>
    )
}
