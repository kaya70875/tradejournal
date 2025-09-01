import Button from '@/components/Button'
import React from 'react'

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    loading: boolean;
}

export default function ConfirmationModal({ onConfirm, onCancel, loading }: ConfirmationModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="border bg-gray-100 border-gray-200 p-8 flex flex-col gap-6 rounded-lg">
                <header className='text-gray-900 font-medium'>
                    Are you sure you want to delete this card ?
                </header>

                <div className='flex items-center gap-4 justify-center w-full'>
                    <Button onClick={onConfirm} disabled={loading} className='disabled:opacity-80'>{loading ? 'Deleting' : 'Confirm'}</Button>
                    <Button onClick={onCancel} variant='ghost'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}
