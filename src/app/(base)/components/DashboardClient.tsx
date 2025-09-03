'use client';

import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import SearchInput from './SearchInput'
import TradeForm from './TradeForm'
import TradeCard from './TradeCard'

export interface TradeCard {
    id: number;
    pair: string;
    reason: string;
    created_at: string;
    tags: string[];
}

interface DashboardClientProps {
    tradeCards: TradeCard[]
}

export default function DashboardClient({ tradeCards }: DashboardClientProps) {

    const [showTradeForm, setShowTradeForm] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingCard, setEditingCard] = useState<TradeCard | null>(null);

    const handleOnEdit = (card: TradeCard) => {
        setIsEditing(true);
        setShowTradeForm(true);
        setEditingCard(card);
    }

    const handleNewTradeForm = () => {
        setShowTradeForm(true);
        setIsEditing(false);
        setEditingCard(null);
    }

    return (
        <div className='ml-[256px] p-8 flex flex-col gap-4'>
            <DashboardHeader onOpen={handleNewTradeForm} />
            <SearchInput />

            {showTradeForm && (
                <TradeForm onClose={() => setShowTradeForm(false)} type={isEditing ? 'update' : 'insert'} initialValues={editingCard as TradeCard} editingCardId={editingCard?.id} />
            )}

            <section className='grid grid-cols-3 gap-4 w-full'>
                {tradeCards.map((card, idx) => (
                    <TradeCard
                        id={card.id}
                        pair={card.pair}
                        reason={card.reason}
                        date={card.created_at}
                        tags={card.tags}
                        key={idx}
                        onEdit={() => handleOnEdit(card)}
                    />
                ))}
            </section>


        </div>
    )
}
