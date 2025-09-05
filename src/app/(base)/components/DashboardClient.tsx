"use client";

import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import SearchInput from "./SearchInput";
import TradeForm from "./TradeForm";
import TradeCard from "./TradeCard";
import TradeDetailModal from "./TradeDetailModal"; // Import the new modal component
import { useRealtimeTrades } from "@/hooks/useRealTimeTradeCards";

export interface TradeCard {
  id: number;
  pair: string;
  reason: string;
  created_at: string;
  tags: string[];
}

interface DashboardClientProps {
  tradeCards: TradeCard[];
}

export default function DashboardClient({ tradeCards: initialCards }: DashboardClientProps) {
  const [tradeCards, setTradeCards] = useState<TradeCard[]>(initialCards);
  const [showTradeForm, setShowTradeForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [editedCard, setEditedCard] = useState<TradeCard | null>(null);

  // State for TradeDetailModal
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTradeForDetail, setSelectedTradeForDetail] = useState<TradeCard | null>(null);

  const handleOnEdit = (card: TradeCard) => {
    setIsEditing(true);
    setShowTradeForm(true);
    setEditedCard(card);
  };

  const handleNewTradeForm = () => {
    setShowTradeForm(true);
    setIsEditing(false);
    setEditedCard(null);
  };

  const handleViewDetails = (trade: TradeCard) => {
    setSelectedTradeForDetail(trade);
    setShowDetailModal(true);
  };

  useRealtimeTrades(setTradeCards, isFormSubmitted);

  return (
    <div className="p-8 flex flex-col gap-4">
      <DashboardHeader onOpen={handleNewTradeForm} />
      <SearchInput setTradeCards={setTradeCards} initialCards={initialCards}/>

      {showTradeForm && (
        <TradeForm
          onClose={() => setShowTradeForm(false)}
          formSubmitted={() => setIsFormSubmitted(true)}
          type={isEditing ? "update" : "insert"}
          initialValues={editedCard as TradeCard}
          editingCardId={editedCard?.id}
        />
      )}

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {tradeCards.map((card) => (
          <TradeCard
            trade={card} // Pass the entire card object
            key={card.id}
            onEdit={handleOnEdit}
            onViewDetails={handleViewDetails} // Pass the new handler
          />
        ))}
      </section>

      {showDetailModal && selectedTradeForDetail && (
        <TradeDetailModal
          trade={selectedTradeForDetail}
          onClose={() => setShowDetailModal(false)}
        />
      )}
    </div>
  );
}