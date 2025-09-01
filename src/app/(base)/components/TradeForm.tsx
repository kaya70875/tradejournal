'use client';

import FormField from '@/components/auth/FormField';
import React, { useState } from 'react'
import TextArea from './TextArea';
import Button from '@/components/Button';
import { supabase } from '@/utils/supabase/client';

interface Trade {
  pair: string;
  reason: string;
  tags: string[];
}

interface TradeFormProps {
  onClose: () => void;
  initialValues?: Trade;
}

export default function TradeForm({ onClose, initialValues }: TradeFormProps) {

  const [tradeForm, setTradeForm] = useState<Trade>({
    pair: initialValues?.pair || '',
    reason: initialValues?.reason || '',
    tags: initialValues?.tags || [] as string[]
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTradeForm(prev => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',').map(tag => tag.trim()) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('trade').insert([
      {
        'pair': tradeForm.pair,
        'reason': tradeForm.reason,
        'tags': tradeForm.tags,
      }
    ])

    setLoading(false);

    if (error) {
      console.error(error);
      return (
        /* TODO: We can show a toast or an error wrapper here. */
        <></>
      )
    }
  }

  return (
    <div className='flex flex-col gap-6 w-full p-6 border border-gray-200 rounded-lg'>
      <header className="form-header">
        <h3>Add New Trade</h3>
      </header>
      <form className='flex flex-col gap-6 w-full' onSubmit={handleSubmit}>
        <section className="inputs flex flex-col gap-2">
          <FormField label='Trading Pair' placeholder='BTC/USD, EUR/USD, AAPL, etc.' required name='pair' value={tradeForm.pair} onChange={handleChange} />
          <TextArea label='Why did you enter this trade?' name='reason' value={tradeForm.reason} placeholder='Describe your trading thesis and reasoning...' required onChange={handleChange} />
          <FormField label='Tags' placeholder='Add tags (e.g., long, daytrade)' name='tags' value={tradeForm.tags.join(', ')} onChange={handleChange} />
        </section>
        <TradeActionButtons loading={loading} onClose={onClose} />
      </form>

    </div>
  )
}

function TradeActionButtons({ loading, onClose }: { loading: boolean, onClose: () => void }) {
  return (
    <div className='w-full flex items-center justify-end gap-4'>
      <Button type='submit' disabled={loading} className='disabled:opacity-80'>Add Trade</Button>
      <Button onClick={onClose} variant='ghost'>Cancel</Button>
    </div>
  )
}
