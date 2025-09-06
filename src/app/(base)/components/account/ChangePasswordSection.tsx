"use client";

import React, { useState } from 'react';
import Button from '@/components/Button';
import FormField from '@/components/auth/FormField';
import { KeyRoundIcon } from 'lucide-react';
import { supabase } from '@/utils/supabase/client';
import { showSuccess, showError } from '@/utils/toast';
import { useGetUser } from '@/hooks/useGetUser';

export default function ChangePasswordSection() {
    const { user } = useGetUser();
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordError, setPasswordError] = useState<string | null>(null);

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError(null);

        if (newPassword !== confirmPassword) {
            setPasswordError("Passwords do not match.");
            return;
        }
        if (newPassword.length < 6) {
            setPasswordError("Password must be at least 6 characters long.");
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.updateUser({
            password: newPassword,
        });
        setLoading(false);

        if (error) {
            console.error('Error updating password:', error);
            showError(`Failed to update password: ${error.message}`);
        } else {
            showSuccess('Password updated successfully!');
            setNewPassword('');
            setConfirmPassword('');
        }
    };

    const handleSendResetEmail = async () => {
        if (!user?.email) {
            showError("No email found for the current user.");
            return;
        }

        setLoading(true);
        const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
            redirectTo: `${window.location.origin}/login`, // Redirect to login after reset
        });
        setLoading(false);

        if (error) {
            console.error('Error sending password reset email:', error);
            showError(`Failed to send reset email: ${error.message}`);
        } else {
            showSuccess('Password reset email sent! Check your inbox.');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <KeyRoundIcon className="h-5 w-5 text-gray-600" />
                Password Settings
            </h3>
            <p className="text-gray-600 text-sm">
                Update your password or send a reset link to your email.
            </p>

            <form onSubmit={handlePasswordUpdate} className="flex flex-col gap-4">
                <FormField
                    label="New Password"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />
                <FormField
                    label="Confirm New Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    error={passwordError as string}
                    required
                />
                <Button type="submit" disabled={loading} className="w-fit">
                    {loading ? 'Updating...' : 'Update Password'}
                </Button>
            </form>

            <div className="border-t border-gray-200 pt-4 mt-4">
                <p className="text-gray-600 text-sm mb-2">
                    If you prefer to reset your password via email:
                </p>
                <Button onClick={handleSendResetEmail} disabled={loading} variant="ghost" className="w-fit">
                    Send Password Reset Email
                </Button>
            </div>
        </div>
    );
}