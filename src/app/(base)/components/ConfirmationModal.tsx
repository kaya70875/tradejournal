import Button from '@/components/Button'
import { XIcon } from 'lucide-react';
import React from 'react'

interface ConfirmationModalProps {
    onConfirm: () => void;
    onCancel: () => void;
    loading: boolean;
}

export default function ConfirmationModal({ onConfirm, onCancel, loading }: ConfirmationModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-overlay absolute inset-0 bg-black opacity-50 backdrop-blur-sm" />

            <div className="relative z-10 border border-gray-200 w-1/4 flex flex-col rounded-lg bg-white">
                <section className='flex flex-col items-start'>
                    <header className='flex items-center w-full justify-between p-3 border-b border-gray-200'>
                        <p className='text-gray-900 font-medium'>Confirm to delete selected card</p>
                        <XIcon className='w-4 h-4 text-gray-400 cursor-pointer hover:opacity-80' onClick={onCancel} />
                    </header>

                    <div className="explanation text-gray-700 text-sm p-3 border-b border-gray-200 w-full">
                        <p>Are you sure you want to delete this card ?</p>
                        <p>This action cannot be undone.</p>
                    </div>
                </section>

                <div className='flex items-center gap-4 justify-center w-full p-3'>
                    <Button onClick={onConfirm} disabled={loading} className='disabled:opacity-80 w-full'>{loading ? 'Deleting' : 'Confirm'}</Button>
                    <Button onClick={onCancel} variant='ghost' className='w-full'>Cancel</Button>
                </div>
            </div>
        </div>
    )
}
