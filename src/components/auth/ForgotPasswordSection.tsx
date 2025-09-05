import Link from 'next/link'
import React from 'react'

export default function ForgotPasswordSection() {
    return (
        <div className="mt-6 flex items-center justify-center">
            <div className="text-sm">
                <Link
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                >
                    Forgot your password?
                </Link>
            </div>
        </div>
    )
}
