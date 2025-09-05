import Link from 'next/link'
import React from 'react'

interface AuthFormHeader {
    title: string;
    desc: string
}

export default function AuthFormHeader({ title, desc }: AuthFormHeader) {
    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {title}
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                    href="/signup"
                    className="font-medium text-primary-blue hover:text-blue-500"
                >
                    {desc}
                </Link>
            </p>
        </div>
    )
}
