import { AuthError } from "@supabase/supabase-js";
import React from "react";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string | undefined;
}

export default function FormField({
    label,
    error,
    className = "",
    ...props
}: FormFieldProps) {
    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label className="text-sm font-medium text-gray-700">{label}</label>
            )}
            <input
                className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                {...props}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
