'use client';

import { supabase } from '@/utils/supabase/client';
import { SquarePen, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ConfirmationModal from './ConfirmationModal';

interface TradeCardActionsProps {
    cardId: number;
}

export default function TradeCardActions({ cardId }: TradeCardActionsProps) {

    const [confirmationModal, setConfirmationModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleRemoveCard = async () => {
        setLoading(true);
        const { error } = await supabase.from('trade').delete().eq('id', cardId);
        if (error) return console.error(error);
        setLoading(false);
        setConfirmationModal(false);
    }

    const handleUpdateCard = async () => {

    }

    return (
        <div className="icons-action flex items-center gap-2">
            <header>
                {confirmationModal && (<ConfirmationModal onConfirm={handleRemoveCard} onCancel={() => setConfirmationModal(false)} loading={loading} />)}
            </header>

            <SquarePen className="w-5 h-5 text-gray-400 cursor-pointer hover:opacity-80" onClick={handleUpdateCard} />
            <Trash className="w-5 h-5 text-gray-400 cursor-pointer hover:opacity-80" onClick={() => setConfirmationModal(true)} />
        </div>
    )
}
