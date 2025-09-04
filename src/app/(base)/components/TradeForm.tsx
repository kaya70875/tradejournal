'use client';

import FormField from '@/components/auth/FormField';
import React, { useState } from 'react';
import TextArea from './TextArea';
import Button from '@/components/Button';
import { supabase } from '@/utils/supabase/client';

type FormType = 'insert' | 'update';

interface Trade {
  pair: string;
  reason: string;
  tags: string[];
}

interface TradeFormProps {
  onClose: () => void;
  formSubmitted: () => void;
  initialValues?: Trade;
  type?: FormType;
  editingCardId?: number;
}

export default function TradeForm({ onClose, formSubmitted, initialValues, type = 'insert', editingCardId }: TradeFormProps) {
  const [tradeForm, setTradeForm] = useState<Trade>({
    pair: initialValues?.pair || '',
    reason: initialValues?.reason || '',
    tags: initialValues?.tags || [] as string[],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Added for error display

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTradeForm((prev) => ({
      ...prev,
      [name]: name === 'tags' ? value.split(',').map((tag) => tag.trim()) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      formSubmitted();

      if (type === 'insert') {
        const { error: insertError } = await supabase.from('trade').insert([
          {
            pair: tradeForm.pair,
            reason: tradeForm.reason,
            tags: tradeForm.tags,
          },
        ]);

        if (insertError) throw insertError;
      } else {
        if (!editingCardId) {
          throw new Error('No editingCardId provided for update');
        }
        const { error: updateError } = await supabase
          .from('trade')
          .update({
            pair: tradeForm.pair,
            reason: tradeForm.reason,
            tags: tradeForm.tags,
          })
          .eq('id', editingCardId);

        if (updateError) throw updateError;
      }

      onClose();
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full p-6 border border-gray-200 rounded-lg">
      <header className="form-header">
        <h3>{type === 'insert' ? 'Add New Trade' : 'Update Trade Card'}</h3>
      </header>
      {error && <div className="text-red-500">{error}</div>}
      <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
        <section className="inputs flex flex-col gap-2">
          <FormField
            label="Trading Pair"
            placeholder="BTC/USD, EUR/USD, AAPL, etc."
            required
            name="pair"
            value={tradeForm.pair}
            onChange={handleChange}
          />
          <TextArea
            label="Why did you enter this trade?"
            name="reason"
            value={tradeForm.reason}
            placeholder="Describe your trading thesis and reasoning..."
            required
            onChange={handleChange}
          />
          <FormField
            label="Tags"
            placeholder="Add tags (e.g., long, daytrade)"
            name="tags"
            value={tradeForm.tags.join(', ')}
            onChange={handleChange}
          />
        </section>
        <TradeActionButtons loading={loading} onClose={onClose} type={type} />
      </form>
    </div>
  );
}

function TradeActionButtons({ loading, onClose, type = 'insert' }: { loading: boolean; onClose: () => void; type: FormType }) {
  return (
    <div className="w-full flex items-center justify-end gap-4">
      <Button type="submit" disabled={loading} className="disabled:opacity-80">
        {type === 'insert' ? 'Add trade' : 'Update trade'}
      </Button>
      <Button onClick={onClose} variant="ghost">
        Cancel
      </Button>
    </div>
  );
}