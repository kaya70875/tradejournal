'use client';

import { TradeCard } from "@/app/(base)/components/DashboardClient";
import { supabase } from "@/utils/supabase/client";
import { useEffect } from "react";

// Custom hook for subscribing to real-time updates
export const useRealtimeTrades = (setTradeCards: React.Dispatch<React.SetStateAction<TradeCard[]>>) => {
  useEffect(() => {
    const channel = supabase
      .channel("realtime-trades")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "trade",
        },
        (payload) => {
          const { eventType, new: newCard, old: oldCard } = payload;

          // Update the state based on the event type
          setTradeCards((prev) => handleTradeUpdate(prev, eventType, newCard as TradeCard, oldCard as TradeCard));
        }
      )
      .subscribe();

    // Cleanup on component unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [setTradeCards]);
};

const handleTradeUpdate = (prev: TradeCard[], eventType: string, newCard?: TradeCard, oldCard?: TradeCard): TradeCard[] => {
  if (eventType === "INSERT") {
    return [newCard as TradeCard, ...prev];
  }

  if (eventType === "UPDATE") {
    return prev.map((card) =>
      card.id === (newCard as TradeCard).id ? (newCard as TradeCard) : card
    );
  }

  if (eventType === "DELETE") {
    return prev.filter((card) => card.id !== (oldCard as TradeCard).id);
  }

  return prev;
};