'use client';

import AuthFormHeader from '@/components/auth/AuthFormHeader'
import ForgotPasswordSection from '@/components/auth/ForgotPasswordSection'
import LoginForm from '@/components/auth/forms/LoginForm'
import React from 'react'

export default function page() {
    return (
        <div className='min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-50'>
            <AuthFormHeader title='Sign in to your account' desc='create a new account' />

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <LoginForm />
                </div>
            </div>
            <ForgotPasswordSection />
        </div>
    )
}
