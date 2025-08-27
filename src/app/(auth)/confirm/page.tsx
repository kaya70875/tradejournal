import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col gap-2 items-center justify-center w-full p-8 border border-gray-300'>
            <h2 className='text-lg font-bold text-gray-900'>Please Verify Your Email</h2>
            <p className='text-gray-800'>We send verification link to your email.</p>
        </div>
    )
}
