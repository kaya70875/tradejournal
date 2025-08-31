'use client';

import FormField from '@/components/auth/FormField';
import React, { useState } from 'react'
import TextArea from './TextArea';

export default function TradeForm() {

  const [tradeForm, setTradeForm] = useState({
    pair: '',
    reason: '',
    tags: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTradeForm(prev => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',').map(tag => tag.trim()) : value,
    }))
  }

  return (
    <div className='flex flex-col gap-6 w-full p-6 border border-gray-200 rounded-lg'>
      <header className="form-header">
        <h3>Add New Trade</h3>
      </header>
      <form className='flex flex-col gap-2 w-full'>
        <FormField label='Trading Pair' placeholder='BTC/USD, EUR/USD, AAPL, etc.' required name='pair' value={tradeForm.pair} onChange={handleChange} />
        <TextArea label='Why did you enter this trade?' name='reason' value={tradeForm.reason} placeholder='Describe your trading thesis and reasoning...' required onChange={handleChange} />
        <FormField label='Tags' placeholder='Add tags (e.g., long, daytrade)' name='tags' value={tradeForm.tags.join(', ')} onChange={handleChange} />
      </form>
    </div>
  )
}
