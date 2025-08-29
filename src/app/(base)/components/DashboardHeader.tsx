import Button from '@/components/Button'
import React from 'react'

export default function DashboardHeader() {
    return (
        <div className='flex items-center w-full justify-between'>
            <h2>Trading Dashboard</h2>
            <Button>+ Add New Trade</Button>
        </div>
    )
}
