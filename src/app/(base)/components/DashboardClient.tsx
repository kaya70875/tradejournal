'use client';

import React, { useState } from 'react'
import DashboardHeader from './DashboardHeader'
import SearchInput from './SearchInput'
import TradeForm from './TradeForm'
import TradeCard from './TradeCard'

interface TradeCard {
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

    return (
        <div className='ml-[256px] p-8 flex flex-col gap-4'>
            <DashboardHeader onOpen={() => setShowTradeForm(true)} />
            <SearchInput />

            {showTradeForm && (
                <TradeForm onClose={() => setShowTradeForm(false)} />
            )}

            <section className='grid grid-cols-3 gap-4 w-full'>
                {tradeCards.map((card, idx) => (
                    <TradeCard id={card.id} pair={card.pair} reason={card.reason} date={card.created_at} tags={card.tags} key={idx} />
                ))}
            </section>


        </div>
    )
}
