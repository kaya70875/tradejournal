"use client";

import React, { useState, useEffect } from 'react';
import Button from '@/components/Button';
import FormField from '@/components/auth/FormField';
import { useGetUser } from '@/hooks/useGetUser';
import { useProfile, Profile } from '@/hooks/useProfile';
import { supabase } from '@/utils/supabase/client';
import { showSuccess, showError } from '@/utils/toast';

export default function ProfileInformation() {
    const { user, loading: userLoading } = useGetUser();
    const { profile, setProfile, loading: profileLoading } = useProfile(user?.id);
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (profile?.full_name) {
            setName(profile.full_name);
        }
    }, [profile]);

    const handleSave = async () => {
        if (!user?.id) return;

        setSaving(true);
        const { error } = await supabase
            .from('profiles')
            .update({ full_name: name })
            .eq('id', user.id);

        setSaving(false);

        if (error) {
            console.error('Error updating profile:', error);
            showError('Failed to update profile.');
        } else {
            setProfile((prev: Profile | null) => prev ? { ...prev, full_name: name } : null);
            showSuccess('Profile updated successfully!');
            setIsEditing(false);
        }
    };

    if (userLoading || profileLoading) {
        return (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    Profile Information
                </h3>
                <p className="text-gray-600">Loading profile...</p>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                Profile Information
            </h3>
            {isEditing ? (
                <div className="flex flex-col gap-4">
                    <FormField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                    />
                    <div className="flex gap-2 justify-end">
                        <Button onClick={handleSave} disabled={saving}>
                            {saving ? 'Saving...' : 'Save'}
                        </Button>
                        <Button variant="ghost" onClick={() => setIsEditing(false)}>
                            Cancel
                        </Button>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <div>
                            <p className="text-sm font-medium text-gray-700">Name</p>
                            <p className="text-gray-800">{profile?.full_name || 'N/A'}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Email</p>
                            <p className="text-gray-800">{user?.email || 'N/A'}</p>
                        </div>
                    </div>
                    <Button onClick={() => setIsEditing(true)} variant="ghost">
                        Edit Profile
                    </Button>
                </div>
            )}
        </div>
    );
}