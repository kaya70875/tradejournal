import Button from '@/components/Button'
import React from 'react'

interface DashboardHeaderProps {
    onOpen: () => void;
}

export default function DashboardHeader({ onOpen }: DashboardHeaderProps) {
    return (
        <div className='flex items-center w-full justify-between'>
            <h2>Trading Dashboard</h2>
            <Button onClick={onOpen}>+ Add New Trade</Button>
        </div>
    )
}
