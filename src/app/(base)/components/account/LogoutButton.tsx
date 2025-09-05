"use client";

import React, { useState } from 'react';
import Button from '@/components/Button';
import { LogOutIcon } from 'lucide-react';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { showError, showSuccess } from '@/utils/toast';

export default function LogoutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signOut();
        setLoading(false);

        if (error) {
            console.error('Error logging out:', error);
            showError(`Failed to log out: ${error.message}`);
        } else {
            showSuccess('Logged out successfully!');
            router.push('/login');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <LogOutIcon className="h-5 w-5 text-gray-600" />
                Logout
            </h3>
            <p className="text-gray-600 text-sm">
                Click the button below to securely log out of your account.
            </p>
            <Button onClick={handleLogout} disabled={loading} className="w-fit">
                {loading ? 'Logging out...' : 'Logout'}
            </Button>
        </div>
    );
}