"use client";

import { SearchIcon } from "lucide-react";
import { SetStateAction, useEffect, useState } from "react";
import { TradeCard } from "./DashboardClient";

interface SearchInputProps {
  setTradeCards: React.Dispatch<SetStateAction<TradeCard[]>>;
  initialCards: TradeCard[];
}

export default function SearchInput({ setTradeCards, initialCards }: SearchInputProps) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    setTradeCards(() =>
      initialCards.filter((card) =>
        card.pair.toLowerCase().includes(search.toLowerCase()) ||
        card.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()))
      )
    );
  }, [search, setTradeCards, initialCards]);

  return (
    <div className="input-field relative">
      <SearchIcon className="w-5 h-5 text-gray-300 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        className="w-full pl-10 pr-2 py-2 border border-gray-200 rounded-lg"
        type="text"
        placeholder="Search trades by pair or tags"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}