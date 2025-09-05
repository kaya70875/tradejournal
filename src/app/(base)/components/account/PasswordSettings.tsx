"use client";

import React from 'react';
import Button from '@/components/Button';
import { KeyRoundIcon } from 'lucide-react';

export default function PasswordSettings() {
    const handleChangePassword = () => {
        // Implement password change logic here (e.g., open a modal or redirect)
        alert('Change password functionality coming soon!');
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <KeyRoundIcon className="h-5 w-5 text-gray-600" />
                Password
            </h3>
            <p className="text-gray-600 text-sm">
                Update your password to keep your account secure.
            </p>
            <Button onClick={handleChangePassword} variant="ghost" className="w-fit">
                Change Password
            </Button>
        </div>
    );
}