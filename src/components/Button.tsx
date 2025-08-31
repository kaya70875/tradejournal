import React from 'react'

type ButtonVariants = 'default' | 'ghost';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: ButtonVariants;
}

export default function Button({ children, className, variant = 'default', ...props }: ButtonProps) {

    const variants = {
        'default': 'flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-80',
        'ghost': 'px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
    } as const;

    return (
        <button
            {...props}
            className={`${className} ${variants[variant]} cursor-pointer`}
        >
            {children}
        </button>
    )
}
