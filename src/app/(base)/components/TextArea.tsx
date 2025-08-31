import React from 'react'

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export default function TextArea({ label, ...props }: TextAreaProps) {
    return (
        <div className='flex flex-col gap-1'>
            {label && (
                <label
                    htmlFor="reason"
                    className="block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <textarea
                {...props}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />

        </div>
    )
}
