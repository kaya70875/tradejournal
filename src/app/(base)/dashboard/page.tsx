import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import React from 'react'
import DashboardHeader from '../components/DashboardHeader';
import SearchInput from '../components/SearchInput';
import TradeCard from '../components/TradeCard';

export default async function page() {
    const supabase = await createClient();

    const { data, error } = await supabase.auth.getClaims();
    if (error || !data?.claims) {
        redirect("/login");
    }
    return (
        <div className='ml-[256px] p-8 flex flex-col gap-4'>
            <DashboardHeader />
            <SearchInput />

            <TradeCard pair='BTC/USD' reason='Bitcoing showing strong support at $40,000 level. Multiple technical indicators suggesting a bullish reversal pattern.' date='Aug 27, 2025' tags={['long', 'crypto', 'swing']} />
        </div>
    )
}
