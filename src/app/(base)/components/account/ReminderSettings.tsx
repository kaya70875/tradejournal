"use client";

import React, { useState } from 'react';
import { BellIcon } from 'lucide-react';

export default function ReminderSettings() {
    const [frequency, setFrequency] = useState('weekly'); // Default value

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <BellIcon className="h-5 w-5 text-gray-600" />
                Reminder Settings
            </h3>
            <p className="text-gray-600 text-sm">
                Set how frequently you want to receive email reminders to check if your trades are still relevant.
            </p>
            <div className="flex flex-col gap-2">
                <label htmlFor="reminder-frequency" className="text-sm font-medium text-gray-700">
                    Reminder Frequency
                </label>
                <select
                    id="reminder-frequency"
                    name="reminder-frequency"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="never">Never</option>
                </select>
            </div>
        </div>
    );
}