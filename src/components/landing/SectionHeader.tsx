import React from 'react'

interface SectionHeaderProps {
    title: string;
    desc: string;
}

export default function SectionHeader({ title, desc }: SectionHeaderProps) {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {title}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                {desc}
            </p>
        </div>
    )
}