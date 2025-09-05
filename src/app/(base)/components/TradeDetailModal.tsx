"use client";

import React from 'react';
import { XIcon, Calendar } from 'lucide-react';
import Tag from './Tag';
import { TradeCard as TradeCardType } from './DashboardClient'; // Renamed to avoid conflict

interface TradeDetailModalProps {
    trade: TradeCardType;
    onClose: () => void;
}

export default function TradeDetailModal({ trade, onClose }: TradeDetailModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-overlay absolute inset-0 bg-black opacity-50 backdrop-blur-sm" onClick={onClose} />

            <div className="relative z-10 bg-white rounded-lg shadow-xl w-full max-w-2xl flex flex-col">
                <header className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900">{trade.pair} Details</h3>
                    <XIcon className="w-5 h-5 text-gray-400 cursor-pointer hover:opacity-80" onClick={onClose} />
                </header>

                <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span>{new Date(trade.created_at).toLocaleDateString()}</span>
                    </div>

                    <div>
                        <p className="text-sm font-medium text-gray-700 mb-1">Reason:</p>
                        <p className="text-gray-800 leading-relaxed">{trade.reason}</p>
                    </div>

                    {trade.tags && trade.tags.length > 0 && (
                        <div>
                            <p className="text-sm font-medium text-gray-700 mb-1">Tags:</p>
                            <div className="flex flex-wrap gap-2">
                                {trade.tags.map((tag, idx) => (
                                    <Tag name={tag} key={idx} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}