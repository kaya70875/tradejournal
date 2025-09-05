import React from 'react';
import ProfileInformation from '../components/account/ProfileInformation';
import ReminderSettings from '../components/account/ReminderSettings';
import PasswordSettings from '../components/account/PasswordSettings';

export default function AccountPage() {
    return (
        <div className="p-8 flex flex-col gap-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900">Account Settings</h2>
            
            <ProfileInformation />
            <ReminderSettings />
            <PasswordSettings />
        </div>
    );
}